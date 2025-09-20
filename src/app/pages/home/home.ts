import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Hamburguesas Burger King');
    this.meta.updateTag({ name: 'org:description', content: 'Página Principal' });
    this.meta.updateTag({ property: 'og:title', content: 'Hamburguesas Burger King' });
    this.meta.updateTag({ property: 'og:description', content: 'En esta pagina encontraras nuestros productos y mas informacion sobre nosotros' });
    this.meta.updateTag({ property: 'og:image', content: 'https://static.wikia.nocookie.net/characters/images/5/5e/Burger-king.jpg/revision/latest/scale-to-width-down/250?cb=20111026181948' });
    this.meta.updateTag({ property: 'og:url', content: 'https://burger-king-example.vercel.app/home' });
  }
}
