import React, { useState } from 'react';
import { Container } from '@mui/material';
import '../styles/SignupCss.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('[+]', formData);
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                // password_digest: formData.confirm_password,
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
        console.log(value);
    };

    return (
        <Container>
            <div className="root">
                <h2 className="login-title">Sign Up</h2>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4>Email</h4>
                        <input
                            type="text"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}    
                        />
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input 
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <h4>Confirm Password</h4>
                        <input
                            type="password"
                            value={formData.confirm_password}
                            name="confirm_password"
                            onChange={handleChange}
                        />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </Container>
    )
};

export default Signup;
