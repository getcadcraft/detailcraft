---
title: Utforsk eksempelrammen
summary: Åpne den innebygde rammen med to spenn, og bruk den til å lære hva DetailCraft lager, fra delenummer til NC-filer.
keywords: eksempel, demo, ramme, lære, omvisning, prøv
from: 5c5944dd
---

Eksempelrammen er en liten, komplett modell: alt slags DetailCraft lager, finnes minst én gang. Det er den raskeste måten å lære appen på, og å teste en eksport før den tas i bruk.

## Åpne den

1. Velg {{ui:Eksempel}} i gruppen {{ui:Fil}}.
2. Hvis den gjeldende modellen har ulagrede endringer, velg {{ui:Lagre først}} eller {{ui:Forkast endringer}}.
3. Statuslinjen sier «Eksempelramme: 6 søyler med fotplater, 4 bjelker med endeplater, en avstivning, 7 fundamenter med armering.»

Modellen åpnes som en ny modell kalt «Eksempelramme». Den endrer ikke noe annet, og den har ingenting å angre.

## Hva som er med

- **Rutenett** 1, 2, 3 med 6000 mm, og A, B med 7000 mm. **Nivåer** Nivå 1 på 0 og Nivå 2 på 4000.
- **Seks søyler**, W12x50, fra Nivå 1 til Nivå 2 i hvert skjæringspunkt, hver på en 25 mm fotplate med fire ankerstenger.
- **Fire bjelker**, W16x26, på Nivå 2 langs rutenettlinjene A og B, med stålets topp på nivået og en boltet endeplate flush i begge ender (åtte i alt).
- **En avstivning**, HSS4x4x1/4, fra A/1 på Nivå 1 opp til A/2 på Nivå 2.
- **Seks punktfundamenter**, 2000 x 2000 x 600, ett under hver søyle, med en kroket bunnmatte i begge retninger.
- **Ett fundament til** ved siden av rammen, 2400 x 1800 x 600, med seks kroket startstaver som står opp for en betongpilar.

## Ting å prøve

1. Klikk på en bjelke. Les dens {{ui:Delenummer}}, {{ui:Sammenstilling}}, {{ui:Kappelengde}} og {{ui:Kappet tilbake}}: kappelengden er kortere enn rutenettavstanden på 6000 mm, fordi hver endeplate kutter bjelken tilbake med halvparten av søyledybden pluss platetykkelsen.
2. Klikk på en søyle. Under {{ui:Hull}} lister den hullene endeplatene laget i flensen («8 hull fra forbindelser»; midtsøylene har 16, ett sett i hver flens).
3. I listen {{ui:Delenumre}} til venstre ser du at alle fire bjelkene deler ett merke: de er samme stykke stål. Hjørnesøylene deler også ett merke, selv om hullene deres vender motsatt vei, fordi en søyle snudd ende for ende er samme stykke. Midtsøylene, med hull i begge flensene, får et annet merke.
4. Klikk på en endeplate (eller en av boltene). {{ui:Egenskaper}}-panelet viser innstillingene for plate, bolt og sveis, boltene den lager (med lengden regnet ut fra grepet) og eventuelle advarsler om kantavstand.
5. Åpne fanen {{ui:Stykkliste}}. Deler, sammenstillinger (en bjelke med sine to endeplater er én sammenstilling), og bolter og ankerstenger listes med vekter. Seks delenumre skal vises: c1 (de to midtsøylene) og c2 (de fire hjørnesøylene), begge W12x50 på 3975 mm; b1, fire W16x26-bjelker på 5650 mm; br1, avstivningen; p1, åtte PL20x180-endeplater; og p2, seks PL25x400-fotplater. Festemidlene er 64 bolter 20 x 70 A325 og 24 ankerstenger 20 x 575.
6. Åpne fanen {{ui:Bøyeliste}}. De seks identiske fundamentene deler posisjonsnummer; pilarfundamentet legger til sitt eget.
7. Klikk på avstivningen og se på gruppen {{ui:Utdata}}: {{ui:Verkstedtegning}} er gråtonet, fordi verkstedtegninger så langt bare dekker I-profiler og plater.
8. Velg {{ui:NC-filer}}. Zip-filen holder en fil for hvert I-profil- og platemerke; statuslinjen lister avstivningens merke som ikke skrevet.
9. Velg {{ui:IFC}} og åpne filen i en IFC-viser for å sjekke hvordan den andre programvaren din leser den.

## Bruk den som utgangspunkt

Eksempelet er en vanlig modell. Endre den, gi den nytt navn i feltet {{ui:Navn}}, og lagre den under det nye navnet med {{key:Mod+S}}.
