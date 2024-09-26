import React from 'react';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h4">Welcome To Kata-Library Management System</Typography>
        </div>
    );
};

export default Home;
