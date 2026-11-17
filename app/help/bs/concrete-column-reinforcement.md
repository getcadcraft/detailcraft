---
title: Armiraj pravougaoni betonski stub
summary: Primjer rada sa pravougaonim betonskim stubom u DetailCraft-u: postavi ga, daj mu uzdužne šipke i vezice, pročitaj provjere, preklop iznad njega i oznake šipki, i nacrtaj njegov radionički list.
keywords: betonski stub, pravougaoni stub, armatura stuba, uzdužne šipke, vertikalne šipke, vezice, uzengije, unakrsne vezice, preklop, nastavak, čekajuće šipke, procenat armiranja stuba, 1 posto, 8 posto, razmak vezica, ACI 318-19 25.7.2, EN 1992-1-1 9.5, radionički crtež, oznake šipki, 8C1, 3C2
from: aee2a3ca
---

Ova tema vodi jedan kvadratni stub od početka do provjerenog, nacrtanog i popisanog detalja. Opšta pravila za grede, ploče i zidove su u [Detaljisanje armiranog betona](topic:reinforced-concrete); ovo je strana stuba, sa brojevima koje možete ponoviti.

:::warning
DetailCraft detaljiše šipke koje mu date. Ne proračunava ih. Šipke ispod su početne vrijednosti za primjer, a ne preporuka: odgovorni inženjer bira prečnik, broj i razmak.
:::

## Šta je stub ovdje

Pravougaoni stub ima širinu (duž svoje lokalne x ose) i dubinu (preko, duž lokalne y ose), čist zaštitni sloj do vezica, uzdužne šipke na svakom licu i zatvorene vezice. Rotiranje okreće cijelu stvar; lica ostaju "lice širine" i "lice dubine".

- Uzdužne šipke se daju kao broj na licu širine i broj na licu dubine. Ugaone šipke se računaju na oba, pa 3 i 3 daju 8 šipki; 4 i 4 daju 12.
- Vezice su zatvoreni pravougaonici sa dvije kuke na jednom uglu, 135° ili 90°. Prva vezica je zadata udaljenost iznad poda (i ispod sljedeće); krajnje zone imaju gušći razmak, a sredina širi.
- Šta šipke rade na vrhu: nastavljaju se i preklapaju sa šipkama iznad, uvijaju se sa kukama od 90° u pod, ili staju ispod vrha.

## Primjer stuba

Stub 400 × 400 mm, 3600 mm između poda iznad i poda ispod, uzdužne šipke #8, vezice #3, čist zaštitni sloj 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, unutrašnji.

1. Otvori karticu {{ui:Beton}} i postavi linije mreže i nivoe na kojima stub stoji (lijevi panel).
2. U {{ui:Dodaj po mreži}} izaberi {{ui:Betonski stub}}, odaberi presjek mreže i dva nivoa, postavi {{ui:Širina (mm)}} i {{ui:Dubina (mm)}} na 400 i izaberi {{ui:Dodaj}}.
3. U panelu {{ui:Svojstva}} postavi:
   - {{ui:Čisti zaštitni sloj (mm)}} 40;
   - {{ui:Uzdužne šipke}} #8, {{ui:Šipke na licu širine}} 3, {{ui:Šipke na licu dubine}} 3;
   - {{ui:Vezice}} #3, {{ui:Kuke}} 135°, {{ui:Razmak između (mm)}} 300, {{ui:Dužina krajnje zone (mm)}} 600, {{ui:Razmak u krajnjim zonama (mm)}} 150, {{ui:Prva od lica (mm)}} 50;
   - {{ui:Šipke na vrhu}} {{ui:Nastavi i preklopi s šipkama iznad}}.

Svaka promjena je jedan korak poništavanja.

### Šta dobijate

| Dio | Rezultat |
|---|---|
| Uzdužne šipke | 8 šipki #8 (prsten 3 × 3), svaka dugačka 4375 mm: stub od 3600 mm plus preklop od 775 mm iznad njega |
| Preklop | 757 mm potrebno za preklop na pritisak (ACI 318-19 25.5.5.1, fy 420), 775 mm obezbijeđeno: potreba zaokružena na sljedećih 25 mm |
| Vezice | 17 vezica #3, svaka sa dužinom reza od oko 1359 mm, razmak 150 mm u dvije krajnje zone od 600 mm i 300 mm između |
| Odnos armiranja | 2.5 % bruto presjeka (granice 1 % do 8 %, ACI 318-19 10.6.1.1) |
| Čisti razmak šipki | 112 mm (treba najmanje 40 mm, ACI 318-19 25.2.3) |
| Razmak vezica | 300 mm (dozvoljeno 400 mm: najmanje od 16 prečnika šipke, 48 prečnika vezice i manje stranice, ACI 318-19 25.7.2.1) |
| Veličina vezice | #3 (dozvoljeno do 9.5 mm, ACI 318-19 25.7.2.2) |

Svi ovi podaci su u listi {{ui:Provjere}} elementa; preklop je također u {{ui:Preklopi i sidrenje}}.

## Unakrsne vezice

Sa jednom obodnom vezicom drže se samo ugaone šipke. ACI 318-19 25.7.2.3 dozvoljava da srednja šipka na licu ostane bez oslonca ako je unutar 150 mm čistog razmaka od ugaone šipke. Sa 3 šipke na licu, kao gore, to je ispunjeno. Sa 4 ili više šipki na licu nije, i DetailCraft to kaže kao upozorenje ({{ui:Provjere}} i {{ui:Problemi}}): potrebne su "unakrsne vezice". **Unakrsne vezice još nisu nacrtane**: dodaj ih u crtež ručno, ili izaberi manje šipki na licu.

Za EN 1992-1-1, DetailCraft provjerava veličinu šipke (najmanje 8 mm), broj šipki (najmanje 4), površinu čelika (0.2 % do 4 % presjeka), čist razmak i razmak uzengija (9.5.2 i 9.5.3).

## Preklop, temelj i stub ispod

- Gdje **temelj iz modela stoji ispod stuba**, stub se preklapa sa čekajućim šipkama temelja, i njihov preklop se također provjerava.
- Gdje **drugi stub iz modela stoji ispod njega**, preklapa se sa šipkama tog stuba.
- Upiši sopstvenu {{ui:Dužina preklopa (mm, 0 = po potrebi)}} da je nadjačaš; kraća od potrebne je problem i označena je sa * u tabeli.
- Preklopi na pritisak se koriste po zadanom ({{ui:Preklop na pritisak}} u postavkama); izaberi {{ui:Preklop na zatezanje}} kada stub može biti u zatezanju.

## Oznake, spisak i radionički list

Identične šipke dijele jednu oznaku: uzdužne šipke stuba iznad su 8C1, njegove vezice 17C2 (prvo broj, zatim slovo vrste C za stub i tekući broj). Pojavljuju se u kartici {{ui:Spisak savijanja}}, sa dužinom reza i težinom, i u CSV-u iz {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}}.

Odaberi {{ui:Radionički crtež}} pored stuba za list sa stubom u izgledu (svaka šipka, njena oznaka, zone vezica i preklop kotirani) i presjek u sredini, a zatim list za savijanje šipki. Sačuvaj {{ui:Ovaj list kao PDF}}.

## Šta ovo ne radi

- Okrugli stubovi i spirale, i stubovi koji nisu pravougaoni: nisu urađeni.
- Ugaone i unakrsne vezice unutar presjeka, i seizmičko detaljisanje (ACI 318-19 poglavlje 18): nisu urađeni.
- Nastavci na položajima koje biraš, ili naizmjenični: sve šipke se preklapaju na jednom presjeku.
- Da li su šipke dovoljne za opterećenje: to je proračun inženjera.
