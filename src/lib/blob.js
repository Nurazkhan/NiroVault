import { upload } from '@vercel/blob/client';
import { getAccessKey } from './apiClient';

function safeSegment(value) {
    return String(value || 'file')
        .replace(/[^a-zA-Z0-9._-]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'file';
}

export async function uploadFile(file, pathname) {
    const blob = await upload(pathname, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
        clientPayload: JSON.stringify({
            accessKey: getAccessKey()
        })
    });

    return blob.url;
}

export function createBlobPath(...parts) {
    return parts.map(safeSegment).join('/');
}
