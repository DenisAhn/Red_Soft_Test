import * as React from 'react';
import Typography from '@mui/material/Typography';
import TreeNode from "../../../types/TreeNode";

interface TreeNodeItemProps {
    node: TreeNode;
    onSelect: (key: string) => void;
}

const TreeNodeItem: React.FC<TreeNodeItemProps> = ({ node, onSelect }) => {
    const handleNodeClick = () => {
        onSelect(node.key);
    };

    return (
        <React.Fragment>
            <li key={node.key}>
                <Typography
                    onClick={handleNodeClick}
                    style={{ cursor: 'pointer', color: '#2484c0' }}
                >
                    {node.name}
                </Typography>
                {node.children && node.children.length > 0 && (
                    <ul>
                        {node.children.map((child) => (
                            <TreeNodeItem key={child.key} node={child} onSelect={onSelect} />
                        ))}
                    </ul>
                )}
            </li>
        </React.Fragment>
    );
};

export default TreeNodeItem;
