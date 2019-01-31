import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
 
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A Test Recipe',
        'This is Simply a test',
        'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Test Recipe',
        'This is Simply a test',
        'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
        [
            new Ingredient('buns',2),
            new Ingredient('Meat',2)

        ])
      ];

      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
         this.slService.addIngredients(ingredients);
      }
 }