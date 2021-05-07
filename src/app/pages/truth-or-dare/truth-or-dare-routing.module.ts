import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruthOrDarePage } from './truth-or-dare.page';

const routes: Routes = [
  {
    path: '',
    component: TruthOrDarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruthOrDarePageRoutingModule {}
