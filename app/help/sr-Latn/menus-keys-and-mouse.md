---
title: Meniji, tasteri i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dajte svakoj komandi svoj taster, premestite komande između kartica trake i podesite šta točkić i dugmad miša rade.
keywords: stil menija, meniji, traka, traka sa alatkama, komandna linija, prečice, tasteri, prilagodi, ponovo dodeli, miš, točkić, obrni, smer zuma, srednje dugme, desno dugme, pomeranje, orbita, izvoz, uvoz, prebacivanje, poznato, klasični nacrt, čelična traka
from: 4132c6e5
---

Komande DetailCraft-a su iste kako god do njih dođete. **Stil menija** samo odlučuje gde se nalaze na ekranu, kako se zovu tamo i koji tasteri ih pokreću. Izaberite ga u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Meniji, tasteri i miš}}; promena važi odmah, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobijate |
|---|---|
| {{ui:DetailCraft}} | Sopstvena traka sa alatkama DetailCraft-a ({{ui:Datoteka}}, Postavi, {{ui:Poveži}}, {{ui:Uredi}}, {{ui:Izlaz}}) i njeni tasteri od jednog slova: {{key:V}} izaberi, {{key:B}} greda, {{key:C}} stub, {{key:R}} dijagonala, {{key:P}} lim, {{key:F}} temelj, {{key:S}} stepenište. Početni. |
| {{ui:Klasični nacrt}} | Za ljude koji kucaju komande: mala traka ({{ui:Početna}}, {{ui:Pogled}}, {{ui:Izlaz}}) i komandna linija. Ukucajte BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (opozovi), ZOOM, PLAN, 3D, DRAWINGS, NC ili HELP i pritisnite {{key:Enter}}; {{key:Enter}} na praznom ponavlja poslednju komandu, {{key:Esc}} je briše. Počnite da kucate bilo gde i slova idu u komandnu liniju. Srednje dugme pomera pogled; u 3D, {{key:Shift}} i srednje dugme okreću model. |
| {{ui:Čelična traka}} | Kartice kako ih čelični programi za detaljisanje slažu: {{ui:Modelovanje}} (elementi, beton, stepeništa), {{ui:Detaljisanje}} (veze), {{ui:Uredi}}, {{ui:Crteži}} (crteži i izveštaji), {{ui:Izrada}} (NC datoteke, IFC) i {{ui:Pogled}}, sa menijem {{ui:Datoteka}} i brzim dugmadima desno. Tasteri od jednog slova ostaju. Srednje dugme pomera pogled; u 3D levo dugme okreće model. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} i {{key:Mod+A}}. Trake takođe sadrže dugmad trake pogleda: {{ui:3D}}, {{ui:Osnova}}, {{ui:Izgled}} i {{ui:Uklopi}}.

:::tip
Taster koji pripada rasporedu DetailCraft-a, ali mu je vaš stil dodelio drugu komandu, ne radi ništa, a statusna linija kaže gde je njegova komanda otišla (na primer: "U stilu Moja čelična traka, Stub je Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje, a dok je element napola postavljen ili kopija prati pokazivač, slova pripadaju DetailCraft-u.
:::

## Prilagodite

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tasteri i meniji}} nađite komandu (polje za pretragu pomaže). Kliknite {{ui:Dodaj taster}} i pritisnite taster, ili dva tastera zaredom za dvoslovni taster. Kliknite taster da ga uklonite.
3. Uz traku, {{ui:Gde se nalazi}} premešta komandu na drugu karticu i panel, u meni {{ui:Datoteka}}, ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesite točkić, dugmad koja pomeraju osnovu i izglede, i šta svako dugme radi u 3D prikazu.
5. Dajte mu naziv i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu kopiju ("Moja čelična traka"); ugrađeni se nikad ne menja. Taster koji je dodeljen dvema komandama prikazan je crveno i mora se popraviti pre čuvanja.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početno) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Štipanje na touchpad-u uvek zumira u smeru kojim se kreću prsti.
- **Pomeranje osnove i izgleda pomoću**: srednjeg dugmeta, desnog dugmeta, ili oba. Sa alatom {{ui:Izaberi}} levo dugme uvek crta prozor za izbor.
- **Prevlačenje u 3D prikazu**: {{ui:Zasebno za svaki prikaz}} zadržava dugmad DetailCraft-a (levo okreće, srednje zumira, desno pomera). Ili postavite svako dugme na okretanje, pomeranje, zum ili ništa; {{key:Shift}} sa dugmetom koje okreće ili pomera zamenjuje njih dva.

## Poneste ga sa sobom

{{ui:Izvoz}} čuva stil koji se koristi kao mali `.ccinput.json` datoteku; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da upućuje samo na sopstvene komande DetailCraft-a: sve drugo u njoj se izostavlja i broji u statusnoj liniji. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena traka sa alatkama, traka ili Klasični nacrt), sa promenama koje ste napravili u svakoj aplikaciji. DetailCraft nema stil trake menija: kada je traka menija neke druge aplikacije izabrana za sve aplikacije, DetailCraft zadržava svoju traku sa alatkama.
:::

Povezano: [Tasteri i miš](topic:keyboard) · [Podešavanja DetailCraft-a](topic:settings) · [Dolazak iz drugog softvera za detaljisanje](topic:coming-from)
