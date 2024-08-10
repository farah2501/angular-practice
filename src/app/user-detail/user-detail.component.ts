import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{
  title = 'User Details'; 
  States: string[] = [ "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan"];
  DefaultOption: string = this.States[0];
  userDetails: any[] = [];
  Value = this.States[0];
  userObj: any = {
    name: '',
    age: '',
    icnumber: '',
    address: '',
    postcode: '',
    city: '',
    Value1: '',
  };
  address2!: string;
  defaultGender!: string;
  gender = [
    {id: 1, value: ' Male '},
    {id: 2, value: ' Female '}
  ];
  printed: boolean = false;
  //form: any = {};
  constructor(private router: Router) {
  }

  ngOnInit() {
    let localData = localStorage.getItem('userDetails');
    if(localData != null){
      this.userDetails = JSON.parse(localData);
    }
  }

  navigateToIntern() {
    this.router.navigate(['/user/intern']);
    this.userDetails.push(this.userObj);
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
      this.userObj = {
        name: '',
        age: '',
        icnumber: '',
        address: '',
        postcode: '',
        city: '',
        Value1: ''
      };
  }
}
