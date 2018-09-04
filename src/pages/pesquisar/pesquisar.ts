import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoServiceProvider } from '../../providers/carrinho-service/carrinho-service';
import { AdicionarPage } from '../adicionar/adicionar';

/**
 * Generated class for the PesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {


  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public carrinhoService: CarrinhoServiceProvider) {
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

  add(){
    this.navCtrl.push(AdicionarPage);
}

}
