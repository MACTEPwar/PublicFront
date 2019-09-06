import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTouchComponent } from './sales-touch.component';

describe('SalesTouchComponent', () => {
  let component: SalesTouchComponent;
  let fixture: ComponentFixture<SalesTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
