import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecThree } from './sec-three';

describe('SecThree', () => {
  let component: SecThree;
  let fixture: ComponentFixture<SecThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
