# Periodic Table App

A web application built with Angular 20 using Angular Material and SignalStore.

---

## Features

- Displays a periodic table with the following columns:
  - `Number`
  - `Name`
  - `Weight`
  - `Symbol`
- Data is simulated locally on app startup.
- Allows editing of each row via a popup with input fields.
- Changes are saved after clicking the `Save` button in the popup.
- The table row updates immediately after saving.
- Includes a single input field for filtering data (triggers 2 seconds after the user stops typing).
  - Filters across all fields of the record.

---

## Sample Data (Simulated)

```ts
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

```

---

## Technologies

- Angular 20
- Angular Material
- SignalStore
- TypeScript
- HTML/CSS

---

## Running the Application

### Without Docker (Locally)

1. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the application:

   ```bash
   ng serve
   ```

3. Open your browser and navigate to:

   ```
   http://localhost:4200
   ```

### Using Docker

1. Build the Docker image:

   ```bash
   docker build -t atipera-app .
   ```

2. Run the container:

   ```bash
   docker run -p 4200:4200 atipera-app
   ```

3. The application will be available at:

   ```
   http://localhost:4200
   ```

---

## Notes

- The application does not include unit tests (as per the original specification).
- Component styling is based on Angular Material and custom CSS classes.
