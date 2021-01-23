import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewallCategoriesPagePageRoutingModule } from './viewall-categories-page-routing.module';

import { ViewallCategoriesPagePage } from './viewall-categories-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewallCategoriesPagePageRoutingModule
  ],
  declarations: [ViewallCategoriesPagePage]
})
export class ViewallCategoriesPagePageModule {}
