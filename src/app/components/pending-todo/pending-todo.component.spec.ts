import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTodoComponent } from './pending-todo.component';

describe('PendingTodoComponent', () => {
  let component: PendingTodoComponent;
  let fixture: ComponentFixture<PendingTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
