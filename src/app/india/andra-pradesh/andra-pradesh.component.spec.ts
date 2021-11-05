import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndraPradeshComponent } from './andra-pradesh.component';

describe('AndraPradeshComponent', () => {
  let component: AndraPradeshComponent;
  let fixture: ComponentFixture<AndraPradeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndraPradeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndraPradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
