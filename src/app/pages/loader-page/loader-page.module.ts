import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPagePageRoutingModule } from './loader-page-routing.module';

import { LoaderPagePage } from './loader-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPagePageRoutingModule
  ],
  declarations: [LoaderPagePage]
})
export class LoaderPagePageModule {}
