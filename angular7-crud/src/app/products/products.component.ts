import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  _id: string;
  prod_name: string;
  prod_desc: string;
  prod_price: number;
  updated_at: Date;
  
  displayedColumns: string[] = ['_id', 'prod_name', 'prod_price'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {   
  }

  ngOnInit() {
    this.api.getProducts()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
