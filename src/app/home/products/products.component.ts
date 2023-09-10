import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Produc } from './product/model/product';
import { Category } from './product/model/product.category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

  itens: Produc[] = [];
  categoryes: Category[] = [];

  constructor(private http : HttpClient){}
 
  async ngAfterViewInit() {
    await this.initData();
  }

  async initData(){
    //** On Dev Mode
    // this.http.get<Produc[]>("assets/products.json").subscribe(r => this.itens = r);
    // this.http.get<Produc[]>("assets/categoryProducts.json").subscribe(r => this.categoryes = r);
    //*******************************************************************************************/

    //** On Prod Mode
    await this.http.get<Produc[]>("assets/categoryProducts.json").subscribe(r => this.categoryes = r);
    await this.http.get<Produc[]>("http://localhost:8080/products/").subscribe(r => this.itens = r);
    //*******************************************************************************************/
  }

}
