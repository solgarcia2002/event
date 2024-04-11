"use client"
import { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './carousel.css';

type VideoCarouselType ={
  title:string,
  video:string
}

const Carousel:React.FC =()=>{

  const videos:VideoCarouselType[] = [
    {title:"WellBiz Bridge", video:"/video-home1.mp4"},
    {title:"Titulo2", video: "/video-home2.mp4"},
    {title:"Titulo3", video: "/video-home1.mp4"},
    {title:"Titulo4", video: "/video-home2.mp4"},
  ]

  const [counter, setCounter] = useState<number>(1);
  const [direction, setDirection] = useState<string>("");


  const handleNext = () => {
    if(counter < videos.length) {
      setDirection(`slide${counter+1}`);
      setCounter(prevCount => prevCount +1)
    } else {
      setCounter(1);
      setDirection(`slide1`)
    }
  }
  const handlePrev = () => {
    if(counter > 1){
      setDirection(`slide${counter-1}`);
      setCounter(prevCount => prevCount -1)
    } else {
      setCounter(videos.length);
      setDirection(`slide${videos.length}`)
    }
  }

  const handleControl = (index:number) => {
    setDirection(`slide${index}`);
    setCounter(index)
  }

  return(
    <div className="carousel" >
      <button className="left arrow-carousel" onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className={`carousel-container ${direction}`}>
        {videos.map((video, index) => (
          <div key={index} className="carousel-item">
            <h1 className="event-text-carousel">{video.title}</h1>
            <video autoPlay loop muted playsInline key={video.video}>
              <source src={video.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <button className="arrow-carousel right" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
      <div className="map-buttons">
        {videos.map((item, i)=>(
          <button key={item.title} className="control-carousel" onClick={()=>handleControl(i+1)}></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel;