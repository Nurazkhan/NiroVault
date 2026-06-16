# NiroVault Vercel Migration

Firebase has been removed from the app. The replacement stack is:

- Vercel Serverless Functions in `api/`
- Neon Postgres through Vercel Marketplace for Firestore-style JSON records
- Vercel Blob for uploaded images, firmware, and other files

## Required Vercel Environment Variables

Set these in Vercel, then run `vercel env pull .env.local` locally:

```bash
DATABASE_URL=...
BLOB_READ_WRITE_TOKEN=...
```

Optional single-user protection:

```bash
NIROVAULT_ACCESS_KEY=make-a-long-random-secret
VITE_NIROVAULT_ACCESS_KEY=make-a-long-random-secret
NIROVAULT_USER_ID=default
VITE_NIROVAULT_USER_NAME="NiroVault User"
VITE_NIROVAULT_USER_EMAIL="you@example.com"
```

Use the same access key value for `NIROVAULT_ACCESS_KEY` and `VITE_NIROVAULT_ACCESS_KEY`.

## Restoring Existing Firestore Data

The repo contains `NiroVault_Backup_2026-03-16.nirovault.json`. In the app:

1. Open `Export / Import`.
2. Choose `Import Data`.
3. Select `NiroVault_Backup_2026-03-16.nirovault.json`.
4. Click `Import All Data`.

This restores the exported Firestore document data into Neon. Existing Firebase Storage URLs inside the backup are preserved as links. If Firebase Storage is unavailable because the Firebase account is suspended, those old file/image links may not load, but the project, version, task, note, and metadata records can still be restored from the JSON backup.
