import {React, useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, InputLabel, Select, MenuItem} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from "./styles"



const Product = ({product, onAddToCart }) => {
    const classes = useStyles();

    
  const [sizeSelection, setSizeSelection] = useState({});

    function buttonHandle(variantID,optionID,optQnty) {
        
        
        let variant = {
          
        [variantID]: optionID,
        
        }

       
      
       console.log(optQnty)
      if(optQnty <= 0 ){
          alert("We're sorry, this option is currently sold out.")
      }
      else{
        onAddToCart(product.id,1,variant);
      }
       
      }
      
    

      
     function setSize(variantID, optionID,optQnty){

        
        buttonHandle(variantID,optionID,optQnty);
        
      
      }

    
    function triggerReload(){

        window.location.reload(false);
    }
      
      
    
     
    
    
    return (
      

        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>

            <CardContent>
                <div className={classes.cardContent}>

                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>

                    {product.variants.map((variant) => (
                    
                    <Typography variant='h5'>
                        {variant.options[0].price.formatted_with_symbol}
                    </Typography>

                   
                          
                    ))}
                </div>
                
                <Typography dangerouslySetInnerHTML={{__html: product.description}}  variant='body2' color='inherit' style={{backgroundColor:'white', opacity:'100%'}}/>
                   <br/> <br/>
                   <InputLabel> Size Selection </InputLabel>
                   <ul>
                     {product.variants.map((variant) => (
                      <Select value={sizeSelection} fullWidth onChange={(e) => setSizeSelection(e.target.value)}>
                         
                           
                             { variant.options.map((option) => (

                              <MenuItem key={option.id} value={option.id} onClick={() => setSize(variant.id,option.id,option.quantity)} >
                                {option.name}
                              </MenuItem>
                                 
                             ))
                            } 
                           
                       
                      </Select>

                       

                     ))}
                     
                   </ul>

                   

            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}  onClick={() => triggerReload()}>
                <IconButton aria-label='Add to Cart' >
                    <AddShoppingCart/>

                </IconButton>
            </CardActions>


            
            </Card>
    )
}

export default Product
