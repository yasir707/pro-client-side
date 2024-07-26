import React, { useEffect } from 'react';
// import '../UserProductsPages/userProducts.css';
import { useState } from 'react';
// import axios from 'axios';
import { useContext } from 'react';
// import MyFirstContext from '../../../../src/MyFirstContext';
import sellerProfile from '../../../assets/images/sellerProfile.png';
import productsIcon from '../../../assets/images/productsIcon.png';
import peoplesIcon from '../../../assets/images/peoplesIcon.png';
import signOut from '../../../assets/images/signOut.png';
import mainLogo from '../../../assets/images/mainLogo.png';
import upload2 from '../../../assets/images/upload2.png';
// import { ProductContext } from '../UserProductsPages/UserProducts';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditProduct = (props) => {
    const [field , setField] = useState({image:null,title:'',description:'',price:'',user:''});

    const [showName , setShowName] = useState('');
    const [showDescription , setShowDescription] = useState('');
    const [showImage , setShowImage] = useState([]);
    const [showPrice , setShowPrice] = useState(0.0);
    const [categories , setCategories] = useState([]);
    const [howYearOld , setHowYearOld] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [subCategories , setSubCategories] = useState([]);
    const [showLocation , setShowLocation] = useState('');
    const [provinces , setProvinces] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState('');
    const [cities , setCities] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isOld, setIsOld] = useState(false);
    const [categoryId , setCategoryId] = useState('')
    const [subCategoryId , setSubCategoryId] = useState('');
    const navigate = useNavigate();
    // const [productId , setProductId] = useState([]);
    const token = localStorage.getItem('token');
    // let productId = useContext(MyFirstContext);
    // console.log(productId)

    const { productId } = useParams();
    // new data 
    useEffect(()=>{
        fetchData()
      },[]);
  
      function handleChange(e){
          let nameField = e.target.name;
          let valueField = e.target.value;
          setField((prevVal) => ( {...prevVal , [nameField]:valueField }))
      }
  
      function handleFileChange(e) {
          setField({
            ...field,
            image: e.target.files[0]
          });
        }
        async function fetchData(){
          let response = await fetch(`http://localhost:8080/post/${productId}`);
          let data = await response.json();
          setField(data)
          // console.log(data)
      }
      async function handleUpdate(e){
        e.preventDefault();
        const single_data = new FormData();
        single_data.append('image', field.image);
        single_data.append('user', field.user);
        single_data.append('title', field.title);
        single_data.append('description', field.description);
        single_data.append('price', field.price);
        
        let response = await fetch(`http://localhost:8080/post/${productId}` ,
        {
            method: 'PATCH',
            
            body: single_data
        }
        );
        
        console.log(single_data)
        if (response.ok) {
            let data = await response.json();
        console.log('User added successfully');
        navigate('/');
        } else {
            let errorData = await response.json();
        console.error('Error adding user:', errorData);
        }
  
  
    }
    // ----





 async function editProducts(){
    
    const responseEdit = await fetch(``,{
        method : "GET",
        accept : '*/*',
        Authorization : `Bearer ${token}`
    });
        const dataEdit = await responseEdit.json();
        console.log(dataEdit)
        setShowName(dataEdit.data)
        setShowDescription(dataEdit.data)
        setShowPrice(dataEdit.data)
        setHowYearOld(dataEdit.data)
        setShowImage(dataEdit.data)
        setShowLocation(dataEdit.data)
 }


    
  async function getCategories(){
    const response = await fetch('');
        const data = await response.json();
        setCategories(data.data);
        setCategoryId(data.data[0].categoryId)
        // setSubCategoryId(data.data[0].categoryId);
        console.log(data);
  }

    async function getSubCategories(categoryId){
    const responseSubC = await fetch(``);
        const dataSubC = await responseSubC.json();
        console.log(dataSubC)
        setSubCategories(dataSubC.data)
        setSelectedCategoryId(categoryId);
        setSubCategoryId(dataSubC.data[0].subCategoryId);
        console.log(dataSubC.data[0].subCategoryId)
  }

  async function getProvinces(){
    const responseProvince = await fetch('');
        const dataProvince = await responseProvince.json();
        setProvinces(dataProvince.data);
  }
   
  
  async function getCities(provinceId){
    const responseCity = await fetch(``);
        const dataCity = await responseCity.json();
        setCities(dataCity.data)
        setSelectedProvinceId(provinceId);
  }

  useEffect(()=>{
    // getData();
    editProducts();
    getCategories();
    getProvinces();
  },[])

  function handleFile(){
    const file = document.getElementById('filesInput');
    file.click();
  }

  function handleFileInputChange(event){

  const files = event.target.files;

    if (files && files.length > 0) {
        const reader = new FileReader();
        const imageArray = [];
    
        reader.onload = () => {
          const imageDataUrl = reader.result;
          const imageBlob = dataURLtoBlob(imageDataUrl);
    
          // imageArray.push(reader.result);
          imageArray.push(imageBlob);
    
    
          if (imageArray.length === files.length) {
            setSelectedImages(imageArray);
          } else {
            reader.readAsDataURL(files[imageArray.length]);
          }
        };
    
        reader.readAsDataURL(files[0]);
      }
    
      
    const dataURLtoBlob = (dataURL) => {
      const parts = dataURL.split(',');
      const contentType = parts[0].match(/:(.*?);/)[1];
      const b64Data = atob(parts[1]);
      const arrayBuffer = new ArrayBuffer(b64Data.length);
      const uint8Array = new Uint8Array(arrayBuffer);
    
      for (let i = 0; i < b64Data.length; i++) {
        uint8Array[i] = b64Data.charCodeAt(i);
      }
    
      return new Blob([arrayBuffer], { type: contentType });
    };
  }

  
  const handleConditionChange = (event) => {
    setIsOld(event.target.value === "option2");
  };


  // async function getData() {
  //   try {
  //     const response = await fetch('',{
  //       method : "GET" ,
  //       headers : {
  //           accept : '*/*',
  //           Authorization : `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();
  //     console.log(data.data[0].productId);
  //     // productId(data.data[0].productId);
  //   }
  //   catch(error){
  //       console.log(error , 'Error while getting user Products.')
  //   }
  //   }



  async function saveChanges(e){
    e.preventDefault();
    // debugger
    const formData = new FormData();
          
    formData.append('subCategoryId', subCategoryId );
    console.log(subCategoryId)
    formData.append('name', showName);
    console.log(showName)
    formData.append('description', showDescription);
    console.log(showDescription)
    formData.append('isOld', isOld);
    console.log(isOld)
    formData.append('howYearOld',  parseInt(howYearOld));
    console.log(howYearOld)
    formData.append('price', parseFloat(showPrice));
    console.log(showPrice)
    // const location = `${provinces} | ${cities}`;
    formData.append('location', showLocation);
    console.log(showLocation)
    // console.log(selectedProvince2)
    // formData.append('Location', selectedProvince);
    // console.log(selectedProvince)
    // formData.append('ProductImages', selectedImage);
    // console.log(selectedImage)
    // selectedImages.forEach((image, index) => {
    //   formData.append('productImages', image, `image${index}`);
    //   // formData.append(`ProductImages[${index}]`, image);
    //   console.log(image)
    // });
    // formData.append('SubCategoryId', categoryId);
    // console.log(categoryId)

    // formData.append('productImages' , [ '' ])
    
    // console.log("formData is all ",formData)
    // const responseChanges = await axios.put(``, formData , {
    //     headers : {
    //     accept : '*/*',
    //     Authorization : `Bearer ${token}`,
    //     'Content-Type' : 'application/json'}        
    // });
    //     // const dataChanges = await responseChanges.json();
    //     console.log(responseChanges)
        
 }

 function logOut(){
  localStorage.removeItem('userId');
  navigate('/SignIn')
 }
  

  return (
   <>

            <div className='userProfileContainerOut'>

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >


<div className='row'>
    {/* <div className='col-lg-2 col-md-2 col-sm-12 col-xxl-2 flexResp'>
        <div className="flexResp2" style={{height:"1170px",backgroundColor:"#26A5B9"}}>
            
        <div className='flex1'>
                            <div className='imgFlexDiv'>
                              <img src={sellerProfile} className="img-fluid flex-resp3" style={{ width:"50%" }} alt="sellerProfile" />
                            </div>
                            
                            <div className='imgFlexDiv' style={{width:"50%",display:"flex",justifyContent:"flex-start"}}>
                             <p style={{color:"white"}}>FA Creation</p>
                            </div>
                            
                            </div>

        <div className='flex1 mt-2 flex-column' style={{height:"10%"}}>
            <div className='OneOfThreeDiv' style={{backgroundColor:"white"}}>
                <div className='OneOfThreeDivImg' >
                    <img src={productsIcon} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
                </div>

                <div className='OneOfThreeDivText' >
                <p style={{color:"" ,marginTop:"8px"}}>
                <Link to="/UserProducts" style={{textDecoration:"none" ,color:"#26A5B9"}}>
                  Products
                  </Link>
                  </p>
            </div>

            </div>


            <div className='OneOfThreeDiv'>
                <div className='OneOfThreeDivImg'>
                    <img src={peoplesIcon} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
                </div>

                <div className='OneOfThreeDivText'>
                <p style={{color:"white"}}>
                <Link to="/UserProfile" style={{textDecoration:"none" ,color:"white"}}>
                  Profile
                  </Link>
                  </p>
                 
            </div>
            
            </div>


            <div className='OneOfThreeDiv' onClick={logOut}>
                <div className='OneOfThreeDivImg'>
                    <img src={signOut} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
                </div>

                <div className='OneOfThreeDivText'>
                <p style={{color:"white"}}>Sign out</p>
            </div>

            </div>


           
        </div>


        


                            


            </div>
    </div> */}

    <div className='col-lg-10 col-md-10 col-sm-12 col-xxl-10'>
    <div style={{height:"1000px",backgroundColor:"" ,marginLeft:'150px'}}>
        <div className='userProfileCol2Container'>
        {/* <div className='userProfileCol2Text'>
            <p>Edit Your Product</p>
        </div> */}

        <div className='container mt-5 mb-3' >
          <div className='row' >
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn ' style={{ width: "180px" }}>
                  <p>Edit Your Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='userProfileCol2Logo'>
            <img src={mainLogo} className="img-fluid" style={{width:"70%"}} alt="mainLogo" />
        </div> */}

     

<div className='addProductsFormCont'>
    <div className='container' style={{backgroundColor:""}}>
        <div className='row' style={{backgroundColor:""}}>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{backgroundColor:""}}>
                <div className='addProductFormCol'>

                <form  onSubmit={handleUpdate}>
  <div class="mb-4">
    {/* <label for="exampleInputText1" class="form-label productTitleForm">Product Title</label>
    <input type="text" class="form-control"  id="exampleInputText1" value={showName.name} onChange={(e)=>setShowName(e.target.value)} /> */}
    <label for="exampleInputText1" class="form-label productTitleForm">Product Title</label>
    <input type="text" class="form-control" id="exampleInputText1"  value={field.title} name='title' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>
  </div>

  <div class="mb-4">
  {/* <label for="exampleFormControlTextarea1" class="form-label productTitleForm">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={showDescription.description} onChange={(e)=>setShowDescription(e.target.value)}></textarea> */}
  <label for="exampleFormControlTextarea1" class="form-label productTitleForm">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' value={field.description} onChange={handleChange} style={{border:'1px solid black'}}></textarea>
</div>

<div class="mb-5">
<label  class="form-label productTitleForm">Image</label>
<div className='imgInsideForm'>

    <div className='imgInsideFormDiv'>
    <input type="file" name="image" onChange={handleFileChange} />
    {/* <img src={makeupFixer2b} alt="productImg" style={{height:"100%",   background: "#D9D9D9",border_radius: "10px"}} className='img-fluid' /> */}
    {/* {selectedImages.map((image, index) => (
    <div className='productFormBoxImg' key={index}>
      <img src={URL.createObjectURL(image)}  alt={`uploadIcon-${index}`} className="img-fluid" style={{ height:"100%" }} />
    </div>
  ))} */}
  
      {/* <img src={showImage.imageLink} alt="productImg" style={{height:"100%",   background: "#D9D9D9",border_radius: "10px"}} className='img-fluid' /> */}
      
    
    </div>

<div className='productFormBox' style={{backgroundColor:"#D9D9D9",width:"50%",height:"100%",marginLeft:"5px"}} onClick={handleFile}>
    {/* <div className='productFormBoxImg'>
        <img src={upload2} alt="uploadIcon" className="img-fluid" style={{height:"70%"}}/>
    </div> */}
    {/* <div className='productFormBoxText'>
        <p className='productFormBoxTextP' style={{marginTop:"10px"}}>Upload</p>
    </div> */}
</div>
<input type="file" className='d-none' id="filesInput" onChange={handleFileInputChange}/>
</div>


 </div>

{/* <label for="exampleFormControlPrice1" class="form-label productTitleForm">Price</label>
    <input type="text" class="form-control"  id="exampleFormControlPrice1" aria-label="Last name" value={showPrice.price} onChange={(e)=>setShowPrice(e.target.value)} /> */}

    <label for="exampleFormControlPrice1" class="form-label productTitleForm">Price</label>
    <input type="text" class="form-control" id="exampleFormControlPrice1"  value={field.price} name='price' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>

    <label for="exampleFormControlPrice1" class="form-label productTitleForm" style={{marginTop:'16px'}}>UserName:</label>
    {/* <input type="text" class="form-control"  id="exampleFormControlPrice1" aria-label="Last name" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> */}
    <input type="text" class="form-control" id="exampleFormControlPrice1"  value={field.user} name='user' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>



<div style={{marginTop:"25px" , display:"flex",backgroundColor:"",justifyContent:"end"}}>
  <button type="submit" class="btn " style={{backgroundColor:"#26A5B9",color:"white"}} >Save Changes</button>
</div>
</form>


                </div>
            </div>
        </div>
    </div>
   </div>








        </div>
    </div>

    </div>

</div>


</div>
 </div>
    </div>


    </div>




   </>
  )
}

export default EditProduct;
















// import React from 'react';
// import './userProfileReal.css';
// import UserProfileComponent from '../UserProfilePages/UserProfileComponent';
// import UPData from '../UserProfilePages/UPData';

// import sellerProfile from '../../../assets/images/sellerProfile.png';
// import productsIcon from '../../../assets/images/productsIcon.png';
// import peoplesIcon from '../../../assets/images/peoplesIcon.png';
// import signOut from '../../../assets/images/signOut.png';
// import mainLogo from '../../../assets/images/mainLogo.png';
// import searchIcon from '../../../assets/images/Vector (1).png';
// import medicines from '../../../assets/images/medicines.png';
// import edit from '../../../assets/images/edit.png';
// import buttons from '../../../assets/images/delete-icon.png';
// import upload2 from '../../../assets/images/upload2.png';
// import makeupFixer2b from '../../../assets/images/makeupFixer2b.png';

// const UserProfileReal = () => {
//   return (
//    <>
   
   

//             <div className='userProfileContainerOut'>

//     <div className='container-fluid'>
//         <div className='row'>
//             <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >


// <div className='row'>
//     <div className='col-lg-2 col-md-2 col-sm-12 col-xxl-2 flexResp'>
//         <div className="flexResp2" style={{height:"1170px",backgroundColor:"#26A5B9"}}>
            
//         <div className='flex1'>
//                             <div className='imgFlexDiv'>
//                               <img src={sellerProfile} className="img-fluid flex-resp3" style={{ width:"50%" }} alt="sellerProfile" />
//                             </div>
                            
//                             <div className='imgFlexDiv' style={{width:"50%",display:"flex",justifyContent:"flex-start"}}>
//                              <p style={{color:"white"}}>FA Creation</p>
//                             </div>
                            
//                             </div>

//         <div className='flex1 mt-2 flex-column' style={{height:"10%"}}>
//             <div className='OneOfThreeDiv' style={{backgroundColor:"white"}}>
//                 <div className='OneOfThreeDivImg' >
//                     <img src={productsIcon} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
//                 </div>

//                 <div className='OneOfThreeDivText' >
//                 <p style={{color:"#26A5B9" ,marginTop:"8px"}}>Products</p>
//             </div>

//             </div>


//             <div className='OneOfThreeDiv'>
//                 <div className='OneOfThreeDivImg'>
//                     <img src={peoplesIcon} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
//                 </div>

//                 <div className='OneOfThreeDivText'>
//                 <p style={{color:"white"}}>Profile</p>
//             </div>
            
//             </div>


//             <div className='OneOfThreeDiv'>
//                 <div className='OneOfThreeDivImg'>
//                     <img src={signOut} alt="productsIcon" className='img-fluid' style={{height:"60%"}} />
//                 </div>

//                 <div className='OneOfThreeDivText'>
//                 <p style={{color:"white"}}>Sign out</p>
//             </div>

//             </div>


           
//         </div>


        


                            


//             </div>
//     </div>

//     <div className='col-lg-10 col-md-10 col-sm-12 col-xxl-10'>
//     <div style={{height:"1000px",backgroundColor:"orange"}}>
//         <div className='userProfileCol2Container'>
//         <div className='userProfileCol2Text'>
//             <p>Profile Setting</p>
//         </div>

//         <div className='userProfileCol2Logo'>
//             <img src={mainLogo} className="img-fluid" style={{width:"70%"}} alt="mainLogo" />
//         </div>

       
     

// <div className='addProductsFormCont'>
//     <div className='container' style={{backgroundColor:""}}>
//         <div className='row' style={{backgroundColor:""}}>
//             <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{backgroundColor:""}}>
//                 <div className='addProductFormCol' style={{backgroundColor:"",marginLeft:"-20%"}}>


//                 <form>




// <div class="row">
//   <div class="col">
//   <label  class="form-label productTitleForm" for="exampleInputText1">First Name</label>
//   <input type="text" class="form-control"  id="exampleInputText1"  />

 
//   </div>

//   <div class="col">
//   <label for="exampleFormControlPrice1" class="form-label productTitleForm"  >Last Name</label>
//     <input type="text" class="form-control"  id="exampleFormControlLastName" aria-label="Last name" />
//   </div>
// </div>

// <div class="mt-4">
//     <label for="exampleInputEmail1" class="form-label productTitleForm">E-Mail</label>
//     <input type="text" class="form-control"  id="exampleInputEmail1"  />
//   </div>

//   <div class="mt-4">
//     <label for="exampleInputPhone1" class="form-label productTitleForm">Phone No</label>
//     <input type="text" class="form-control"  id="exampleInputPhone1"  />
//   </div>

// <div className='row' style={{backgroundColor:''}}>
//     <div className='col-lg-6 col-md-6 col-sm-12 col-xxl-6'>
// <div class="my-4" style={{display:"inline-block"}}>
// <div>

// </div>
// </div>

// </div>

// <div className='col-lg-6 col-md-6 col-sm-12 col-xxl-6'>
// <div class="my-4" style={{display:"inline-block"}}>
// <div>


// </div>

// </div>

// </div>

// </div>
// <div style={{marginTop:"5px" , display:"flex",backgroundColor:"",justifyContent:"start"}}>
//   <button type="submit" class="btn " style={{backgroundColor:"#26A5B9",color:"white"}}>Save Changes</button>
// </div>
// </form>


//                 </div>
//             </div>
//         </div>
//     </div>
//    </div>








//         </div>
//     </div>

//     </div>

// </div>


// </div>
//  </div>
//     </div>


//     </div>




 





   
   
   
//    </>
//   )
// }

// export default UserProfileReal


