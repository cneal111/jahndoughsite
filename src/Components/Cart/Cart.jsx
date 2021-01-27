import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem'; 
import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles();

  
  

  const renderEmptyCart = () => (
   
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/shop">start adding some</Link>!
      <br/><br/>
      <br/><br/>
      <br/> <br/>
      
     
      
      
    </Typography>
    
  );

 if(!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} /> 
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="inherit" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="textPrimary">Checkout</Button>
        </div>
      

        
      </div>
      <br/>
       <br/>
       
    </>
  );
  return (
  
    <Container>
      
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      <div className={classes.toolbar} />
      {}
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }

    </Container>
  );
};

export default Cart;