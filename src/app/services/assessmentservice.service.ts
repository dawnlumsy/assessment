import { Injectable } from '@angular/core';
import { ApplicationForm } from '../models/model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../models/country';
//import { CountryList } from '../models/countryList';
//import { map, flatMap, toArray } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AssessmentserviceService {

  data : ApplicationForm [] =[];
  cor_url='https://cors-anywhere.herokuapp.com/';
  api_url='http://ec2-13-229-233-153.ap-southeast-1.compute.amazonaws.com:3000/countries';

  constructor(private httpClient: HttpClient) { }
  //HTTP Call
  getCountry(): Promise<Country[]>{
    //console.info("getCountry trying to call API");

    return (
      this.httpClient.get<Country[]>(this.cor_url+this.api_url)
        /*.pipe(
          map(v => v['data']['results']),
          flatMap(v => v),
          map((v: any) => {
            return (<CountryList>{name: v.name})
          }),
          toArray()
        )*/
      .toPromise()
    );
  }

 
  //run this code to push application form details into this service
  addToData(result){
    this.data.push(result);
  }
}
