"use client";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SponsorDetail from "./sponsorDetail";
import "./sponsorsList.css";

const SponsorsList: React.FC = () => {
  const logos = [
    { logo: "/logo-santala.jpg", width: 325, height: 159 },
    { logo: "/logo-angeles.png", width: 300, height: 300 },
    { logo: "/logo-empowerit.png", width: 300, height: 300 },
    { logo: "/logo-lalloz.png", width: 708, height: 147 },
    { logo: "/logo-cesar.png", width: 248, height: 203 },
    { logo: "/logo-susana.png", width: 110, height: 110 },
    { logo: "/logo-latam.png", width: 110, height: 110 },
    { logo: "/logo-camara.png", width: 110, height: 110 },
  ];
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <div className="cont-sponsors-list">
      <h2>Sponsors</h2>
      <div className="carousel-logos">
        <div className="ticker-track">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.logo}
              alt="sponsor"
              width={325}
              height={159}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 emp-light-grey">
        <Tabs aria-label="Sponsorship options">
          <Tab key="photos" title="Diamond">
          <SponsorDetail
              sponsorshipName="Diamond Sponsorship"
              beneficios={[
                "b1",
                "b2",
                "b3",
                "b4",
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="6K"
            />
          </Tab>
          <Tab key="platinum" title="Platinum">
          <SponsorDetail
              sponsorshipName="Platinumn Sponsorship"
              beneficios={[
                "b1",
                "b3",
                "b4",
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="4K"
            />
          </Tab>
          <Tab key="gold" title="Gold">
            <SponsorDetail
              sponsorshipName="Gold Sponsorship"
              beneficios={[
                "b5",
                "b6",
                "b7",
                "b8",
                "b9",
                "b10",
              ]}
              inversion="3K"
            />
          </Tab>
          <Tab key="plata" title="Silver">
            <SponsorDetail
              sponsorshipName="Silver Sponsorship"
              beneficios={[
                "b5",
                "b6",
                "b7",
                "b9",
                "b10",
              ]}
              inversion="2K"
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default SponsorsList;
