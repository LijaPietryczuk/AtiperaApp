import {Component, EventEmitter, inject, Output} from '@angular/core';
import {PeriodicElement, TableService} from './table-service';
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableModule} from '@angular/material/table';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-table',
  imports: [MatTable, MatColumnDef, MatHeaderCell, MatCell, MatHeaderRow, MatButtonModule, MatRow, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatButton, MatTableModule, MatInputModule, MatFormFieldModule, FormsModule],
  standalone: true,
  templateUrl: './table.html',
  styleUrls: ['./table.css','./.search.scss']
})

export class Table {
  public store = inject(TableService);
  searchText: string = '';

  get displayColumns() {
    return this.store.displayedColumns()();
  }

  get displayElements() {
    return this.store.filteredElements()();
  }

  get filterText() {
    return this.store.filterText();
  }

  resetSearch() {
    this.searchText = '';
    this.filterText.set('');
  }

  @Output() edit = new EventEmitter<PeriodicElement>();
  onEdit(item: PeriodicElement) {
    this.edit.emit(item);
  }
}


