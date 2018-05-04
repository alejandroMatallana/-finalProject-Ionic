import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { UserServiceProvider } from './../providers/user-service/user-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { config } from './conexion';

import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { ListaJsonProvider } from '../providers/lista-json/lista-json';
import { Camera } from '@ionic-native/camera';

@NgModule({
	declarations: [ MyApp, HomePage ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		HttpModule,
		AngularFireModule.initializeApp(config),
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage ],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		Base64ToGallery,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		UserServiceProvider,
		ListaJsonProvider
	]
})
export class AppModule {}
