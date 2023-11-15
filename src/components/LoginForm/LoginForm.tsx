import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { saveCredentials, getCredentials } from '../../utils/AuthUtils';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, CssBaseline, Paper } from '@mui/material';

interface LoginFormProps {
    onLogin: () => void;
}

interface FormData {
    username: string;
    password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const { register, handleSubmit, setError, formState } = useForm<FormData>();
    const [isRegistration, setIsRegistration] = useState<boolean>(!getCredentials());
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (isRegistration) {
            saveCredentials(data);
            setIsRegistration(false);
            onLogin();
            navigate('/');
        } else {
            const storedCredentials = getCredentials();
            if (storedCredentials && storedCredentials.username === data.username && storedCredentials.password === data.password) {
                onLogin();
                navigate('/');
            } else {
                setError('password', { type: 'manual', message: 'Invalid credentials' });
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    {isRegistration ? 'Register' : 'Login'}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: '16px' }}>
                    <TextField
                        {...register('username', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Email"
                        autoFocus
                    />
                    <TextField
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            validate: (value) => isRegistration || !!value || 'Password is required',
                        })}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Password"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        LogIn or Create Account
                    </Button>
                    {formState.errors.username && <Typography color="error">{formState.errors.username.message}</Typography>}
                    {formState.errors.password && <Typography color="error">{formState.errors.password.message}</Typography>}
                </form>
            </Paper>
        </Container>
    );
};

export default LoginForm;
