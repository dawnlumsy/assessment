import { Component, OnInit } from '@angular/core';
import { AssessmentserviceService } from '../services/assessmentservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  //this property is used to get data from my service
  confirmedOrder;

  constructor(private assessmentService : AssessmentserviceService,  private router: Router){ }

  ngOnInit() {
    this.confirmedOrder = this.assessmentService.data[0];
  }

  navigateToHome(){
    this.router.navigate(['/']);
  }

}
