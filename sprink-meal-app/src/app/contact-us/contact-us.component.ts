import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  formsData!: FormGroup;

  constructor(private _formsBuilder: FormBuilder, private _http: HttpClient) {}

  ngOnInit(): void {
    this.formsData = this._formsBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      subject: [''],
      message: [''],
    });
  }

  onFormSubmit() {
    //console.log(this.formsData.value);
    this._http
      .post<any>('http://localhost:3000/query', this.formsData.value)
      .subscribe(
        (res) => {
          alert('Message sent, we will get back to you !!');
          this.formsData.reset();
        },
        (err) => {
          alert('something wrong');
        }
      );
  }
}
