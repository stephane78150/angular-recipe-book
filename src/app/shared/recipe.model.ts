import { Ingredient } from "./shopping.model";

export interface Recipe {
    name: string;
    description: string;
    imagePath: string;    
    ingredients: Ingredient[];
}