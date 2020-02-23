import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm', { static: true }) shoppingForm: NgForm;

  editMode = false;
  editingIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.editingIngredient.subscribe((index: number) => {
      this.editMode = true;
      this.editingIndex = index;
      this.editingItem = this.shoppingListService.getIngredient(index);
      this.shoppingForm.setValue({
        name: this.editingItem.name,
        amount: this.editingItem.amount
      });
    });
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editingIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.clearShoppingForm();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editingIndex);
    this.clearShoppingForm();
  }

  clearShoppingForm() {
    this.shoppingForm.reset();
    this.editMode = false;
  }
}
