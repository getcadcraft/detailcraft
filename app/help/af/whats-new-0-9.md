---
title: Wat is nuut in 0.9 (vroeër)
summary: VK Blue Book-staalgroottes en ongelyke hoeke, werkstekeninge vir elke deel in een PDF-stel, My profiele vir pasgemaakte profiele, P-Delta en natuurlike frekwensies, ASCE 7-windlaste, seismiese terrein en kombinasies, en lewendige wysers met Volg.
keywords: wat is nuut 0.9, vroeëre weergawe, wat is nuut, vrystellingsnotas, veranderinglys, 0.9, VK-staal, blue book, ub, uc, pfc, shs, rhs, chs, ongelyke hoek, werkstekening, werkstekeninge, blaaistel, onderdeelmerk, pdf, my profiele, pasgemaakte profiel, p-delta, tweede orde, natuurlike frekwensie, eindige elemente, modale massa, windlas, asce 7, seismies, terreinklas, usgs, lastkombinasies, lrfd, asd, lewend, wysers, volg, mense, tooltips, wat is nuut, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, oprigting, kraan, lasttabel, fliek, outopiloot, verbindings, wapening, verdigting, fondasie, fondament, mat, versakking, raamwerk, hout, ligte meter, snymyslys, bouwbaarheid, sweistoegang, verskaffer, voorraad, leertyd, wat breek eerste, lewend, beton, seismies, plaat, tale, assistent
from: ab0c7f05
---

Dit is wat in DetailCraft 0.9 verander het, vergeleke met 0.8.1. 0.9 bring die VK-staalgroottes, 'n werkstekening vir elke deel in een keer, 'n groter {{ui:Ontleding}}-oortjie vir raamwerke, en 'n manier om mekaar se wysers te sien wanneer julle saam werk.

## Nuut

### VK-staal en werkstekeninge

- **VK-staalgroottes.** Die profiellyste bevat nou 976 groottes uit die Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS en RHS, met die koudgevormde holle snitte apart gehou (hul name begin met CF). Name word eers met die familie geskryf, soos UB305x165x40 of SHS100x100x5.0, en dit werk ook as jy dit tik soos tekeninge dit sê: 305x165x40 UB, L100x100x10, SHS100x5. Sien [Profielkatalogus](topic:profile-catalog).
- **Ongelyke hoeke.** UEA-hoeke hou albei bene deur IFC in en uit, en deur NC-lêers, en 'n spieëling draai die stuk van voor tot agter.
- **Elke werkstekening op een slag.** Kies {{ui:Werkswinkeltekening}} in die {{ui:Uitvoer}}-groep sonder dat iets gekies is. Die venster lys elke onderdeelmerk, wys 'n voorskou van enige een daarvan, en {{ui:Laai alles af}} stoor een PDF met 'n bladsy per merk, elkeen getitel "Blad 3 van 42". {{ui:Laai PDF af}} stoor die een wat jy kyk. Kanale, hoeke en holle snitte kry nou ook bladsye. Sien [Maak werkstekeninge](topic:shop-drawings).
- **My profiele.** 'n Pasgemaakte profiel kan nou vir elke nuwe model gehou word. Laat {{ui:Hou in My profiele}} in die Pasgemaakte profiel-vorm getik; die {{ui:My profiele}}-lys daaronder het {{ui:Hou}}, {{ui:Gebruik hier}} en {{ui:Verwyder}}. Die lys word in hierdie blaaier gehou (tot 200), nie in jou rekening nie. Sien [Plate en profiele](topic:plates-and-profiles).

### Ontleding

- **Tweede orde (P-Delta).** Tik {{ui:Tweede orde (P-Delta)}} langs Run in die {{ui:Ontleding}}-oortjie, en die aksiale kragte werk op die vervormde raamwerk. Plate en stywe vloere bly eerste-orde, met 'n waarskuwing. Sien [Kragte, reaksies en deurbuigings](topic:frame-analysis).
- **Natuurlike frekwensies.** Die blok {{ui:Eindige elemente: natuurlike frekwensies}} onder die resultate vind die laagste modusse van dieselfde model, met periode en effektiewe modale massa, en wys 'n modus op die model. Sien [Kragte, reaksies en deurbuigings](topic:frame-analysis).
- **Windlaste en seismiese terrein.** Drie nuwe blokke in die {{ui:Ontleding}}-oortjie: {{ui:Windlaste (ASCE 7 rigtingprosedure)}}, {{ui:Seismiese terrein en stelsel (ASCE 7)}} en {{ui:ASCE 7-lastkombinasies}}. Sien [Wind, seismiese terrein en ASCE 7-kombinasies](topic:wind-seismic-combinations).

### Saam werk

- **Wysers en name.** In 'n Lewend-sessie word elke persoon se wyser in die model geteken met hul naam en kleur, en wat hulle gekies het, kry 'n kassie.
- **Volg 'n persoon.** Maak {{ui:Mense}} in die sessie oop en kies {{ui:Volg}} by 'n naam; jou aansig beweeg saam met hulle. Die gasheer kan {{ui:Vra almal om my te volg}} kies. Sien [Volg 'n persoon in 'n Lewend-sessie](topic:follow-in-live).

### In elke program

- Wenke is Bootstrap-wenke, die begin-wenkkaart het 'n sluitknoppie, oortjiestroke rol sywaarts as hulle nie pas nie, en die blaaier se oortjienaam noem die oop dokument gevolg deur DetailCraft en CadCraft.

## Reggestel

- 'n Pasgemaakte profiel is verloor wanneer jy 'n nuwe model begin het.
- Kanale, hoeke en holle snitte was ontbreek in die werkstekeningstel.

## Eerlike grense

- Die wind-, seismiese en eindige-elemente-blokke is hulpmiddels vir kontrole. Jou ingenieur hersien die resultate; dit is nie 'n kodekontrole nie. Die USGS-opsoek is op 'n plaasvervanger getoets, nie op die lewende diens nie.
- Eindige elemente en P-Delta is teen hand- en geslotevormantwoorde gekontroleer, nie teen 'n werklike gebou nie. Knikanalise is nie gebou nie.
- Geen VK-vervaardiger het die VK-groottes nog probeer nie, en NC-lêers vir ongelyke hoeke is nog nie op 'n masjien uitgevoer nie.
- Die werkstekeningstel is net PDF.
- Tale behalwe Engels is masjienkonsepte.
- Die Windows-installeerders is nie kode-geteken nie (Meer inligting, dan Run anyway); die macOS-skyfbeeld is nie genotariseer nie (regsklik, dan Open).

Vroeëre veranderinge is in die 0.8- en 0.8.1-notas verderaf op hierdie bladsy.

## Vroeër: 0.8 en 0.8.1

Dit is wat in DetailCraft 0.8 (1 November 2026) en 0.8.1 (2 November 2026) verander het, vergeleke met 0.7. 0.7 het staallede gekontroleer; 0.8 beplan die lifte, stel die verbindings voor, kontroleer die fondasies en die wapening, en raam hout- en ligte-meter-mure, vloere en dakke.

### Nuut

**Oprigting**

- **Oprigtingsplan en fliek.** In die {{ui:Oprigting}}-oortjie beskryf jy 'n kraan (waar dit staan, sy hoogste haak, die tuig wat nie in die tabel is nie) en tik die rye van sy lasttabel. DetailCraft lig die model een samestelling op 'n slag, in fase-volgorde en laag vir laag, en kontroleer elke lig teen die tabel by sy radius en teen die marge wat jy stel. {{ui:Stoor fliek}} skryf een HTML-lêer wat aflyn in enige blaaier speel, ook op 'n foon. Lifte wat oor die tabel is, daarbuite is of te hoog is, staan in {{ui:Probleme}}. Dit is 'n plan uit jou getalle, nie 'n liftplan nie. Sien [Oprigtingsplan en fliek](topic:erection-movie).

**Verbindings**

- **Verbindingsoutopiloot.** Die {{ui:Outopiloot}}-oortjie kyk na elke verbinding wat geen verbinding het nie en stel een voor uit die vorms: grondplate, skuiflippe, eindplate vir die balke wat jy as momentbalke merk, skarnike en krulplate. Gee 'n eenvormige las of een eindskuifkrag, en die boutetal volg die bout se ontwerpsterkte. {{ui:Voeg almal by}} voeg die voorstelle as een ontdoen-stap by. Dit is beginwaardes om na te sien, nie 'n verbindingsontwerp nie.
- **Bouwbaarheidskontroles.** {{ui:Probleme}} vir 'n bout wat 'n skroefsleutel nie kan bereik nie, boute wat te na aan die dop is, hoeklasse buite hul groottegrense, en holle snitte wat water hou. Sweistoegang is nuut: 'n ronde hoeklas wat 'n sweiser se bran nie kan bereik nie, word gelys saam met die deel wat in die pad is en die aandeel van die sweis wat geraak word. Sien [Bouwbaarheidskontroles](topic:constructability).

**Fondasies en wapening**

- **Fondasiekontroles.** Die {{ui:Fondasie}}-oortjie kontroleer voetings, gekombineerde voetings en matte op die grond wat jy beskryf: dra, gly en omkantel uit diensladings; buiging, skuif, deurponsing, ontwikkeling en minimum staal uit gefaktoriseerde ladings (ACI 318-19). 'n Kolom naby 'n rand of 'n hoek word gekontroleer met die snit wat deur die voeting se rand afgesny is. Versakking kom uit die grond se modulus, 'n buigsame mat word op vere opgelos uit 'n onderlaagmodulus, en paalgroepe en keermure het elk hul eie panele. Kolomladings kan getik word of uit die {{ui:Ontleding}} kom. Sien [Fondasiekontroles](topic:foundation-checks).
- **Wapening-verdigtingskaart.** Die {{ui:Verdigting}}-oortjie teken 'n hittekaart van elke voeting soos van bo gesien: waar die stawe te min ruimte laat vir beton om af te kom, teen die vrye-afstand-reël en, as jy dit gee, die grootste aggregaat en die vibreerkop. Sien [Wapening-verdigtingskaart](topic:rebar-congestion).

**Raamwerk en voorsiening**

- **Hout- en ligte-meter-raamwerk.** Die {{ui:Raamwerk}}-oortjie raam muur-, vloer- en dakpanele met elke stuk, 'n snylys, die voorraad om te koop en 'n werkstekening volgens skaal. {{ui:Plaas as lede}} sit die stukke in die model, en {{ui:PDF-blaaie}} stoor een blad vir elke paneel. Die groottes, afstande en kopstukke is joune: DetailCraft kontroleer nie dat hulle die las dra nie. Sien [Hout- en ligte-meter-raamwerkpanele](topic:framing-panels).
- **Voorraad van verskaffers en leertye.** Die {{ui:Voorsiening}}-oortjie lees 'n verskaffer se voorraadlys (CSV) en wys, vir elke profiel wat die snylys koop, of daar genoeg in voorraad is en hoe lank die wag is. Tekorte en laat profiele staan in {{ui:Probleme}}. Niks word bestel nie. Sien [Voorraad van verskaffers en leertye](topic:supplier-stock).

**Ontleding en ontwerp**

- **Wat breek eerste?** In die {{ui:Ontleding}}-oortjie vind die knoppie die sterkte-kombinasie wat bepalend is, die swakste lid, hoe ver die laste kan groei voordat die eerste lid sy limiet bereik, en die swakste eindplaat of skuiflip waar die skuifsterkte van sy bouts bekend is. Dit benodig eers die kombinasies en 'n ontwerpkode. Dra, blokskuif, sweise en hefboomwerking word nie gekontroleer nie. Jou gekoppelde assistent kan dieselfde vra.
- **Lewend.** Tik {{ui:Lewend: los weer op na elke wysiging}} en die raamwerk word na elke wysiging weer opgelos.
- **Beton, meer.** 'n Slanke kolom in 'n raamwerk sonder sywaartse verplasing word ontwerp vir sy vergrote moment (ACI 318-19 6.6.4.5). Die seismiese periode kan uit die ontleding volgens Rayleigh se metode geneem word. 'n Plaat wat uit plate gemaak is, kry die staal wat elke laag nodig het uit sy momente, en die eenrigtingskuif. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).
- **Vir 'n ingenieur om na te sien.** Die fondasie-, beton- en Wat breek eerste-resultate is hulpmiddels. Windlaste vir beton is nie gebou nie.

**In elke program**

- **Tale.** Die hulp is in 54 tale. Die wat behalwe Engels is, is masjienkonsepte totdat 'n moedertaalspreker dit lees; tien is nuut (Litaus, Letties, Bosnies, Marathi, Teloegoe, Albanees, Afrikaans, Filippyns, Swahili, Oesbeeks).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies omwikkel, 2 rye of 1 ry. 'n Balk wat reeds pas, bly soos dit is; die res rol sywaarts.
- **Eienskapsrooster.** Die voeting se velde gebruik die gedeelde rooster: invoubare kategorieë en 'n kompakte digtheid. Getikte rekenkunde soos 2*450 werk steeds.
- **Invoertoestelle.** Trackpad, pen, 3D-muis, beheerder en MIDI kan die programme bestuur. Sien [Navigeer in 3D](topic:navigate-3d).
- **Probleempaneel.** Die waarskuwings van die nuwe kontroles hierbo verskyn in dieselfde {{ui:Probleme}}-paneel as vroeër.
- **Koppel jou KI.** Jou eie assistent, gekoppel deur CadCraft Studio, werk met al agt programme en sien net wat jy toelaat. Eenklik-koppeling, die gehoste koppelaar en jou eie API-sleutel in Studio moet nog kom. Sien [Gebruik DetailCraft met 'n KI-assistent](topic:use-with-ai-assistants).

### Reggestel in 0.8.1

- **Tale in Studio.** Studio en die gepakte uitgawes kan tydens uitvoering van taal wissel; vroeër was hulle net Engels. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- **Venster-kieser oor kruising.** Die 0.8.1-installeerders bevat die venster-kies-gedrag wat reeds in die 0.8-webbou reg was; 'n ouer installeerder het dit nie gehad nie.
- **Tablette in staande rigting.** Oorblywende roosterhoogte gaan na die doek, en die tekeningsuitleg begin by 760 px of minder.

### Nog nie in hierdie weergawe nie

- **Stuur NC na 'n masjien** is nie vrygestel nie.
- **Windlaste** vir beton is nie gebou nie, en die beton- en fondasiekontroles is vir 'n ingenieur om na te sien.
- **Kodeteken.** Die Windows-installeerders en die macOS .dmg is nie geteken nie, so Windows kan waarsku en macOS vra vir regsklik, dan Open.

Vroeëre veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
