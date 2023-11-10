import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Testimonial() {
  return (
    <section className="bagiancarousel" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center my-5">
            <h1 className="fw-bold">Testimonial</h1>
            <p className="mt-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="item">
              <div className="card mb-3">
                <div className=" row py-5 px-2 mx-2 ">
                  <div className="col-lg-3 text-lg-center px-3 ">
                    <br />
                    <img
                      src="/images/img_photo.png "
                      className="img-fluid rounded-circle "
                      width="80px "
                      alt="... "
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <div className="col-lg-9 text-center text-md-center">
                    <div className="card-body ">
                      <img
                        src="/images/Rate.png "
                        alt=" "
                        className="w-25 mb-3 mb-lg-2"
                      />
                      <p className="card-text ">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold ">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card mb-3">
                <div className=" row py-5 px-2 mx-2 ">
                  <div className="col-lg-3 text-lg-center px-3 ">
                    <br />
                    <img
                      src="/images/img_photo1.png "
                      className="img-fluid rounded-circle "
                      width="80px "
                      alt="... "
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <div className="col-lg-9 text-md-center text-md-center">
                    <div className="card-body ">
                      <img
                        src="/images/Rate.png "
                        alt=" "
                        className="w-25 mb-3 mb-lg-2 "
                      />
                      <p className="card-text ">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold ">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card mb-3">
                <div className=" row py-5 px-2 mx-2 ">
                  <div className="col-lg-3 text-lg-center px-3 ">
                    <br />
                    <img
                      src="/images/img_photo.png "
                      className="img-fluid rounded-circle "
                      width="80px "
                      alt="... "
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <div className="col-lg-9 text-md-center text-md-center">
                    <div className="card-body ">
                      <img
                        src="/images/Rate.png "
                        alt=" "
                        className="w-25 mb-3 mb-lg-2 "
                      />
                      <p className="card-text ">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold ">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="card mb-3">
                <div className=" row py-5 px-2 mx-2 ">
                  <div className="col-lg-3 text-lg-center px-3 ">
                    <br />
                    <img
                      src="/images/img_photo.png "
                      className="img-fluid rounded-circle "
                      width="80px "
                      alt="... "
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <div className="col-lg-9 text-md-center text-md-center">
                    <div className="card-body ">
                      <img
                        src="/images/Rate.png "
                        alt=" "
                        className="w-25 mb-3 mb-lg-2 "
                      />
                      <p className="card-text ">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="fw-bold ">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
