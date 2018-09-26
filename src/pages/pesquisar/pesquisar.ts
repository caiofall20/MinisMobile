import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { CarrinhoServiceProvider } from '../../providers/carrinho-service/carrinho-service';
import { AdicionarPage } from '../adicionar/adicionar';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { EditarPage } from '../editar/editar';

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
  
  constructor(public navCtrl: NavController,  public platform: Platform, public navParams: NavParams, public carrinhoService: CarrinhoServiceProvider,private ActionSheetController: ActionSheetController,public http: HttpServiceProvider) {
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

// deleteCarrinho(obj) {

//   this.carrinhoService.delete(obj)
//   .then(data => {
//     this.obj = data;
//     this.result = this.obj;
//   });
// }

selectMiniatura(obj: any) {

  this.ActionSheetController.create({
    title: `${obj.modelo}`,
    buttons: [
      {
        text: 'Editar',
        icon: !this.platform.is('ios') ? 'build' : null,
        handler: () => {

           this.navCtrl.push(EditarPage,
            {CarrinhoId: obj.id, CarrinhoModelo : obj.modelo, Carrinho : obj });


        }
      },
      {
        text: 'Apagar',
        cssClass: 'action-sheets-basic-page',
        icon: !this.platform.is('ios') ? 'trash' : null,
        role: 'destructive',
        handler: () => {
          this.carrinhoService.delete(obj)
          .subscribe(data => {
         
              });
          // this.listaAlunoRef$.remove(aluno.$key);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log("O usuário cancelou o botão selecionado.")
        }
      }
    ]
  }).present();
  
}

}
