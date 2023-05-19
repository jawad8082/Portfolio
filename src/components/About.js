import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" className="section ">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
              About Me
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
              Know Me More
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-7 col-xl-8 text-center text-lg-start">
              <h2 className="text-7 fw-600 mb-3 ">
                I'm <span className="text-primary">Jawad Ahmed,</span> a Web
                Developer
              </h2>
              <p className="" style={{textAlign:"justify"}}>
              I'm a skilled full stack web developer with 2 years of experience in creating user-friendly websites specializing in cutting-edge technology to build innovative solutions that meet the needs of today's digital world. I stay updated with the latest frameworks like React and Next.js. I have a keen eye for detail, focus on usability and performance optimization. I enjoy collaborating with cross-functional teams and have strong communication skills. I'm passionate about staying up-to-date with emerging trends and technologies in web development.
              </p>
              <p className="">
                Delivering work within time and budget which meets client’s
                requirements is my moto.
              </p>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="ps-lg-4">
                <ul className="list-style-2 ">
                  <li>
                    <span className="fw-600 me-2">Name:</span>Jawad Ahmed
                  </li>
                  <li>
                    <span className="fw-600 me-2">Email:</span>
                    <a href="mailto:chat@simone.com">jawadalisoomro46@gmail.com</a>
                  </li>
                  <li>
                    <span className="fw-600 me-2">Age:</span>23
                  </li>
                  <li className="border-0">
                    <span className="fw-600 me-2">From:</span>Karachi,Pakistan
                  </li>
                </ul>
                <a
                  href="/demo/react/simone/demo/static/media/resume.c84e759e31a37c0be66e.pdf"
                  download=""
                  className="btn btn-primary rounded-pill"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="brands-grid separator-border mt-5 ">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>2</span>+
                  </h4>
                  <p className="mb-0 ">Years Experiance</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>15</span>+
                  </h4>
                  <p className="mb-0 ">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>10</span>+
                  </h4>
                  <p className="mb-0 ">Projects Done</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <h4 className="text-12  mb-0 text-muted">
                    <span>6</span>
                  </h4>
                  <p className="mb-0 ">Get Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
