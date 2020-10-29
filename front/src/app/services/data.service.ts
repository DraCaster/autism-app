import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({ "Content-Type" : "application/json" })


  // ********* Users  ************


  // environment.url por defecto esta vacio, habria que agregarle el comienzo de la url hacia la api
  // que es igual para cada consulta

  getUsers(){
    return this.http.get(environment.url + `/users`);
  }

  registerUser(object: any){
    return this.http.post( environment.url + `/user-register`, object, { headers: this.headers }) 
    .pipe( map( data => data ));
  }

  updateUser(object: any){
    const url_api = environment.url + `/user/password/${object.id}`;
    return this.http.put( url_api, object, { headers: this.headers }) 
                    .pipe( map(data => data));
  }



  // Estos metodos son mas genericos, si se desea implementarlos de ese modo, enviando la url por parametro

  getById(id: number, url: string){
    const url_api = environment.url + url + `/${id}`;
    return this.http.get(url_api);
  }

  save(object: any, url: string){
    return this.http.post( environment.url + url, object, { headers: this.headers }) 
                    .pipe( map( data => data ));
  }

  update(object: any, url: string){
    const url_api = environment.url + url + `/${object.id}`;
    return this.http.put( url_api, object, { headers: this.headers }) 
                    .pipe( map(data => data));
  }

  delete(id: String, url: string){
    const url_api = environment.url + url + `/${id}`;
    return this.http.delete( url_api, { headers: this.headers }) 
                    .pipe( map(data => data));
  }
  
}