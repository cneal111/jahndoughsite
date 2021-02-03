import React  from 'react'
import { useState, useEffect } from 'react';
import '../../App.css';
import Products from './StoreComponents/Products/Products'
import {Typography} from '@material-ui/core'
import Cart from '../Cart/Cart';
import { commerce } from '../../lib/commerce'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';





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

      const handleAddToCart = async (productId,quantity,variant) => {
        const { cart } = await commerce.cart.add(productId,quantity,variant);
    
        
        setCart(cart);
      };

   
      useEffect(() => {
        fetchProducts();
        fetchCart();

      }, []);

      */}
      
   
    return (

       <Router>
       
            <div>
                <Switch>

                    <Route exact path="/shop">
                     {/*   <Products products={products} onAddToCart={handleAddToCart}/> */}

                    
                      //Shop maintenance msg for changes to be made while site during production 
                      <Typography variant="h1" color="textSecondary"style={{backgroundColor:'white', opacity:'100%'}} >
                        <br/> <br/>
                        Sorry, our shop is down for maintenance currently. <br/>
                        Please check back soon!
                        <br/> <br/> <br/> <br/>
                      </Typography>
                   

                    </Route>

                </Switch>
                
           
            </div>

        </Router>
       
    )
}

export default Shop
