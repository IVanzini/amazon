import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, LoginDTO, RegisterDTO } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  register(model: RegisterDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + "/register", model);
  }

  login(model: LoginDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + "/login", model);
  }
}
