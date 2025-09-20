import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, Header, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Hamburguesas Burger King');
    this.meta.updateTag({ name: 'org:description', content: 'Página Sobre Nosotros' });
    this.meta.updateTag({ property: 'og:title', content: 'Hamburguesas Burger King' });
    this.meta.updateTag({ property: 'og:description', content: 'En esta pagina encontraras informacion sobre nuestros' });
    this.meta.updateTag({ property: 'og:image', content: 'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/645f9f2c6766ad01e9c48e25_BLD00165%20(1)%20(2)%20(1).jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://burger-king-example.vercel.app/home' });
  }
}
