import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export const CarContext = createContext([]);

export default function Car() {
  const [car, setCar] = useState([]);
  const [carView, setCarView] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterData = (available, date, time, capacity) => {
    console.log("sedang difilter", available, date, time, capacity);
    let dataCars = car;
    dataCars = dataCars.filter((item) => {
      if (time == undefined) {
        return (
          (item.available + "" == available ||
            available == undefined ||
            available == "default") &&
          (new Date(item.availableAt) <= new Date(date) || date == undefined) &&
          (item.capacity >= capacity || capacity == undefined)
        );
      }
      // Membuat objek Date dari string tanggal
      var date = new Date(item.availableAt);

      // Mengambil jam dan menit
      var jam = date.getUTCHours();
      var menit = date.getUTCMinutes();

      const waktu = jam + ":" + menit;

      // Memecah waktu menjadi jam dan menit
      var jamMenit1 = waktu.split(":");
      var jamMenit2 = time.split(":");

      // Menghitung total detik
      var detik1 = parseInt(jamMenit1[0]) * 3600 + parseInt(jamMenit1[1]) * 60;
      var detik2 = parseInt(jamMenit2[0]) * 3600 + parseInt(jamMenit2[1]) * 60;

      return (
        (item.available + "" == available ||
          available == undefined ||
          available == "default") &&
        (new Date(item.availableAt) <= new Date(date) || date == undefined) &&
        (item.capacity >= capacity || capacity == undefined) &&
        (detik1 <= detik2 || time == "false")
      );
    });
    setCarView(dataCars);
  };
  useEffect(function () {
    async function getCars() {
      setLoading(true);
      const respon = await fetch(
        `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`
      );
      const data = await respon.json();
      setCar(data);
      setCarView(data);
      setLoading(false);
    }
    const timeout = setTimeout(() => {
      getCars();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return (
      <section className="container-fluid" style={{ height: "100vh" }}>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-3">
            <Loading />
          </div>
        </div>
      </section>
    );
  }
  return (
    <CarContext.Provider value={carView}>
      <main>
        <Navbar />
        <Hero />
      </main>
      <Search filter={filterData} />
      <Cards />
      <Footer />
    </CarContext.Provider>
  );
}
