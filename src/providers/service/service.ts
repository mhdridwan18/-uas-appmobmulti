import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=eb07e5d98ae04676a095678b487a1e8f';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getNews(){
    return this.httpClient.get(this.API_KEY);
  }

}



