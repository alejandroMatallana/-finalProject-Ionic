import { ListaJsonProvider } from './../../providers/lista-json/lista-json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../app/model/Post';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-lista',
	templateUrl: 'lista.html'
})
export class ListaPage {
	post: Observable<Post[]>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public listaJson: ListaJsonProvider
	) {
		this.post = listaJson.getPost();
	}

	/**
	 * Metodo para enviar un objeto completo a la segunda pantalla
	 * ademas de llamar a la segunda pantalla
	 * @param post Objeto que se le manda a la segunda pantalla
	 */
	detalle(post: Post): void {
		this.navCtrl.push('DetalleListPage', { p: post });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListaPage');
	}
}
