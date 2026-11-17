---
title: Preverjanja izdelljivosti
summary: Težave za stvari, ki jih detajlist opazi s pogledom: vijak, do katerega ne seže ključ, vijaki preblizu za nasadni ključ, kotni vari zunaj mej velikosti, vari, do katerih gorilnik ne seže, in cevi, ki zadržujejo vodo.
keywords: izdelljivost, ključ, nasadni ključ, dostop do vijaka, zategovanje, velikost vara, kotni var, najmanjši var, največji var, voda, odprtina za zračenje, odprtina za odtok, vroče cinkanje, votli profil, težave
from: 72315151
---

DetailCraft išče štiri vrste težav, ki jih nobeno preverjanje nosilnosti ne najde, in jih našteje v podoknu {{ui:Težave}}. So opozorila in opombe za pregled, ne napake: model še vedno nastane.

## Vijak, do katerega ključ ne seže

Za vsak vijak DetailCraft postavi nasadni ključ čez glavo in čez matico. Nasadni ključ je valj, širok kot matica čez vogale, plus 4 mm debela stena, dolg 60 mm. Če znotraj tega valja stoji rebro nosilca, pasnica, plošča ali diagonala, težava navede spoj, koliko vijakov, kateri del je v poti in kako daleč od vijaka je.

Nasadni ključ je tipičen udarni nasadni ključ. Ploščati ključ potrebuje manj prostora, večje orodje več. Povprašajte svojega povezanega pomočnika, naj zažene `constructability_check` z drugim `socketLength`, da vidite, kako se odgovor spremeni.

## Vijaki preveč skupaj za nasadni ključ

Nasadni ključ nad enim vijakom se ne sme dotikati glave naslednjega. Vijaki spoja, ki so bližje kot širina nasadnega ključa plus glava soseda, so našteti z ugotovljenim in potrebnim razmikom.

## Velikosti kotnih varov

AISC 360-16, preglednica J2.4 določa najmanjši kotni var glede na debelino tanjšega dela (3 mm do debeline 6.35 mm, 5 mm do 12.7, 6 mm do 19.05, nad tem 8 mm), J2.2b pa največjega vzdolž roba materiala: ni večji od materiala, če je ta tanjši od 6.35 mm, sicer 1.6 mm manj. Spoji z isto velikostjo na isti debelini so našteti kot ena težava.

Uporabljena debelina je najtanjši del, ki ga var navaja, zato je naveden 8 mm var po vsem obodu nosilca z 6.35 mm rebrom.

## Voda in odprtine za zračenje

- **Odprt zgornji konec** votlega profila, ki stoji pokonci ali je nagnjen za več kot 10°, pušča dež notri.
- Votel profil, **zaprt na obeh koncih**, potrebuje odprtino za zračenje in odtočno luknjo; vroče cinkanje in pritisk segretega zraka oba zahtevata eno.

## Ali varilec doseže

Kotni var se naredi z gorilnikom na pol poti med obema ploskvama, ki ju spaja. Za vsak kotni var po obodu (čelna plošča, podložna plošča, poševna plošča) preverjanje vzame obris preseka elementa pri plošči in vsakih 20 mm požene pot gorilnika pod kotom 45° ven od mesta, kjer njegov nastavek (na začetku polmer 10 mm) prvič pride mimo obeh ploskev, še za 30 mm. Če pot zadene pasnico samega nosilca ali kak drug del, je ta delež vara naveden z delom in razdaljo. Te številke so tipične, ne standardne: za postopek in nastavek vprašajte svojega izdelovalca. Vari vzdolž dveh robov (strižni jeziček) niso določeni in se ne preverjajo.
