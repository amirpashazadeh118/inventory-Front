import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGoodComponent } from './add-new-good.component';

describe('AddNewGoodComponent', () => {
  let component: AddNewGoodComponent;
  let fixture: ComponentFixture<AddNewGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewGoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
