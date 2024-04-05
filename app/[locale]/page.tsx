
import EventbriteWidget from "./components/eventbriteWidget/eventbriteWidget";
import EventbriteButton from "./components/eventbriteWidget/eventbriteButton";
import Eventbrite from "./components/eventBrite/eventBrite";

export default function Home() {
  return (
    <main >
      <h1>Home</h1>
      <Eventbrite/>
      <EventbriteButton/>
      <EventbriteWidget/>
    </main>
  );
}
