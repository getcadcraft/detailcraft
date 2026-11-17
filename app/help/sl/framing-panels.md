---
title: Okvirji panelov iz lesa in lahkih profilov
summary: Okvirjite stenske, talne in strešne panele iz lesa ali lahkega jeklenega profila, z vsakim kosom, seznamom rezov, delavniško risbo in zalogo za nakup.
keywords: okvir, les, hlodovina, lahko jeklo, hladno oblikovano, steber, nosilec, glava, kraljevi steber, pomožni steber, kratek steber, seznam rezov, delavniška risba, panel
from: 3e38ffb9
---

Zavihek {{ui:Okvirje}} okvirja panele, ki jih opišete, in poda, kar ekipa za okvirje in lesna trgovina zahtevata. Paneli se shranijo v datoteko modela.

:::warning
Dimenzije, razmiki in glave so vaši. Program DetailCraft ne preverja, ali steber pri tem razmiku nosi to steno ali ali glava premošča to odprtino: to je naloga tabel vašega predpisa in vašega inženirja.
:::

## Dodajanje panela

Izberite {{ui:Dodaj steno}}, {{ui:Dodaj medetažno ploščo}} ali {{ui:Dodaj streho}}, nato izpolnite mere v milimetrih, material (les ali lahko jeklo) in velikost elementa. Velikosti lesa so nazivna imena z njihovimi obdelanimi merami (2×4 je 38 × 89 mm). Jekleni stebri so poimenovani po višini in debelini, npr. `C92-1.2`.

## Stene

Stena ima spodnjo lego, eno ali več zgornjih lag (za jeklo en tir), krajne stebre, stebre na razmiku, ki ga vnesete, in za vsako odprtino: dva kraljeva stebra, dva pomožna stebra, glavo velikosti in plasti, ki jo izberete, ter kratke stebre nad glavo (in pod parapetom okna). Vsaki odprtini vnesite razdaljo od levega konca, njeno širino ter grobi zgornji in spodnji rob, merjen od podlage; vrata imajo spodnji rob 0.

## Stropi in strehe

Medetažna plošča ima tramiče čez svojo širino vzdolž razpona, venčne tramiče na obeh koncih in, če to označite, zapore na sredini razpona. Strešni panel je dvokapnica: par krokev na razmiku, ki ga vnesete (njihova dolžina vključuje previs strehe vzdolž naklona), in slemenska letev.

## Kaj dobite

Vsak panel prikaže svoje kose na risbi v merilu, pri čemer je vsak kos označen, seznam rezov po oznaki in skupno vsoto. Tabela {{ui:Zaloga za nakup}} razporedi vse reze panelov v dolžine zaloge, najkrajše, ki sprejmejo rezane kose vsake palice. {{ui:Shrani delavniško risbo (SVG)}} zapiše risbo; gumb {{ui:CSV}} zapiše vse sezname rezov in seznam zaloge.

## Postavitev panela v model

Pod vsakim panelom navedite, kam gre (x, y, z v milimetrih in kot), nato pritisnite {{ui:Postavi kot elemente}}: vsak kos postane element modela z obdelanim prerezom svoje velikosti in težo materiala (okoli 500 kg/m³ za les, jeklo za stebre). Stena teče vzdolž kota od svojega spodnjega levega konca, njen spodnji rob je na z; tramiči medetažne plošče ležijo tako, da je njihova spodnja stran na z; pogled na streho vzdolž kota poteka z na zgornjem robu zgornjih lag. Vsaka plast glave je element ob elementu. Ponovni pritisk zamenja elemente, postavljene prej, {{ui:Odstrani postavljene elemente}} pa jih odstrani; vsak je en korak razveljavitve. Analiza teh elementov ne upošteva: niso to elementi jeklenega okvirja.

## Datoteke PDF

{{ui:Listi PDF}} shrani eno stran A3 za vsak panel: panel v merilu z vsakim kosom označenim, skupne mere, seznam rezov in naslovni trak.

Težave na podoknu {{ui:Težave}}: odprtina, ki je preblizu konca stene ali druge odprtine, glava, ki se ne prilega pod zgornjimi lagami, kos, ki je daljši od najdaljše zaloge.

Podoknu {{ui:Težave}} so dodana tudi **Vmesniki (LOD 350)** za stenske panele in betonske stene: odprtina, ki sega čez konec ali vrh svoje stene, dve odprtini, ki se prekrivata, in odprtina betonske stene, širša od 1000 mm, brez obrobne palice. To so nasveti, enaka pravila, ki jih izvaja revizija programa BimCraft; širina je izhodiščna vrednost programa CadCraft, ne standard.
