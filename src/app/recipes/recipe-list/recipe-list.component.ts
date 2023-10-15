import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Test Recipe',
      'https://www.allrecipes.com/thmb/MkKfYU4oim55CLp39DDuNMuyThA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23600-worlds-best-lasagna-armag-4x3-1-b24f9ad518d74090bf197828492c64a6.jpg'
    ),
    new Recipe(
      'Carbonara',
      'This is a Carbonara Recipe',
      'https://www.giallozafferano.it/images/233-23307/Pane-di-semola_780x520_wm.jpg'
    ),
  ];

  constructor() {
    debugger;
  }

  ngOnInit(): void {}
}
