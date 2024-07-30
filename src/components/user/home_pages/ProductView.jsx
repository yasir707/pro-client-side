import './productView.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RPComponent from './RPComponent';

const ProductView = () => {
  const { productId } = useParams();
  const [userId, setUserId] = useState([]);
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [categoryId, setCategoryId] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    getAgain();
  }, [productId, categoryId]);



  async function getAgain() {
    const responseReal = await fetch(`http://localhost:8080/post/${productId}`);
    const dataReal = await responseReal.json();
    console.log(dataReal);
    setUserId(dataReal)
    setProduct(dataReal);
    setUserName(dataReal);
    setTitle(dataReal);
    setPrice(dataReal)
    setDescription(dataReal);

  }

  if (!product) {
    return <p>Loading...</p>;
  }



  return (
    <>


      <div className='productViewMainCont'>

        <div style={{ backgroundColor: "red", marginLeft: "7%" }}>

          <div className='productDetailCont'>
            <div className='productDetailContInside'>
              <div class="card mb-3" style={{ max_width: "540px" }}>
                <div class="row g-0" >
                  <div class="col-md-4"  >

                    <img src={product.image ? `http://localhost:8080/${product.image.replace(/\\/g, '/')}` : 'placeholder.png'} class="img-fluid rounded-start" style={{ width: "100%" }} alt="Pouch" />

                  </div>



                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title my-2">{productName.name}</h5>

                      <div class="container  my-2" >
                        <div class="row" >
                          <div class="col" >
                            UserName:
                          </div>
                          <div class="col " style={{ display: "flex", justifyContent: "flex-end" }}>

                            <h5 >{userName.user}</h5>

                          </div>

                        </div>
                      </div>

                      <div class="container  my-2" >
                        <div class="row" >
                          <div class="col" >
                          </div>
                          <div class="col " style={{ display: "flex", justifyContent: "flex-end" }}>


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

                      <div class="container  my-2" >
                        <div class="row" >
                          <div class="col" >
                            Price:
                          </div>
                          <div class="col " style={{ display: "flex", justifyContent: "flex-end" }}>

                            <h5 >{price.price}</h5>

                          </div>

                        </div>
                      </div>

                      <p class="card-text"><small class="text-body-secondary">

                      </small></p>
                    </div>
                    <hr />
                    <div style={{ width: "42%", height: "40px", float: "right", marginBottom: "50px" }}>
                      <Link to={`/SellerProfile/${userId.userId}`}><p>View Seller Profile</p></Link>

                    </div>
                  </div>
                </div>
              </div>


            </div>


            <div className='row mt-5 ' style={{ marginLeft: "4%" }} >
              <div className='col-lg-12 col-md-12 col-sm-12 col-xxl-12'>
                <div className="sellerDescriptionCont3" style={{ color: "" }}>

                  <div className='pattiA'>
                    <div className='patti1A' style={{ width: "35%" }}><p className="pattiLast" style={{ marginLeft: "5%", marginTop: "8%" }}>Description</p></div>
                    <div className='patti2A' style={{ marginTop: "" }}></div>
                  </div>


                  <div className='parasMainDiv'>


                    <p dangerouslySetInnerHTML={{ __html: description.description }}>


                    </p>

                  </div>



                </div></div></div>





          </div>


        </div>










      </div>


    </>
  );
};
export default ProductView;