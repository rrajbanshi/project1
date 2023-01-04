import "./student-feedback.css";
import Rectangle from "../../src/images/Rectangle.svg";
import profile_pic from "../../src/images/profile-pic.svg";
function StudentFeedback() {
  return (
    <>
      <div className="row partner-feedback-main">
        <div className="col-lg-1 "></div>
        <div className="col-lg-10 d-none d-lg-block">
          <div className="hard-to-believe">
            <p>Hard to believe?</p>
          </div>
          <div className="hear-it-from">
            <p>Hear it from our Futurense Fellows!</p>
          </div>
          <div className="feedback-carousal-student">
            <div className="media-scroller-partner-student snaps-inline-feedback-student">
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* testimonial  */}
          <div className="client-testimonial">
            <p>Client Video Testimonials</p>
            <img className="image-spacing-partner" src={Rectangle} alt="" />
          </div>
          <div className="GodFather">
            <p>
              Get the ideal tech talent with the
              <span> Godfather of Talent!</span>
            </p>
          </div>
          <div className="GodFather-button">
            <a href="#">Hire Us</a>
          </div>
        </div>

        {/* for mobile device  */}
        <div className="col-lg-1 d-block d-lg-none">
          <div className="hard-to-believe">
            <div className="hard-to-believe-para1">
              {" "}
              <p>Hard to believe?</p>
            </div>
            <div className="hard-to-believe-para2">
              {" "}
              <p>Hear it from our Futurense Fellows!</p>
            </div>
          </div>
          <div className="hear-it-from"></div>
          <div className="feedback-carousal">
            <div className="media-scroller-partner snaps-inline-feedback">
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3 col-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3 col-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-element-partner-student">
                <div className="row">
                  <div className="col-lg-3 col-3">
                    <div className="student-profile-pic">
                      <img src={profile_pic} alt="$" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="student-name-section">
                      <p>Ashmita Shetty</p>
                    </div>
                    <div className="student-position">
                      <p>Senior Developer, Futurense 2021</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-3">
                    <div className="student-hike">
                      <h2>567 %</h2>
                      <p>salary hike</p>
                    </div>
                  </div>
                </div>

                <div className="student-content">
                  <p>
                    It was a really smooth transition moving into a new city as
                    I was being provided with food, accommodation, and travel as
                    well. I got a fast-paced environment to learn new skills and
                    it was very helpful... Read more
                  </p>
                </div>

                <div className="before-futurense">
                  <p>Before Futurense - 4 LPA</p>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="student-dot"></div>
                </div>
                <div className="after-futurense">
                  <p>After Futurense - 30 LPA</p>
                </div>

                {/* <div className="row"> */}
                {/* <div className="col-lg-4 col-4">
                    <div className="before-futurense">
                      <p>Before Futurense - 4 LPA</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4">
                    <div className="student-dot"></div>
                  </div>
                  <div className="col-lg-4 col-4">
                    <div className="after-futurense">
                      <p>After Futurense - 30 LPA</p>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentFeedback;
