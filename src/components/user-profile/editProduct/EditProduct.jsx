import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = (props) => {
  const [field, setField] = useState({ image: null, title: '', description: '', price: '', user: '' });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { productId } = useParams();
  useEffect(() => {
    fetchData()
  }, []);

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
  async function fetchData() {
    let response = await fetch(`http://localhost:8080/post/${productId}`);
    let data = await response.json();
    setField(data)
    // console.log(data)
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const single_data = new FormData();
    single_data.append('image', field.image);
    single_data.append('user', field.user);
    single_data.append('title', field.title);
    single_data.append('description', field.description);
    single_data.append('price', field.price);

    let response = await fetch(`http://localhost:8080/post/${productId}`,
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


  function logOut() {
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


                <div className='col-lg-10 col-md-10 col-sm-12 col-xxl-10'>
                  <div style={{ height: "1000px", backgroundColor: "", marginLeft: '150px' }}>
                    <div className='userProfileCol2Container'>


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





                      <div className='addProductsFormCont'>
                        <div className='container' style={{ backgroundColor: "" }}>
                          <div className='row' style={{ backgroundColor: "" }}>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12' style={{ backgroundColor: "" }}>
                              <div className='addProductFormCol'>

                                <form onSubmit={handleUpdate}>
                                  <div class="mb-4">

                                    <label for="exampleInputText1" class="form-label productTitleForm">Product Title</label>
                                    <input type="text" class="form-control" id="exampleInputText1" value={field.title} name='title' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />
                                  </div>

                                  <div class="mb-4">

                                    <label for="exampleFormControlTextarea1" class="form-label productTitleForm">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name='description' value={field.description} onChange={handleChange} style={{ border: '1px solid black' }}></textarea>
                                  </div>

                                  <div class="mb-5">
                                    <label class="form-label productTitleForm">Image</label>
                                    <div className='imgInsideForm'>

                                      <div className='imgInsideFormDiv'>
                                        <input type="file" name="image" onChange={handleFileChange} />



                                      </div>


                                    </div>


                                  </div>


                                  <label for="exampleFormControlPrice1" class="form-label productTitleForm">Price</label>
                                  <input type="text" class="form-control" id="exampleFormControlPrice1" value={field.price} name='price' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />

                                  <label for="exampleFormControlPrice1" class="form-label productTitleForm" style={{ marginTop: '16px' }}>UserName:</label>

                                  <input type="text" class="form-control" id="exampleFormControlPrice1" value={field.user} name='user' onChange={handleChange} style={{ marginTop: '10px', border: '1px solid black' }} />



                                  <div style={{ marginTop: "25px", display: "flex", backgroundColor: "", justifyContent: "end" }}>
                                    <button type="submit" class="btn " style={{ backgroundColor: "#26A5B9", color: "white" }} >Save Changes</button>
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
