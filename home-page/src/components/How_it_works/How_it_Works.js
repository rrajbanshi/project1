import React from "react";
import "./How_it_Works.css";
import img1 from "../../images/how_it_works_img1.png";
import img2 from "../../images/how_it_works_img2.png";
import img3 from "../../images/how_it_works_img3.png";
import img4 from "../../images/how_it_works_img4.png";
import img5 from "../../images/how_it_works_img5.png";
import img6 from "../../images/how_it_works_img6.png";
import img7 from "../../images/how_it_works_img7.png";
import img8 from "../../images/how_it_works_img8.png";
import img9 from "../../images/how_it_works_img9.png";
import img10 from "../../images/how_it_works_img10.png";
import arrow from "../../images/Arrow.png";
import { Fade } from "react-awesome-reveal";

const How_it_Works = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-lg-1 "></div>
        <div className="col-lg-10 col-6 d-none d-lg-block">
            <h1><span className="how_it_works">How it works?</span></h1>
            <div className='offset-lg-1'>
              <Fade top duration={1500}>
                    <div className="row how-it-all-started-1">
                        <div className='col-lg-2 '>
                          <img className="how_it_started_img1"src={img1} alt=""/>
                        </div>
                        <div className='col-lg-1 '>
                        <p className="numbers">01</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Apply</h4>
                          <p className="content content-1">Apply for open postion of your interest</p>
                        </div>
                    </div> 
                    <div className="row mt-3 how-it-all-started-2" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img2} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">02</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Screening</h4>
                          <p className="content content-2">Undergo a multi-layered screening process</p>
                        </div>
                    </div> 

                    <div className="row mt-3 how-it-all-started-3" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img3} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">03</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Onboarding</h4>
                          <p className="content  content-3">Get onboarded (new cohort every month)</p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-4" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img4} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">04</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Payroll & Hikes</h4>
                          <p className="content  content-4">Get paid as per your current salary with a guaranteed hike in 2 months</p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-5" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img5} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">05</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Training</h4>
                          <p className="content  content-5">Get industry-relevant training for 2 months </p>
                        </div>
                    </div>
                  

                    <div className="row mt-3 how-it-all-started-6" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img6} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">06</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Accommodation & Food</h4>
                          <p className="content  content-6">Get free accommodation & food during the training period. </p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-7" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img7} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">07</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Deployment</h4>
                          <p className="content  content-7">Get deployed in Fortune 500 companies, leading MNCs & well-funded start-ups. </p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-8" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img8} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">08</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Post-Deployment Assistance</h4>
                          <p className="content  content-8">Get complete assistance even after deployment. </p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-9" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1"src={img9} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers">09</p>
                          <img   className='arrow' src={arrow} alt=""/>
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Post-deployment Upskilling</h4>
                          <p className="content  content-9">Get a fully sponsored PG certification after deployment</p>
                        </div>
                    </div>
                    <div className="row mt-3 how-it-all-started-10" >
                        <div className='col-lg-2'>
                          <img className="how_it_started_img1 img10"src={img10} alt=""/>
                        </div>
                        <div className='col-lg-1'>
                        <p className="numbers_10">10</p>
                          
                        </div>
                        <div  className='col-lg-8 discription' >
                          <h4 className="headings">Conversion</h4>
                          <p className="content  content-10">GGet converted as a full-time employee with the client or get deployed with another client </p>
                        </div>
                    </div>
                    </Fade>
            </div>
        </div>
  {/* mobile */}
        <div className="col-10 offset-2 mt-5 d-block d-lg-none">
        <Fade top duration={1500}>
          <h1><span className="how_it_works">How it works?</span></h1>
          <div className="row">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img1} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">01</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Apply</h4>
              <p className="content content-1">
                Apply for open postion of your interest
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img2} alt="" />
            </div>
            <div className="col-1">
              <p className="number-mobile">02</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Screening </h4>
              <p className="content content-2">
              Undergo a multi-layered screening process
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img3} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">03</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Onboarding</h4>
              <p className="content content-3">
              Get onboarded (new cohort every month)
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img4} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">04</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Payroll & Hikes</h4>
              <p className="content content-4">
              Get paid as per your current salary with a guaranteed hike in 2 months
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img5} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">05</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Training</h4>
              <p className="content content-5">
              Get industry-relevant training for 2 months
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img6} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">06</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Accommodation 
                     & Food</h4>
              <p className="content content-6">
              Get free accommodation & food during the training period
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img7} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">07</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Deployment</h4>
              <p className="content content-7">
              Get deployed in Fortune 500 companies, leading MNCs, or well-funded start-ups.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img8} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">08</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Post-Deployment Assistance</h4>
              <p className="content content-8">
              Get complete assistance after deployment.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-1" src={img9} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">09</p>
              <img className="arrow-mobile" src={arrow} alt="" />
            </div>
            <div className="col-6 ">
              <h4 className="headings">Post-Deployment
             Upskilling</h4>
              <p className="content content-9">
              Get a fully sponsored PG certification after deployment
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2 ">
              <img className="img-mobile-10" src={img10} alt="" />
            </div>
            <div className="col-1 ">
              <p className="number-mobile">10</p>
              
            </div>
            <div className="col-6 ">
              <h4 className="headings">Conversion</h4>
              <p className="content content-10">
              Get converted as a full-time employee with the client or get deployed with another client
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default How_it_Works;
