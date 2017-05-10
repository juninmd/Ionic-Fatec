import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstagramProvider {

  constructor(public http: Http) {
  }

  public getFotos() {
    return this.http.get(`https://instagram-api-fatec.herokuapp.com/instagram`, {}).map(response => response.json())
  }

  public postFoto(post: any) {
    return this.http.post(`https://instagram-api-fatec.herokuapp.com/instagram`, post, {}).map(response => response.json())
  }
}
