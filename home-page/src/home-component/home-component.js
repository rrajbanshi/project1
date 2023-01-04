import "../home-component/home-component.css";
import Footer from "../home-component/footer";
import { Modal, ModalHeader } from "reactstrap";
import InstagramCarousal from "../home-component/instagram-carousal";
import Faqs from "./Faqs";
import PartnerFeedback from "./partner-feedback";
import StudentFeedback from "./student-feedback";
import Navbar from "../components/Navbar/Navbar";
import Video from "../components/video-section/Video";
import Counter from "../components/top_counter/TopCounter";
import HowItWorks from "../components/How_it_works/How_it_Works";
import HowItGrowth from "../components/growth/growth";
import { useState, useEffect } from "react";
import EquireNow from "../components/Enquire-now/Enquire_now";
function HomeComponent() {
  const [modal, setmodal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="body">
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <button className="button-close" onClick={() => setmodal(!modal)}>
          x
        </button>
        <EquireNow />
      </Modal>

      {isVisible && (
        <button className="btn btn-hire" onClick={() => setmodal(true)}>
          Hire
        </button>
      )}
      {isVisible && <button className="btn btn-apply">Apply</button>}
      <Navbar />
      <Video />
      <Counter />
      <HowItWorks />
      <HowItGrowth />

      <StudentFeedback />
      <PartnerFeedback />
      <InstagramCarousal />
      <Faqs />
      <Footer />
    </div>
  );
}

export default HomeComponent;
