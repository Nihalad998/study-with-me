import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBannerComponent } from './quote-banner.component';

describe('QuoteBannerComponent', () => {
  let component: QuoteBannerComponent;
  let fixture: ComponentFixture<QuoteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
