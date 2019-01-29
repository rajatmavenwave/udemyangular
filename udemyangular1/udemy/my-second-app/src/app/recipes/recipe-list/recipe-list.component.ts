import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is Simply a test','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg'),
    new Recipe('Another Test Recipe','This is Simply a test','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe)
{
this.recipeWasSelected.emit(recipe);
}
}
