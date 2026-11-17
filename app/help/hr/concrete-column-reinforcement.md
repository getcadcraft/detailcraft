---
title: Armiranje pravokutnog betonskog stupa
summary: Primjer izrade pravokutnog betonskog stupa u DetailCraft-u: postavljanje, uzdužne šipke i vezice, pregled provjera, preklop iznad njega i oznake šipki, te izrada radioničkog lista.
keywords: betonski stup, pravokutni stup, armatura stupa, uzdužne šipke, vertikalne šipke, vezice, uzengije, poprečne vezice, preklop, nastavak, ispusti, koeficijent armiranja stupa, 1 posto, 8 posto, razmak vezica, ACI 318-19 25.7.2, EN 1992-1-1 9.5, radionički crtež, oznake šipki, 8C1, 3C2
from: aee2a3ca
---

Ovaj primjer uzima jedan kvadratni stup od početka do provjerenog, nacrtanog i popisanog detalja. Opća pravila za grede, ploče i zidove nalaze se u [Detaljiranje armiranog betona](topic:reinforced-concrete); ovo je stupna strana toga, s brojevima koje možete ponoviti.

:::warning
DetailCraft detaljira šipke koje mu zadate. Ne proračunava ih. Šipke u nastavku su početne vrijednosti za primjer, a ne preporuka: inženjer odgovoran za projekt bira veličinu, broj i razmak.
:::

## Što je stup ovdje

Pravokutni stup ima širinu (duž svoje lokalne x osi) i dubinu preko (duž lokalne y osi), čisti zaštitni sloj do vezica, uzdužne šipke na svakom licu i zatvorene vezice. Zakretanje okreće cijelu stvar; lica ostaju „lice širine“ i „lice dubine“.

- Uzdužne šipke zadane su kao broj na licu širine i broj na licu dubine. Kutne šipke broje se u oba, pa 3 i 3 čine 8 šipki; 4 i 4 čine 12.
- Vezice su zatvoreni pravokutnici s dvije kuke na jednom kutu, 135° ili 90°. Prva vezica je zadana udaljenost iznad poda (i ispod sljedeće), krajnje zone imaju gušći razmak, a sredina širi.
- Što šipke rade na vrhu: nastaviti i preklopiti s šipkama iznad, zaviti 90° kukama u pod, ili stati ispod vrha.

## Primjer stupa

Stup 400 × 400 mm, 3600 mm između etaže iznad i etaže ispod, uzdužne šipke #8, vezice #3, čisti zaštitni sloj 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, unutarnji.

1. Otvorite karticu {{ui:Beton}} i postavite linije mreže i etaže na kojima stup stoji (lijevi panel).
2. U {{ui:Dodaj po mreži}} odaberite {{ui:Betonski stup}}, odaberite presjecište mreže i dvije etaže, postavite {{ui:Širina (mm)}} i {{ui:Dubina preko (mm)}} na 400 i odaberite {{ui:Dodaj}}.
3. U panelu {{ui:Svojstva}} postavite:
   - {{ui:Čisti zaštitni sloj (mm)}} 40;
   - {{ui:Uzdužne šipke}} #8, {{ui:Šipke na licu širine}} 3, {{ui:Šipke na licu dubine}} 3;
   - {{ui:Vezice}} #3, {{ui:Kuke}} 135°, {{ui:Razmak između (mm)}} 300, {{ui:Duljina krajnje zone (mm)}} 600, {{ui:Razmak u krajnjim zonama (mm)}} 150, {{ui:Prva od lica (mm)}} 50;
   - {{ui:Šipke na vrhu}} {{ui:Nastavi i preklopi s šipkama iznad}}.

Svaka promjena je jedan korak poništavanja.

### Što dobivate

| Dio | Rezultat |
|---|---|
| Uzdužne šipke | 8 šipki #8 (prsten 3 × 3), svaka duga 4375 mm: stup od 3600 mm plus preklop od 775 mm iznad njega |
| Preklop | 757 mm potrebno za preklop na tlak (ACI 318-19 25.5.5.1, fy 420), 775 mm osigurano: potreba zaokružena na sljedećih 25 mm |
| Vezice | 17 vezica #3, svaka s duljinom reza od oko 1359 mm, razmak 150 mm u dvije krajnje zone od 600 mm i 300 mm između |
| Koeficijent armiranja | 2.5 % bruto presjeka (granice 1 % do 8 %, ACI 318-19 10.6.1.1) |
| Čisti razmak šipki | 112 mm (potrebno najmanje 40 mm, ACI 318-19 25.2.3) |
| Razmak vezica | 300 mm (dopušteno 400 mm: najmanje od 16 promjera šipke, 48 promjera vezice i manje stranice, ACI 318-19 25.7.2.1) |
| Veličina vezice | #3 (dopušteno do 9.5 mm, ACI 318-19 25.7.2.2) |

Sve su ovo u popisu {{ui:Provjere}} elementa; preklop je i u {{ui:Preklopi i sidrenje}}.

## Poprečne vezice

S jednom obodnom vezicom drže se samo kutne šipke. ACI 318-19 25.7.2.3 dopušta da srednja šipka na licu ostane bez oslonca ako je unutar 150 mm čistog razmaka od kutne šipke. S 3 šipke na licu, kao gore, to je ispunjeno. Sa 4 ili više šipki na licu nije, i DetailCraft to kaže kao upozorenje ({{ui:Provjere}} i {{ui:Problemi}}): potrebne su „poprečne vezice“. **Poprečne vezice još nisu izrađene**: dodajte ih u crtež ručno ili odaberite manje šipki na licu.

Za EN 1992-1-1 DetailCraft provjerava veličinu šipke (najmanje 8 mm), broj šipki (najmanje 4), površinu čelika (0.2 % do 4 % presjeka), čisti razmak i razmak uzengija (9.5.2 i 9.5.3).

## Preklop, temelj i stup ispod

- Gdje **temelj modela stoji ispod stupa**, stup se preklapa s ispustima temelja, a i njihov preklop se provjerava.
- Gdje **drugi stup modela stoji ispod njega**, preklapa se sa šipkama tog stupa.
- Zadajte vlastitu {{ui:Duljina preklopa (mm, 0 = prema potrebi)}} da biste nadjačali; kraći od potrebnog je problem i označen je * u tablici.
- Preklopi na tlak koriste se zadano ({{ui:Preklop na tlak}} u postavkama); odaberite {{ui:Preklop na vlak}} kada stup može biti vlačan.

## Oznake, popis i radionički list

Identične šipke dijele jednu oznaku: uzdužne šipke stupa iznad su 8C1, njegove vezice 17C2 (prvo broj, zatim slovo vrste C za stup i tekući broj). Pojavljuju se na kartici {{ui:Plan savijanja}}, s duljinom reza i težinom, te u CSV-u iz {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}}.

Odaberite {{ui:Radionički crtež}} pored stupa za list sa stupom u pogledu pročelja (svaka šipka, njezina oznaka, zone vezica i preklop s kotama) i presjekom na sredini, a zatim list plana savijanja. Spremite {{ui:Ovaj list kao PDF}}.

## Što ovo ne radi

- Okrugli stupovi i spirale te stupovi koji nisu pravokutni: nisu izrađeni.
- Kutne i poprečne vezice unutar presjeka te potresno detaljiranje (ACI 318-19 poglavlje 18): nisu izrađeni.
- Nastavci na položajima koje odaberete ili naizmjenični: sve šipke se preklapaju na jednom presjeku.
- Jesu li šipke dovoljne za opterećenje: to je proračun inženjera.
