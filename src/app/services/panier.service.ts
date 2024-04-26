import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllproduct(id: any) {
    return this.httpClient.get<{ panier: any }>(
      `${this.apiUrl}/api/panier/panier/${id}`
    );
  }

  AddPanierS(product: any) {
    return this.httpClient.post<{ panier: any; message: any }>(
      `${this.apiUrl}/api/panier/product/add-swap`,
      product
    );
  }

  AddPanier(product: any) {
    return this.httpClient.post<{ panier: any; message: any }>(
      `${this.apiUrl}/api/panier/product/add`,
      product
    );
  }

  AddCart(product: any) {
    return this.httpClient.post<{ panier: any; message: any }>(
      `${this.apiUrl}/api/panier/cart/add`,
      product
    );
  }

  AddCartS(product: any) {
    return this.httpClient.post<{ panier: any; message: any }>(
      `${this.apiUrl}/api/panier/cart/add_swap`,
      product
    );
  }

  TotalPrice(id: any) {
    return this.httpClient.get<{ prices: any; nbr: number }>(
      `${this.apiUrl}/api/panier/panier/prices/${id}`
    );
  }

  addProductInBasket(panier: any) {
    return this.httpClient.post<{ result: any }>(
      `${this.apiUrl}/api/panier/bascket/add`,
      panier
    );
  }

  deleteProductFromBasket(panier: any) {
    // let formData = new FormData();
    // formData.append('panier',panier);
    // formData.append('id',id);
    return this.httpClient.post<{ result: any; message: any }>(
      `${this.apiUrl}/api/panier/bascket/delete`,
      panier
    );
  }
  DeleteProduct(panier: any) {
    return this.httpClient.post<{ result: any; number: number }>(
      `${this.apiUrl}/api/panier/bascket/delete/product`,
      panier
    );
  }

  getProductByID(product: any) {
    return this.httpClient.post<{ pro: any; message: String }>(
      `${this.apiUrl}/api/panier/products`,
      product
    );
  }
}
