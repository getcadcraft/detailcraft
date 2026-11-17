---
title: Dodajanje izvrtin in izrezov
summary: Vnesite izvrtine v stojine, pasnice in plošče ter izrežite pasnice na koncu grede, merjeno od reznega konca dela.
keywords: izvrtina, izvrtine, izvrtina za vijak, izrez, zarez, rez, izrezovanje, vrtanje, luknjanje, izvrtina v stojini, izvrtina v pasnici
from: 33d12398
---

Izvrtine in izrezi se vnašajo po položaju. Pripadajo elementu in se premikajo skupaj z njim.

Izvrtine, ki jih ustvarijo spoji (čelne plošče, podložne plošče), so dodane samodejno; teh ne vnašate sami. Navedene so kot „… izvrtine iz spojev (uredite spoj)“.

## Od kod merimo položaje

- **x** teče vzdolž dela od njegovega **reznega začetka**: začetnega konca po tem, ko ga spoj prireže. Tako je x = 0 dejanski konec jekla, ne točka mreže.
- **y** merimo čez ploskev od središča prereza:
   - na **stojini**: navzgor (pozitivno) ali navzdol od sredine višine;
   - na **pasnici** ali **plošči**: čez širino, od središčnice.
- Začetek elementa je prva točka, ki ste jo kliknili, ko ste ga postavili. Vrstice {{ui:Konca (x, y, z mm)}} kažejo, kateri konec je kateri.

## Dodajanje izvrtine

1. Izberite element.
2. V polju {{ui:Izvrtine}} v podoknu {{ui:Lastnosti}} izberite {{ui:Ploskev}}: {{ui:Stojina}}, {{ui:Zgornja pasnica}} ali {{ui:Spodnja pasnica}} (za profil I, U-profil ali pravokotno cev) ali {{ui:Ploskev plošče}} (za ploščo).
3. Vnesite {{ui:x vzdolž (mm)}}, {{ui:y počez (mm)}} in {{ui:Premer (mm)}}. Obrazec začne z x 100, y 0, premerom 22.
4. Izberite {{ui:Dodaj izvrtino}}.

Vrstica stanja izpiše „Izvrtina dodana. x je od reznega začetka; y od središča prereza (stojina: navzgor, pasnica/plošča: počez).“ Izvrtina se prikaže na seznamu in v pogledu kot temen čep skozi ploskev.

Izvrtino odstranite z gumbom × ob njej na seznamu.

Kotniki in okrogle cevi za zdaj ne sprejemajo izvrtin: njihovo okno {{ui:Izvrtine}} to pove.

:::note
V 3D pogledu so izvrtine prikazane kot temni čepi, ne kot luknje, vrezane v jeklo. So pa prave izvrtine v datotekah NC, delavniških risbah in izvozu IFC.
:::

Izvrtina, katere x je izven ene od krajišč dela, se v zavihku {{ui:Težave}} pokaže kot „izvrtina je izven konca dela“.

## Dodajanje izreza

Izrezi so za profile I: odrežejo zgornjo ali spodnjo pasnico (in to globino stojine) na enem koncu, da greda prosto preide preko drugega elementa.

1. Izberite element v obliki profila I.
2. V polju {{ui:Izrezi}} izberite {{ui:Konec}} ({{ui:Začetek}} ali {{ui:Konec}}) in {{ui:Stran}} ({{ui:Zgoraj}} ali {{ui:Spodaj}}).
3. Vnesite {{ui:Dolžina (mm)}} (vzdolž grede od tega konca) in {{ui:Globina (mm)}} (navzdol od vrha ali navzgor od spodaj). Obrazec začne s 100 x 40.
4. Izberite {{ui:Dodaj izrez}}.

Pogled prikaže izrez, izrezan iz jekla. Seznam se glasi npr. „Zgoraj na začetku: 100 x 40“. Odstranite ga z njegovim ×.

Izrezi so pravokotni: notranji kot za zdaj nima polmera.

## Kako izvrtine in izrezi vplivajo na oznake

Dva dela dobita isto oznako dela samo, če se njuni izvrtine in izrezi ujemata v 1 mm, pri čemer je dovoljen obrat dela. Dodajanje izvrtine enemu nosilcu skupine mu dodeli novo oznako. Glejte [Pravila oznak](topic:mark-rules).
