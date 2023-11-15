import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import Browse  from "./pages/Browse/Browse";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/browse" element={<Browse />} />
                    </Routes>
                </React.Suspense>
            </Router>
        </React.Fragment>
    );
};

export default App;
