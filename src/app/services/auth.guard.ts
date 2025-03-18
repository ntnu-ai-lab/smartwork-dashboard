// src/app/services/auth.guard.ts
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { 
  Router, 
  CanActivateFn,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// Injectable service that will be used by the guard function
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Redirect to login page
    return this.router.createUrlTree(['/login']);
  }
}

// This is the functional guard that Angular expects
export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  return inject(AuthGuardService).canActivate(route, state);
};
