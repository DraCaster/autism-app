import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenTEAComponent } from './examen-tea.component';

describe('ExamenTEAComponent', () => {
  let component: ExamenTEAComponent;
  let fixture: ComponentFixture<ExamenTEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenTEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenTEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
