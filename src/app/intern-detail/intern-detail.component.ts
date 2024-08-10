import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-detail',
  templateUrl: './intern-detail.component.html'
})
export class InternDetailComponent implements OnInit {
  selectedLanguages!: string;
  Languages = [
  { name: 'C++', checked: false },
  { name: 'Java', checked: false },
  { name: 'Swift', checked: false },
  ];
  startDate!: NgbDateStruct;
  endDate!: NgbDateStruct;
  internDetails: any[] = [];
  internObj: any ={
    faculty: '',
    university: '',
    company: ''
  };
  printed: boolean = false;

  constructor(private calendar: NgbCalendar, private router: Router) {}

  ngOnInit() {
    this.getDetails();
  }
  
  initializeDates() {
    const today = this.calendar.getToday();
    this.startDate = { year: today.year, month: today.month, day: today.day };
    this.endDate = { year: today.year, month: today.month, day: today.day };
  }
  
  onSubmit(form: NgForm) {
      console.log('Form submitted!', form.value);
      this.router.navigate(['/user']);
      this.saveUserDetails(); 
      this.internObj ={
        faculty: '',
        university: '',
        company: ''
      };
    }
    
   // backToUser(){
     // this.router.navigate(['/user']);
   // }

  getDetails() {
    const localData = localStorage.getItem('internDetails');
    if(localData != null){
      this.internDetails = JSON.parse(localData);
      }
    }

  changeDetails(currentDetails: boolean) {
    let userData = this.internObj;
    if (userData != null && typeof userData != "undefined") {
      userData.IsComplete = !currentDetails;
    }
  }

  saveUserDetails() {
    this.internDetails.push(this.internObj);
    localStorage.setItem('internDetails', JSON.stringify(this.internDetails));
  }
  clearAll() {
    localStorage.clear();
  }
}
