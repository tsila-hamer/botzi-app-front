import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsPerOrgComponent } from './campaigns-per-org.component';

describe('CampaignsPerOrgComponent', () => {
  let component: CampaignsPerOrgComponent;
  let fixture: ComponentFixture<CampaignsPerOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsPerOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsPerOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
