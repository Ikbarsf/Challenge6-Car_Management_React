import { useState } from "react";

export default function Search({ filter }) {
  const [available, setAvailable] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [capacity, setCapacity] = useState();

  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <form
              className="row search__card mx-lg-5 py-3 px-4"
              onSubmit={(e) => {
                e.preventDefault();

                filter(available, date, time, capacity);
              }}
            >
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipeDriver"
                  onChange={(e) => setAvailable(e.target.value)}
                >
                  <option value="default">
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
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <label>Pilih Waktu</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="waktuJemput"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="false">
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00">08.00 WIB</option>
                  <option value="09:00">09.00 WIB</option>
                  <option value="10:00">10.00 WIB</option>
                  <option value="11:00">11.00 WIB</option>
                  <option value="12:00">12.00 WIB</option>
                  <option value="16:00">16.00 WIB</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label className="fw-light">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                    defaultValue={0}
                    onChange={(e) => setCapacity(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
