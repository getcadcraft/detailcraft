---
title: Gerovani spojevi
summary: Spojite dva I-profila koji se sastaju pod uglom: oba kraja se seku na ravni koja polovi ugao, sa krajnjim pločama, zavrtnjima i ukrepama ako ih želite.
keywords: gerovanje, miter, gerovani spoj, kosi spoj, koleno, portalni okvir, sleme, ugao, kosi rez, krajnja ploča, zavrtnji, ukrepa, poveži
from: cd8380d4
---

Gerovanje spaja dva I-profila čiji se krajevi sastaju pod uglom, kao koleno portalnog okvira, sleme ili dve grede koje skreću ugao u osnovi. DetailCraft seče oba kraja na ravni koja polovi ugao između njih, tako da se dve rezne površine poklapaju. Ako želite, dodaje krajnju ploču svakom presečenom kraju, spaja dve ploče zavrtnjima i stavlja par ukrepa rebra u svaki element.

## Gde radi

- Dva **I-profila** (IPE, HEA, HEB, W i slični) čiji se **krajevi sastaju u istom čvoru**. Svaki element može biti nacrtan u bilo kom smeru.
- Ugao između elemenata mora biti najmanje 15°. Elementi u pravoj liniji se odbijaju: koristite [nastavak](topic:splices).
- Obični rez (bez ploča) radi kako god se elementi sastaju. **Krajnje ploče** traže da se dva elementa sastaju u ravni svojih rebara, kao kod portalnog kolena ili sljemena. Dve grede koje skreću ugao u osnovi sastaju se u ravni svojih prirubnica, pa dobijaju samo obični rez.
- Elementi različitih veličina se spajaju, ali uz upozorenje: njihove rezne površine se ne poklapaju.

## Dodajte gerovanje

1. Izaberite dva elementa: kliknite jedan, pa {{key:Shift}}+klik na drugi.
2. Izaberite {{ui:Gerovanje}} u meniju {{ui:Više}} grupe {{ui:Poveži}}. Dijalog Gerovanje se otvara.
3. Podesite numerisana polja. Crtež pored njih se pravi od vaših brojeva dok kucate, a njegovi numerisani krugovi pokazuju šta svako polje podešava.
4. Izaberite {{ui:Dodaj kosi spoj}}. Ako ste izabrali više od dva elementa, svaki slobodan spoj među njima dobija isto gerovanje.

Da kasnije promenite gerovanje, izaberite ga (kliknite jednu od njegovih ploča) i izaberite {{ui:Dijalog kosog spoja sa pregledom}} u desnom panelu, ili promenite podešavanja odmah tamo. Obični rez nema ploča na koje se klikne: izaberite dva elementa i ponovo izaberite {{ui:Gerovanje}}, a dijalog se otvara na tom gerovanju. {{ui:Primeni na slične (n)}} kopira ga na svaki slobodan spoj između elemenata istih dva profila pod istim uglom.

## Numerisana polja (mm)

| Br. | Podešavanje | Podrazumevano | Šta radi |
|---|---|---|---|
| 1 | Razmak između ploča (ili krajeva reza) | 0 | Slobodan razmak u spoju. Svaka strana zadržava polovinu |
| 2 | Krajnje ploče, debljina ploče | uključeno, 20 | Krajnja ploča zavarena po celom obimu svakog presečenog kraja. Isključite za obični rez |
| 3 | Redovi zavrtnja, korak redova, razmak, spoljašnji red | 4, 0, 0, isključeno | Korak 0 raspoređuje redove ravnomerno između prirubnica. Razmak 0 = polovina širine ploče, najmanje 2,4 × rupa. Spoljašnji red ide u produžetak ploče preko spoljašnje prirubnice |
| 4 | Ploča preko spoljašnje prirubnice | 0 | Koliko ploče sežu preko spoljašnje prirubnice, duž reza |
| 5 | Ploča preko unutrašnje prirubnice | 0 | Isto sa unutrašnje strane |
| 6 | Ukrepe rebra, rastojanje iza reza | isključeno, 50 | Par u svakom elementu, sa obe strane rebra, normalno na element, ovoliko iza njegovog udaljenijeg kraja reza |
| 7 | Debljina ukrepe | 10 | |

Ispod {{ui:Zavrtnji}}: prečnik zavrtnja, rupa, kvalitet i dodatak dužine (20, 22, A325, 30), kao za krajnje ploče. Ispod {{ui:Ploče i zavari}}: širina ploče (0 = širina prirubnice), veličina ugaonog zavara (8) i materijal ploče (A36).

## Šta dobijate

- **Rezovi.** Kraj svakog elementa se seče na njegovoj ravni. Njegova dužina u spiskovima, crtežima i NC datotekama je **ukupna dužina**, od njegovog pravog kraja do najudaljenije tačke reza.
- **Ploče** pripadaju sopstvenom elementu: sklop svakog elementa je element, njegova krajnja ploča i njegove ukrepe. Zavrtnji su gradilišni zavrtnji spoja: spisak materijala ih broji jednom, a crtež sklopa svakog elementa ih navodi kao slobodne zavrtnje.
- **Crteži** prikazuju kose krajeve i ploče; radionički crtež gerovanog elementa navodi ugao svakog reza od normale.
- **NC datoteke** (DSTV) nose uglove kosog reza u zaglavlju, kako standard traži, i konture koje prate rez. Proverite ih u NC pregledaču vaše radionice pre sečenja, kao i za svaku NC datoteku.
- **IFC** odseca ekstruziju svakog elementa ravni reza, pa drugi programi prikazuju pravi rez.
- **Oznake:** gerovani element je drugi komad od elementa iste dužine sa pravim rezom. Dva elementa sa istim rezovima dele oznaku, kao dva krovna roga sljemena.

## Dobro je znati

- Gerovanje ostaje aktivno. Pomerite ili promenite veličinu bilo kog elementa, pa rez, ploče i zavrtnji prate. Obrišite jedan element i gerovanje nestaje, a kraj drugog elementa je ponovo pravi.
- Upozorenja koriste iste minimume EN 1993-1-8 kao i ostale veze (rastojanje do kraja i ivice 1,2 × rupa, korak 2,2 × rupa, razmak 2,4 × rupa), plus redovi zavrtnja previše blizu prirubnice, ploče uže od prirubnica i ukrepe bez mesta.
- Vrednosti su polazne, a ne proračun. DetailCraft ne proverava čvrstoću veze, ne pravi ni prelaz (haunch), ni zavareni gerovani spoj sa sučeonim zavarom, ni ukrepe u pravcu prirubnica drugog elementa.
