import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "question",
  },
  {
    path: "question",
    loadChildren: () =>
      import("../app/question/question.module").then((m) => m.QuestionModule),
  },
  {
    path: "**",
    loadChildren: () => import("../app/error404/error404.module").then((m) => m.Error404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
