import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbvHighComponent } from './abv-high.component';

describe('AbvHighComponent', () => {
  let component: AbvHighComponent;
  let fixture: ComponentFixture<AbvHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbvHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbvHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
