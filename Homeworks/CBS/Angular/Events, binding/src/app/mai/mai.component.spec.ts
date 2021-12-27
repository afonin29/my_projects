import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiComponent } from './mai.component';

describe('MaiComponent', () => {
  let component: MaiComponent;
  let fixture: ComponentFixture<MaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
