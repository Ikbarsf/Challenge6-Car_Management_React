export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <p className="fw-light">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000{" "}
            </p>
            <p className="fw-light">binarcarrental@gmail.com </p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md-3 mx-auto">
            <p className="fw-light">Connect With Us</p>
            <p>
              <img
                className="mx-1"
                src="/src/assets/images/icon_facebook.svg"
                alt=""
              />
              <img
                className="mx-1"
                src="/src/assets/images/icon_instagram.svg"
                alt=""
              />
              <img
                className="mx-1"
                src="/src/assets/images/icon_twitter.svg"
                alt=""
              />
              <img
                className="mx-1"
                src="/src/assets/images/icon_mail.svg"
                alt=""
              />
              <img
                className="mx-1"
                src="/src/assets/images/icon_twitch.svg"
                alt=""
              />
            </p>
          </div>
          <div className="col-md-3 mx-auto">
            <p>Copyright Binar 2022</p>
            <img src="/src/assets/images/logo.png" alt="" width="100px" />
          </div>
        </div>
      </div>
    </footer>
  );
}
