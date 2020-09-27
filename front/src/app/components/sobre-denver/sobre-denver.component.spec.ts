import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDenverComponent } from './sobre-denver.component';

describe('SobreDenverComponent', () => {
  let component: SobreDenverComponent;
  let fixture: ComponentFixture<SobreDenverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreDenverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreDenverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
