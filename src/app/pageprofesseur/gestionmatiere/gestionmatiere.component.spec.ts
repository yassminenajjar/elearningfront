import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmatiereComponent } from './gestionmatiere.component';

describe('GestionmatiereComponent', () => {
  let component: GestionmatiereComponent;
  let fixture: ComponentFixture<GestionmatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionmatiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionmatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
