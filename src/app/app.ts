import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Table} from './table/table';
import {Title} from './title/title';

@Component({
  selector: 'app-root',
  imports: [Table, Title],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'atiperaApp';
}
