import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PeriodicElement, TableService} from '../table/table-service';
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-edit-table',
  imports: [MatTable, MatHeaderCellDef, FormsModule, MatCellDef, MatColumnDef, MatHeaderCell, MatCell, MatInput, MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef],
  templateUrl: './edit-table.html',
  styleUrl: './edit-table.css'
})
export class EditTable {
  public store = inject(TableService);
  @Input() item!: PeriodicElement;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<PeriodicElement>();

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.item);
  }

  get displayColumns() {
    return this.store.displayedColumns()()
      .filter(col => col !== 'edit')
      .concat('actions');
  }
}
