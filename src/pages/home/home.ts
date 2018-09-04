import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoServiceProvider } from '../../providers/carrinho-service/carrinho-service';
import { AdicionarPage } from '../adicionar/adicionar';
import { PesquisarPage } from '../pesquisar/pesquisar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  constructor(public navCtrl: NavController) {
    
  }
  add(){
    this.navCtrl.push(AdicionarPage);
}
pesq(){
  this.navCtrl.push(PesquisarPage);
}
}
