---
title: Hvad der ikke er lavet endnu
summary: Hvad denne tidlige DetailCraft-version ikke kan endnu, og hvad du gør i stedet i dag.
keywords: begrænsninger, mangler, køreplan, ikke understøttet, kommer, planlagt, løsning, todo
from: ea411885
---

DetailCraft er en tidlig version. Denne side lister, hvad den ikke kan endnu, så du kan planlægge derefter. Intet her er et løfte om en dato.

## Modellering

| Ikke endnu | I stedet, i dag |
|---|---|
| Trække i den ene ende af en stålprofil (strække den) | Redigér {{ui:Start}} eller {{ui:Slut}} under {{ui:Ender (x, y, z mm)}} i panelet {{ui:Egenskaber}} |
| Et valgfilter (kun bjælker, kun én profil) | Træk et vindue, og klik derefter med {{key:Shift}} for at tage dele ud |
| Array af et valg; rotation om en skrå akse; spejling i et skråt plan | Kopiér og indsæt det med et forskud, eller {{ui:Duplikér}} det; rotation og spejling virker i plan ([Vælg med vindue, flyt, roter, spejl, ændr mange](topic:select-and-change)) |
| Punkter uden for gitteret, når du klikker | Placér på gitteret, og skriv derefter slutkoordinaterne |
| Højder langs nummererede gitterlinjer; gemte visninger; arbejdsplaner | Brug {{ui:3D}}, eller {{ui:Tilføj efter gitter}} |
| Huller tegnet som rigtige snit i 3D-visningen | Huller vises som mørke propper; de er rigtige i alle eksporter |
| Afrundede eller skrå udskæringer, andre snit og beslag | Kun firkantede udskæringer på I-profiler |
| Huller, du tilføjer til vinkelstål og runde rør | Vinkelhuller kommer kun fra [afstivningssamleplader](topic:brace-gussets) |
| Indtastning i imperiale enheder | Skriv millimeter (25.4 pr. tomme) |
| Redigering eller fjernelse af en egen profil | Tilføj en rettet profil under et nyt navn |

## Trapper

| Ikke endnu | I stedet, i dag |
|---|---|
| Rækværk, repos, tåplader, trinroster, spiral- og vinkeltrapper | Kun lige løb; se [Trapper](topic:stairs) |
| Endeskæringer af trappevanger mod etagedækkene | Lige afskårne trappevanger; skær dem i din værkstedssoftware |

## Forbindelser

DetailCraft bygger seks forbindelser: en afstivningssamleplade (se [Afstivningssamleplader](topic:brace-gussets)); en boltet stødsamling mellem to stykker af samme I-profil (se [Stød](topic:splices)); en gering mellem to I-profiler, der mødes i en vinkel, kun skåret eller med boltede endeplader (se [Geringer](topic:mitres)); en flugtende eller forlænget boltet endeplade fra en vandret, lodret I-profilbjælke til en I-profilsøjles flange eller steg; en forskydningsflig fra en bjælke (lige, skæv eller skrå) til en søjleflange eller steg; og en søjlefodplade med fire ankerbolte.

| Ikke endnu | I stedet, i dag |
|---|---|
| Skæve eller skrå endeplader | Brug [forskydningsflige](topic:shear-tabs), som kan tage skæve og skrå bjælker |
| Vinkelbeslag; fyldplader i stød og stød mellem forskellige størrelser; hjørnesamleplader svejst til bjælke og søjle; affasede samleplader | Detaljér dem i anden software, eller tilføj plader og huller i hånden som løse dele; se [Stød](topic:splices) og [Afstivningssamleplader](topic:brace-gussets) |
| Affasede eller koniske fodstivere; injekteringshuller; fundamentlommen til en forskydningstap | Rektangulære stivere; se [Fodplader](topic:base-plates) |
| Forstærkninger; svejste geringer med stumpsvejsning; stivere på linje med den anden profils flanger | En [gering](topic:mitres) med endeplader og steg-stivere, eller en almindelig geringsskæring; tilføj andre plader i hånden som løse dele |
| Kontrol af forbindelsers dimensionering (styrke) | Kontrollér forbindelser med din ingeniørs beregninger; DetailCraft advarer kun om kantafstand og afstand |
| Langhuller | Kun runde huller |

## Analyse

| Ikke endnu | I stedet, i dag |
|---|---|
| Dimensioneringskontrol ud over stål-I-profiler: rør, vinkelstål, U-profiler, svejste profiler, slanke eller klasse 4-dele, torsion, forbindelser; beton: søjleslankhed, torsion, seismisk detaljering, plader og vægge | Fanen {{ui:Analyse}} kontrollerer stål-I-profiler efter AISC 360 eller EN 1993-1-1 ([Kontrollér stålprofiler mod en dimensioneringsnorm](topic:design-checks)); resten markeres "ikke kontrolleret"; en ingeniør gennemser det hele |
| Knækningsanalyse, vibrationer | Anden orden er kun P-Delta (elastisk); ingen knækningsanalyse (modal, responsspektrum, tidshistorie og pushover findes i fanen {{ui:Analyse}}) |
| Dimensioneringskontroller, som en ingeniør har gennemgået | Indtil da er de en hjælp: kontrollér to eller tre stykker i hånden eller i din ingeniørs egen software, før du stoler på dem |
| Gulv-, vind- og snelaster lavet for dig ud fra arealer | Læg laster på profilerne i hånden, i kN/m eller kN |
| Forskydninger af profiler, excentriske samlinger, kun-træk-afstivninger, plader og fundamenter i rammen | Stålprofiler analyseres på deres arbejdslinjer; afstivninger bærer træk og tryk |

## Armering

| Ikke endnu | I stedet, i dag |
|---|---|
| Runde søjler, spiraler, skrå eller buede bjælker, plader der ikke er rektangulære, vægge der ikke er lige | Rektangulære bjælker, søjler, plader og vægge ([Detaljér armeret beton](topic:reinforced-concrete)) |
| Jern bøjet ind i en overlapning, forskudte overlapninger, overlapninger du selv placerer | Overlapninger med lige intervaller, alle jern overlappet i ét snit (ACI klasse B, EN α6 = 1.5) |
| Hjørnejern ved åbninger, gennemstansningsarmering, seismisk detaljering (ACI 318-19 kapitel 18) | Afstivende jern på hver side af en åbning; kontrollér resten selv |
| Læsning af en konstruktionsberegningssoftwares egne filer | Eksportér IFC fra den: dens IfcReinforcingBar indlæses som jern ([Jern fra en IFC-fil](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formkoder ud over lige, én bøjning og en U; ACI 315-typer for lige jern og jern med én krog | De tre former udskrives som BS 8666 00, 11, 21 eller ACI Type 2; se [Armeringsreference](topic:rebar-reference) |
| Metriske jern andre end BS 4449 H8–H40 (fx CSA 10M–35M) | ASTM-softmetriske navne #10–#36, eller BS-jern |

## Tegninger og eksport

| Ikke endnu | I stedet, i dag |
|---|---|
| Stående ark, A0 og ark i egen størrelse; oversigtsvisninger på skæve gitre | Liggende A4 til A1 og ANSI B til D ([Oversigts- og samlingstegninger](topic:drawings)); skalér PDF'en for at udskrive i en anden størrelse |
| Svejsesymboler på værkstedstegninger for enkelte dele; symboler andre end kantsveisninger | Samlingstegninger har kantsvejsesymboler; værkstedstegningen angiver svejsningen som tekst |
| Redigering af en tegning i appen | Ændr modellen, og lav tegningen igen; markér PDF'en i en PDF-app, fx MarkupCraft |
| Tegninger som DWG med målsætningsobjekter, eller modellen i fuld skala i modelrum med arkene som layouts | Hvert ark er en DWG eller DXF i fuld størrelse af papiret, med mål som linjer og tal ([Oversigts- og samlingstegninger](topic:drawings#download)) |
| NC-huller i runde rør, udskæringer på vinkelstål og runde rør i NC-filer | Ikke skrevet; se [NC-filens felter](topic:nc1-fields) |
| Affasninger, markeringer og indre konturer i NC-filer | Ingen i dag |
| Boltehuller, bolte, svejsninger og fundamenter i USD-eksporten | De er med i IFC-, NC- og stykliste-outputtene; se [Eksportér stålmodellen som USD](topic:usd) |
| Indlæsning af forbindelser, fundamenter, langhuller eller rektangulære huller og huller i runde rør fra en IFC-fil | {{ui:Importér IFC}} indlæser bjælker, søjler, profiler, plader, gitre, niveauer, runde huller, udskæringer, bolte og armeringsjern, og dens rapport lister, hvad den har udeladt |
| Brugerdefinerede rapportlayouts | De tre CSV-filer |

## Paneler

| Ikke endnu | I stedet, i dag |
|---|---|
| Flytning af rapporterne nederst ({{ui:Problemer}}, {{ui:Stykliste}}, {{ui:Bukkeliste}}) | Kun panelerne {{ui:Model}} og {{ui:Egenskaber}} kan flyttes. Se [Arrangér panelerne](common:arrange-panels) |

## Samarbejde og lagring

| Ikke endnu | I stedet, i dag |
|---|---|
| Skylagring og synkronisering mellem computere | Gem `.detailcraft.json`-filer, og del dem som enhver anden fil. Skylagring er ikke tilgængelig endnu |
| Andre personers markører og "redigerer"-etiketter i en Live TeamWork-session; gitre, niveauer og faser flettet ét element ad gangen | Redigeringer flettes stadig (gitre, niveauer og faser flyttes samlet, og den senere ændring vinder); se [Detaljér én konstruktion sammen, live](topic:work-live) |
| Invitationslinks til en Live TeamWork-session over internettet | Deltag med en kort kode på samme netværk |

## Platforme

- DetailCraft er lavet til en stationær skærm, bærbar computer eller tablet. Det virker også på en telefon: modellen beholder skærmen og panelerne, og rapporter åbnes som ark fra en bjælke nederst, men der er lidt plads til panelerne.
- Offline-brug kræver, at DetailCraft først er gemt til offline brug, med {{ui:Gem til offline brug}} i appbjælken; når der står {{ui:Klar offline}}, virker alt i denne version uden forbindelse. Se [Arbejde offline](common:offline).

Hvis en af disse mangler blokerer dit arbejde, så fortæl os det via [supportsiden](https://getcadcraft.com/support); det hjælper os med at beslutte, hvad vi bygger næste gang.
