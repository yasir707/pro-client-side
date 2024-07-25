// import insta from '../../../assets/images/insta.png';
// import facebook from '../../../assets/images/facebook.png';
// import linkedin from '../../../assets/images/linkedin.png';
// import whatsapp from '../../../assets/images/whatsapp.png';
// import mail from '../../../assets/images/mail.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
     
   <div className='favouriteFooterContainer'>  

<div className='container-fluid ' style={{ backgroundColor: "#26A5B9" , display:'flex', justifyContent:'center' ,height:'50px'}} >
    <div className='row' style={{backgroundColor:"",display:'flex',justifyContent:'center'}}>
   <p style={{marginLeft:'',color:'white',paddingTop:'10px'}}>All rights are reserved!</p>

        <div className='col-lg-4 col-md-4 col-sm-12 col-xxl-4 ' style={{backgroundColor:""}}>
            <div className='favouriteFooter1'>

                {/* <div className='favouriteFooter1a'><p>Follow Us</p></div> */}

                <div className='favouriteFooter1b'>
                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>@online buy and sell store</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={facebook} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>@online buy and sell store</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={linkedin} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>@online buy and sell store</p></div> */}
                    </div>

                </div>
            </div>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 col-xxl-4 ' style={{backgroundColor:""}}>
            <div className='favouriteFooter1'>
                {/* <div className='favouriteFooter1a'><p>Contact Us</p></div> */}

                <div className='favouriteFooter1b'>
                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>@online buy and sell store</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={whatsapp} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>933 333 33</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={mail} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv'><p style={{marginTop:"15px",marginLeft:"8px"}}>abc@gmail.com</p></div> */}
                    </div>

                </div>
            </div>
        </div>


        <div className='col-lg-4 col-md-4 col-sm-12 col-xxl-4 ' style={{backgroundColor:""}}>
            <div className='favouriteFooter1'>
                {/* <div className='favouriteFooter1a' ><p>Menu</p></div> */}

                <div className='favouriteFooter1b'>
                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        <div className='favouriteFooter1InsideTextDiv pClass'><p style={{marginTop:"15px",marginLeft:"42px"}}>
                            {/* <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link> */}
                            </p></div>
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv pClass'><p style={{marginTop:"15px",marginLeft:"42px"}}>Categories</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv pClass'><p style={{marginTop:"15px",marginLeft:"42px"}}>All Products</p></div> */}
                    </div>

                    <div className='favouriteFooter1bInside'>
                        <div className='favouriteFooter1bInsideIconDiv'>
                            {/* <img src={insta} className="img-fluid" alt="instaLog" /> */}
                        </div>
                        {/* <div className='favouriteFooter1InsideTextDiv pClass'><p style={{marginTop:"15px",marginLeft:"42px"}}>Contact</p></div> */}
                    </div>
                  

                </div>
            </div>
        </div>



    </div>
    </div>   

    </div>
    </div>
    
  )
}

export default Footer
