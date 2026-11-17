---
title: Preverjanje izvoza IFC glede na IDS naročnika
summary: Naložite datoteko .ids, ki ste jo dobili, in v Težavah poglejte vsak izvoženi del, ki ji ne ustreza, še preden pošljete IFC.
keywords: ids, specifikacija za dostavo informacij, buildingsmart, zahteve, dostava, preverjanje, validacija, qa, izvoz ifc, lastnost, material, nabava
from: 50d0f785
---

## Kaj boste naredili

IDS (Information Delivery Specification, standard buildingSMART) je seznam tega, kar mora vsebovati IFC. DetailCraft preveri IFC, ki bi ga izvozil (isto datoteko, ki jo zapiše {{ui:IFC}}), glede na prejeti IDS, in našteje vsak del, ki ne ustreza.

## Koraki

1. Odprite ali narišite svoj model.
2. Kliknite {{ui:Preveri glede na IDS …}} v skupini {{ui:Izhod}} orodne vrstice.
3. Kliknite {{ui:Naloži datoteko .ids …}} in izberite datoteko. Nič se ne naloži.
4. Preberite rezultat: vsaka specifikacija z {{ui:Ustreza}} ali {{ui:Ne ustreza}} in številom elementov, na katere se nanaša.
5. Odprite Težave ({{key:Ctrl+Shift+M}}) in kliknite neuspeh: konstrukcijski element, spoj, stopnišče ali temelj, iz katerega izhaja, se izbere in pogled se približa.

## Kaj naj bi videli

- Eno opozorilo za vsak izvoženi element in zahtevo, ki ji ne ustreza, z imenom specifikacije, tem, kar IDS zahteva, in tem, kar izvoz ima.
- Poročilo o preverjanju (v Težavah) se začne z IDS: njegov naslov, različica, avtor in števila za vsako specifikacijo.

## Dobro je vedeti

- IDS je shranjen v datoteki modela, zato se ob odpiranju modela ponovno preveri. Nalaganje ali pozabitev sta en korak, ki ga lahko razveljavite.
- Vsaka sprememba se čez trenutek ponovno preveri; pri velikem modelu preverjanje med posameznimi zagoni malo dlje počaka.
- GlobalId-ji izvoza nastanejo iz imena modela in številk delov v DetailCraftu, zato med posameznimi preverjanji ostanejo enaki. Preimenovanje modela da vsakemu elementu nove GlobalId-je.
- Številke se primerjajo v enotah SI (izvoz je v milimetrih; dolžine se najprej pretvorijo v metre).

- Vzorci v IDS se berejo kot celotna vrednost. Znak `^` na začetku in `$` na koncu se prav tako štejeta kot „celotna vrednost“, kot ju večina datotek IDS tudi misli.

## Naslednje

- [Izvoz IFC](topic:ifc-export)
