import React from 'react';
import { useNavigate } from 'react-router';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1> Welcome to PawPal</h1>
                <div>
                    <button onClick={() => navigate('/register')}>Register</button>
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>

        </>
    )
}

export default Landing;