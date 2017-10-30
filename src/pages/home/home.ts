import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleTrendsProvider } from '../../providers/google-trends/google-trends';
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  popularity: any;
  cityPopularity:any;
  inputLangs:any;
  location:string;
  word1:string = 'java';
  word2:string = 'php';


  constructor(public navCtrl: NavController, public gTrendsProvider: GoogleTrendsProvider, public storage: Storage) {

  }

  ionViewWillEnter(){

    this.calculate();
    console.log("....");

  }

  calculate(){
    this.inputLangs = [this.word1, this.word2];

    Observable.fromPromise(this.storage.get("location")).subscribe(data1=>{

      this.location = data1;

        this.gTrendsProvider.getPopularityNumber(this.inputLangs, this.location).subscribe(data=>{

          this.popularity = JSON.parse(data.toString()).default.averages;

      });

        this.gTrendsProvider.getInterestByRegion(this.word1, this.location).subscribe(data=>{

          this.cityPopularity = JSON.parse(data.toString()).default.geoMapData;

        });


    });

  }



}
