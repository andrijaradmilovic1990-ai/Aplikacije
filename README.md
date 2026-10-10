# Aplikacije

Male aplikacije za telefon. **Svaka aplikacija = svoj folder** sa svojim `UPUTSTVO.md` (šta je, gde radi, kako se popravlja i dograđuje, testovi).

| folder | aplikacija | adresa za telefon | uputstvo |
|---|---|---|---|
| `skola/` | Škola — samoobrazovanje (70 lekcija, ponavljanje) | https://skola-app.andrija-radmilovic1990.workers.dev | `skola/UPUTSTVO.md` |
| `brzi/` | Brzi unos — trošak u Budžet jednim potezom | https://brzi-app.andrija-radmilovic1990.workers.dev | `brzi/UPUTSTVO.md` |
| `pisanje/` | Pisalnica — pisanje priča | https://andrijaradmilovic1990-ai.github.io/Aplikacije/pisanje/ (ostaje na github.io — tekstovi su u telefonu, vezani za tu adresu) | `pisanje/UPUTSTVO.md` |

Budžet nije ovde — ima svoj repo **Budzet**.

## Kako radi

- Fajlovi se objavljuju preko GitHub Pages (`https://andrijaradmilovic1990-ai.github.io/Aplikacije/<folder>/`). Telefon ih otvara na **svojoj** adresi: Cloudflare worker (`skola-app`, `brzi-app`) samo prenosi fajlove sa Pages. Razlog: telefon ne pušta dve instalirane aplikacije sa iste adrese. Na github.io stranica sama preusmerava na svoju adresu (osim sa `?proba`).
- Podaci: ista Firebase baza i ista Google prijava kao Budžet (`budzet-f3992`). Nova adresa mora u Firebase → Authentication → Authorized domains.
- Menja se SAMO ovde, u repou; worker se ne dira.

## Nova aplikacija

1. Nov folder `<ime>/` sa `index.html`, `manifest.json` (`id`, `scope`, `start_url` = `/Aplikacije/<ime>/`), `sw.js`, `UPUTSTVO.md`.
2. Nov worker `<ime>-app` (isti kao `skola-app`, druga putanja) i njegova adresa u Firebase Authorized domains.
3. Red u tabelu iznad.
