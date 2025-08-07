import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import InstagramGallery from "@/components/sections/instagram-gallery";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <InstagramGallery />
      <Testimonials />
    </div>
  );
}
