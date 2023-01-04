import React, { useState, useEffect } from "react";
import "./Enquire_now.css";
import { Modal, ModalHeader } from "reactstrap";
import hire_talent_line from "../../images/hire_talent_line.png";
import { useForm } from "react-hook-form";

const Enquire_now = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="popup">
      <main className="col-md-8 mx-auto mt-4">
        <header className="text-center">
          <h1 className="display-4 text-light hire-talent">Hire Talent</h1>
          <img className="hire_talent_line" src={hire_talent_line} alt="" />
          <h6 className="">Provide your details</h6>
        </header>
        <hr />
        <section>
          <form
            action=""
            method="get"
            className="font-weight-bold"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name*:</label>
              <input
                type="text"
                className="form-control input-field"
                id="email"
                placeholder="Enter your name"
                style={{ color: "white" }}
                {...register("fullname", { required: true })}
                // onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullname && (
                <span className="validation">Name is required field</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ color: "white" }}
                placeholder="Enter your business email"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="validation">Email is required field</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Company Name:</label>
              <input
                style={{ color: "white" }}
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter your company name"
                // onChange={(e) => setCompanyName(e.target.value)}
                {...register("company_name")}
              />
            </div>
            <div className="row form-group">
              <div className="col-lg-7">
                <label htmlFor="mobile">Phone Number*</label>
                <input
                  type="text"
                  id="mobile"
                  style={{ color: "white" }}
                  placeholder="Enter your mobile number"
                  className="form-control"
                  // onChange={e=>setPhoneNumber(e.target.value)}
                  {...register("phonenumber", { required: true })}
                />
                {errors.fullname && (
                  <span className="validation">
                    PhoneNumber is required field
                  </span>
                )}
              </div>
              <div className="col-lg-5">
                <label htmlFor="company-size">Company Size:</label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  placeholder
                  {...register("size")}
                >
                  <option
                    className="drop_down"
                    value=""
                    selected
                    style={{ color: "" }}
                  >
                    Enter your company size
                  </option>
                  <option value="50-250 Employees">50-250 Employees</option>
                  <option value="50-250 Employees">50-250 Employees</option>
                  <option value="500+ Employees">500+ Employees</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="job-role">Your Job Role*:</label>
              <input
                type="text"
                className="form-control"
                id="job-role"
                placeholder="Technology"
                style={{ color: "white" }}
                // onChange={e=>setJobRole(e.target.value)}
                {...register("phonenumber", { required: true })}
              />
              {errors.fullname && (
                <span className="validation">Job_Role is required field</span>
              )}
            </div>
            <div class="form-group purple-border">
              <label htmlFor="exampleFormControlTextarea4">
                Tell us about your Tech Talent requirements and we will get back
                to you with the best!
              </label>
              <textarea
                className="form-control text_area"
                id="exampleFormControlTextarea4"
                rows="3"
                style={{ color: "white" }}
                // onChange={(e) => setTechTalent(e.target.value)}
                {...register("tech_Talent", { required: true })}
              ></textarea>
              {errors.fullname && (
                <span className="validation">
                  Tech_Talent is required field
                </span>
              )}
            </div>
            <div>
              <input
                type="submit"
                className="btn  col-lg-4 offset-lg-4 btn-block-button my-4 button"
                defaultValue="Register"
              />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Enquire_now;
