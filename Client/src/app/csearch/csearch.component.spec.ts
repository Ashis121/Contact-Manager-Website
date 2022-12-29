import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsearchComponent } from './csearch.component';

describe('CsearchComponent', () => {
  let component: CsearchComponent;
  let fixture: ComponentFixture<CsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
