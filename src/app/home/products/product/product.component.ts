import { Component, Input } from '@angular/core';
import { Produc } from './model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  
  @Input() product: Produc = {};

  openProducDetais(product : Produc){
    console.log('Call Product: ' + product.id);
  }

}
