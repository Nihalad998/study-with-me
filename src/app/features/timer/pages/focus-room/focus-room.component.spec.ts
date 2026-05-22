import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusRoomComponent } from './focus-room.component';

describe('FocusRoomComponent', () => {
  let component: FocusRoomComponent;
  let fixture: ComponentFixture<FocusRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
