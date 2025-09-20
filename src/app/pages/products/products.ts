import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [ CommonModule, Header, Footer ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      name: 'org:description',
      content: 'Pagina de Productos'
    })

    this.meta.addTag({
      property: 'og:title',
      content: 'Hamburguesas Burger King'
    })

    this.meta.addTag({
      property: 'og:description',
      content: 'En esta pagina encontraras nuestros productos'
    })

    this.meta.addTag({
      property: 'og:image',
      content: 'https://wallpapers.com/images/hd/burger-king-whopper-stack-n5re7fuahc7y7wht.jpg'
    })

    this.meta.addTag({
      property: 'og:url',
      content: 'https://burger-king-example.vercel.app/products'
    })
  }
}
