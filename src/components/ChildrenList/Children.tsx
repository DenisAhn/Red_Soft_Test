import * as React from 'react';
import TreeNode from '../../types/TreeNode';
import { Box, Card, TextField, Typography, Button } from '@mui/material';

interface DetailsProps {
    selectedNode: TreeNode | null;
}

const Children: React.FC<DetailsProps> = ({ selectedNode }) => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filteredChildren, setFilteredChildren] = React.useState<TreeNode[]>([]);
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

    React.useEffect(() => {
        if (selectedNode) {
            const sortedChildren = selectedNode.children
                ? [...selectedNode.children].sort((a, b) =>
                    sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                )
                : [];
            setFilteredChildren(
                sortedChildren.filter((child) => child.name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
    }, [selectedNode, searchTerm, sortDirection]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSortClick = () => {
        setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <Card sx={{ marginTop: '16px', marginLeft: '16px', border: '4' }}>
            <Box>
                <Box sx={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4">Children List</Typography>
                    <Button onClick={handleSortClick} sx={{ marginLeft: '8px' }}>
                        Sort by Name {sortDirection === 'asc' ? '↑' : '↓'}
                    </Button>
                </Box>

                <Box sx={{ marginLeft: '8px', marginTop: '4px' }}>
                    <TextField id="search" label="Search by Name" value={searchTerm} onChange={handleSearchChange} />
                </Box>
                {selectedNode ? (
                    <Box sx={{ marginLeft: '8px', marginTop: '4px' }}>
                        <Typography variant="h5">Parent Name: {selectedNode.name}</Typography>
                        {filteredChildren.length > 0 ? (
                            <ul>
                                {filteredChildren.map((child) => (
                                    <li key={child.key}>{child.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <Typography sx={{ marginLeft: '8px', marginTop: '4px' }}>No matching children found.</Typography>
                        )}
                    </Box>
                ) : (
                    <Typography sx={{ marginLeft: '8px', marginTop: '4px' }}>Select a node to view children</Typography>
                )}
            </Box>
        </Card>
    );
};

export default Children;
