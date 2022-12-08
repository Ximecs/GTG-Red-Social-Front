import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFilComponent } from './choose-fil.component';

describe('ChooseFilComponent', () => {
  let component: ChooseFilComponent;
  let fixture: ComponentFixture<ChooseFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
