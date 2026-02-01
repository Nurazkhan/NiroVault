import { useMemo } from 'react';
import { GitBranch, GitCommit, Plus } from 'lucide-react';
import './styles/VersionTree.css';

function VersionTree({ versions, currentVersionId, onSelectVersion }) {
    // Build tree structure from flat versions array
    const treeData = useMemo(() => {
        if (!versions.length) return { nodes: [], height: 0, width: 0 };

        // Create a map for quick lookup
        const versionMap = new Map();
        versions.forEach(v => versionMap.set(v.id, { ...v, children: [] }));

        // Build tree by linking children to parents
        const roots = [];
        versions.forEach(v => {
            const node = versionMap.get(v.id);
            if (v.parentVersionId && versionMap.has(v.parentVersionId)) {
                versionMap.get(v.parentVersionId).children.push(node);
            } else {
                roots.push(node);
            }
        });

        // Calculate positions using a simple layout algorithm
        const nodeWidth = 140;
        const nodeHeight = 60;
        const horizontalGap = 20;
        const verticalGap = 40;

        let maxX = 0;
        let maxY = 0;

        const layoutNode = (node, x, y) => {
            node.x = x;
            node.y = y;
            maxX = Math.max(maxX, x + nodeWidth);
            maxY = Math.max(maxY, y + nodeHeight);

            if (node.children.length === 0) {
                return x + nodeWidth + horizontalGap;
            }

            // Layout children
            let childX = x;
            node.children.forEach(child => {
                childX = layoutNode(child, childX, y + nodeHeight + verticalGap);
            });

            // Center parent over children if multiple children
            if (node.children.length > 1) {
                const firstChildX = node.children[0].x;
                const lastChildX = node.children[node.children.length - 1].x;
                node.x = (firstChildX + lastChildX + nodeWidth) / 2 - nodeWidth / 2;
            }

            return childX;
        };

        // Layout all roots side by side
        let startX = 0;
        roots.forEach(root => {
            startX = layoutNode(root, startX, 0);
        });

        // Collect all nodes with their positions
        const collectNodes = (nodes) => {
            let all = [];
            nodes.forEach(node => {
                all.push(node);
                all = [...all, ...collectNodes(node.children)];
            });
            return all;
        };

        return {
            nodes: collectNodes(roots),
            roots,
            height: maxY + 40,
            width: maxX + 40,
            nodeWidth,
            nodeHeight
        };
    }, [versions]);

    // Render connection lines between parent and child nodes
    const renderConnections = () => {
        const lines = [];
        const { nodes, nodeWidth, nodeHeight } = treeData;

        nodes.forEach(node => {
            node.children.forEach(child => {
                const startX = node.x + nodeWidth / 2;
                const startY = node.y + nodeHeight;
                const endX = child.x + nodeWidth / 2;
                const endY = child.y;
                const midY = (startY + endY) / 2;

                // Draw path with a curve
                const path = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;

                lines.push(
                    <path
                        key={`line-${node.id}-${child.id}`}
                        d={path}
                        className="version-connection"
                        fill="none"
                    />
                );
            });
        });

        return lines;
    };

    if (versions.length === 0) {
        return (
            <div className="version-tree-empty">
                <GitBranch size={32} />
                <p>No versions yet</p>
                <span className="text-muted">Create your first version to start tracking changes</span>
            </div>
        );
    }

    const { nodes, height, width, nodeWidth, nodeHeight } = treeData;

    return (
        <div className="version-tree-container">
            <svg
                className="version-tree"
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
            >
                <g transform="translate(20, 20)">
                    {/* Connection lines */}
                    {renderConnections()}

                    {/* Nodes */}
                    {nodes.map(node => (
                        <g
                            key={node.id}
                            className={`version-node ${node.id === currentVersionId ? 'active' : ''}`}
                            transform={`translate(${node.x}, ${node.y})`}
                            onClick={() => onSelectVersion(node.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <rect
                                x="0"
                                y="0"
                                width={nodeWidth}
                                height={nodeHeight}
                                rx="10"
                                className="version-node-bg"
                            />
                            <circle
                                cx="20"
                                cy={nodeHeight / 2}
                                r="8"
                                className="version-dot"
                            />
                            <text
                                x="38"
                                y={nodeHeight / 2 - 6}
                                className="version-name"
                            >
                                {node.name}
                            </text>
                            <text
                                x="38"
                                y={nodeHeight / 2 + 10}
                                className="version-date"
                            >
                                {new Date(node.createdAt).toLocaleDateString()}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}

export default VersionTree;
