import { CarrinhoServiceProvider } from './../../providers/carrinho-service/carrinho-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {
  carrinho = {
    'modelo': '',
    'marca': '',
    'colecao': '',
    'escala' : '',
    'ano' : ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpServiceProvider, public toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }
  saveCarrinho(carrinho) {

    this.http.post('carrinhos', carrinho)
             .subscribe(data => {
               let toast = this.toastCtrl.create({
                   message: data.msg,
                   duration: 3000
                 });
                 toast.present();
             });

}
}
