import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieImgBateauComponent } from './galerie-img-bateau.component';

describe('GalerieImgBateauComponent', () => {
  let component: GalerieImgBateauComponent;
  let fixture: ComponentFixture<GalerieImgBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieImgBateauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieImgBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
