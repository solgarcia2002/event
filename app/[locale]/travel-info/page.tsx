import { useTranslations } from "next-intl";
import { travelNature, travelShops } from "../data/travel";
import InfoSection from "./info-section";
import Map from "../components/map/mapbox";
import { getTranslations } from "next-intl/server";

import './index.css';

export async function generateMetadata() {
  const t = await getTranslations("metadata.travel-info");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",")
  };
}

const TravelPage: React.FC = () =>{
  const t = useTranslations("travel");
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX as string
  return(<>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-screen object-cover z-0"
    >
      <source src="/wellBiz-bridge-travel-and-info.mp4" type="video/mp4" />
    </video>
  
    <div className="relative z-10 w-full h-full">
      <h1 className="text-white text-6xl font-bold p-8">Travel & Info</h1>
      <h6 className="text-white text-3xl p-8">{t("shortIntro")}</h6>
      <Map accessToken={mapboxAccessToken} />
      <div className="cont-travel-info">
        <InfoSection travelInfo={travelNature} langTitle="nature" />
        <InfoSection travelInfo={travelShops} langTitle="shops" />
      </div>
    </div>
  </>
  
  )
}
export default TravelPage;

