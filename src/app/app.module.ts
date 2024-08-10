import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InternDetailComponent } from './intern-detail/intern-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OnlyAlphabetsDirective } from './shared/only-alphabets.directive';
import { OnlyNumbersDirective } from './shared/only-numbers.directive';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  imports: [ BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  declarations: [ 
    AppComponent, 
    UserDetailComponent, 
    InternDetailComponent, 
    NavBarComponent, 
    OnlyAlphabetsDirective, 
    OnlyNumbersDirective, 
    CalculatorComponent,
    CalculatorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
