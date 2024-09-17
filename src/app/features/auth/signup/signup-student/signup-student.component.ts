import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrl: './signup-student.component.css'
})
export class SignupStudentComponent {
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  class: string = '';
  gender: string = '';
  city: string = '';
  profilePhoto: File | null = null;
  isLoading: boolean = false;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      // Marquer tous les contrôles comme touchés pour afficher les erreurs de validation
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }
  
    this.isLoading = true;
  
    // Simuler un délai de soumission du formulaire
    setTimeout(() => {
      this.isLoading = false;
      alert('Form submitted successfully!');
      form.resetForm();
    }, 2000); // 2000 ms = 2 secondes
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.profilePhoto = input.files[0];
    }
  }

  isFieldInvalid(fieldName: string, form: NgForm): boolean {
    const field = form.controls[fieldName];
    return field.invalid && field.touched;
  }

  doPasswordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  isEmailValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email);
  }
}