import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produc } from '../home/products/product/model/product';

var windownAcess : any = window;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Produc = {};

  constructor(private activatedRoute: ActivatedRoute,
    private http : HttpClient) {
    windownAcess.initBannerFunctions();
    
    let idProduct = this.activatedRoute.snapshot.paramMap.get('id');
    if(idProduct != null){
      this.init(Number(idProduct));
    }
  }

  async init(id : number){
    await this.http.get<Produc>("http://localhost:8080/products/" + id).subscribe(p => this.product = p);
  }

  

}
