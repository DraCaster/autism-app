import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNivelComponent } from './area-nivel.component';

describe('AreaNivelComponent', () => {
  let component: AreaNivelComponent;
  let fixture: ComponentFixture<AreaNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
