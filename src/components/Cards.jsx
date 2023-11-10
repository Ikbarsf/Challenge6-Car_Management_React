import { useContext } from "react";
import { CarContext } from "../pages/car";

export default function Cards() {
  const carView = useContext(CarContext);

  function Rupiah(angka) {
    var numberString = angka.toString();
    var split = numberString.split(".");
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return "Rp. " + rupiah;
  }

  if (carView.length == 0) {
    return (
      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-center">Data Tidak Ditemukan...</h2>;
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 ">
            <div className="row" id="cars-container">
              {carView.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="card  px-2 py-4">
                    <img
                      src={item.image}
                      className="card-img-top mt-4 text-center"
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-6">
                        {item.manufacture} {item.model} / {item.type}
                      </h5>
                      <h5 className="card-title fs-5 fw-bold">
                        {Rupiah(item.rentPerDay)} / hari
                      </h5>
                      <p className="cars__p">{item.description}</p>
                      <div className="row">
                        <div className="col-1">
                          <img
                            src="images/fi_users1.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">
                          {item.capacity} orang
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-1">
                          <img
                            src="images/fi_settings.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">
                          {item.transmission}
                        </div>
                      </div>
                      <div className="row mt-2 mb-4">
                        <div className="col-1">
                          <img
                            src="images/fi_calendar.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">Tahun {item.year}</div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-utama"
                        style={{ width: "100%" }}
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
