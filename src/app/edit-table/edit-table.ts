import {Component, inject} from '@angular/core';
import {EditTableService} from './edit-table-service';


@Component({
  selector: 'app-edit-table',
  imports: [],
  templateUrl: './edit-table.html',
  styleUrl: './edit-table.css'
})
export class EditTable {
  private EditTableService = inject(EditTableService);
}
