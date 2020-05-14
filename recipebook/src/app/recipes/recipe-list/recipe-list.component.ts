import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "strange bun", 
      "this is a test", 
      "https://c.pxhere.com/photos/0f/c5/mushroom_cuttlefish_fungus_fungal_species_clathrus_archeri_anthurus_archeri_gitterling_clathrus_red-829701.jpg!d"
    ),
    new Recipe(
      "strange bun", 
      "this is a test", 
      "https://c.pxhere.com/photos/0f/c5/mushroom_cuttlefish_fungus_fungal_species_clathrus_archeri_anthurus_archeri_gitterling_clathrus_red-829701.jpg!d"
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
