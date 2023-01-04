import "./Section_3.css";
import Img1 from "../../images/Section_3_img1.png";
import Img2 from "../../images/Section_3_img2.png";
import { React, useState } from "react";
import { useTransition, animated } from "react-spring";

const Section_3 = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: 200, y: 800, opacity: 0, delay: 200 },
    enter: { x: 0, y: 0, opacity: 1, delay: 1000 },
    leave: { x: -200, y: 800, opacity: 0, delay: 1000 },
  });

  const [isVisible_2, setIsVisible_2] = useState(false);
//   const transition2 = useTransition(isVisible_2, {
//     from: { x: 200, y: 800, opacity: 0 },
//     enter: { x: 0, y: 0, opacity: 1, delay: 2000 },
//     leave: { x: -100, y: 800, opacity: 0, delay: 2000 },
//   });
  // const [items1,setItems1] = useState([]);
  // const transition=useTransition(items1,{
  //     from:{x:200,y:800,opacity:0,delay:100},
  //     //enter:item=>(next)=>(next({x:0,y:item.y,opacity:1,delay:item.delay})),
  //     enter:{x:0,y:0,opacity:1,delay:600},
  //     leave:{x:-100,y:800,opacity:0, delay:100}

  // })

  // const [items2,setItems2] = useState([]);
  // const transition2=useTransition(items2,{
  //     from:{x:200,y:800,opacity:0},
  //     enter:item=>(next)=>(next({x:0,y:item.y,opacity:1,delay:item.delay})),
  //     leave:{x:-100,y:800,opacity:0,delay:2000}

  // })


  //   const handleButtonClick1= () => {
  //         setIsAlertVisible(true);

  //         setTimeout(() => {
  //             setIsAlertVisible(false);
  //       }, 3000);
  //    }
  const handleButtonClick2 = () => {
    //setIsVisible((v) => !v);
    setIsVisible(true);

    setIsVisible_2((v) => !v);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    
    setTimeout(() => {
        setIsVisible_2((v) => !v);
    },2000);
  };

  return (
    <div>
      <div className="text-center">
        {transition((style, img1) =>
          img1 ? <animated.img src={Img1} style={style} className="img1" /> : ""
        )}
{/* 
        {transition2((style, img2) =>
          img2 ? <animated.img src={Img2} style={style} className="img2" /> : ""
        )} */}
      </div>
      <button
        onClick={handleButtonClick2}
        className="btn btn-light text-center"
      >
        mount
      </button>
    </div>
  );
};

export default Section_3;
