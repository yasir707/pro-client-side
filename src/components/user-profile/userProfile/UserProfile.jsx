import React, { useEffect } from 'react';
import { useState } from 'react';
import sellerProfile from '../../../assets/images/sellerProfile.png';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = (props) => {
    const [field , setField] = useState({name:'',email:'',password:''});
    const [showPassword , setShowPassword] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const { productId } = useParams();
    const userId = localStorage.getItem('userId');
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
          let response = await fetch(`http://localhost:8080/profile/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
          );
          let data = await response.json();
          setField({
            name: data.name,
            email: data.email
                  });
          console.log(data)
      }
      async function handleUpdate(e){
        e.preventDefault();
      
        const myData = {
          name: field.name,
          email: field.email
      };
        
        let response = await fetch(`http://localhost:8080/profile/${userId}` ,
            
        {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(myData)
        }
        );
        
        console.log(myData)
        if (response.ok) {
            let data = await response.json();
        console.log('User added successfully');
        navigate('/');
        } else {
            let errorData = await response.json();
        console.error('Error adding user:', errorData);
        }
  
  
    }

    const showPasswordFunction = () => {
        setShowPassword(!showPassword);
    };








    




   
  

 

 

 



  

  return (
   <>

            <div className='userProfileContainerOut'>

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >


<div className='row'>
 

    <div className='col-lg-10 col-md-10 col-sm-12 col-xxl-10'>
    <div style={{height:"1000px",backgroundColor:"" ,marginLeft:'150px'}}>
        <div className='userProfileCol2Container'>
       

        <div className='container mt-5 mb-3' >
          <div className='row' >
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' >
              <div className='adminDashboardSecondPatti' style={{ width: "", marginLeft: "", backgroundColor: "white" }}>
                <div className='adminDashboardSecondPattiIn ' style={{ width: "180px" }}>
                  <p>Edit Your Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      

<div className='addProductsFormCont'>
    <div className='container' style={{backgroundColor:""}}>
        <div className='row' style={{backgroundColor:""}}>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{backgroundColor:""}}>
                <div className='addProductFormCol'>

                <form  onSubmit={handleUpdate}>
  <div class="mb-4">
   
    <label for="exampleInputText1" class="form-label productTitleForm">UserName:</label>
    <input type="text" class="form-control" id="exampleInputText1"  value={field.name} name='name' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>
  </div>

 





    <label for="exampleFormControlPrice1" class="form-label productTitleForm">Email</label>
    <input type="email" class="form-control" id="exampleFormControlPrice1"  value={field.email} name='email' onChange={handleChange} style={{marginTop:'10px' , border:'1px solid black'}}/>



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

export default UserProfile;
















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


