import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ViewBooks from './pages/ViewBooks';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view" element={<ViewBooks />} />
            </Routes>
        </>
    );
};

export default App;
