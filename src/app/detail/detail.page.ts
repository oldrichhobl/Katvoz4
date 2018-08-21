import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalProvider } from "../global/global";
import { HermesProvider } from '../hermes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public autoNod: any;
  public auto: any;
 
  constructor(  private route: ActivatedRoute, 
                public global: GlobalProvider,
                public hermes: HermesProvider
  	)
    {
     console.log(" constructor na detail.page.ts ")
    }
 
  ionViewWillEnter(){
    let todoId = this.route.snapshot.queryParamMap.get('id');
    console.log(" ionViewWillEnter na detail.page.ts " + todoId);
    console.dir(this.route.snapshot);
    this.autoNod = this.hermes.getAuto(todoId);
    this.auto = 
        {
        	spz: this.autoNod.getElementsByTagName("SPZ")[0].innerHTML
        }
  }
 

  ngOnInit() {


  }

}
