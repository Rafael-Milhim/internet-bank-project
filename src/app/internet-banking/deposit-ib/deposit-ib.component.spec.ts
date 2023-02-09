import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositIbComponent } from './deposit-ib.component';

describe('DepositIbComponent', () => {
  let component: DepositIbComponent;
  let fixture: ComponentFixture<DepositIbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositIbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositIbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
