import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipies: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Tomato', 5)]
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test 2',
      'https://cdn.pixabay.com/photo/2018/09/14/11/13/food-3676808_960_720.jpg',
      [new Ingredient('Potato', 10), new Ingredient('Meat', 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipies.slice();
  }

  addRecipeIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }
}
