import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


import ProductForm from './components/ProductForm';

function App() {

  const [productsData, setProductsData] = useState([])


  useEffect( () => {
    axios.get('http://localhost:8000/api/products')
      .then( (res) =>{
        console.log(res.data.products)
        setProductsData(res.data.products)
      })
      .catch( err => console.log(err)  )
  }, [])



  return (
    <div className="App">
      <h1>Product Manager App</h1>
      
      <hr />

      {/* Place form comp outside switch 
      to display on every route */}
      <ProductForm/>

      <hr />
      
      
      {/* Switch will be used to handle different 
      route calls to API >>> depending on inputs from form */}
      <Switch>
        <Route path="/"></Route>
      </Switch>

      
      {
        // JSON.stringify(data)
        productsData.map ((product, i) => {
          return <p key={i}>
                  {product.title}
                </p>
        })
      }

    </div>
  );
}

export default App;
