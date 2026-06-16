import { neon } from '@neondatabase/serverless';
import { randomUUID } from 'node:crypto';

let sqlClient;
let ready;

function getSql() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not configured. Add a Neon database from the Vercel Marketplace.');
    }

    if (!sqlClient) {
        sqlClient = neon(process.env.DATABASE_URL);
    }

    return sqlClient;
}

export async function ensureSchema() {
    if (!ready) {
        const sql = getSql();
        ready = sql`
            CREATE TABLE IF NOT EXISTS nirovault_records (
                id TEXT PRIMARY KEY,
                user_id TEXT NOT NULL,
                type TEXT NOT NULL,
                parent_project_id TEXT,
                parent_version_id TEXT,
                data JSONB NOT NULL DEFAULT '{}'::jsonb,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `.then(async () => {
            await sql`
                CREATE INDEX IF NOT EXISTS nirovault_records_lookup
                ON nirovault_records (user_id, type, parent_project_id, parent_version_id, updated_at DESC)
            `;
        });
    }

    return ready;
}

export function getUserId(req) {
    if (process.env.NIROVAULT_ACCESS_KEY) {
        const provided = req.headers['x-nirovault-access-key'];
        if (provided !== process.env.NIROVAULT_ACCESS_KEY) {
            const error = new Error('Invalid or missing NiroVault access key.');
            error.statusCode = 401;
            throw error;
        }
    }

    return process.env.NIROVAULT_USER_ID || 'default';
}

export function newId() {
    return randomUUID();
}

export function normalizeRecord(row) {
    return {
        id: row.id,
        ...row.data,
        createdAt: row.data?.createdAt || row.created_at,
        updatedAt: row.data?.updatedAt || row.updated_at
    };
}

export async function listRecords({ userId, type, parentProjectId = null, parentVersionId = null, orderBy = 'createdAt', direction = 'desc' }) {
    await ensureSchema();
    const sql = getSql();
    const rows = await sql`
        SELECT id, data, created_at, updated_at
        FROM nirovault_records
        WHERE user_id = ${userId}
          AND type = ${type}
          AND parent_project_id IS NOT DISTINCT FROM ${parentProjectId}
          AND parent_version_id IS NOT DISTINCT FROM ${parentVersionId}
    `;

    const sorted = rows.map(normalizeRecord).sort((a, b) => {
        const av = a[orderBy] || '';
        const bv = b[orderBy] || '';
        const result = String(av).localeCompare(String(bv));
        return direction === 'asc' ? result : -result;
    });

    return sorted;
}

export async function getRecord({ userId, type, id }) {
    await ensureSchema();
    const sql = getSql();
    const rows = await sql`
        SELECT id, data, created_at, updated_at
        FROM nirovault_records
        WHERE user_id = ${userId} AND type = ${type} AND id = ${id}
        LIMIT 1
    `;

    return rows[0] ? normalizeRecord(rows[0]) : null;
}

export async function createRecord({ userId, type, data, parentProjectId = null, parentVersionId = null, id = newId() }) {
    await ensureSchema();
    const sql = getSql();
    const now = new Date().toISOString();
    const document = {
        ...data,
        createdAt: data.createdAt || now,
        updatedAt: data.updatedAt || now
    };

    await sql`
        INSERT INTO nirovault_records (id, user_id, type, parent_project_id, parent_version_id, data)
        VALUES (${id}, ${userId}, ${type}, ${parentProjectId}, ${parentVersionId}, ${JSON.stringify(document)}::jsonb)
    `;

    return { id, ...document };
}

export async function updateRecord({ userId, type, id, data }) {
    await ensureSchema();
    const sql = getSql();
    const patch = {
        ...data,
        updatedAt: data.updatedAt || new Date().toISOString()
    };

    const rows = await sql`
        UPDATE nirovault_records
        SET data = data || ${JSON.stringify(patch)}::jsonb,
            updated_at = NOW()
        WHERE user_id = ${userId} AND type = ${type} AND id = ${id}
        RETURNING id, data, created_at, updated_at
    `;

    if (!rows[0]) {
        const error = new Error('Record not found');
        error.statusCode = 404;
        throw error;
    }

    return normalizeRecord(rows[0]);
}

export async function deleteRecord({ userId, type, id, cascade = false }) {
    await ensureSchema();
    const sql = getSql();

    if (cascade && type === 'project') {
        await sql`
            DELETE FROM nirovault_records
            WHERE user_id = ${userId}
              AND (
                id = ${id}
                OR parent_project_id = ${id}
              )
        `;
        return;
    }

    if (cascade && type === 'version') {
        await sql`
            DELETE FROM nirovault_records
            WHERE user_id = ${userId}
              AND (
                id = ${id}
                OR parent_version_id = ${id}
              )
        `;
        return;
    }

    await sql`
        DELETE FROM nirovault_records
        WHERE user_id = ${userId} AND type = ${type} AND id = ${id}
    `;
}

export async function clearUserRecords(userId) {
    await ensureSchema();
    const sql = getSql();
    await sql`DELETE FROM nirovault_records WHERE user_id = ${userId}`;
}
