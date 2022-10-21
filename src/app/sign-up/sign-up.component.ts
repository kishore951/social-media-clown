import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  name=""
  dob=""
  phoneNumber=""
  place=""
  emailId=""
  password=""
  confirmPassword=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phoneNumber":this.phoneNumber,
      "place":this.place,
      "emailId":this.emailId,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
