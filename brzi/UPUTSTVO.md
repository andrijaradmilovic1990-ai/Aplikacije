# Brzi unos — uputstvo

**Šta je:** jedan ekran: iznos, kategorija, opis → upis troška u Budžet bazu. Bez otvaranja Budžeta.

**Adresa za telefon:** https://brzi-app.andrija-radmilovic1990.workers.dev (worker `brzi-app` prenosi `/Aplikacije/brzi/` sa Pages).

**Fajlovi:** `index.html` (cela aplikacija), `manifest.json` (id/scope/start_url `/Aplikacije/brzi/`), `sw.js`.

**Baza:** piše samo `budzet/<godina>/<mesec>/transactions/<ts>` = `{amount, cat, desc, ts}`; mesec je kao u Budžetu (januar = 0). Ništa ne čita i ne briše. Budžet taj red vidi kao svaki drugi trošak.

**Popravka / dogradnja:** izmena u `index.html` → izgled se proveri lokalno (`python3 -m http.server` iz korena repoa, `http://localhost:8000/brzi/`) → push na `main` → za par minuta je na telefonu (posle osvežavanja). Pažnja: Brzi unos nema probnu bazu — svaki upis posle prijave ide u pravi Budžet; probni trošak posle obrisati u Budžetu. Kategorije moraju ostati iste kao u Budžetu, inače Budžet ne zna gde da ih svrsta.

**Istorija:** napravljen u repou Budzet (2026), preseljen ovde 09.10.2026 da bi bio zasebna aplikacija na telefonu.
