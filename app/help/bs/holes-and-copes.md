---
title: Dodavanje rupa i izreza
summary: Upiši rupe u rebra, pojaseve i ploče, i izreži pojaseve na kraju grede, mjereno od reznog kraja dijela.
keywords: rupa, rupe, rupa za vijak, izrez, zarez, rez, izrezivanje, bušenje, probijanje, rupa u rebru, rupa u pojasu
from: 33d12398
---

Rupe i izrezi se unose upisivanjem položaja. Pripadaju elementu i pomjeraju se s njim.

Rupe napravljene spojevima (krajnje ploče, osnovne ploče) dodaju se automatski; ne unosite ih. Navedene su kao "… rupe iz spojeva (uredite spoj)".

## Odakle se mjere položaji

- **x** ide duž dijela od njegovog **reznog početka**: početnog kraja nakon što ga spoj eventualno skrati. Dakle x = 0 je stvarni kraj čelika, a ne tačka mreže.
- **y** se mjeri preko lica od središta presjeka:
   - na **rebru**: gore (pozitivno) ili dolje od sredine visine;
   - na **pojasu** ili **ploči**: preko širine, od središnje linije.
- Početak elementa je prva tačka koju ste kliknuli pri postavljanju. Redovi {{ui:Krajevi (x, y, z mm)}} pokazuju koji je kraj koji.

## Dodavanje rupe

1. Odaberite element.
2. U okviru {{ui:Rupe}} panela {{ui:Svojstva}} izaberite {{ui:Strana}}: {{ui:Rebro}}, {{ui:Gornji pojas}} ili {{ui:Donji pojas}} (za I-profil, kanal ili pravougaonu cijev), ili {{ui:Lice lima}} (za ploču).
3. Upišite {{ui:x duž (mm)}}, {{ui:y poprijeko (mm)}} i {{ui:Prečnik (mm)}}. Obrazac počinje s x 100, y 0, prečnikom 22.
4. Odaberite {{ui:Dodaj rupu}}.

Statusna traka kaže "Rupa dodana. x je od reznog početka; y od središta presjeka (rebro: gore, pojas/ploča: preko)." Rupa se pojavljuje na listi i u prikazu kao tamni čep kroz lice.

Za uklanjanje rupe odaberite × pored nje na listi.

Uglovi i okrugle cijevi još ne prihvataju rupe: njihov okvir {{ui:Rupe}} to kaže.

:::note
U 3D prikazu rupe se crtaju kao tamni čepovi, a ne kao izrezi kroz čelik. Stvarne su rupe u NC datotekama, radioničkim crtežima i IFC izvozu.
:::

Rupa čiji je x izvan bilo kog kraja dijela prikazuje se na kartici {{ui:Problemi}} kao "rupa je van kraja dijela".

## Dodavanje izreza

Izrezi su za I-profile: odsijecaju gornji ili donji pojas (i tu dubinu rebra) na jednom kraju, tako da greda prolazi pored drugog elementa.

1. Odaberite element I-profila.
2. U okviru {{ui:Izrezi}} izaberite {{ui:Kraj}} ({{ui:Početak}} ili {{ui:Kraj}}) i {{ui:Strana}} ({{ui:Gore}} ili {{ui:Dolje}}).
3. Upišite {{ui:Dužina (mm)}} (duž grede od tog kraja) i {{ui:Dubina (mm)}} (dolje od vrha, ili gore od dna). Obrazac počinje s 100 x 40.
4. Odaberite {{ui:Dodaj izrez}}.

Prikaz pokazuje izrez izrezan iz čelika. Lista glasi, na primjer, "Gore na početku: 100 x 40". Uklonite ga pomoću ×.

Izrezi su pravougaoni: još nema zaobljenja u unutrašnjem uglu.

## Kako rupe i izrezi utiču na oznake

Dva dijela dobijaju istu oznaku dijela samo ako se njihove rupe i izrezi poklapaju do 1 mm, uz dopuštanje da je dio okrenut naopako. Dodavanje rupe jednoj gredi iz grupe daje joj novu oznaku. Vidi [Pravila oznaka](topic:mark-rules).
