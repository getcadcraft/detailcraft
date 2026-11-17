---
title: Provjera IFC izvoza prema IDS-u naručitelja
summary: Učitajte .ids datoteku koju ste dobili i prije slanja IFC-a pogledajte u Problemima svaki izvezeni dio koji ne ispunjava zahtjeve.
keywords: ids, information delivery specification, buildingsmart, zahtjevi, isporuka, provjera, kontrola kvalitete, qa, izvoz ifc, svojstvo, materijal, nabava
from: 50d0f785
---

## Što ćete učiniti

IDS (Information Delivery Specification, buildingSMART standard) je popis onoga što IFC mora sadržavati. DetailCraft provjerava IFC koji bi izvezao (ista datoteka koju piše {{ui:IFC}}) prema IDS-u koji ste dobili i navodi svaki dio koji ne ispunjava zahtjeve.

## Koraci

1. Otvorite ili nacrtajte svoj model.
2. Kliknite {{ui:Provjeri prema IDS-u…}} u grupi {{ui:Izlaz}} na alatnoj traci.
3. Kliknite {{ui:Učitaj .ids datoteku…}} i odaberite datoteku. Ništa se ne prenosi.
4. Pročitajte rezultat: svaku specifikaciju s {{ui:Zadovoljava}} ili {{ui:Ne zadovoljava}} i koliko je elemenata na nju primjenjivo.
5. Otvorite {{ui:Problemi}} ({{key:Ctrl+Shift+M}}) i kliknite neuspjeh: štap, spoj, stubište ili temelj iz kojeg potječe bit će odabran, a prikaz će se približiti tome.

## Što biste trebali vidjeti

- Jedno upozorenje za svaki izvezeni element i zahtjev koji ne ispunjava, s nazivom specifikacije, onim što IDS traži i onim što izvoz ima.
- Izvješće provjere (u Problemima) počinje s IDS-om: njegov naslov, verzija, autor i brojevi za svaku specifikaciju.

## Dobro je znati

- IDS se sprema u datoteku modela pa se provjerava ponovno kada otvorite model. Učitavanje ili zaboravljanje IDS-a je jedan korak koji se može poništiti.
- Svaka promjena se ponovno provjerava malo kasnije; kod velikog modela provjera čeka malo duže između pokretanja.
- GlobalId-ovi izvoza dolaze iz naziva modela i brojeva dijelova unutar DetailCraft-a, pa ostaju isti od jedne do druge provjere. Preimenovanje modela daje svakom elementu nove GlobalId-ove.
- Brojevi se uspoređuju u SI jedinicama (izvoz je u milimetrima; duljine se prvo pretvaraju u metre).
- Uzorci u IDS-u čitaju se kao cijela vrijednost. `^` na početku i `$` na kraju također se uzimaju kao „cijela vrijednost“, kao što većina IDS datoteka i misli.

## Dalje

- [Izvoz IFC-a](topic:ifc-export)
