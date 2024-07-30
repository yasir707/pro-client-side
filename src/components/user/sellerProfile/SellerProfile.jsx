import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './sellerProfile.css';
import SellerProfileComponent from './SellerProfileComponent';
import Patti from './Patti';
import Footer from '../../footer/Footer';
import NavbarReal from '../home_pages/NavbarReal';




const SellerProfile = () => {
    const { userId } = useParams();
    const [showImages, setShowImages] = useState([]);
    const [sellerName, setSellerName] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        showSellerProfileData();
    }, [userId]);

    useEffect(() => {
        filterProducts();
      }, [searchText, showImages]);

    async function showSellerProfileData() {
        try {
            const response = await fetch(`http://localhost:8080/posts/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);

            if (data && data.length > 0) {
                setSellerName(data[0].user);
                setShowImages(data);
                setFilteredProducts(data);

            } else {
                console.log('No data found for user');
            }
        } catch (error) {
            console.error('Error while getting Products:', error.message);
        }
    };

    function filterProducts() {
        if (searchText.trim() === "") {
          setFilteredProducts(showImages);
        } else {
          const filtered = showImages.filter(product => {
            const lowercasedSearchText = searchText.toLowerCase();
    
            return (
              product.title.toLowerCase().includes(lowercasedSearchText) ||
              (product.user && product.user.toLowerCase().includes(lowercasedSearchText)) ||
              (product.price && product.price.toString().includes(lowercasedSearchText)) ||
              (product.location && product.location.toLowerCase().includes(lowercasedSearchText))
            );
          });
    
          setFilteredProducts(filtered);
        }
      }


    return (
        <>
            <NavbarReal  searchText={searchText} setSearchText={setSearchText}></NavbarReal>

            <div className='sellerProfileMainDiv'>
                <div className='container' >
                    <div className='row' >
                        {/* <div className='col-lg-3 col-md-3 col-sm-12 '  >
                        <div className='firstCol'>
                            <div className='firstColInside'>

                            </div>
                        </div>
                    </div> */}



                        <div className='col-lg-12 col-md-12 col-sm-12' style={{ backgroundColor: "" }}>
                            <div className='row' style={{ backgroundColor: "" }}>
                                <Patti title={sellerName}></Patti>


                                {filteredProducts.map((values) => {
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
