import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrakWidgetComponent } from './strak-widget.component';

describe('StrakWidgetComponent', () => {
  let component: StrakWidgetComponent;
  let fixture: ComponentFixture<StrakWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrakWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrakWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
