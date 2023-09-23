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

  private authSendPasswordResetTokenUrl =
    'http://localhost:4200/api/auth/send-password-reset-token';

  private resetPasswordWithTokenUrl =
    'http://localhost:4200/api/auth/send-password-reset-token';

  constructor(private http: HttpClient) {}

  private options = { withCredentials: true };

  getAuthenticatedUser(): Observable<{ data: User }> | null {
    return this.http.get<{ data: User }>(
      this.authenticatedUserUrl,
      this.options,
    );
  }

  sendPasswordResetToken(data: Partial<{ emailAddress: string | null }>) {
    return this.http.post<void>(
      this.authSendPasswordResetTokenUrl,
      data,
      this.options,
    );
  }

  resetPasswordWithToken(
    token: string,
    data: Partial<{ password: string | null }>,
  ) {
    return this.http.put<void>(
      `${this.resetPasswordWithTokenUrl}/${token}`,
      data,
      this.options,
    );
  }

  logOut() {
    return this.http.delete<void>(this.authLogOutUrl, this.options);
  }

  logIn(
    data: Partial<{ emailAddress: string | null; password: string | null }>,
  ) {
    return this.http.post<void>(this.authLogInUrl, data, this.options);
  }

  signUp(
    data: Partial<{
      emailAddress: string | null;
      firstName: string | null;
      lastName: string | null;
      password: string | null;
    }>,
  ) {
    return this.http.post<void>(this.authSignUpUrl, data, this.options);
  }
}
