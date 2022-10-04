import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosyalMedyaComponent } from './sosyal-medya.component';

describe('SosyalMedyaComponent', () => {
  let component: SosyalMedyaComponent;
  let fixture: ComponentFixture<SosyalMedyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosyalMedyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosyalMedyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
