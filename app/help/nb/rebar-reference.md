---
title: Armeringsreferanse
summary: Staversdimensjoner, krokmål, formkoder, kappelengder og kolonnene i bøyelisten som DetailCraft bruker.
keywords: armering, stavdimensjoner, kroker, bøyediameter, formkoder, kappelengde, bøyeliste, staveliste, astm a615, aci 318
from: 1583535e
---

## Stavdimensjoner

Fra ASTM A615/A615M tabell 1 (betegnelser i tommer og pund). Millimeter og kg/m er eksakte omregninger av de publiserte tomme- og lb/ft-verdiene. Listene viser hver dimensjon slik som for eksempel «#5 (15.9 mm)».

| Stav | Diameter (mm) | Masse (kg/m) | Areal (mm²) | Innvendig bøyediameter | 90° krok, ben ytterkant til ytterkant (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

I [Innstillinger for DetailCraft](topic:settings) ({{ui:Armering}}) kan **ASTM-stavnavn** i stedet vise disse stavene med sine myke metriske A615M-navn: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (de samme stavene; ACI 315-99 tabell 1 lister begge).

### Metriske staver (BS 4449)

| Stav | Diameter (mm) | kg/m | Min. bøyeradius r (mm) | Krokben = endeutstikk P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massen er nominelt tverrsnitt ganger 7850 kg/m³. Radius og endeutstikk er minimumsverdiene i BS 8666:2020 (tabellen over minimumsdimensjoner; den tidligere diameteren er 2r). Fundamenter med BS-staver får krokben lik P og kappelengder etter BS 8666-formlene nedenfor. Når europeisk stål velges i innstillingene, starter nye fundamenter med H16-matter og H20-startstaver i C30/37-betong.

## Kroker

ASTM-staver: standard 90°-kroker etter ACI 318-19 tabell 25.3.1: innvendig bøyediameter 6 db for #3 til #8 og 8 db for #9 til #11, med en rett forlengelse på 12 db forbi bøyen. Krokbenet, målt ytterkant til ytterkant, er halv bøyediameter + db + 12 db.

Hvis krokene på en mattestav ikke får plass i fundamentdybden innenfor overdekningen, forkorter DetailCraft benet slik at det passer, og lister en advarsel.

## Former

DetailCraft lagrer tre former. Bøyelisten skriver dem som DetailCraft-koder, som ACI 315-typer eller som BS 8666-formkoder: velg **Formkoder for bøyeliste** i [Innstillinger for DetailCraft](topic:settings) ({{ui:Armering}}).

| Kode | Form | Dimensjoner |
|---|---|---|
| S | Rett | A = lengde |
| L | Én 90°-bøy | A = hovedben, B = krokben, begge ytterkant til ytterkant |
| U | To 90°-bøyer på samme side | A = midten, B og C = de to bena, ytterkant til ytterkant |

Mattestaver med {{ui:Endekroker}} på er U; uten er de S. Startstaver med {{ui:Krok i bunnen}} på er L; uten er de S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (fig. 10) |
|---|---|---|
| S | 00, L = A | ingen typenummer |
| L | 11, L = A + B − 0.5r − d | ingen typenummer: figuren har ingen stav med én krok |
| U | 21, A og C er bena, B midten: L = A + B + C − r − 2d | Type 2, krokene A og G, rett B |

Med BS 8666- eller ACI 315-koder følger kolonnene A, B og C i bøyelisten den standardens bokstavering (midten av en U er B).

## Kappelengde

For BS 4449-staver er kappelengden BS 8666-formelen for stavens formkode (over). For ASTM-staver er den nøyaktig lengden av stavens senterlinje: de rette delene pluss bøyene som buer med radius lik halv bøyediameter pluss halv stavdiameter. Den regnes ikke ut fra en tabell over bøyefradrag, så den kan avvike noen millimeter fra en liste som bruker en slik tabell.

## Oppsett

- Bunnmatte: staver langs L danner det nedre laget, staver langs B ligger oppå dem. Hvert sett fordeles jevnt over fundamentet innenfor overdekningen, med den avstanden som er oppgitt eller tettere, og minst to staver.
- Startstaver: et rutenett av staver langs L og langs B med avstandene som er oppgitt, sentrert på fundamentet, stående på matten og stikkende opp over toppen med utstikket som er oppgitt. Hver krok peker utover.

## Kontroller

| Kontroll | Regel | Resultat |
|---|---|---|
| Plass til staver | Overdekning på begge sider gir plass til stavene | Avvist hvis ikke |
| Dybde for to lag | Dybde minus to overdekninger rommer begge matlagene | Avvist hvis ikke |
| Startstaver passer | Startrutenettet får plass innenfor overdekningen | Avvist hvis ikke |
| Fri avstand | Minst det største av 25.4 mm og db (ACI 318-19 25.2.1; tilslagsstørrelse kontrolleres ikke) | Advarsel |
| Krokdybde | Krokbenet får plass i dybden innenfor overdekningen | Advarsel, benet forkortet |
| Startkroker | Krokene holder seg utenfor overdekningen | Advarsel |

## Kolonner i bøyelisten

Fanen {{ui:Bøyeliste}} og CSV-filen har disse kolonnene: Posisjonsnummer, Dimensjon, Form, A (mm), B (mm), C (mm), Antall, Kappelengde (mm), Total lengde (m), kg/m, Vekt per stk. (kg), Total vekt (kg), Brukt til. Siste rad summerer antall, lengde og vekt.
