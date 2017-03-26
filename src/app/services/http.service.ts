import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../userModel';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {
  private BASE_URL:string = 'https://simplify-api.herokuapp.com/api/users/';

  constructor(
	        private http: Http
	) { }

	public getAllUser(){
		return this.http.get(`${this.BASE_URL}`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	public addUser(body:UserModel){
		let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
        });
		return this.http.post(`${this.BASE_URL}`,JSON.stringify(body), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	public updateUser(body:UserModel){

        let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
        });

		return this.http.put(`${this.BASE_URL}${body['_id']}`,JSON.stringify(body), options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	public deleteUser(usersID:string){

        let options = new RequestOptions({
        	headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
        });

		return this.http.delete(`${this.BASE_URL}${usersID}`,options)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
