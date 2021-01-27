import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from "./styles"


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    function buttonHandle() {
        onAddToCart(product.id,1);
        window.location.reload(true);
      }
      

     
    
    
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>

            <CardContent>
                <div className={classes.cardContent}>

                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>


                </div>
                
                <Typography dangerouslySetInnerHTML={{__html: product.description}}  variant='body2' style={{backgroundColor:'black', opacity:'25%'}}/>
                   
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => buttonHandle()}>
                    <AddShoppingCart/>

                </IconButton>
            </CardActions>
            </Card>
    )
}

export default Product
