import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { WarnForUnsavedCharacterService } from './warn-for-unsaved-character.service';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: ':id', component: CharacterComponent, canDeactivate: [WarnForUnsavedCharacterService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
