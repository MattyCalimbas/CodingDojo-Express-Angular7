import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbvMediumComponent } from './abv-medium.component';

describe('AbvMediumComponent', () => {
  let component: AbvMediumComponent;
  let fixture: ComponentFixture<AbvMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbvMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbvMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
