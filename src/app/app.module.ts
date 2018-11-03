import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavsComponent } from './navs/navs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MydashComponent } from './mydash/mydash.component';
import {HttpModule} from '@angular/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { TestdashComponent } from './testdash/testdash.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LogComponent } from './log/log.component';
import { AuthsGuard } from './core/auths.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavsComponent,
    MydashComponent,
    TestdashComponent,
    LoginComponent,
    LogComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthService, AuthsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
