import follow1 from "../../src/images/follow-us-1.svg";
import follow2 from "../../src/images/follow-us-2.svg";
import follow3 from "../../src/images/follow-us-3.svg";
import Rectangle from "../../src/images/Rectangle.svg";
import "./Upskill.css";
function UpSkill() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={follow1} alt="follow1" />
          </div>
          <div class="carousel-item">
            <img src={follow2} alt="follow1" />
          </div>
          <div class="carousel-item">
            <img src={follow2} alt="follow1" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default UpSkill;
