import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, catchError, from, throwError } from 'rxjs';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  firebaseAuth = inject(Auth);

  router: Router;
  userToken: any;
  constructor() { 
    this.router = inject(Router);
  }
  doRegister(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(async(res) => {
      this.userToken = await res.user.getIdToken();
      localStorage['token'] = this.userToken;
      updateProfile(res.user, {displayName: username})
    })
    
    return from(promise);

  }
  doLogin(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(async(userCredential) => {
      this.userToken = userCredential.user.getIdToken();
      localStorage.setItem('token', this.userToken);

    })
    .catch(err => {
      console.log(err.code);
      console.log(err.message);
      return Promise.reject(err);
    })
    return from(promise).pipe(
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );

  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.authenticated = false;
    this.router.navigate(['/login']);
  }
}
