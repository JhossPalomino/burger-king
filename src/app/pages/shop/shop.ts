import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, Header, Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      name: 'org:description',
      content: 'Pagina de Tiendas'
    })

    this.meta.addTag({
      property: 'og:title',
      content: 'Hamburguesas Burger King'
    })

    this.meta.addTag({
      property: 'og:description',
      content: 'En esta pagina encontraras nuestras tiendas'
    })

    this.meta.addTag({
      property: 'og:image',
      content: 'https://wallpapers.com/images/hd/burger-king-fiery-logo-vxu6h66cdlv86kfb.jpg'
    })

    this.meta.addTag({
      property: 'og:url',
      content: 'https://burger-king-example.vercel.app'
    })
  }
}
