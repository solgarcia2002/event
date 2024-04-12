import Background from "./components/background/background";
import BannerVideo from "./components/banner-home/banner-home";
import Eventbrite from "./components/eventBrite/eventBrite";
import Faqs from "./homeComponents/faqs";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";

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
        <Eventbrite />
      </BannerVideo>
      <SponsorsList />
      <Speakers />
      <SponsorContact />
      <Faqs />
      <Background />
    </main>
  );
}
