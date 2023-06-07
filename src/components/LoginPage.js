import React, { useState } from 'react';
import './TwitterLoginPage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import { useUser } from './contextApi/UserContext';

const TwitterLoginPage = () => {

    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="twitter-login-page">
            <div className="twitter-login-container">
                <div className="twitter-login-form">
                    <div className="twitter-login-logo"></div>
                    <h2 className="twitter-login-title">Log in to Twitter</h2>
                    <form>
                        <div className="twitter-login-input">
                            <input type="text" value={email} onChange={handleEmailChange} placeholder="Username or Email" />
                        </div>
                        <div className="twitter-login-input">
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                        </div>
                        <button type="button" className="twitter-login-button" onClick={handleLogin}>Log in</button>
                    </form>
                    <div className="twitter-login-links">
                        {/* <a href="#">Forgot password?</a> */}
                        {/* <span> · </span> */}
                        {/* <a href="#">Sign up for Twitter</a> */}
                        <Link to="/signup">Sign up for Twitter</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwitterLoginPage;
