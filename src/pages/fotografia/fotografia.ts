import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { FirebaseApp } from 'angularfire2';

/**
 * Generated class for the FotografiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-fotografia',
	templateUrl: 'fotografia.html'
})
export class FotografiaPage {
	imagen: string;
	options: CameraOptions;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera,
		public alertCtrl: AlertController,
		public fireba: FirebaseApp
	) {}

	/**
	 * Metodo que se encarga de abrir la camara para tomar la foto y
	 * guardarla respectivamente
	 */
	takePicture(): void {
		this.options = {
			quality: 100,
			targetHeight: 1000,
			targetWidth: 1000,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE,
			saveToPhotoAlbum: true,
			sourceType: 1
		};

		this.cameraPlugin.getPicture(this.options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:

				this.imagen = 'data:image/jpeg;base64,' + imageData;
			},
			(err) => {
				// Handle error
				console.log('La foto no se ha guardado con exito' + err);
			}
		);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FotografiaPage');
	}
}
