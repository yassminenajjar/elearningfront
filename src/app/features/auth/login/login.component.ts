import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;
  rememberMe = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  get emailErrors() {
    const control = this.f['email'];
    if (control.errors) {
      if (control.errors['required']) {
        return 'Email est requis';
      }
      if (control.errors['email']) {
        return 'Format d\'email invalide';
      }
    }
    return null;
  }

  get passwordErrors() {
    const control = this.f['password'];
    if (control.errors) {
      if (control.errors['required']) {
        return 'Mot de passe requis';
      }
      if (control.errors['minlength']) {
        return 'Le mot de passe doit comporter au moins 6 caractères';
      }
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    this.error = null;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    setTimeout(() => {
      // Simulate a login request
      this.loading = false;
      if (this.f['email'].value !== 'test@example.com' || this.f['password'].value !== 'password') {
        this.error = 'Email ou mot de passe invalide';
      } else {
        alert('Connexion réussie!');
        // Optionally, redirect or navigate to another page
      }
    }, 2000);
  }
}



