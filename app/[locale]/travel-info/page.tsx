import { useTranslations } from "next-intl";
import { travelNature, travelShops } from "../data/travel";
import InfoSection from "./info-section";
import Map from "../components/map/mapbox";
import BannerVideo from "../components/banner-home/banner-home";
import './index.css';

const TravelPage: React.FC = () =>{
  const t = useTranslations("travel");
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX as string
  return(
    <div >
      <BannerVideo translationTitle="travel" title="title" subtitle="slogan" video="/wellBiz-bridge-travel-and-info.mp4">
        <>
          <p>WellBiz Bridge #miami 2024 </p>
          <p>JW Marriott Miami Hotel</p>
        </>
      </BannerVideo>
      <Map accessToken={mapboxAccessToken} />
      <div className="cont-travel-info">
        <p>{t("shortIntro")}</p>
        <InfoSection travelInfo={travelNature} langTitle="nature" />
        <InfoSection travelInfo={travelShops} langTitle="shops" />
      </div>
    </div>
  )
}
export default TravelPage;

