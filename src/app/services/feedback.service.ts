import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  Addfeedback(feedback: any) {
    return this.httpClient.post<{ message: any }>(
      `${this.apiUrl}/api/feedback/feed/add`,
      feedback
    );
  }

  getAllFeedbacks() {
    return this.httpClient.get<{ feedback: any; nbr: any }>(
      `${this.apiUrl}/api/feedback/feedbacks`
    );
  }

  DeleteFeedback(id: any) {
    return this.httpClient.delete<{ message: string }>(
      `${this.apiUrl}/api/feedback/delete/${id}`
    );
  }
  AddToHomeList(feedback: any) {
    return this.httpClient.put<{ message: any }>(
      `${this.apiUrl}/api/feedback/home/add/${feedback._id}`,
      feedback
    );
  }

  DeleteFromHomeList(feedback: any) {
    return this.httpClient.put<{ message: any }>(
      `${this.apiUrl}/api/feedback/home/delete/${feedback._id}`,
      feedback
    );
  }

  GetVisibleFeedback() {
    return this.httpClient.get<{ feedback: any }>(
      `${this.apiUrl}/api/feedback/visible`
    );
  }
}

// /${user._id}`, user);
