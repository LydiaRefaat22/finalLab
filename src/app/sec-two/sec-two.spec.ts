import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecTwo } from './sec-two';

describe('SecTwo', () => {
  let component: SecTwo;
  let fixture: ComponentFixture<SecTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
