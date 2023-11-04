export default function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row search__card mx-lg-5 py-3 px-4">
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipeDriver"
                >
                  <option value="default" selected="">
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  </option>
                  <option value="true">Dengan Supir</option>
                  <option value="false">Tanpa Supir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <labe>Pilih Waktu</labe>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="waktuJemput"
                >
                  <option value="false" selected="">
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00">08.00 WIB</option>
                  <option value="09:00">09.00 WIB</option>
                  <option value="10:00">10.00 WIB</option>
                  <option value="11:00">11.00 WIB</option>
                  <option value="12:00">12.00 WIB</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label className="fw-light">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                    defaultValue={0}
                  />
                  <span className="input-group-text bg-white">
                    <img src="images/fi_users.png" width="20px" alt="" />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                <button className="btn btn-utama" id="load-btn">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
