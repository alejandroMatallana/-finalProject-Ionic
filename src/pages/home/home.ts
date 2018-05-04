import { UserServiceProvider } from './../../providers/user-service/user-service';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	correo: string;
	clave: string;
	myFormLogin: FormGroup;
	public loading: Loading;

	constructor(
		public navCtrl: NavController,
		public afAuth: AngularFireAuth,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public formBuilder: FormBuilder
	) {
		//Validaciones de campos
		this.myFormLogin = this.formBuilder.group({
			email: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	}

	/**
	 * Metodo que se encarga de verificar el correo y el password del usuario
	 * para permitir que entre a la aplicacion, por medio de la autenticacion que tiene
	 * fireBase
	 */
	loginUser() {
		this.afAuth.auth
			.signInWithEmailAndPassword(
				this.myFormLogin.value.email,
				this.myFormLogin.value.password
			)
			.then(
				() => {
					console.log('User logging');
					this.navCtrl.setRoot('TabsPage');
				},
				(err) => {
					this.loading.dismiss().then(() => {
						let alert = this.alertCtrl.create({
							title: '¡Error!',
							subTitle: 'Usuario o contrasenia invalida, intente de nuevo',
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

	goToSignup() {
		this.navCtrl.push('CrearCuentaPage');
	}
}
