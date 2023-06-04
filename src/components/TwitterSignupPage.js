import React, { useState } from 'react';
import './TwitterSignupPage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const TwitterSignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
    };

    const handleSignup = () => {
        // Perform signup logic here
        console.log('Signing up with email:', email);
        console.log('Signing up with password:', password);
        console.log('Profile picture:', profilePicture);
    };

    return (
        <div className="twitter-signup-page">
            <div className="twitter-signup-container">
                <div className="twitter-signup-form">
                    <div className="twitter-signup-logo"></div>
                    <h2 className="twitter-signup-title">Create your account</h2>
                    <form>
                        <div className="twitter-signup-input">
                            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
                        </div>
                        <div className="twitter-signup-input">
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
                        </div>
                        <div className="twitter-signup-input">
                            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                        </div>
                        {profilePicture && (
                            <div className="twitter-signup-preview">
                                <img src={profilePicture} alt="Profile" />
                            </div>
                        )}
                        <button type="button" className="twitter-signup-button" onClick={handleSignup}>Sign up</button>
                    </form>
                    <div className="twitter-login-links">
                        {/* <a href="#">Forgot password?</a> */}
                        {/* <span> · </span> */}
                        {/* <a href="#">Login</a> */}
                        <Link to="/">Back to Login Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwitterSignupPage;
