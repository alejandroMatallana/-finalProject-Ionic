import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { User } from '../../app/model/Usuarios';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
	constructor(
		private db: AngularFirestore,
		private afAuth: AngularFireAuth,
		private http: HttpClient
	) {}

	/**
	 * Metodo que registrar los uduarios y que utiliza la autenticacion de firebase
	 * @param user, el usuario que sera autenticado y creado 
	 */
	registrar(user: User): Promise<any> {
		return this.afAuth.auth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((newUser) => {
				this.db
					.collection('usuarios')
					.doc(newUser.uid)
					.set({
						id: newUser.uid,
						correo: user.email,
						password: user.password
					})
					.catch((error) => console.log);
			});
	}
}
