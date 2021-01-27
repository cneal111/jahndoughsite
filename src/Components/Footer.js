import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
     
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        
        </p>
        <p className='footer-subscription-text'>
        Less Foes, More Dough.
        </p>
        
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>

        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JAHN DOUGH
              
            </Link>
          </div>
          <small class='website-rights'> Cody Neal © 2020</small>
          <div class='social-icons'>
              <div class='social-icon-fb'>
                <Link
                class='social-icon-link facebook'
                to={{pathname: "https://www.facebook.com/JahnDoughKIV"}}
                target='_blank'
                aria-label='Facebook'
                >
                <i class='fab fa-facebook-f' />
                </Link>
              </div>
          
            <Link
              class='social-icon-link instagram'
              to={{pathname: "https://www.instagram.com/jahndough7203/?hl=en"}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to= {{pathname: "https://www.youtube.com/channel/UC3xsar9T96gxEzUD6k_F5eA"}}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{pathname: "https://twitter.com/JahnDough7203"}}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;