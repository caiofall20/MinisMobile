import { EditarPage } from './../pages/editar/editar';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {  HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { CarrinhoServiceProvider } from '../providers/carrinho-service/carrinho-service';
import { AdicionarPage } from '../pages/adicionar/adicionar';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { EscalaPage } from '../pages/escala/escala';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionarPage,
    PesquisarPage,
    EditarPage,
    EscalaPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionarPage,
    PesquisarPage,
    EditarPage,
    EscalaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrinhoServiceProvider,
    HttpServiceProvider
  ]
})
export class AppModule {}
