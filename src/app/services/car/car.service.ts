import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CarWithImage from 'src/app/types/CarWithImages';

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

  deleteCarById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteCarsByUserId(userId: string) {
    return this.http.delete(`${this.apiUrl}/user/${userId}`);
  }

  getCarById(id: string): Observable<{ data: CarWithImage }> {
    return this.http.get<{ data: CarWithImage }>(`${this.apiUrl}/${id}`);
  }

  getCars(): Observable<{ data: CarWithImage[] }> {
    return this.http.get<{ data: CarWithImage[] }>(this.apiUrl);
  }

  getCarsByUserId(userId: string): Observable<{ data: CarWithImage }> {
    return this.http.get<{ data: CarWithImage }>(
      `${this.apiUrl}/user/${userId}`,
    );
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
