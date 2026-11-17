---
title: Nadaljevanja
summary: Z vijačenimi pokrovnimi ploščami na pasovih in steblu zvežite dva kosa nosilca ali stebra od konca do konca.
keywords: nadaljevanje, nadaljevanje nosilca, nadaljevanje stebra, pokrovna plošča, spojna plošča, plošča pasu, plošča stebla, vijačeno nadaljevanje, spoj, dvig, povezava
from: 97d141c2
---

Vijačeno nadaljevanje zveže dva kosa enega I-profila od konca do konca: pokrovna plošča je zunaj vsakega pasu, na vsaki strani stebla pa je ena plošča; vse je privijačeno skozi oba kosa. DetailCraft kosa skrajša do reže, postavi štiri plošče, izvrta luknje v ploščah in v obeh kosih, doda vijake ter opozori na robne razdalje, razmike in prileganje.

## Kje deluje

- Dva nosilca ali dva dvižna dela stebra z **istim I-profilom**, ki se stikata od konca do konca **v isti smeri**: konca sta največ 50 mm narazen, kosa sta vzporedna in na isti premici (v 1 mm). Vsak kos je lahko narisan v katerikoli smeri.
- Delujejo vodoravni, nagnjeni in navpični kosi.
- Dva kosa različne višine ali širine pasu sta zavrnjena, prav tako kanali, koti in cevi.

## Dodajanje nadaljevanj

1. Narišite dva kosa, ki se stikata od konca do konca. Če želite razdeliti že narisan element, ga narišite znova kot dva kosa.
2. Izberite enega (ali oba) in izberite {{ui:Nadaljevanje}} v meniju {{ui:Več}} skupine {{ui:Poveži}}.
3. Vsako prosto stikališče izbranih kosov z drugim kosom istega profila dobi nadaljevanje. Statusna vrstica pove, koliko jih je.

Izberite nadaljevanje (kliknite eno od njegovih plošč), da spremenite nastavitve v desnem podoknu. {{ui:Uporabi za podobne (n)}} ga kopira na vsako drugo prosto stikališče med kosi istega profila.

## Nastavitve (mm)

| Nastavitev | Privzeto | Kaj počne |
|---|---|---|
| Reža med koncema | 10 | Vsak kos se skrajša za polovico reže |
| Premer vijaka, luknja, kakovost, dodatek dolžine | 20, 22, A325, 30 | Enako kot pri končnih ploščah |
| Debelina plošče pasu | 12 | Plošča je široka kot pas |
| Vrste vijakov v pasu (na vsaki strani) | 3 | Vrste čez pas na vsaki strani stika |
| Korak vijakov v pasu | 75 | Vzdolž elementa |
| Razmik vijakov v pasu | 0 | Med dvema vrstama vijakov; 0 = širina pasu minus 80 |
| Končna razdalja pasu | 40 | Od konca elementa do prvega vijaka in od zadnjega vijaka do konca plošče |
| Debelina plošče stebla | 8 | Ena na vsaki strani stebla |
| Vrste vijakov v steblu | 3 | Navzgor po steblu, na sredini |
| Stolpci vijakov v steblu (na vsaki strani) | 2 | Vzdolž elementa na vsaki strani stika |
| Korak vijakov v steblu, navzgor / vzdolž elementa | 75, 75 | |
| Končna razdalja stebla | 40 | Enako kot za pasove |
| Višina plošče stebla | 0 | 0 = prosto steblo med zaobljitvama minus 10 zgoraj in spodaj |
| Material plošče | A36 | Besedilo |

Dolžine plošč izhajajo iz vijakov: plošča pasu = reža + 2 × (2 × končna razdalja + (vrste − 1) × korak); plošče stebla enako s stolpci. S privzetimi vrednostmi so plošče pasu dolge 470.

## Dobro je vedeti

- Plošče pripadajo **prvemu narisanemu** od obeh kosov (v njegovih lastnostih se imenuje prvi kos): prikazane so na njegovi sestavni risbi in gredo z njim, privijačene, ne zvarjene. Sestavna risba drugega kosa kaže samo njegove luknje.
- Vijaki v pasovih držijo pas in njegovo ploščo; vijaki v steblu držijo steblo in obe plošči stebla. Dolžine vijakov so navedene ločeno v lastnostih.
- Opozorila uporabljajo iste najmanjše vrednosti EN 1993-1-8 kot druge povezave (končna in robna razdalja 1.2 × luknja, korak 2.2 × luknja vzdolž in 2.4 × luknja napreč), poleg tega pa plošča stebla, globlja od prostega stebla, in vijaki v pasu, ki so preblizu stebla za zaobljitev.
- DetailCraft nadaljevanja ne projektira (brez preverjanja nosilnosti) in ne izdeluje polnilnih plošč za kose različnih debelin.
- Kopiranje obeh kosov kopira tudi njuno nadaljevanje; brisanje katerega koli kosa izbriše nadaljevanje.
