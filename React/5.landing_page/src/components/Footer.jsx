import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Footer Links */}
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are a company dedicated to providing the best service in web development and design.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          {/* Social Media Links */}
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase">Connect with us</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li className="mx-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
