export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent bg-color">
      <div className="container">
        <a href="/">
          <img
            className="navbar-brand"
            src="/src/assets/images/logo.png"
            style={{
              width: "100px",
              height: "34px",
            }}
            alt=""
          />
        </a>
        <button
          className="btn btn-white navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          //   tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title fw-bold"
              style={{ marginLeft: "20px" }}
              id="offcanvasRightLabel"
            >
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body justify-content-end">
            <ul className="navbar-nav mr-2 mb-lg-0">
              <li className="nav-item mx-3 my-1">
                <a className="nav-link" href="#ourservices">
                  Our Sevices
                </a>
              </li>
              <li className="nav-item mx-3 my-1">
                <a className="nav-link ml" href="#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item mx-3 my-1">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item mx-3 my-1">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <button className="btn btn-register mx-3 my-1">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
