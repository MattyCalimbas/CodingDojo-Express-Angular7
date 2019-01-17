import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuMildComponent } from './ibumild.component';

describe('IbuComponent', () => {
  let component: IbuMildComponent;
  let fixture: ComponentFixture<IbuMildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuMildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuMildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
