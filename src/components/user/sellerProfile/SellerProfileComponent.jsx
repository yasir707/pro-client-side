import React from 'react';
import { Link } from 'react-router-dom';

const SellerProfileComponent = (props) => {
    const productId = props.productId;
    return (
        <>

            <div className='col-lg-4 col-md-4 col-sm-12' style={{ backgroundColor: "" }}>
                <div className='sellerFirstProductDiv'>
                    <div className='sellerFirstProductImgDiv'>
                        <Link className='product-link' to={`/ProductView/${productId}`}  >
                            <img src={props.img} alt="makeup" style={{ height: "100%" }} className='img-fluid' />
                        </Link>
                    </div>
                    <div className='sellerProductTitleDiv'><p style={{ marginLeft: "" }}>{props.title}</p></div>
                    <div className='sellerProductPriceDiv'>
                        <span>Price: {props.price}</span>
                        <div>
                            <div class="col-3">
                                <i class="fa fa-heart-o heartIconPractice mt-2 heartHover" aria-hidden="true" id="colorChangeId"  >{props.imgHeart}</i>
                            </div>
                        </div>
                    </div>

                    <div className='sellerProductLocationDiv'>
                        <span>{props.location}</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SellerProfileComponent;
