import { User } from './../../app/model/Usuarios';
import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CrearCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-crear-cuenta',
	templateUrl: 'crear-cuenta.html'
})
export class CrearCuentaPage {
	correo: string;
	clave: string;

	usuarioNuevo: FormGroup;
	public loading: Loading;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public userService: UserServiceProvider,
		public alertCtrl: AlertController,
		public formBuilder: FormBuilder,
		public afAuth: AngularFireAuth,
		public loadingCtrl: LoadingController
	) {
		//Validaciones de campos
		this.usuarioNuevo = this.formBuilder.group({
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			verificar: [ '', Validators.required ]
		});
	}

	/**
	 * Mensaje de error cuando las contrasenias no coinsiden
	 */
	contraseniaInvalida() {
		let alert = this.alertCtrl.create({
			title: 'Fallido',
			subTitle: 'Las  contraseñas no coinciden',
			buttons: [ 'Continuar' ]
		});
		alert.present();
	}

	/**
	 * MEtodo que valida que las contrasenias esten igual y que llama a un servicio 
	 * para crear un usuario y que este quede almacenado en la BD
	 */
	crear() {
		if (this.usuarioNuevo.value.password != this.usuarioNuevo.value.verificar) {
			this.contraseniaInvalida();
			return null;
		}

		/**
		 * Se crea el usuario nuevo con el email y el password
		 * que se reciben del formulario
		 */
		const user: User = new User();
		user.email = this.usuarioNuevo.value.email;
		user.password = this.usuarioNuevo.value.password;

		this.userService
			.registrar(user)
			// this.afAuth.auth
			// 	.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
			.then(
				(res) => {
					//Si se crea con exito se dirige a tabs
					this.navCtrl.setRoot('TabsPage');
				},
				(error) => {
					// si hay un problema se lanza una alerta
					this.loading.dismiss().then(() => {
						let alert = this.alertCtrl.create({
							title: '¡Error!',
							subTitle: 'Correo invalido, intente de nuevo',
							buttons: [ 'OK' ]
						});
						alert.present();
					});
				}
			);

		this.loading = this.loadingCtrl.create({
			dismissOnPageChange: true
		});
		this.loading.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CrearCuentaPage');
	}
}
