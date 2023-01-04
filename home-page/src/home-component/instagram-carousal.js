import "../home-component/instagram-carousal.css";
import follow1 from "../../src/images/follow-us-1.svg";
import follow2 from "../../src/images/follow-us-2.svg";
import follow3 from "../../src/images/follow-us-3.svg";
import Rectangle from "../../src/images/Rectangle.svg";
function InstagramCarousal() {
  return (
    <>
      {/* carousal start *********************************************************** */}
      <div className="row main-carousal mt-5">
        <div className="col-lg-1 col-12"></div>
        <div className="col-lg-10 col-12 d-none d-lg-block">
          <div className="follow-us-header">
            <p>Follow us on Instagram</p>
            <img className="image-spacing2" src={Rectangle} alt="" />
          </div>
          <div className="media-scroller snaps-inline">
            <div className="media-element">
              <img src={follow1} alt="follow1" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow1" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow2" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow2" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow3" />

              <p className="title">Chair</p>
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />

              <p className="title"></p>
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
          </div>
        </div>
        {/* small devices  */}
        <div className="col-lg-1 col-12 d-block d-lg-none p-0 m-0">
          <div className="follow-us-header">
            <p>Follow us on Instagram</p>
            <img className="image-spacing2" src={Rectangle} alt="" />
          </div>
          <div className="media-scroller snaps-inline">
            <div className="media-element">
              <img src={follow1} alt="follow1" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow1" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow2" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow2" />
            </div>
            <div className="media-element">
              <img src={follow2} alt="follow3" />

              <p className="title">Chair</p>
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />

              <p className="title"></p>
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
            <div className="media-element">
              <img src={follow3} alt="follow3" />
            </div>
          </div>
        </div>
      </div>
      {/* carousal end  */}
    </>
  );
}

export default InstagramCarousal;
