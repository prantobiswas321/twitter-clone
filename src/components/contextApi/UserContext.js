import React, { useContext, createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // const login = async (username, password) => {
    //     try {
    //         // Perform login logic and retrieve user information
    //         const userData = await performLogin(username, password);
    //         setUser(userData);
    //     } catch (error) {
    //         console.error('Login failed', error);
    //     }
    // };

    const login = async (email, password) => {
        try {
            const response = await axios.post(`http://localhost:8081/login`, {
                username: email,
                password: password,
            });

            // Assuming the server responds with user information
            const userData = response.data;
            console.log("userdata", userData);
            setUser(userData);
            setIsLoggedIn(true);
            localStorage.setItem("token", userData?.id);
            navigate("/");
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("token");
        navigate("/login");
    };

    // const performLogin = async (username, password) => {
    //     // Make the API request to login and retrieve user information
    //     // You can use Axios or any other library of your choice
    //     // Example:
    //     // const response = await axios.post('/api/login', { username, password });
    //     // return response.data;
    //     return new Promise((resolve, reject) => {
    //         // Simulating asynchronous login
    //         setTimeout(() => {
    //             const userData = {
    //                 id: 1,
    //                 username: 'exampleUser',
    //                 name: 'John Doe',
    //             };
    //             resolve(userData);
    //         }, 1000);
    //     });
    // };

    const userContextValue = {
        isLoggedIn,
        user,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};
