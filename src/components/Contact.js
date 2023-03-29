import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className=" text-center mt-5 ">
          <h1 className="text-dark bg-light">Contact Me</h1>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div class="container">
                  <form id="contact-form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlfor="form_name">Firstname *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_lastname">Lastname *</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="form_need">
                              Please specify your need *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option
                                value=""
                                selected
                                disabled
                                className="text-capitalize"
                              >
                                --Select Your Issue--
                              </option>
                              <option className="text-capitalize">
                                Want more Functions
                              </option>
                              <option className="text-capitalize">
                                techinal error
                              </option>
                              <option className="text-capitalize">
                                not working properly
                              </option>
                              <option className="text-capitalize">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-primary btn-send  pt-2 btn-block"
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Contact;
