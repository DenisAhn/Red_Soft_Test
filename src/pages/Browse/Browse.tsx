import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Tree from '../../components/Tree';
import Children from '../../components/ChildrenList/Children';
import { CssBaseline, Container, Grid } from '@mui/material';
import { MOCK_DATA } from '../MOCK/MOCK_DATA';
import { findNodeByKey } from '../../utils/FindNode';
import { isAuthenticated } from '../../utils/AuthUtils';
import TreeNode from "../../types/TreeNode";

const Browse: React.FC = () => {
    const navigate = useNavigate();
    const [selectedNode, setSelectedNode] = React.useState<TreeNode | null>(null);

    React.useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    const handleNodeSelect = (selectedNodeKey: string | null) => {
        const selectedNode = findNodeByKey(MOCK_DATA, selectedNodeKey);
        setSelectedNode(selectedNode);
    };

    return (
        <CssBaseline>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Tree data={MOCK_DATA} onSelect={handleNodeSelect} />
                    </Grid>
                    <Grid item xs={8}>
                        <Children selectedNode={selectedNode} />
                    </Grid>
                </Grid>
            </Container>
        </CssBaseline>
    );
};

export default Browse;
