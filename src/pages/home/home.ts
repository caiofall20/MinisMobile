import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoServiceProvider } from '../../providers/carrinho-service/carrinho-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController,public carrinhoService: CarrinhoServiceProvider) {
    this.getAll();
  }

  getAll() {
    this.carrinhoService.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj;
      });
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
