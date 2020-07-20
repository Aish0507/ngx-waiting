import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWaitingComponent } from './ngx-waiting.component';

describe('NgxWaitingComponent', () => {
  let component: NgxWaitingComponent;
  let fixture: ComponentFixture<NgxWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxWaitingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
