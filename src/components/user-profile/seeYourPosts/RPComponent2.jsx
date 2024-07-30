import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const RPComponent2 = (props) => {
    const navigate = useNavigate();

    const [showProducts, setShowProducts] = useState([]);

    const productId = props.productId;
    const products = props.products;

    useEffect(() => {
        setShowProducts(products);
    }, [products]);

    async function deleteProduct() {
        alert('Refresh Page')
        let response = await fetch(`http://localhost:8080/post/${productId}`, {
            method: 'DELETE',
            'Content-Type': 'application/json',
        });
        let data = await response.json();
        if (response.ok) {
            console.log('User deleted successfully');
            setShowProducts(prevProducts =>
                prevProducts.filter(product => product._id !== productId)
            );
            navigate('/')

        } else {
            console.error('Error deleting user');
        }
        console.log(data)
    }


    return (
        <>


            <Link className='product-link' to={`/ProductView/${props.productId}`}  >
                <img src={props.img} alt="" style={{ width: "100%", maxHeight: "200px", height: "auto" }} />
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
                    <i class="fa fa-heart-o heartIconPractice mt-2 heartHover" aria-hidden="true" id="colorChangeId"  >{props.heart}</i>
                </div>
            </div>
            <div className='row'>
                <div class="col-6" style={{ marginLeft: '26px' }}>
                    <button type="button" class="btn btn-info" style={{ color: 'white' }} onClick={() => navigate(`/EditProduct/${productId}`)}>Edit</button>
                </div>
                <div class="col-4">
                    <button type="button" onClick={deleteProduct} class="btn btn-info" style={{ color: 'white' }}>Delete</button>
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




        </>
    )
}

export default RPComponent2
