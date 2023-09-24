import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:4200/api/account/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  updateEmailAddress(
    data: Partial<{
      emailAddress: string | null;
      password: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/change-email-adddress`,
      data,
      this.options,
    );
  }

  updatePassword(
    data: Partial<{
      password: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/change-password`,
      data,
      this.options,
    );
  }

  closeAccount(
    data: Partial<{
      close: string;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/close-account`,
      data,
      this.options,
    );
  }

  sendEmailVerificationToken(
    data: Partial<{
      emailAddress: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/verify-email/send-token`,
      data,
      this.options,
    );
  }

  verifyEmailWithToken(token: string): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/verify-email/${token}`,
      this.options,
    );
  }
}
