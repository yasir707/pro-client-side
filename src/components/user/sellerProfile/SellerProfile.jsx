import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './sellerProfile.css';
import SellerProfileComponent from './SellerProfileComponent';
import Patti from './Patti';
import Footer from '../../footer/Footer';
import NavbarReal from '../home_pages/NavbarReal';



const SellerProfile = () => {
    const { userId } = useParams();
    const [showImages , setShowImages] = useState([]);
    // const [sellerProfileImage , setSellerProfileImage] = useState([]);
    const [sellerName , setSellerName] = useState([]);
    

  

    useEffect(()=>{
        showSellerProfileData();
    },[userId]);

    async function showSellerProfileData() {
        try {
            const response = await fetch(`http://localhost:8080/posts/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            if (data && data.length > 0) {
                // setSellerProfileImage(data[0].sellerProfileImage);
                setSellerName(data[0].user); 
                setShowImages(data);
            } else {
                console.log('No data found for user');
            }
        } catch (error) {
            console.error('Error while getting Products:', error.message);
        }
    };

 

  return (
    <>
      <NavbarReal></NavbarReal>

        {/* <Navbar></Navbar>
        <Navbar2></Navbar2> */}

        
        <div className='sellerProfileMainDiv'>
            <div className='container' >
                <div className='row' >
                    <div className='col-lg-3 col-md-3 col-sm-12 '  >
                        <div className='firstCol'>
                            <div className='firstColInside'>
                                {/* <div className='imgDiv'>
                                    
                                    
                                    <img src={sellerProfileImage} 
                                    alt="sellerProfileImg" style={{width:"10rem" , marginLeft:"25%" , borderRadius:"50%",height:"10rem"}} />
                                    <p className='p1'>Share the seller profile link</p>
                                    <span className='p2'>Seller phone no:</span>
                                    <span className='p3'>{sellerPhoneNo}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>



                    <div className='col-lg-9 col-md-9 col-sm-12' style={{backgroundColor:""}}>
                        <div className='row' style={{backgroundColor:""}}>
                        <Patti title={sellerName}></Patti>
                    {/* <div className='publish'>Published Ad 12</div> */}


                    {showImages.map((values) => {
    const imageUrl = values.image ? `http://localhost:8080/${values.image.replace(/\\/g, '/')}` : 'placeholder.png';
    return (
        <SellerProfileComponent
            key={values._id}
            productId={values._id}
            img={imageUrl} 
            title={values.title}
            price={values.price}
            imgHeart={values.imgHeart}
            location={values.location}
        />
    );
})}


                           
                        </div>
                    </div>

                </div>
            </div>
        </div>   

        <Footer></Footer>
        

        </>
  )
}

export default SellerProfile
