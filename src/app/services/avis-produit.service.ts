import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AvisProduitService {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  AddAvisProduct(avis: any) {
    return this.httpClient.post<{ message: any }>(
      `${this.apiUrl}/api/avis/avis-produit/add`,
      avis
    );
  }

  getAllreviews() {
    return this.httpClient.get<{ review: any; nbr: any }>(
      `${this.apiUrl}/api/avis/review`
    );
  }

  getReviewProduct(id: any) {
    return this.httpClient?.get<{ review: any; nbr: String; star: any }>(
      `${this.apiUrl}/api/avis/review/${id}`
    );
  }

  getNumber(id: any) {
    return this.httpClient?.get<{ number: any }>(
      `${this.apiUrl}/api/avis/number/${id}`
    );
  }
}
