import React from "react";
// import Video_background from '../../videos/video.mp4'
import videoimg_mobile from "../../images/FUTURENSE WEBV100-mobile.png";
import videoimg from "../../images/FUTURENSEWEBV100D.png";
import quots from "../../images/double-quotes.png";
import "./Video.css";
const Video = () => {
  return (
    <div class="video-section">
      {/* <video muted autoPlay={true} loop className="back-video" 
       >
      <source src={Video_background} type="video/mp4"/>
     </video> */}
      {/* laptop */}
      <img
        className="video_img d-none d-lg-block"
        src={videoimg}
        alt=""
        srcset=""
      />
      {/* mobile */}
      <img
        className="video_img d-block d-lg-none"
        src={videoimg_mobile}
        alt=""
        srcset=""
      />
      <div className="heading">
        <span className="quotes">
          <img src={quots} alt="" />
        </span>
        <h1>
          Don't pay for <span className="words">upskilling</span>..
          <br />
          <span className="words">Get paid</span> for it instead!
        </h1>
        <span className="quotes-end">
          <img src={quots} alt="" />
        </span>

        <p>-Godfather Of Talent</p>
        <button className="btn btn-1">Build Your Career</button>
        <button className="btn btn-2">Hire Talent</button>
      </div>
    </div>
  );
};

export default Video;
