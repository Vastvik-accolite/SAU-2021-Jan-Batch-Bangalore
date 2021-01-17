import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

const routes: Routes = [
  { path: "api", component: FetchDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


