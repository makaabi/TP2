import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatViewComponent } from './candidat-view.component';

describe('CandidatViewComponent', () => {
  let component: CandidatViewComponent;
  let fixture: ComponentFixture<CandidatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
