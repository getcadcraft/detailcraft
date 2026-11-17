---
title: Monteringsplan og film
summary: Legg inn en kran og dens lastdiagram, se hvert løft kontrollert mot diagrammet i fasenes rekkefølge, og lagre en monteringsfilm som spilles av frakoblet på en hvilken som helst telefon.
keywords: montasje, kran, løft, lastdiagram, radius, kapasitet, rigging, rekkefølge, film, animasjon, telefon, frakoblet, løfteplan
from: fa7b0133
---

Fanen {{ui:Montasje}} gjør modellen om til en monteringsrekkefølge og kontrollerer hvert løft mot en kran du beskriver. Den planlegger ut fra tall du skriver inn. Den er ikke en løfteplan: rigger og kranfører lager den.

## Beskriv kranen

Velg {{ui:Legg til en kran}}, og fyll inn:

- **Kransenter X og Y:** hvor kranen står, i millimeter.
- **Høyeste krok:** den høyeste kroken kan løftes, i millimeter. 0 betyr at ingen grense kontrolleres.
- **Kroksett og rigging som ikke er i diagrammet:** kilogram som trekkes fra diagrammet før en last legges til, når diagrammet ditt ikke allerede gjør det.
- **Lastdiagram:** én rad per linje, radius i meter og deretter kapasiteten i kilogram. Kopier radene fra kranens eget diagram.

Diagrammet leses slik et lastdiagram leses: kapasiteten som står oppført for en radius gjelder ut til den radiusen. En last på en radius mellom to rader får kapasiteten til den **lengre** raden, aldri en verdi mellom dem. Innenfor den første raden gjelder den første radens kapasitet. Utenfor den siste raden kan kranen ikke løfte i det hele tatt. Radiusen som teller for et løft er den største av plukkradius og settradius.

En andre kran legges til på samme måte. Hvert løft går til den første kranen som kan ta det innenfor marginen din.

## Hva planen gjør

- Ett løft per sammenstilling: en bjelke med endeplatene sine, en søyle med fotplaten sin, en trapp.
- Rekkefølgen følger fasene først, deretter etasje for etasje: søyler, bjelkene de bærer, avstivninger, plater, trapper. En del løftes aldri før det som bærer den.
- Hvert løft viser vekten (modellens brutto vekt, pluss {{ui:Rigging lagt til hver vekt}}), radiusen, andelen av diagrammet det bruker og minuttet det starter.
- {{ui:Størstedelen av diagrammet et løft kan bruke}} er sikkerhetsmarginen din. Et løft over den merkes **Over marginen din**; over diagrammet, **Over diagrammet**; utenfor diagrammets siste radius, **Forbi diagrammet**; og en del høyere enn kroken, **Kroken for lav**.

Hull og utklinkninger trekkes ikke fra vektene, og bolter er dekket av riggingprosenten.

## Problemer

Hvert løft som er over, forbi, for høyt eller satt før det som bærer det, vises i {{ui:Problemer}}-panelet. En bjelke uten forbindelse som bærer den, listes som trenger midlertidig støtte.

## Lagre filmen

{{ui:Lagre film}} skriver én HTML-fil. Åpne den i en hvilken som helst nettleser, også på telefon, uten nettverk og uten konto: spill av og pause, dra linjen til et hvilket som helst minutt, snu modellen med en finger, klyp for å zoome. Bildeteksten navngir hvert løft, dets vekt, radius og andel av diagrammet. Modellen tegnes som enkle bokser: den viser rekkefølgen og løftene, ikke de faktiske profilene.

Den samme tabellen lagres som CSV med knappen {{ui:CSV}}. Kranen og diagrammet lagres i modellfilen, og hver endring er ett angrertrinn.
