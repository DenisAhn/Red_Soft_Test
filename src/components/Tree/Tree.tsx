import * as React from 'react';
import TreeNodeItem from './TreeNodeItem';
import {Box, Card, Typography} from "@mui/material";
import TreeNode from "../../types/TreeNode";


interface TreeProps {
    data: TreeNode[];
    onSelect: (selectedNodeKey: string | null) => void;
}

const Tree: React.FC<TreeProps> = React.memo(({ data, onSelect }) => {
    return (
        <React.Fragment>
            <Card sx={{ marginTop: '16px', marginLeft: '16px' , border: '4'}}>
                <Box sx={{marginTop:'16px'}}>
                    <Typography variant="h4">Parents Tree</Typography>
                </Box>
                <ul>
                    {data.map((node) => (
                        <TreeNodeItem key={node.key} node={node} onSelect={onSelect} />
                    ))}
                </ul>
            </Card>

        </React.Fragment>
    );
});

export default Tree;
