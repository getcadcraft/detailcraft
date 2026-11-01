---
title: En omvisning i skjermen
summary: Hver linje, hvert panel og hver fane i DetailCraft ved navnet på skjermen, og hva hver av dem er til for.
keywords: skjerm, oppsett, verktøylinje, paneler, egenskaper, statuslinje, rapporter, grensesnitt, brukergrensesnitt, faner
from: 454f74fd
---

DetailCraft fyller nettleservinduet under appfeltet. Ovenfra og ned: verktøylinjen, deretter tre kolonner (panelet {{ui:Modell}}, visningen, panelet {{ui:Egenskaper}}), deretter rapportfanene, deretter statuslinjen.

## Appfeltet

Den slanke linjen helt øverst tilhører CadCraft-nettstedet, ikke modellen. Den viser appnavnet og versjonen, en lenke til {{ui:Om DetailCraft}}, {{ui:Hjelp}} (eller {{key:F1}}) for denne hjelpen, {{ui:Lagre for frakoblet bruk}}, skjermmodusknappen og bryteren {{ui:Papir}} / {{ui:Modell}}.

- {{ui:Lagre for frakoblet bruk}} beholder DetailCraft, 3D-visningen og denne hjelpen i nettleseren din slik at den åpnes uten forbindelse. Den sier {{ui:Klar frakoblet}} når den er lagret; klikk den da for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. Se [Arbeide frakoblet](common:offline).
- {{ui:Papir}} gir en lys skjerm og {{ui:Modell}} en mørk. 3D-visningen følger med en gang; ingenting i modellen din endres.
- Skjermmodusknappen og {{key:Ctrl+Shift+F}} bytter mellom normal, fullskjerm og fullskjerm med linjene skjult. {{key:Ctrl+Shift+F}} bruker Control-tasten på alle datamaskiner, også en Mac. Med linjene skjult peker du på toppkanten av skjermen (eller trykker der) for å få dem tilbake. {{key:Esc}} forlater fullskjerm.

## Verktøylinjen

Verktøylinjen har fem grupper. Hold pekeren over en knapp for å se hva den gjør og tasten.

| Gruppe | Knapper | Hva de gjør |
|---|---|---|
| {{ui:Fil}} | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Importer IFC}}, {{ui:Lagre}}, {{ui:Eksempel}} | Begynne en modell, åpne en lagret `.detailcraft.json` eller en IFC-fil, lagre en, eller åpne eksempelrammen |
| {{ui:Plasser}} | {{ui:Velg}}, {{ui:Bjelke}}, {{ui:Søyle}}, {{ui:Avstivning}}, {{ui:Plate}}, {{ui:Fundament}}, {{ui:Trapp}} | Verktøyet neste klikk i visningen bruker |
| {{ui:Forbind}} | {{ui:Endeplater}}, {{ui:Fotplate}}, og i {{ui:Mer}}: {{ui:Skjærlasker}}, {{ui:Skjøt}}, {{ui:Knutepunktsplate}}, {{ui:Lignende}} | Legge en forbindelse til den valgte bjelken, søylen eller avstivningen, eller kopiere den valgte forbindelsen til hver skjøt som ligner |
| {{ui:Rediger}} | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Mer}} | Gå tilbake og fram gjennom redigeringer; kopiere utvalget og lime det inn. {{ui:Mer}} åpner en meny med {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}, hver med sin tast |
| {{ui:Utdata}} | {{ui:IFC}}, {{ui:NC-filer}}, {{ui:BOM}}, {{ui:Verkstedtegning}}, {{ui:Tegninger}}, og i {{ui:Mer}}: {{ui:Bøying}}, {{ui:Vektrapport etter fase}}, {{ui:KISS-fil for produksjonsprogramvare}} | Laste ned en eksport, eller åpne tegningsarkene |

Knapper og menyvalg som ikke kan virke akkurat nå, er grået ut, og å holde pekeren over en sier hvorfor. {{ui:Endeplater}} trenger en valgt bjelke, {{ui:Fotplate}} en valgt søyle, {{ui:Lignende}} en valgt forbindelse, {{ui:Verkstedtegning}} en valgt I-profil- eller platedel, {{ui:Kopier}} en valgt stav eller et valgt fundament, og {{ui:Lim inn}} noe kopiert. Se [Kopier, lim inn og dupliser](topic:copy-paste).

## Modellpanelet (til venstre)

- {{ui:Modell}}: modellens {{ui:Navn}}. Det navngir hver fil du lagrer eller eksporterer.
- {{ui:Rutenett}}: rutenettlinjene og avstandene deres, og {{ui:Bruk rutenett}}. Se [Sett opp rutenett og nivåer](topic:grids-and-levels).
- {{ui:Nivåer}}: én rad per nivå (navn og kote i mm), {{ui:Legg til nivå}} og {{ui:Bruk nivåer}}.
- {{ui:Egendefinert profil}}: lag ditt eget parametriske tverrsnitt. Lukket til du åpner det.
- {{ui:Delenumre}}: hvert delenummer i modellen med profil, lengde og antall. Klikk et nummer for å velge den første delen med det.

{{ui:Rutenett}}, {{ui:Nivåer}} og {{ui:Egendefinert profil}} kan foldes sammen: klikk overskriftene.

## Visningen (midten)

Visningen viser modellen i 3D. Over den har visningslinjen tre knapper og en liste:

- {{ui:3D}}: dreie fritt rundt modellen.
- {{ui:Plan}}: se rett ned på ett nivå. En liste over nivåer dukker opp ved siden av knappene. Alt mer enn 1,5 m over nivået skjæres bort slik at du kan se og klikke nivået tydelig.
- {{ui:Fasade}}: se rett på én bokstavmerket rutenettlinje (Rutenett A, Rutenett B …). En liste over bokstavrutenett dukker opp. Bare stålet innenfor 1 m fra den linjen vises.
- Tilpass-knappen i høyre ende av visningslinjen zoomer for å vise hele modellen.

Små prikker markerer hvert rutenettkryss på hvert nivå. Mens et plasseringsverktøy er på, lyser prikken nærmest pekeren opp, og statuslinjen navngir den, for eksempel «A/2 ved Nivå 1». Farger skiller stavtypene: søyler, bjelker, avstivninger og plater har hver sin farge, bolter og stenger en annen, fundamenter er gjennomsiktige og armering tegnes som rør. Hull vises som mørke plugger; utklinkninger er kuttet.

Hvordan du dreier, panorerer og zoomer: [Beveg deg i 3D-visningen](topic:navigate-3d).

Når modellen er tom, viser visningen en kort liste «Start en modell». Du kan også slippe en lagret modellfil hvor som helst på visningen for å åpne den.

## Egenskapspanelet (til høyre)

Hva dette panelet viser, avhenger av hva du gjør, og overskriften sier hva: «Modell», «Plasser en bjelke», «Bjelke b2», «Endeplateforbindelse», «Fotplate», «Fundament F1», «3 valgt» eller «Lim inn».

- **Ingenting valgt:** en oppsummering av modellen (staver, forbindelser, fundamenter, deler, numre, bolter, stål- og armeringsvekt, rutenett, nivåer).
- **Et plasseringsverktøy på:** valgene for neste del (profil, materiale, posisjon, rotasjon, og for søyler {{ui:Opp til}}), en oppsummering av den valgte profilen og et skjema {{ui:Legg til etter rutenett}} for å plassere uten å klikke i visningen.
- **En stav valgt:** navn, profil, materiale, posisjon, rotasjon, koordinatene til de to endene, numrene, kappelengde og vekt, hullene og utklinkningene, og knapper for forbindelser, verkstedtegningen og {{ui:Slett}}.
- **En forbindelse valgt:** hver plate-, bolt- og sveiseinnstilling, boltene og sveisen den lager, advarslene og {{ui:Bruk på lignende}}.
- **Et fundament valgt:** posisjon og størrelse, bunnmatten, støpeskjøtearmeringen og stangnumrene det bruker.
- **Flere ting valgt:** hvor mange staver av hver type, forbindelser og fundamenter, stålvekten og {{ui:Kopier}}, {{ui:Dupliser}} og {{ui:Slett}}.
- **Liming:** hva som ligger på utklippstavlen, og skjemaer for å lime inn med en innskrevet forskyvning eller på et rutenettkryss du velger fra lister.

Tallfelt trer i kraft når du trykker {{key:Enter}} eller forlater feltet. Hver endring er ett trinn du kan angre.

## Rapportfanene (nederst)

- {{ui:Problemer}}: alt DetailCraft ikke kunne bygge eller vil at du skal kontrollere, med en knapp {{ui:Velg}} på hver linje. Fanen viser antallet i parentes.
- {{ui:Stykkliste}}: deler, sammenstillinger, og bolter og ankerstenger, med vekter og en lenke {{ui:Last ned CSV}}. Klikk et delenummer for å velge den delen.
- {{ui:Bøyeliste}}: hvert stangnummer i hvert fundament, med en lenke {{ui:Last ned CSV}}.

Med en fane i fokus flytter {{key:Left}} og {{key:Right}} mellom fanene.

## Statuslinjen

Linjen langs bunnen har tre deler: rutenettkrysset under pekeren under plassering, siste melding (hva som nettopp skjedde, eller hvorfor noe ble avvist), og løpende summer for deler, bolter, stålvekt og armeringsvekt. Når en handling ser ut til å ikke gjøre noe, les meldingen her først.

Nettleserfanens tittel begynner med en prikk (•) mens modellen har endringer du ikke har lagret.

## På en smal skjerm

Under omtrent 760 piksler bredde stables kolonnene: verktøylinje, visning, statuslinje, {{ui:Egenskaper}}, rapportfaner og til slutt panelet {{ui:Modell}}. Rull siden for å nå dem. DetailCraft er lagt ut for en stasjonær eller bærbar skjerm; en telefon fungerer for å se, ikke for å detaljere.
