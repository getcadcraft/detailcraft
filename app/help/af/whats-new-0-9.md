---
title: Wat is nuut in 0.9
summary: Britse Blue Book-staalgroottes en ongelyke hoeke, werkswinkeltekeninge vir elke onderdeel in een PDF-stel, My profiele vir pasgemaakte profiele, P-Delta en natuurlike frekwensies, ASCE 7-windlaste, seismiese terrein en kombinasies, en lewendige wysers met Volg.
keywords: wat is nuut, what's new, vrystellingnotas, veranderingslog, 0.9, uk-staal, blue book, ub, uc, pfc, shs, rhs, chs, ongelyke hoek, werkswinkeltekening, werkswinkeltekeninge, bladstel, onderdeelmerk, pdf, my profiele, pasgemaakte profiel, p-delta, tweede orde, natuurlike frekwensie, eindige elemente, modale massa, windlas, asce 7, seismies, terreinklas, usgs, lastkombinasies, lrfd, asd, lewend, wysers, volg, mense, nutswenke, 0.8, 0.8.1, weergawe, nuwe funksies, oprigting, kraan, lasttabel, fliek, outopiloot, verbindings, wapening, verdigting, fondasie, fondament, mat, versakking, raamwerk, hout, ligtemaat, snylys, boubaarheid, lastoegang, verskaffer, voorraad, leertyd, wat breek eerste, beton, klein, vloer, tale, assistent
from: 4c95a2de
---

Dit is wat in DetailCraft 0.9 verander het, vergeleke met 0.8.1. 0.9 bring die Britse staalgroottes, 'n werkswinkeltekening vir elke onderdeel in een keer, 'n groter {{ui:Ontleding}}-oortjie vir rame, en 'n aansig van mekaar se wysers wanneer julle saam werk.

## Nuut

### Britse staal en werkswinkeltekeninge

- **Britse staalgroottes.** Die profiellyste bevat nou 976 groottes uit die Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS en RHS, met die koudgevormde holle snitte apart gehou (hul name begin met CF). Name word eers familie geskryf, soos UB305x165x40 of SHS100x100x5.0, en as jy dit typ soos tekeninge dit sê, werk dit ook: 305x165x40 UB, L100x100x10, SHS100x5. Sien [Profielkatalogus](topic:profile-catalog).
- **Ongelyke hoeke.** UEA-hoeke hou albei bene deur IFC in en uit en deur NC-lêers, en 'n spieël draai die stuk van ent tot ent.
- **Elke werkswinkeltekening op een slag.** Kies {{ui:Werkswinkeltekening}} in die {{ui:Uitvoer}}-groep met niks gekies nie. Die venster lys elke onderdeelmerk, wys 'n voorskou van enige van hulle, en {{ui:Laai almal af}} stoor een PDF met 'n bladsy per merk, elk getitel "Blad 3 van 42". {{ui:Laai PDF af}} stoor die een wat jy kyk. Kanale, hoeke en holle snitte kry nou ook blaaie. Sien [Maak werkswinkeltekeninge](topic:shop-drawings).
- **My profiele.** 'n Pasgemaakte profiel kan nou vir elke nuwe model bewaar word. In die Pasgemaakte profiel-vorm, laat {{ui:Hou in My profiele}} gemerk; die lys {{ui:My profiele}} daaronder het {{ui:Hou}}, {{ui:Gebruik hier}} en {{ui:Verwyder}}. Die lys word in hierdie blaaier bewaar (tot 200), nie in jou rekening nie. Sien [Plate en profiele](topic:plates-and-profiles).

### Ontleding

- **Tweede orde (P-Delta).** Merk {{ui:Tweede orde (P-Delta)}} langs {{ui:Begin}} in die {{ui:Ontleding}}-oortjie, en die aksiale kragte werk op die vervormde raam. Plate en styf vloere bly eerste orde, met 'n waarskuwing. Sien [Kragte, reaksies en defleksies](topic:frame-analysis).
- **Natuurlike frekwensies.** Die blok {{ui:Eindige elemente: natuurlike frekwensies}} onder die resultate vind die laagste modusse van dieselfde model, met periode en effektiewe modale massa, en wys 'n modus op die model. Sien [Kragte, reaksies en defleksies](topic:frame-analysis).
- **Windlaste en seismiese terrein.** Drie nuwe blokke in die {{ui:Ontleding}}-oortjie: {{ui:Windlaste (ASCE 7 rigtingprosedure)}}, {{ui:Seismiese terrein en stelsel (ASCE 7)}} en {{ui:ASCE 7-lastkombinasies}}. Sien [Wind, seismiese terrein en ASCE 7-kombinasies](topic:wind-seismic-combinations).

### Saamwerk

- **Wysers en name.** In 'n Lewend-sessie word elke persoon se aanwyser in die model geteken met hul naam en kleur, en wat hulle gekies het, kry 'n boks.
- **Volg 'n persoon.** Maak {{ui:Mense}} in die sessie oop en kies {{ui:Volg}} by 'n naam; jou aansig beweeg saam met hulle. Die gasheer kan {{ui:Vra almal om my te volg}} kies. Sien [Volg 'n persoon in 'n Lewend-sessie](topic:follow-in-live).

### In elke app

- Nutswenke is Bootstrap-nutswenke, die beginwenk-kaart het 'n sluitknoppie, oortjiestroke rol sywaarts wanneer hulle nie pas nie, en die blaaier-oortjie noem die oop dokument gevolg deur DetailCraft en CadCraft.

## Reggemaak

- 'n Pasgemaakte profiel is verloor wanneer jy 'n nuwe model begin het.
- Kanale, hoeke en holle snitte het in die werkswinkeltekening-stel ontbreek.

## Eerlike beperkings

- Die wind-, seismiese en eindige-elemente-blokke is kontrolehulpmiddels. Jou ingenieur hersien die resultate; hulle is nie 'n kodetoets nie. Die USGS-opsoek is op 'n plaasvervanger getoets, nie op die lewendige diens nie.
- Eindige elemente en P-Delta is met hand- en geslotevorm-antwoorde nagegaan, nie met 'n regte gebou nie. Knikanalise is nie gebou nie.
- Nog geen Britse vervaardiger het die Britse groottes probeer nie, en NC-lêers vir ongelyke hoeke is nog nie op 'n masjien gedraai nie.
- Die werkswinkeltekening-stel is net PDF.
- Tale buite Engels is masjienkonsepte.
- Die Windows-installeerders is nie kode-geteken nie (Meer inligting, dan Hardloop tog); die macOS-skyfbeeld is nie genotariseer nie (regsklik, dan Maak oop).

Vroeër veranderinge is in die 0.8- en 0.8.1-notas verder af op hierdie bladsy.

## Vroeër: 0.8 en 0.8.1

Dit is wat in DetailCraft 0.8 (1 November 2026) en 0.8.1 (2 November 2026) verander het, vergeleke met 0.7. 0.7 het staallede gekontroleer; 0.8 beplan die lifte, stel die verbindings voor, kontroleer die fondasies en die wapening, en raam hout- en ligtemaat-mure, vloere en dakke.

### Nuut

**Oprigting**

- **Oprigtingsplan en fliek.** In die {{ui:Oprigting}}-oortjie, beskryf 'n kraan (waar dit staan, sy hoogste haak, die tuig wat nie in die tabel is nie) en tik die rye van sy lasttabel. DetailCraft lig die model een samestelling op 'n slag, in fase-volgorde en laag vir laag, en kontroleer elke lig teen die tabel by sy radius en teen die marge wat jy stel. {{ui:Stoor fliek}} skryf een HTML-lêer wat oflyn in enige blaaier speel, ook op 'n foon. Lifte wat oor die tabel, verby dit of te hoog is, staan in {{ui:Probleme}}. Dit is 'n plan uit jou getalle, nie 'n hysplan nie. Sien [Oprigtingsplan en fliek](topic:erection-movie).

**Verbindings**

- **Verbindingsoutopiloot.** Die {{ui:Outopiloot}}-oortjie kyk na elke knoop wat geen verbinding het nie en stel een voor uit die vorms: voetplate, skuiflappe, eindplate vir die balke wat jy as momentbalke merk, skarnierings en gussets. Gee 'n eenvormige las of een eindskuifkrag, en die boutetal volg die bout se ontwerpsterkte. {{ui:Voeg almal by}} voeg die voorstelle as een ontdoen-stap by. Dit is beginwaardes om na te gaan, nie 'n verbindingsontwerp nie.
- **Boubaarheidskontroles.** {{ui:Probleme}} vir 'n bout wat 'n skroefsleutel nie bereik nie, bouts wat te na aan die dop is, vulllassings buite hul groottegrense, en holle snitte wat water hou. Lastoegang is nuut: 'n rondom-vulllas wat 'n lasser se brander nie kan bereik nie, word gelys met die onderdeel wat in die pad staan en die deel van die las wat geraak word. Sien [Boubaarheidskontroles](topic:constructability).

**Fondasies en wapening**

- **Fondasiekontroles.** Die {{ui:Fondasie}}-oortjie kontroleer voetings, gekombineerde voetings en mate op die grond wat jy beskryf: draagvermoë, glip en omkantel onder diensbelastings; buiging, skuif, deurponsing, ontwikkeling en minimum staal uit faktorbelastings (ACI 318-19). 'n Kolom naby 'n rand of hoek word gekontroleer met die snit wat deur die voeting se rand afgesny word. Versakking kom uit die grond se modulus, 'n buigsame mat word op vere opgelos uit 'n onderlaag-modulus, en paalgroepe en keermure het hul eie panele. Kolomlaste kan getik of uit die {{ui:Ontleding}} geneem word. Sien [Fondasiekontroles](topic:foundation-checks).
- **Wapeningsverdigtingskaart.** Die {{ui:Verdigting}}-oortjie teken 'n hittekaart van elke voeting soos van bo gesien: waar die stawe te min ruimte laat vir beton om af te kom, teen die reël vir vrye afstand en, as jy dit gee, die grootste aggregaat en die vibrator-kop. Sien [Wapeningsverdigtingskaart](topic:rebar-congestion).

**Raamwerk en voorsiening**

- **Hout- en ligtemaat-raamwerk.** Die {{ui:Raamwerk}}-oortjie raam mure-, vloer- en dakpanele met elke stuk, 'n snylys, die voorraad om te koop en 'n werkswinkeltekening volgens skaal. {{ui:Plaas as lede}} sit die stukke in die model, en {{ui:PDF-blaaie}} stoor een blad vir elke paneel. Die groottes, afstande en koppe is aan jou: DetailCraft kontroleer nie of hulle die las dra nie. Sien [Hout- en ligtemaat-raamwerkpanele](topic:framing-panels).
- **Verskaffer se voorraad en leertye.** Die {{ui:Voorsiening}}-oortjie lees 'n verskaffer se voorraadlys (CSV) en wys, vir elke profiel wat die snylys koop, of daar genoeg in voorraad is en hoe lank die wag is. Tekorte en laat profiele staan in {{ui:Probleme}}. Niks word bestel nie. Sien [Verskaffer se voorraad en leertye](topic:supplier-stock).

**Ontleding en ontwerp**

- **Wat breek eerste?** In die {{ui:Ontleding}}-oortjie vind die knoppie die sterktekombinasie wat beheers, die swakste lid, hoe ver die laste kan groei voordat die eerste lid sy grens bereik, en die swakste eindplaat of skuiflap waar sy boute se skuifsterkte bekend is. Dit benodig eers die kombinasies en 'n ontwerpkode. Druk, blokskuif, lasse en pry word nie gekontroleer nie. Jou gekoppelde assistent kan dieselfde vra.
- **Lewend.** Merk {{ui:Lewend: los weer op na elke wysiging}} en die raam word na elke wysiging weer opgelos.
- **Beton, meer.** 'n Slanke kolom in 'n nie-swaai-raam word ontwerp vir sy vergrote moment (ACI 318-19 6.6.4.5). Die seismiese periode kan uit die ontleding met Rayleigh se metode geneem word. 'n Plaat wat uit plate gemaak is, kry die staal wat elke laag nodig het uit sy momente, en die eenrigting-skuif. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).
- **Vir 'n ingenieur om na te gaan.** Die fondasie-, beton- en Wat breek eerste-resultate is hulpmiddels. Windlaste is nie gebou nie.

**In elke app**

- **Tale.** Die hulp is in 54 tale. Die wat buite Engels is, is masjienkonsepte totdat 'n moedertaalspreker dit lees; tien is nuut (Litaus, Lettis, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipyns, Swahili, Oesbeeks).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies omwikkel, 2 rye of 1 ry. 'n Balk wat reeds pas, bly soos dit is; die res rol sywaarts.
- **Eienskapsrooster.** Die voeting se velde gebruik die gedeelde rooster: invoubare kategorieë en 'n kompakte digtheid. Getikte rekenkunde soos 2*450 werk steeds.
- **Invoertoestelle.** Trackpad, pen, 3D-muis, beheerder en MIDI kan die apps bestuur. Sien [Navigeer in 3D](topic:navigate-3d).
- **Probleempaneel.** Die waarskuwings van die nuwe kontroles hierbo verskyn in dieselfde {{ui:Probleme}}-paneel as voorheen.
- **Koppel jou KI.** Jou eie assistent, gekoppel deur CadCraft Studio, werk met al agt apps en sien net wat jy toelaat. Koppel met een klik, die gehuisveste koppelaar en jou eie API-sleutel in Studio moet nog kom. Sien [Gebruik DetailCraft met 'n KI-assistent](topic:use-with-ai-assistants).

### Reggemaak in 0.8.1

- **Tale in Studio.** Studio en die gepakte uitgawes kan tydens looptyd van taal wissel; voorheen was dit net Engels. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- **Kruisvenster-keuse.** Die 0.8.1-installeerders dra die keuse-deur-venster-gedrag wat reeds in die 0.8-webbou reg was; 'n ouer installeerder het dit nie gehad nie.
- **Tablette in staande rigting.** Ledige rasterhoogte gaan na die doek, en die bladuitleg begin by 760 px of minder.

### Nog nie in hierdie weergawe nie

- **Stuur NC na 'n masjien** is nie vrygestel nie.
- **Windlaste** vir beton is nie gebou nie, en die beton- en fondasiekontroles is vir 'n ingenieur om na te gaan.
- **Kodeteken.** Die Windows-installeerders en die macOS .dmg is nie geteken nie, so Windows kan waarsku en macOS vra vir regsklik, dan Maak oop.

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
