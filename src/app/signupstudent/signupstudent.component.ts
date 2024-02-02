import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface detailsInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Gender:string,
  Password:string,
}
@Component({
  selector: 'app-signupstudent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signupstudent.component.html',
  styleUrl: './signupstudent.component.css'
})
export class SignupstudentComponent {
  constructor(public route:Router){}
  firstname=""
  lastname=""
  email=""
  password=""
  gender=""
  public allUser:detailsInterface[]=[]
  message=""
  // Function to generate a random 5-digit number
 generateRandom5DigitNumber(): number {
  return Math.floor(10000 + Math.random() * 90000);
  }

  // random5DigitNumber: number = this.generateRandom5DigitNumber()
  submit(){
    if(localStorage['Studentuser']){
      let getUser=JSON.parse(localStorage['Studentuser'])
      this.allUser=getUser
    }
    let userobj={
      Firstname:this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Gender:this.gender,
      matric:this.generateRandom5DigitNumber(),
      Password:this.password,
    }
    this.allUser.push(userobj)
    localStorage.setItem('Studentuser', JSON.stringify(this.allUser))
    if(this.allUser.push(userobj)){
      // this.route.navigate(['/login'])
      this.message="You successfully sign up"
    }
    else{
      this.message="Cant sign up error"
    }
  }
}
