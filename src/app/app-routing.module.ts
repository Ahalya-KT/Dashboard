import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { AccountComponent } from './account/account.component';
import { ChartComponent } from './chart/chart.component';
import { CalenderComponent } from './calender/calender.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'message',component:MessageComponent},
  {path:'account',component:AccountComponent},
  {path:'chart',component:ChartComponent},
  {path:'calender',component:CalenderComponent},
  {path:'report',component:ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
