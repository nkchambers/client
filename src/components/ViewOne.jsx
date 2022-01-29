import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const ViewOne = (props) => {

    // GRABBING VARIABLE FROM URL
    const {id} = useParams()


    //SET STATE VARIABLE >>> PRODUCT SHOWN
    const[viewProduct, setViewProduct] = useState({})

    // USE EFFECT TO RENDER INFO WITHOUT REFRESHING
    useEffect( () => {
    
        // MAKE AXIOS CALL TO DB >>> GRAB OBJ INFO TO DISPLAY
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data.product);
                setViewProduct(res.data.product)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <div className='form-control btn-dark' style={{margin: "20px auto", borderRadius: "5px"}}>
            <h2 style={{color: "cyan", padding: "20px auto"}}>{viewProduct.title}</h2>
            <hr />
            <p style={{fontSize: "20px", padding: "5px auto"}}>
                Price: ${viewProduct.price}</p>
            <p style={{fontSize: "20px", padding: "5px auto", marginBottom: "50px"}}>
                Description: {viewProduct.description}</p>

            <button className="btn btn-dark"
            style={{ padding: "5px 20px", fontSize: "18px", border: "2px solid cyan" }}>
            <Link to={`/products/update/${viewProduct._id}`} style={{color: "cyan"}}>Update</Link></button>
        </div>
    );
};

export default ViewOne;
