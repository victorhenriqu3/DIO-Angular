import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonData } from '../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  pokemon?: PokemonData;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('bulbasaur').subscribe({
      next: (res) => {
        //console.log(res);
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
    });
  }
}
