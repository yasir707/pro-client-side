import React from 'react';
import './home.css'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarReal from './NavbarReal';
import RPComponent from './RPComponent';
import home_banner from '../../../assets/images/home-banner.png'
import Footer from '../../footer/Footer';


const Home = () => {
  let navigate = useNavigate();
  const [loading , setLoading] = useState(true);
  const [progressBar , setProgressBar] = useState(true);
  const [products, setProducts] = useState([]);
  
  // const [showRecentProducts, setShowRecentProducts] = useState([]);
//   const [showNewProducts, setShowNewProducts] = useState([]);
//   const [showUsedProducts, setShowUsedProducts] = useState([]);



  useEffect(() => {
    getData();
    // getNewProducts();
    // getUsedProducts();
  }, []);


  async function getData() {
    try {
      const response = await fetch('http://localhost:8080/posts');

      const data = await response.json();
    //   console.log(data.data[0].categoryName);
      console.log(data);


      // setShowImage(data.data.map(item => item.imageLink).slice(0,4));
      setProducts(data);
      setLoading(false);
      setProgressBar(false)
      // setShowRecentProducts(data.data.slice(4, 12));

    }
    catch (error) {
      console.log('Error');
    }
  }

//   async function getNewProducts() {
//     try {
//       const responseNewProducts = await fetch('');
//       const dataNewProducts = await responseNewProducts.json();
//       console.log(dataNewProducts);
//       setShowNewProducts(dataNewProducts.data.slice(0, 4));
//       setLoading(false)
//     }
//     catch(error){
//       console.log(error , 'Error while getting New Products')
//     }
//   }

//   async function getUsedProducts() {
//     try {
//       const responseUsedProducts = await fetch('https://theroyalblue.pk:5010/api/Home/get-used-Products-for-homePage');
//       const dataUsedProducts = await responseUsedProducts.json();
//       console.log(dataUsedProducts)
//       setShowUsedProducts(dataUsedProducts.data.slice(0, 4));
//       setLoading(false)
//     }
//     catch(error){
//       console.log(error , 'Error while getting Used Products')
//     }
//   }




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
        {/* {
          loading ? (
          <div className='loader'></div>
          ) : 
          (
<> */}
 <NavbarReal ></NavbarReal>
        {/* <div className="row">
                    <div className="col-lg-12 col-md-12 col-10 col-xxl-12">


                    <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-3 col-2 col-xxl-4">

                        <div className="navbarContainer">
                            
                                        <div className="logo"><img src={logo} alt="logoImage" /></div>
                                        </div>

                                    <div className="col-lg-4 col-md-3 col-2 col-xxl-4"  >
                                      <input type='search' placeholder="Search" className='search1 ' />  
                                      <div className='searchLogoDiv '>
                                      <img src={searchLogo1} alt="searchLogo" className='searchLogo1 ' />
                                      </div>
                                      <input type='search'  className='search2 '/>
                                      <img src={locationLogo} alt="loactionLogo" className='locationLogo' /> 
                                      
                                      <div className='searchLogoDiv2 '>
                                      <img src={locationSelectBox} alt="searchLogo" className='searchLogo1 ' />
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-3 col-2 col-xxl-4 ">
                                        <div className='thirdPortion'/>
                                        <img src={messages} alt='messages' class="messageLogo" />

                                        <img src={shopping} alt='messages' class="shoppingLogo" />

                                        <img src={people} alt='messages' class="peopleLogo" />

                                        <div className='sell d-flex justify-content-around align-items-center'>
                                            <img src={download} style={{width:"20%"}} alt='download' />
                                            <p className="pMargin" style={{color:"#B5EFF0"}}>To Sell</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>  */}


        {/* <Navbar2 /> */}

        {/* <div className="container-fluid " style={{marginTop:'119px',height:'50px', backgroundColor:"#B5EFF0"}}> 
                <div className='row '>
                    <div className='col-lg-12 col-md-12 col-12 col-xxl-12 '>

                    <nav className='container-fluid  '  >
                        <ul  className="d-flex justify-content-between " style={{listStyle:"none",marginTop:"12px"}}>
                            <li>Pets</li>
                            <li>Bags</li>
                            <li>Shoes</li>
                            <li>Jewelry</li>
                            <Link to="/Makeup"><li>Makeup</li></Link>
                            <li>Dresses</li>
                            <li>Electronics</li>
                            <li>Home decor</li>
                        </ul>
                    </nav>
                    </div>
                    </div>
                    </div> */}

        <div className='container' style={{ height: "295px"  }} >
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12 col-xxl-12'>
              <img src={home_banner} alt="home-banner" className="homeBannerImage" />
            </div>
          </div>
        </div>

        <div className='container mt-5 mb-3' >
          <div className='row' >
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn ' style={{ width: "180px" }}>
                  <p>Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="container " style={{ backgroundColor: "" , marginLeft:'18px'}}>
          <div class="row ">
          {/* style={{ backgroundColor: "" ,display:"",maxWidth:"100%",width:"100%"}} */}



          {products.map((product) => {
    const imageUrl = product.image ? `http://localhost:8080/${product.image.replace(/\\/g, '/')}` : 'placeholder.png';
    return (
        <div className="col-lg-3 col-md-6 col-sm-12" key={product._id}>
            <div className="col-lg-3 col-md-6 col-sm-12 product" style={{ backgroundColor: "", marginBottom: "20px", display: "" }}>
                <RPComponent
                    productId={product._id}
                    img={imageUrl}
                    title={product.title}
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





        {/* <div className='container '>


          

<div className='productNames'>
        
        <div class="container   " style={{width:"100%",height:"100%",float:"left"}} >
          <div class="row" style={{ width:"100%",height:"100%",float:"left"}} >
            <div class="col" style={{width:"100%",height:"100%",float:"left"}} >
              
            </div>
           
          </div>
        
        </div>
        
        
        </div>


          <div className='productDetailCardIn mb-5 ' style={{ backgroundColor: "", display: "flex", justifyContent: "center" }}>


          {products.map((product) => (

<Link key={product.productId} to={`/ProductView/${product.productId}`} style={{ textDecoration: "none", color: "black" }} >

  < ComponentInside key={product.productId} img={product.imageLink} title={product.name} price={product.price} heart={product.imgHeart} location={product.location} />

</Link>
))


}

            {showImage.map((values) => (

              <Link key={values.id} to={`/ProductView/${values.productId}`} style={{ textDecoration: "none", color: "black" }} >

                < ComponentInside key={values.productId} img={values.imageLink} title={values.name} price={values.price} heart={values.imgHeart} location={values.location} />

              </Link>
            ))


            }





          </div></div> */}


{/* <div className='container mt-5 mb-3'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn' style={{ width: "180px" }}>
                  <p>New Products</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div class="container " style={{ backgroundColor: "" }}>
          <div class="row ">


            {showNewProducts.map((product) => (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 cardTransform" key={product.productId}>
               
                <div class="col-lg-3 col-md-6 col-sm-12  product" style={{ backgroundColor: "", marginBottom:"20px" ,display:""}}>

                <RPComponent productId={product.productId} img={product.imageLink} title={product.name} price={product.price} heart={product.imgHeart} addedAgo={product.addedAgo} location={product.location} />

                </div>
                </div>
              </>
            ))
            }
          </div>

        </div> */}

        {/* <div className='container ' >



          <div className='productDetailCardIn ' style={{ backgroundColor: "", display: "flex", justifyContent: "center" }}>

       
            {showRecentProducts.map((values) => (
              
              <ComponentInside key={values.productId} img={values.imageLink} title={values.name} price={values.price} heart={values.imgHeart} location={values.location} />

            ))

            }




          </div></div> */}









        {/* <div className='container '>
          <div className="productDetailCardMain" >





            <div className='productNames' style={{ backgroundColor: "" }}>

              <div class="container   " style={{ width: "100%", height: "100%", float: "left" }} >
                <div class="row" style={{ width: "100%", height: "100%", float: "left" }} >
                  <div class="col" style={{ width: "100%", height: "100%", float: "left" }} >
                    <div className="relatedProductsPolygon" style={{ backgroundColor: "#26A5B9", width: "20%", height: "90%", float: "left", display: "flex", justifyContent: "center" }}>
                      <p className='mt-1' style={{ marginRight: "15px", position: "relative" }}>New Products
                      </p>


                    </div>
                  </div>




                </div>

              </div>


            </div>


            <div className='productDetailCardIn' style={{ backgroundColor: "", display: "flex", justifyContent: "center" }}>

              {showNewProducts.map((values) => (
                <ComponentInside key={values.productId} img={values.imageLink} title={values.name} price={values.price} heart={values.imgHeart} location={values.location} />
              ))

              }


            </div>


          </div></div> */}




{/* <div className='container mt-5 mb-3'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn' style={{ width: "180px" }}>
                  <p>Used Products</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div class="container " style={{ backgroundColor: "" }}>
          <div class="row ">


            {showUsedProducts.map((product) => (
              <>
              <div className="col-lg-3 col-md-6 col-sm-12" key={product.productId}>
               
                <div class="col-lg-3 col-md-6 col-sm-12  product" style={{ backgroundColor: "", marginBottom:"20px" ,display:""}}>
                <RPComponent productId={product.productId} img={product.imageLink} title={product.name} price={product.price} heart={product.imgHeart} addedAgo={product.addedAgo} location={product.location} />
</div>
                </div>
              </>
            ))
            }
          </div>

        </div> */}
{/*         
        <div className='container '>
          <div className="productDetailCardMain" >




            <div className='productNames'>

              <div class="container   " style={{ width: "100%", height: "100%", float: "left" }} >
                <div class="row" style={{ width: "100%", height: "100%", float: "left" }} >
                  <div class="col" style={{ width: "100%", height: "100%", float: "left" }} >
                    <div className="relatedProductsPolygon" style={{ backgroundColor: "#26A5B9", width: "20%", height: "90%", float: "left", display: "flex", justifyContent: "center" }}>
                      <p className='mt-1' style={{ marginRight: "15px", position: "relative" }}>Used Products
                      </p>


                    </div>
                  </div>

                </div>

              </div>


            </div>


            <div className='productDetailCardIn' style={{ backgroundColor: "", display: "flex", justifyContent: "center" }}>

              {showUsedProducts.map((values) => (
                <ComponentInside key={values.productId} img={values.imageLink} title={values.name} price={values.price} heart={values.imgHeart} location={values.location} />
              ))

              }


            </div>


          </div></div> */}

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
export default Home;

