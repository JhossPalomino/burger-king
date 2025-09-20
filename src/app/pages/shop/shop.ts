import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, Header, Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {

}
