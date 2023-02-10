import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
