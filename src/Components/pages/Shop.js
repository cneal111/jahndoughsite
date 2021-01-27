import React  from 'react'
import { useState, useEffect } from 'react';
import '../../App.css';
import Products from './StoreComponents/Products/Products'
import Cart from '../Cart/Cart';
import { commerce } from '../../lib/commerce'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import {Typography} from '@material-ui/core';




const Shop = () => {

{/* 
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
  

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

      const fetchCart = async () => {

        setCart(await commerce.cart.retrieve());
      };

      const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
    
        setCart(cart);
      };

   
      useEffect(() => {
        fetchProducts();
        fetchCart();

      }, []);

      console.log(products)
    */}
    return (

       <Router>
       
            <div>
                <Switch>

                    <Route exact path="/shop">
                      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}

                      <Typography variant="h1" color="textSecondary"style={{backgroundColor:'white', opacity:'100%'}} >
                        <br/> <br/> <br/> <br/> 
          
                        Coming Soon!
                        <br/> <br/> <br/>
                      </Typography>
                    
                    </Route>
                
                   

                </Switch>
                
           
            </div>

        </Router>
       
    )
}

export default Shop
