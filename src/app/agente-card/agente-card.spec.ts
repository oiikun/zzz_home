import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteCard } from './agente-card';

describe('AgenteCard', () => {
  let component: AgenteCard;
  let fixture: ComponentFixture<AgenteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenteCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AgenteCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
