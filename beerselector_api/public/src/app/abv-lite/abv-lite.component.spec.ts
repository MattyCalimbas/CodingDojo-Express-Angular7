import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbvLiteComponent } from './abv-lite.component';

describe('AbvLiteComponent', () => {
  let component: AbvLiteComponent;
  let fixture: ComponentFixture<AbvLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbvLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbvLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
