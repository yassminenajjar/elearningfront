import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Matiere } from '../projectModel/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  baseUrl = environment.baseUrl+ "/Matiere"
  //baseUrlcontprof = environment.baseUrl+ "/professeurs"
//baseUrlcontuser = environment.baseUrl+ "/profil"




  constructor(private http: HttpClient) { }




  // Récupérer toutes les matières
  findAllMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${this.baseUrl}/listall`);
  }


  // Récupérer une matière par son ID
  findMatiereById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.baseUrl}/getbyid/${id}`);
  }


  // Créer ou mettre à jour une matière
  saveMatiere(matiere: Matiere): Observable<Matiere> {
   
    return this.http.post<Matiere>(`${this.baseUrl}/save`, matiere);
  }
  updateMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>(`${this.baseUrl}/modifier`, matiere);
  }
  // Supprimer une matière par son ID
  deleteMatiereById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }}














