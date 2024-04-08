
import Carousel from "./components/carousel/carousel";
import Eventbrite from "./components/eventBrite/eventBrite";
import Speakers from "./homeComponents/speakers";
import SponsorContact from "./homeComponents/sponsorsContact";
import SponsorsList from "./homeComponents/sponsorsList";

export default function Home() {
  return (
    <main >
      <h1>Home</h1>
      <Carousel/>
      <Speakers />
      <SponsorContact />
      <SponsorsList />
    </main>
  );
}
