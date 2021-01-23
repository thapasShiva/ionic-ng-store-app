import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CategoriesService} from  '../../services/mockdata/categories.service'
import {TrendingItemsService} from  '../../services/mockdata/trending-items.service'

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.page.html',
  styleUrls: ['./loader-page.page.scss'],
})
export class LoaderPagePage implements OnInit {

  constructor(
    private router: Router,
    private CategoriesService : CategoriesService,
    private TrendingItemsService : TrendingItemsService,
    ) { }

  ngOnInit() {
    
    //set categories
    this.CategoriesService.setCategories();
    this.TrendingItemsService.setTrendingItems();


     setTimeout(() => {
        this.gotoPage()
     }, 3500);
  }

  gotoPage() {
    console.log("go to page")
    this.router.navigate(['/home-page'])
  }

}
