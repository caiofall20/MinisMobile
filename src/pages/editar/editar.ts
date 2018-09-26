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

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpServiceProvider,public carrinhoService: CarrinhoServiceProvider) {
    this.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
    const CarrinhoId = this.navParams.get('CarrinhoId');
    const Carrinho = this.navParams.get('Carrinho');
    console.log(CarrinhoId);
    console.log(Carrinho);
  }

  getAll() {
    this.carrinhoService.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj;
      });
  }
  
edit(Carrinho){
  this.carrinhoService.put(Carrinho)
  .subscribe(data => {
 
      });
}
}
