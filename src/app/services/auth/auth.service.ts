import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedUserUrl =
    'http://localhost:4200/api/auth/authenticated-user';

  private authLogOutUrl = 'http://localhost:4200/api/auth/logout';

  private authLogInUrl = 'http://localhost:4200/api/auth/login';

  private authSignUpUrl = 'http://localhost:4200/api/auth/sign-up';

  constructor(private http: HttpClient) {}

  private options = { withCredentials: true };

  getAuthenticatedUser(): Observable<{ data: User }> | null {
    return this.http.get<{ data: User }>(
      this.authenticatedUserUrl,
      this.options,
    );
  }

  logOut() {
    return this.http.get<void>(this.authLogOutUrl, this.options);
  }

  logIn(data: Partial<{ email: string | null; password: string | null }>) {
    return this.http.post<void>(this.authLogInUrl, data, this.options);
  }

  signUp(
    data: Partial<{
      email: string | null;
      firstName: string | null;
      lastName: string | null;
      password: string | null;
    }>,
  ) {
    return this.http.post<void>(this.authSignUpUrl, data, this.options);
  }
}
