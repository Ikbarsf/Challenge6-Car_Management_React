export default function Hero() {
  return (
    <section className="mobil">
      <div className="container-xxl">
        <div className="row">
          <div
            className="col-lg-5  mx-lg-5 col-xl-5 col-xxl-5 mx-md-0 "
            style={{ paddingTop: "100px" }}
          >
            <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
              Sewa & Rental Mobil Terbaik di kawasan Depok
            </h2>
            <p style={{ paddingRight: "40px" }}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
            </p>
            <a href="/cars" className="btn btn-utama">
              Mulai Sewa Mobil
            </a>
          </div>
          <div
            className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
            style={{ paddingTop: "50px" }}
          >
            <img className="" width="100%" src="/images/img_car.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
