import { ListaPageModule } from './../lista/lista.module';
import { FotografiaPageModule } from './../fotografia/fotografia.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	fotos: any;
	listado: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.fotos = 'FotografiaPage';
		this.listado = 'ListaPage';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabsPage');
	}
}
