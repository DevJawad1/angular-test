import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'

export const adminGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user= JSON.parse(localStorage['current_adminuser'])
  if(!user){
    routes.navigate(['/login'])
  }
  return true
};
