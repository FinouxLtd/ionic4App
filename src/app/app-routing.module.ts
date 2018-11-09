import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule',  canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'detail', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'forgotPassword', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'resetPassword', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'profileDashboard', loadChildren: './pages/profile-dashboard/profile-dashboard.module#ProfileDashboardPageModule' },
  { path: 'aboutUs', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
