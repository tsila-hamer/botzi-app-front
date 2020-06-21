import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMatchComponent } from './available-match.component';

describe('AvailableMatchComponent', () => {
  let component: AvailableMatchComponent;
  let fixture: ComponentFixture<AvailableMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
