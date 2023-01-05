import "../home-component/Faqs.css";
import smallLine from "../../src/images/Value_line.png";
function Faqs() {
  return (
    <>
      <div className="row faq-section">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="Faqs-header">
            <p>FAQs</p>
            <img className="image-spacing1" src={smallLine} alt="" />
          </div>

          {/* collapse section  */}

          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    href="%%"
                    className="btn btn-link collapsed btn-block buttonBlock"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div className="buttonBlock">
                      <p>
                        FAQs for Talents{" "}
                        <span className="span-arrow">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </p>
                    </div>
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body ">
                  <div className="content">
                    <p>
                      What was the office culture like at Futurense?
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How did Futurense assist you to find a job?
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How did Futurense assist you post-deployment?
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How was your journey after being onboarded at Futurense?
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <a
                    href="%%"
                    className="btn btn-link collapsed btn-block buttonBlock "
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="buttonBlock">
                      <p>
                        {" "}
                        FAQs for Clients
                        <span className="span-arrow">
                          <i className="fa fa-angle-down"></i>{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="content">
                    <p>
                      What was the office culture like at Futurense?{" "}
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How did Futurense assist you to find a job?{" "}
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How did Futurense assist you post-deployment?{" "}
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                    <p>
                      How was your journey after being onboarded at Futurense?
                      <span className="span-plus">
                        <i className="fa fa-plus"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* collapse ended  */}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </>
  );
}

export default Faqs;
