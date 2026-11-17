---
title: DetailCraft-instellings
summary: Begin nuwe lede as VS- of Europese profiele, stel hoe ver Dupliseer 'n kopie beweeg, kies of kopieë hul verbindings saamneem, en wys of verberg bouts in die 3D-aansig.
keywords: instellings, voorkeure, bladgrootte, papiergrootte, tekeninge, opsies, staal, aisc, en, europees, VS-profiele, metriese profiele, verstekprofiel, graad, s355, a992, dupliseer-verskuiwing, plak-verskuiwing, kopieer verbindings, bouts, ankerstawe, verberg bouts, herstel
from: e46cea57
---

Open {{ui:Instellings}} met die rat in die programbalk of {{key:Mod+,}}. Die eerste oortjie, {{ui:DetailCraft}}, bevat die instellings wat by hierdie program hoort; {{ui:Algemeen}} bevat die wat elke CadCraft-program deel (tema, werkbalk, paneele). DetailCraft se instellings bestaan net in die program: jy verander dit hier, hulle tree dadelik in werking, en hierdie blaaiers onthou dit. Hulle word nie in jou modellêer gestoor nie.

## Nuwe lede

Watter profiele en grade die plasingsinstrumente mee begin:

| Instrument | VS-profiele (AISC), A992 | Europese profiele (EN), S355 |
|---|---|---|
| {{ui:Balk}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolom}} | W12x50, A992 | HEB200, S355 |
| {{ui:Skoor}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plaat}} | A36 | S355 |

VS-profiele is die begin. Die Europese keuse gebruik 'n HEA160 vir skore omdat DetailCraft se EN-katalogus nog geen holprofiele het nie ([Profielkatalogus](topic:profile-catalog)). Jy kan steeds enige profiel en graad vir die volgende stuk in die {{ui:Eienskappe}}-paneel kies terwyl 'n plasingsinstrument aan is. Lede wat reeds in die model is, behou hul eie profiel en graad.

## Dupliseer en plak

- **Verskuiwing (mm)**: x, y en z. {{ui:Dupliseer}} ({{key:Mod+D}}) plaas die kopie so ver van die oorspronklike af, en die {{ui:Plak by verskuiwing (mm, vanaf die oorspronklike)}}-vorm begin daarmee. Dit begin by 6000, 0, 0: een 6 m-vak langs die genommerde roosters. Stel dit op jou vakspasiëring, of op 'n vlakhoogte in z om 'n vloer op te kopieer.
- **Kopieer eindplate en basisplate saam met hul lede** (aan by die begin): 'n verbinding kom saam met 'n kopie slegs as elke lid wat dit koppel, gekopieer word. Skakel dit af om lede en fondasies sonder hul verbindings te kopieer, byvoorbeeld om 'n ander verbinding op die kopie te probeer.

Sien [Kopieer, plak en dupliseer](topic:copy-paste).

## 3D-aansig

**Wys bouts en ankerstawe** (aan by die begin). Skakel dit af om hulle in die aansig te verberg en die gate en plate van 'n besige verbinding te sien. Verborge bouts kan nie geklik word nie; klik die plaat om die verbinding te kies. Die materiaallys, tekeninge en elke uitvoer sluit steeds elke bout en staaf in.

## Hoekaanwyser

Wat in die hoek van die 3D-aansig wys: **Aansigkubus** (die begin; regs bo: klik 'n vlak, rand of hoek om van daar af te kyk, sleep dit om te wentel, sleep sy kompasring om die model te draai), **Asikoon** ('n klein X-, Y-, Z-merker links onder wat met die aansig draai: X rooi, Y groen, Z blou) of **Geen**. Net in {{ui:3D}}; {{ui:Plan}} en {{ui:Aansig}} wys nie een nie. Sien [Die aansigkubus](topic:view-cube).

## Herstel

{{ui:Stel DetailCraft-instellings terug}} onder aan die dialoog stel hierdie terug na die begin (VS-profiele, verskuiwing 6000, 0, 0, verbindings gekopieer, bouts gewys), saam met die {{ui:Algemeen}}-instellings.

## Tekeninge

**Bladgrootte**: die bladtekeninge en werkswinkeltekeninge word in liggensrigting gemaak, op A4, A3 (die begin), A2, A1, ANSI B, ANSI C of ANSI D. Die {{ui:Tekeninge}}- en werkswinkeltekening-vensters het dieselfde lys. Sien [Algemene rangskikking- en samestellingstekeninge](topic:drawings).

## Wapening

- **ASTM-staafname**: #3 tot #11, of die sagte metriese #10 tot #36 vir dieselfde stawe.
- **Buigskedule-vormkodes**: DetailCraft se S, L, U; ACI 315-tipes; of BS 8666-vormkodes. Sien [Wapeningsverwysing](topic:rebar-reference).

## Sleep om te kies

**Reghoek** (soos vantevore) of **Lasso**: 'n vrye lyn, met {{key:Space}} wat tussen binne, raak en heining wissel terwyl jy sleep. Sien [Kies met 'n venster](topic:select-and-change#select-with-a-window).
