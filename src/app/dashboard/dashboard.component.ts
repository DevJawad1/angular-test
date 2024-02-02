import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public getStudent=JSON.parse(localStorage['Studentuser'])
  constructor(public router:Router){}
  showView="hidden"
  eachuser:any=""
  ngOnInit(){
    console.log(this.getStudent);
  }
  del(i:number){
    this.getStudent=this.getStudent.filter((item:any,id:number )=> id!=i)
    localStorage.setItem('Studentuser', JSON.stringify(this.getStudent))
    this.router.navigate(['dashboard'])
  }
  edit(i:number){

  }
  view(i:number){
    this.eachuser=this.getStudent[i]
    this.showView='Visible'
    this.router.navigate(['dashboard'])
  }
}
