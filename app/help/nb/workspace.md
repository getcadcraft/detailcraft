---
title: En omvisning på skjermen
summary: Hver linje, hvert panel og hver fane i DetailCraft med navnet den har på skjermen, og hva den er til for.
keywords: skjerm, oppsett, verktøylinje, paneler, egenskaper, statuslinje, rapporter, grensesnitt, ui, faner
from: 94f81073
---

DetailCraft fyller nettleservinduet under appfeltet. Fra topp til bunn: verktøylinjen, deretter tre kolonner (panelet {{ui:Modell}}, visningen, panelet {{ui:Egenskaper}}), deretter rapportfanene og til slutt statuslinjen.

## Appfeltet

Den smale linjen helt øverst hører til CadCraft-nettstedet, ikke til modellen. Den viser appnavnet og versjonen, en lenke til {{ui:Om DetailCraft}}, {{ui:Hjelp}} (eller {{key:F1}}) for denne hjelpen, {{ui:Lagre for frakoblet bruk}}, knappen for skjermmodus og bryteren {{ui:Papir}} / {{ui:Modell}}.

- {{ui:Lagre for frakoblet bruk}} beholder DetailCraft, 3D-visningen og denne hjelpen i nettleseren, slik at den åpnes uten forbindelse. Den viser {{ui:Klar frakoblet}} når den er lagret; klikk på den da for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. Se [Arbeide offline](common:offline).
- {{ui:Papir}} gir en lys skjerm og {{ui:Modell}} en mørk. 3D-visningen følger med umiddelbart; ingenting i modellen endres.
- Knappen for skjermmodus og {{key:Ctrl+Shift+F}} går gjennom normal, fullskjerm og fullskjerm med linjene skjult. {{key:Ctrl+Shift+F}} bruker Ctrl-tasten på alle datamaskiner, også Mac. Med linjene skjult peker du mot kanten øverst på skjermen (eller trykker på den) for å få dem frem igjen. {{key:Esc}} avslutter fullskjerm.

## Verktøylinjen

Verktøylinjen har fem grupper. Hold musepekeren over en knapp for å se hva den gjør og tasten for den.

| Gruppe | Knapper | Hva de gjør |
|---|---|---|
| {{ui:Fil}} | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Importer IFC}}, {{ui:Lagre}}, {{ui:Eksempel}} | Starter en modell, åpner en lagret `.detailcraft.json`-fil eller en IFC-fil, lagrer en modell, eller åpner eksempelrammen |
| {{ui:Plasser}} | {{ui:Velg}}, {{ui:Bjelke}}, {{ui:Søyle}}, {{ui:Avstivning}}, {{ui:Plate}}, {{ui:Fundament}}, {{ui:Trapp}} | Verktøyet som neste klikk i visningen bruker |
| {{ui:Forbind}} | {{ui:Endeplater}}, {{ui:Fotplate}}, og under {{ui:Mer}}: {{ui:Skjærlasker}}, {{ui:Skjøt}}, {{ui:Knutepunktsplate}}, {{ui:Lignende}} | Legger til en forbindelse på den valgte bjelken, søylen eller avstivningen, eller kopierer den valgte forbindelsen til alle skjøter av samme type |
| {{ui:Rediger}} | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Mer}} | Gå bakover og fremover gjennom endringene; kopier utvalget og lim det inn. {{ui:Mer}} åpner en meny med {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}, hver med sin tast |
| {{ui:Utdata}} | {{ui:IFC}}, {{ui:NC-filer}}, {{ui:BOM}}, {{ui:Verkstedtegning}}, {{ui:Tegninger}}, og under {{ui:Mer}}: {{ui:Bøying}}, {{ui:Vektrapport etter fase}}, {{ui:KISS-fil for produksjonsprogramvare}} | Laster ned en eksport, eller åpner tegningsarkene |

Knapper og menyelementer som ikke kan virke akkurat nå, er nedtonet, og et hover over dem forteller hvorfor. {{ui:Endeplater}} krever en valgt bjelke, {{ui:Fotplate}} en valgt søyle, {{ui:Lignende}} en valgt forbindelse, {{ui:Verkstedtegning}} en modell med deler, {{ui:Kopier}} et valgt stav eller fundament, og {{ui:Lim inn}} at noe er kopiert. Se [Kopier, lim inn og dupliser](topic:copy-paste).

## Modellpanelet (venstre)

- {{ui:Modell}}: modellens {{ui:Navn}}. Det gir navn til hver fil du lagrer eller eksporterer.
- {{ui:Rutenett}}: rutenettlinjene og avstandene mellom dem, og {{ui:Bruk rutenett}}. Se [Sett opp rutenett og nivåer](topic:grids-and-levels).
- {{ui:Nivåer}}: én rad per nivå (navn og kote i mm), {{ui:Legg til nivå}} og {{ui:Bruk nivåer}}.
- {{ui:Egendefinert profil}}: lag din egen parametriske profil. Lukket til du åpner den.
- {{ui:Delenumre}}: alle delemerker i modellen med profil, lengde og antall. Klikk på et merke for å velge den første delen med det.

{{ui:Rutenett}}, {{ui:Nivåer}} og {{ui:Egendefinert profil}} kan skjules: klikk på overskriftene deres.

## Visningen (midten)

Visningen viser modellen i 3D. Over den har visningslinjen tre knapper og en liste:

- {{ui:3D}}: snu fritt rundt modellen.
- {{ui:Plan}}: se rett ned på ett nivå. En liste over nivåer vises ved siden av knappene. Alt mer enn 1,5 m over nivået kuttes bort, slik at du kan se og klikke på nivået tydelig.
- {{ui:Fasade}}: se rett på én bokstavmerket rutenettlinje (Rutenett A, Rutenett B …). En liste over bokstavrutenett vises. Bare stålet innen 1 m fra den linjen vises.
- Tilpass-knappen helt til høyre på visningslinjen zoomer til hele modellen.

Små prikker markerer hvert rutenettskryss på hvert nivå. Når et plasseringsverktøy er på, lyser prikken nærmest pekeren opp, og statuslinjen navngir den, for eksempel «A/2 på Nivå 1». Farger skiller delemultyper: søyler, bjelker, avstivninger og plater har hver sin farge, bolter og stenger en annen, fundamenter er gjennomsiktige, og armeringsjern tegnes som rør. Hull vises som mørke plugger; utklinkinger er kuttet.

Hvordan du snur, panorerer og zoomer: [Beveg deg rundt i 3D-visningen](topic:navigate-3d).

Når modellen er tom, viser visningen en kort liste «Start en modell». Du kan også slippe en lagret modellfil hvor som helst på visningen for å åpne den.

## Egenskapspanelet (høyre)

Hva dette panelet viser, avhenger av hva du gjør, og overskriften sier hva: «Modell», «Plasser en bjelke», «Bjelke b2», «Endeplateforbindelse», «Fotplate», «Fundament F1», «3 valgt» eller «Lim inn».

- **Ingenting valgt:** et sammendrag av modellen (staver, forbindelser, fundamenter, deler, merker, bolter, vekt av stål og armeringsjern, rutenett, nivåer).
- **Et plasseringsverktøy på:** alternativene for neste del (profil, materiale, posisjon, rotasjon, og for søyler {{ui:Opp til}}), et sammendrag av den valgte profilen, og et skjema for {{ui:Legg til etter rutenett}} for å plassere uten å klikke i visningen.
- **En stav valgt:** navnet, profilen, materialet, posisjonen, rotasjonen, koordinatene til de to endene, merkene, kuttlengden og vekten, hullene og utklinkingene, og knapper for forbindelser, verkstedtegningen og {{ui:Slett}}.
- **En forbindelse valgt:** alle innstillinger for plater, bolter og sveis, boltene og sveisen den lager, advarslene, og {{ui:Bruk på lignende}}.
- **Et fundament valgt:** posisjon og størrelse, den nedre matten, startjernene og armeringsmerkene som brukes.
- **Flere ting valgt:** hvor mange staver av hver type, forbindelser og fundamenter, vekten av stålet, og {{ui:Kopier}}, {{ui:Dupliser}} og {{ui:Slett}}.
- **Liming:** hva som ligger på utklippstavlen, og skjemaer for å lime inn med en skrevet forskyvning eller på et rutenettskryss du velger fra lister.

Talfelt virker når du trykker {{key:Enter}} eller forlater feltet. Hver endring er ett trinn du kan angre.

## Rapportfanene (nederst)

- {{ui:Problemer}}: alt DetailCraft ikke kunne bygge eller vil at du skal kontrollere, med en knapp {{ui:Velg}} på hver linje. Fanen viser antallet i parentes.
- {{ui:Stykkliste}}: deler, sammenstillinger, og bolter og ankerstenger, med vekter og en lenke {{ui:Last ned CSV}}. Klikk på et delemerke for å velge den delen.
- {{ui:Bøyeliste}}: hvert armeringsmerke i hvert fundament, med en lenke {{ui:Last ned CSV}}.

Når en fane har fokus, flytter {{key:Left}} og {{key:Right}} mellom fanene.

## Statuslinjen

Linjen langs bunnen har tre deler: rutenettskrysset under pekeren mens du plasserer, den siste meldingen (hva som nettopp skjedde, eller hvorfor noe ble avvist), og løpende summer av deler, bolter, vekt av stål og vekt av armeringsjern. Når en handling ser ut til å ikke gjøre noe, les meldingen her først.

Tittelen på nettleserfanen starter med en prikk (•) så lenge modellen har endringer du ikke har lagret.

## På en smal skjerm

Under omtrent 760 piksler i bredden legges kolonnene oppå hverandre: verktøylinjen, visningen, statuslinjen, {{ui:Egenskaper}}, rapportfanene, og til slutt panelet {{ui:Modell}}. Rull siden for å nå dem. DetailCraft er laget for en skjerm på datamaskin eller bærbar; en telefon fungerer for å se på, ikke for å detaljere.
