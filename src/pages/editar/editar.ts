import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { CarrinhoServiceProvider } from '../../providers/carrinho-service/carrinho-service';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  carrinho = {
    'modelo': '',
    'marca': '',
    'colecao': '',
    'escala' : '',
    'ano' : ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpServiceProvider,public carrinhoService: CarrinhoServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
    const CarrinhoId = this.navParams.get('CarrinhoId');
    console.log(CarrinhoId);
  }
  
edit(obj){
  this.carrinhoService.put(obj)
  .subscribe(data => {
 
      });
}
}
