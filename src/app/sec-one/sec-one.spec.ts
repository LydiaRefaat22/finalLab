import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecOne } from './sec-one';

describe('SecOne', () => {
  let component: SecOne;
  let fixture: ComponentFixture<SecOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
