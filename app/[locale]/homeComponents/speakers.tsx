import Image from "next/image";
import "./speakers.css";

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: "Angeles Lucero Bringas",
      img: "/speaker-angeles-lucero-bringas.png",
      bio: "bio",
    },
    { name: "Claudia Lalloz", img: "/speaker-claudia-lalloz.png", bio: "bio" },
    { name: "Mirian Torrado", img: "/speaker-mirian-torrado.png", bio: "bio" },
    { name: "Tere Zazueta", img: "/speaker-tere-zazueta.png", bio: "bio" },
  ];

  return (
    <div className="cont-speakers">
      <h2>Speakers</h2>
      <div className="speakers-cont-cards">
        {speakers.map((item, i) => (
          <div className="flip-card" key={i}>
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <Image src={item.img} alt={item.name} width={800} height={1182} />
                  <p className="title">{item.name}</p>
              </div>
              <div className="flip-card-back">
                  <p className="title">{item.bio}</p>
              </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
