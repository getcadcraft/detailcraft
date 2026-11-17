---
title: Vozliščne plošče diagonal
summary: Povežite konec diagonale s stebrom ali nosilcem z vozliščno ploščo: kotniki in ploščati profili privijačeni, cevi zarezane in zavarjene.
keywords: vozliščna plošča, gusset, gusset plate, diagonala, povezje, navpično povezje, kotna diagonala, ploščati profil, trak, diagonala HSS, rezilna plošča, zarezana cev, povezava
from: 22f6598d
---

Vozliščna plošča za diagonalo je v delavnici zavarjena na steber (ali nosilec), na katerega se diagonala naslanja, v ravnini diagonale. DetailCraft skrajša diagonalo, da na stiku ne zadeva ob nič, postavi in dimenzionira vozliščno ploščo ter jo poveže z diagonalo: **kotnik** ali **ploščati trak** z eno vrsto vijakov ali **cev** (kvadratna, pravokotna ali okrogla HSS), ki se nasadi čez vozliščno ploščo in zavari.

## Kje deluje

- Konec diagonale leži na črti stebra ali nosilca (do 1 mm), diagonala pa ni skoraj vzporedna tej črti. Če je steber podpora, je to steber; sicer nosilec.
- Vozliščna plošča leži v ravnini diagonale in črte podpore. **Kotnik** mora imeti eno krilo v tej ravnini, **ploščati trak** pa svojo ploskev: zasukajte diagonalo (njen {{ui:Zasuk (°)}}), dokler ne. Če so krila kotnika pod 45° na ravnino, DetailCraft to pove in ničesar ne zgradi.
- I-profili in U-profili kot diagonale se ne povezujejo.

## Dodajanje vozliščnih plošč

1. Izberite eno ali več diagonal.
2. Izberite {{ui:Vozliščna plošča}} v meniju {{ui:Več}} skupine {{ui:Poveži}}.
3. Vsak konec izbranih diagonal, ki se naslanja na steber ali nosilec in še nima vozliščne plošče, dobi eno.

Izberite vozliščno ploščo (kliknite ploščo), da spremenite njene nastavitve. {{ui:Uporabi za podobne (n)}} jo kopira na vsak prosti konec diagonale z enakima profiloma diagonale in podpore.

## Kaj DetailCraft izračuna

- **Skrajšanje.** Diagonala je na tem koncu skrajšana, da njeni vogali na stiku ne zadevajo ob nič: za {{ui:Odmik diagonale}} (25), ob vsakem elementu na stiku (poleg njega ali čez njegov konec, če se element tam konča) in ob podložni plošči pod stebrom.
- **Vijaki (kotniki, ploščati profili).** {{ui:Vijaki}} (3) v eni vrsti vzdolž diagonale, prvi na razdalji {{ui:Razdalja vijaka do konca}} (40) od reza, z {{ui:Korak vijakov}} (75). Pri kotniku gredo skozi krilo v ravnini vozliščne plošče, na razdalji {{ui:Razmik vijakov}} od pete (0 = sredina krila); pri ploščatem profilu na svoji središčnici (ali odmaknjeno za razmik). Dolžina sprijetja = krilo ali ploščati profil + vozliščna plošča.
- **Vozliščna plošča.** Pravokotnik: od površine podpore navzven čez zadnji vijak za razdaljo do konca, vzdolž podpore toliko, kolikor vijaki potrebujejo. Naslanja se na hrbtno stran krila kotnika (ali na površino ploščatega profila). Pri cevi teče skozi sredino cevi, na dolžini {{ui:Prekrivanje cevi na vozliščni plošči}} (200) cevi, z dovolj prostora za vare.
- **Stiki.** Na podnožju stebra se vozliščna plošča spusti na podložno ploščo. Kjer nosilec seka stik (diagonala navzgor v vogal nosilec–steber), vozliščna plošča ostane pod ali nad nosilcem. Če zaradi tega vijaki ali prekrivanje nimajo več razdalje do konca, DetailCraft opozori.
- **Vari.** Vozliščna plošča na podporo, z obeh strani. Cev na vozliščno ploščo, štiri črte vzdolž prekrivanja.

## Dobro je vedeti

- Vozliščna plošča spada v sestav podpore (zavarjena v delavnici). Diagonala je dobavljena z izvrtanimi luknjami in gre v svojo datoteko NC.
- Zarez cevi ni izrezan v modelu; [preverjanje kolizij](topic:clash-check) pusti diagonalo in njeno vozliščno ploščo pri miru.
- Vozliščna plošča ni zavarjena na nosilec, ki se je dotika; vozliščne plošče, zavarjene hkrati na nosilec in steber, skošeni vogali ter razporeditev delovne točke pri povezavi po metodi Uniform Force Method še niso izdelani.
- DetailCraft ne dimenzionira vozliščne plošče ali vijakov (brez preverjanja trdnosti); opozorila so o razmikih in prileganju.
