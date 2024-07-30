import React, { useState } from 'react';
import './sign-up.css';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/images/mainLogo.png';
import messageIcon from '../../../assets/images/messageIcon.png';
import eye2 from '../../../assets/images/eye2.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  let userData;
  function submitSignUp(e) {
    e.preventDefault();
    if (password.length < 3) {
      alert("Password should consist of at least 3 letters!");
    } else {
      userData = {
        name: name,
        email: email,
        password: password
      };

      postFormData();
      navigate('/SignIn');

      setName("");
      setEmail("");
      setPassword("");
    }
  }

  function showPasswordFunction() {
    setShowPassword(!showPassword);
  }


  async function postFormData() {
    const response = await fetch('http://localhost:8080/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    // console.log(data);
  }

  return (
    <>
      <div className='signUpBackGroundImage'></div>

      <div className='container-fluid' style={{ backgroundColor: "", position: "absolute", top: "0" }}>
        <div className='row'>
          <div className='col-lg-8 col-md-0 col-sm-0 d-none d-lg-block d-md-block' style={{ backgroundColor: "" }}></div>

          <div className='col-lg-4 col-md-12 col-sm-12' style={{ backgroundColor: "" }}>
            <img src={logo} alt='logo' className='signUpImageLogoAgain' />

            <div className='container' style={{ backgroundColor: "", marginLeft: "", marginTop: "40px" }}>
              <div className='row'>
                <div className='col-12'>
                  <p className='welcomeToAgain'>Welcome to</p>
                </div>
              </div>
            </div>

            <div className='row' style={{ backgroundColor: "" }}>
              <div className='col-12'>
                <p className='welcomeToAgain welcomeToAgain2'>Online Buy and Sell Store</p>
              </div>
            </div>

            <div className='container' style={{
              backgroundColor: "", marginTop: "", marginLeft: "", background: " #FFFFFF ",
              border: "1px solid rgba(0, 0, 0, 0.25",
              borderRadius: "10px"
            }}>
              <div className='row' style={{ backgroundColor: "" }}>
                <div className='col-lg-12 col-md-12 col-sm-12' style={{ backgroundColor: "", padding: "0" }}>

                  <div style={{ height: "500px", backgroundColor: "" }}>

                    <div className='pattiA'>
                      <div className='patti1A' style={{ backgroundColor: "" }}><p style={{ marginLeft: "5%", marginTop: "10%" }} className='pSignUpAgain'>Sign Up now</p></div>
                      <div className='patti2A'></div>
                    </div>

                    <form onSubmit={submitSignUp} autoComplete="off">
                      <div className="mt-3">

                        <div style={{ width: "80%", height: "10%", marginLeft: "10%", backgroundColor: "" }}>

                          <div className="row">

                            <div className="col">
                              <label className="form-label productTitleForm" htmlFor="userNameId" style={{ color: "#26A5B9" }}>Name</label>
                              <input type="text" className="form-control" required aria-label="Last name"
                                value={name} onChange={(e) => setName(e.target.value)}
                                id="userNameId" autoComplete="off" name='name' />
                            </div>
                          </div>

                        </div>

                      </div>

                      <div className="mt-3">
                        <div style={{ width: "80%", height: "10%", marginLeft: "10%", backgroundColor: "" }}>
                          <label htmlFor="exampleInputEmail1" className="form-label productTitleForm" style={{ color: "#26A5B9" }}>E-mail</label>
                          <input type="email" className="form-control borderBottom" required id="exampleInputEmail1"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off" name='email' />
                          <img src={messageIcon} style={{ position: "relative", left: "90%", bottom: "35px" }} alt="emailIcon" />
                        </div>
                      </div>

                      <div className="mt-3">
                        <div style={{ width: "80%", height: "10%", marginLeft: "10%", backgroundColor: "" }}>
                          <label htmlFor="exampleInputPassword1" className="form-label productTitleForm" style={{ color: "#26A5B9" }}>Password</label>
                          <input type={showPassword ? 'text' : 'password'} className="form-control borderBottom" id="exampleInputPassword1" required
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password" name='password' />
                          <img src={eye2} style={{ position: "relative", left: "90%", bottom: "35px" }} alt="emailIcon" onClick={showPasswordFunction} />
                        </div>
                      </div>

                      <div className="mt-3">
                        <div style={{ width: "80%", height: "10%", marginLeft: "10%", backgroundColor: "" }}>

                          <div style={{ marginTop: "", display: "flex", backgroundColor: "", justifyContent: "center" }}>
                            <button type="submit" className="btn" style={{ backgroundColor: "#26A5B9", color: "white" }}>Sign up</button>
                          </div>
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
}

export default SignUp;
