import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PagesComponent } from './components/pages/pages.component';
import { HttpModule } from '@angular/http';
import { PagesService } from './services/pages.service';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AddComponent } from './components/pages/add/add.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { PageFiltersPipe } from './pipes/page-filters.pipe';

const appRoutes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'pages/view', component: PagesComponent },
  { path: 'pages/add', component: AddComponent },
  { path: 'pages/:id', component: EditComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    PagesComponent,
    AnalyticsComponent,
    AddComponent,
    EditComponent,
    PageFiltersPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
