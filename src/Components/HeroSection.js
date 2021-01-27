import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css'
import ReactPlayer from 'react-player/youtube';
import {Typography} from '@material-ui/core'

function firstBtn(){
    window.location.replace('https://www.centraltrack.com/song-of-the-day-jahn-dough-playmate-feat-coach-tev-helen-hailu/')
   }
   function secondBtn(){
    window.location.replace('https://blog.takoagency.com/tako-stand/creator-conversations-jahn-dough')
   }
function thirdBtn(){
    window.location.replace('http://voyagedallas.com/interview/meet-jahn-dough-north-dallas/')
   }


function HeroSection() {
    return (
        <> 
        <div className='hero-container'>
            {/* <video src='/videos/HomePageVid.mp4' autoPlay loop muted/> */}
            <div className='text-container'>
                <img src={"./images/HomePageVid.gif"}  alt='homepage-pic'/>
            </div>
            
            
            

        </div>
       
        <div className="main-feed">
            <div className='text-container'>
            <img src={'./images/jahndough1.jpg'} alt="homeview"/>
                <div class='centered-text'> 
                {/* 
                
                
                <br/>"With His Second Project In Less Than A Year,<br/>
                 Jahnny Duffle Taps A Legion Of Artists For<br/>
                  Quite The ‘Joyride’ Of Dallas Hip-Hop."<br/><br/>
                    </h1>
                    <br/><br/>

                    <h1>
                
                */}
                
                    <Typography variant="h5">

                    "With His Second Project In Less Than A Year,<br/>
                 Jahnny Duffle Taps A Legion Of Artists For<br/>
                  Quite The ‘Joyride’ Of Dallas Hip-Hop."

                    </Typography>
                    <div className="hero-btns">
                    
                        <Button
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={firstBtn}
                        >
                            Read More
                        </Button>
                        
                    </div>
                
                    
                </div>
            </div>

            <div className='text-container'>
            <img src={'./images/jahndough2.jpg'} alt="homeview"/>

            

                <div className='centered-video'> 
                    <div className='video-container'>
                        <div className='video-node'> 
                        <ReactPlayer className="video" url="https://youtu.be/-a9x_BeeilQ" width='100%' />
                        </div>

                    </div>

                </div>
            </div>

            <div className='text-container'>
            <img src={'./images/jahndough3.jpg'} alt="homeview"/>
                <div class='centered-text'> 
                <Typography variant="h5">
                    <br/> "CONVERSATIONS WITH BLACK CREATORS: JAHN DOUGH" <br/><br/>

                </Typography>
                <br/><br/>
                <div className="hero-btns">
                    <Button
                    className='btns'
                    buttonStyle='btn--outline' 
                    buttomSize='btn--large'
                    onClick={secondBtn}
                    >
                    Read More
                    </Button>
                </div>

                </div>
            </div>

            <div className='text-container'>
            <img src={'./images/jahndough4.jpg'} alt="homeview"/>
                <div class='centered-text'> 
                <Typography variant="h5">
                <br/> "Meet Jahn Dough in North Dallas" <br/><br/>
                    
                    

                </Typography>
                <br/><br/>
                <div className="hero-btns">
                
                  
                        <Button
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={thirdBtn}
                        >
                            
                        Read More

                        </Button>
                    </div>

                </div>
            </div>

            </div>
        </>
    
        
    )
}

export default HeroSection
