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
  selector: 'app-loginadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})
export class LoginadminComponent {
  constructor (public router:Router){}
  public message=""
  public email=""
  public password=""
  public inpclass=""
  public inpclass2=""
  public getUser:detailsInterface[]=[]
   ngOnInit(){
     this.getUser=JSON.parse(localStorage['Adminstudent'])
     console.log(this.getUser);
     
   }
   login(){
     let currentUser=this.getUser.find((item, index)=>this.email==item.Email && this.password==item.Password)
     console.log(currentUser);
     if(currentUser){
       this.message="User found"
       localStorage.setItem('current_adminuser', JSON.stringify(currentUser))
       setTimeout(() => {
         this.message=""
         this.router.navigate(['dashboard'])
       }, 1300);
     }
     else{
       this.message="User not found"
       setTimeout(() => {
         this.message=""
       }, 2000);
     }
   }
   inp1(){
     this.inpclass='em'
     this.inpclass2=''
   }
   inp2(){
     this.inpclass=''
     this.inpclass2='em'
   }
}
