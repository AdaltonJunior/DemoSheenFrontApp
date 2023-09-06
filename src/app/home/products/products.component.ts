import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produc } from './product/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  itens: Produc[] = [];

  constructor(private http : HttpClient){}
  ngOnInit() {
    this.http.get<Produc[]>("assets/products.json").subscribe(r => this.itens = r);
  }

}
