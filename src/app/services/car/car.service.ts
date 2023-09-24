import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:4200/api/cars/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createCar(
    data: Partial<{
      make: string | null;
      model: string | null;
      colour: string | null;
    }>,
  ) {
    return this.http.post<void>(this.apiUrl, data, this.options);
  }

  deleteCarById(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteCarsByUserId(userId: string) {
    return this.http.delete(`${this.apiUrl}/user/${userId}`);
  }

  getCarById(id: string): Observable<{ data: Car }> {
    return this.http.get<{ data: Car }>(`${this.apiUrl}/${id}`);
  }

  getCars(): Observable<{ data: Car[] }> {
    return this.http.get<{ data: Car[] }>(this.apiUrl);
  }

  getCarsByUserId(userId: string): Observable<{ data: Car }> {
    return this.http.get<{ data: Car }>(`${this.apiUrl}/user/${userId}`);
  }

  updateCarById(
    id: string,
    data: Partial<{
      make: string | null;
      model: string | null;
      colour: string | null;
    }>,
  ) {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data, this.options);
  }
}
