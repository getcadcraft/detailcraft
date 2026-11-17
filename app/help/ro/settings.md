---
title: Setările DetailCraft
summary: Porniți membrii noi ca profile US sau europene, stabiliți cât de departe mută Duplicare o copie, alegeți dacă copiile aduc îmbinările și arătați sau ascundeți șuruburile în vizualizarea 3D.
keywords: setări, preferințe, dimensiune foaie, dimensiune hârtie, desene, opțiuni, oțel, aisc, en, european, profile US, profile metrice, profil implicit, clasă, s355, a992, decalaj la duplicare, decalaj la lipire, copiere îmbinări, șuruburi, tije de ancorare, ascundere șuruburi, resetare
from: e46cea57
---

Deschideți {{ui:Setări}} cu roata dințată din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:DetailCraft}}, conține setările care țin de această aplicație; {{ui:General}} conține cele pe care le împart toate aplicațiile CadCraft (temă, bară de instrumente, panouri). Setările DetailCraft există doar în aplicație: le schimbați aici, au efect imediat, iar acest browser le reține. Nu sunt salvate în fișierul modelului.

## Membri noi

Ce profile și ce clase pornesc instrumentele de plasare:

| Instrument | Profile US (AISC), A992 | Profile europene (EN), S355 |
|---|---|---|
| {{ui:Grindă}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stâlp}} | W12x50, A992 | HEB200, S355 |
| {{ui:Contravântuire}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placă}} | A36 | S355 |

Profilele US sunt cele de pornire. Alegerea europeană folosește un HEA160 pentru contravântuiri, pentru că catalogul EN al DetailCraft nu are încă profile tubulare ([Catalogul de profile](topic:profile-catalog)). Puteți alege oricând alt profil și altă clasă pentru următoarea piesă, din panoul {{ui:Proprietăți}}, cât timp un instrument de plasare este activ. Membrii deja din model își păstrează propriul profil și propria clasă.

## Duplicare și lipire

- **Decalaj (mm)**: x, y și z. {{ui:Duplicare}} ({{key:Mod+D}}) pune copia la această distanță de original, iar forma {{ui:Lipire cu decalaj (mm, față de original)}} pornește cu ea. Începe de la 6000, 0, 0: o travee de 6 m de-a lungul grilelor numerotate. Setați-o la distanța dintre travee sau la înălțimea unui nivel pe z, ca să copiați un etaj în sus.
- **Copiere plăci de capăt și plăci de bază odată cu barele lor** (activat la pornire): o îmbinare vine cu o copie doar când fiecare element pe care îl leagă este copiat. Debifați-o ca să copiați membrii și tălpile fără îmbinările lor, de exemplu ca să încercați o altă îmbinare pe copie.

Vezi [Copiere, lipire și duplicare](topic:copy-paste).

## Vizualizarea 3D

**Arătare șuruburi și tije de ancorare** (activat la pornire). Debifați-o ca să le ascundeți în vizualizare și să vedeți găurile și plăcile unei îmbinări aglomerate. Șuruburile ascunse nu pot fi date clic; faceți clic pe placă ca să selectați îmbinarea. Lista de materiale, desenele și toate exporturile includ în continuare fiecare șurub și fiecare tijă.

## Indicatorul din colț

Ce apare în colțul vizualizării 3D: **ViewCube** (la pornire; dreapta sus: faceți clic pe o față, o muchie sau un colț ca să priviți de acolo, trageți-l ca să orbitați, trageți inelul busolei ca să rotiți modelul), **Pictograma axelor** (un mic marcaj X, Y, Z jos în stânga, care se mișcă odată cu vederea: X roșu, Y verde, Z albastru) sau **Niciunul**. Doar în {{ui:3D}}; {{ui:Plan}} și {{ui:Fațadă}} nu arată niciunul. Vezi [Cubul de vizualizare](topic:view-cube).

## Resetare

{{ui:Resetare setări DetailCraft}} din partea de jos a casetei de dialog le readuce la pornire (profile US, decalaj 6000, 0, 0, îmbinări copiate, șuruburi arătate), împreună cu cele din {{ui:General}}.

## Desene

**Dimensiunea foii**: foile desenelor și desenele de execuție se fac pe orizontală: A4, A3 (la pornire), A2, A1, ANSI B, ANSI C sau ANSI D. Ferestrele {{ui:Desene}} și de desen de execuție au aceeași listă. Vezi [Desene de aranjament general și de ansamblu](topic:drawings).

## Armătură

- **Denumiri ASTM ale barelor**: #3 până la #11, sau denumirile metrice soft #10 până la #36 pentru aceleași bare.
- **Coduri de formă pentru tabelul de întinderi**: S, L, U ale DetailCraft; tipurile ACI 315; sau codurile de formă BS 8666. Vezi [Referință pentru armătură](topic:rebar-reference).

## Tragere pentru selectare

**Dreptunghi** (ca înainte) sau **Lasou**: o linie liberă, cu {{key:Space}} care trece între înăuntru, atingere și gard cât trageți. Vezi [Selectare cu fereastră](topic:select-and-change#select-with-a-window).
