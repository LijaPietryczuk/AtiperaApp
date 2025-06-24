import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTable } from './edit-table';

describe('EditTable', () => {
  let component: EditTable;
  let fixture: ComponentFixture<EditTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
