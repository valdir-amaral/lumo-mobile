import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IonContent, IonSpinner } from '@ionic/angular/standalone';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, IonContent, IonSpinner],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor() {
    Keyboard.addListener('keyboardDidShow', info => {
      document.body.style.marginTop = `-${info.keyboardHeight*0.1}px`
    })
    Keyboard.addListener('keyboardDidHide', () => {
      document.body.style.marginTop = "0"
    })
    
    Keyboard.setAccessoryBarVisible({isVisible: false})
  }

  loading: boolean = false;
  warnMessage: string = "";

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl(''),

  })
  signInState = true;
  
  authService = inject(AuthService);
  router = inject(Router);

  register() {
    this.loading = true
    this.authService.doRegister(`${this.userForm.value.userEmail}`, `${this.userForm.value.userName}`, `${this.userForm.value.password}`).subscribe(() =>
    this.router.navigate(['/app/tabs/explore']));
  }
  login() {
    this.loading = true
    this.authService.doLogin(`${this.userForm.value.userEmail}`, `${this.userForm.value.password}`)
    .subscribe({
      next: () => { 
        this.loading = false;
        this.router.navigate(['/app/tabs/explore'])

      },
      error: (err: Error) => {
        this.loading = false;
        console.error("Erro de login:", err.message);
        this.warnMessage = "E-mail ou senha incorretos!"
      }
      
    })
  }
}
