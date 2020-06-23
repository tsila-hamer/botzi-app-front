import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAreaesComponent } from './volunteer-areaes.component';

describe('VolunteerAreaesComponent', () => {
  let component: VolunteerAreaesComponent;
  let fixture: ComponentFixture<VolunteerAreaesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerAreaesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerAreaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
