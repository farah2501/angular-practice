import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  user = [];

  constructor() { }
  saveState() {
    localStorage.setItem('userDetail', JSON.stringify(this.user))
  }
}
