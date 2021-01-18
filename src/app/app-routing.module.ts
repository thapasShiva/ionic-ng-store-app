import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePagePageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./pages/get-started/get-started.module').then(m => m.GetStartedPageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/get-started/get-started.module').then(m => m.GetStartedPageModule)
  },  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'registration-page',
    loadChildren: () => import('./pages/registration-page/registration-page.module').then( m => m.RegistrationPagePageModule)
  },
  {
    path: 'forgot-password-page',
    loadChildren: () => import('./pages/forgot-password-page/forgot-password-page.module').then( m => m.ForgotPasswordPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
