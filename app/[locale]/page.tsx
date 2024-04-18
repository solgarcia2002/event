import BannerVideo from "./components/banner-home/banner-home";
import Button from "./components/button/button";
import Faqs from "./homeComponents/faqs";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";
import Link from "next/link";
import Themes from "./homeComponents/themes";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("metadata.home");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",")
  };
}

export default function Home() {
  return (
    <main>
      <BannerVideo
        translationTitle="home"
        video="/home.mp4"
        title="wellbiz"
        subtitle="banner"
        paragraph="bannerDate"
      >
        <Link href={'/#contact'}>
        <Button title="Free Registration!" />
        </Link>
      </BannerVideo>
      <Themes />
      <SponsorsList />
      <Speakers />
      <SponsorContact />
      <Faqs />
    </main>
  );
}
