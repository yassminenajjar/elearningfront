import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/Student';

  constructor(private http: HttpClient) { }

  registerStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Register`, student);
  }

  loginStudent(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, { email, password });
  }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}