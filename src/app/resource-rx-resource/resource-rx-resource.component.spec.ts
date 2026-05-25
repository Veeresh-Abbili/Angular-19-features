import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceRxResourceComponent } from './resource-rx-resource.component';

describe('ResourceRxResourceComponent', () => {
  let component: ResourceRxResourceComponent;
  let fixture: ComponentFixture<ResourceRxResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceRxResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceRxResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
