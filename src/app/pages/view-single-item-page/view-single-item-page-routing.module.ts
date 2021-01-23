import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSingleItemPagePage } from './view-single-item-page.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSingleItemPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSingleItemPagePageRoutingModule {}
