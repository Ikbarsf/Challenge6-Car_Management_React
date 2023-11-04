import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function Car() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
      </main>
      <Search />
      <Footer />
    </>
  );
}
