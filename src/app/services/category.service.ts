import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  AddCategory(category: any) {
    return this.httpClient.post<{ message: any }>(
      `${this.apiUrl}/api/category/add`,
      category
    );
  }

  allCategory() {
    return this.httpClient.get<{ category: any; nbr: any }>(
      `${this.apiUrl}/api/category/all`
    );
  }

  GetCategory(category: any) {
    return this.httpClient.get<{ category: any }>(
      `${this.apiUrl}/api/category/get/${category}`
    );
  }

  GetNumberProduct(category: any) {
    return this.httpClient.get<{ number: any }>(
      `${this.apiUrl}/api/category/number/${category}`
    );
  }

  GetPayment(category: any) {
    return this.httpClient.get<{ number: any }>(
      `${this.apiUrl}/api/category/payment/${category}`
    );
  }
}
