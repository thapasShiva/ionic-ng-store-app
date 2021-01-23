import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';

import {CategoryComponentComponent} from '../../components/home-page/category-component/category-component.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule
  ],
  declarations: [HomePagePage,CategoryComponentComponent]
})
export class HomePagePageModule {}
