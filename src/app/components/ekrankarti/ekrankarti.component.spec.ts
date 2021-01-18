import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkrankartiComponent } from './ekrankarti.component';

describe('EkrankartiComponent', () => {
  let component: EkrankartiComponent;
  let fixture: ComponentFixture<EkrankartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkrankartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkrankartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
