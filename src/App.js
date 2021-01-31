import React, {useEffect,useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Music from './Components/pages/Music'
import Videos from './Components/pages/Videos'
import Shop from './Components/pages/Shop' 
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import { commerce } from './lib/commerce'
import Checkout from './Components/CheckoutForm/Checkout/Checkout'



const App = () => {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };

    const fetchCart = async () => {

      setCart(await commerce.cart.retrieve());
    };

    
    const handleUpdateCartQty = async (productId, quantity,variant) => {
      const { cart } = await commerce.cart.update(productId, {quantity }, variant);

      setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {

        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
  }

  const onEmptyCart = async () => {
      const { cart } = await commerce.cart.empty();
      
        setCart(cart);
      
  }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(process.env.REACT_APP_CHEC_PUBLIC_KEY,checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };


    useEffect(() => {
      fetchProducts();
      fetchCart();

    }, []);

    console.log(cart)



  return (
  <Router>
    <ScrollToTop/>
    <Navbar totalItems={cart.total_items}/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About}/>
      <Route path='/music' exact component={Music}/>
      <Route path='/videos' exact component={Videos}/>
      <Route path='/shop' exact component={Shop}/>

      <Route exact path="/cart">
        <Cart cart={cart} 
        handleUpdateCartQty = {handleUpdateCartQty}
        handleRemoveFromCart = {handleRemoveFromCart}
        handleEmptyCart = {onEmptyCart}
        />
        </Route>

        <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
    </Switch>

    

    <Footer/>
    
  </Router>
  );
}

export default App;
