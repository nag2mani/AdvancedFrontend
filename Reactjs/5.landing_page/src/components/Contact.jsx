import React from 'react';

function Contact() {
  return (
    <div style={{ margin:'30px' ,padding: '20px', height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ color: 'white' }}>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name" style={{ color: 'white', textAlign: 'left', display: 'block'}}>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="email" style={{ color: 'white', textAlign: 'left', display: 'block' }}>Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="contact" style={{ color: 'white', textAlign: 'left', display: 'block' }}>Contact No</label>
                <input type="text" className="form-control" id="contact" placeholder="Enter your contact number" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="message" style={{ color: 'white', textAlign: 'left', display: 'block' }}>Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">Send</button>
            </form>
          </div>

          <div className="col-md-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3648719419803!2d81.07030757522352!3d26.891912976659604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa9da50cb7%3A0x8f5a1f4d75d0d691!2sShri%20Ramswaroop%20College%20Of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1727170321976!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
