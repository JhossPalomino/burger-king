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
      content: 'https://static.wikia.nocookie.net/characters/images/5/5e/Burger-king.jpg/revision/latest/scale-to-width-down/250?cb=20111026181948'
    })

    this.meta.addTag({
      property: 'og:url',
      content: 'https://burger-king-example.vercel.app'
    })
  }

}
