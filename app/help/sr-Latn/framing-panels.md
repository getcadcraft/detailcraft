---
title: Drveni i lagani okvirni paneli
summary: Sastavi zidne, podne i krovne panele od drveta ili lakog čeličnog profila, sa svakim komadom, spiskom sečenja, radioničkim crtežom i građom za kupovinu.
keywords: okvir, drvo, građa, lagani čelik, hladno oblikovani čelik, stojka, greda, rogovi, nadvratnik, glavna stojka, pomoćna stojka, kratka stojka, spisak sečenja, radionički crtež, panel
from: 3e38ffb9
---

Kartica {{ui:Okvir}} okvira panele koje opišeš i daje ti ono što traže ekipa za okvire i trgovina građom. Paneli se čuvaju u datoteci modela.

:::warning
Dimenzije, razmak i nadvratnici su tvoji. DetailCraft ne proverava da li stojka na tom razmaku nosi taj zid niti da li nadvratnik premošćuje taj otvor: to je za tabele tvog propisa i za tvog inženjera.
:::

## Dodavanje panela

Izaberi {{ui:Dodaj zid}}, {{ui:Dodaj pod}} ili {{ui:Dodaj krov}}, zatim popuni dimenzije u milimetrima, materijal (drvo ili lagani čelik) i veličinu člana. Dimenzije drveta su nominalni nazivi sa njihovim obrađenim dimenzijama (2×4 je 38 × 89 mm). Čelične stojke se imenuju po visini i debljini, na primer `C92-1.2`.

## Zidovi

Zid ima donju šinu, jednu ili više gornjih šina (za čelik jednu šinu), krajnje stojke, stojke na razmaku koji zadaš i, za svaki otvor: dve glavne stojke, dve pomoćne stojke, nadvratnik veličine i slojeva koje izabereš, i kratke stojke iznad nadvratnika (i ispod parapeta prozora). Svakom otvoru zadaj rastojanje od levog kraja, širinu, i grubi otvor gore i dole, merene od podne podloge; vrata imaju donju ivicu 0.

## Podovi i krovovi

Pod ima grede koje idu duž njegovog raspona, obodne grede na oba kraja i, ako to označiš, ukrućenja na sredini raspona. Krovni panel je zabat: par rogova na razmaku koji zadaš (njihova dužina uključuje izlaz strehe duž kosine) i sljeme.

## Šta dobijaš

Svaki panel prikazuje svoje delove na crtežu u razmeri, sa svakim delom obeleženim, spisak sečenja po oznaci i ukupan zbir. Tabela {{ui:Građa za kupovinu}} slaže sva sečenja svih panela u dužine građe, najkraće koje stanu u svaki komad. {{ui:Sačuvaj radionički crtež (SVG)}} piše crtež; dugme {{ui:CSV}} piše svaki spisak sečenja i spisak građe.

## Postavljanje panela u model

Ispod svakog panela zadaj gde ide (x, y, z u milimetrima i ugao) i pritisni {{ui:Postavi kao štapove}}: svaki deo postaje član modela, sa obrađenim presekom svoje veličine i težinom materijala (oko 500 kg/m³ za drvo, čelik za stojke). Zid ide duž ugla od svog donjeg levog kraja, sa donjom ivicom na z; podne grede leže sa donjom stranom na z; zabatna elevacija krova ide duž ugla, sa z na vrhu gornjih šina zida. Svaki sloj nadvratnika je član postavljen pored drugog. Ponovno pritiskanje zamenjuje članove postavljene ranije, a {{ui:Ukloni postavljene štapove}} ih uklanja; svako je jedan korak poništavanja. Analiza izostavlja ove članove: nisu članovi čeličnog rama.

## PDF listovi

{{ui:PDF listovi}} čuva jednu A3 stranicu za svaki panel: panel u razmeri sa svakim delom obeleženim, ukupne dimenzije, spisak sečenja i naslovnu traku.

Problemi u panelu {{ui:Problemi}}: otvor previše blizu kraja zida ili drugog otvora, nadvratnik koji ne staje ispod gornjih šina, deo duži od najduže građe.

Panel {{ui:Problemi}} takođe navodi **Interfejsi (LOD 350)** za zidne panele i betonske zidove: otvor koji ide preko kraja ili vrha svog zida, dva otvora koji se preklapaju, i otvor betonskog zida širi od 1000 mm bez ojačavajuće šipke. To su saveti, ista pravila koja pokreće BimCraft-ova revizija; širina je početna vrednost CadCraft-a, a ne standard.
