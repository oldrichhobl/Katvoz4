import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Events } from '@ionic/angular';

import { GlobalProvider } from "./global/global";

/*
  Generated class for the HermesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HermesProvider {
  public loaded: any = false; 
  public XMLdata: any;

  XMLstring: string;
  Parser : any;
  
  locDefExpKatvoz:string = './assets/hermes/defExpKatvoz.xml';
  locKatvozList:string   = './assets/hermes/katvozlist.xml';

    
  constructor(public http: HttpClient, public events: Events,
              public global: GlobalProvider) 
  {
    console.log('Hello HermesProvider Provider');
  }
  
  // Nacteni XML ze serveru Hermes
  loadXML() {
    console.log("hermes.ts loadXML " + this.locDefExpKatvoz);
    this.http.get(this.locKatvozList, {responseType: 'text'}).subscribe((res) => {
       console.log("NACTENO " + this.locDefExpKatvoz);
       console.dir(res);
       this.XMLstring = res;
       // domparser
       this.Parser = new (window as any).DOMParser();
       this.XMLdata = this.Parser.parseFromString(this.XMLstring, "text/xml");
       //  console.dir(this.XMLdata);
       this.loaded = true;   // mame nacteno
       //
       this.events.publish('data:loaded', 'Data', Date.now());
       });
  };
  
  public showData()
  {
    var xsltProcessor=new (window as any).XSLTProcessor();
    console.dir(this.XMLdata);
    console.dir(xsltProcessor);
  };
  readStatus()
  {
    console.log('HermesProvider readStatus server: '+ this.global.server);	
  }
}
