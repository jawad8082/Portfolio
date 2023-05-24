import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () =>{
  alert("Your message has been sent Successfully");
}

export default function Contact() {
  const [result, showResult] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrqnukn', 'template_jqudpwd', form.current, '98a96DTNFB8NPemwy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  return (
    <div>
      <section id="contact" className="section bg-light">
  <div className="container px-lg-5">
    <div className="position-relative d-flex text-center mb-5">
      <h2 className="text-24 text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
        Contact
      </h2>
      <p
        className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"
      >
        Contact Me<span
          className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"
        ></span>
      </p>
    </div>
    <div className="row gy-5">
      <div
        className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start"
      >
        <h2 className="mb-3 text-5 text-uppercase">Address</h2>
        <p className="text-3 mb-4">
          Defence View Housing Society<br />Phase 2 <br />Karachi
        </p>
        <h2 className="mb-3 text-5 text-uppercase">Follow Me</h2>
        <ul
          className="social-icons justify-content-center justify-content-md-start"
        >
          <li className="social-icons-linkedin">
            <a href="https://www.linkedin.com/in/jawad-ahmed-7a8a65176/" target="_blank" rel="noreferrer"
              ><i className="fab fa-linkedin"></i
            ></a>
          </li>
          <li className="social-icons-twitter">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li className="social-icons-github">
            <a href="https://github.com/jawad8082" target="_blank" rel="noreferrer"
              ><i className="fab fa-github"></i
            ></a>
          </li>
        </ul>
      </div>
      <div className="col-md-8 col-xl-9 order-0 order-md-1">
        <h2 className="mb-3 text-5 text-uppercase text-center text-md-start">
          Send me a note
        </h2>
        <form className="" id="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="row g-4">
            <div className="col-xl-6">
              <input
                name="user_name"
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-xl-6">
              <input
                name="user_email"
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col">
              <textarea
                name="message"
                className="form-control"
                rows="5"
                placeholder="Tell me more about your needs" required
              ></textarea>
            </div>
          </div>
          <p className="text-center mt-4 mb-0">
            <button
              id="submit-btn"
              className="btn btn-primary rounded-pill d-inline-flex"
              type="submit"
            >
              Send Message
            </button>
          </p>
          <div className='row'>{result ? <Result/> : null}</div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
