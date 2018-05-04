import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../app/model/Post';

/**
 * Generated class for the DetalleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detalle-list',
	templateUrl: 'detalle-list.html'
})
export class DetalleListPage {
	//Variable que se espera con el ID del objeto especifico

	post: Post;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		//Se accede a el Id para poder mostrarlo en la venta
		this.post = this.navParams.get('p');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalleListPage');
	}
}
