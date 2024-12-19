import Hero from "@/components/page/home/Hero";
import Prayer from "@/components/page/home/Prayer";
import Khateeb from "@/components/page/home/Khateeb";
import Map from "@/components/page/home/Map";
import StayInTouch from "@/components/page/home/StayInTouch";
import App from "@/components/page/home/App";
import RecentEvents from '@/components/page/home/RecentEvents';
import Contactus from '@/components/page/contact/ContactUs';


export default function Home() {
  return (
    <div className="">
      <Hero />
      <Prayer />
      <RecentEvents />
      <Khateeb />
      <StayInTouch />
      <App />
      <Contactus />
      <Map />
    </div>
  );
}