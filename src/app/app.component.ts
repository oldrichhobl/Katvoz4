import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import { GlobalProvider } from "./global/global";
import { HermesProvider } from "./hermes";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Katvoz',
      url: '/Katvoz',
      icon: 'car'
    },
    {
      title: 'Settings',
      url: '/Settings',
      icon: 'hammer'
    },
    {
      title: 'About',
      url: '/About',
      icon: 'help'
    },
    {
      title: 'Detail',
      url: '/detail',
      icon: 'home'
    }


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,
    public global: GlobalProvider,
    public hermes: HermesProvider
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //test prohlizece pro jistotu;
       if (typeof (window as any).DOMParser != "undefined") {
         console.log("initializeAPP: OK DOMParser neni undefined !!!!!");
         }
      //Test pristupu k internetu ?? 

      // nacteni zapamatovanych dat , globalu, pristup na herma 
      this.storage.ready().then(() => {
        this.global.readGlobals(); //??? az po nacteni globalsu ??
        this.hermes.loadXML();     // uvnitr je i selectNode() 
        // this.hermes.loadXSL();     //  

        this.hermes.readStatus();
      });


    });
  }
}
