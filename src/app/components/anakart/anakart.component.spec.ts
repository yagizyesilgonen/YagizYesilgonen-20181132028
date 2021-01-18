import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakartComponent } from './anakart.component';

describe('AnakartComponent', () => {
  let component: AnakartComponent;
  let fixture: ComponentFixture<AnakartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
