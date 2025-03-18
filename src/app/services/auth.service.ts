import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  // Dashboard credentials
  private credentials = {
    username: 'dash_user',
    password: 'dash_password'
  };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.credentials.username && 
        password === this.credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}