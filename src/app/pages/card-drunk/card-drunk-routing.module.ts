import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDrunkPage } from './card-drunk.page';

const routes: Routes = [
  {
    path: '',
    component: CardDrunkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDrunkPageRoutingModule {}
