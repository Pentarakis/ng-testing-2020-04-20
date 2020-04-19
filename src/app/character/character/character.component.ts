import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/internal/operators/first';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { filter, pluck, takeUntil } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  isCreateMode = true;
  // @ts-ignore
  form: FormGroup;
  destroy: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService, private fb: FormBuilder
  ) {

    this.initForm();

    this.route.params
      .pipe(
        pluck('id'),
        filter(id => id !== 'create'),
        switchMap((id: number) => this.characterService.read(Number(id))),
        takeUntil(this.destroy)
      )
      .subscribe(
        (character: Character) => {
          this.isCreateMode = false;
          this.form.patchValue(character);
        }
      );
  }

  ngOnInit() {
  }

  save(): void {
    let savedCharacter$: Observable<Character>;

    if (this.isCreateMode) {
      savedCharacter$ = this.characterService.create(this.form.getRawValue());
    } else {
      savedCharacter$ = this.characterService.update(this.form.getRawValue());
    }

    savedCharacter$
      .pipe(
        filter(data => data !== null),
        takeUntil(this.destroy)
      )
      .subscribe(
        (character: Character) => {
          this.form.reset();
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
          if (character) {
            alert('Success! ID: ' + character.id);
          } else {
            alert('Success!');
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: null,
      name: [null, Validators.required],
      culture: null
    });
  }

}
