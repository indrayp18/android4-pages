import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'firstpage', loadChildren: './pages/firstpage/firstpage.module#FirstpagePageModule' },
  { path: 'secondpage', loadChildren: './pages/secondpage/secondpage.module#SecondpagePageModule' },
  { path: 'thirdpage', loadChildren: './pages/thirdpage/thirdpage.module#ThirdpagePageModule' },
  { path: 'fourthpage', loadChildren: './pages/fourthpage/fourthpage.module#FourthpagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
