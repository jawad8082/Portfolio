import React from "react";

export default function Services() {
  return (
    <div>
      <section id="services" className="section bg-light">
        <div className="container px-lg-5">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light  opacity-4">
              Services
            </h2>
            <p className="text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
              What I Do?
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
            </p>
          </div>
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <h3 className="">Web Development</h3>
                    <p className="mb-0 ">
                     I specialize in web development, crafting dynamic and interactive websites that bring your ideas to life. 
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                      <i className="fas fa-desktop"></i>
                    </div>
                    <h3 className="">Web Design</h3>
                    <p className="mb-0 ">
                      I create captivating and user-friendly web designs,Trust me to transform your vision into a stunning online showcase.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                      <i className="fas fa-chart-area"></i>
                    </div>
                    <h3 className="">API Development and Integration</h3>
                    <p className="mb-0 ">
                      I develop custom APIs hat allow different software systems to communicate and exchange data. 
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                    <i className="fas fa-database"></i>
                    </div>
                    <h3 className="">Website Maintenance and Support</h3>
                    <p className="mb-0 ">
                      I provide ongoing maintenance and support services to keep your website up to date, secure, and functioning smoothly,bug fixes.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                      <i className="fas fa-pencil-ruler"></i>
                    </div>
                    <h3 className="">UI/UX Design</h3>
                    <p className="mb-0 ">
                    I specialize in creating intuitive and visually appealing User Interface (UI) that enhance User Experience (UX), engaging interactions on your digital platforms. 
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featured-box style-3 mb-5">
                    <div className="featured-box-icon text-primary  shadow-sm rounded bg-white">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <h3 className="">SEO </h3>
                    <p className="mb-0 ">
                    I implement SEO best practices during the development process, optimizing your website's structure to improve its visibility in search engine rankings and drive organic traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
