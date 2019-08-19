import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}

  onRecipeElementSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
