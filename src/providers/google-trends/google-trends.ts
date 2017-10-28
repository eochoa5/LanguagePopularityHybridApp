import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as googleTrends from '../../../node_modules/google-trends-api/lib/google-trends-api';

/*
  Generated class for the GoogleTrendsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleTrendsProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleTrendsProvider Provider');


  }

  getGTrendsData() {



    googleTrends.interestOverTime({
      keyword: ['C programming language', 'Java'],
      startTime: new Date(Date.now() - (31536000000)),
      geo: 'US'
    }, function (err, results) {
      if (err) console.log('oh no error!', err);
      else console.log(results);
    });



    console.log("test");

  }

}
