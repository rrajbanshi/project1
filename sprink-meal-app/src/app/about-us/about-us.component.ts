import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  arrowClicked1: boolean = false;
  arrowClicked2: boolean = false;
  arrowClicked3: boolean = false;
  arrowClicked4: boolean = false;
  arrowClicked5: boolean = false;
  arrowClicked6: boolean = false;
  div1: boolean = false;
  div2: boolean = false;
  div3: boolean = false;
  div4: boolean = false;
  div5: boolean = false;
  div6: boolean = false;

  onArrowClicked1() {
    this.arrowClicked1 = !this.arrowClicked1;
    this.div1 = !this.div1;
    console.log(this.div1);
  }

  onArrowClicked2() {
    this.arrowClicked2 = !this.arrowClicked2;
    this.div2 = !this.div2;
    console.log(this.arrowClicked2);
  }

  onArrowClicked3() {
    this.arrowClicked3 = !this.arrowClicked3;
    this.div3 = !this.div3;
    console.log(this.arrowClicked3);
  }
  onArrowClicked4() {
    this.arrowClicked4 = !this.arrowClicked4;
    this.div4 = !this.div4;
    console.log(this.arrowClicked4);
  }
  onArrowClicked5() {
    this.arrowClicked5 = !this.arrowClicked5;
    this.div5 = !this.div5;
    console.log(this.arrowClicked5);
  }
  onArrowClicked6() {
    this.arrowClicked6 = !this.arrowClicked6;
    this.div6 = !this.div6;
    console.log(this.arrowClicked6);
  }

  constructor() {}
  ngOnInit(): void {}
}
