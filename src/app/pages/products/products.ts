import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [ CommonModule, Header, Footer ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Hamburguesas Burger King');
    this.meta.updateTag({ name: 'org:description', content: 'Página de Productos' });
    this.meta.updateTag({ property: 'og:title', content: 'Hamburguesas Burger King' });
    this.meta.updateTag({ property: 'og:description', content: 'En esta pagina encontraras nuestros productos' });
    this.meta.updateTag({ property: 'og:image', content: 'https://wallpapers.com/images/hd/burger-king-whopper-stack-n5re7fuahc7y7wht.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://burger-king-example.vercel.app/products' });
  }
}
