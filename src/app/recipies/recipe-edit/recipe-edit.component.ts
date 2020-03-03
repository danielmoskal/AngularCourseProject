import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isInEditMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.isInEditMode = params.id != null;
      this.initForm();
    });
  }

  initForm() {
    let name = '';
    let imagePath = '';
    let description = '';

    if (this.isInEditMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
        name: new FormControl(name),
        imagePath: new FormControl(imagePath),
        description: new FormControl(description)
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
