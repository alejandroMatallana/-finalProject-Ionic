import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../app/model/Post';

/*
  Generated class for the ListaJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaJsonProvider {
	//Url de donde se obtraen los datos
	url = 'http://jsonplaceholder.typicode.com/posts';

	constructor(public http: HttpClient) {
		console.log('Hello ListaJsonProvider Provider');
	}

	/**
	 * Metodo que retorna un arreglo de objetos de una url que contine json
	 */
	getPost() {
		return this.http.get<Post[]>(this.url);
	}
}
