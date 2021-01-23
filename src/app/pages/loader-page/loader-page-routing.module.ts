import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderPagePage } from './loader-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderPagePageRoutingModule {}
