import React from "react";
import "./Navbar.css";
import Logo from "../../images/Horizontal Logo.png";
import Logo_mobile from "../../images/Futurense.png";
import Bento_menu from "../../images/Bento-Menu.png";

const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light col-12">
  <a className="navbar-brand offset-lg-1" href="#">
    <img
      src={Logo}
      className="d-none d-lg-block"
      height="50px"
      alt="Futurense"
    />
    <img
      className="d-block d-lg-none"
      src={Logo_mobile}
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
      <img src={Bento_menu} alt="menu" />{" "}
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
</nav> */}
      <div class="navbarDiv">
        <nav class="navbar navbar-expand-lg navbar-light col-12">
          <a class="navbar-brand offset-lg-1" href="#">
            <img
              src={Logo}
              class="d-none d-lg-block logo"
              height="50px"
              alt="Futurense"
            />

            <img
              class="d-block d-lg-none"
              src={Logo_mobile}
              height="50px"
              alt="Futurense"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <img src={Bento_menu} alt="menu" />{" "}
            </span>
          </button>

          <div
            class="collapse navbar-collapse offset-lg-4"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Hire from us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Apply to Upskill
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FuturenseUni
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
