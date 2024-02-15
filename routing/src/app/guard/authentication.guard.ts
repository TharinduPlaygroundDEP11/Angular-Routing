import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const value = localStorage.getItem('user');

  if (value && value === 'authenticated') {
    return true;
  } else {
    const routerService = inject(Router);
    routerService.navigateByUrl('/login');
    return false;
  }
};
