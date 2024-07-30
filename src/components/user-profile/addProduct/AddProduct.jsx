import React, { useEffect } from 'react';
import './addProduct.css'
import NavbarReal from '../../user/home_pages/NavbarReal';
import Footer from '../../footer/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [field, setField] = useState({ image: null, title: '', description: '', price: '', user: '' });

  const token = localStorage.getItem('token');
  let navigate = useNavigate();

  function handleChange(e) {
    let nameField = e.target.name;
    let valueField = e.target.value;
    setField((prevVal) => ({ ...prevVal, [nameField]: valueField }))
  }
  function handleFileChange(e) {
    setField({
      ...field,
      image: e.target.files[0]
    });
  }

  async function handleSubmit() {
    navigate('/');
    const token = localStorage.getItem('token');
    console.log('Token used for student creation:', token);
    if (!token) {
      console.error('No token found');
      return;
    }
    const single_data = new FormData();
    single_data.append('image', field.image);
    single_data.append('title', field.title);
    single_data.append('description', field.description);
    single_data.append('price', field.price);
    single_data.append('user', field.user);
    let response = await fetch('http://localhost:8080/post',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: single_data
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


  return (
    <>
      <NavbarReal></NavbarReal>

      <div className='addProductsFormCont'>
        <div className='container' style={{ backgroundColor: "", marginTop: "-25px" }}>
          <div className='row' style={{ backgroundColor: "" }}>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{ backgroundColor: "" }}>
              <div className='addProductFormCol'>

                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label for="exampleInputText1" class="form-label productTitleForm">Product Title</label>
                    <input type="text" class="form-control" id="exampleInputText1" value={field.name} name='title' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />


                  </div>

                  <div class="mb-4">
                    <label for="exampleFormControlTextarea1" class="form-label productTitleForm">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' value={field.description} onChange={handleChange} style={{ border: '1px solid black' }}></textarea>

                  </div>

                  <div class="mb-5">
                    <label class="form-label productTitleForm">Image</label>
                    <div className='imgInsideForm'>
                      <input type="file" name="image" onChange={handleFileChange} />



                    </div>
                  </div>


                  <div className="row mt-4">
                    <div class="col">
                      <label for="exampleFormControlPrice1" class="form-label productTitleForm">Price</label>

                      <input type="text" class="form-control" id="exampleFormControlPrice1" value={field.price} name='price' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />


                    </div>

                  </div>

                  <div className="row mt-4">
                    <div class="col">
                      <label for="exampleFormControlPrice1" class="form-label productTitleForm">UserName:</label>

                      <input type="text" class="form-control" id="exampleFormControlPrice1" value={field.user} name='user' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />


                    </div>

                  </div>



                  <div style={{ marginTop: "15px", display: "flex", backgroundColor: "", justifyContent: "end" }}>
                    <button type="submit" class="btn " style={{ backgroundColor: "#26A5B9", color: "white" }}
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
