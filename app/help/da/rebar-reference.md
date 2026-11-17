---
title: Armeringsreference
summary: Jerndimensioner, krogmål, formkoder, tilskæringslængder og de kolonner i bukkelisten, som DetailCraft bruger.
keywords: armering, jerndimensioner, krog, bøjediameter, formkode, tilskæringslængde, bukkeliste, jernliste, astm a615, aci 318
from: 1583535e
---

## Jerndimensioner

Fra ASTM A615/A615M tabel 1 (betegnelser i tommer og pund). Millimeter og kg/m er eksakte omregninger af de offentliggjorte tomme- og lb/ft-værdier. Listerne viser hver dimension som fx "#5 (15.9 mm)".

| Jern | Diameter (mm) | Masse (kg/m) | Areal (mm²) | Indvendig bøjediameter | 90°-krogben, ydre mål (mm) |
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

I [DetailCraft-indstillinger](topic:settings) ({{ui:Armering}}) kan **ASTM-jernnavne** i stedet vise disse jern under deres bløde metriske A615M-navne: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (de samme jern; ACI 315-99 tabel 1 lister begge).

### Metriske jern (BS 4449)

| Jern | Diameter (mm) | kg/m | Min. bøjeradius r (mm) | Krogben = endeudhæng P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massen er det nominelle tværsnit gange 7850 kg/m³. Radius og endeudhæng er minimumsværdierne i BS 8666:2020 (dens tabel over minimumsmål; den tidligere diameter er 2r). Fundamenter med BS-jern får krogben på P og tilskæringslængder efter BS 8666-formlerne nedenfor. Hvis du vælger europæisk stål i indstillingerne, starter nye fundamenter med H16-armeringsnet og H20-studsjern i C30/37-beton.

## Krog

ASTM-jern: standardkroge på 90° fra ACI 318-19 tabel 25.3.1: indvendig bøjediameter 6 db for #3 til #8 og 8 db for #9 til #11, med en lige forlængelse på 12 db efter bøjningen. Krogbenet, målt ydre mål til ydre mål, er halvdelen af bøjediameteren + db + 12 db.

Hvis krogen på et netjern ikke passer i fundamentets dybde inden for dæklaget, forkorter DetailCraft benet, så det passer, og viser en advarsel.

## Former

DetailCraft gemmer tre former. Bukkelisten udskriver dem som DetailCraft-koder, som ACI 315-typer eller som BS 8666-formkoder: vælg **Formkoder til bukkeliste** i [DetailCraft-indstillinger](topic:settings) ({{ui:Armering}}).

| Kode | Form | Mål |
|---|---|---|
| S | Lige | A = længde |
| L | Én 90°-bøjning | A = hovedben, B = krogben, begge ydre mål til ydre mål |
| U | To 90°-bøjninger på samme side | A = midten, B og C = de to ben, ydre mål til ydre mål |

Netjern med {{ui:Endekroge}} slået til er U; uden er S. Studsjern med {{ui:Krog i bunden}} slået til er L; uden er S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (fig. 10) |
|---|---|---|
| S | 00, L = A | intet typenummer |
| L | 11, L = A + B − 0.5r − d | intet typenummer: figuren har ikke et jern med én krog |
| U | 21, A og C er benene, B er midten: L = A + B + C − r − 2d | Type 2, krogene A og G, lige B |

Med BS 8666- eller ACI 315-koder følger bukkelistens kolonner A, B og C den pågældende standards bogstaver (midten af en U er B).

## Tilskæringslængde

For BS 4449-jern er tilskæringslængden BS 8666-formlen for jernets formkode (ovenfor). For ASTM-jern er den den præcise længde af jernets midterlinje: de lige dele plus bøjningerne som buer med halv bøjediameter plus halv jerndiameter. Den beregnes ikke ud fra en tabel over bøjningsfradrag, så den kan afvige med få millimeter fra en bukkeliste, der bruger et sådant.

## Layout

- Nederste netlag: jern langs L danner det nederste lag, og jern langs B ligger oven på dem. Hvert sæt fordeles jævnt over fundamentet inden for dæklaget, med den afstand du angiver eller tættere, og med mindst to jern.
- Studsjern: et gitter af jern langs L og langs B med de afstande, du angiver, centreret på fundamentet, stående på nettet og stikkende op over toppen med det udhæng, du angiver. Hver krog peger udad.

## Kontroller

| Kontrol | Regel | Resultat |
|---|---|---|
| Plads til jern | Dæklag på begge sider efterlader plads til jernene | Afvist, hvis ikke |
| Dybde til to lag | Dybden minus to dæklag rummer begge netlag | Afvist, hvis ikke |
| Studsjern passer | Studsgitteret passer inden for dæklaget | Afvist, hvis ikke |
| Fri afstand | Mindst den største af 25.4 mm og db (ACI 318-19 25.2.1; tilslagsstørrelsen kontrolleres ikke) | Advarsel |
| Krogdybde | Krogbenet passer i dybden inden for dæklaget | Advarsel, ben forkortet |
| Studskroge | Krogene holder sig uden for dæklaget | Advarsel |

## Kolonner i bukkelisten

Fanen {{ui:Bukkeliste}} og dens CSV har disse kolonner: Jernmærke, Størrelse, Form, A (mm), B (mm), C (mm), Antal, Tilskæringslængde (mm), Samlet længde (m), kg/m, Vægt pr. stk. (kg), Samlet vægt (kg), Anvendt til. Den sidste række summerer antal, længde og vægt.
