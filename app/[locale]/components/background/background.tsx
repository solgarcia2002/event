"use client";
import Image from "next/image";
import "./background.css";

const Background: React.FC = () => {
  return (
    <div className="background">
      {[1,2,3,4,5,6,7].map((num)=>(
        <div className={`triangle triangle${num}`} key={num}>
          <Image src="/triangle-pink.png" alt="" height={200} width={200} />
        </div>
      ))}
      
    </div>
  );
};

export default Background;
