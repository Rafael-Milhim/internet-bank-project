import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIbComponent } from './menu-ib.component';

describe('MenuIbComponent', () => {
  let component: MenuIbComponent;
  let fixture: ComponentFixture<MenuIbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
