import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssessmentserviceService } from '../services/assessmentservice.service';
import { Router } from '@angular/router';
import { ApplicationForm } from '../models/model';
import { Country } from '../models/country'
import { map, flatMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  constructor(private assessmentService : AssessmentserviceService, private router : Router) { }
  
  todayDate = new Date();
  yearDate = new Date();
  countries: Country[]=[];
  countryList;
  submittedForm;


  ngOnInit() {
    this.yearDate.setFullYear(this.todayDate.getFullYear() - 18);
    this.fetchCountry();
  }

  processForm(form: NgForm){
    console.log(form.value);
    
    //creating an ApplicationForm object using data from form
    // plus transactionPrice and totalcost from this component
    this.submittedForm = new ApplicationForm (
      form.value.email,
      form.value.password,
      form.value.name,
      form.value.gender,
      form.value.dob,
      form.value.address,
      form.value.country,
      form.value.contactno
    )

    //console.info("this submitted form:", this.submittedForm);
    //add the applicationForm to my service
    this.assessmentService.addToData(this.submittedForm);

    //go to confirm page
    this.router.navigate(['/confirm']);
  }
  fetchCountry(){
    this.assessmentService.getCountry().then
      (result => {
        //console.log("API for country return result");
        //console.log(result);
        this.countries = result;
      })
      .catch(error => {
        console.log(error);
      })
  }

}
