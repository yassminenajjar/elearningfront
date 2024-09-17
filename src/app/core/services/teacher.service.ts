import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



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

interface Course {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
}




@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) { }

  registerTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, teacher);
  }

  loginTeacher(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  getAllTeachers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTeacherById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}