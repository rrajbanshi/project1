import Logo from "../../src/images/Horizontal Logo.png";
import Logo2 from "../../src/images/Futurense.png";
import bento from "../../src/images/Bento-Menu.png";
import "./../home-component/navbar.css";
function Navbar() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <nav className="navbar navbar-expand-lg navbar-light col-12">
        <a href="#" className="navbar-brand offset-lg-1">
          <img
            src={Logo}
            className="d-none d-lg-block"
            height="50px"
            alt="Futurense"
          />

          <img
            className="d-block d-lg-none"
            src={Logo2}
            height="50px"
            alt="Futurense"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            {" "}
            <img src={bento} alt="menu" />{" "}
          </span>
        </button>

        <div
          className="collapse navbar-collapse offset-lg-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hire from us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Apply to Upskill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FuturenseUni
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}
export default Navbar;
