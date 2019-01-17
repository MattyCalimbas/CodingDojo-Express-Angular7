import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuMediumComponent } from './ibu-medium.component';

describe('IbuMediumComponent', () => {
  let component: IbuMediumComponent;
  let fixture: ComponentFixture<IbuMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
