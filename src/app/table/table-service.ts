import {effect, Injectable, signal} from '@angular/core';
import {signalStore, withState} from '@ngrx/signals';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

export const TableStore = signalStore(
  { providedIn: 'root' },
  withState(() => {
    const elements = signal<PeriodicElement[]>(ELEMENT_DATA);
    const filterText = signal('');
    const displayedColumns = signal(['position', 'name', 'weight', 'symbol', 'edit']);
    const filteredElements = signal<PeriodicElement[]>(ELEMENT_DATA);

    effect(() => {
      const filter = filterText().toLowerCase();
      const time = setTimeout(() => {
        const filtered = elements().filter(element =>
          Object.values(element).some(value => String(value).toLowerCase().includes(filter))
        );
        filteredElements.set(filtered);
      }, 2000);
      return () => clearTimeout(time);
    });


    return {
      elements,
      filterText,
      displayedColumns,
      filteredElements,
    };
  })
);


@Injectable({ providedIn: 'root' })
export class TableService extends TableStore {}
