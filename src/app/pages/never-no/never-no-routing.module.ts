import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeverNoPage } from './never-no.page';

const routes: Routes = [
  {
    path: '',
    component: NeverNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeverNoPageRoutingModule {}
