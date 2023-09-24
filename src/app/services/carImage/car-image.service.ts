import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  private apiUrl = 'http://localhost:4200/api/car-images/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createCarImage(
    data: Partial<{
      url: string;
    }>,
  ): Observable<void> {
    return this.http.post<void>(this.apiUrl, data, this.options);
  }

  deleteCarImageById(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteCarImagesByUserId(userId: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/user/${userId}`,
      this.options,
    );
  }

  getCarImageById(id: string): Observable<{ data: CarImage | null }> {
    return this.http.get<{ data: CarImage | null }>(
      `${this.apiUrl}/${id}`,
      this.options,
    );
  }

  getCarImagesByCarId(carId: string): Observable<{ data: CarImage[] }> {
    return this.http.get<{ data: CarImage[] }>(
      `${this.apiUrl}/car/${carId}`,
      this.options,
    );
  }
}
