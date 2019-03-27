import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSaleComponent } from './completed-sale.component';

describe('CompletedSaleComponent', () => {
  let component: CompletedSaleComponent;
  let fixture: ComponentFixture<CompletedSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
