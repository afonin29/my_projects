import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaiComponent } from './mai/mai.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path: "", component: MaiComponent},
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
