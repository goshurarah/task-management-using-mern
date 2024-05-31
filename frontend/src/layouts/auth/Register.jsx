import React, { useState } from 'react'
import "./register.css"
import register from "../../assets/register/register.png"
import name from "../../assets/register/name.png"
import email from "../../assets/register/email.png"
import password from "../../assets/register/password.png"
import cpassword from "../../assets/register/cpassword.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useToast, Spinner } from '@chakra-ui/react';

function Register() {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response=await axios.post('api/register', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            let Message = response.data.message
            toast({
                title: Message,
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        } catch (error) {
            let Error = error.response.data.message
            toast({
                title: Error,
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        }
    };
    return (
        <>
            <div className='register-main-container'>
                <div className='register-container'>
                    <div className='register-left-container'>
                        <img className='register-img' src={register} alt="register" />
                    </div>
                    <div className='register-right-container'>
                        <p className='signup-text'>Sign Up</p>
                        <form onSubmit={handleSubmit}>
                            <div className='input-main-container'>
                                <img className='input-icon' src={name} alt="input" />
                                <input
                                    placeholder='First Name *'
                                    type='text'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='input-main-container'>
                                <img className='input-icon' src={name} alt="input" />
                                <input
                                    placeholder='Last Name *'
                                    type='text'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='input-main-container'>
                                <img className='input-icon' src={email} alt="input" />
                                <input
                                    placeholder='Email *'
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='input-main-container'>
                                <img className='input-icon' src={password} alt="input" />
                                <input
                                    placeholder='Password *'
                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='input-main-container'>
                                <img className='input-icon' src={cpassword} alt="input" />
                                <input
                                    placeholder='Confirm Password *'
                                    type='password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type='submit' className='register-btn'><p>{loading ? <Spinner color='white' /> : 'Register'}</p></button>
                        </form>
                        <p className='account-text'>Already have an account? <Link to='/'><span>Sign In</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register