---
title: Hva som ikke er bygget ennå
summary: Hva denne tidlige DetailCraft-versjonen ikke kan gjøre ennå, og hva du kan gjøre i stedet i dag.
keywords: begrensninger, begrensninger, mangler, veikart, ikke støttet, kommer, planlagt, løsning, gjøremål
from: ea411885
---

DetailCraft er en tidlig versjon. Denne siden lister opp det den ikke gjør ennå, slik at du kan planlegge rundt det. Ingenting her er et løfte om en dato.

## Modellering

| Ikke ennå | I dag, i stedet |
|---|---|
| Dra én ende av en stav (strekke den) | Rediger {{ui:Start}} eller {{ui:Slutt}} under {{ui:Ender (x, y, z mm)}} i panelet {{ui:Egenskaper}} |
| Et valgfilter (bare bjelker, bare én profil) | Dra et vindu, og deretter {{key:Shift}}+klikk for å fjerne deler fra utvalget |
| Lage en matrise av et utvalg; rotere om en skrå akse; speile i et skrått plan | Kopier og lim inn med en forskyvning, eller {{ui:Dupliser}} den; rotasjon og speiling fungerer i plan ([Velg med vindu, flytt, roter, speil, endre mange](topic:select-and-change)) |
| Punkter utenfor rutenettet når du klikker | Plasser på rutenettet, og skriv inn sluttkoordinatene |
| Fasader langs nummererte rutenettlinjer; lagrede visninger; arbeidsplan | Bruk {{ui:3D}}, eller {{ui:Legg til etter rutenett}} |
| Hull tegnet som ekte kutt i 3D-visningen | Hull vises som mørke plugger; de er ekte i alle eksporter |
| Runde eller skrå utklinkninger, andre kutt og beslag | Kvadratiske utklinkninger, kun på I-profiler |
| Hull du legger til i vinkelstål og runde rør | Vinkelhull kommer kun fra [knutepunktsplater](topic:brace-gussets) |
| Imperial-inndata | Skriv inn millimeter (25.4 per tomme) |
| Redigere eller fjerne en egendefinert profil | Legg til en korrigert profil under et nytt navn |

## Trapper

| Ikke ennå | I dag, i stedet |
|---|---|
| Håndlister, repos, tåplater, gitterriste-trinn, spiraltrapper og vinkeltrapper | Kun rette løp; se [Trapper](topic:stairs) |
| Vangeendekutt mot etasjene | Kvadratisk kuttede vanger; kutt dem i verkstedprogramvaren din |

## Forbindelser

DetailCraft lager seks forbindelser: en knutepunktsplate (se [Knutepunktsplater](topic:brace-gussets)); en boltet skjøt mellom to deler av ett I-profil (se [Skjøter](topic:splices)); en gjæring mellom to I-profiler som møtes i en vinkel, kun kuttet eller med boltede endeplater (se [Gjæringsskjøter](topic:mitres)); en flush eller forlenget boltet endeplate fra et nivå, stående I-profil-bjelke til en I-profil-søyleflens eller steg; en skjærtunge fra en bjelke (kvadratisk, skjev eller skrå) til en søyleflens eller steg; og en fotplate under søyle med fire ankerstenger.

| Ikke ennå | I dag, i stedet |
|---|---|
| Skjeve eller skrå endeplater | Bruk [skjærtunger](topic:shear-tabs), som tar skjeve og skrå bjelker |
| Klippvinkler; skjøtefyllplater og skjøter mellom ulike størrelser; hjørneknutepunktsplater sveiset til bjelke og søyle; avfasede knutepunktsplater | Detaljer dem i annen programvare, eller legg til plater og hull for hånd som løse deler; se [Skjøter](topic:splices), [Knutepunktsplater](topic:brace-gussets) |
| Avfasede eller koniske fotavstivere; hull for innstøpingsmasse; fundamentlomme for en skjærtapp | Rektangulære avstivere; se [Fotplater](topic:base-plates) |
| Voutes; sveisede gjæringer med stumpsveis; avstivere på linje med den andre delens flenser | En [gjæring](topic:mitres) med endeplater og stegavstivere, eller en enkel gjæringskutt; legg til andre plater for hånd som løse deler |
| Dimensjonskontroll av forbindelser (styrke) | Kontroller forbindelser med ingeniørens beregninger; DetailCraft advarer bare om kantavstand og avstand mellom hull |
| Langhull | Kun runde hull |

## Analyse

| Ikke ennå | I dag, i stedet |
|---|---|
| Dimensjonskontroller utover stål-I-profiler: rør, vinkelstål, U-profiler, sveisede profiler, slanke eller klasse 4-deler, torsjon, forbindelser; betong: sidesvai-slankhet, torsjon, seismisk detaljering, dekker og vegger | Fanen {{ui:Analyse}} kontrollerer stål-I-profiler etter AISC 360 eller EN 1993-1-1 ([Kontroller stålelementer mot en dimensjoneringsnorm](topic:design-checks)); resten lar den stå merket «ikke kontrollert»; en ingeniør gjennomgår alt |
| Knekkanalyse, vibrasjon | Annen orden er kun P-Delta (elastisk); ingen knekkanalyse (modal, responsspektrum, tidshistorie og pushover finnes i Analyse-fanen) |
| Dimensjonskontroller som en ingeniør har gjennomgått | Inntil da er de en hjelp: kontroller to eller tre elementer for hånd eller i ingeniørens egen programvare før du stoler på dem |
| Gulv-, vind- og snølaster laget for deg ut fra arealer | Legg laster på elementer for hånd, i kN/m eller kN |
| Elementforskyvninger, eksentriske forbindelser, strekk-kun-avstivninger, plater og fundamenter i rammen | Elementer analyseres langs arbeidslinjene sine; avstivninger tar strekk og trykk |

## Armering

| Ikke ennå | I dag, i stedet |
|---|---|
| Runde søyler, spiraler, skrå eller buede bjelker, dekker som ikke er rektangulære, vegger som ikke er rette | Rektangulære bjelker, søyler, dekker og vegger ([Detaljer armert betong](topic:reinforced-concrete)) |
| Staver bøyd inn i en skjøt, forskjøvne skjøter, skjøter plassert der du velger | Skjøter i like avstander, alle staver skjøtet i ett snitt (ACI klasse B, EN α6 = 1.5) |
| Hjørnestaver ved åpninger, gjennomstansningsarmering, seismisk detaljering (ACI 318-19 kapittel 18) | Trimmere på hver side av en åpning; kontroller resten selv |
| Lese et konstruksjonsprograms egne filer | Eksporter IFC fra det: dets IfcReinforcingBar kommer inn som staver ([Staver fra en IFC-fil](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formkoder utover rett, én bøy og en U; ACI 315-typer for rette staver og staver med én krok | De tre formene skrives som BS 8666 00, 11, 21 eller ACI Type 2; se [Armeringsreferanse](topic:rebar-reference) |
| Metriske staver annet enn BS 4449 H8–H40 (f.eks. CSA 10M–35M) | ASTM myk-metrisk navn #10–#36, eller BS-staver |

## Tegninger og eksporter

| Ikke ennå | I dag, i stedet |
|---|---|
| Portrettark, A0 og ark i egen størrelse; oversiktsvisninger på skjeve rutenett | Liggende A4 til A1 og ANSI B til D ([Oversikts- og monteringstegninger](topic:drawings)); skaler PDF-en for å skrive ut på en annen størrelse |
| Sveisesymboler på enkeltdelers verkstedtegninger; symboler annet enn kilsveis | Monteringstegninger har kilsveissymboler; verkstedtegningen gir sveisen som tekst |
| Redigere en tegning i appen | Endre modellen og lag tegningen på nytt; merk opp PDF-en i et PDF-program som MarkupCraft |
| Tegninger som DWG med måltilsettinger, eller modellen i full skala i modellrom med arkene som layouter | Hvert ark er en DWG eller DXF i full størrelse av papiret, med måltilsettinger som linjer og tall ([Oversikts- og monteringstegninger](topic:drawings#download)) |
| NC-hull i runde rør, utklinkninger på vinkelstål og runde rør i NC-filer | Ikke skrevet; se [NC-filfelter](topic:nc1-fields) |
| Avfasinger, merkinger og indre konturer i NC-filer | Ingen i dag |
| Boltehull, bolter, sveiser og fundamenter i USD-eksporten | De er med i IFC-, NC- og stykkliste-utdataene; se [Eksporter stålmodellen som USD](topic:usd) |
| Ta inn forbindelser, fundamenter, langhull eller rektangulære hull og hull i runde rør fra en IFC-fil | {{ui:Importer IFC}} tar inn bjelker, søyler, staver, plater, rutenett, nivåer, runde hull, utklinkninger, bolter og armeringsstaver, og rapporten lister det den lot være igjen |
| Egendefinerte rapportoppsett | De tre CSV-filene |

## Paneler

| Ikke ennå | I dag, i stedet |
|---|---|
| Flytte rapportene nederst ({{ui:Problemer}}, {{ui:Stykkliste}}, {{ui:Bøyeliste}}) | Bare panelene {{ui:Modell}} og {{ui:Egenskaper}} kan flyttes. Se [Ordne panelene](common:arrange-panels) |

## Samarbeid og lagring

| Ikke ennå | I dag, i stedet |
|---|---|
| Skylagring og synkronisering mellom datamaskiner | Lagre `.detailcraft.json`-filer og del dem som vanlige filer. Skylagring er ikke tilgjengelig ennå |
| Andres markører og «redigerer»-merkelapper i en Live TeamWork-økt; rutenett, nivåer og faser slått sammen element for element | Endringer slås fortsatt sammen (rutenett, nivåer og faser flyttes som helhet, den senere endringen vinner); se [Detaljer én konstruksjon sammen, live](topic:work-live) |
| Invitasjonslenker til en Live TeamWork-økt over internett | Bli med med en kort kode på samme nettverk |

## Plattformer

- DetailCraft er laget for skjerm på stasjonær datamaskin, bærbar datamaskin eller nettbrett. Det fungerer også på mobil: modellen beholder skjermen og panelene, og rapporter åpnes som ark fra en linje nederst, men det er lite plass til panelene.
- Frakoblet bruk krever at DetailCraft først er lagret for frakoblet bruk, med {{ui:Lagre for frakoblet bruk}} i appens topplinje. Når den viser {{ui:Klar frakoblet}}, fungerer alt i denne versjonen uten tilkobling. Se [Arbeide frakoblet](common:offline).

Hvis en av disse manglene hindrer arbeidet ditt, si fra via [støttesiden](https://getcadcraft.com/support); det hjelper oss å avgjøre hva vi bygger neste.
