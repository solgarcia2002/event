import { getTranslations } from "next-intl/server";
import SponsorsList from "../homeComponents/sponsorsList";
import { schedule } from "../data/schedule";
import Card from "../components/card/card";
import './schedule.css'
import { Themes } from "../components/themes/themes";

export async function generateMetadata() {
  const t = await getTranslations("metadata.speakers");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",")
  };
}

const SchedulePage: React.FC = () =>{
  return(
    <>
      <div className="cont-cards">
        {schedule.map((item)=>(
          <Card card={item.card} id={item.id} image={item.image} time={item.time} key={item.id} speakers={item.speakers} />
        ))}
      </div>
      <Themes />
      <SponsorsList />
    </>
  )
}
export default SchedulePage;