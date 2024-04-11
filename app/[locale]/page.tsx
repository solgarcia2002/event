
import BannerHome from "./components/banner-home/banner-home";
import Faqs from "./homeComponents/faqs";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";

export default function Home() {
  return (
    <main >
      <BannerHome />
      <SponsorsList />
      <Speakers />
      <SponsorContact />
      <Faqs />
    </main>
  );
}
