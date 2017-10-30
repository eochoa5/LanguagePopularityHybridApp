import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as googleTrends from '../../../node_modules/google-trends-api/lib/google-trends-api';
import 'rxjs/add/observable/fromPromise';
import {Observable} from "rxjs/Observable";
import {Storage} from '@ionic/storage';

/*
  Generated class for the GoogleTrendsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleTrendsProvider {


  constructor(public http: Http, public storage: Storage) {

  }

  getPopularityNumber(input, loc) {

     return Observable.fromPromise(googleTrends.interestOverTime({
      keyword: input,
      startTime: new Date(Date.now() - (31536000000)),
      geo: loc, category: 31
    }));

  }

    getInterestByRegion(word, loc) {

        return Observable.fromPromise(googleTrends.interestByRegion({
            keyword: word, startTime: new Date(Date.now() - (31536000000)),
            geo: loc, category: 31, resolution: 'CITY'
        }));

    }

}
