---
title: Drveni i laki čelični okvirni paneli
summary: Okvirite zidne, podne i krovne panele od drva ili laganog čelika, sa svakim dijelom, popisom za rezanje, radioničkim crtežom i zalihom za kupnju.
keywords: okvir, drvo, građa, lagani čelik, hladno oblikovan, stup, greda, rog, nadvoj, glavni stup, pomoćni stup, kratki stup, popis za rezanje, radionički crtež, panel
from: 3e38ffb9
---

Kartica {{ui:Okvir}} okvira panele koje opišete i daje ono što tesarska ekipa i trgovina građom traže. Paneli se spremaju u datoteku modela.

:::warning
Dimenzije, razmak i nadvoji su vaši. DetailCraft ne provjerava hoće li stup na tom razmaku nositi taj zid niti hoće li nadvoj premostiti taj otvor: to je za tablice vašeg propisa i za vašeg inženjera.
:::

## Dodavanje panela

Odaberite {{ui:Dodaj zid}}, {{ui:Dodaj pod}} ili {{ui:Dodaj krov}}, zatim ispunite dimenzije u milimetrima, materijal (drvo ili lagani čelik) i veličinu štapa. Veličine drva su nazivne oznake s njihovim obrađenim dimenzijama (2×4 je 38 × 89 mm). Čelični stupovi imenuju se prema visini i debljini, na primjer `C92-1.2`.

## Zidovi

Zid ima donju rubnu gredicu, jednu ili više gornjih rubnih greda (za čelik jednu vodilicu), krajnje stupove, stupove na razmaku koji zadate i za svaki otvor: dva glavna stupa, dva pomoćna stupa, nadvoj zadane veličine i slojeva te kratke stupove iznad nadvoja (i ispod praga prozora). Za svaki otvor zadajte njegovu udaljenost od lijevog kraja, širinu te gornji i donji rub grubog otvora mjereno od podne ploče; vrata imaju donji rub 0.

## Podovi i krovovi

Pod ima grede preko svoje širine uz raspon, obrubne grede na oba kraja i, ako ih označite, ukrute na sredini raspona. Krovni panel je dvostrešni: par rogova na razmaku koji zadate (njihova duljina uključuje istak strehe duž kosine) i sljemenjak.

## Što dobivate

Svaki panel prikazuje svoje dijelove na crtežu u mjerilu, sa svakim označenim dijelom, popis za rezanje po oznaci i ukupno. Tablica {{ui:Zaliha za kupnju}} slaže sve rezove svih panela u duljine zaliha, najkraće koje stanu u rezove svake šipke. {{ui:Spremi radionički crtež (SVG)}} zapisuje crtež; gumb {{ui:CSV}} zapisuje svaki popis za rezanje i popis zaliha.

## Postavljanje panela u model

Ispod svakog panela upišite gdje ide (x, y, z u milimetrima i kut) i pritisnite {{ui:Postavi kao štapove}}: svaki dio postaje štap modela, s obrađenim presjekom svoje veličine i težinom materijala (oko 500 kg/m³ za drvo, čelik za stupove). Zid ide duž kuta od svog donjeg lijevog kraja, s donjim rubom na z; grede poda leže donjom stranom na z; zabatna ravnina krova ide duž kuta, s z na vrhu gornjih rubnih greda zida. Svaki sloj nadvoja je štap uz štap. Ponovno pritisnite i zamijenit će se prije postavljeni štapovi, a {{ui:Ukloni postavljene štapove}} ih uklanja; svaka je to jedna radnja poništavanja. Analiza izostavlja te štapove: nisu čelični štapovi okvira.

## PDF listovi

{{ui:PDF listovi}} sprema jednu A3 stranicu za svaki panel: panel u mjerilu sa svakim označenim dijelom, ukupne dimenzije, popis za rezanje i naslovnu traku.

Problemi u panelu {{ui:Problemi}}: otvor preblizu kraju zida ili drugom otvoru, nadvoj koji ne stane ispod gornjih rubnih greda, dio duži od najduže zalihe.

Panel {{ui:Problemi}} također navodi **Sučelja (LOD 350)** za zidne panele i betonske zidove: otvor koji prelazi kraj ili vrh svog zida, dva otvora koja se preklapaju i otvor u betonskom zidu širi od 1000 mm bez pojačanja otvora. To su savjeti, ista pravila koja pokreće BimCraftova revizija; širina je početna vrijednost CadCrafta, a ne standard.
