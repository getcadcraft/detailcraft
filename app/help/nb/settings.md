---
title: DetailCraft-innstillinger
summary: Start nye staver som US- eller europeiske profiler, velg hvor langt Dupliser flytter en kopi, velg om kopier tar med sine forbindelser, og vis eller skjul bolter i 3D-visningen.
keywords: innstillinger, preferanser, arkstørrelse, papirstørrelse, tegninger, alternativer, stål, aisc, en, europeisk, us-profiler, metriske profiler, standardprofil, kvalitet, s355, a992, forskyvning ved duplisering, forskyvning ved liming, kopier forbindelser, bolter, ankerstenger, skjul bolter, tilbakestill
from: e46cea57
---

Åpne {{ui:Innstillinger}} med tannhjulet i programlinjen, eller med {{key:Mod+,}}. Den første fanen, {{ui:DetailCraft}}, inneholder innstillingene som hører til denne appen. {{ui:Generelt}} inneholder de som alle CadCraft-apper deler (tema, verktøylinje, paneler). DetailCraft-innstillingene finnes bare i appen: endringer her trer i kraft med en gang, og denne nettleseren husker dem. De lagres ikke i modellfilen.

## Nye staver

Hvilke profiler og kvaliteter plasseringsverktøyene starter med:

| Verktøy | US-profiler (AISC), A992 | Europeiske profiler (EN), S355 |
|---|---|---|
| {{ui:Bjelke}} | W16x26, A992 | IPE300, S355 |
| {{ui:Søyle}} | W12x50, A992 | HEB200, S355 |
| {{ui:Avstivning}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plate}} | A36 | S355 |

US-profiler er utgangspunktet. Det europeiske valget bruker en HEA160 for avstivninger, fordi DetailCraft sin EN-katalog ennå ikke har hule profiler ([Profilkatalog](topic:profile-catalog)). Hvilken som helst profil og kvalitet kan fortsatt velges for neste del i {{ui:Egenskaper}}-panelet mens et plasseringsverktøy er på. Staver som allerede er i modellen beholder sin egen profil og kvalitet.

## Dupliser og lim inn

- **Forskyvning (mm)**: x, y og z. {{ui:Dupliser}} ({{key:Mod+D}}) legger kopien så langt fra originalen, og skjemaet {{ui:Lim inn med forskyvning (mm, fra originalen)}} starter med den. Den starter på 6000, 0, 0: ett 6 m spenn langs de nummererte rutenettlinjene. Sett den til din spennavstand, eller til en etasjehøyde i z for å kopiere en etasje opp.
- **Kopier endeplater og fotplater med stavene sine** (på fra start): en forbindelse følger med en kopi bare når alle stavene den kobler, kopieres. Fjern av for å kopiere staver og fundamenter uten forbindelsene, for eksempel for å prøve en annen forbindelse på kopien.

Se [Kopier, lim inn og dupliser](topic:copy-paste).

## 3D-visning

**Vis bolter og ankerstenger** (på fra start). Fjern av for å skjule dem i visningen og se hullene og platene i et travelt knutepunkt. Skjulte bolter kan ikke klikkes; klikk på platen for å velge forbindelsen. {{ui:Stykkliste}}, tegningene og alle eksporter tar fortsatt med alle bolter og stenger.

## Hjørneindikator

Hva som vises i hjørnet av 3D-visningen: **ViewCube** (fra start; øverst til høyre: klikk på en flate, kant eller et hjørne for å se derfra, dra for å kretse rundt, dra kompassringen for å snu modellen), **Aksesymbol** (en liten X-, Y- og Z-markør nederst til venstre som snur med visningen: X rød, Y grønn, Z blå) eller **Ingen**. Bare i {{ui:3D}}; {{ui:Plan}} og {{ui:Fasade}} viser ingen av dem. Se [ViewCube](topic:view-cube).

## Tilbakestill

{{ui:Tilbakestill DetailCraft-innstillinger}} nederst i dialogen setter disse tilbake til utgangspunktet (US-profiler, forskyvning 6000, 0, 0, forbindelser kopieres, bolter vises), sammen med de i {{ui:Generelt}}.

## Tegninger

**Arkstørrelse**: arkene for tegninger og verkstedtegninger lages på liggende: A4, A3 (fra start), A2, A1, ANSI B, ANSI C eller ANSI D. Vinduene {{ui:Tegninger}} og verkstedtegning har samme liste. Se [Oversikts- og monteringstegninger](topic:drawings).

## Armering

- **ASTM-stavnavn**: #3 til #11, eller de myke metriske #10 til #36 for de samme stavene.
- **Formkoder for bøyeliste**: DetailCraft sine S, L og U; ACI 315-typer; eller BS 8666-formkoder. Se [Armeringsreferanse](topic:rebar-reference).

## Dra for å velge

**Rektangel** (som før) eller **Lasso**: en frihåndslinje, med {{key:Space}} som bytter mellom innenfor, berøring og gjerde mens du drar. Se [Velg med et vindu](topic:select-and-change#select-with-a-window).
