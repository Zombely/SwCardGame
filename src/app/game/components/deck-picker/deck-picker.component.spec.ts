import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckPickerComponent } from './deck-picker.component';

describe('DeckPickerComponent', () => {
  let component: DeckPickerComponent;
  let fixture: ComponentFixture<DeckPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeckPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
