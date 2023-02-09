import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementIbComponent } from './statement-ib.component';

describe('StatementIbComponent', () => {
  let component: StatementIbComponent;
  let fixture: ComponentFixture<StatementIbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementIbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementIbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
