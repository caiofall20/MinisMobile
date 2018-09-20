import { Carrinho } from './../../models/carrinho.model';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpServiceProvider {
  private url: string = 'https://miniatura-api.herokuapp.com';

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getAll(endpoint) {
    return this.http.get(`${this.url}/${endpoint}`)
      .map(res => {
        return res.json();
      });
  }

  get(endpoint, id) {
    return this.http.get(`${this.url}/${endpoint}/${id}`)
      .map(res => {
        return res.json();
      });
  }

  post(endpoint, resource) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.url}/${endpoint}`, resource, options)
      // .map(res => {
      //   return res.json();
      // });
  }

  put(endpoint, resource) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.url}/${endpoint}`, resource, options)
      // .map(res => {
      //   return res.json();
      // });
  }
  // // delete(carrinho, id) {
  // //   return this.http.delete(`${this.url}/${carrinho}/${id}`)
  // //     .map(res => {
  // //       return res.json();
  // //     });
     
  // }
}