import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class WhishlistService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllProduct() {
    return this.httpClient.get<{ whishlist: any; nbr: any }>(
      `${this.apiUrl}/api/whish/whishlist`
    );
  }

  getWishesOfUser(id: any) {
    return this.httpClient.get<{ number: any; wishes: any }>(
      `${this.apiUrl}/api/whish/whishlist/${id}`
    );
  }

  DeleteProduct(id: any) {
    return this.httpClient.delete<{ message: any }>(
      `${this.apiUrl}/api/whish/delete/product/${id}`
    );
  }

  AddProduct(whish: any) {
    return this.httpClient.post<{ message: any }>(
      `${this.apiUrl}/api/whish/product/add`,
      whish
    );
  }

  GetNumberWish(id: any) {
    return this.httpClient.get<{ number: any }>(
      `${this.apiUrl}/api/whish/number/${id}`
    );
  }

  deblicated() {
    return this.httpClient.get<{ wish: any }>(
      `${this.apiUrl}/api/whish/deblicate`
    );
  }

  GetInformation(wish: any) {
    return this.httpClient.get<{ wish: any }>(
      `${this.apiUrl}/api/whish/information/${wish}`
    );
  }
}
