---
title: Tilføj fodplader og ankerbolte
summary: Sæt en svejst fodplade med fire ankerbolte under en søjle, angiv dens mål, og kopiér den til alle lignende søjler.
keywords: fodplade, ankerbolte, ankerstænger, nedspændingsbolte, søjlefod, fundamentsbolte, tilsvarende
from: 619ebc64
---

En fodpladeforbindelse placerer en plade under søjlen, skærer søjlen kortere med pladetykkelsen, svejser de to sammen og tilføjer fire ankerbolte gennem huller i pladen.

:::warning
Størrelserne er startværdier, ikke en konstruktion. DetailCraft kontrollerer ikke bæreevne, boltenes styrke eller indstøbningsdybde.
:::

## Tilføj en fodplade

1. Vælg {{ui:Vælg}} ({{key:V}}) og klik på en søjle. Den skal være lodret.
2. Vælg {{ui:Fodplade}} i gruppen {{ui:Forbind}}, eller {{ui:Tilføj fodplade}} i panelet {{ui:Egenskaber}}.
3. Statuslinjen siger »Fodplade tilføjet med fire ankerbolte.« Den nye forbindelse er valgt.

En søjle kan have én fodplade. Hvis den allerede har en, siger statuslinjen »Denne søjle har allerede en fodplade.«

## Ændr den

Vælg fodpladen (klik på pladen eller en ankerbolt). Under {{ui:Plade, bolte og svejsning (mm)}}:

| Indstilling | Standard | Hvad den gør |
|---|---|---|
| Pladetykkelse | 25 | Søjlen forkortes med så meget |
| Pladelængde | 450 | Langs søjlens dybde |
| Pladebredde | 400 | På tværs af søjlen |
| Ankerboltdiameter | 20 | Størrelse på ankerbolten |
| Hulldiameter | 33 | Hul i pladen |
| Boltkvalitet | F1554 Gr 36 | Ankerboltens kvalitet, som tekst |
| Boltafstand (langs dybde) | 350 | Mellem boltcentre, langs pladens længde |
| Boltafstand (på tværs) | 300 | Mellem boltcentre, på tværs |
| Ankerboltens fremspring over pladen | 100 | Fra pladens top til ankerboltens top |
| Ankerboltens indstøbning under pladen | 450 | Fra pladens underside og ned i betonen |
| Hjørnesvejsning | 8 | Rundt om søjlefoden |
| Plademateriale | A36 | Tekst |
| Mørtelfuge | 0 | Mellemrum mellem betonens top og pladens underside |
| Forstærkninger | Ingen | Vælg Ingen, 2 (i flugt med livet) eller 4 (også vinkelret på det); se nedenfor |
| Forstærkningens tykkelse, højde | 12, 150 | |
| Forskydningstappens dybde | 0 | Hvor langt tappen rækker under pladen; 0 = ingen tap |
| Forskydningstappens tykkelse, bredde | 25, 150 | |
| Pladeskiver | Ingen | På hver ankerbolt, eller ingen |
| Skivens størrelse, tykkelse | 0, 0 | 0 = minimum fra AISC Design Guide 1 for ankerbolten |

Ankerboltlængde = indstøbning + mørtelfuge + pladetykkelse + fremspring. Med standardværdierne er det 575 mm.

## Grundlæggende detaljer: mørtel, forstærkninger, forskydningstap, skiver

Alle fire er fra på en ny fodplade, og på fodplader fra modeller lavet før DetailCraft 0.4.

- **Mørtelfuge.** Pladen sidder så langt over betonens top, og ankerboltene bliver længere med samme mål. AISC Design Guide 1 (2.10) foreslår 1 in. på et færdigt gulv og 1½ til 2 in. på et fundament eller en pille; mere ved store plader og plader med forskydningstap.
- **Forstærkninger.** Lodrette plader svejst til søjlen og pladen, fra søjlens flade ud til pladens kant, som rektangler (endnu ingen afskæring eller affasning). **2** står i flugt med livet, ud over hver flange; **4** tilføjer to vinkelret på livet, mellem flangerne, ud til pladens sider. På en hulprofilsøjle står de midt på hver flade. Hver er svejst til søjlen og pladen på begge sider.
- **Forskydningstap.** En plade svejst hele vejen rundt under fodpladen, i flugt med søjlens dybde og centreret. DetailCraft advarer, hvis den ikke er dybere end mørtelfugen. Den skærer ikke lommen i fundamentet; derfor lader [kollisionstjekket](topic:clash-check) tappen og fundamentet ude af det.
- **Pladeskiver.** En kvadratisk pladeskive på hver ankerbolt, liggende på fodpladen, og opført i søjlens samling som løs (leveres med søjlen, ikke svejst: Design Guide 1, 2.6). Med størrelse og tykkelse 0 tager DetailCraft minimumsskiven fra AISC Design Guide 1, 2. udg., tabel 2.3, for ankerbolten; en metrisk ankerbolt får den næste størrelse i tommer op (en M20-ankerbolt får rækken for 7/8 in.: 2½ in. × 5/16 in.). Egenskabspanelet viser den anvendte størrelse. Skivens hul er ankerboltens diameter + 1/16 in.: det er DetailCraft's valg, tabellen angiver ikke et. DetailCraft advarer, hvis ankerboltene måske ikke stikker langt nok ud til skiven og en møtrik (fremspring mindre end skivens tykkelse + ankerboltens diameter).

Design Guide 1, tabel 2.3, anbefaler også hullet i pladen: 1-5/16 in. til en ¾ in. ankerbolt, 1-9/16 in. til ⅞ in., 1-13/16 in. til 1 in. DetailCraft ændrer ikke din hulstørrelse.

Advarsler vises også, når boltehullerne ligger tættere end 1.2 × hulets diameter på pladekanten, når ankerboltene ligger inden for søjlens omrids, eller når pladen er mindre end søjlen.

## Kopiér til lignende søjler

1. Vælg fodpladen.
2. Vælg {{ui:Anvend på lignende (n)}}, eller {{ui:Tilsvarende}} i menuen {{ui:Mere}} i gruppen {{ui:Forbind}}.
3. Hver lodret søjle med samme profil, som ikke har en fodplade og ikke står på en anden søjle, får en kopi.

## Fodplader og fundamenter

En fodplade kræver ikke et fundament, og et fundament kender ikke fodpladen ovenover: ankerboltene er ikke bundet til fundamentets armering. Placér fundamenter med {{ui:Punktfundament}}; se [Placér punktfundamenter med armering](topic:footings-and-rebar).
