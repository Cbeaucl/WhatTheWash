import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceStatusComponent } from './appliance-status.component';

describe('ApplianceStatusComponent', () => {
  let component: ApplianceStatusComponent;
  let fixture: ComponentFixture<ApplianceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplianceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
