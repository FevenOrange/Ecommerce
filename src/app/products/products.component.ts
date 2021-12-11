import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './products.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = PRODUCTS;
  newProduct = new Product();
  type: string = 'view';

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log('called');
    
  }
  onViewDetail(id: number){
    this.route.navigateByUrl('products/detail/' + id)
  }
  onAdd(){
    this.type = 'add';
  }

  addProduct(){
    this.productList.push(this.newProduct);
    this.newProduct = new Product();
    this.type = 'view';
  }
  onBack(){
    this.type = 'view';
  }
  deleteProduct(name: string){
    this.productList = this.productList.filter((product)=> { 
      return product.name != name; 
  });
  }

}
