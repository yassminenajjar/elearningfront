import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  studentData: any;
  courses: any[] = [];
  editMode = false;
  selectedFile: File | null = null;

  // Données simulées pour l'exemple
  mockStudentData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    profilePicture: 'https://via.placeholder.com/150'
  };

  mockCourses = [
    { id: 1, title: 'Introduction to Angular', date: '2024-05-01' },
    { id: 2, title: 'Advanced JavaScript', date: '2024-06-15' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Simuler le chargement des données du profil étudiant
    this.studentData = this.mockStudentData;
    this.courses = this.mockCourses;
   
  }



  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Créer un URL pour afficher l'aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.studentData.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

 

  logout(): void {
    // Handle logout logic here (e.g., clear user session, redirect to login page)
    console.log('User logged out');
    this.router.navigate(['/login']); // Example redirect to login page
  }

  // Exemple de méthode pour gérer le téléchargement de fichiers
  private uploadFile(file: File): void {
    // Implémentez ici la logique pour télécharger le fichier sur le serveur
    console.log('Uploading file to server:', file);
  }


  navigateTouppdate() {
    this.router.navigate(['/uppdatestudent']);
  }

}