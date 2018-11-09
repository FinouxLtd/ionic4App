import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const loggedIn = false; // replace with actual user auth checking logic

    if (!loggedIn) {
      // this.router.navigate(['/home']);
      return true;
     } else {
       this.router.navigate(['/map']);
       return false;
     }
  }
}
