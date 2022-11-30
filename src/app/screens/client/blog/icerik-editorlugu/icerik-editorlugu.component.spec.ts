import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcerikEditorluguComponent } from './icerik-editorlugu.component';

describe('IcerikEditorluguComponent', () => {
  let component: IcerikEditorluguComponent;
  let fixture: ComponentFixture<IcerikEditorluguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcerikEditorluguComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcerikEditorluguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
