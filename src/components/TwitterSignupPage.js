import React, { useState } from 'react';
import './TwitterSignupPage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import axios from "axios";
import post from '../helpers/post';

const TwitterSignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [singedUp, setSignedUp] = useState(null);

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = (e) => {

        e.preventDefault();
        const subData = {
            username: email,
            password: password,
            fullName: fullName
        }

        // Perform signup logic here
        console.log('Signing up with full name:', fullName);
        console.log('Signing up with email:', email);
        console.log('Signing up with password:', password);

        post("signUp", subData).then(res => {
            setSignedUp(res?.data?.id);
            setFullName('');
            setEmail('');
            setPassword('');
        })



    };

    return (
        <div className="twitter-signup-page">
            <div className="twitter-signup-container">
                <div className="twitter-signup-form">
                    <div className="twitter-signup-logo"></div>
                    <h2 className="twitter-signup-title">Create your account</h2>
                    <form>
                        <div className="twitter-signup-input">
                            <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full Name" required />
                        </div>
                        <div className="twitter-signup-input">
                            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                        </div>
                        <div className="twitter-signup-input">
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                        </div>
                        <button type="button" className="twitter-signup-button" onClick={handleSignup}>Sign up</button>
                        {
                            singedUp !== null ?
                                <div style={{ color: "green", marginTop: "13px", textAlign: "center" }}>Congratulations! <br /> You are successfully signed up!</div>
                                : ""
                        }
                    </form>
                    <div className="twitter-login-links">
                        <Link to="/">Back to Login Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwitterSignupPage;
