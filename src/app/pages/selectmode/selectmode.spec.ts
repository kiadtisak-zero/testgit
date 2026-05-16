import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectmode } from './selectmode';

describe('Selectmode', () => {
  let component: Selectmode;
  let fixture: ComponentFixture<Selectmode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectmode],
    }).compileComponents();

    fixture = TestBed.createComponent(Selectmode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
