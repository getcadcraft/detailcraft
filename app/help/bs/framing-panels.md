---
title: Drveni i laki čelični okvirni paneli
summary: Okvirni paneli zidova, podova i krovova od drveta ili lakog čelika, sa svakim komadom, spiskom rezanja, radioničkim crtežom i zalihom za kupovinu.
keywords: okvir, drvo, građa, lagani čelik, hladnooblikovani čelik, stub, greda, rog, nadvratnik, glavni stub, pomoćni stub, kratki stub, spisak rezanja, radionički crtež, panel
from: 3e38ffb9
---

Kartica {{ui:Okvir}} uokviruje panele koje opišete i daje ono što traže ekipa za okvire i drvna trgovina. Paneli se čuvaju u datoteci modela.

:::warning
Dimenzije, razmaci i nadvratnici su vaši. DetailCraft ne provjerava da li stub na tom razmaku nosi taj zid niti da li nadvratnik premošćuje taj otvor: to je stvar tabela vašeg propisa i vašeg inženjera.
:::

## Dodavanje panela

Izaberite {{ui:Dodaj zid}}, {{ui:Dodaj pod}} ili {{ui:Dodaj krov}}, zatim popunite dimenzije u milimetrima, materijal (drvo ili lagani čelik) i veličinu elementa. Dimenzije drveta su nazivni nazivi s obrađenim dimenzijama (2×4 je 38 × 89 mm). Čelični stubovi imaju nazive po dubini i debljini, na primjer `C92-1.2`.

## Zidovi

Zid ima donju veznu dasku, jednu ili više gornjih veznih dasaka (za čelik jednu šinu), krajnje stubove, stubove na razmaku koji zadate i za svaki otvor: dva glavna stuba, dva pomoćna stuba, nadvratnik zadane veličine i slojeva, te kratke stubove iznad nadvratnika (i ispod parapeta prozora). Svakom otvoru zadajte udaljenost od lijevog kraja, širinu i gornju i donju mjeru grube rupe, mjerenu od podne podloge; vrata imaju donju mjeru 0.

## Podovi i krovovi

Pod ima grede preko svoje širine duž raspona, obrubne grede na oba kraja i, ako to označite, blokove na sredini raspona. Krovni panel je zabat: par rogova na razmaku koji zadate (njihova dužina uključuje previs strehe duž kosine) i sljemenjaču.

## Šta dobijate

Svaki panel prikazuje svoje komade na crtežu u razmjeri, sa svakim komadom obilježenim, spisak rezanja po oznaci i ukupno. Tabela {{ui:Zaliha za kupovinu}} slaže sva rezanja svih panela u dužine zaliha, najkraće koje stane svako rezanje. {{ui:Spasi radionički crtež (SVG)}} zapisuje crtež; dugme {{ui:CSV}} zapisuje svaki spisak rezanja i spisak zaliha.

## Postavljanje panela u model

Ispod svakog panela zadajte gdje ide (x, y, z u milimetrima i ugao) i pritisnite {{ui:Postavi kao elemente}}: svaki komad postaje element modela, s obrađenim presjekom svoje veličine i težinom materijala (oko 500 kg/m³ za drvo, čelik za stubove). Zid ide duž ugla od svog donjeg lijevog kraja, s donjom ivicom na z; grede poda leže s donjom stranom na z; zabatna fasada krova ide duž ugla, s z na vrhu gornjih veznih dasaka zida. Svaki sloj nadvratnika je element postavljen pored drugog. Ponovno pritiskanje zamjenjuje elemente postavljene ranije, a {{ui:Ukloni postavljene elemente}} ih uklanja; svaki je jedan korak poništavanja. Analiza izostavlja ove elemente: nisu elementi čeličnog okvira.

## PDF listovi

{{ui:PDF listovi}} snima jednu A3 stranicu za svaki panel: panel u razmjeri sa svakim komadom obilježenim, ukupne dimenzije, spisak rezanja i naslovnu traku.

Problemi na panelu {{ui:Problemi}}: otvor preblizu kraja zida ili drugom otvoru, nadvratnik koji ne staje ispod gornjih veznih dasaka, komad duži od najdužeg komada zalihe.

Panel {{ui:Problemi}} također navodi **Sučelja (LOD 350)** za zidne panele i betonske zidove: otvor koji prelazi kraj ili vrh svog zida, dva otvora koja se preklapaju i otvor betonskog zida širi od 1000 mm bez obrubne armature. To su preporuke, ista pravila koja pokreće revizija u programu BimCraft; širina je početna vrijednost programa CadCraft, a ne standard.
