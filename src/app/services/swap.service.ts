import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class SwapService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  addProduct(product: any, img: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('detail', product.detail);
    formData.append('img', img);
    formData.append('user', product.user);
    return this.httpClient.post<{ message: String; product: any }>(
      `${this.apiUrl}/api/swaps/products/add`,
      formData
    );
  }

  adMenu(product: any, imgg: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('img', product.img);
    formData.append('detail', product.detail);
    formData.append('imgg', imgg);
    formData.append('user', product.user);
    return this.httpClient.post<{ message: String; product: any }>(
      `${this.apiUrl}/api/swaps/upload`,
      formData
    );
  }

  editProduct(product: any) {
    return this.httpClient.put<{ message: String }>(
      `${this.apiUrl}/api/swaps/editt/${product._id}`,
      product
    );
  }

  getAllproducts() {
    return this.httpClient.get<{ products: any; number: any }>(
      `${this.apiUrl}/api/swaps/products`
    );
  }

  deleteProduct(id: any) {
    return this.httpClient.delete<{ message: string }>(
      `${this.apiUrl}/api/swaps/delete/${id}`
    );
  }

  GetProductInStock() {
    return this.httpClient.get<{ products: any }>(
      `${this.apiUrl}/api/swaps/instock`
    );
  }

  getProductByCategory(id: any) {
    return this.httpClient.get<{ produit: any }>(
      `${this.apiUrl}/api/swaps/category/${id}`
    );
  }

  getProductById(id: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.apiUrl}/api/swaps/products/${id}`
    );
  }

  getProductByUser(id: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.apiUrl}/api/swaps/products/user/${id}`
    );
  }
}
