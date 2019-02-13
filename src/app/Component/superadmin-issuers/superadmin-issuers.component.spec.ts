import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminIssuersComponent } from './superadmin-issuers.component';

describe('SuperadminIssuersComponent', () => {
  let component: SuperadminIssuersComponent;
  let fixture: ComponentFixture<SuperadminIssuersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminIssuersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminIssuersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
