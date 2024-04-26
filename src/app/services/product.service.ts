import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  addProduct(product: any, img: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('detail', product.detail);
    formData.append('img', img);
    formData.append('new_price', product.new_price);
    formData.append('solde', product.solde);
    formData.append('remise', product.remise);
    return this.httpClient.post<{ message: String; product: any }>(
      `${this.apiUrl}/api/products/products/add`,
      formData
    );
  }

  adMenu(product: any, imgg: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('img', product.img);
    formData.append('detail', product.detail);
    formData.append('solde', product.solde);
    formData.append('remise', product.remise);
    formData.append('new_price', product.new_price);
    formData.append('imgg', imgg);
    return this.httpClient.post<{ message: String; product: any }>(
      `${this.apiUrl}/api/products/upload`,
      formData
    );
  }

  editProduct(product: any) {
    return this.httpClient.put<{ message: String }>(
      `${this.apiUrl}/api/products/editt/${product._id}`,
      product
    );
  }

  editProduct1(product: any, img: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('detail', product.detail);
    formData.append('img', img);
    formData.append('new_price', product.new_price);
    formData.append('solde', product.solde);
    formData.append('remise', product.remise);
    return this.httpClient.put<{ message: String; product: any }>(
      `${this.apiUrl}/api/products/edit1/${product._id}`,
      formData
    );
  }

  editProduct2(product: any, imgg: File) {
    let formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('categorie', product.categorie);
    formData.append('quantity', product.quantity);
    formData.append('description', product.description);
    formData.append('img', product.img);
    formData.append('detail', product.detail);
    formData.append('solde', product.solde);
    formData.append('remise', product.remise);
    formData.append('new_price', product.new_price);
    formData.append('imgg', imgg);
    return this.httpClient.put<{ message: String }>(
      `${this.apiUrl}/api/products/edit2/${product._id}`,
      formData
    );
  }

  getAllproducts() {
    return this.httpClient.get<{ products: any; number: any }>(
      `${this.apiUrl}/api/products/products`
    );
  }

  GetProductInStock() {
    return this.httpClient.get<{ products: any }>(
      `${this.apiUrl}/api/products/instock`
    );
  }

  gettrends() {
    return this.httpClient.get<{ trend: any }>(
      `${this.apiUrl}/api/products/trends`
    );
  }

  getProductById(id: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.apiUrl}/api/products/products/${id}`
    );
  }

  getProductByName(name: any) {
    return this.httpClient.get<{ product: any }>(
      `${this.apiUrl}/api/products/product/${name}`
    );
  }

  deleteProduct(id: any) {
    return this.httpClient.delete<{ message: string }>(
      `${this.apiUrl}/api/products/delete/${id}`
    );
  }

  searchByName(trainerObj: any) {
    return this.httpClient.post<{ findedProduct: any; message: string }>(
      `${this.apiUrl}/api/product/search/trainerName`,
      trainerObj
    );
  }
  getProductByCategory(id: any) {
    return this.httpClient.get<{ produit: any }>(
      `${this.apiUrl}/api/products/category/${id}`
    );
  }

  DeleteQuantity(product: any) {
    return this.httpClient.post<{ message: any }>(
      `${this.apiUrl}/api/products/delete/quantity`,
      product
    );
  }

  LatestArrivals() {
    return this.httpClient.get<{ produits: any }>(
      `${this.apiUrl}/api/products/latest`
    );
  }

  LowerProduct(product: any) {
    return this.httpClient.post<{ product: any }>(
      `${this.apiUrl}/api/products/lower`,
      product
    );
  }

  HighProduct(product: any) {
    return this.httpClient.post<{ product: any }>(
      `${this.apiUrl}/api/products/high`,
      product
    );
  }

  HomeProducts() {
    return this.httpClient.get<{ product: any }>(
      `${this.apiUrl}/api/products/shop_home`
    );
  }
}
