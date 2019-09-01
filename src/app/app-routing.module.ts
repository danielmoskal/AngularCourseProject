import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipies', component: RecipiesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}