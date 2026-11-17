---
title: Kosi spojevi
summary: Spojite dva I-profila koji se sastaju pod uglom: oba kraja su zasječena na ravni koja polovi ugao, uz krajnje limove, vijke i ukrućenja ako ih želite.
keywords: kosi spoj, gerung, miter, koljeno, pojačanje, portalni okvir, sljeme, ugao, rez pod uglom, koso sječenje, krajnji lim, vijčani krajnji lim, ukrućenje, povezivanje
from: cd8380d4
---

Kosi spoj spaja dva I-profila čiji se krajevi sastaju pod uglom, kao koljeno portalnog okvira, sljeme ili dvije grede koje skreću u uglu u tlocrtu. DetailCraft reže oba kraja na ravni koja polovi ugao između njih, pa se dvije rezne površine poklapaju. Ako želite, dodaje krajnji lim na svaki rezni kraj, spaja dva lima vijcima i stavlja par rebara u svaki element.

## Gdje radi

- Dva **I-profila** (IPE, HEA, HEB, W i slični) čiji se **krajevi sastaju u istom čvoru**. Svaki element se može crtati u bilo kojem smjeru.
- Ugao između elemenata mora biti najmanje 15°. Elementi u istoj liniji se odbijaju: koristite [nastavak](topic:splices).
- Običan rez (bez limova) radi bez obzira kako se elementi sastaju. **Krajnji limovi** zahtijevaju da se dva elementa sastaju u ravni svojih rebara, kao kod koljena portala ili sljemena. Dvije grede koje skreću u uglu u tlocrtu sastaju se u ravni svojih pojasa, pa dobijaju samo običan rez.
- Elementi različitih veličina se spajaju, ali uz upozorenje: njihove rezne površine se ne poklapaju.

## Dodavanje kosog spoja

1. Odaberite dva elementa: kliknite jedan, pa {{key:Shift}}+klik na drugi.
2. Izaberite {{ui:Kosi spoj}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}. Otvara se dijalog za kosi spoj.
3. Postavite numerisana polja. Crtež pored njih se pravi od vaših brojeva dok kucate, a njegovi numerisani krugovi pokazuju šta svako polje postavlja.
4. Izaberite {{ui:Dodaj gerung}}. Ako ste odabrali više od dva elementa, svaki slobodni spoj među njima dobija isti kosi spoj.

Da promijenite kosi spoj kasnije, odaberite ga (kliknite jedan od njegovih limova) i izaberite {{ui:Dijalog za gerung s pregledom}} u desnom panelu, ili mijenjajte postavke tamo direktno. Običan rez nema limove za klik: odaberite njena dva elementa i ponovo izaberite {{ui:Kosi spoj}}, a dijalog se otvara na tom kosom spoju. {{ui:Primijeni na slične (n)}} kopira ga na svaki slobodni spoj između elemenata iste dvije vrste profila pod istim uglom.

## Numerisana polja (mm)

| Br. | Postavka | Početno | Šta radi |
|---|---|---|---|
| 1 | Razmak između limova (ili rezni krajevi) | 0 | Čist razmak u spoju. Svaka strana zadržava polovinu |
| 2 | Krajnji limovi, debljina lima | uključeno, 20 | Krajnji lim zavaren po cijelom obodu svakog reznog kraja. Isključite za običan rez |
| 3 | Redovi vijaka, korak redova, poprečni razmak, vanjski red | 4, 0, 0, isključeno | Korak 0 raspoređuje redove ravnomjerno između pojasa. Poprečni razmak 0 = polovina širine lima, najmanje 2.4 × rupa. Vanjski red ide u produžetak lima preko vanjskog pojasa |
| 4 | Lim preko vanjskog pojasa | 0 | Koliko daleko limovi sežu preko vanjskog pojasa, duž reza |
| 5 | Lim preko unutrašnjeg pojasa | 0 | Isto za unutrašnji pojas |
| 6 | Rebra ukrućenja, razmak preko reza | isključeno, 50 | Par u svakom elementu, s obje strane rebra, okomito na element, toliko daleko preko drugog kraja njegovog reza |
| 7 | Debljina ukrućenja | 10 | |

Ispod {{ui:Vijci}}: prečnik vijka, rupa, klasa i dodatak za dužinu (20, 22, A325, 30), kao za krajnje limove. Ispod {{ui:Limovi i varovi}}: širina lima (0 = širina pojasa), veličina ugaonog zavara (8) i materijal lima (A36).

## Šta dobijate

- **Rezovi.** Kraj svakog elementa je rezan na svojoj ravni. Njegova dužina u listama, crtežima i NC datotekama je **ukupna dužina**, od njegovog pravog kraja do najudaljenije tačke reza.
- **Limovi** pripadaju svom elementu: sklop svakog elementa je element, njegov krajnji lim i njegova ukrućenja. Vijci su gradilišni vijci spoja: spisak materijala ih broji jednom, a crtež sklopa svakog elementa ih navodi kao slobodne vijke.
- **Crteži** prikazuju kose krajeve i limove; radionički crtež kosog elementa navodi ugao svakog reza u odnosu na pravi ugao.
- **NC datoteke** (DSTV) nose uglove kosog reza u zaglavlju, kako standard traži, i konture koje prate rez. Provjerite ih u NC pregledniku vaše radionice prije rezanja, kao i za svaku NC datoteku.
- **IFC** odsijeca ekstruziju svakog elementa po njegovoj ravni reza, pa drugi programi prikazuju pravi rez.
- **Oznake:** kosi element je drugačiji komad od elementa s pravim rezom iste dužine. Dva elementa s istim rezovima dijele oznaku, kao dva krovna roga sljemena.

## Dobro je znati

- Kosi spoj ostaje aktivan. Pomjerite ili promijenite veličinu bilo kojeg elementa i rez, limovi i vijci prate. Obrišite bilo koji element i kosi spoj nestaje, a kraj drugog elementa je ponovo pravi.
- Upozorenja koriste iste minimume EN 1993-1-8 kao i ostale veze (razmak do kraja i ivice 1.2 × rupa, korak 2.2 × rupa, poprečni razmak 2.4 × rupa), uz redove vijaka preblizu pojasu, limove užie od pojasa i ukrućenja bez prostora.
- Vrijednosti su početne, nisu proračun. DetailCraft ne provjerava nosivost veze, i ne pravi koljeno, zavareni kosi spoj sa sučeljenim zavarom, ni ukrućenja u liniji s pojasevima drugog elementa.
