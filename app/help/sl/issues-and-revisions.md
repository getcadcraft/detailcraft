---
title: Izdaje, revizije in dnevnik sprememb risb
summary: Vodite isto zgodovino izdaj kot arhitekt: preberite izdaje, zabeležite navodila za gradbišče, delavniške risbe in povezane modele glede na izdajo ter preberite dnevnik sprememb risb.
keywords: izdaja, revizija, revizije, dnevnik sprememb, dnevnik sprememb risb, register risb, navodilo za gradbišče, delavniška risba, povezani model, javni razpis, gradnja, zgodovina izdaj, delavniške risbe, izdelava
from: 4b9a1b7b
---

## Kaj boste naredili

Delajte z isto zgodovino izdaj kot preostala ekipa. Preverite, kateri listi so bili izdani pri kateri reviziji, in zabeležite, kar se dogaja na gradbišču, pri izdaji, na katero se nanaša.

## Koraki

1. Odprite **Izdaje in revizije**.
2. Izberite **Preberi zgodovino izdaj** in izberite datoteko `.issues.json`, shranjeno iz BimCraft ali druge aplikacije. Njene izdaje in zapisi se dodajo vašim. Nič se ne zamenja.
3. Izberite **Dodaj zapis** za navodilo za gradbišče, delavniško risbo, nabor označb, povezani model ali opombo. Izberite izdajo, na katero se nanaša, in njeno stanje. Izbrana datoteka se zabeleži po imenu, velikosti in SHA-256; datoteka ostane tam, kjer je.
4. **Dnevnik sprememb risb** prikazuje eno vrstico za vsak list in en stolpec za vsako izdajo. Revizija v oklepaju je bila ponovno izdana nespremenjena.
5. **Prenesi dnevnik sprememb (CSV)** shrani izdaje, tabelo listov in zapise. **Shrani zgodovino izdaj** zapiše datoteko, ki jo berejo druge aplikacije.

## Dobro je vedeti

- Liste še vedno izdajate iz **Risbe**, list za list. Te izdaje se prikažejo tukaj: liste, izdane na isti dan z isto opombo, so ena izdaja.
- Zapisi in izdaje, ki ste jih prebrali, se shranijo v datoteko modela. Vsaka sprememba je en korak Razveljavi.
- Branje iste datoteke dvakrat ničesar ne doda dvakrat. Ko imata dve kopiji isti zapis, se obdrži novejša.
