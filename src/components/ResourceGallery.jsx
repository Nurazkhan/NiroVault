import { useState } from 'react';
import { useStore } from '../lib/store';
import { Image, Video, Trash2, X, Maximize2, Plus, Download } from 'lucide-react';
import './styles/ResourceGallery.css';

function ResourceGallery({ resources, onAdd, type = 'image' }) {
    const { deleteResource } = useStore();
    const [lightboxResource, setLightboxResource] = useState(null);

    const getResourceUrl = (resource) => {
        if (resource.data) {
            return URL.createObjectURL(resource.data);
        }
        return resource.url || '';
    };

    const isVideo = (resource) => {
        return resource.type === 'video' ||
            (resource.metadata?.mimeType && resource.metadata.mimeType.startsWith('video/'));
    };

    const handleDownload = (resource) => {
        const url = getResourceUrl(resource);
        const a = document.createElement('a');
        a.href = url;
        a.download = resource.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    if (resources.length === 0) {
        return (
            <div className="gallery-empty">
                <Image size={48} />
                <h3>No {type === 'schematic' ? 'schematics' : 'media'} yet</h3>
                <p>Add images, videos, or schematics to this version</p>
                <button className="btn btn-primary" onClick={onAdd}>
                    <Plus size={18} />
                    Add Files
                </button>
            </div>
        );
    }

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {resources.map(resource => (
                    <div key={resource.id} className="gallery-item">
                        <div className="gallery-preview" onClick={() => setLightboxResource(resource)}>
                            {isVideo(resource) ? (
                                <video src={getResourceUrl(resource)} muted />
                            ) : (
                                <img src={getResourceUrl(resource)} alt={resource.name} loading="lazy" />
                            )}

                            <div className="gallery-overlay">
                                {isVideo(resource) && <Video size={24} />}
                                <Maximize2 size={20} />
                            </div>
                        </div>

                        <div className="gallery-info">
                            <span className="gallery-name truncate">{resource.name}</span>
                            <div className="gallery-actions">
                                <button
                                    className="btn btn-icon btn-ghost btn-sm"
                                    onClick={() => handleDownload(resource)}
                                >
                                    <Download size={14} />
                                </button>
                                <button
                                    className="btn btn-icon btn-ghost btn-sm text-error"
                                    onClick={() => deleteResource(resource.id)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button className="gallery-add" onClick={onAdd}>
                    <Plus size={24} />
                    <span>Add More</span>
                </button>
            </div>

            {/* Lightbox */}
            {lightboxResource && (
                <div className="lightbox" onClick={() => setLightboxResource(null)}>
                    <button
                        className="btn btn-icon btn-ghost lightbox-close"
                        onClick={() => setLightboxResource(null)}
                    >
                        <X size={24} />
                    </button>

                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        {isVideo(lightboxResource) ? (
                            <video
                                src={getResourceUrl(lightboxResource)}
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={getResourceUrl(lightboxResource)}
                                alt={lightboxResource.name}
                            />
                        )}

                        <div className="lightbox-info">
                            <span>{lightboxResource.name}</span>
                            <button
                                className="btn btn-sm btn-secondary"
                                onClick={() => handleDownload(lightboxResource)}
                            >
                                <Download size={14} />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResourceGallery;
