import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public order: any = [];
  constructor() { }

  ngOnInit() {
    this.order = [
      {
        "orderNumber" : 3213498061,
        "orderDate" : "11:36 AM 10 May 2017",
        "amount" : 16889,
        "status" : "Delivered",
        "orderName" : "OPPO F1S 64 GB(Grey)",
        "img" : "https://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg"
      },
      {
        "orderNumber" : 1000498061,
        "orderDate" : "12:34 AM 26 Sep 2018",
        "amount" : 17000,
        "status" : "Delivered",
        "orderName" : "adidas Yeezy Wave Runner 700 Solid Grey",
        "img" : "https://stockx-360.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img07.jpg?auto=format,compress&w=1117&q=90"
      }
    ];
  }

}
