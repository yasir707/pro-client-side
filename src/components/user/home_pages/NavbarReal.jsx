import React, { useState } from 'react';
import './home.css';
// import NavbarCategories from './NavbarCategories';
import { useNavigate} from 'react-router-dom';

import mainLogo from '../../../assets/images/mainLogo.png'
import locationSelectBox from '../../../assets/images/locationSelectBox.png'
// import search from '../../../assets/images/Vector (1).png';
// import locationLogo from '../../../assets/images/loactionLogo.png';
import messageIcon2 from '../../../assets/images/messageIcon.png'
import shopping from '../../../assets/images/shopping.png'
import people from '../../../assets/images/people.png'
import download from '../../../assets/images/download.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NavbarReal = () => {
  const navigate = useNavigate();

  const [categoryName , setCategoryName] = useState([]);
  const [writeText , setWriteText] = useState("");
  const [writeText2 , setWriteText2] = useState("");
  const [searchItems , setSearchItems] = useState("");
  const userId = localStorage.getItem('userId')
  
  // console.log(userId)
  // if(userId===null){
  //   const logInId = document.getElementById('logInId');
  //   logInId.style.display="none"
  // }


  useEffect(()=>{
    getNavbarData()
  },[])

  async function getNavbarData(){
    const responseNavbar = await fetch('');
        const dataNavbar = await responseNavbar.json();
        setCategoryName(dataNavbar.data);
        console.log(dataNavbar.data[0].categoryId);
        // console.log(dataNavbar.data[0].name);
  }

  async function getSearchItemsFromApi(){
    try{
        const response = await fetch('');
        const data = await response.json();
        console.log(data.data[0].addedAgo);
  }
  catch(error){
    console.log(error + 'Error in Searching');
  }
}

  function handleSearchItems(e){
     e.preventDefault();
    //  navigate(`/Search?searchKey=${encodeURIComponent(writeText)}`);
    navigate(`/Search/${writeText}/${writeText2}`);

      setSearchItems(console.log(writeText));
      getSearchItemsFromApi();
      
  }

  function myAds(){
    navigate('/')
  }

  function logOut(){
    localStorage.removeItem('userId')
    navigate('/SignIn')
  }


  return (
   <>
   <nav class="navbar navbar-expand-xl navbar-light " style={{backgroundColor:"#26A5B9"}}>
  <div class="container-fluid" style={{backgroundColor:""}}>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:""}}>
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarTogglerDemo01" style={{backgroundColor:""}}>
       <div class="d-flex align-items-center justify-content-center">
      <Link to="/"><img src={mainLogo} style={{width:"",height:"" ,marginLeft:"2%" ,backgroundColor:""}} alt="logo" class="navbar-brand " href="#" /></Link>
</div>
      <form class="d-flex align-items-center" style={{ backgroundColor: "", width: "100%", height: "60px" }}>
        <div class="input-group" style={{ backgroundColor: "", display: "flex", flexWrap: "wrap" , flexBasis: "50%" , marginLeft:"32%"}}>
         
            <input class="form-control me-2 place1" style={{flexBasis: "100%",width:"100%", height:"60%", background:"", borderRadius:"5px"}} type="search" placeholder="Search" value={writeText} onChange={(e)=>setWriteText(e.target.value)} aria-label="Search"/>
            <button class="btn btn-outline-success" style={{width:"25%", height:"35px" ,backgroundColor:"#B5EFF0" ,position:"absolute",left:"83%" ,border:"none"}} type="submit"  onClick={handleSearchItems}>search
            {/* <img src={search} alt="search" style={{marginTop:"-5px"}}/> */}
          </button>
          </div>

          {/* <div class="input-group" style={{display: "flex", flexBasis: "50%", marginLeft: "2%"}}>
          <input class="form-control me-2 place" style={{flexBasis: "100%", height:"60%", background:"#FFFFFF", borderRadius:"5px"}} value={writeText2} onChange={(e)=>setWriteText2(e.target.value)} type="search" placeholder="Location" aria-label="Search" />
          <button class="btn btn-outline-success" style={{width:"15%", height:"35px" ,backgroundColor:"#B5EFF0" ,position:"absolute",left:"83%" ,border:"none",borderRadius: "5px"}} type="submit">
            <img src={locationSelectBox} alt="search" style={{marginTop:"-5px"}}/>
          </button>
          <div style={{position:"absolute", left:"3%", top:"4px", width:"30px", height:"25px", backgroundColor:""}}> 
            <img src={locationLogo} alt="location" />
          </div>
        </div> */}


            
      
      </form>



      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-navCustom" style={{backgroundColor:"", marginLeft:"auto", marginRight:"auto", display:"flex", justifyContent:"center"}}>
  <li class="nav-item" style={{marginLeft:"10px",marginTop:"5px",backgroundColor:""}}>
    <div class="nav-link" aria-current="page" href="#" style={{backgroundColor:""}}>
      <Link to="Chat1"><img src={messageIcon2} style={{height:"90%"}} alt="message" />
      </Link>
    </div>
  </li>
  {/* <li class="nav-item" style={{marginLeft:"10px" ,marginTop:"5px"}}>
    <div class="nav-link" href="#">
      <Link to={'/Favourite'}><img src={shopping} style={{height:"90%"}} alt="shopping" /></Link>
    </div>
  </li> */}
  {/* <li class="nav-item" style={{marginLeft:"10px" ,marginTop:"4px"}}>
    <div class="nav-link" href="#">
      <img src={people} style={{height:"70%"}} alt="people" />
    </div>
  </li> */}


  <div class="dropdown" style={{float:"right"}}>
      {/* <img class="rounded-circle dropbtn" height="40" width="40" src="{{UserData.profileImage}}" /> */}
      <li class="nav-item" style={{marginLeft:"10px" ,marginTop:""}}>
    <div class="nav-link" href="#">
      <img src={people} style={{height:"70%"}} alt="people" />
    </div>
  </li>
      <div class="dropdown-content">
      {userId === null ? (
        <Link to="/SignIn" ><i class="fa fa-sign-in"  aria-hidden="true" id="logInId"></i> LogIn</Link>
        ) : null}
        <Link to="/UserProfile" ><i class="fa fa-user" aria-hidden="true"></i> My Profile</Link>
        <a routerLink="/product" onClick={myAds}><i class="fa fa-cubes" aria-hidden="true" ></i> My Ads</a>
        <a routerLink="/" onClick={logOut}><i class="fa fa-sign-out" aria-hidden="true"></i> LogOut</a>
        {/* onClick={Logout} */}
      </div>
      
    </div>



  <li class="nav-item" style={{marginLeft:"10px" , backgroundColor:''}}>
    <div class="nav-link" style={{backgroundColor:"white", borderRadius:"5px", width:"100px", height:"35px", display:"flex", justifyContent:"center", alignItems:"center",marginTop:'13px'}}>
      <div style={{width:"30%", height:"100%", backgroundColor:"", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src={download} alt="download" />
      </div>
      <div style={{width:"70%", height:"100%", backgroundColor:"", color:"#26A5B9"}}>
      <Link to="/AddProduct" style={{textDecoration:"none",color:"#26A5B9"}}>
        <p style={{marginTop:"0px", marginLeft:"5%"}}>To Sell</p>
      </Link>
      </div>
    </div>
  </li>
</ul>

  

      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{backgroundColor:"red",marginLeft:""}}>
      <div class="container">
      <div class="row" style={{backgroundColor:""}}>
        <div style={{display:"flex"}}>

      <div class="col" style={{backgroundColor:"",width:""}}>
        <li class="nav-item" style={{backgroundColor:"",marginLeft:""}}>
          <div class="nav-link active" aria-current="page" href="#" style={{backgroundColor:""}}>

          <div style={{width:"100%",height:"100%",backgroundColor:""  ,marginTop:"15px", marginLeft:"-70%"}}>
            <img src={messageIcon2} style={{height:"90%"}} alt="message" />
            </div>

          </div>
          
        </li></div>

      <div class="col" style={{backgroundColor:"",width:""}}>
        <li class="nav-item" style={{marginLeft:"10px" ,backgroundColor:""}}>
          <div class="nav-link" href="#">
          <div style={{width:"100%",height:"100%",backgroundColor:"",marginTop:"15px"  , marginLeft:"-80%"}}>
          <img src={shopping} style={{height:"90%"}} alt="shopping" />
          </div>
          </div>
        </li></div>

      <div class="col" style={{backgroundColor:"",width:""}}>
        <li class="nav-item" style={{marginLeft:"10px" ,backgroundColor:""}}>
          <div class="nav-link" href="#" >
          <div style={{width:"100%",height:"50px",backgroundColor:"",marginTop:"15px" , marginLeft:"-90%"}}>
          <img src={people} style={{height:"70%"}} alt="people" />
            </div>
          </div>
        </li></div>

      <div class="col" style={{backgroundColor:"",width:""}}>
        <li class="nav-item" style={{backgroundColor:"white",borderRadius:"5px",width:"100px",height:"35px",marginTop:"24px",marginLeft:"8px",display:"flex" ,marginLeft:"15px"  }}>
            <div style={{width:"30%",height:"100%",backgroundColor:"",display:"flex",justifyContent:"center",alignItems:"center" , marginLeft:"-25%"  }}>
                <img src={download} alt="download" />
            </div>

            <div style={{width:"70%",height:"100%",backgroundColor:"",color:" #26A5B9 "  }}>
                <p style={{marginTop:"5px",marginLeft:"5%"}}>To Sell</p>
            </div>
            
        </li></div>
        </div>
        </div>
        </div>
      </ul> */}

</div></div>
    
</nav>

<nav class="navbar navbar-expand-lg bg-body-tertiary"  style={{ background: "#B5EFF0",
box_shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",  marginTop:"10px"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ulLeft" style={{marginLeft:"235px"}}>

{categoryName.map((category) => (
              <>
                <Link className='' key={category.categoryId} to={`/Category/${category.categoryId}`} style={{ textDecoration: "none", color: "black" ,       display: "" }} >

                {/* <NavbarCategories key={category.categoryId} name={category.name}   /> */}

                </Link>
              </>
            ))
            }


            
        {/* <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Pets</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Bags</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shoes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Jewelry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Makeup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dreses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home Decor</a>
        </li> */}
      
      </ul>
     
    </div>
  </div>
</nav>


   
   </>
  )
}

export default NavbarReal
