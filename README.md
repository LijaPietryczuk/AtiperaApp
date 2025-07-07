# Periodic table app

Aplikacja webowa stworzona w Angularze 20 z wykorzystaniem biblioteki Angular Material oraz SignalStore.

---

## Opis funkcjonalności

- Wyświetla tabelę pierwiastków z kolumnami:
  - `Number`
  - `Name`
  - `Weight`
  - `Symbol`
- Dane są symulowane lokalnie przy starcie aplikacji.
- Możliwość edycji każdego wiersza (za pomocą popupu z inputami).
- Zmiany są zapisywane po kliknięciu przycisku `Save` w popupie.
- Wiersz tabeli aktualizuje się natychmiast po zatwierdzeniu zmian.
- Filtrowanie danych za pomocą jednego pola input (działa po 2 sekundach bez wpisywania).
  - Filtruje po wszystkich polach rekordu.

---

## Dane początkowe (symulowane)

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

## Technologie

- Angular 20  
- Angular Material  
- SignalStore  
- TypeScript  
- HTML/CSS  

---

## Uruchamianie aplikacji

### Bez Dockera (lokalnie)

1. Zainstaluj zależności:

   ```bash
   npm install --legacy-peer-deps
   ```

2. Uruchom aplikację:

   ```bash
   ng serve
   ```

3. Otwórz przeglądarkę i przejdź do:

   ```
   http://localhost:4200
   ```

### Z użyciem Dockera

1. Zbuduj obraz Dockera:

   ```bash
   docker build -t atipera-app .
   ```

2. Uruchom kontener:

   ```bash
   docker run -p 4200:4200 atipera-app
   ```

3. Aplikacja będzie dostępna pod adresem:

   ```
   http://localhost:4200
   ```

---

## Uwagi

- Aplikacja nie zawiera testów jednostkowych (zgodnie z założeniem).
- Stylizacja komponentów oparta na Angular Material i własnych klasach CSS.
