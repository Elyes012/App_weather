import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthsGuard } from './core/auths.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoryComponent } from './history/history.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashbord', component: DashbordComponent, canActivate : [AuthsGuard] },
  { path: 'history', component: HistoryComponent, canActivate : [AuthsGuard] },
  { path: 'animation', component: AnimationComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
