---
title: Wat is nuut in 0.7 (vroeër)
summary: Ontwerpkontroles van staal-I-profiele met lastkombinasies uit ASCE 7 of EN 1990 en lidkontroles na AISC 360 of EN 1993-1-1, USD-uitvoer van die staalmodel, 'n assistentinstrument vir USD, 'n Staal-lint met groot en klein knoppies, paneele wat wegtrek en dialoogbokse wat skuif.
keywords: wat is nuut 0.7, vroeër vrystelling, vrystellingsnotas, veranderingslys, veranderinge, 0.7, weergawe, nuwe kenmerke, ontwerpkontroles, staalontwerp, benutting, benuttingsgraad, lastkombinasies, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nasionale Bylae, dakveranderlike las, deurbuigingsgrens, usd, usda, usdc, usdz, openusd, assistent, mcp, staal-lint, lint, verdeelknoppie, eenhede, kompak, paneele, dialoogbokse, portugees
from: 54a7a8f0
---

Dit is wat in DetailCraft 0.7 verander het, in vergelyking met 0.6. Die raamontleding van 0.6 het nou 'n tweede stap: die staallede word teen 'n ontwerpkode nagegaan.

## Nuut

### Gaffelverbindings (0.7.1)

- **Twee I-profiele wat in 'n hoek ontmoet**, soos 'n portaalknie of 'n nok: kies albei, kies {{ui:Gaffel}} in die {{ui:Koppel}}-groep se {{ui:Meer}}-kieslys, en albei punte word gesny op die vlak wat die hoek halveer. Eindplate wat aanmekaar gebout is en webversterkers is merkblokkies in die nuwe Gaffel-dialoog, waarvan die genommerde velde pas by 'n tekening van jou verbinding wat terwyl jy tik gemaak word. Die gaffel volg die lede wanneer hulle beweeg, en gaan deur na tekeninge, NC-lêers (skuins snitte), IFC en die hoeveelheidsstaat. Sien [Gaffelverbindings](topic:mitres).

### Ontwerpkontroles

- **Lastkombinasies uit die kode.** Op die {{ui:Ontleding}}-oortjie het die nuwe {{ui:Ontwerpkontroles}}-blok 'n {{ui:Ontwerpkode}}: ASCE 7 + AISC 360 (VSA, LRFD) of EN 1990 + EN 1993-1-1 (Eurocode). Gee elke lasgeval sy soort (permanent, veranderlik, die nuwe dak-veranderlike las, sneeu, wind, seismies), druk {{ui:Maak kombinasies}}, en DetailCraft skryf die kode se sterkte- en bruikbaarheidskombinasies van jou gevalle. Die kombinasies wat jy self getik het, bly. Sien [Maak die kombinasies](topic:design-checks#make-the-combinations).
- **Nasionale Bylae-waardes.** Vir die Eurocode begin die faktore by die aanbevole waardes; {{ui:Nasionale Bylae-waardes}} laat jou dié van jou land intik, en hulle word in die model gestoor. Sien [Maak die kombinasies](topic:design-checks#make-the-combinations).
- **Kontroleer lede.** {{ui:Kontroleer lede}} kontroleer elke staal-I-profiel vir trek, druk met knik, buiging met sydelingse wringknik, skuif, buiging met aksiale krag, en deurbuiging teen die {{ui:Deurbuigingsgrens}} wat jy stel. Die tabel wys elke lid se benutting, die kontrole wat bepalend is en sy kombinasie, en die lede word op die model gekleur (blou, groen, okerkleur, rooi, grys vir nie nagegaan nie). Sien [Kontroleer die lede](topic:design-checks#check-the-members).
- **In die verslag.** {{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} voeg die kodeuitgawes, die instellings, benutting per lid en elke klousule wat gebruik is, by. Sien [Die verslag](topic:design-checks#the-report).
- **'n Hulpmiddel totdat 'n ingenieur dit nagesien het.** Dit gebruik slegs eerste-orde-kragte. Buise, hoeke, kanale, gelaste profiele en slanke of klas 4-dele lees "nie nagegaan nie", met die rede; wringing, verbindings en beton word nie nagegaan nie. Sien [Wat nie nagegaan word nie](topic:design-checks#what-is-not-checked).

### USD

- **Voer die staalmodel uit as USD.** {{ui:USD}} in die {{ui:Uitvoer}}-groep skryf die model as {{ui:Teks (.usda)}}, {{ui:Binêr (.usdc)}} of {{ui:Pakket (.usdz)}} vir weergaweprogramme en toneelsamestelling: elke samestelling bevat sy dele, elke deel is sy snit langs sy lengte met uitgesnyde kopse, en elkeen dra sy onderdeelmerk, profiel, graad, lengte en gewig. Boutgate, bouten, sweisnate en voetings is nie in die USD-netwerke nie. Sien [Voer die staalmodel uit as USD](topic:usd).

### KI-assistente

- **USD vir assistente.** Jou eie assistent, verbind deur CadCraft Studio, kan die model as USD uitvoer (`usd_export`), en in Studio dit na 'n vouer skryf wat jy toegelaat het. Sien [Wat 'n assistent kan vra](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Gewysig

- **Die staal-lint** het groot en klein knoppies: 'n groot {{ui:Balk}} langs klein {{ui:Kolom}}, {{ui:Skoor}} en {{ui:Plaat}} op {{ui:Modellering}} › {{ui:Lede}}; 'n groot {{ui:Eindplate}} op {{ui:Detaillering}} › {{ui:Verbindings}}, met {{ui:Skarf}} en {{ui:Kopplaat}} wat een verdeelknoppie deel; 'n groot {{ui:Plak}} op {{ui:Wysig}} › {{ui:Knipbord}}, met {{ui:Plak op dieselfde plek}} en {{ui:Dupliseer}} agter die groep se pyltjie. {{ui:Vervaardiging}} › {{ui:Uitruil}} het {{ui:Voer USD uit}} langs IFC. Die ander kieslysstyle lyk soos voorheen. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse#the-three-styles).
- [Ontleed die raam](topic:frame-analysis) verwys nou na die ontwerpkontroles, en sy kombinasies kan deur die kode gemaak word.

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die VSA-landmeetvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af en hulle verlaat die eenheidslyste; merk een met 'n ster en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. DetailCraft se eie blokkies volg die lyste nog nie: sy lengtes word steeds in millimeter getik. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneele wat wegtrek.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (raakskerms en fone hou hul groot knoppies). Elke syPaneel het 'n slanke titelbalk: sleep dit om die paneel te koppel of los te maak, laat dit op 'n ander paneel se balk val om een raam as oortjies te deel, speld dit vas sodat dit na die rand wegskuif, of versteek dit en haal dit terug van die rand af. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoogbokse skuif.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik die titelbalk om dit weer in die middel te plaas. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, druk 'n stel uit, kontroleer tekeninge, stel vrae oor 'n model, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk word deur ons toetse herspeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulponderwerpe is in Engels.
- **CadCraft Studio** sê hoekom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat's nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kodeteken nie.** Kodetekening en die Microsoft Store-pakket is na 0.8 geskuif, omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Laat tog loop}}. Op 'n Mac, die eerste keer, regsklik CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen blokkie lees hulle nog nie.
- **Die ontwerpkontroles is nog nie deur 'n ingenieur nagesien nie.** Ons toetse vergelyk hulle met gedrukte tabelwaardes en formules wat met die hand uitgewerk is, nog nie met 'n ontwerpgids se uitgewerkte voorbeelde nie. Tot 'n hersiening is hulle 'n hulpmiddel: kontroleer lede wat saak maak met die hand.
- Die ontwerpkontroles gebruik eerste-orde-kragte (geen tweede-orde-effekte nie) en kontroleer slegs I-profiele. Nie gebou nie: buise, hoeke, kanale, gelaste profiele, slanke (AISC) of klas 4 (Eurocode) dele in buiging, wringing, skuifknik saam met buiging, verbindings, vermoeiing, brand, seismiese detaillering en beton. 'n Slanke deel in druk laat die drukkontroles weg, en die lid lees "slaag, gedeeltelik nagegaan".
- Raamontleding is steeds eerste-orde en lineêr, en dit is nog nie deur 'n ingenieur op 'n regte werk probeer nie.
- Boutgate, bouten, sweisnate en voetings is nie in die USD-uitvoer nie.

Alles anders is in [Wat is nog nie gebou nie](topic:not-built-yet).
