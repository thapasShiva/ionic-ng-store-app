import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

import { CategoriesService } from "../../services/mockdata/categories.service";

@Component({
  selector: "app-viewall-categories-page",
  templateUrl: "./viewall-categories-page.page.html",
  styleUrls: ["./viewall-categories-page.page.scss"],
})
export class ViewallCategoriesPagePage implements OnInit {
  categoryList: any[] = [];

  constructor(
    private navController: NavController,
    private CategoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoryList = this.CategoriesService.getCategories();
    console.log(this.categoryList)
  }

  goBack() {
    this.navController.back();
  }
}
