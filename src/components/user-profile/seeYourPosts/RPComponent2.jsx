import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const RPComponent2 = (props) => {
    const navigate = useNavigate();
   
    
    // let token = localStorage.getItem('token');
    // let userId = localStorage.getItem('userid');
    // const encodedToken = encodeURIComponent(token);


    // async function wishListFunction(){console.log("productId",productId);
    //     try{
    //     const response = await fetch(`https://inventstarts.com:5010/api/WishList/add-product-into-user-wishList/${productId}/${userId}`
    //     ,
    //     {
    //         method:"POST",
    //         headers:{
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${encodedToken}`
    //         } 
    //     }
    //     );

    //     const data = await response.json();
    //     console.log('hello heart');
    //     console.log(data)
    // }
    // catch(error){
    //     console.log(error , 'Error while adding in Favourite page')
    // }
    // }ee2bec88-36d3-40d6-a69d-b87013f05d07
   const [controlFunctions , setControlFunctions] = useState(false);
   const [wishListId , setWishListId] = useState('');
   const [showProducts , setShowProducts] = useState([]);
//    function mainFunction(){
//    setControlFunctions(!controlFunctions);
//    }
    // const wishListId = props.wishListId;
    // console.log(wishListId);
    const token = localStorage.getItem('token');
    const productId = props.productId;
    const products = props.products;
    const userId = localStorage.getItem('userid');

    useEffect(() => {
        setShowProducts(products); 
      }, [products]); 

    async function deleteProduct(){
        alert('Refresh Page')
        let response = await fetch(`http://localhost:8080/post/${productId}` , {
          method:'DELETE',
           'Content-Type': 'application/json',
        });
        let data = await response.json();
        if (response.ok) {
          console.log('User deleted successfully');
        //   setShowProducts(products.filter(post => post._id !== productId));
          setShowProducts(prevProducts => 
            prevProducts.filter(product => product._id !== productId)
          );
      
        } else {
          console.error('Error deleting user');
        }
        console.log(data)
      }
   
//    (controlFunctions ? wishListFunction() : wishListRemovalFunction());
  
    // let wishListId;
    async function wishListFunction(){
        const color = document.getElementById('colorChangeId');
        color.style.color="#26A5B9"
        try{
            const color = document.getElementById('colorChangeId');
            color.style.color="#26A5B9";
        const response = await fetch(`` ,
        {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data.data)
        const wishListId = data.data.wishlistId;
          setWishListId(wishListId);
         console.log(wishListId)

         if (response.ok) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Successfully Added to your WishList.',
              showConfirmButton: false,
              timer: 2000,
            });
            navigate('/Favourite')
          }
          else {
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'Could not add in Favourites!',
                      showConfirmButton: false,
                      timer: 2000,
                    });
                  }

        }
        catch(error){
            console.log('Error while adding products into wishlist' + error);
        }
    }




    async function wishListRemovalFunction(){
        try{

        const responseRemove = await fetch(`` ,
        {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                'content-type':'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const dataRemove = await responseRemove.json();
        console.log(dataRemove);
        }
        catch(error){
            console.log('Error while removing products from wishlist' + error);
        }
    }



    

    return (
        <>

            {/* <div class="col-lg-3 col-md-6 col-sm-12  product" style={{ backgroundColor: "", marginBottom:"20px" ,display:""}}> */}
            
            <Link className='product-link' to={`/ProductView/${props.productId}`}  > 
            <img src={props.img} alt="" style={{width:"100%",maxHeight:"200px",height:"auto"}} />
             </Link>
               
                <div class="row mt-2" style={{ marginLeft: "5px" }}>
                    <div class="col-12 practiceProductTitle">
                        <h5>{props.title}</h5>
                    </div>
                </div>

                <div class="row mt-2" style={{ marginLeft: "5px" }}>
                    <div class="col-12 practiceProductTitle">
                        <h5>Price: {props.price}</h5>
                    </div>
                </div>

                <div class="row mt-3 " style={{ marginLeft: "5px" }}>
                    <div class="col-9 practicePriceDiv "  >
                        <p> </p>
                        <p className='practiceP2'> User: {props.user}</p>
                    </div>
                   
                    <div class="col-3">
                        <i class="fa fa-heart-o heartIconPractice mt-2 heartHover"  aria-hidden="true" id="colorChangeId" onClick={wishListFunction} >{props.heart}</i>
                    </div>
                    {/* mainFunction */}
                </div>
                <div className='row'>
                <div class="col-6" style={{marginLeft:'26px'}}>
                <button type="button" class="btn btn-info" style={{color:'white'}} onClick={()=> navigate(`/EditProduct/${productId}`)}>Edit</button>
                    </div>
                    <div class="col-4">
                    <button type="button" onClick={deleteProduct} class="btn btn-info" style={{color:'white'}}>Delete</button>
                    </div>
                </div>
                <div className='row ' >
                    <div className="col-4  " >
                        <p className='dimFont' >{props.addedAgo}</p>
                    </div>
                    <div className="col-1   p-0">
                        <p className='dimFont'>|</p>
                    </div>
                    <div className='col-7    p-0'>
                        <p className='dimFont'>{props.location}</p>
                    </div>
                </div>
            {/* </div> */}

            


        </>
    )
}

export default RPComponent2
