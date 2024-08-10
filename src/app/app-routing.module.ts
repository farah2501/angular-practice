import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InternDetailComponent } from './intern-detail/intern-detail.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: '', redirectTo: '/nav-bar', pathMatch: 'full'},
  {path: 'user', component: UserDetailComponent},
  {path: 'user/intern', component: InternDetailComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
