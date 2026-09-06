import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hub } from './hub';

describe('Hub', () => {
  let component: Hub;
  let fixture: ComponentFixture<Hub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hub],
    }).compileComponents();

    fixture = TestBed.createComponent(Hub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
