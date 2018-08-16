import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../global/global";
import { HermesProvider } from '../hermes';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public global: GlobalProvider,
                public hermes: HermesProvider) {
     console.log(" constructor na list.page.ts")
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'RZ ' + hermes.items[i].spz,
        note: 'item #' + global.version,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    console.log(" ngOnInit na list.page.ts")
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
