export default function WhyUs() {
  return (
    <section className="why" id="whyus">
      <div className="container ">
        <div className="row ">
          <h2 className="fw-bold">Why Us ?</h2>
          <p style={{ marginTop: "16px" }}>
            Mengapa harus pilih Binar Car Rental
          </p>
        </div>
        <div className="row " style={{ marginTop: "40px" }}>
          <div className="col-lg-3 ">
            <div className="card-why">
              <img src="/src/assets/images/icon_complete.svg " alt=" " />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Mobil Lengkap
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="card-why">
              <img src="/src/assets/images/icon_price.svg " alt=" " />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Harga Murah
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
          <div className=" col-lg-3 ">
            <div className="card-why ">
              <img src="/src/assets/images/icon_24hrs.svg " alt=" " />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Layanan 24 Jam
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="card-why ">
              <img src="/src/assets/images/icon_professional.svg " alt=" " />
              <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                Sopir Profesional
              </h2>
              <p style={{ lineHeight: "20px" }}>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
