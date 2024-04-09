
import Carousel from "./components/carousel/carousel";
import Eventbrite from "./components/eventBrite/eventBrite";
import Faqs from "./homeComponents/faqs";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";

export default function Home() {
  return (
    <main >
      <Carousel/>
      <Speakers />
      <SponsorContact />
      <SponsorsList />
      <Faqs />
    </main>
  );
}
