import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [];
  result: Hero | undefined;

  constructor(private backend: BackendService) { }

  async ngOnInit(): Promise<void> {
    // Gets a list of heroes to display
    this.heroes = await this.backend.getHeroes();
  }

  selectHero(heroID: string) {
    this.result = this.heroes.find(hero => {
      return hero.id === heroID;
    })
  }

}
