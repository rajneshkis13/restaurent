// import { HttpClient } from '@angular/common/http';
import { Headers,Http } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var config = {
  serveConnectionString: 'http://www.oesinternational.com/restaurant/api/'
}

@Injectable()
export class AllserviceProvider {

  constructor(public http: Http) {
    console.log('Hello AllserviceProvider Provider');
  }

  call(data){
      return this.http.post(config.serveConnectionString,data).map(res => res.json());
  }

}
