import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateauxComponent } from './bateaux.component';

describe('BateauxComponent', () => {
  let component: BateauxComponent;
  let fixture: ComponentFixture<BateauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BateauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BateauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
