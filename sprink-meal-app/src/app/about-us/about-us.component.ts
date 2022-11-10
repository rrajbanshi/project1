import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  arrowClicked1: boolean = false;
  div1: boolean = false;
  div2: boolean = false;
  arrowClicked2: boolean = false;

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
  constructor() {}
  ngOnInit(): void {}
}
