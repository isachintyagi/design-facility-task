import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Error404Component } from "./component/error404.component";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "",
    component: Error404Component,
  },
];

@NgModule({
  declarations: [Error404Component],

  imports: [CommonModule, [RouterModule.forChild(routes)]],
})
export class Error404Module {}
