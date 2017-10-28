import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleTrendsProvider } from '../../providers/google-trends/google-trends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public gTrendsProvider: GoogleTrendsProvider) {

  }

  ionViewWillEnter(){

    this.gTrendsProvider.getGTrendsData();

    console.log("lol7");

  }

}
