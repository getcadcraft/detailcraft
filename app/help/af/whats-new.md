---
title: Wat is nuut in 0.8 en 0.8.1
summary: ’n Oprigtingsfilm uit ’n kraan se lasdiagram, ’n verbindingsoutopiloot, ’n wapeningsverdigtingskaart, fondasiekontroles, hout- en liggewigraamwerkpanele, konstrueerbaarheids- en sweistoegangskontroles, verskaffervoorraad, wat eerste breek, ’n lewende herbereking, meer betonkontroles en die 0.8.1-regstellings.
keywords: wat is nuut, vrystellingsnotas, veranderingslog, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, oprigting, kraan, lasdiagram, film, outopiloot, verbindings, wapening, verdigting, fondasie, mat, versakking, raamwerk, hout, liggewig, snylys, konstrueerbaarheid, sweistoegang, verskaffer, voorraad, lewertyd, wat breek eerste, lewend, beton, seismies, vloerplaat, tale, assistent
from: 6e33e052
---

Dit is wat in DetailCraft 0.8 (1 November 2026) en 0.8.1 (2 November 2026) verander het, in vergelyking met 0.7. 0.7 het staalelemente nagegaan; 0.8 beplan die hysings, stel die verbindings voor, kontroleer die fondasies en die wapening, en raam hout- en liggewig-mure, vloere en dakke.

## Nuut

### Oprigting

- **Oprigtingsplan en film.** Beskryf in die {{ui:Oprigting}}-oortjie ’n kraan (waar dit staan, sy hoogste haak, die takel wat nie in die staat is nie) en tik die rye van sy lasstaat in. DetailCraft hys die model een samestelling op ’n slag, in fasevolgorde en laag vir laag, en kontroleer elke hysing teen die staat by sy radius en teen die marge wat jy stel. {{ui:Stoor fliek}} skryf een HTML-lêer wat vanlyn in enige blaaier speel, ook op ’n foon. Hysings wat oor die staat, verby dit of te hoog is, is in {{ui:Probleme}}. Dit is ’n plan uit jou getalle, nie ’n hysplan nie. Sien [Oprigtingsplan en film](topic:erection-movie).

### Verbindings

- **Verbindingsoutopiloot.** Die {{ui:Outopiloot}}-oortjie kyk na elke knoop wat geen verbinding het nie en stel een voor uit die vorms: basisplate, skuifplate, eindplate vir die balke wat jy as momentbalke merk, skarwe en kopplate. Gee ’n eenvormige las of een eindskuif, en die boutetal volg die bout se ontwerpsterkte. {{ui:Voeg almal by}} voeg die voorstelle as een ontdoenstap by. Dit is beginwaardes om na te gaan, nie ’n verbindingsontwerp nie.
- **Konstrueerbaarheidskontroles.** {{ui:Probleme}} vir ’n bout wat ’n skroefsleutel nie kan bereik nie, bouts wat te na aan die dop is, hoeklasse buite hul groottegrense en holle profiele wat water hou. Sweistoegang is nuut: ’n rondom-hoeklas wat ’n lasser se brander nie kan bereik nie, word gelys saam met die deel wat in die pad is en die deel van die las wat geraak word. Sien [Konstrueerbaarheidskontroles](topic:constructability).

### Fondasies en wapening

- **Fondasiekontroles.** Die {{ui:Fondasie}}-oortjie kontroleer fondasies, gekombineerde fondasies en matte op die grond wat jy beskryf: draagvermoë, glyding en omkanteling uit diensbelastings; buiging, skuif, deurponsing, ontwikkeling en minimum staal uit faktoredde belastings (ACI 318-19). ’n Kolom naby ’n rand of ’n hoek word nagegaan met die snit wat deur die fondasie se rand afgesny word. Versakking kom uit die grond se modulus, ’n buigsame mat word op vere opgelos uit ’n onderlaag-modulus, en paalgroepe en keermure het hul eie panele. Kolomlaste kan ingetik word of uit die {{ui:Ontleding}} geneem word. Sien [Fondasiekontroles](topic:foundation-checks).
- **Wapeningsverdigtingskaart.** Die {{ui:Verdigting}}-oortjie teken ’n hittekaart van elke fondasie soos van bo gesien: waar die stawe te min ruimte laat vir beton om af te kom, teen die vrye-spasiëringsreël en, as jy hulle gee, die grootste aggregaat en die vibrator se kop. Sien [Wapeningsverdigtingskaart](topic:rebar-congestion).

### Raamwerk en voorsiening

- **Hout- en liggewigraamwerk.** Die {{ui:Raamwerk}}-oortjie raam mure-, vloer- en dakpanele met elke stuk, ’n snylys, die voorraad om te koop en ’n werkswinkeltekening op skaal. {{ui:Plaas as lede}} sit die stukke in die model, en {{ui:PDF-blaaie}} stoor een blad vir elke paneel. Die groottes, spasiëring en lateie is joune: DetailCraft kontroleer nie dat hulle die las dra nie. Sien [Hout- en liggewigraamwerkpanele](topic:framing-panels).
- **Verskaffervoorraad en lewertye.** Die {{ui:Voorsiening}}-oortjie lees ’n verskaffer se voorraadlys (CSV) en wys, vir elke deel wat die snylys koop, of daar genoeg in voorraad is en hoe lank die wag is. Tekorte en laat dele is in {{ui:Probleme}}. Niks word bestel nie. Sien [Verskaffervoorraad en lewertye](topic:supplier-stock).

### Ontleding en ontwerp

- **Wat breek eerste?** In die {{ui:Ontleding}}-oortjie vind die knoppie die sterktekombinasie wat bepalend is, die swakste lid, hoe ver die laste kan groei voordat die eerste lid sy grens bereik, en die swakste eindplaat of skuifplaat waar die skuifsterkte van sy bouts bekend is. Dit benodig eers die kombinasies en ’n ontwerpkode. Draagvermoë, blokskuif, lasse en hefboomwerking word nie nagegaan nie. Jou gekoppelde assistent kan dieselfde vra.
- **Lewend.** Merk {{ui:Lewend: los weer op na elke wysiging}} aan, en die raamwerk word na elke wysiging weer opgelos.
- **Beton, meer.** ’n Slanke kolom in ’n nie-swaai-raamwerk word ontwerp vir sy vergrote moment (ACI 318-19 6.6.4.5). Die seismiese periode kan uit die ontleding met Rayleigh se metode geneem word. ’n Vloerplaat wat uit plate gemaak is, kry die staal wat elke laag nodig het uit sy momente, en die eenrigting-skuif. Sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic).
- **Vir ’n ingenieur om na te gaan.** Die fondasie-, beton- en Wat breek eerste-resultate is hulpmiddels. Windlaste is nie gebou nie.

### In elke program

- **Tale.** Die hulp is in 54 tale. Dié behalwe Engels is masjienkonsepte totdat ’n moedertaalspreker dit nagaan; tien is nuut (Litaus, Lets, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filippyns, Swahili, Oesbeeks).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies omvou, 2 rye of 1 ry. ’n Balk wat reeds pas, bly soos dit is; die res rol sywaarts.
- **Eienskaprooster.** Die fondasie se velde gebruik die gedeelde rooster: invoubare kategorieë en ’n kompakte digtheid. Getikte rekenkunde soos 2*450 werk steeds.
- **Invoertoestelle.** Aanraakpaneel, pen, 3D-muis, beheerder en MIDI kan die programme bestuur. Sien [Navigeer in 3D](topic:navigate-3d).
- **Probleempaneel.** Die waarskuwings van die nuwe kontroles hierbo verskyn in dieselfde {{ui:Probleme}}-paneel as voorheen.
- **Koppel jou KI.** Jou eie assistent, gekoppel deur CadCraft Studio, werk met al agt programme en sien net wat jy toelaat. Eenklik-koppeling, die gehoste koppelaar en jou eie API-sleutel in Studio kom nog. Sien [Gebruik DetailCraft met ’n KI-assistent](topic:use-with-ai-assistants).

## Reggestel in 0.8.1

- **Tale in Studio.** Studio en die verpakte weergawes kan tydens uitvoering van taal wissel; voorheen was hulle net Engels. Dit is nog nie op elke platform getoets nie: laat ons weet as die taal nie verander nie.
- **Kruisvenster-kies.** Die 0.8.1-installeerders dra die kies-deur-venster-gedrag wat reeds in die 0.8-webbou reg was; ’n ouer installeerder het nie.
- **Tablette in staande rigting.** Oorblywende rooster-hoogte gaan na die doek, en die bladuitleg begin by 760 px of minder.

## Nog nie in hierdie weergawe nie

- **Stuur NC na ’n masjien** is nog nie vrygestel nie.
- **Windlaste** vir beton is nie gebou nie, en die beton- en fondasiekontroles is vir ’n ingenieur om na te gaan.
- **Kodeteken.** Die Windows-installeerders en die macOS .dmg is nie geteken nie, so Windows kan waarsku en macOS vra vir ’n regsklik, en dan Maak oop.

Vroeëre veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
