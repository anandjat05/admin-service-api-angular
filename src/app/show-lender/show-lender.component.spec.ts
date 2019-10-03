import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLenderComponent } from './show-lender.component';

describe('ShowLenderComponent', () => {
  let component: ShowLenderComponent;
  let fixture: ComponentFixture<ShowLenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
