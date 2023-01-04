function counter() {
  // counter-one

  let counts_one = setInterval(() => {
    updated_one();
  }, 50);
  let upto_one = 0;
  const speed_one = 1;
  let target_one = 16;
  function updated_one() {
    var count = document.getElementById("counter-one");
    //let increment=speed_one/target_one;
    upto_one = speed_one + upto_one;
    count.innerHTML = upto_one;

    if (upto_one === target_one) {
      clearInterval(counts_one);
    }
  }

  //counter-two

  let counts_two = setInterval(() => {
    updated_two();
  }, 50);
  let upto_two = 0;
  const speed_two = 15;
  let target_two = 360;
  function updated_two() {
    var count = document.getElementById("counter-two");
    //let increment=Math.trunc(speed_two/target_two);
    upto_two = speed_two + upto_two;
    count.innerHTML = upto_two;

    if (upto_two === target_two) {
      clearInterval(counts_two);
    }
  }

  //counter-three
  // let counts_three=setInterval(updated_three);
  let counts_three = setInterval(() => {
    updated_three();
  }, 50);
  let upto_three = 0;
  const speed_three = 2;
  let target_three = 40;
  function updated_three() {
    var count = document.getElementById("counter-three");
    //let increment=Math.trunc(speed_two/target_two);
    upto_three = speed_three + upto_three;
    count.innerHTML = upto_three;

    if (upto_three === target_three) {
      clearInterval(counts_three);
    }
  }
}
$(document).ready(function () {
  document.getElementById("counter-one").innerHTML = 2;
  document.getElementById("counter-two").innerHTML = 50;
  document.getElementById("counter-three").innerHTML = 5;
  $(window).scroll(function () {
    var positiontop = $(window).scrollTop();
    console.log(positiontop);
    var flag = true;
    if (flag) {
      if (positiontop >= 800 && positiontop <= 850) {
        counter();
        flag = false;
      }
    }
  });
});
//  $(document).ready(function() {
//     $("#success-counter-section").show(function() {
//         counter()
//     });
//  });
// setTimeout(() => {

//     document.getElementById("hide-now").style.display = "none";
//     document.getElementById("hide-renew").style.display = "block";

//  }, 2000);

//  setTimeout(() => {

//     document.getElementById("hide-now-deployed").style.display = "none";
//     document.getElementById("hide-renew-deployed").style.display = "block";

//  }, 2000);

//  setTimeout(() => {

//     document.getElementById("hide-now-client").style.display = "none";
//     document.getElementById("hide-renew-client").style.display = "block";

//  }, 2000);
