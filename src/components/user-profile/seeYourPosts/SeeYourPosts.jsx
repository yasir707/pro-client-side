import React from 'react';
import './seeYourPosts.css'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarReal from '../../user/home_pages/NavbarReal';
import RPComponent2 from './RPComponent2';
import Footer from '../../footer/Footer';


const SeeYourPosts = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progressBar, setProgressBar] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchText, products]);


  async function getData() {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:8080/post',

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }
      );

      const data = await response.json();
      console.log(data);


      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
      setProgressBar(false)

    }
    catch (error) {
      console.log('Error');
    }
  }

  function filterProducts() {
    if (searchText.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => {
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
      {
        progressBar && loading ? (
          <>
            <div className='progressBarContainer'>
              <div className='progressBar'></div>
            </div>
            <div className='loader'></div>
          </>
        ) :
          (


            <>
              <div className="mainContainer">

                <NavbarReal searchText={searchText} setSearchText={setSearchText}></NavbarReal>

                <div className='container mt-5 mb-3' >
                  <div className='row' >
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >
                      <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                        <div className='adminDashboardSecondPattiIn ' style={{ width: "180px" }}>
                          <p>Your Posts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="container " style={{ backgroundColor: "", marginLeft: '18px' }}>
                  <div class="row ">



                    {filteredProducts.map((product) => {
                      const imageUrl = product.image ? `http://localhost:8080/${product.image.replace(/\\/g, '/')}` : 'placeholder.png';
                      return (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
                          <div className="col-lg-3 col-md-6 col-sm-12 product" style={{ backgroundColor: "", marginBottom: "20px", display: "" }}>
                            <RPComponent2
                              products={products}
                              productId={product._id}
                              img={imageUrl}
                              title={product.title}
                              price={product.price}
                              user={product.user}
                              heart={product.imgHeart}
                              addedAgo={product.addedAgo}
                              location={product.location}
                            />
                          </div>
                        </div>
                      );
                    })}

                  </div>

                </div>


                <Footer></Footer>


                {/* </>

          )} */}


              </div>
            </>
          )
      }



    </>
  );
};
export default SeeYourPosts;

