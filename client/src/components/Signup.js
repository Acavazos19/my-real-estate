import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import '../styles/SignupCss.css';
import { Link } from 'react-router-dom';

const Signup = ({ setUser, setLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(user => {
                    console.log('[+]', user);
                })
            } else {
                r.json()
                .then(err => console.log(err));
            }
        });

    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClick = () => {
        setUser({
            id: 16,
            ...formData,
        });
        setLoggedIn(true);
    };

    return (
        <Container>
            <div className="root">
                <h2 className="login-title">Sign Up</h2>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4 className="input-label">Email</h4>
                        <input
                            type="text"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}    
                        />
                    </div>
                    <div>
                        <h4 className="input-label">Password</h4>
                        <input 
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <h4 className="input-label">Confirm Password</h4>
                        <input
                            type="password"
                            value={formData.confirm_password}
                            name="confirm_password"
                            onChange={handleChange}
                        />
                        </div>
                        <Button onClick={handleClick}>
                            <Link to="/inventory">SUBMIT</Link>
                        </Button>
                    </form>
                </div>
            </div>
        </Container>
    )
};

export default Signup;
