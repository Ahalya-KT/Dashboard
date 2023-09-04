import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { AccountComponent } from './account/account.component';
import { ChartComponent } from './chart/chart.component';
import { CalenderComponent } from './calender/calender.component';
import { ReportComponent } from './report/report.component';
import { AveragechartComponent } from './averagechart/averagechart.component';
import { CalculationComponent } from './calculation/calculation.component';
import { MapComponent } from './map/map.component';
import { RecentupdateComponent } from './recentupdate/recentupdate.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { AnalaticalComponent } from './analatical/analatical.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessageComponent,
    AccountComponent,
    ChartComponent,
    CalenderComponent,
    ReportComponent,
    AveragechartComponent,
    CalculationComponent,
    MapComponent,
    RecentupdateComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AnalaticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    HighchartsChartModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
