---
title: Dodavanje provrta i izreza
summary: Upišite provrte u hrbat, pojasnice i ploče te izrežite pojasnice na kraju grede, mjereno od reznog kraja dijela.
keywords: provrt, provrti, provrt za vijak, izrez, urez, rez, izrezivanje, bušenje, probijanje, provrt u hrbatu, provrt u pojasnici
from: 33d12398
---

Provrti i izrezi upisuju se po položaju. Pripadaju štapu i pomiču se s njim.

Provrte koje stvaraju spojevi (čeone ploče, podložne ploče) dodaju se automatski; ne upisujete ih sami. Navedeni su kao „… provrti iz spojeva (uredite spoj)“.

## Odakle se položaji mjere

- **x** teče duž dijela od njegova **reznog početka**: početnog kraja nakon što ga eventualni spoj skrati. Dakle x = 0 je stvarni kraj čelika, a ne točka mreže.
- **y** se mjeri preko plohe od središta presjeka:
  - na **hrbatu**: gore (pozitivno) ili dolje od sredine visine;
  - na **pojasnici** ili **ploči**: preko širine, od središnje linije.
- Početak štapa je prva točka koju ste kliknuli pri postavljanju. Retci {{ui:Krajevi (x, y, z mm)}} pokazuju koji je kraj koji.

## Dodavanje provrta

1. Odaberite štap.
2. U okviru {{ui:Rupe}} panela {{ui:Svojstva}} odaberite {{ui:Ploha}}: {{ui:Hrbat}}, {{ui:Gornja pojasnica}} ili {{ui:Donja pojasnica}} (za I-profil, U-profil ili pravokutnu cijev) ili {{ui:Ploha ploče}} (za ploču).
3. Upišite {{ui:x uzduž (mm)}}, {{ui:y poprečno (mm)}} i {{ui:Promjer (mm)}}. Obrazac počinje s x 100, y 0, promjer 22.
4. Odaberite {{ui:Dodaj rupu}}.

Statusna traka kaže „Provrt dodan. x je od reznog početka; y od središta presjeka (hrbat: gore, pojasnica/ploča: poprečno).“ Provrt se pojavljuje u popisu i u prikazu kao tamni čep kroz plohu.

Za uklanjanje provrta odaberite × uz njega u popisu.

Kutnici i okrugle cijevi još ne primaju provrte: njihov okvir {{ui:Rupe}} to kaže.

:::note
U 3D prikazu provrti su prikazani kao tamni čepovi, a ne kao rezovi kroz čelik. Oni su stvarni provrti u NC datotekama, radioničkim crtežima i IFC izvozu.
:::

Provrt čiji je x izvan bilo kojeg kraja dijela prikazuje se na kartici {{ui:Problemi}} kao „provrt je izvan kraja dijela“.

## Dodavanje izreza

Izrezi su za I-profile: odrežu gornju ili donju pojasnicu (i tu dubinu hrbata) na jednom kraju, kako bi greda prošla pokraj drugog štapa.

1. Odaberite štap I-profila.
2. U okviru {{ui:Izrezi}} odaberite {{ui:Kraj}} ({{ui:Početak}} ili {{ui:Kraj}}) i {{ui:Strana}} ({{ui:Gore}} ili {{ui:Dolje}}).
3. Upišite {{ui:Duljina (mm)}} (duž grede od tog kraja) i {{ui:Dubina (mm)}} (prema dolje od vrha ili prema gore od dna). Obrazac počinje s 100 x 40.
4. Odaberite {{ui:Dodaj izrez}}.

Prikaz pokazuje izrez izrezan iz čelika. Popis glasi, na primjer, „Gore na početku: 100 x 40“. Uklonite ga s njegovim ×.

Izrezi su pravokutni: još nema radijusa u unutarnjem kutu.

## Kako provrti i izrezi utječu na oznake

Dva dijela dobivaju istu oznaku pozicije samo ako se njihovi provrti i izrezi podudaraju unutar 1 mm, uz dopuštenje da je dio okrenut naopako. Dodavanje provrta jednoj gredi iz grupe daje joj novu oznaku. Vidi [Pravila oznaka](topic:mark-rules).
