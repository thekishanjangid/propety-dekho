import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./contact.css";


const Contact = () => {
  return (
    <>
      <section id="aa-property-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-property-header-inner">
                <h2>Contact</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aa-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-contact-area">
                <div className="aa-contact-top">
                  <div className="aa-contact-top-left">
                    <iframe
                      width="100%"
                      height="450"
                      frameborder="0"
                      allowfullscreen=""
                      style={{ border: "0" }}
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7119.584248006482!2d75.77031124864085!3d26.84656329965945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715240625761!5m2!1sen!2sin"
                    ></iframe>
                  </div>
                  <div className="aa-contact-top-right">
                    <h2>Contact</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae placeat aspernatur aperiam, quisquam voluptas enim
                      tempore ab itaque nam modi eos corrupti distinctio nobis
                      labore dolorum quae tenetur. Sapiente, sequi.
                    </p>
                    <ul className="contact-info-list">
                      <li>
                        {" "}
                        <i className="fa fa-phone"></i>+919899999997
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-envelope-o"></i>{" "}
                        info@propertydekho.com
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-map-marker"></i> 24/7 A-26 sector-2
                        vijay path mansrovar, jaipur
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
