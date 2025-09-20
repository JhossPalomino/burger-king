import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      name: 'org:description',
      content: 'Pagina de Burger King'
    })

    this.meta.addTag({
      property: 'og:title',
      content: 'Hamburguesas Burger King'
    })

    this.meta.addTag({
      property: 'og:description',
      content: 'En esta pagina encontraras nuestros productos y mas informacion sobre nosotros'
    })

    this.meta.addTag({
      property: 'og:image',
      content: 'https://wallpapers.com/images/hd/burger-king-fiery-logo-vxu6h66cdlv86kfb.jpg'
    })

    this.meta.addTag({
      property: 'og:url',
      content: 'http://localhost:4200/products'
    })
  }

}
