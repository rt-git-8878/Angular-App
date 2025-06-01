import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInterpolationComponent } from './card-interpolation.component';

describe('CardInterpolationComponent', () => {
  let component: CardInterpolationComponent;
  let fixture: ComponentFixture<CardInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
