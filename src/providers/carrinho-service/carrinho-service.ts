import { Http, RequestOptions,Headers } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

/*
  Generated class for the CarrinhoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrinhoServiceProvider {
  private url: string = 'https://miniatura-api.herokuapp.com/carrinhos';
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(
          `https://miniatura-api.herokuapp.com/carrinhos`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
    delete(obj) {
    return this.http.delete(`${this.url}/${obj.id}`)
      .map(res => {
        return res.json();
      });
     
  }
}
