import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService
{
  private ingredients: Ingredient[] = [
                new Ingredient('All purpose flour', 2),
                new Ingredient('Sugar', 2)];

  getIngredients()
  {
      return this.ingredients.slice();
  }

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[])
  {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
