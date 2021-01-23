import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewallCategoriesPagePage } from './viewall-categories-page.page';

const routes: Routes = [
  {
    path: '',
    component: ViewallCategoriesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewallCategoriesPagePageRoutingModule {}
