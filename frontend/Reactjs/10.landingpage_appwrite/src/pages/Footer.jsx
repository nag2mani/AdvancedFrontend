export function Footer() {
    return (
      <div className="bg-secondary footer mt-3">
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p className="text-white">
                <i className="fa fa-map-marker-alt me-3"></i>Sitare University, Lucknow
              </p>
              <p className="text-white">
                <i className="fa fa-phone-alt me-3"></i>+91 8969XXXXXX
              </p>
              <p className="text-white">
                <i className="fa fa-envelope me-3"></i>nagmani@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="btn text-white d-block mb-2" href="/contest/">
                    Top Hackathons
                  </a>
                </li>
                <li>
                  <a className="btn text-white d-block mb-2" href="/job/">
                    Hot Jobs
                  </a>
                </li>
                <li>
                  <a className="btn text-white d-block mb-2" href="/news/">
                    Breaking News
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p className="text-white">
                Subscribe to our Newsletter and be the first to ride the wave of cutting-edge updates on Contests, Jobs, and News.
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your Email"
                  style={{ height: "48px" }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  