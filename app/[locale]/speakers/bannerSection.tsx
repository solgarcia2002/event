"use client"
import { useRouter } from "next/navigation";
import Button from "../components/button/button";

type BannerSectionTypes = {
  title:string,
  button:string
}

export default function BannerSection ({title, button}: BannerSectionTypes) {
  const router = useRouter();
  return(
    <div className="time-event">
        <h2>{title}</h2>
        
        <Button title={button} onClick={()=>router.push('/#contact')}/>
      </div>
  )
}