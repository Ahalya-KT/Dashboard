import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentupdateComponent } from './recentupdate.component';

describe('RecentupdateComponent', () => {
  let component: RecentupdateComponent;
  let fixture: ComponentFixture<RecentupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentupdateComponent]
    });
    fixture = TestBed.createComponent(RecentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
