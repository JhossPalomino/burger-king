import { Component, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('burger-king');
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
