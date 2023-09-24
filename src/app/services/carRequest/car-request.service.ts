import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICarRequest from 'models/carRequest/types/CarRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarRequestService {
  private apiUrl = 'http://localhost:4200/api/car-requests/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createCarRequest(
    data: Partial<{
      carId: string | null;
      userId: string | null;
    }>,
  ): Observable<void> {
    return this.http.post<void>(this.apiUrl, data, this.options);
  }

  deleteCarRequestById(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteCarRequestsByUserId(userId: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/user/${userId}`,
      this.options,
    );
  }

  deleteCarRequestsByCarId(carId: string) {
    return this.http.delete<void>(`${this.apiUrl}/car/${carId}`, this.options);
  }

  getCarRequestById(id: string): Observable<{ data: ICarRequest | null }> {
    return this.http.get<{ data: ICarRequest | null }>(
      `${this.apiUrl}/${id}`,
      this.options,
    );
  }

  getCarRequestsByCarId(carId: string): Observable<{ data: ICarRequest[] }> {
    return this.http.get<{ data: ICarRequest[] }>(
      `${this.apiUrl}/car/${carId}`,
      this.options,
    );
  }

  getCarRequestsByUserId(userId: string): Observable<{ data: ICarRequest[] }> {
    return this.http.get<{ data: ICarRequest[] }>(
      `${this.apiUrl}/user/${userId}`,
      this.options,
    );
  }

  updateCarRequestById(
    id: string,
    data: Partial<{
      carId: string | null;
      userId: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data, this.options);
  }
}
