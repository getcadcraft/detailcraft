---
title: Wat's nuut in 0.7
summary: Ontwerpkontroles van staal-I-profiele met lasttoestande uit ASCE 7 of EN 1990 en ledkontroles na AISC 360 of EN 1993-1-1, USD-uitvoer van die staalmodel, 'n assistenthulpmiddel vir USD, 'n Staal-lint met groot en klein knoppies, paneele wat wegruim en dialoë wat beweeg.
keywords: wat's nuut, release notes, veranderinge, 0.7, weergawe, nuwe kenmerke, ontwerpkontroles, staalontwerp, benutting, lasttoestande, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokode, Nasionale Bylae, dakvrag, deurbuigingsgrens, usd, usda, usdc, usdz, openusd, assistent, mcp, staal-lint, lint, gesplete knoppie, eenhede, kompak, paneel, dialoë, Portugees
from: 17d1e0bb
---

Dit is wat in DetailCraft 0.7 verander het, in vergelyking met 0.6. Die raamontleding van 0.6 het nou 'n tweede stap: die staallede word teen 'n ontwerpkode nagegaan.

## Nuut

### Gaffelverbindings (0.7.1)

- **Twee I-profiele wat teen 'n hoek ontmoet**, soos 'n portaalknie of 'n nokbalk: kies albei, kies {{ui:Gaffel}} in die {{ui:Koppel}}-groep se {{ui:Meer}}-kieslys, en albei punte word gesny op die vlak wat die hoek halveer. Eindplate wat aan mekaar gebout is en webversterkers is merkblokkies in die nuwe Gaffel-dialoog, waarvan die genommerde velde ooreenstem met 'n tekening van jou verbinding wat terwyl jy tik gemaak word. Die gaffel volg die lede wanneer hulle beweeg, en dra oor na tekeninge, NC-lêers (skuins snitte), IFC en die materiaallys. Sien [Gaffelverbindings](topic:mitres).

### Ontwerpkontroles

- **Lasttoestande uit die kode.** In die {{ui:Ontleding}}-oortjie het die nuwe {{ui:Ontwerpkontroles}}-blok 'n {{ui:Ontwerpkode}}: ASCE 7 + AISC 360 (VSA, LRFD) of EN 1990 + EN 1993-1-1 (Eurokode). Gee elke lasgeval sy soort (dooie, lewendige, die nuwe dak-lewendige, sneeu, wind, seismies), druk {{ui:Maak kombinasies}}, en DetailCraft skryf die kode se sterkte- en bruikbaarheidskombinasies van jou gevalle. Die kombinasies wat jy self getik het, bly. Sien [Maak die kombinasies](topic:design-checks#make-the-combinations).
- **Nasionale Bylae-waardes.** Vir die Eurokode begin die faktore by die aanbevole waardes; {{ui:Nasionale Bylae-waardes}} laat jou dié van jou land tik, en hulle word in die model gestoor. Sien [Maak die kombinasies](topic:design-checks#make-the-combinations).
- **Kontroleer lede.** {{ui:Kontroleer lede}} kontroleer elke staal-I-profiel vir trek, druk met knik, buiging met sywaartse-torsieknik, skuif, buiging met aksiale krag, en deurbuiging teen die {{ui:Deurbuigingsgrens}} wat jy stel. Die tabel wys elke lid se benutting, die kontrole wat bepalend is en sy kombinasie, en die lede word op die model gekleur (blou, groen, okker, rooi, grys vir nie nagegaan nie). Sien [Kontroleer die lede](topic:design-checks#check-the-members).
- **In die verslag.** {{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} voeg die kodeuitgawes, die instellings, benutting per lid en elke klousule wat gebruik is, by. Sien [Die verslag](topic:design-checks#the-report).
- **'n Hulpmiddel totdat 'n ingenieur dit nagesien het.** Dit gebruik net eerste-orde kragte. Buise, hoeke, kanale, gelaste vorms en slanke of klas 4-dele lees "nie nagegaan nie", met die rede; wringing, verbindings en beton word nie nagegaan nie. Sien [Wat nie nagegaan word nie](topic:design-checks#what-is-not-checked).

### USD

- **Voer die staalmodel uit as USD.** {{ui:USD}} in die {{ui:Uitvoer}}-groep skryf die model as {{ui:Teks (.usda)}}, {{ui:Binêr (.usdc)}} of {{ui:Pakket (.usdz)}} vir weergaveprogramme en toneelsamestelling: elke samestelling hou sy dele, elke deel is sy snit wat langs sy lengte loop met uitsnydings gesny, en elk dra sy deelmerk, profiel, graad, lengte en gewig. Boutgate, bute, lasse en fondasies is nie in die USD-meshes nie. Sien [Voer die staalmodel uit as USD](topic:usd).

### KI-assistente

- **USD vir assistente.** Jou eie assistent, gekoppel deur CadCraft Studio, kan die model as USD uitvoer (`usd_export`), en in Studio dit skryf na 'n vouer wat jy toegelaat het. Sien [Wat 'n assistent kan vra](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Gewysigd

- **Die staal-lint** het groot en klein knoppies: 'n groot {{ui:Balk}} langs klein {{ui:Kolom}}, {{ui:Skoor}} en {{ui:Plaat}} op {{ui:Modellering}} › {{ui:Lede}}; 'n groot {{ui:Eindplate}} op {{ui:Detaillering}} › {{ui:Verbindings}}, met {{ui:Skarf}} en {{ui:Kopplaat}} wat een gesplete knoppie deel; 'n groot {{ui:Plak}} op {{ui:Wysig}} › {{ui:Knipbord}}, met {{ui:Plak op dieselfde plek}} en {{ui:Dupliseer}} agter die groep se pyltjie. {{ui:Vervaardiging}} › {{ui:Uitruil}} het {{ui:Voer USD uit}} langs IFC. Die ander kieslysstyle lyk soos voorheen. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse#the-three-styles).
- [Ontleed die raam](topic:frame-analysis) wys nou na die ontwerpkontroles, en sy kombinasies kan deur die kode gemaak word.

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die VSA-opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidlyste; ster een en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. DetailCraft se eie blokkies volg die lyste nog nie: sy lengtes word steeds in millimeter getik. Sien [Eenhede, getikte waardes en die eenheidlyste](common:unit-lists).
- **'n Digter uitleg en paneele wat wegruim.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en fone hou hul groot knoppies). Elke paneel het 'n slanke titelbalk: sleep dit om die paneel vas te maak of te laat sweef, laat dit val op 'n ander paneel se balk om 'n raam as oortjies te deel, pen dit vas om na die rand weg te gly, of versteek dit en bring dit terug vanaf die rand. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik op die titelbalk om dit weer te sentreer. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n deelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk herhaal deur ons toetse. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker hersien is nie. Hulphoofstukke is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat's nuut-kaart terug te bring wat jy gesluit het totdat 'n nuwer vrystelling beskikbaar is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kodeonderteken nie.** Kodeondertekening en die Microsoft Store-pakket het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Hardloop tog}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-weergawe nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen blokkie lees hulle nog nie.
- **Die ontwerpkontroles is nog nie deur 'n ingenieur hersien nie.** Ons toetse vergelyk hulle met gedrukte tabelwaardes en formules wat met die hand uitgewerk is, nog nie met 'n ontwerpgids se uitgewerkte voorbeelde nie. Tot 'n hersiening is hulle 'n hulpmiddel: kontroleer lede wat saak maak met die hand.
- Die ontwerpkontroles gebruik eerste-orde kragte (geen tweede-orde-effekte nie) en kontroleer slegs I-profiele. Nie gebou nie: buise, hoeke, kanale, gelaste vorms, slanke (AISC) of klas 4 (Eurokode) dele in buiging, wringing, skuifknik tesame met buiging, verbindings, moegheid, vuur, seismiese detaillering en beton. 'n Slanke deel in druk laat die drukkontroles weg, en die lid lees "slaag, gedeeltelik nagegaan".
- Raamontleding is steeds eerste-orde en lineêr, en dit is nog nie deur 'n ingenieur op 'n werklike projek probeer nie.
- Boutgate, bute, lasse en fondasies is nie in die USD-uitvoer nie.

Alles anders is in [Wat nog nie gebou is nie](topic:not-built-yet).
