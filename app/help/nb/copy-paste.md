---
title: Kopier, lim inn og dupliser
summary: Velg flere deler, kopier dem med hullene, utklinkningene og forbindelsene, og lim dem inn på et rutenettkryss, med forskyvning, på samme sted eller i en annen fane. Klipp ut, dupliser, slett og velg alle.
keywords: kopier, lim inn, klipp ut, dupliser, utklippstavle, lim inn på samme sted, velg alle, fjern utvalg, flervalg, Shift-klikk, flere, gjenta et felt, kopier en ramme, forskyvning, slett flere, Rediger-menyen, Mer-menyen
from: f25f1829
---

{{ui:Rediger}}-gruppen på verktøylinjen har {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}} og {{ui:Lim inn}}. Menyen {{ui:Mer}} inneholder resten: {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}, hver med sin tast. En knapp eller menypost som ikke kan brukes akkurat nå er nedtonet; hold pekeren over den for å lese hvorfor (for eksempel «ingenting er kopiert ennå»).

Hver innliming, utklipping, duplisering og sletting er ett trinn: ett {{key:Mod+Z}} angrer alt.

## Velg flere deler

- Klikk på en del for å velge den. Hold inne {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) og klikk på flere deler for å legge dem til; klikk på en valgt del på samme måte for å fjerne den.
- {{key:Mod+A}} eller {{ui:Velg alle}} velger alle staver, forbindelser og fundamenter.
- {{key:Esc}} eller {{ui:Fjern utvalg}} fjerner utvalget.

Med flere ting valgt har panelet {{ui:Egenskaper}} overskriften «4 valgt» (eller hvor mange det er), og lister stavene etter type, forbindelsene, fundamentene og total brutto stålvekt, med knappene {{ui:Kopier}}, {{ui:Dupliser}} og {{ui:Slett}}.

## Kopier

1. Velg stavene og fundamentene du vil ha.
2. Velg {{ui:Kopier}} eller trykk {{key:Mod+C}}.

Dette følger med:

- Hver stav hel: profil, materiale, ender, posisjon, rotasjon, navn, hull og utklinkninger. En egendefinert profil den bruker kopieres også.
- Hvert fundament helt: størrelse, betong, bunnarmering og oppstikkende armering.
- Endeplater og fotplater, men bare når hver stav en forbindelse knytter sammen er kopiert: en bjelkes endeplate trenger bjelken og søylen sin. Statuslinjen sier hvor mange forbindelser som ble utelatt. For å utelate forbindelser med vilje, fjern haken for **Kopier endeplater og fotplater sammen med stavene sine** i [DetailCraft-innstillingene](topic:settings).

En forbindelse alene kan ikke kopieres; velg stavene i stedet. For å gi andre skjøter den samme forbindelsen, bruk {{ui:Lignende}} (se [Endeplater](topic:end-plates#copy-it-to-every-similar-joint)).

Kopien blir liggende i denne nettleseren til du kopierer noe annet. En annen DetailCraft-fane eller et annet vindu i samme nettleser kan lime den inn, slik at du kan kopiere en ramme fra én modell og lime den inn i en annen.

## Lim inn på et rutenettkryss

1. Velg {{ui:Lim inn}} eller trykk {{key:Mod+V}}.
2. Flytt pekeren over visningen. En stiplet kontur av kopien følger rutenettkrysset nærmest pekeren.
3. Klikk på et kryss. Kopiens basispunkt (det nederste hjørnet: minste x, y og z av alt som er kopiert) havner der.

De innlimte delene er valgt etterpå, så du kan lime inn igjen et annet sted, eller endre dem. {{key:Esc}} avbryter innlimingen; kopien blir liggende på utklippstavlen. {{ui:Plan}} og {{ui:Fasade}} gjør det lettere å treffe riktig kryss.

:::tip
For å gjenta et felt: velg feltets staver (eller alt med {{key:Mod+A}}), kopier, lim inn, og klikk på krysset ett felt videre fra der kopiens nederste hjørne var.
:::

## Lim inn fra tastaturet

Mens du limer inn, viser panelet {{ui:Egenskaper}} hva som ligger på utklippstavlen, og to skjemaer:

- {{ui:Lim inn med forskyvning (mm, fra originalen)}}: skriv inn x, y og z, og velg {{ui:Lim inn med denne forskyvningen}}. Det starter med forskyvningen fra [DetailCraft-innstillingene](topic:settings).
- {{ui:Lim inn på et rutenettkryss}}: velg et bokstavrutenett, et nummerrutenett og en etasje, og velg {{ui:Lim inn her}}. Basispunktet havner der.

## Lim inn på samme sted

{{ui:Lim inn på samme sted}} ({{key:Mod+Shift+V}}) plasserer kopien nøyaktig på de koordinatene den ble kopiert fra. Bruk den etter {{ui:Klipp ut}}, eller for å hente deler fra en annen modell på samme sted. Hvis originalene fortsatt er der, ligger kopien oppå dem, og statuslinjen advarer deg: flytt kopiene med {{ui:Start}} og {{ui:Slutt}} i {{ui:Egenskaper}}, eller angre.

## Dupliser

{{ui:Dupliser}} ({{key:Mod+D}}) kopierer utvalget og limer det inn med én gang, flyttet av forskyvningen i [DetailCraft-innstillingene](topic:settings) (6000 mm langs x til å begynne med). Det endrer ikke det som ligger på utklippstavlen. Kopiene er valgt etterpå, så et nytt trykk på {{key:Mod+D}} lager neste kopi fra dem.

## Klipp ut og slett

- {{ui:Klipp ut}} ({{key:Mod+X}}) kopierer utvalget og sletter det deretter. Lim det inn der det hører hjemme.
- {{ui:Slett}} ({{key:Delete}} eller {{key:Backspace}}) sletter utvalget. Sletting av en stav sletter også forbindelsene dens.

## Merker etter innliming

Del- og sammenstillingsmerker lagres aldri; DetailCraft nummererer dem på nytt fra modellen etter hver endring ([Hvordan merker gis](topic:mark-rules)). Derfor:

- En kopi som er den samme delen som originalen (samme profil, kvalitet, kuttlengde, hull og utklinkninger) deler originalens merke, og antallet i {{ui:Delenumre}} og materiallisten går opp.
- En kopi som blir forskjellig får et eget merke. En bjelke limt inn uten endeplatene sine, for eksempel, kappes ikke tilbake, så den er en annen del. Merker nummereres på nytt for hele modellen, så andre delers numre kan også endre seg.

Hver innlimt stav, hull, utklinkning, forbindelse og fundament får en ny ID, slik at ingenting i modellen noen gang deles mellom en kopi og originalen.

## Hvis utklippstavlen avvises

Innholdet på utklippstavlen kontrolleres like nøye som en modellfil du åpner: alt som ikke er en gyldig DetailCraft-del fjernes, og statuslinjen sier hva. En utklippstavle fylt av en nyere DetailCraft, eller av noe annet, avvises med en melding, og ingenting limes inn. Hvis et privat vindu ikke kan beholde kopien i nettleserlagringen, fungerer kopien fortsatt i den fanen.
