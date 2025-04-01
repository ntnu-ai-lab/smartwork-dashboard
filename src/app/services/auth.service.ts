import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Config {
  auth: {
    username: string;
    password: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  // Dashboard credentials
  private credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient) {
    this.loadConfig();
    
  }

  private loadConfig(): void {
    this.http.get<Config>('assets/config.json')
      .subscribe({
        next: (config) => {
          this.credentials = {
            username: config.auth.username,
            password: config.auth.password
          };
        },
        error: (error) => {
          console.error('Failed to load configuration:', error);
        }
      });
  }
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