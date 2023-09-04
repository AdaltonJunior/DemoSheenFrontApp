import { Component } from '@angular/core';

var windownAcess : any = window;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(){
    // Faz aplicar as funções do carousel apenas quando o componente home for aberto, pois somete ai
    // teremos as tag's criadas! ** Sei que existe como fazer com angular-carousel
    windownAcess.initBannerFunctions();
  }
}
