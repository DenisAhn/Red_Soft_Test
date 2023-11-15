import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, clearCredentials } from '../../utils/AuthUtils.ts';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink, Box } from '@mui/material';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        clearCredentials();
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Test
                </Typography>
                <Box>
                    <MuiLink component={Link} to="/" color="inherit" sx={{ marginRight: '15px' }}>
                        Home
                    </MuiLink>
                    <MuiLink component={Link} to="/browse" color="inherit" sx={{ marginRight: '15px' }}>
                        Browse
                    </MuiLink>
                    {isAuthenticated() ? (
                        <Button onClick={handleLogout} color="inherit">
                            Logout
                        </Button>
                    ) : (
                        <MuiLink component={Link} to="/login" color="inherit">
                            Login
                        </MuiLink>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
