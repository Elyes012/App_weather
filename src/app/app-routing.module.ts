import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MydashComponent } from './mydash/mydash.component';
import { TestdashComponent } from './testdash/testdash.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { AuthsGuard } from './core/auths.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mydash', component: MydashComponent },
  { path: 'testdash', component: TestdashComponent},
  { path: 'login', component: LoginComponent },
  { path: 'log', component: LogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
