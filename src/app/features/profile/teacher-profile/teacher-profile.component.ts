import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
}

interface Teacher {
  photo: string;
  nom: string;
  prenom: string;
  email: string;
  bio: string;
  cvLink: string;
  accepteSessions: boolean;
  courses: Course[];
}


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {
 
  teacher: Teacher = {
    photo: 'https://via.placeholder.com/150',
    nom: 'John',
    prenom: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Description du professeur...',
    cvLink: 'url/to/cv.pdf',
    accepteSessions: true, // Modifier cette valeur selon les données de l'inscription
    courses: [
      {
        id: 1,
        photo: 'https://via.placeholder.com/150',
        title: 'Cours 1',
        description: 'Description du cours 1...',
        price: 50
      },
      // Ajouter d'autres cours ici...
    ]
    
  };
  showNotifications = false;
  notifications: string[] = ['Notification 1', 'Notification 2', 'Notification 3'];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  requestSession() {
    this.router.navigate(['/request-session']);
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  addCourse() {
    this.router.navigate(['/add']);
  }

  editCourse(courseId: number) {
    this.router.navigate(['/edit-course', courseId]);
  }

  deleteCourse(courseId: number) {
    // Implémenter la logique de suppression du cours ici...
  }
  viewSales() {
    this.router.navigate(['/vente']); // Changez le chemin en fonction de votre route pour les ventes
  }


  navigateToaddcourse() {
    this.router.navigate(['/newcour']);
  }

  navigateTouppdatecours() {
    this.router.navigate(['/updatecours']);
  }

}