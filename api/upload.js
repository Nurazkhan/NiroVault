import { handleUpload } from '@vercel/blob/client';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const json = await handleUpload({
            body: req.body,
            request: req,
            onBeforeGenerateToken: async (pathname, clientPayload) => {
                if (process.env.NIROVAULT_ACCESS_KEY) {
                    const payload = clientPayload ? JSON.parse(clientPayload) : {};
                    if (payload.accessKey !== process.env.NIROVAULT_ACCESS_KEY) {
                        throw new Error('Invalid or missing NiroVault access key.');
                    }
                }

                return {
                    tokenPayload: JSON.stringify({ pathname })
                };
            },
            onUploadCompleted: async () => {}
        });

        res.status(200).json(json);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Upload failed' });
    }
}
