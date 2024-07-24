import './productView.css';
import { Link, useAsyncError } from 'react-router-dom';
import { useState ,useEffect , useContext } from 'react';
import { useParams } from 'react-router-dom';
// import Footer from '../favouritePages/Footer';
// import NavbarReal from '../homePages/NavbarReal';
import RPComponent from './RPComponent';
import heart from '../../../assets/images/heart.png';
import share from '../../../assets/images/share.png';



const ProductView = () => {
  const { productId } = useParams();
  const [product , setProduct] = useState(null);
  const [productName , setProductName] = useState([]);
  const [userName , setUserName] = useState([]);
  const [title , setTitle] = useState([]);
  const [productSellerName , setProductSellerName] = useState([]);
  const [sellerProfileImage , setSellerProfileImage] = useState([]);
  const [sellerPhoneNo , setSellerPhoneNo] = useState([]);
  const [sellerAddress , setSellerAddress] = useState([]);
  const [addedAgo , setAddedAgo] = useState([]);
  const [description , setDescription] = useState([]);
  const [userProfileId , setUserProfileId] = useState([]);
  const [relatedImages , setRelatedImages] = useState([]);
  const [categoryId , setCategoryId] = useState([])
  const [relatedProductsBelow , setRelatedProductsBelow] = useState([]);

  const token = localStorage.getItem('token')
 
  // debugger;{ showImage }
useEffect(()=>{
  getAgain();
},[productId,categoryId]);



async function getAgain(){
  const responseReal = await fetch(`http://localhost:8080/post/${productId}`);
  const dataReal = await responseReal.json();
  console.log(dataReal);
      setProduct(dataReal);
      setUserName(dataReal);
      setTitle(dataReal);
      setDescription(dataReal);

}

if (!product) {
  return <p>Loading...</p>;
}

async function relatedProductsFunction(){
  try{
  const responseRelates = await fetch(`https://theroyalblue.pk:5010/api/Product/get-Product-related-items/${categoryId}` , {
    method : "GET" ,
    header : {
      accept : '*/*',
      Authorization : `Bearer ${token}`
    }
  });
  const dataRelates = await responseRelates.json();
  console.log(dataRelates);
      // setProduct(dataReal.data);
      setRelatedProductsBelow(dataRelates.data)
  }
  catch(error){
    console.log(error + 'Error while getting Related Products.')
  }
}

    return(
        <>


<div className='productViewMainCont'>

{/* <NavbarReal></NavbarReal> */}

            {/* <Navbar />
            <Navbar2 /> */}

{/* Product Detail containers */}

{/* {RData.map((values) => (<> */}

<div style={{backgroundColor:"red",marginLeft:"7%"}}>

            <div className='productDetailCont'>
            <div className='productDetailContInside'>
            <div class="card mb-3" style={{max_width: "540px"}}>
  <div class="row g-0" >
    <div class="col-md-4"  >
      {/* <img src={selectedProduct.img} class="img-fluid rounded-start" style={{width:"100%"}} alt="Pouch" />  */}
      {/* <img src={selectedProduct.img} class="img-fluid rounded-start" style={{width:"100%"}} alt="Pouch" />  */}
      {/* <img src={product.imageLink} class="img-fluid rounded-start" style={{width:"100%"}} alt="Pouch" />  */}
      
    
         <img src={ product.image ? `http://localhost:8080/${product.image.replace(/\\/g, '/')}` : 'placeholder.png'} class="img-fluid rounded-start" style={{width:"100%"}} alt="Pouch" /> 

      <div className='pouch1' style={{width:"100%",marginTop:'none'}}>
        {relatedImages.map((images)=>(
           <img key={images.productMediaId} src={images.imageLink} alt="pouchImg" style={{width:"24%" , marginLeft:"1%" ,marginTop:"5%"}}/>
        ))}
    {/* <img src={pouch} alt="pouchImg" style={{width:"24%" , marginLeft:"1%" ,marginTop:"5%"}}/> */}
    {/* <img src={pouch2} alt="pouchImg" style={{width:"24%" , marginLeft:"1%" ,marginTop:"5%"}}/>
    <img src={pouch3} alt="pouchImg" style={{width:"24%" ,marginLeft:"1%" ,marginTop:"5%"}}/>
    <img src={pouch4} alt="pouchImg" style={{width:"24%" ,marginLeft:"1%" ,marginTop:"5%"}}/> */}
    </div></div>

    
   
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title my-2">{productName.name}</h5>

        <div class="container  my-2" >
  <div class="row" >
    <div class="col" >
      UserName:
    </div>
    <div class="col " style={{display:"flex",justifyContent:"flex-end"}}>
        
        <h5 >{userName.user}</h5>

    </div>
   
  </div>
</div>

<div class="container  my-2" >
  <div class="row" >
    <div class="col" >
      {/* Title:  */}
    </div>
    <div class="col " style={{display:"flex",justifyContent:"flex-end"}}>
        {/* <h5 >{selectedProduct.condition}</h5> */}
        {/* <h5 >{product.condition}</h5> */}

    </div>
   
  </div>
</div>

<div class="container  my-2" >
  <div class="row" >
    <div class="col" >
      Title:
    </div>
    <h5>{title.title}</h5>
    
   
  </div>
</div>
      
        <p class="card-text"><small class="text-body-secondary">
        {/* <div style={{width:"20%",height:"40px",marginLeft:"13px"}}>
            <button type="button" class="btn " style={{background: "#B5EFF0" ,color:"#26A5B9" ,width:"100%"}}>Bags</button></div> */}
        </small></p>
      </div>
      <hr/>
      <div style={{width:"25%",height:"40px",float:"right",marginBottom:"50px"}}>
      <img src={share} alt="icon" style={{marginLeft:"15px"}} />
      <img src={heart} alt="icon" style={{marginLeft:"15px"}} />
      </div>
    </div>
  </div>
</div>


</div>
            

{/* <div className='row'>
  <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
  <div className="sellerDescriptionCont" style={{color:""}}>
    
  <div className='pattiA'>
                                <div className='patti1A' ><p className="pattiLast" style={{marginLeft:"5%",marginTop:"8%"}}>Seller Description</p></div>
                                <div className='patti2A' style={{marginTop:"-7px"}}></div>
                            </div>

                          <div className='flex1Mod'>
                            <div className='imgFlexDiv'>
                              <img src={sellerProfileImage.sellerProfileImage} className="img-fluid" style={{ width:"4rem" , border: "" ,borderRadius:"4rem",height:"4rem"}} alt="" />
                            </div>

                            <div className='nameFlexDiv'>
                              <p>{productSellerName.sellerName}</p>
                            </div>

                            <div className='buttonFlexDiv'>
                              <Link to="/Chat1">
                              <button className='btn  btn-sm' style={{border: "1px solid #26A5B9"}}>Chat with Seller</button>
                              </Link>
                            </div>


                            </div>
                            <div style={{backgroundColor:"rgba(0, 0, 0, 0.25)" , width:"90%",height:"1%",marginLeft:"5%"}}></div>


                            <div className='flex2'>

                              <div className='phoneFlexDiv'>
                                <p style={{color: "#666666"}}>Seller phone no</p>
                                <p>{sellerPhoneNo.sellerPhoneNumber}</p>
                              </div>
                          

  
                            </div>
                            <Link key={userProfileId.modifiedBy} to={`/SellerProfile/${userProfileId.modifiedBy}`}   style={{textDecoration:"none"}}>
                            <div className='viewSellerProfileFlexDiv'>
                              <p style={{color:"#26A5B9"}}>view seller profile </p>
                            </div>
                            </Link>





     </div>
  </div>
</div> */}





{/* <div className='row mt-3' >
  <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
  <div className="sellerDescriptionCont2" style={{color:""}}>
    
  <div className='pattiA'>
                                <div className='patti1A' ><p className="pattiLast" style={{marginLeft:"5%",marginTop:"8%"}}>Posted In</p></div>
                                <div className='patti2A' style={{marginTop:"-7px"}}></div>
                            </div>

                          <div className='flex2b'>
                         
                          <p>{sellerAddress.sellerAddress}</p>
                            </div>

                            <div className='secondsAgo'>{addedAgo.addedAgo}</div>
                           


                           

                           




     </div>
  </div>
</div> */}




<div className='row mt-5 ' style={{marginLeft:"4%"}} >
  <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
  <div className="sellerDescriptionCont3" style={{color:""}}>
    
  <div className='pattiA'>
                                <div className='patti1A' style={{width:"35%"}}><p className="pattiLast" style={{marginLeft:"5%",marginTop:"8%" }}>Description</p></div>
                                <div className='patti2A' style={{marginTop:""}}></div>
                            </div>


                  <div className='parasMainDiv'>
                  

                    {/* <div className='parasMainDivA'> */}
                    <p  dangerouslySetInnerHTML={{ __html: description.description }}>
                      
                      {/* Fabric: PU Leather */}
                    {/* </div> */}

                    {/* <div className='parasMainDivA'> */}
                      {/* Size: (8x6 In) */}
                    {/* </div> */}

                    {/* <div className='parasMainDivA'> */}
                      {/* Makeup Pouch With Plastic Chain */}
                    {/* </div> */}

                    {/* <div className='parasMainDivA'> */}
                      {/* Elegant Design */}
                    {/* </div> */}

                    {/* <div className='parasMainDivA' style={{height:"25%", marginTop:"2%"}}> */}
                      {/* Note:Product Color May Slightly Vary Due to Photographic Lighting Sources or Your Monitor Settings */}
                    {/* </div> */}

                    {/* <div className='parasMainDivA' style={{marginTop:"2%"}}> */}
                      {/* Please Allow 3-4 Cm Size Difference */}
                    {/* </div> */}
                    </p>
                    
                  </div>



                            </div></div></div>





        </div>


</div>



      
<div className='container ' style={{position:"relative",top:"200px"}}>
          <div className='row '>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn' style={{ width: "20%" }}>
                  {/* <p>Related Products</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
        



{/* <Footer></Footer> */}
</div>


        </>
    );
};
export default ProductView;