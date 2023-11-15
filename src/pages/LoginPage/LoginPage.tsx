import * as React from 'react';
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import {Typography} from "@mui/material";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    };

    return (
        <React.Fragment>
            <Typography component={'div'} sx={{marginTop: "24px"}}>
                <LoginForm onLogin={handleLogin} />
            </Typography>
        </React.Fragment>
    );
};

export default LoginPage;
