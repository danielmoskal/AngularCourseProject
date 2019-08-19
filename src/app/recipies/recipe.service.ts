import { Recipe } from './recipe.model';

export class RecipeService {
  private recipies: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test 2',
      'https://cdn.pixabay.com/photo/2018/09/14/11/13/food-3676808_960_720.jpg'
    )
  ];

  getRecipes() {
    return this.recipies.slice();
  }
}
