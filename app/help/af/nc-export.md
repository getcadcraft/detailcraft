---
title: Stuur NC-lêers na die werkswinkel
summary: Voer DSTV NC-lêers uit vir elke deelmerk (I-vorms, kanale, hoeke, HSS, plate), in een zip-lêer, en kontroleer hulle voordat hulle by 'n masjien uitkom.
keywords: nc, nc1, dstv, cnc, masjien, balklyn, boorlyn, plaatsny, uitvoer, vervaardiging, zip
from: 598b6091
---

DetailCraft skryf een DSTV NC-lêer (`.nc1`) per deelmerk, vir I-vorms, kanale, hoeke, reghoekige en ronde HSS, en plate, en sit hulle saam in een zip-lêer. Balklyne en plaatmasjiene lees hierdie lêers om te saag, te boor en te sny.

## Uitvoer

1. Maak eers die {{ui:Probleme}}-oortjie leeg: 'n verbinding wat nie gebou kon word nie, voeg geen gate by nie.
2. Stoor die model ({{key:Mod+S}}), sodat die NC-lêers by 'n gestoorde model pas.
3. Kies {{ui:NC-lêers}} in die {{ui:Uitvoer}}-groep.
4. Die blaaier laai `<name> NC.zip` af. Die statusbalk sê hoeveel lêers dit bevat, en lys enige merke wat dit nie geskryf het nie ('n hoek of 'n ronde buis met 'n uitsnit).

Binne die zip word elke lêer volgens sy deelmerk genoem: `b1.nc1`, `c1.nc1`, `p1.nc1` … Die zip is nie saamgepers nie en maak oop met enige zip-program.

As die model geen dele het nie, sê die statusbalk dit.

## Wat elke lêer bevat

- **Kop (ST):** die modelnaam as die bestelling, die deelmerk as tekening en stuk, fase 1, die staalgraad, die hoeveelheid, die profiel en sy afmetings, massa per meter en verfoppervlak per meter. Saagsnitte is reguit.
- **Buitelyne (AK):** die lyfomtrek met enige uitsnitte uitgekerf, en elke flensomtrek korter waar 'n uitsnit dit verwyder.
- **Gate (BO):** elke gat met sy vlak, posisie en deursnee, insluitend die gate wat deur eindplate en basisplate gemaak word.

Veld vir veld, met die reëls vir vlakke en koördinate: [NC-lêervelde](topic:nc1-fields).

## Wat nie geskryf word nie

- Hoeke en ronde buise met 'n uitsnit: geen NC-lêer nie. Hul merke word in die statusbalk gelys.
- Gate in ronde buise (DetailCraft maak geen nie).
- Skuinssnitte, binnelyne, deelmerkings (ritsing) en saagshoeke anders as reguit.
- Gleufgate (DetailCraft het net ronde gate).

## Kontroleer voor masjienwerk

DetailCraft se NC-lêers word deur sy eie toetsreeks teruggelees, maar hulle is nog nie op jou werkswinkel se masjiene geloop nie.

1. Maak die lêers oop in jou werkswinkel se NC-kyker of masjienprogram en vergelyk hulle met die werkswinkeltekeninge.
2. Kontroleer een deel van elke soort op die masjien voordat jy 'n bondel laat loop.
3. Kontroleer hoe jou program die flens-y-koördinate en die vlakke van kanale lees: DetailCraft meet flens-y vanaf die agterrand, en lê kanale op hul rug soos die standaard hulle teken (sien [NC-lêervelde](topic:nc1-fields#faces-and-coordinates)).
