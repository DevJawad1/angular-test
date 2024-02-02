import { Routes } from '@angular/router';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';
import { adminGuard } from './guards/admin.guard';
import { SignupadminComponent } from './signupadmin/signupadmin.component';

export const routes: Routes = [
    {path:'', component:SignupstudentComponent},
    {path:'registration', component:SignupstudentComponent},
    {path:'signup', component:SignupadminComponent},
    {path:'login', component:LoginadminComponent},
    {path:'dashboard', children:[
        {path:'', component:DashboardComponent} 
    ], canActivate:[adminGuard]},
];
