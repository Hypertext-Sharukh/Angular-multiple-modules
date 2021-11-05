import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharloteComponent } from './charlote.component';

describe('CharloteComponent', () => {
  let component: CharloteComponent;
  let fixture: ComponentFixture<CharloteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharloteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
