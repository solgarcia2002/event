import { getTranslations } from "next-intl/server";
import Carousel from "../components/carousel/carousel";
import SponsorsList from "../homeComponents/sponsorsList";

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
      <Carousel />
      <SponsorsList />
    </>
  )
}
export default SchedulePage;