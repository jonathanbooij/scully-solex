import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeroComponent } from './show-hero.component';

describe('ShowHeroComponent', () => {
  let component: ShowHeroComponent;
  let fixture: ComponentFixture<ShowHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
