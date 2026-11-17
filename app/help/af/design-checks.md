---
title: Kontroleer staallede volgens 'n ontwerpkode
summary: Maak lasskombinasies uit ASCE 7 of EN 1990, kontroleer elke staal-I-vorm teen AISC 360 of EN 1993-1-1, en sien hoeveel van sy kapasiteit elke lid gebruik. 'n Hulpmiddel totdat 'n ingenieur dit hersien het.
keywords: ontwerp, ontwerpkontrole, staalontwerp, benutting, kapasiteit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, lasskombinasies, LRFD, Nasionale Bylae, knik, sywaartse wringknik, skuif, buiging, interaksie, struktureel, studente, ingenieur
from: 66b6d545
---

Nadat jy die ontleding uitgevoer het, verander die {{ui:Ontwerpkontroles}}-blok in die {{ui:Ontleding}}-oortjie sy kragte in 'n oordeel vir elke staallid: hoeveel van sy kapasiteit die ergste kombinasie gebruik.

:::warning
Dit is 'n **hulpmiddel totdat 'n ingenieur dit hersien het**. Dit gebruik net eerste-orde-kragte (geen tweede-orde-effekte nie), kontroleer geen wringing, geen slanke (klas 4) dele, geen gesweisde vorms en geen verbindings nie, en dit laat weg wat dit nie kan kontroleer nie en sê so. Dit vervang nie 'n ingenieur se kontrole nie, en sy resultate is nie 'n goedkeuringsmerk nie.
:::

## Kies 'n kode

{{ui:Ontwerpkode}} word saam met die model gestoor; kies een van twee families:

- **ASCE 7 + AISC 360** (VSA, LRFD): die lasskombinasies van ASCE 7-16 §2.3.1 en die lidkontroles van ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): die kombinasies van EN 1990 (vergelyking 6.10, of 6.10a en 6.10b) en die lidkontroles van EN 1993-1-1.

Kies dan die {{ui:Staalgraad}} (A992, A36 en ander; of S235 tot S450, met die laer vloeisterkte bo 40 mm).

## Maak die kombinasies

Gee elke lasgeval sy **soort** (dood, lewendig, dak-lewendig, sneeu, wind, seismies) in die lysgevallys, en druk dan {{ui:Maak kombinasies}}. DetailCraft skryf die kode se kombinasies as kombinasies van jou gevalle: elke sterkte-kombinasie wat die kode lys vir die soorte wat jy het, en diensbaarheidskombinasies vir deurbuiging. Die wat jy self ingetik het, bly; hulle word nie teen die kode nagegaan nie. 'n Geval van soort {{ui:Ander}} word nie gekombineer nie.

Vir die Eurocode is die faktore die **aanbevole waardes** van EN 1990 Bylae A1 (γG 1.35, γQ 1.5, die ψ-waardes van opgelegde, sneeu- en windbelastings) en EN 1993-1-1 (γM0 = γM1 = 1.0). Jou land se Nasionale Bylae verander sommige daarvan: maak {{ui:Nasionale Bylae-waardes}} oop, tik joune in, en maak die kombinasies weer. Hulle word in die model gestoor.

## Kontroleer die lede

Druk {{ui:Kontroleer lede}}. Vir elke staal-I-vorm wys die tabel sy **benutting** (vraag oor kapasiteit: 100 % is die grens), of dit slaag, watter kontrole beheer, en watter kombinasie. Lede word op die model gekleur: blou min gebruik, groen ongeveer die helfte, oker naby die grens, rooi daarbo, grys nie nagegaan nie. Klik op 'n lid se naam om dit te kies.

Die kontroles, met die klousule wat elkeen volg (hulle word in die verslag gelys):

- trek, druk met buigings- en wringknik, buiging om albei asse met sywaartse wringknik, skuif, en buiging met aksiale krag;
- deurbuiging van die diensbaarheidskombinasies teen die {{ui:Deurbuigingsgrens}} wat jy stel (L/360 om mee te begin; 'n projekwaarde, nie 'n kodewaarde nie).

**Lengtes.** Die verstyfde lengte is 'n aandeel van elke ontleedde stuk (1 = onverstyf); verstyfings word vanaf die begin eweredig gespasieer geneem. K-faktore vermenigvuldig die lengte vir knik. 'n Verbinding waar 'n ander lid aansluit, verdeel 'n lid, en elke stuk word op sy eie lengte nagegaan, soos daar verstyf.

## Wat nie nagegaan word nie

'n Lid wys **nie nagegaan nie**, met die rede, in plaas van 'n getal wanneer sy snit nie 'n I-vorm is wat die kontroles ken nie (buise, hoeke, kanale), wanneer dit 'n pasgemaakte (gesweisde) vorm is, of wanneer 'n deel in buiging slank (AISC) of klas 4 (Eurocode) is. 'n Slanke deel in druk laat die drukkontroles weg, en die lid lees *slaag, gedeeltelik nagegaan*. Ook nie gebou nie: tweede-orde-effekte, wringing, skuifknik saam met buiging, verbindings, vermoeidheid, brand- en seismiese detaillering. Betonlede en seismiese laste het [hul eie kontroles](topic:concrete-and-seismic). Sien [Nog nie gebou nie](topic:not-built-yet).

## Die verslag

{{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} kry die ontwerptabelle nadat jy nagegaan het: die kodeuitgawes, die instellings en Nasionale Bylae-waardes, benutting per lid, elke klousule wat gebruik is, en vir elke lid die vraag, kapasiteit en benutting van elke kontrole in sy beherende kombinasie.
