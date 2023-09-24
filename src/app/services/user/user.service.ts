import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUser from 'models/user/types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ data: IUser[] }> {
    return this.http.get<{ data: IUser[] }>(this.apiUrl);
  }
}
