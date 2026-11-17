---
title: Veter, potresno mesto in kombinacije ASCE 7
summary: Ustvarite primere obremenitve vetra za zaprto togo stavbo, izračunajte projektne potresne vrednosti za mesto in ustvarite kombinacije ASCE 7 v zavihku Analiza.
keywords: veter, obremenitev vetra, asce 7, smerni postopek, izpostavljenost, zaprtost, potres, razred mesta, ss, s1, sds, sd1, usgs, spekter odziva, kombinacije obremenitev, lrfd, asd, kzt, kd, sunek
from: 676fcbf3
---

Trije bloki v zavihku {{ui:Analiza}} pripravijo vhodne podatke za veter in potres za okvir ter jih združijo: {{ui:Obremenitve vetra (ASCE 7, smerni postopek)}}, {{ui:Potresno mesto in sistem (ASCE 7)}} in {{ui:Kombinacije obremenitev po ASCE 7}}. So pomoč: **ni preverjanje po predpisu; vaš inženir pregleda rezultate.**

## Kaj boste naredili

Ustvarite primere obremenitve vetra za zaprto, togo stavbo, pridobite potresne vrednosti za mesto in ustvarite kombinacije, ki jih uporabljajo. Model potrebuje etaže, zato najprej zaženite analizo (glejte [Sile, reakcije in progibi](topic:frame-analysis)).

## Koraki

1. Odprite zavihek {{ui:Analiza}} in izberite {{ui:Zaženi}}, da so znane etaže in velikost stavbe. Če blok pove, da etaž ni, v njem izberite {{ui:Najdi etaže}}.
2. V {{ui:Obremenitve vetra (ASCE 7, smerni postopek)}} izberite {{ui:Izdaja}}, vpišite {{ui:Osnovna hitrost vetra V}} z vaše karte vetrov in izberite njeno {{ui:Enota hitrosti}}, nato {{ui:Izpostavljenost}} in {{ui:Zaprtost}}. Tam so tudi Kzt, Kd, G, nadmorska višina tal, Cp na zavetrni strani, ekscentričnost in smer.
3. V tabeli preberite tlak na vsaki etaži in silo na vsako etažo, nato izberite {{ui:Ustvari primere vetra}}. Primeri so +X, -X, +Y in -Y.
4. V {{ui:Potresno mesto in sistem (ASCE 7)}} izberite izdajo in vpišite Ss in S1 (SMS, SM1 in S1 za ASCE 7-22), razred mesta od A do D, kategorijo tveganja in potresno odporni sistem. Lahko pa vpišete zemljepisno širino in dolžino ter izberete {{ui:Poišči v USGS (na spletu)}}; spletno storitev vpraša le, ko pritisnete gumb.
5. V tabeli preberite Fa, Fv, SDS in SD1, R, Cd in Omega0 ter projektni spekter, nato izberite {{ui:Uporabi v bloku potresa}}. V bloku potresa pritisnite {{ui:Naredi potresne primere}} (glejte [Preverjanje betonskih elementov in potresne obremenitve](topic:concrete-and-seismic)).
6. V {{ui:Kombinacije obremenitev po ASCE 7}} izberite {{ui:Metoda}} (LRFD ali ASD) in izberite {{ui:Ustvari kombinacije ASCE 7}}. Analizo zaženite znova.

## Kaj je treba vedeti

- Veter: le zaprta toga stavba, smerni postopek. Prožna stavba potrebuje faktor sunka iz standarda, ki ga DetailCraft ne izdela.
- Razreda mesta E in F zahtevata študijo mesta in še nista izdelana.
- Seznam virov na dnu blokov pove, od kod prihaja vsaka številka in kaj je bilo izpuščeno.
- Iskanje USGS je bilo preizkušeno na nadomestni storitvi, ne na živi storitvi.
