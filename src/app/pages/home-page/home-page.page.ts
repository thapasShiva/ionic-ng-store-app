import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CategoriesService} from  '../../services/mockdata/categories.service'
import {TrendingItemsService} from  '../../services/mockdata/trending-items.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  categoryList : any[] =[]
  trendingList : any[] =[]

  constructor(
    private router: Router,
    private CategoriesService : CategoriesService,
    private TrendingItemsService : TrendingItemsService,
  ) { }

  ngOnInit() {

    this.categoryList = this.CategoriesService.getCategories()
    this.trendingList = this.TrendingItemsService.getTrendingItems()

    console.log(this.categoryList)
    console.log(this.trendingList)

  }

  
  gotoPage() {
    console.log("go to page")
    this.router.navigate(['/view-single-item-page'])
  }

}
