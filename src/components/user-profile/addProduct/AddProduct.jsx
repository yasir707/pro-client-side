import React, { useEffect } from 'react';
import './addProduct.css'
import NavbarReal from '../../user/home_pages/NavbarReal';
import Footer from '../../footer/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import upload2 from '../../../assets/images/upload2.png';

const AddProduct = () => {
    const [field , setField] = useState({image:null,title:'',description:'',price:'',user:''});

const [name , setName] = useState('');
const [description , setDescription] = useState('');
const [price , setPrice] = useState(0.0);
const [howOld , setHowOld] = useState(0);
// const [selectedImage, setSelectedImage] = useState([]);
const [selectedImages, setSelectedImages] = useState([]);
const [allCategories , setAllCategories] = useState([]);
const [subCategories , setSubCategories] = useState([]);
const [subCategoryId, setSubCategoryId] = useState('');

const [provinceName, setProvinceName] = useState(null);
const [cityName, setCityName] = useState(null);
const [selectedProvince2, setSelectedProvince2] = useState('');
const [selectedCity , setSelectedCity] = useState('');

const [categoryId, setCategoryId] = useState('');

const [selectedCategory, setSelectedCategory] = useState('');
const [selectedProvince, setSelectedProvince] = useState('');
const [selectedCities , setSelectedCities] = useState('');

const [provinces , setProvinces] = useState([]);
const [cities , setCities] = useState([]);
const [provinceId, setProvinceId] = useState('');
const [isOld, setIsOld] = useState(false);
const [isMan, setIsMan] = useState(false);
const [showTarget, setShowTarget] = useState(false);

const token = localStorage.getItem('token');
let navigate = useNavigate();

// new code
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

  async function handleSubmit(){
    navigate('/');
    const token = localStorage.getItem('token');
    console.log('Token used for student creation:', token); 
    if (!token) {
      console.error('No token found');
      return;
  }
    //   navigate('/');
      const single_data = new FormData();
      single_data.append('image', field.image);
      single_data.append('title', field.title);
      single_data.append('description', field.description);
      single_data.append('price', field.price);
      single_data.append('user', field.user);
      let response = await fetch('http://localhost:8080/post' ,
      {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`
          },
          body:single_data
      }
      );
      console.log(token)
      if (response.ok) {
          let data = await response.json();
      console.log('User added successfully');

      } else {
          let errorData = await response.json();
      console.error('Error adding user:', errorData);
      }

  }
// ------

const handleUploadClick = () => {
  const fileInput = document.getElementById('fileInput');
  fileInput.click();
};

const handleFileInputChange = (event) => {
  // const file = event.target.files[0];
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

  
  
  // if (file) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setSelectedImage(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }
};


  
  async function getCategories(){
    const response = await fetch('');
        const data = await response.json();
        setAllCategories(data.data);
        // if(data.data[0].name || data.data[7].name){
        //   setShowTarget(true);
        // }
        // categoryId = data.data[0].categoryId;
        // setCategoryId(data.data[0].categoryId);
        // console.log(data.data[0].categoryId);
        // console.log(data.data[0].name);
  }


  const handleCategoryChange = async (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    // Fetch subcategories data based on selected category
    getSubCategories(categoryId);
    // console.log(categoryId)

  };
//  let   subCategoryId
  async function getSubCategories(categoryId){
    const responseSubC = await fetch(``);
        const dataSubC = await responseSubC.json();
        setSubCategories(dataSubC.data)
        setSubCategoryId(dataSubC.data[0].subCategoryId);
        //  subCategoryId = dataSubC.data[0].subCategoryId;

        // console.log(data.data[0].name);
  }

  // const handleCategoryChange = (event) => {
  //   const selectedCategoryId = event.target.value;
  //   setSelectedCategory(selectedCategoryId);
  // };

  async function getProvinces(){
    const responseProvince = await fetch('');
        const dataProvince = await responseProvince.json();
        // setSubCategories(dataSubC.data)
        setProvinces(dataProvince.data);
        // setProvinceId(dataProvince.data[0].provinceId);
        setProvinceId(dataProvince.data[0].provinceId);
        // setProvinceId(dataProvince.data.map((value)=>(value.provinceId)));

        // console.log('provinceId' + provinceId)
        // setSelectedProvince(dataProvince.data[0].name);


        const provinceList = dataProvince.data.map((value)=>(value.name));
        setProvinceName(provinceList);
        setSelectedProvince(provinceList[0]);
        
        
        // console.log(dataProvince)
        // console.log(dataProvince.data[0].provinceId)
        // console.log(dataProvince.data[0].name)
        // console.log(dataSubC.data);
        // console.log(data.data[0].name);
  }

  async function handleProvinceChange1(event){
    const selectedProvinceName = event.target.value;
    const selectedProvince = provinces.find((province) => province.name === selectedProvinceName);
    if (selectedProvince){
        const provinceId = selectedProvince.provinceId;

        setProvinceId(provinceId);

        await getCities(provinceId);
    }

  }
  async function handleProvinceChange2(event){
    setSelectedProvince2(event.target.value)}

    function handleBothProvinceChanges(event) {
      handleProvinceChange1(event);
      handleProvinceChange2(event);
    }


  async function getCities(provinceId){
    const responseCity = await fetch(``);
        const dataCity = await responseCity.json();
        setCities(dataCity.data)
        // console.log(dataCity.data[0].cityId);
        // console.log(dataCity.data[0].name);
        // console.log(dataCity.data[0].provinceName);
        // console.log(data.data[0].name);
        const cityList = dataCity.data.map((value)=>(value.name));
        setCityName(cityList);
        setSelectedCities(cityList[0]);
  }

  async function handleCityChange(event){
    setSelectedCity(event.target.value)}


  
  async function publishProduct(e ){
    e.preventDefault();
    try{

          const formData = new FormData();
          
    
    formData.append('title', name);
    console.log(name)
    formData.append('description', description);
    console.log(description)
    formData.append('price', parseFloat(price));
    console.log(price)
    // console.log(selectedProvince2)
    // formData.append('Location', selectedProvince);
    // console.log(selectedProvince)
    // formData.append('ProductImages', selectedImage);
    // console.log(selectedImage)
    selectedImages.forEach((image, index) => {
      formData.append('image', image, `image${index}`);
      // formData.append(`ProductImages[${index}]`, image);
      console.log(image)
    });

    
    // document.querySelector('#imageInput').files[0]

    const responsePublish = await fetch('http://localhost:8080/post',
    {
      method : "POST",
      headers : {
      accept : "*/*",
      Authorization : `Bearer ${token}`,
      },
      
       body: formData
    });

    if (responsePublish.ok) {
      const dataPublish = await responsePublish.json();
      setCities(dataPublish);
      if (responsePublish.ok) {
        navigate('/UserProducts');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Product Added.',
          showConfirmButton: false,
          timer: 2000,
        });
      }
      else {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Could not add product.',
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
    } else {
      const errorResponse = await responsePublish.json();
      const errorMessage = errorResponse.message || 'Unknown error occurred.';
      throw new Error(`Failed to publish product. Server returned an error: ${errorMessage}`);
    }
        // const dataPublish = await responsePublish.json();
        // setCities(dataPublish)
// debugger

        // console.log(dataCity.data[0].cityId);
        // console.log(dataCity.data[0].name);
        // console.log(dataCity.data[0].provinceName);
        // console.log(data.data[0].name);
  }

catch(error){
  console.log(error , 'Error while publishing product.')
}
  }

  

//   useEffect(()=>{
//     getCategories();
//     getProvinces()
//   },[])



  const handleConditionChange = (event) => {
    setIsOld(event.target.value === "option2");
  };
  const handleConditionChangeTarget = (event) => {
    setIsMan(event.target.value === "option4");
  };

  // const handleCategoryChange = (event) => {
  //   const selectedCategoryId = parseInt(event.target.value);
  //   const selectedCategory = allCategories.find((category) => category.id === selectedCategoryId);
  //   setSelectedCategory(selectedCategory);
  // };

  // useEffect(() => {
  //   if (categoryId) {
  //        getSubCategories();

  //   }
  // }, [categoryId]);

  // useEffect(() => {
  //   if (selectedCategory) {
  //     getSubCategories(selectedCategory);
  //   }
  // }, [selectedCategory]);

  // useEffect(() => {
  //   if (provinceId) {
  //        getCities();

  //   }
  // }, [provinceId]);


  return (
   <>
   <NavbarReal></NavbarReal>
 
   <div className='addProductsFormCont'>
    <div className='container' style={{backgroundColor:"",marginTop:"-25px"}}>
        <div className='row' style={{backgroundColor:""}}>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{backgroundColor:""}}>
                <div className='addProductFormCol'>

                {/* <form onSubmit={publishProduct}> */}
                <form onSubmit={handleSubmit}>
  <div class="mb-4">
    <label for="exampleInputText1" class="form-label productTitleForm">Product Title</label>
    <input type="text" class="form-control" id="exampleInputText1"  value={field.name} name='title' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>

    {/* <input type="text" class="form-control"  id="exampleInputText1" value={name} onChange={(e)=>setName(e.target.value)}   /> */}
  </div>

  <div class="mb-4">
  <label for="exampleFormControlTextarea1" class="form-label productTitleForm">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' value={field.description} onChange={handleChange} style={{border:'1px solid black'}}></textarea>
 
</div>

<div class="mb-5">
<label  class="form-label productTitleForm">Image</label>
<div className='imgInsideForm'>
<input type="file" name="image" onChange={handleFileChange} />
{/* <div className='productFormBox' style={{backgroundColor:"#D9D9D9",width:"50%",height:"100%",marginLeft:"5px"}} onClick={handleUploadClick}>
    <div className='productFormBoxImg'>
        <img src={upload2} alt="uploadIcon" className="img-fluid" style={{height:"70%"}}/>
    </div>
    <div className='productFormBoxText'>
        <p className='productFormBoxTextP' style={{marginTop:"10px"}}>Upload</p>
    </div>
</div> */}

<div className='productFormBox' style={{backgroundColor:"#D9D9D9",width:"50%",height:"100%",marginLeft:"5px"}}>
{selectedImages.map((image, index) => (
    <div className='productFormBoxImg' key={index}>
      <img src={URL.createObjectURL(image)}  alt={`uploadIcon-${index}`} className="img-fluid" style={{ height:"100%" }} />
    </div>
  ))}
    {/* <div className='productFormBoxImg'>
        <img src={selectedImage} alt="uploadIcon" className="img-fluid" style={{height:"100%"}}/>
    </div> */}
    </div>

    <input type='file' className='d-none'  id="fileInput" onChange={handleFileInputChange}/>

</div>
 </div>








  <div className="row mt-4">
  <div class="col">
  <label for="exampleFormControlPrice1" class="form-label productTitleForm">Price</label>
    {/* <input type="text" class="form-control"  id="exampleFormControlPrice1" aria-label="Last name" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> */}
    <input type="text" class="form-control" id="exampleFormControlPrice1"  value={field.price} name='price' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>

    
  </div>

  </div>

  <div className="row mt-4">
  <div class="col">
  <label for="exampleFormControlPrice1" class="form-label productTitleForm">UserName:</label>
    {/* <input type="text" class="form-control"  id="exampleFormControlPrice1" aria-label="Last name" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> */}
    <input type="text" class="form-control" id="exampleFormControlPrice1"  value={field.user} name='user' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>

    
  </div>

  </div>





<div style={{marginTop:"15px" , display:"flex",backgroundColor:"",justifyContent:"end"}}>
  <button type="submit" class="btn " style={{backgroundColor:"#26A5B9" ,color:"white"}}
  >Publish</button>
</div>
</form>


                </div>
            </div>
        </div>
    </div>
   </div>


   <Footer></Footer>

   
   </>
  )
}

export default AddProduct;
