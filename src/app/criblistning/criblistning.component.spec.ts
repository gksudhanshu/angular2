import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriblistningComponent } from './criblistning.component';

describe('CriblistningComponent', () => {
  let component: CriblistningComponent;
  let fixture: ComponentFixture<CriblistningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriblistningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriblistningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
