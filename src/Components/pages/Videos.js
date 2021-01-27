import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../../App.css';
import './Videos.css'


function Videos() {
    return (
        <div className="video-container">
             <div className="video-node">
               
                <ReactPlayer className="video" url="https://youtu.be/vhpHheIBMpU" width='100%' />
                <ReactPlayer className="video" url="https://youtu.be/vePWsmK2m_o" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=4jxtkAMIfVc" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=Du4Y_VgEhbY" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=o5iHMiaJAd0" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=W0qPuUU3BG8" width='100%' />
                <ReactPlayer className="video" url=" https://www.youtube.com/watch?v=HXY2HE7WEIY" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=M909HeXAvjc" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=9HiO9VgR9uA" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=3S_GQ18garc" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=CFRCdcm32GM" width='100%' />
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=9b3Gha_GppY" width='100%' />
                



        
            </div>
        </div>
    )
}

export default Videos
