import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingItemsService {
  storageKey: string = "trendingItems";
  trendingItems = [
    {
      title: "Table",
      price: 7800,
      image_url:""
    },
    {
      title: "Sofa",
      price: 15000,
      image_url:""
    },
    {
      title: "Drawer",
      price: 3650,
      image_url:""
    },
    {
      title: "Chair",
      price: 1299,
      image_url:""
    },
    
     
  ];

  constructor() { }

  setTrendingItems = () => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.trendingItems));
  };

  getTrendingItems = () => {
    return JSON.parse(localStorage.getItem(this.storageKey));
  };
}
