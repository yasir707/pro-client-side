import React, { useEffect } from 'react';
import './practice.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const RPComponent = (props) => {
    const navigate = useNavigate();
    
    const token = localStorage.getItem('token');
    const productId = props.productId;
    const userId = localStorage.getItem('userid');

    return (
        <>

        
            
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
                        <i class="fa fa-heart-o heartIconPractice mt-2 heartHover"  aria-hidden="true" id="colorChangeId"  >{props.heart}</i>
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

export default RPComponent
