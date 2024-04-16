import Background from "./components/background/background";
import BannerVideo from "./components/banner-home/banner-home";
import Button from "./components/button/button";
import Faqs from "./homeComponents/faqs";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";
import Link from "next/link";
import Themes from "./homeComponents/themes";

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
        <Button title="Save the date" />
        </Link>
      </BannerVideo>
      <Themes />
      <SponsorsList />
      <Speakers />
      <SponsorContact />
      <Faqs />
      <Background />
    </main>
  );
}
