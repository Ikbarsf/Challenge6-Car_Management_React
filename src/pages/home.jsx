import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurService from "../components/OurService";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
      </main>
      <OurService />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
      <Footer />
    </>
  );
}
