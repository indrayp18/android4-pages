import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../firstpage/firstpage.module#FirstpagePageModule'
      },
      {
        path: 'second',
        loadChildren: '../secondpage/secondpage.module#SecondpagePageModule'
      },
      {
        path: 'third',
        loadChildren: '../thirdpage/thirdpage.module#ThirdpagePageModule'
      },
      {
        path: 'fourth',
        loadChildren: '../fourthpage/fourthpage.module#FourthpagePageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/first'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
