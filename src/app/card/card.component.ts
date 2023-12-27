import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  name: string = 'Pikachu';
  number: string = '0025';
  attributesTypes: string[] = ['Eletric', 'Fire'];
  imageUrl: string =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png';

  ngOnInit(): void {}
}
