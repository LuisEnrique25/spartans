import React, { useState } from 'react'
import "./footer.css"
import { getRandom } from '../utils/random'
//./public/imgs/team-osiris.webp

const audios = ["./public/multimedia/audio1.mp3", "./public/multimedia/audio2.mp3", "./public/multimedia/audio3.mp3", "./public/multimedia/audio4.mp3"]

const Footer = ({link, source}) => {
  const [audio, setAudio] = useState(getRandom(audios));
  const [isOn, setIsOn] = useState(false)
  
  const handlerAudio = () => {
    const audioPlayer = document.getElementById('audioPlayer') 
    console.log('audioCHECK')
    if(isOn){
      audioPlayer.pause();
    }else{
      audioPlayer.play();
    }
    setIsOn(!isOn)
  }
  return (
    <footer className='footer'> 
      <div className="link">
          <a href={`${link}`} target="_blank">{source}</a>
        </div>
        
        
        
        
        
        <button className='audio__btn' onClick={handlerAudio}>{isOn ? <i className="fa-solid fa-circle-stop"></i>: <i className="fa-solid fa-circle-play"></i>}</button>
        <audio id='audioPlayer' src={`${audios[1]}`}></audio>
    </footer>
  )
}

export default Footer