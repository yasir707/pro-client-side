import React, { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

import mainLogo from '../../../assets/images/mainLogo.png'
import messageIcon2 from '../../../assets/images/messageIcon.png'
import people from '../../../assets/images/people.png'
import download from '../../../assets/images/download.png'
import { Link } from 'react-router-dom';

const NavbarReal = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState([]);
  const [writeText, setWriteText] = useState("");
  const [writeText2, setWriteText2] = useState("");
  const [searchItems, setSearchItems] = useState("");
  const userId = localStorage.getItem('userId')


  function handleInputChange(e) {
    setSearchText(e.target.value);
  }


  function isLoggedIn() {
    const userId = localStorage.getItem('userId');
    return userId;
  }

  function handleClickProfile(e) {
    e.preventDefault();

    if (isLoggedIn()) {
      navigate('/UserProfile');
    } else {
      navigate('/SignIn');
    }
  }



  function handleClickProducts(e) {
    e.preventDefault();

    if (isLoggedIn()) {
      navigate('/SeeYourPosts');
    } else {
      navigate('/SignIn');
    }
  }

  function handleClickSell(e) {
    e.preventDefault();

    if (isLoggedIn()) {
      navigate('/AddProduct');
    } else {
      navigate('/SignIn');
    }
  }


  function logOut() {
    localStorage.removeItem('userId')
    navigate('/SignIn')
  }


  return (
    <>
      <nav class="navbar navbar-expand-xl navbar-light " style={{ backgroundColor: "#26A5B9" }}>
        <div class="container-fluid" style={{ backgroundColor: "" }}>

          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "" }}>
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarTogglerDemo01" style={{ backgroundColor: "" }}>
            <div class="d-flex align-items-center justify-content-center">
              <Link to="/"><img src={mainLogo} style={{ width: "", height: "", marginLeft: "2%", backgroundColor: "" }} alt="logo" class="navbar-brand " href="#" /></Link>
            </div>
            <form class="d-flex align-items-center" style={{ backgroundColor: "", width: "100%", height: "60px" }}>
              <div class="input-group" style={{ backgroundColor: "", display: "flex", flexWrap: "wrap", flexBasis: "50%", marginLeft: "32%" }}>
                <input
                  className="form-control me-2 place1"
                  style={{ flexBasis: "100%", width: "100%", height: "60%", background: "", borderRadius: "5px" }}
                  type="search"
                  placeholder="Search"
                  value={searchText}
                  onChange={handleInputChange}
                  aria-label="Search"
                />

              </div>

            </form>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-navCustom" style={{ backgroundColor: "", marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}>
              <li class="nav-item" style={{ marginLeft: "10px", marginTop: "5px", backgroundColor: "" }}>
                <div class="nav-link" aria-current="page" href="#" style={{ backgroundColor: "" }}>
                  <Link to="Chat1"><img src={messageIcon2} style={{ height: "90%" }} alt="message" />
                  </Link>
                </div>
              </li>


              <div class="dropdown" style={{ float: "right" }}>

                <li class="nav-item" style={{ marginLeft: "10px", marginTop: "" }}>
                  <div class="nav-link" href="#">
                    <img src={people} style={{ height: "70%" }} alt="people" />
                  </div>
                </li>
                <div class="dropdown-content">
                  {userId === null ? (
                    <Link to="/SignIn" ><i class="fa fa-sign-in" aria-hidden="true" id="logInId"></i> LogIn</Link>
                  ) : null}
                  <Link onClick={handleClickProfile} ><i class="fa fa-user" aria-hidden="true"></i> My Profile</Link>
                  <Link onClick={handleClickProducts} ><i class="fa fa-user" aria-hidden="true"></i> My Products</Link>

                  <a routerLink="/" onClick={logOut}><i class="fa fa-sign-out" aria-hidden="true"></i> LogOut</a>
                  {/* onClick={Logout} */}
                </div>

              </div>



              <li class="nav-item" style={{ marginLeft: "10px", backgroundColor: '' }}>
                <div class="nav-link" style={{ backgroundColor: "white", borderRadius: "5px", width: "100px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: '13px' }}>
                  <div style={{ width: "30%", height: "100%", backgroundColor: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={download} alt="download" />
                  </div>
                  <div style={{ width: "70%", height: "100%", backgroundColor: "", color: "#26A5B9" }}>
                    <Link onClick={handleClickSell} style={{ textDecoration: "none", color: "#26A5B9" }}>
                      <p style={{ marginTop: "0px", marginLeft: "5%" }}>To Sell</p>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>


          </div></div>

      </nav>

      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{
        background: "#B5EFF0",
        box_shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", marginTop: "10px"
      }}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ulLeft" style={{ marginLeft: "235px" }}>

              {categoryName.map((category) => (
                <>
                  <Link className='' key={category.categoryId} to={`/Category/${category.categoryId}`} style={{ textDecoration: "none", color: "black", display: "" }} >


                  </Link>
                </>
              ))
              }




            </ul>

          </div>
        </div>
      </nav>



    </>
  )
}

export default NavbarReal
