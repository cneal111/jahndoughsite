import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';
// eslint-disable-next-line 
import {Button} from './Button';
import {IconButton,Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


 import useStyles from './styles.js'


const Navbar = ({totalItems}) => {

    const location = useLocation();

    

  const [click, setClick] = useState(false);
  // eslint-disable-next-line 
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
    
  useEffect(() => {
    showButton();
  }, []);
    
  // eslint-disable-next-line 
  const classes  = useStyles();
   

    window.addEventListener('resize', showButton);
    return (
        <>
        
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onclick={closeMobileMenu}>
                        JAHN DOUGH <i/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />                       

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                Who?
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/music' className="nav-links" onClick={closeMobileMenu}>
                                Music
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/videos' className="nav-links" onClick={closeMobileMenu}>
                                Visuals
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/shop' className="nav-links" onClick={closeMobileMenu}>
                                Shop
                            </Link>
                        </li>

                        { (location.pathname === '/shop') && (
                        <li className="nav-item">
                       
                        <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit' onClick={closeMobileMenu}>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>

                        </IconButton>
                       
                        </li>
                         )}

                        
                        
        
                       
                          
                        

                    </ul>
                    
                        
                         

                </div>
            </nav> 
        </>
    )
}

export default Navbar
