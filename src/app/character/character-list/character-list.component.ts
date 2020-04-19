import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../book/model/book';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Observable<Character[]>;

  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor(
    private characterService: CharacterService) {

    this.characters = this.characterService.readAll();
  }

  ngOnInit() {
  }
}
