---
title: Dodavanje rupa i izreza
summary: Unesi rupe u rebra, prirubnice i limove, a izreži prirubnice na kraju grede, merene od reznog kraja dela.
keywords: rupa, rupe, rupa za zavrtanj, izrez, zarez, sečenje, izrezivanje, bušenje, probijanje, rupa u rebru, rupa u prirubnici
from: 33d12398
---

Rupe i izrezi se unose po položaju. Pripadaju članu i pomeraju se sa njim.

Rupe koje prave spojevi (krajnje ploče, osnovne ploče) dodaju se automatski; ne unosiš ih sam. Navode se kao „… rupe iz spojeva (izmeni spoj)“.

## Odakle se mere položaji

- **x** ide duž dela od njegovog **reznog početka**: početnog kraja posle svakog spoja koji ga je odsekao. Dakle x = 0 je stvarni kraj čelika, a ne tačka mreže.
- **y** se meri preko lica od centra preseka:
   - na **rebru**: nagore (pozitivno) ili nadole od sredine visine;
   - na **prirubnici** ili **limu**: preko širine, od središnje linije.
- Početak člana je prva tačka koju si kliknuo pri postavljanju. Redovi {{ui:Krajevi (x, y, z mm)}} pokazuju koji je kraj koji.

## Dodavanje rupe

1. Izaberi član.
2. U okviru {{ui:Rupe}} panela {{ui:Svojstva}} izaberi {{ui:Strana}}: {{ui:Rebro}}, {{ui:Gornja prirubnica}} ili {{ui:Donja prirubnica}} (za I profil, U profil ili pravougaonu cev), ili {{ui:Lice lima}} (za lim).
3. Unesi {{ui:x duž (mm)}}, {{ui:y poprečno (mm)}} i {{ui:Prečnik (mm)}}. Obrazac počinje sa x 100, y 0, prečnikom 22.
4. Izaberi {{ui:Dodaj rupu}}.

Statusna traka kaže „Rupa dodata. x je od reznog početka; y od centra preseka (rebro: gore, prirubnica/lim: preko).“ Rupa se pojavljuje na spisku i u prikazu kao tamni čep kroz lice.

Da ukloniš rupu, izaberi × pored nje na spisku.

Ugaonici i okrugle cevi još ne primaju rupe: njihov okvir {{ui:Rupe}} to kaže.

:::note
U 3D prikazu rupe su nacrtane kao tamni čepovi, a ne probijene kroz čelik. One su prave rupe u NC datotekama, radioničkim crtežima i IFC izvozu.
:::

Rupa čiji je x van bilo kog kraja dela prikazuje se na kartici {{ui:Problemi}} kao „rupa je van kraja dela“.

## Dodavanje izreza

Izrezi su za I profile: odsecaju gornju ili donju prirubnicu (i tu dubinu rebra) na jednom kraju, tako da greda prolazi kraj drugog člana.

1. Izaberi I profil.
2. U okviru {{ui:Izrezi}} izaberi {{ui:Kraj}} ({{ui:Početak}} ili {{ui:Kraj}}) i {{ui:Strana}} ({{ui:Gore}} ili {{ui:Dole}}).
3. Unesi {{ui:Dužina (mm)}} (duž grede od tog kraja) i {{ui:Dubina (mm)}} (nadole od vrha ili nagore od dna). Obrazac počinje sa 100 x 40.
4. Izaberi {{ui:Dodaj izrez}}.

Prikaz pokazuje izrez isečen iz čelika. Spisak glasi, na primer, „Gore na početku: 100 x 40“. Ukloni ga pomoću ×.

Izrezi su pravougaoni: još nema zaobljenja u unutrašnjem uglu.

## Kako rupe i izrezi utiču na oznake

Dva dela dobijaju istu oznaku dela samo ako se njihove rupe i izrezi poklapaju u okviru 1 mm, uzimajući u obzir da je deo okrenut. Dodavanje rupe jednoj gredi iz grupe daje joj novu oznaku. Vidi [Pravila oznaka](topic:mark-rules).
