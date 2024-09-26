import React from 'react';
import AddBook from '../components/AddBook';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome To Kata-Library Management System</h1>
            <AddBook />
        </div>
    );
};

export default Home;