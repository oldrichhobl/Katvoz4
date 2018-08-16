import { Component } from '@angular/core';
import { GlobalProvider } from "../global/global";
import { HermesProvider } from '../hermes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor( public global: GlobalProvider,
   	            public hermes: HermesProvider)
   	             {}

   openLocalSpz() {
     console.log("openLocalSpz")

   
}
}
