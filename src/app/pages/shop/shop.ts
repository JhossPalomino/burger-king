import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, Header, Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Hamburguesas Burger King');
    this.meta.updateTag({ name: 'org:description', content: 'Página de Tiendas' });
    this.meta.updateTag({ property: 'og:title', content: 'Hamburguesas Burger King' });
    this.meta.updateTag({ property: 'og:description', content: 'En esta página encontrarás nuestras tiendas' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.shutterstock.com/image-photo/burger-king-night-april-10-600nw-2145268661.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://burger-king-example.vercel.app/shop' });
  }

}
