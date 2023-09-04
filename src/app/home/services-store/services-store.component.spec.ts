import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStoreComponent } from './services-store.component';

describe('ServicesStoreComponent', () => {
  let component: ServicesStoreComponent;
  let fixture: ComponentFixture<ServicesStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesStoreComponent]
    });
    fixture = TestBed.createComponent(ServicesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
