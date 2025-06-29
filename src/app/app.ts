import { Component } from '@angular/core';
import { Table } from './table/table';
import { Title } from './title/title';
import { PeriodicElement } from './table/table-service';
import { MatDialog } from '@angular/material/dialog';
import { EditTable } from './edit-table/edit-table';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Table, Title, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDialogOpen = false;

  constructor(private dialog: MatDialog) {}

  startEdit(item: PeriodicElement) {
    this.isDialogOpen = true;

    this.dialog.open(EditTable, {
      data: item,
      panelClass: 'full-screen-dialog'
    }).afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      if (result) {
        this.saveEdit(result);
      } else {
        this.cancelEdit();
      }
    });
  }

  saveEdit(updated: PeriodicElement) {
    console.log('Zapisano:', updated);
  }

  cancelEdit() {
    console.log('Anulowano edycję');
  }
}
