import React from 'react';
import '../../App.css';
import './Music.css';
import {MusicButton} from './MusicButton';


class Projs {

        constructor(apple,spotify,tidal){
        this.apple = apple;
        this.spotify = spotify;
        this.tidal = tidal;
    }
            AppleLink = function(){

                return (
                    window.location.replace(this.apple)
                )
               
                 
         }

            SpotifyLink = function(){

                return (
                    window.location.replace(this.spotify)

                )
            }

            TidalLink = function(){
                return (
                    window.location.replace(this.tidal)

                )
            }
    
    }   
   


    var firstProj =  new Projs(
        'https://music.apple.com/us/album/joyride/1530497241',
        'https://open.spotify.com/album/6Kxzs1XXQpof2NvKNfx10R?si=1zTHhU1rTBKHMrEkaAbHFg',
        'https://tidal.com/browse/album/154182567');

    var secondProj = new Projs('https://music.apple.com/us/album/obsidian/1495347254',
                                'https://open.spotify.com/album/0pezKfavVvld1kYWVnY9Ry',
                                'https://tidal.com/browse/album/128230142')
    
    var thirdProj = new Projs('https://music.apple.com/us/album/my-afro-is-my-halo/1330780232',
                            'https://open.spotify.com/album/3ZG4WexgJnayvHHtdtRgVT',
                            'https://tidal.com/browse/album/82973216')



function Music() {
    return (
        <>
        <div className ="music-container">

            <div className="apple-music">
                <a class="apple" href={'https://music.apple.com/us/artist/jahn-dough/1206584804'}> 
                <img src='/images/applemusic_logo.gif' alt="apple-link"/>
                </a>
            </div>
            
            <div className="spotify-music">
                <a class="spotify" href={'https://open.spotify.com/artist/2jBCZHcxMjOcYaQs1ydFAM'}> 
                <img src='/images/spotify_logo.gif' alt="spotify-link"/>
                </a>
                
            </div>

            <div className="tidal-music">
                <a class="tidal" href={'https://tidal.com/browse/artist/8523766'}> 
                <img src='/images/tidal_logo2.gif' alt="tidal-link"/>
                </a>
            </div>

           
            
        </div>

            <div className='project'>
                <div className='text-container'>

                    <div class="projpic" > 
                    <img src='/images/projectpic1.jpg' alt=" "/>
                    </div>

                    <div className='centered-box'>
                        <h1>
                            Joyride
                        </h1>
                        <br/>  <br/> <br/> <br/> <br/> <br/> <br/>
                        <div className='music-buttons'>

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => firstProj.AppleLink()}
                        >
                            Apple Music
                        </MusicButton>

                        {/* Space between buttons */}
                        <div class="divider"/>

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => firstProj.SpotifyLink()}
                        >
                           Spotify
                        </MusicButton>
                        
                     {/* Space between buttons */}
                        <div class="divider"/>
                        
                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => firstProj.TidalLink()}
                        >
                            Tidal
                        </MusicButton>

                        </div>
                        
                       
                    </div>

                </div>

             

            

            </div>

            <div className='project'>

                <div className='text-container'>
                    <div class="projpic" > 
                    <img src='/images/projectpic2.jpg' alt=" "/>
                    </div>
                
               
                    <div className='centered-box'>
                        <h1>
                            Obsidian <br/>
                        </h1>
                        
                        <br/>  <br/> <br/> <br/> <br/> <br/> <br/>
                        <div className='music-buttons'>
                           

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => secondProj.AppleLink()}
                        >
                            Apple Music
                        </MusicButton>

                        {/* Space between buttons */}
                        <div class="divider"/>

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => secondProj.SpotifyLink()}
                        >
                           Spotify
                        </MusicButton>
                        
                     {/* Space between buttons */}
                        <div class="divider"/>
                        
                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => secondProj.TidalLink()}
                        >
                            Tidal
                        </MusicButton>

                        </div>

                    </div>

                </div>

                <div className='project'>

                <div className='text-container'>
                    <div class="projpic"> 
                    <img src='/images/projectpic3.jpg' alt=" "/>
                    </div>
                
                    
                    <div className='centered-box'>
                        <h1>
                            My Afro Is My Halo
                        </h1>
                        <br/>  <br/> <br/> <br/> <br/> <br/> <br/>
                        <div className='music-buttons'>

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => thirdProj.AppleLink()}
                        >
                            Apple Music
                        </MusicButton>

                        {/* Space between buttons */}
                        <div class="divider"/>

                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => thirdProj.SpotifyLink()}
                        >
                           Spotify
                        </MusicButton>
                        
                     {/* Space between buttons */}
                        <div class="divider"/>
                        
                        <MusicButton
                        className='btns'
                        buttonStyle='btn--outline' 
                        buttomSize='btn--large'
                        onClick={() => thirdProj.TidalLink()}
                        >
                            Tidal
                        </MusicButton>

                        </div>

                    </div>

                </div>
             
                </div>

            </div>

            </>
    )
}

export default Music
