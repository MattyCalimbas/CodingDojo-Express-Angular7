import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuHighComponent } from './ibu-high.component';

describe('IbuHighComponent', () => {
  let component: IbuHighComponent;
  let fixture: ComponentFixture<IbuHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
