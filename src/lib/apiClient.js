const accessKey = import.meta.env.VITE_NIROVAULT_ACCESS_KEY || '';

export async function apiRequest(payload) {
    const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(accessKey ? { 'x-nirovault-access-key': accessKey } : {})
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(result.error || 'NiroVault API request failed');
    }

    return result;
}

export function getAccessKey() {
    return accessKey;
}
