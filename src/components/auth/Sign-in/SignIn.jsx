import React, { useState } from 'react';
import './sign-in.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../../assets/images/mainLogo.png'
import messageIcon from '../../../assets/images/messageIcon.png'
import eye2 from '../../../assets/images/eye2.png'

const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showForgetText, setShowForgetText] = useState(false);

    const logInFunction = (e) => {
        e.preventDefault();
        postLogInData();
        setEmail("");
        setPassword("");
    };

    const userData = {
        email: email,
        password: password
    };

    const postLogInData = async () => {
        try {
            const response = await fetch('http://localhost:8080/signin', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log(data);
            if (data.token && data.userId) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Sign In',
                    showConfirmButton: false,
                    timer: 2000,
                });
                navigate('/');
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Login Failed',
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } catch (error) {
            console.log(error, 'Error');
        }
    };

    const showPasswordFunction = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='signUpBackGroundImage'></div>

            <div className='container-fluid' style={{ position: "absolute", top: "0" }}>
                <div className='row'>
                    <div className='col-lg-8 d-none d-lg-block'></div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <img src={logo} alt='logo' className='signUpImageLogoAgain' />
                        <div className='container' style={{ marginTop: "40px" }}>
                            <div className='row'>
                                <div className='col-12'>
                                </div>
                            </div>
                        </div>
                        <div className='container' style={{ background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.25", borderRadius: "10px" }}>
                            <div className='row'>
                                <div className='col-12'>
                                    <div style={{ height: "500px" }}>
                                        <div className='pattiA'>
                                            <div className='patti1A' style={{ backgroundColor: "" }}><p style={{ marginLeft: "5%", marginTop: "10%" }} className='pSignUpAgain'>Sign in now</p></div>
                                            <div className='patti2A'></div>
                                        </div>
                                        <form onSubmit={logInFunction} autoComplete="off">
                                            <div className="mt-3">
                                                <div style={{ width: "80%", marginLeft: "10%" }}>
                                                    <label className="form-label productTitleForm" style={{ color: "#26A5B9" }}>E-mail</label>
                                                    <input type="email" className="form-control borderBottom" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="new-email" name='email' />
                                                    <img src={messageIcon} style={{ position: "relative", left: "90%", bottom: "35px" }} alt="emailIcon" />
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div style={{ width: "80%", marginLeft: "10%" }}>
                                                    <label className="form-label productTitleForm" style={{ color: "#26A5B9" }}>Password</label>
                                                    <input type={showPassword ? "text" : "password"} className="form-control borderBottom" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" onFocus={() => setShowForgetText(!showForgetText)} name='password' />
                                                    <img src={eye2} style={{ display: showForgetText ? 'block' : 'none', position: "relative", left: "83%", bottom: "28px" }} alt="eyeIcon" onClick={showPasswordFunction} />
                                                </div>
                                            </div>
                                            <div style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
                                                <button type="submit" className="btn" style={{ backgroundColor: "#26A5B9", color: " white" }}>Sign in</button>
                                            </div>
                                            <div className='lastSignInDiv'>
                                                <div className="lastSignInDivA">
                                                    <p>Create Account?</p>
                                                </div>
                                                <div className="lastSignInDivB">
                                                    <p><Link to="/SignUp" style={{ textDecoration: "none" }}> Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
