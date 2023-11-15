export const saveCredentials = (credentials: { username: string; password: string }) => {
    localStorage.setItem('credentials', JSON.stringify(credentials));
};

export const getCredentials = () => {
    const storedCredentials = localStorage.getItem('credentials');
    return storedCredentials ? JSON.parse(storedCredentials) : null;
};

export const clearCredentials = () => {
    localStorage.removeItem('credentials');
};

export const isAuthenticated = () => {
    return !!getCredentials();
};
