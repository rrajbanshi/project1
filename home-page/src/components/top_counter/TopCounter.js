import React, { useEffect, useRef, useState } from "react";
import "./TopCounter.css";
import vertical_line from "../../images/Vertical_line.png";
import horizontal_line from "../../images/horizontal_line.png";
import percentage from "../../images/percentage.png";

const TopCounter = () => {
  
  // chorts counter
 let endone=16;
  const [stateone,setStateone]=useState(null)
  const refone=useRef(5);
  const accumulatorone=1;
  const updateConuterState_one =()=>{
    if(refone.current<endone){
       const  resultone=Math.ceil(refone.current+accumulatorone);
       if(resultone>endone)
        return setStateone(endone);
        setStateone(resultone);
        refone.current=resultone;
    }
    setTimeout(updateConuterState_one,500);
  };
  
    

  // deployed_candidates
  let endtwo=360;
  const [statetwo,setStatetwo]=useState(null)
  const reftwo=useRef(50);
  const accumulatortwo=15;
  const updateConuterState_two=()=>{
    if(reftwo.current<endtwo){
       const  resulttwo=Math.ceil(reftwo.current+accumulatortwo);
       if(resulttwo>endtwo)
        return setStatetwo(endtwo);
        setStatetwo(resulttwo);
        reftwo.current=resulttwo;
    }
    setTimeout(updateConuterState_two,500);
  };
 
  //Avg salary growth
  let end_three=340;
  const [state_three,setState_three]=useState(null)
  const ref_three=useRef(100);
  const accumulator_three=15;
  const updateConuterState_three =()=>{
    if(ref_three.current<end_three){
       const  result_three=Math.ceil(ref_three.current+accumulator_three);
       if(result_three>end_three)
        return setState_three(end_three);
        setState_three(result_three);
        ref_three.current=result_three;
    }
    setTimeout(updateConuterState_three,500);
  };



  //Clients

  let end_four=40;
  const [state_four,setState_four]=useState(null)
  const ref_four=useRef(5);
  const accumulator_four=5;
  const updateConuterState_four =()=>{
    if(ref_four.current<end_four){
       const  result_four=Math.ceil(ref_four.current+accumulator_four);
       if(result_four>end_four)
        return setState_four(end_four);
        setState_four(result_four);
        ref_four.current=result_four;
    }
    setTimeout(updateConuterState_four,500);
  };


  function count(){

    updateConuterState_one();
    updateConuterState_two()
    updateConuterState_three();
    updateConuterState_four();
  }
  // useEffect(()=>{
  //   let isMounted=true;
  //   if(isMounted) {
  //    count()
  //   }
  //   return()=>(isMounted=false);
  
  // },[endone,endtwo,end_three,end_four]);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    setStateone(5);
    setStatetwo(50);
    setState_three(100);
    setState_four(5);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToShowFrom = 400;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom) {  
     
         count();
    }   
  };                         

 

  return (
    
    <div className="counter-section">
    <div className="row">
      
     <div className="col-lg-1"></div>
     <div className="col-lg-10">
     <div className="success-counter-section">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="success-counter">
              <p>
                <span>SUCCESS</span>
                <br />
                COUNTER
              </p>
            </div>
          </div>
          <div className="col-lg-1 col-12">
            {/* laptop */}
            <img
              style={{ height: 100 }}
              src={vertical_line}
              alt="Vertical_line"
              className="d-none d-lg-block text-center"
            />
            {/* mobile */}
            <img
              className="horizontal_line d-block d-lg-none offset-2 col-8  text-center"
              src={horizontal_line}
              alt="horizontal_line"
            />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row counter-content">
              <div className="col-lg-3 col-3">
                <div className=" cohorts">
                  <span id="counter-one">{stateone}</span>
                  <span className="cohorts-plus">+</span>
                  <p>Cohorts</p>
                </div>
              </div>
              <div className="col-lg-3 col-3 counter-deployed">
                <div className="success  cohorts">
                  <span id="counter-one" >{statetwo}</span>
                  <span className="cohorts-plus">+</span>
                  <p>Deployed <br />
                   Candidates
                  </p>

                </div>
              </div>
              <div className="col-lg-3 col-3 counter-avg-salary">
                <div className=" cohorts">
                  <span id="counter-one" >{state_three}</span>
                  <img className="percentage" src={percentage} alt=""/>
                  <p>Avg.Salary <br />
                    Growth</p>
                </div>
              </div>
              <div className="col-lg-3 col-3">
                <div className="cohorts">
                  <span id="counter-one">{state_four}</span>
                  <span className="cohorts-plus">+</span>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="col-lg-1"></div>
    </div>
    </div>
  );
};

export default TopCounter;
