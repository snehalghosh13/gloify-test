import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesWrapperComponent } from './heroes-wrapper.component';

describe('HeroesWrapperComponent', () => {
  let component: HeroesWrapperComponent;
  let fixture: ComponentFixture<HeroesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
