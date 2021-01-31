import {React, useState} from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, InputLabel, Select, MenuItem} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from "./styles"




const Product = ({product, onAddToCart }) => {
    const classes = useStyles();

    
  const [sizeSelection, setSizeSelection] = useState({});

    function buttonHandle(variantID,optionID,sizeType) {
        
        
        let variant = {
          
        [variantID]: optionID,
        
        }

        onAddToCart(product.id,1,variant);
       window.location.reload(true);
      }
      
    

      
     function setSize(variantID, optionID,sizeType){

          
          buttonHandle(variantID,optionID,sizeType);
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
                         <MenuItem key={variant.id} value={variant.id}>
                           
                             { variant.options.map((option) => (
                               
                              <MenuItem key={option.id} value={option.id} onClick={() => setSize(variant.id,option.id, option.name)} >
                                {option.name}
                              </MenuItem>
                             
                             ))
                            }
                           
                        </MenuItem>
                      </Select>

                       

                     ))}
                     
                   </ul>

            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' >
                    <AddShoppingCart/>

                </IconButton>
            </CardActions>
            </Card>
    )
}

export default Product
