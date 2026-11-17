---
title: Ontleed die raamwerk
summary: Kragte, reaksies en defleksies van die balke, kolomme en verbande soos geteken, onder lasgevalle en kombinasies wat jy stel. 'n Ontledingshulpmiddel, nie 'n kodekontrole nie; die ontwerpkontroles is 'n aparte stap.
keywords: ontleding, strukturele ontleding, raamwerkontleding, styfheidsmetode, ladings, lasgeval, kombinasie, doodlading, lewendelading, eie gewig, reaksies, buigmoment, skuif, normaalkrag, defleksie, vervormde vorm, steune, skarnier, vas, vrystelling, verslag, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Die oortjie {{ui:Ontleding}} onderaan vind die kragte in elke balk, kolom en verband van die model, die reaksies by die kolombasisse en hoe ver die lede buig, vir die ladings wat jy gee.

:::warning
Dit is 'n **ontledingshulpmiddel, nie 'n kodekontrole nie**. Die ontleding pas geen ontwerpkode toe nie: dit dimensioneer nie lede nie, kontroleer nie kapasiteite of verbindings nie, en kies nie lasfaktore nie. 'n Ingenieur kontroleer die model, sy ladings en steune, en besluit wat die getalle beteken. Vir lidkontroles na ASCE 7 / AISC 360 of EN 1990 / EN 1993-1-1, sien [Kontroleer staallede na 'n ontwerpkode](topic:design-checks), 'n aparte stap wat ook 'n hulpmiddel is.
:::

## Laat dit loop

1. Open die oortjie {{ui:Ontleding}}.
2. Kies een of meer lede in die aansig, kies 'n {{ui:Geval}}, 'n {{ui:Belasting}} en 'n {{ui:Rigting}}, tik die waarde en druk {{ui:Voeg belasting by}}. 'n Lading wat langs 'n lid versprei is, is in kN/m, 'n puntlading in kN. {{ui:Af (swaartekrag)}} is die gewone een.
3. Druk {{ui:Voer ontleding uit}}.

Die tabel lys elke lid se grootste normaalkrag N, skuiwe Vz en Vy, buigmomente My en Mz, wringing T en sy defleksie, grootste moment eerste; klik op 'n lid se naam om dit te kies. Onder hulle is die reaksies by elke steun. {{ui:Op die model}} teken die vervormde vorm, of een aksie as 'n diagram langs elke lid met sy grootste waarde by sy plek geskryf. Die resultate verouder sodra die model verander: voer dit weer uit.

Elke las, geval en instelling is een ontdoen-stap ({{key:Mod+Z}}) en word in die modellêer gestoor.

## Lasgevalle en kombinasies

Die ontleding begin met drie: **Dood** (die lede se eie gewig, uit hul geteekende profiele en 7850 kg/m³), **Lewend** (leeg) en **Dood + lewend**. Voeg self lasgevalle by (wind, sneeu …) en kombinasies: 'n kombinasie tel die lasgevalle op met die faktore wat jy tik. Die ontleding is lineêr, so elke geval word een keer opgelos en kombinasies is somme. Tik die faktore self, of kies 'n ontwerpkode en laat {{ui:Maak kombinasies}} die kode se kombinasies skryf ([Kontroleer staallede na 'n ontwerpkode](topic:design-checks)).

## Waaruit die raamwerk bestaan

- Balke, kolomme en verbande, elk op sy werklyn (die lyn wat jy geteken het), met die afdeling se werklike eienskappe uitgewerk uit sy buitelyn. Plate, trappe, fondasies en bouts is nie deel van die raamwerk nie.
- 'n Lid word gesplits waar 'n ander lid se punt daarop land, so 'n balk wat in 'n kolom op halfhoogte inkom, verbind daar met die kolom.
- **Kolombasisse**: vas (die begin) of skarnier (vasgehou en teen draai vasgehou, maar vry om te draai). 'n Voetplaat maak altyd 'n steun.
- **Balkeindes**: 'n eindplaat is styf, 'n skuiftab is skarnier. {{ui:Balkeindes sonder verbinding}} stel die res. **Verbande** is by albei punte skarnier.
- Kies een lid om sy punte, of 'n kolom se basis, 'n eie reël te gee.
- Staal oral: E = 200 GPa, G = 77 GPa.

As die raamwerk kan beweeg sonder om iets te buig — 'n meganisme, soos skarnierbasisse sonder verband in een rigting — stop die lopie en sê waar en in watter rigting. Hou dit daar met 'n steun, 'n styf verbinding of 'n verband.

## Tekens

N > 0 is trek. My > 0 plaas die lid se plaaslike −z-kant in trek: 'n balk wat onder swaartekrag sak, het My > 0. Mz > 0 plaas die plaaslike −y-kant in trek. Defleksie word gemeet vanaf die reguit lyn tussen die lid se punte. 'n Lid se plaaslike z wys op (vir 'n kolom: langs X); sy plaaslike asse draai met die lid se rotasie.

## Die verslag

{{ui:Verslag (PDF)}} en {{ui:Verslag (CSV)}} bevat alles: die aannames waarop die raamwerk gebou is, afdelings, gevalle en kombinasies, en dan vir elke geval en kombinasie die reaksies (met die somme van ladings en reaksies, wat balanseer), die lidkragte en die verplasings, en 'n omhulsel van elke geval. {{ui:Voer uit as CraftScript}} skryf dieselfde raamwerk as 'n skrip vir PartCraft se Skrip-werkruimte, waar die biblioteekfunksie `frame3d` dit stap vir stap in leesbare kode oplos.

## Metode

Die direkte styfheidsmetode, lineêr en eerstevlak tensy jy Tweede orde (P-Delta) merk: tweeknoop-balk-kolomme met aksiale, wringings- en twee buigstyfhede (geen skuifvervorming, geen wringingsvervorming nie), eindvrystellings deur statiese kondensasie, en ladings langs lede deur die lede se eie vormfunksies. Die antwoorde word nagegaan teen die klassieke handboekgevalle (kantilevers, eenvoudige, vaste en deurlopende balke, 'n portaalraamwerk, 'n rooster in wringing, 'n vakwerk).

**Tweede orde (P-Delta).** Merk *Tweede orde (P-Delta)* langs Voer uit: elke kombinasie word weer opgelos met die lede se aksiale kragte wat op die vervormde raamwerk werk (elke lid in 4 stukke gesny, sodat die buiging van 'n lid tussen sy punte ook tel), totdat die aksiale kragte stabiliseer. Die resultaatlyn gee die getal deurgange en hoeveel die swaai gegroei het; die momente, defleksies, ontwerpkontroles en verslag gebruik dan hierdie resultate. Bo die raamwerk se elastiese kritieke lading stop die lopie en sê dit so. Dit is elasties met klein rotasies, slegs buigend, sonder styfheidsvermindering of nosionele ladings (nie die AISC-direkte ontledingsmetode op sigself nie); plate, mure en styf vloere bly eerstevlak.

**Natuurlike frekwensies (eindige elemente).** Die blok {{ui:Eindige elemente: natuurlike frekwensies}} onder die resultate vind die laagste modusse van dieselfde model met die eindige-element-enjin: balke met hul eindvrystellings, plate en mure as plat vierknoopskille, styf vloere, en steune. Kies hoeveel modusse (3, 6, 10 of 20) en die plaatelement (die vierknoopskil vir dik of dun plate, of die dunplaatelement) en druk {{ui:Vind die frekwensies}}. Die tabel gee elke modus se frekwensie in Hz, sy periode in sekondes en sy effektiewe modale massa langs X, Y en Z as 'n aandeel van die massa wat kan beweeg. {{ui:Wys op die model}} teken enige modus soos die vervormde vorm geteken word. Massa is die materiaaldigtheid maal die volume: ladings voeg nie massa by nie, en 'n materiaal sonder digtheid het geen. Die verslag (PDF, CSV) dra die tabel. Dit is slegs elasties en klein-beweging, en geen seismiese of windlading word hier uit 'n kode gemaak nie. Nie 'n kodekontrole nie; jou ingenieur hersien die resultate.

**Responsspektrum, tydgeskiedenis en stootanalise.** Drie meer blokke sit onder die frekwensies en gebruik dieselfde eindige-element-model. Massa vir al hulle is die materiaaldigtheid plus die afwaartse ladings van die gevalle wat jy merk, elk maal 'n faktor wat jy tik (byvoorbeeld Dood teen 1 en Lewend teen die aandeel wat jy as massa tel).

{{ui:Responsspektrum}} lees elke modus af van 'n spektrum wat jy gee (’n tabel van periode en versnelling, of die ASCE 7-vorm uit SDS, SD1 en TL; die knoppie {{ui:Gebruik die Seismiese blok se waardes}} kopieer dié uit die Seismiese blok), en kombineer die modusse deur CQC, SRSS, die tien-persent-reël of 'n absolute som, en voeg dan die X-, Y- en Z-rigtings saam (100 % + 30 % of SRSS). Dit gee die basisskuif, verdiepingsdrywings, lid-eindkragte en 'n modustabel wat waarsku wanneer die gebruikte modusse minder as 90 % van die massa dra. Jy kan die resultate met 'n faktor skaal of tot 'n basisskuif wat jy tik; die blok bereken daardie basisskuif nooit self nie. Resultate het geen teken nie.

{{ui:Tydgeskiedenis}} laat 'n grondversnelling loop deur modale superposisie (presies vir die rekord se reguit lyne tussen punte) of deur direkte integrasie (Newmark-gemiddelde versnelling met Rayleigh-demping). Die invoer is 'n self gemaakte sinus of puls (altyd as sinteties benoem), 'n rekord wat jy plak, of 'n tekslêer wat jy oopmaak (tyd en versnelling, een versnelling per reël met 'n stap, of 'n PEER-styl lêer met 'n DT=-kop; in g of m/s²). Dit gee die dakverplasing en basisskuif teenoor tyd, die drywing van elke vlak, en die omhulsel van die lid-eindkragte. Modelle met 'n baie lang rekord hou dit slegs vir die sessie.

{{ui:Stootanalise}} stoot die dak sywaarts in klein stappe (patroon soos die eerste modus, of eenvormig), met plastiese skarniere aan die punte van lede wat 'n I-vorm het. 'n Skarnier swig by die plastiese moment, wat daal soos die aksiale krag groei (uitgewerk uit die geteekende vorm, vulsels geïgnoreer); verharding is opsioneel, P-delta is opsioneel, en 'n swaartekragkombinasie kan eers toegepas word. Dit gee die kapasiteitskromme (basisskuif teenoor dakverplasing), die eerste skarnier, en die toestand en plastiese rotasie van elke skarnier. {{ui:Laat die nie-lineêre tydgeskiedenis loop}} laat dieselfde skarniere onder die Tydgeskiedenis-blok se rekord loop op klein modelle. Skarniere vorm slegs aan lid-punte (plaas 'n knoop waar een binne 'n span moet vorm); 'n lid wat aan albei punte vrygestel is, kry geen; vloei en knik van verbande word nie gemodelleer nie; plate en mure bly elasties; geen aanvaardingskriteria word gegee nie. Nie 'n kodekontrole nie; jou ingenieur hersien die resultate. Die instellings word saam met die model gestoor, en die verslag dra die tabelle.

Nog nie gebou nie: knikanalise, 'n ontbrekende-massa-korreksie vir die responsspektrum, rekordskaling, aanvaardingskriteria vir skarniere (dinamiese respons is hierbo daar), gebied- en windladings wat vir jou gemaak word (aardbewingskragte op vloere is in [Kontroleer betonlede en maak seismiese ladings](topic:concrete-and-seismic)), lidverplasings, en verbande wat net trek. Sien [Nog nie gebou nie](topic:not-built-yet).
