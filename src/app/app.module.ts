import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteruserComponent } from './registeruser/registeruser.component';
//import { from } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    AboutusComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:RegisteruserComponent},
      {path: 'main', component:MainComponent},
      {path: 'aboutus', component:AboutusComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  providers: [NewsApiService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
