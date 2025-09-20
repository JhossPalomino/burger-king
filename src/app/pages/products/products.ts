import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-products',
  imports: [ CommonModule, Header, Footer ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

}
