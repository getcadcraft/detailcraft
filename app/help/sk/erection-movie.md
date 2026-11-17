---
title: Plán montáže a film
summary: Zadajte žeriav a jeho tabuľku nosnosti, pozrite si každý zdvih skontrolovaný voči tabuľke v poradí fáz a uložte film montáže, ktorý sa prehrá offline na ľubovoľnom telefóne.
keywords: montáž, žeriav, zdvih, tabuľka nosnosti, polomer, nosnosť, viazanie, sekvencia, film, animácia, telefón, offline, plán zdvihu
from: fa7b0133
---

Karta {{ui:Montáž}} premení model na príkaz montáže a skontroluje každý zdvih voči žeriavu, ktorý opíšete. Plánuje z čísel, ktoré zadáte. Nie je to plán zdvihu: ten vypracujú viazač bremien a obsluha žeriava.

## Opis žeriava

Zvoľte {{ui:Pridať žeriav}}, potom vyplňte:

- **Stred žeriava X a Y:** kde žeriav stojí, v milimetroch.
- **Najvyšší háčik:** najviac, o koľko sa môže háčik zdvihnúť, v milimetroch. 0 znamená, že sa žiadny limit neoveruje.
- **Zdvihová kladka a viazanie nie sú v tabuľke:** kilogramy odrátané z tabuľky pred pridaním zaťaženia, keď vaša tabuľka to už neurobila.
- **Tabuľka nosnosti:** jeden riadok na riadok, polomer v metroch a potom nosnosť v kilogramoch. Riadky skopírujte z vlastnej tabuľky žeriava.

Tabuľka sa číta tak, ako sa číta tabuľka nosnosti: nosnosť uvedená pre polomer platí až do tohto polomeru. Zaťaženie pri polomere medzi dvoma riadkami dostane nosnosť **vzdialenejšieho** riadku, nikdy hodnotu medzi nimi. V rámci prvého riadku platí nosnosť prvého riadku. Za posledným riadkom žeriav nedokáže nič zdvihnúť. Polomer, ktorý sa počíta pre zdvih, je väčší z polomeru uchopenia a polomeru uloženia.

Druhý žeriav sa pridá rovnako. Každý zdvih ide k prvému žeriavu, ktorý ho zvládne v rámci vašej rezervy.

## Čo plán robí

- Jeden zdvih na montážny celok: nosník s jeho čelnými doskami, stĺpec s jeho pätnou doskou, schodisko.
- Poradie najprv nasleduje fázy, potom vrstvu po vrstve: stĺpy, nosníky, ktoré nesú, diagonály, dosky, schodiská. Diel sa nikdy nezdvihne skôr, než to, čo ho nesie.
- Každý zdvih ukazuje svoju hmotnosť (hrubá hmotnosť modelu plus {{ui:Zdvihové prostriedky ku každej hmotnosti}}), svoj polomer, podiel tabuľky, ktorý využíva, a minútu, v ktorej začína.
- {{ui:Najviac z tabuľky, ktorú smie zdvih využiť}} je vaša bezpečnostná rezerva. Zdvih nad ňou je označený **Nad vašou rezervou**; nad tabuľkou **Nad tabuľkou**; za posledným polomerom tabuľky **Za tabuľkou**; a diel vyššie než háčik **Háčik príliš nízko**.

Diery a výrezy sa z hmotností neodpočítavajú a skrutky sú zahrnuté v percente zdvihových prostriedkov.

## Problémy

Každý zdvih, ktorý je nad, za, príliš vysoko alebo naplánovaný pred tým, čo ho nesie, sa objaví na paneli {{ui:Problémy}}. Nosník bez spojenia, ktoré by ho nieslo, je uvedený ako potrebujúci dočasnú podperu.

## Uloženie filmu

{{ui:Uložiť video}} zapíše jeden súbor HTML. Otvorte ho v ľubovoľnom prehliadači, aj na telefóne, bez siete a bez účtu: prehrávanie a pauza, potiahnutie lišty na ľubovoľnú minútu, otáčanie modelu prstom, priblíženie štipnutím. Titulok pomenúva každý zdvih, jeho hmotnosť, polomer a podiel tabuľky. Model je nakreslený ako jednoduché kvádre: ukazuje poradie a zdvihy, nie skutočné profily.

Rovnaká tabuľka sa uloží ako CSV tlačidlom {{ui:CSV}}. Žeriav a tabuľka sa uložia do súboru modelu a každá zmena je jeden krok späť.
