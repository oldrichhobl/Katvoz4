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
  public items: any;


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
       // console.dir(res);
       this.XMLstring = res;
       // domparser
       this.Parser = new (window as any).DOMParser();
       this.XMLdata = this.Parser.parseFromString(this.XMLstring, "text/xml");
       //  console.dir(this.XMLdata);
       this.loaded = true;   // mame nacteno
       //
       this.selectNode('//RECS/REC');
       //
       this.events.publish('data:loaded', 'Data', Date.now());
       });
  }
  
  public showData()
  {
    var xsltProcessor=new (window as any).XSLTProcessor();
    console.dir(this.XMLdata);
    console.dir(xsltProcessor);
  }

  readStatus()
  {
    console.log('HermesProvider readStatus server: '+ this.global.server);  
  }
  getAuto(id)
  {
    id++;
    console.log('HermesProvider getAuto server: '+ this.global.server);  
    var nod = this.XMLdata.evaluate('//RECS/REC['+id+']', this.XMLdata, null, XPathResult.ANY_TYPE,null); 
    console.log("ResultType = " + nod.resultType);
    console.dir(nod);
    var actualSpan = nod.iterateNext ();
    //let auto = {
    //  spz: actualSpan.getElementsByTagName("SPZ")[0].innerHTML
    // }
    return actualSpan;
  }

  selectNode(ss)
  {
    console.log("selectNode : " + ss);
    // var nod = this.myData.XMLdata.selectElements("//RECS/R");
    var nod = this.XMLdata.evaluate(ss, this.XMLdata, null, XPathResult.ANY_TYPE,null); 
    console.log("ResultType = " + nod.resultType);
    console.dir(nod);
    this.items = [];
    var i = 2;
    var actualSpan = nod.iterateNext ();
    console.dir(actualSpan);
    console.log(actualSpan.getElementsByTagName("SPZ")[0].innerHTML);
    while (actualSpan) {
      this.items.push({
         spz: actualSpan.getElementsByTagName("SPZ")[0].innerHTML,
         //spz: 'PM-' + actualSpan.evaluate('SPZ', this.hermes.XMLdata, null, XPathResult.ANY_TYPE,null).value;,
         note: actualSpan.getElementsByTagName("DZ")[0].attributes['n'].value,
         // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      i++;
      actualSpan = nod.iterateNext ()
    }

  }

}
