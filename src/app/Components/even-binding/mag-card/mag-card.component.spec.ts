import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagCardComponent } from './mag-card.component';

describe('MagCardComponent', () => {
  let component: MagCardComponent;
  let fixture: ComponentFixture<MagCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
