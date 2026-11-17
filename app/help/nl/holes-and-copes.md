---
title: Gaten en uitsnijdingen toevoegen
summary: Typ gaten in lijven, flenzen en platen, en snijd de flenzen van een balkuiteinde uit, gemeten vanaf het gesneden uiteinde van het onderdeel.
keywords: gat, gaten, boutgat, uitsnijding, inkeping, snijden, coping, boren, ponsen, gat in lijf, gat in flens
from: 33d12398
---

Gaten en uitsnijdingen worden getypt op positie. Ze horen bij de staaf en verplaatsen mee.

Gaten die door verbindingen worden gemaakt (eindplaten, voetplaten) worden voor u toegevoegd; die typt u niet zelf. Ze staan vermeld als "… gaten van verbindingen (bewerk de verbinding)".

## Vanaf waar posities worden gemeten

- **x** loopt langs het onderdeel vanaf zijn **gesneden begin**: het beginuiteinde nadat een verbinding het heeft ingekort. Dus x = 0 is het werkelijke einde van het staal, niet het rasterpunt.
- **y** wordt over het vlak gemeten vanaf het middelpunt van de doorsnede:
   - bij het **lijf**: omhoog (positief) of omlaag vanaf het midden van de hoogte;
   - bij een **flens** of een **plaat**: over de breedte, vanaf de middellijn.
- Het begin van de staaf is het eerste punt dat u aanklikte toen u hem plaatste. De rijen {{ui:Uiteinden (x, y, z mm)}} tonen welk uiteinde welk is.

## Een gat toevoegen

1. Selecteer de staaf.
2. Kies in het vak {{ui:Gaten}} van het paneel {{ui:Eigenschappen}} het {{ui:Vlak}}: {{ui:Lijf}}, {{ui:Bovenflens}} of {{ui:Onderflens}} (voor een I-profiel, U-profiel of rechthoekige buis), of {{ui:Plaatvlak}} (voor een plaat).
3. Typ {{ui:x langs (mm)}}, {{ui:y dwars (mm)}} en {{ui:Diameter (mm)}}. Het formulier begint bij x 100, y 0, diameter 22.
4. Kies {{ui:Gat toevoegen}}.

De statusbalk toont "Gat toegevoegd. x is vanaf het gesneden begin; y vanaf het middelpunt van de doorsnede (lijf: omhoog, flens/plaat: dwars)." Het gat verschijnt in de lijst, en in de weergave als een donkere prop door het vlak.

Om een gat te verwijderen, kiest u de × naast het gat in de lijst.

Hoekprofielen en ronde buizen kunnen nog geen gaten krijgen: hun vak {{ui:Gaten}} zegt dat.

:::note
In de 3D-weergave worden gaten getekend als donkere proppen, niet als snedes door het staal. Het zijn echte gaten in de NC-bestanden, de werkplaatstekeningen en de IFC-export.
:::

Een gat waarvan x voorbij een van de uiteinden van het onderdeel ligt, verschijnt in het tabblad {{ui:Problemen}} als "een gat ligt buiten het einde van het onderdeel".

## Een uitsnijding toevoegen

Uitsnijdingen zijn voor I-profielen: ze snijden aan één uiteinde de bovenste of onderste flens weg (en die hoogte van het lijf), zodat de balk vrij komt van een andere staaf.

1. Selecteer een staaf met een I-profiel.
2. Kies in het vak {{ui:Uitsnijdingen}} het {{ui:Einde}} ({{ui:Begin}} of {{ui:Einde}}) en de {{ui:Zijde}} ({{ui:Boven}} of {{ui:Onder}}).
3. Typ {{ui:Lengte (mm)}} (langs de balk vanaf dat uiteinde) en {{ui:Diepte (mm)}} (omlaag vanaf de bovenkant, of omhoog vanaf de onderkant). Het formulier begint bij 100 x 40.
4. Kies {{ui:Uitsnijding toevoegen}}.

De weergave toont de uitsnijding uit het staal. De lijst leest bijvoorbeeld "Boven bij het begin: 100 x 40". Verwijder hem met zijn ×.

Uitsnijdingen zijn rechthoekig: er is nog geen radius in de binnenhoek.

## Hoe gaten en uitsnijdingen de merken beïnvloeden

Twee onderdelen krijgen alleen hetzelfde onderdeelmerk als hun gaten en uitsnijdingen binnen 1 mm overeenkomen, rekening houdend met het onderdeel dat omgekeerd is. Een gat toevoegen aan één balk van een groep geeft die een nieuw merk. Zie [Merkregels](topic:mark-rules).
