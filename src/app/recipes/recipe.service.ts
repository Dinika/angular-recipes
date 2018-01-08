import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =
    [
        new Recipe('Jim Jam',
                   'Test Desc',
                   'https://i.ytimg.com/vi/1X6OAucemtE/maxresdefault.jpg',
                   [new Ingredient('biscuits', 5), new Ingredient('jam', 20)]),
        new Recipe('Cookie n Cream',
                   'Test Desc',
                   'https://i.ytimg.com/vi/1X6OAucemtE/maxresdefault.jpg',
                   [new Ingredient('cookies', 10), new Ingredient('cream', 50)]),
        new Recipe('Pani Puri',
                   'Test Desc',
                   'https://i.ytimg.com/vi/1X6OAucemtE/maxresdefault.jpg',
                   [new Ingredient('potatoes', 2), new Ingredient('puri', 5) , new Ingredient('chilli water', 1)])
    ]

    constructor(private shoppingListService: ShoppingListService){}
    getRecipes()
    {
      return this.recipes.slice();
    }

    onPutToShoppingList(ingredients: Ingredient[])
    {
        this.shoppingListService.addIngredients(ingredients);
    }
}
