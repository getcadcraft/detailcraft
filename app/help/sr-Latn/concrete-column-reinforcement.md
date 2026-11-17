---
title: Armiraj pravougaoni betonski stub
summary: Primer rada sa pravougaonim betonskim stubom u DetailCraft-u: postavi ga, daj mu uzdužne šipke i veze, pročitaj provere, preklop iznad njega i oznake šipki, i nacrtaj njegov radionički list.
keywords: betonski stub, pravougaoni stub, armatura stuba, uzdužne šipke, vertikalne šipke, veze, uzengije, poprečne veze, preklop, nastavak, početne šipke, koeficijent armiranja stuba, 1 procenat, 8 procenata, razmak veza, ACI 318-19 25.7.2, EN 1992-1-1 9.5, radionički crtež, oznake šipki, 8C1, 3C2
from: aee2a3ca
---

Ova tema uzima jedan kvadratni stub od nule do provereno, nacrtano i ispisano detaljisanje. Opšta pravila za grede, ploče i zidove su u [Detaljisanje armiranog betona](topic:reinforced-concrete); ovo je strana stuba, sa brojevima koje možeš da ponoviš.

:::warning
DetailCraft detaljiše šipke koje mu daš. Ne projektuje ih. Šipke ispod su početne vrednosti za primer, a ne preporuka: projektant odlučuje o veličini, broju i razmaku.
:::

## Šta je stub ovde

Pravougaoni stub ima širinu (duž svoje lokalne x) i dubinu preko (duž lokalne y), čist zaštitni sloj do veza, uzdužne šipke na svakom licu i zatvorene veze. Obrtanje okreće celinu; lica ostaju „lice širine“ i „lice dubine“.

- Uzdužne šipke daju se kao broj na licu širine i broj na licu dubine. Ugaone šipke se broje na oba, pa 3 i 3 daju 8 šipki; 4 i 4 daju 12.
- Veze su zatvoreni pravougaonici sa dve kuke na jednom uglu, 135° ili 90°. Prva veza je zadata udaljenost iznad poda (i ispod sledeće); krajnje zone imaju gušći razmak, sredina širi.
- Šta šipke rade na vrhu: nastavljaju se i preklapaju sa šipkama iznad, savijaju se sa kukama od 90° u pod, ili staju ispod vrha.

## Primer stuba

Stub 400 × 400 mm, 3600 mm između sprata iznad i sprata ispod, uzdužne šipke #8, veze #3, čist zaštitni sloj 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, unutrašnji.

1. Otvori karticu {{ui:Beton}} i podesi linije mreže i nivoe na kojima stub stoji (levi panel).
2. U {{ui:Dodaj prema mreži}} izaberi {{ui:Betonski stub}}, izaberi presek mreže i dva nivoa, postavi {{ui:Širina (mm)}} i {{ui:Dubina preko (mm)}} na 400 i izaberi {{ui:Dodaj}}.
3. U panelu {{ui:Svojstva}} podesi:
   - {{ui:Čist zaštitni sloj (mm)}} 40;
   - {{ui:Uzdužne šipke}} #8, {{ui:Šipke na licu širine}} 3, {{ui:Šipke na licu dubine}} 3;
   - {{ui:Veze}} #3, {{ui:Kuke}} 135°, {{ui:Razmak između (mm)}} 300, {{ui:Dužina krajnje zone (mm)}} 600, {{ui:Razmak u krajnjim zonama (mm)}} 150, {{ui:Prva od lica (mm)}} 50;
   - {{ui:Šipke na vrhu}} {{ui:Nastavi i preklopi sa šipkama iznad}}.

Svaka promena je jedan korak opoziva.

### Šta dobijaš

| Deo | Rezultat |
|---|---|
| Uzdužne šipke | 8 šipki #8 (prsten 3 × 3), svaka dugačka 4375 mm: stub od 3600 mm plus preklop od 775 mm iznad njega |
| Preklop | 757 mm potrebno za preklop na pritisak (ACI 318-19 25.5.5.1, fy 420), 775 mm obezbeđeno: potreba zaokružena na sledećih 25 mm |
| Veze | 17 veza #3, svaka sa dužinom reza od oko 1359 mm, razmak 150 mm u dve krajnje zone od 600 mm i 300 mm između |
| Koeficijent armiranja | 2.5 % bruto preseka (granice 1 % do 8 %, ACI 318-19 10.6.1.1) |
| Čist razmak šipki | 112 mm (treba najmanje 40 mm, ACI 318-19 25.2.3) |
| Razmak veza | 300 mm (dozvoljeno 400 mm: najmanje od 16 prečnika šipke, 48 prečnika veze i manje stranice, ACI 318-19 25.7.2.1) |
| Veličina veze | #3 (dozvoljeno do 9.5 mm, ACI 318-19 25.7.2.2) |

Sve ovo je u listi {{ui:Provere}} elementa; preklop je i u {{ui:Preklopi i sidrenje}}.

## Unutrašnje veze

Sa jednom obodnom vezom drže se samo ugaone šipke. ACI 318-19 25.7.2.3 dozvoljava da srednja šipka na licu ostane bez oslonca ako je u čistom rastojanju od 150 mm od ugaone šipke. Sa 3 šipke na licu, kao gore, to je ispunjeno. Sa 4 ili više šipki na licu nije, pa DetailCraft to kaže kao upozorenje ({{ui:Provere}} i {{ui:Problemi}}): potrebne su „unutrašnje veze“. **Unutrašnje veze još nisu nacrtane**: dodaj ih ručno u crtežu ili izaberi manje šipki na licu.

Za EN 1992-1-1, DetailCraft proverava veličinu šipke (najmanje 8 mm), broj šipki (najmanje 4), površinu čelika (0.2 % do 4 % preseka), čist razmak i razmak veza (9.5.2 i 9.5.3).

## Preklop, temelj i stub ispod

- Gde **temelj modela stoji ispod stuba**, stub se preklapa sa početnim šipkama temelja, a i njihov preklop se proverava.
- Gde **drugi stub modela stoji ispod njega**, preklapa se sa šipkama tog stuba.
- Zadaj sopstvenu {{ui:Dužina preklopa (mm, 0 = po potrebi)}} da bi poništio; kraća od potrebne je problem i obeležena je * u tabeli.
- Preklopi na pritisak se koriste po podrazumevanju ({{ui:Preklop na pritisak}} u podešavanjima); izaberi {{ui:Preklop na zatezanje}} kada stub može biti u zatezanju.

## Oznake, spisak i radionički list

Identične šipke dele jednu oznaku: uzdužne šipke stuba iznad nose oznaku 8C1, njegove veze 17C2 (prvo broj, zatim slovo vrste C za stub i redni broj). Pojavljuju se u kartici {{ui:Raspored savijanja}}, sa dužinom reza i težinom, i u CSV-u iz {{ui:Izlaz}} › {{ui:Više}} › {{ui:Savijanje}}.

Izaberi {{ui:Radionički crtež}} pored stuba za list sa stubom u prikazu sa strane (svaka šipka, njena oznaka, zone veza i preklop kotirani) i presekom na sredini, praćen listom za savijanje šipki. Sačuvaj {{ui:Ovaj list kao PDF}}.

## Šta ovo ne radi

- Okrugli stubovi i spirale, i stubovi koji nisu pravougaoni: nisu urađeni.
- Ugaone i unutrašnje veze unutar preseka, i seizmičko detaljisanje (ACI 318-19 poglavlje 18): nisu urađeni.
- Nastavci na pozicijama koje ti biraš, ili naizmenični: sve šipke se preklapaju u jednom preseku.
- Da li su šipke dovoljne za opterećenje: to je projekat inženjera.
