import { useTranslations } from "next-intl";
import { travelNature, travelShops } from "../data/travel";
import InfoSection from "./info-section";
import './index.css'
import Map from "../components/map/mapbox";

const TravelPage: React.FC = () =>{
  const t = useTranslations("travel");
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX as string
  return(
    <div >
      <div className="cont-travel-info">
        <h1>{t("title")}</h1>
        <p>{t("shortIntro")}</p>
        <InfoSection travelInfo={travelNature} langTitle="nature" />
        <InfoSection travelInfo={travelShops} langTitle="shops" />
      </div>
      <Map accessToken={mapboxAccessToken} />
    </div>
  )
}
export default TravelPage;

