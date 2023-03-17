import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecharacterComponent } from './onecharacter.component';

describe('OnecharacterComponent', () => {
  let component: OnecharacterComponent;
  let fixture: ComponentFixture<OnecharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnecharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
