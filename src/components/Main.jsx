import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {

    // CREATE STATE VARIABLE
    const [productsData, setProductsData] = useState([])


    // USE EFFECT to render all products on home page render
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data.products)
                setProductsData(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='form-control btn-dark'>
            <h1>All Products</h1>
            <hr />
            {
                // JSON.stringify(data)
                productsData.map((product, _id) => {
                    return (
                            <p key={product._id} style={{fontSize: "20px"}}>
                                <Link to={ `/products/${product._id}`} style={{color: "cyan"}}>{product.title}</Link>
                            </p>
                    )
                })   
            }
        </div>
    );
};

export default Main;
