import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolCampaignsListComponent } from './vol-campaigns-list.component';

describe('VolCampaignsListComponent', () => {
  let component: VolCampaignsListComponent;
  let fixture: ComponentFixture<VolCampaignsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolCampaignsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolCampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
