import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirechatsComponent } from './firechats.component';

describe('FirechatsComponent', () => {
  let component: FirechatsComponent;
  let fixture: ComponentFixture<FirechatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirechatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirechatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
