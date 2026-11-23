---
title: Kontroleer staallede volgens 'n ontwerpkode
summary: Maak lastkombinasies uit ASCE 7 of EN 1990, kontroleer elke staal-I-profiel teen AISC 360 of EN 1993-1-1, en sien hoeveel van sy kapasiteit elke lid gebruik. 'n Hulpmiddel totdat 'n ingenieur dit nagesien het.
keywords: ontwerp, ontwerpkontrole, staalontwerp, benutting, utilisation, utilization, kapasiteit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, lastkombinasies, LRFD, Nasionale Bylae, knik, sywaarts-torsiële knik, skuif, buiging, interaksie, struktureel, studente, ingenieur
from: 15685c4e
---

Nadat jy die ontleding laat loop het, verander die {{ui:Ontwerpkontroles}}-blok in die {{ui:Ontleding}}-oortjie sy kragte in 'n uitspraak vir elke staallid: hoeveel van sy kapasiteit die swakste kombinasie gebruik.

:::warning
Dit is 'n **hulpmiddel totdat 'n ingenieur dit nagesien het**. Dit gebruik slegs eerste-orde kragte (geen tweede-orde-effekte nie), kontroleer geen wringing nie, geen slanke (klas 4) dele nie, geen gesweisde profiele nie en geen verbindings nie, en laat weg wat dit nie kan kontroleer nie en sê so. Dit vervang nie 'n ingenieur se kontrole nie, en sy resultate is nie 'n seël nie.
:::

## Kies 'n kode

{{ui:Ontwerpkode}} word saam met die model gestoor; kies een van twee families:

- **ASCE 7 + AISC 360** (VSA, LRFD): die lastkombinasies van ASCE 7-16 §2.3.1 en die lidkontroles van ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): die kombinasies van EN 1990 (Vgl. 6.10, of 6.10a en 6.10b) en die lidkontroles van EN 1993-1-1.

Kies dan die {{ui:Staalgraad}} (A992, A36 en ander; of S235 tot S450, met die laer vloeisterkte bo 40 mm).

## Maak die kombinasies

Gee elke lasgeval sy **soort** (dood, lewend, dak-lewend, sneeu, wind, seismies) in die lysgevallelys, en druk dan {{ui:Maak kombinasies}}. DetailCraft skryf die kode se kombinasies as kombinasies van jou gevalle: elke sterkte-kombinasie wat die kode vir die soorte wat jy het lys, en bruikbaarheidskombinasies vir deurbuiging. Die kombinasies wat jy self getik het, bly; hulle word nie teen die kode gekontroleer nie. 'n Geval van soort {{ui:Ander}} word nie gekombineer nie.

Vir die Eurocode is die faktore die **aanbevole waardes** van EN 1990 Bylae A1 (γG 1.35, γQ 1.5, die ψ-waardes van opgelegde, sneeu- en windlaste) en EN 1993-1-1 (γM0 = γM1 = 1.0). Jou land se Nasionale Bylae verander sommige daarvan: open {{ui:Nasionale Bylae-waardes}}, tik joune in en maak die kombinasies weer. Hulle word in die model gestoor.

## Kontroleer die lede

Druk {{ui:Kontroleer lede}}. Vir elke staal-I-profiel wys die tabel sy **benutting** (aanvraag oor kapasiteit: 100 % is die limiet), of dit slaag, watter kontrole bepalend is, en watter kombinasie. Lede word op die model gekleur: blou min gebruik, groen ongeveer die helfte, oker naby die limiet, rooi daarbo, grys nie gekontroleer nie. Klik op 'n lid se naam om dit te kies.

Die kontroles, met die klousule wat elkeen volg (hulle word in die verslag gelys):

- trek, druk met buig- en wringknik, buiging om albei asse met sywaarts-torsiële knik, skuif, en buiging met normaalkrag;
- deurbuiging van die bruikbaarheidskombinasies teen die {{ui:Buigingsgrens}} wat jy stel (L/360 om mee te begin; 'n projekwaarde, nie 'n kodewaarde nie).

**Lengtes.** Die verstyfde lengte is 'n aandeel van elke ontleedde stuk (1 = nie verstyf nie); verstywings word gelykmatig vanaf die begin geneem. K-faktore vermenigvuldig die lengte vir knik. 'n Verbinding waar 'n ander lid aansluit, verdeel 'n lid, en elke stuk word op sy eie lengte gekontroleer, asof dit daar verstyf is.

## Wat nie gekontroleer word nie

'n Lid wys **nie gekontroleer**, met die rede, in plaas van 'n getal wanneer sy snit nie 'n profiel is wat die kontroles ken nie (hoeke, kanale; reghoekige en ronde buise word gekontroleer as hulle wande kompak is), wanneer dit 'n pasgemaakte (gesweiste) vorm is, of wanneer 'n deel slank is (AISC) of klas 4 (Eurocode) in buiging. 'n Slanke deel in druk laat die drukkontroles weg, en die lid lees *slaag, gedeeltelik gekontroleer*. Die sweise by die verbindings het [hul eie kontrole](topic:weld-checks). Ook nie gebou nie: tweede-orde-effekte, wringing, skuifknik saam met buiging, boutverbindings, moegheid, vuur en seismiese detaillering. Betonlede en seismiese laste het [hul eie kontroles](topic:concrete-and-seismic). Sien [Nog nie gebou nie](topic:not-built-yet).

## Die verslag

{{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} kry die ontwerptabelle sodra jy gekontroleer het: die kodeuitgawes, die instellings en Nasionale Bylae-waardes, benutting per lid, elke klousule wat gebruik is, en vir elke lid die aanvraag, kapasiteit en benutting van elke kontrole in sy bepalende kombinasie.
