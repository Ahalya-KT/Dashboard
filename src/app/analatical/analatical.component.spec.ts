import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalaticalComponent } from './analatical.component';

describe('AnalaticalComponent', () => {
  let component: AnalaticalComponent;
  let fixture: ComponentFixture<AnalaticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalaticalComponent]
    });
    fixture = TestBed.createComponent(AnalaticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
