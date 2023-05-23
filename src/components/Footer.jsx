import React, { useState } from 'react'
import "./footer.css"
import { getRandom } from '../utils/random'
//./public/imgs/team-osiris.webp

const audios = ["/multimedia/audio1.mp3", "/multimedia/audio2.mp3", "/multimedia/audio3.mp3", "/multimedia/audio4.mp3"]

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
      <p>Source: </p>
      <div className="link">
          <a href={`${link}`} target="_blank">{source}</a>
        </div>
        <button className='audio__btn' onClick={handlerAudio}>{isOn ? <i className="fa-solid fa-circle-stop"></i>: <i className="fa-solid fa-circle-play"></i>}</button>
        <audio id='audioPlayer' src={audio}></audio>
    </footer>
  )
}

export default Footer