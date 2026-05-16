import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectgame } from './selectgame';

describe('Selectgame', () => {
  let component: Selectgame;
  let fixture: ComponentFixture<Selectgame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectgame],
    }).compileComponents();

    fixture = TestBed.createComponent(Selectgame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
