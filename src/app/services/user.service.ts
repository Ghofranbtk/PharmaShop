import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  signUp(user: any) {
    return this.httpClient.post<{ message: String; id: any }>(
      `${this.apiUrl}/api/user/users/add`,
      user
    );
  }

  logIn(user: any) {
    return this.httpClient.post<{ name: any; message: string; token: any }>(
      `${this.apiUrl}/api/user/users/login`,
      user
    );
  }

  editUser(user: any) {
    return this.httpClient.put<{ message: String; id: any; error: String }>(
      `${this.apiUrl}/api/user/edit/${user._id}`,
      user
    );
  }
  getAllUsers() {
    return this.httpClient?.get<{ users: any; nbr: any }>(
      `${this.apiUrl}/api/user/users`
    );
  }
  getUserById(id: any) {
    return this.httpClient?.get<{ user: any; message: String }>(
      `${this.apiUrl}/api/user/users/${id}`
    );
  }
  getUserByEmail(email: any) {
    return this.httpClient?.get<{ user: any; message: String }>(
      `${this.apiUrl}/api/user/email/${email}`
    );
  }

  deleteUser(id: any) {
    return this.httpClient?.delete<{ message: string }>(
      `${this.apiUrl}/api/user/users/${id}`
    );
  }
  decryptPwd(pwd: any) {
    return this.httpClient?.post<{ message: string }>(
      `${this.apiUrl}/api/user/decrypt/pwd`,
      pwd
    );
  }
  forgotPassword(data: any) {
    return this.httpClient.post<{ token: any }>(
      `${this.apiUrl}/api/forgotPassword/forgot-password`,
      data
    );
  }

  resetPassoword(resetData: any) {
    return this.httpClient.post(
      `${this.apiUrl}/api/resetPassword/reset-password`,
      resetData
    );
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  NumberOfOrders(id: any) {
    return this.httpClient.get<{ number: any }>(
      `${this.apiUrl}/api/user/orders/${id}`
    );
  }
}
