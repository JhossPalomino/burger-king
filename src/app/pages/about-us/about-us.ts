import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, Header, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {

}
