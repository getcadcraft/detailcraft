---
title: Zasječeni spojevi
summary: Spojite dva I-profila štapa koji se sastaju pod kutom: oba kraja izrezana su na ravnini koja polovi kut, uz čeone ploče, vijke i ukrute ako ih želite.
keywords: zasjek, mitre, miter, zasječeni spoj, koljeno, ugaono rebro, portalni okvir, sljeme, kut, kosi rez, čeona ploča, vijčana čeona ploča, ukruta, povezivanje
from: cd8380d4
---

Zasjek spaja dva I-profila štapa čiji se krajevi sastaju pod kutom, primjerice koljeno portalnog okvira, sljeme ili dvije grede koje skreću u kut u tlocrtu. DetailCraft reže oba kraja na ravnini koja polovi kut između njih, tako da se dvije izrezane površine podudaraju. Ako želite, dodaje čeonu ploču na svaki izrezani kraj, spaja dvije ploče vijcima i stavlja par rebrenih ukruta u svaki štap.

## Gdje radi

- Dva **I-profila** (IPE, HEA, HEB, W i slično) čiji se **krajevi sastaju u istom čvoru**. Svaki štap može biti nacrtan u bilo kojem smjeru.
- Kut između štapova mora biti najmanje 15°. Štapovi u istom pravcu se odbijaju: upotrijebite [nastavak](topic:splices).
- Obični rez (bez ploča) radi bez obzira na to kako se štapovi sastaju. **Čeone ploče** trebaju da se dva štapa sastaju u ravnini svojih hrbata, kao u koljenu portalnog okvira ili sljemenu. Dvije grede koje skreću u kut u tlocrtu sastaju se u ravnini svojih pojasnica, pa dobivaju samo obični rez.
- Štapovi različitih veličina se spajaju, ali uz upozorenje: njihove izrezane površine se ne podudaraju.

## Dodavanje zasjeka

1. Odaberite dva štapa: kliknite jedan, zatim {{key:Shift}}+klik na drugi.
2. Odaberite {{ui:Zasjek}} u izborniku {{ui:Više}} grupe {{ui:Povezivanje}}. Otvara se dijalog Zasjek.
3. Postavite numerirana polja. Crtež pokraj njih nastaje iz vaših brojeva dok tipkate, a njegovi numerirani krugovi pokazuju što koje polje postavlja.
4. Odaberite {{ui:Dodaj zasjek}}. Ako ste odabrali više od dva štapa, svaki slobodni spoj među njima dobiva isti zasjek.

Za kasniju promjenu zasjeka odaberite ga (kliknite jednu od njegovih ploča) i odaberite {{ui:Dijalog zasjeka s pregledom}} na desnoj ploči ili mijenjajte postavke izravno tamo. Obični rez nema ploča za klik: odaberite njegova dva štapa i ponovno odaberite {{ui:Zasjek}}, a dijalog se otvara na tom zasjeku. {{ui:Primijeni na slične (n)}} kopira ga na svaki slobodni spoj među štapovima istih dva profila pod istim kutom.

## Numerirana polja (mm)

| Br. | Postavka | Zadano | Što radi |
|---|---|---|---|
| 1 | Razmak između ploča (ili izrezanih krajeva) | 0 | Slobodan razmak na spoju. Svaka strana zadržava polovicu |
| 2 | Čeone ploče, debljina ploče | uključeno, 20 | Čeona ploča zavarena po cijelom opsegu na svakom izrezanom kraju. Isključite za obični rez |
| 3 | Redovi vijaka, korak redova, razmak, vanjski red | 4, 0, 0, isključeno | Korak 0 raspoređuje redove ravnomjerno između pojasnica. Razmak 0 = pola širine ploče, najmanje 2.4 × provrt. Vanjski red ide u produžetak ploče preko vanjske pojasnice |
| 4 | Ploča preko vanjske pojasnice | 0 | Koliko ploče sežu preko vanjske pojasnice, uzduž reza |
| 5 | Ploča preko unutarnje pojasnice | 0 | Isto za unutarnju |
| 6 | Rebrene ukrute, udaljenost preko reza | isključeno, 50 | Par u svakom štapu, s obje strane hrbata, okomito na štap, ova udaljenost preko daljnjeg kraja njegova reza |
| 7 | Debljina ukrute | 10 | |

Pod {{ui:Vijci}}: promjer vijka, provrt, razred i dodatak duljine (20, 22, A325, 30), kao kod čeonih ploča. Pod {{ui:Ploče i zavari}}: širina ploče (0 = širina pojasnice), veličina kutnog zavara (8) i materijal ploče (A36).

## Što dobivate

- **Rezovi.** Kraj svakog štapa izrezan je na njegovoj ravnini. Njegova duljina u popisima, crtežima i NC datotekama je **ukupna duljina**, od njegova ravnog kraja do najudaljenije točke reza.
- **Ploče** pripadaju svom štapu: sklop svakog štapa je štap, njegova čeona ploča i njegove ukrute. Vijci su gradilišni vijci spoja: sastavnica ih broji jednom, a crtež sklopa svakog štapa navodi ih kao slobodne vijke.
- **Crteži** prikazuju kose krajeve i ploče; radionički crtež zasječenog štapa bilježi kut svakog reza od okomice.
- **NC datoteke** (DSTV) nose kutove kosih rezova u zaglavlju, kako norma traži, i konture koje prate rez. Provjerite ih u NC pregledniku svoje radionice prije rezanja, kao i za svaku NC datoteku.
- **IFC** obrezuje ekstruziju svakog štapa po njegovoj ravnini reza, pa drugi programi prikazuju stvarni rez.
- **Oznake:** zasječeni štap je drugi komad od štapa iste duljine s običnim rezom. Dva štapa s istim rezovima dijele oznaku, kao dva kosnika sljemena.

## Dobro je znati

- Zasjek ostaje aktivan. Pomaknite ili promijenite veličinu bilo kojeg štapa i rez, ploče i vijci slijede. Obrišite bilo koji štap i zasjek nestaje, a kraj drugog štapa opet je ravan.
- Upozorenja koriste iste najmanje vrijednosti EN 1993-1-8 kao i ostali spojevi (udaljenost do kraja i ruba 1.2 × provrt, korak 2.2 × provrt, razmak 2.4 × provrt), uz to redovi vijaka preblizu pojasnici, ploče uže od pojasnica i ukrute bez mjesta.
- Vrijednosti su početne, a ne proračun. DetailCraft ne provjerava čvrstoću spoja i ne izrađuje ugaona ojačanja, zasjek zavaren sučeonim zavarom ni ukrute u nizu s pojasnicama drugog štapa.
