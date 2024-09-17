import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent {
  // Champs du formulaire
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  subjects: string = '';
  categories: string = '';
  city: string = '';
  bio: string = '';
  receiveRequests: string = 'no';
  profilePhoto: File | null = null;
  isLoading = false;

  // Disponibilité
  showAvailability: { [key: string]: boolean } = {
    'Lundi': false,
    'Mardi': false,
    'Mercredi': false,
    'Jeudi': false,
    'Vendredi': false,
    'Samedi': false,
    'Dimanche': false
  };

  days: { name: string; times: string[]; selectedTimes: string[] }[] = [
    { name: 'Lundi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Mardi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Mercredi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Jeudi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Vendredi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Samedi', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
    { name: 'Dimanche', times: ['matin', 'midi', 'après-midi', 'soir'], selectedTimes: [] },
  ];

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

  isFieldInvalid(fieldName: string, form: NgForm): boolean {
    const field = form.controls[fieldName];
    return field && field.invalid && (field.dirty || field.touched);
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  doPasswordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.profilePhoto = input.files[0];
    }
  }

  toggleAvailability(value: string) {
    if (value === 'yes') {
      this.showAvailability = { ...this.showAvailability, ...Object.fromEntries(Object.keys(this.showAvailability).map(day => [day, true])) };
    } else {
      this.showAvailability = { ...this.showAvailability, ...Object.fromEntries(Object.keys(this.showAvailability).map(day => [day, false])) };
    }
  }

  toggleDay(dayName: string) {
    this.showAvailability[dayName] = !this.showAvailability[dayName];
  }

  toggleTime(dayName: string, time: string) {
    const day = this.days.find(d => d.name === dayName);
    if (day) {
      const index = day.selectedTimes.indexOf(time);
      if (index === -1) {
        day.selectedTimes.push(time);
      } else {
        day.selectedTimes.splice(index, 1);
      }
    }
  }
}
