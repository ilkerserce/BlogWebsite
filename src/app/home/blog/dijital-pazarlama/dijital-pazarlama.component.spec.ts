import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijitalPazarlamaComponent } from './dijital-pazarlama.component';

describe('DijitalPazarlamaComponent', () => {
  let component: DijitalPazarlamaComponent;
  let fixture: ComponentFixture<DijitalPazarlamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DijitalPazarlamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DijitalPazarlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
