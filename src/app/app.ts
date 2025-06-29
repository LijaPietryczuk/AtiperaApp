import { Component } from '@angular/core';
import {Table} from './table/table';
import {Title} from './title/title';
import {PeriodicElement} from './table/table-service';
import {EditTable} from './edit-table/edit-table';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Table, Title, EditTable, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isEditing = false;
  selectedItem: PeriodicElement | null = null;

  startEdit(item: PeriodicElement) {
    console.log("edytuje")
    this.selectedItem = item;
    this.isEditing = true;
  }

  cancelEdit() {

    this.isEditing = false;
    this.selectedItem = null;
  }

  saveEdit($event: PeriodicElement) {
    console.log("zapisuje");
    this.cancelEdit();
  }

}
