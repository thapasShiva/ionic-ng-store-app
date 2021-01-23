import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSingleItemPagePageRoutingModule } from './view-single-item-page-routing.module';

import { ViewSingleItemPagePage } from './view-single-item-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSingleItemPagePageRoutingModule
  ],
  declarations: [ViewSingleItemPagePage]
})
export class ViewSingleItemPagePageModule {}
