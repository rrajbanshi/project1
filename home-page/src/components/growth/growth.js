import React from "react";
import "./growth.css";
import img1 from "../../images/growth_img.png";
const growth = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-1"> </div>
      <div className="col-lg-10">
        <div className="growth text-center">
          {/* <div className='text-center '>
            <button className='btn know-more text-light'>Know more</button>
        </div> */}
          <div className="know-more-button">
            <a href="#">Know more</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-6">
            <div className="growth-content">
              <p className="p1">And the best part..</p>
              <h1 className="p2">
                After Futurense, <br />
                the avg. <span className="span">salary</span> <br />
                <span className="span">growth</span> of our talent is{" "}
                <span className="num">340%!</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <img className="growth_img" src={img1} alt="growth" />
          </div>
        </div>
      </div>
      <div className="col-lg-1"> </div>
    </div>
  );
};

export default growth;
