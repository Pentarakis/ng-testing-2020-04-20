import { TestBed } from '@angular/core/testing';

import { WarnForUnsavedCharacterService } from './warn-for-unsaved-character.service';

describe('WarnForUnsavedCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarnForUnsavedCharacterService = TestBed.get(WarnForUnsavedCharacterService);
    expect(service).toBeTruthy();
  });
});
