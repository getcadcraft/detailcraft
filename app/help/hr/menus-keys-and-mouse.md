---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara vašem načinu rada, dodijelite bilo kojoj naredbi vlastitu tipku, premjestite naredbe između kartica vrpce i postavite što rade kotačić i gumbi miša.
keywords: stil izbornika, izbornici, vrpca, alatna traka, redak naredbi, prečaci, tipke, prilagodi, preslikaj, ponovno dodijeli, miš, kotačić, obrni smjer, smjer zumiranja, srednji gumb, desni gumb, pomicanje, kruženje, izvoz, uvoz, prebacivanje, poznato, klasično crtanje, čelična vrpca
from: 4132c6e5
---

Naredbe DetailCraft-a iste su bez obzira na to kako do njih dođete. **Stil izbornika** samo određuje gdje se nalaze na zaslonu, kako se zovu i kojim tipkama se pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah vidljiva, a ovaj preglednik je pamti.

## Tri stila

| Stil | Što dobivate |
|---|---|
| {{ui:DetailCraft}} | Vlastita alatna traka DetailCraft-a (Datoteka, Postavljanje, Povezivanje, Uređivanje, Izlaz) i njegove tipke od jednog slova: {{key:V}} odabir, {{key:B}} greda, {{key:C}} stup, {{key:R}} spreg, {{key:P}} ploča, {{key:F}} temelj, {{key:S}} stubište. Početni stil. |
| {{ui:Klasično crtanje}} | Za one koji upisuju naredbe: mala vrpca ({{ui:Početak}}, {{ui:Pogled}}, {{ui:Izlaz}}) i redak naredbi. Upišite BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (poništi), ZOOM, PLAN, 3D, DRAWINGS, NC ili HELP i pritisnite {{key:Enter}}; {{key:Enter}} na prazno ponavlja zadnju naredbu, {{key:Esc}} je briše. Počnite tipkati bilo gdje i slova idu u redak naredbi. Srednji gumb pomiče prikaz; u 3D-u {{key:Shift}} i srednji gumb kruže. |
| {{ui:Čelična vrpca}} | Kartice kako ih raspoređuju programi za detaljiranje čelika: {{ui:Modeliranje}} (elementi, beton, stubišta), {{ui:Detaljiranje}} (spojevi), {{ui:Uređivanje}}, {{ui:Crteži}} (crteži i izvješća), {{ui:Izrada}} (NC datoteke, IFC) i {{ui:Pogled}}, s izbornikom {{ui:Datoteka}} i brzim gumbima desno. Tipke od jednog slova ostaju. Srednji gumb pomiče prikaz; u 3D-u lijevi gumb kruži. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} i {{key:Mod+A}}. Vrpce također sadrže {{ui:3D}}, {{ui:Tlocrt}}, {{ui:Pročelje}} i {{ui:Prilagodi}} s trake prikaza.

:::tip
Tipka koja pripada rasporedu DetailCraft-a, ali ju je vaš stil dodijelio drugoj naredbi, ne radi ništa, a redak stanja kaže gdje je naredba završila ("U Mojoj čeličnoj vrpci, Stup je Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, a dok je element napola postavljen ili kopija prati pokazivač, slova pripadaju DetailCraft-u.
:::

## Prilagodite

1. Odaberite stil koji vam je najbliži, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (pomaže okvir za pretraživanje). Kliknite {{ui:Dodaj tipku}} i pritisnite tipku, ili dvije tipke zaredom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. Uz vrpcu, {{ui:Gdje se nalazi}} premješta naredbu na drugu karticu i panel, u izbornik {{ui:Datoteka}} ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić, gumbe koji pomiču tlocrt i pročelja te što svaki gumb radi u 3D prikazu.
5. Dajte mu naziv i kliknite {{ui:Spremi}}.

Spremanje ugrađenog stila stvara vlastitu kopiju ("Moja čelična vrpca"); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama prikazana je crveno i mora se popraviti prije spremanja.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početno) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Stiskanje na trackpadu uvijek zumira u smjeru kretanja prstiju.
- **Pomicanje tlocrta i pročelja pomoću**: srednjeg gumba, desnog gumba ili oba. Uz alat {{ui:Odaberi}} lijevi gumb uvijek crta odabirni prozor.
- **Povlačenje u 3D prikazu**: {{ui:Zasebno za svaki pogled}} zadržava gumbe DetailCraft-a (lijevi kruži, srednji zumira, desni pomiče). Ili postavite svaki gumb na kruženje, pomicanje, zumiranje ili ništa; {{key:Shift}} uz gumb koji kruži ili pomiče zamijeni ta dva.

## Ponesite ga sa sobom

{{ui:Izvoz}} sprema stil u uporabi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može upućivati samo na naredbe DetailCraft-a: sve ostalo u njoj se izostavlja i broji u retku stanja. {{ui:Izbriši ovaj stil}} uklanja jedan vaš.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (vlastita alatna traka, vrpca ili {{ui:Klasično crtanje}}), uz promjene koje ste napravili u svakoj aplikaciji. DetailCraft nema stil trake izbornika: kad se za sve aplikacije odabere traka izbornika druge aplikacije, DetailCraft zadržava vlastitu alatnu traku.
:::

Povezano: [Tipkovnica i miš](topic:keyboard) · [Postavke DetailCraft](topic:settings) · [Prelazak iz drugog softvera za detaljiranje](topic:coming-from)
