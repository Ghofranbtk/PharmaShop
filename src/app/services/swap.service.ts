import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwapService {
  productUrl: string = 'http://localhost:3001';

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
      `${this.productUrl}/api/swaps/products/add`,
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
      `${this.productUrl}/api/swaps/upload`,
      formData
    );
  }

  editProduct(product: any) {
    return this.httpClient.put<{ message: String }>(
      `${this.productUrl}/api/swaps/editt/${product._id}`,
      product
    );
  }

  getAllproducts() {
    return this.httpClient.get<{ products: any; number: any }>(
      `${this.productUrl}/api/swaps/products`
    );
  }

  deleteProduct(id: any) {
    return this.httpClient.delete<{ message: string }>(
      `${this.productUrl}/api/swaps/delete/${id}`
    );
  }

  GetProductInStock() {
    return this.httpClient.get<{ products: any }>(
      `${this.productUrl}/api/swaps/instock`
    );
  }

  getProductByCategory(id: any) {
    return this.httpClient.get<{ produit: any }>(
      `${this.productUrl}/api/swaps/category/${id}`
    );
  }

  getProductById(id: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.productUrl}/api/swaps/products/${id}`
    );
  }

  getProductByUser(id: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.productUrl}/api/swaps/products/user/${id}`
    );
  }
}
