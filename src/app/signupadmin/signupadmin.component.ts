import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface detailsInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Gender:string,
  Password:string,
}
@Component({
  selector: 'app-signupadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signupadmin.component.html',
  styleUrl: './signupadmin.component.css'
})
export class SignupadminComponent {
  constructor(public route:Router){}
  firstname=""
  lastname=""
  email=""
  password=""
  gender=""
  public allUser:detailsInterface[]=[]
  message=""
  submit(){
    if(localStorage['Adminstudent']){
      this.message="You cant sign up here go to registration"
    }
    else{
      let userobj={
        Firstname:this.firstname,
        Lastname:this.lastname,
        Email:this.email,
        Gender:this.gender,
        Password:this.password
      }
      this.allUser.push(userobj)
      localStorage.setItem('Adminstudent', JSON.stringify(this.allUser))
      if(this.allUser.push(userobj)){
        this.route.navigate(['/login'])
      }
      else{
        this.message="Cant sign up error"
      }
    }
  }
}
