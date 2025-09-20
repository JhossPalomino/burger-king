import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, Header, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
      name: 'org:description',
      content: 'Pagina sobre nosotros'
    })

    this.meta.addTag({
      property: 'og:title',
      content: 'Hamburguesas Burger King'
    })

    this.meta.addTag({
      property: 'og:description',
      content: 'En esta pagina encontraras informacion sobre nuestros'
    })

    this.meta.addTag({
      property: 'og:image',
      content: 'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/645f9f2c6766ad01e9c48e25_BLD00165%20(1)%20(2)%20(1).jpg'
    })

    this.meta.addTag({
      property: 'og:url',
      content: 'https://burger-king-example.vercel.app'
    })
  }
}
