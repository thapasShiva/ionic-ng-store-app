import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  storageKey: string = "categories";
  categories = [
    {
      title: "On Sale",
      no_of_items: 20,
    },
    {
      title: "Chairs",
      no_of_items: 46,
    },
    {
      title: "Couch",
      no_of_items: 32,
    },
    {
      title: "Drawer",
      no_of_items: 18,
    },
    {
      title: "Lighting",
      no_of_items: 57,
    },
    {
      title: "Sofa", 
      no_of_items: 68,
    },
  ];
  constructor() {}

  setCategories = () => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.categories));
  };

  getCategories = () => {
    return JSON.parse(localStorage.getItem(this.storageKey));
  };
}
