import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Teacher } from '../../../../models/teacher';
import { TeacherService } from '../../../../core/services/teacher.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfDto } from '../../../../projectModel/prof-dto';
import { AuthService } from '../../../../projectService/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent {
  
  registerprof:ProfDto = new ProfDto()
  confirmPassword!:string;
 
  receiveRequests: string = 'no';
  isLoading: boolean = false;

  constructor(private authservice:AuthService , private router:Router , private toastr: ToastrService) { }

 /*  // Disponibilité
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
  ]; */

  onSubmit(): void {
  
  
    this.isLoading = true;
  this.authservice.registerProf(this.registerprof).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success("Teacher succesfully registred 😎")
      
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        
        this.toastr.error(" Sorry student filed register !!!!! 😥")
        
      }
      
      
    });
  }
  














   
    
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      // Optionnel : Vous pouvez ajouter une validation pour le type de fichier, par exemple pour accepter uniquement les images
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        console.error('Type de fichier non valide. Veuillez télécharger une image.');
        return;
      }
  
      /* this.profilePhoto = file;
      console.log('Fichier sélectionné :', file.name); // Pour déboguer */
    }
  }
  

  // Utility functions
  isFieldInvalid(fieldName: string, form: NgForm): boolean {
    const field = form.controls[fieldName];
    return field.invalid && (field.dirty || field.touched);
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.registerprof.email);
  }

  doPasswordsMatch(): boolean {
    return this.registerprof.password === this.confirmPassword;
  }

 

 /*  toggleAvailability(value: string) {
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
  } */
}
