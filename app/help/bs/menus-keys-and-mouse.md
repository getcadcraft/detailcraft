---
title: Meniji, tipke i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dodijelite bilo kojoj komandi svoju tipku, premjestite komande između kartica trake i podesite šta točkić i dugmad miša rade.
keywords: stil menija, meniji, traka, traka alata, komandna linija, prečice, brze tipke, tipke, prilagodi, ponovo dodijeli, miš, točkić, invertuj, smjer zumiranja, srednje dugme, desno dugme, pomjeranje pogleda, orbita, izvoz, uvoz, prebacivanje, poznato, klasični nacrt, čelična traka
from: 4132c6e5
---

Komande DetailCraft-a su iste bez obzira kojim putem im se pristupa. **Stil menija** samo određuje gdje se nalaze na ekranu, kako se tamo zovu i kojim tipkama se pokreću. Izaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobijate |
|---|---|
| {{ui:DetailCraft}} | Sopstvena traka alata DetailCraft-a (Datoteka, Postavljanje, Povezivanje, Uređivanje, Izlaz) i njegove tipke od jednog slova: {{key:V}} odaberi, {{key:B}} greda, {{key:C}} stub, {{key:R}} dijagonala, {{key:P}} lim, {{key:F}} temelj, {{key:S}} stepenice. Početni. |
| {{ui:Klasični nacrt}} | Za ljude koji kucaju komande: mala traka ({{ui:Početna}}, {{ui:Pogled}}, {{ui:Izlaz}}) i komandna linija. Ukucajte BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, [poništi (U)], ZOOM, PLAN, 3D, DRAWINGS, NC ili HELP i pritisnite {{key:Enter}}; {{key:Enter}} na praznom ponavlja posljednju komandu, {{key:Esc}} je briše. Počnite kucati bilo gdje i slova idu u komandnu liniju. Srednje dugme pomjera pogled; u 3D, {{key:Shift}} i srednje dugme okreću model. |
| {{ui:Čelična traka}} | Kartice kako ih programi za detaljisanje čelika slažu: {{ui:Modeliranje}} (elementi, beton, stepenice), {{ui:Detaljisanje}} (veze), {{ui:Uređivanje}}, {{ui:Crteži}} (crteži i izvještaji), {{ui:Izrada}} (NC datoteke, IFC) i {{ui:Pogled}}, s menijem {{ui:Datoteka}} i brzim dugmadima desno. Tipke od jednog slova ostaju. Srednje dugme pomjera pogled; u 3D lijevo dugme okreće model. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} i {{key:Mod+A}}. Trake također sadrže {{ui:3D}}, {{ui:Osnova}}, {{ui:Izgled}} i {{ui:Uklopi}} iz trake pogleda.

:::tip
Tipka koja pripada rasporedu DetailCraft-a, ali kojoj je vaš stil dodijelio drugu komandu, ne radi ništa, a statusna linija kaže gdje je njena komanda otišla ("U Mojoj čeličnoj traci, Stub je Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje, a dok je element napola postavljen ili kopija prati pokazivač, slova pripadaju DetailCraft-u.
:::

## Prilagodite za sebe

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} pronađite komandu (polje za pretragu pomaže). Izaberite {{ui:Dodaj ključ}} i pritisnite tipku, ili dvije tipke jednu za drugom za dvoslovnu tipku. Kliknite tipku da je uklonite.
3. Uz traku, {{ui:Gdje stoji}} premješta komandu na drugu karticu i panel, u meni {{ui:Datoteka}} ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} podesite točkić, dugmad koja pomjeraju pogled na osnovi i izgledu, i šta svako dugme radi u 3D pogledu.
5. Dajte mu naziv i kliknite {{ui:Spasi}}.

Spremanje ugrađenog stila pravi vašu kopiju ("Moja čelična traka"); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema komandama prikazuje se crveno i mora se popraviti prije nego što možete spasiti.

## Miš

- **Točkić miša**: {{ui:Skrolanje prema gore zumira unutra}} (početno) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje na trackpadu uvijek zumira u smjeru kretanja prstiju.
- **Pomjeranje osnove i izgleda pomoću**: srednjeg dugmeta, desnog dugmeta, ili oba. Uz alat {{ui:Odaberi}} lijevo dugme uvijek crta prozor odabira.
- **Prevlačenje u 3D pogledu**: {{ui:Svaki pogled zasebno}} zadržava dugmad DetailCraft-a (lijevo okreće, srednje zumira, desno pomjera). Ili postavite svako dugme na okretanje, pomjeranje, zumiranje ili ništa; {{key:Shift}} uz dugme koje okreće ili pomjera zamijeni ta dva.

## Ponesite sa sobom

{{ui:Izvoz}} sprema stil u upotrebi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jedan, s drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na komande DetailCraft-a: sve drugo se izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena traka alata, traka ili Klasični nacrt), uz promjene koje ste napravili u svakoj aplikaciji. DetailCraft nema stil s trakom menija: kada se za sve aplikacije izabere traka menija druge aplikacije, DetailCraft zadržava sopstvenu traku alata.
:::

Povezano: [Tipke i miš](topic:keyboard) · [Postavke DetailCraft-a](topic:settings) · [Prelazak s drugog softvera za detaljisanje](topic:coming-from)
