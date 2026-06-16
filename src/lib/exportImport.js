import { apiRequest } from './apiClient';

const EXPORT_VERSION = '1.0';

export async function exportAllData(onProgress) {
    onProgress?.({ step: 'export', detail: 'Exporting data from Vercel storage...' });
    const { data } = await apiRequest({ action: 'export' });
    onProgress?.({ step: 'done', detail: 'Export complete!' });
    return data;
}

export function downloadExportFile(data) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = `NiroVault_Backup_${dateStr}.nirovault.json`;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export function readImportFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                if (!data._exportVersion) {
                    reject(new Error('Invalid NiroVault backup file: missing export version.'));
                    return;
                }
                resolve(data);
            } catch (e) {
                reject(new Error('Failed to parse backup file. Make sure it is a valid .nirovault.json file.'));
            }
        };
        reader.onerror = () => reject(new Error('Failed to read file.'));
        reader.readAsText(file);
    });
}

export async function importAllData(data, onProgress) {
    if (!data?._exportVersion || data._exportVersion !== EXPORT_VERSION) {
        throw new Error('Unsupported NiroVault backup version.');
    }

    onProgress?.({ step: 'import', detail: 'Importing backup into Vercel database...' });
    await apiRequest({ action: 'import', data });
    onProgress?.({ step: 'done', detail: 'Import complete!' });
}
