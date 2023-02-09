import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferIbComponent } from './transfer-ib.component';

describe('TransferIbComponent', () => {
  let component: TransferIbComponent;
  let fixture: ComponentFixture<TransferIbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferIbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferIbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
