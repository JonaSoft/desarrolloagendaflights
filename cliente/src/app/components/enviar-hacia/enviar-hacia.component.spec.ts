import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarHaciaComponent } from './enviar-hacia.component';

describe('EnviarHaciaComponent', () => {
  let component: EnviarHaciaComponent;
  let fixture: ComponentFixture<EnviarHaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarHaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarHaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
