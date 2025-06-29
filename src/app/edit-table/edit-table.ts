import {Component, inject, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PeriodicElement, TableService } from '../table/table-service';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './edit-table.html',
  styleUrl: './edit-table.css'
})

export class EditTable {
  public position: number;
  public name: string;
  public weight: number;
  public symbol: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: PeriodicElement,
    private dialogRef: MatDialogRef<EditTable>
  ) {
    this.position = item.position;
    this.name = item.name;
    this.weight = item.weight;
    this.symbol = item.symbol;
  }

  public store = inject(TableService);

  get displayColumns() {
    return this.store.displayedColumns()().filter(col => col !== 'edit').concat('actions');
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onSave() {
    this.item.position = this.position;
    this.item.name = this.name;
    this.item.weight = this.weight;
    this.item.symbol = this.symbol;
    this.dialogRef.close(this.item);
  }
}

