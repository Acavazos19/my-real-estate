import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/LoginCss.css';

const Login = ({ setUser, setLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch("/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: formData.email,
        //         password: formData.password
        //     })
        // })
        // .then(r => {
        //     if (r.ok) {
        //         r.json()
        //         .then(user => {
        //             <Redirect push to="/" />
        //         });
        //     }
        // });
        setUser({
            ...formData,
            id: 16,
        });
        setLoggedIn(true);
        // <Redirect push to="/" />
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleClick = () => {
        setUser({
            ...formData,
            id: 16,
        });
        setLoggedIn(true);
    }

    return (
        <div className="root">
            <h2 className="login-title">Login</h2>
            <div className="form">
                <form className="form-info" onSubmit={handleSubmit}>
                    <div>
                        <h4>Email</h4>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>Don't have an accout? <Link to="/signup">Sign Up</Link></p>
                    <Button onClick={handleClick}>
                        <Link to="/profile">
                            SUBMIt
                        </Link>
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login;
