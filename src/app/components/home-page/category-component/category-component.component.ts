import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-category-component",
  templateUrl: "./category-component.component.html",
  styleUrls: ["./category-component.component.scss"],
})
export class CategoryComponentComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
