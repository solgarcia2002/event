"use client"
import { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useTranslations } from "next-intl";
import './carousel.css';

type ImageCarouselType ={
  title:string,
  img:string
}

const images:ImageCarouselType[] = [
  {title:"15:00", img:"/wellbiz-bridge-register-event.png"},
  {title:"15:20", img: "/wellbiz-bridge-speakers.png"},
  {title:"17:30", img: "/wellbiz-bridge-end-event.png"},
]
const Carousel:React.FC =()=>{

  const t = useTranslations("schema")


  const [counter, setCounter] = useState<number>(1);
  const [direction, setDirection] = useState<string>("slide1");


  const handleNext = () => {
    if(counter < images.length) {
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
      setCounter(images.length);
      setDirection(`slide${images.length}`)
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
        {images.map((img, index) => (
          <div key={index} className="carousel-item">
            <div className="event-text-carousel">
              <h1 >{img.title}</h1>
              <p>{t(`slider${index+1}`)}</p>
            </div>
            <Image src={img.img} alt={img.title} width={1200} height={627} priority />
          </div>
        ))}
      </div>
      <button className="arrow-carousel right" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
      <div className="map-buttons">
        {images.map((item, i)=>(
          <button key={item.title} className={`control-carousel ${counter == i +1 && "control-carousel-active"}`} onClick={()=>handleControl(i+1)}></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel;