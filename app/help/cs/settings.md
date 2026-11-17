---
title: Nastavení DetailCraftu
summary: Nové prvky začínají jako americké nebo evropské profily, nastavte, jak daleko se kopie posune u Duplikovat, zvolte, zda kopie nesou své spoje, a zobrazujte nebo skrývejte šrouby v 3D pohledu.
keywords: nastavení, předvolby, formát papíru, výkresy, možnosti, ocel, aisc, en, evropské, americké profily, metrické profily, výchozí profil, jakost, s355, a992, odsazení duplikátu, odsazení vložení, kopírovat spoje, šrouby, kotevní tyče, skrýt šrouby, obnovit
from: e46cea57
---

Otevřete {{ui:Nastavení}} ozubeným kolem v horní liště nebo {{key:Mod+,}}. První karta, {{ui:DetailCraft}}, obsahuje nastavení patřící této aplikaci; {{ui:Obecné}} obsahuje ta, která sdílejí všechny aplikace CadCraftu (motiv, panel nástrojů, panely). Nastavení DetailCraftu existují jen v aplikaci: měníte je zde, platí okamžitě a tento prohlížeč si je pamatuje. Neukládají se do souboru vašeho modelu.

## Nové prvky

Které profily a jakosti začínají s nástroji pro umísťování:

| Nástroj | Americké profily (AISC), A992 | Evropské profily (EN), S355 |
|---|---|---|
| {{ui:Nosník}} | W16x26, A992 | IPE300, S355 |
| {{ui:Sloup}} | W12x50, A992 | HEB200, S355 |
| {{ui:Ztužidlo}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plech}} | A36 | S355 |

Americké profily jsou výchozí. Evropská volba používá HEA160 pro ztužidla, protože evropský katalog DetailCraftu zatím nemá duté profily ([Katalog profilů](topic:profile-catalog)). I tak můžete vybrat libovolný profil a jakost pro další kus v panelu {{ui:Vlastnosti}}, dokud je zapnutý nástroj umísťování. Prvky, které už jsou v modelu, si ponechají svůj profil a jakost.

## Duplikace a vložení

- **Odsazení (mm)**: x, y a z. {{ui:Duplikovat}} ({{key:Mod+D}}) umístí kopii tak daleko od originálu, a formulář {{ui:Vložit s odsazením (mm, od originálu)}} s ním začíná. Začíná na 6000, 0, 0: jedno pole 6 m podél očíslovaných os. Nastavte jej na rozteč polí, nebo na výšku úrovně v z, abyste zkopírovali patro nahoru.
- **Kopírovat čelní desky a patní plechy spolu s pruty** (na začátku zapnuto): spoj jde s kopií jen tehdy, když jsou zkopírovány všechny prvky, které spojuje. Vypněte to, abyste kopírovali prvky a patky bez jejich spojů, například abyste na kopii zkusili jiný spoj.

Viz [Kopírování, vložení a duplikace](topic:copy-paste).

## Pohled 3D

**Zobrazit šrouby a kotevní tyče** (na začátku zapnuto). Vypněte to, abyste je v pohledu skryli a viděli otvory a plechy v přeplněném spoji. Skryté šrouby nejdou vybrat; klikněte na plech a vyberte spoj. Kusovník, výkresy a všechny exporty stále obsahují každý šroub a tyč.

## Indikátor rohu

Co se zobrazuje v rohu 3D pohledu: **Kostka pohledu** (výchozí; vpravo nahoře — klikněte na stěnu, hranu nebo roh pro pohled odtud, přetažením ji otáčíte, přetažením jejího kruhu kompasu otáčíte model), **Ikona os** (malá značka X, Y, Z vlevo dole, která se otáčí s pohledem: X červeně, Y zeleně, Z modře), nebo **Žádná**. Jen v {{ui:3D}}; {{ui:Půdorys}} a {{ui:Pohled}} neukazují ani jedno. Viz [Kostka pohledu](topic:view-cube).

## Obnovení

{{ui:Obnovit nastavení DetailCraftu}} ve spodní části dialogu je vrátí na začátek (americké profily, odsazení 6000, 0, 0, spoje se kopírují, šrouby se zobrazují), spolu s nastaveními {{ui:Obecné}}.

## Výkresy

**Formát listu**: listy výkresů a dílenských výkresů se kreslí na šířku: A4, A3 (výchozí), A2, A1, ANSI B, ANSI C nebo ANSI D. Okna {{ui:Výkresy}} a dílenského výkresu mají stejný seznam. Viz [Výkresy celkového uspořádání a sestav](topic:drawings).

## Výztuž

- **Názvy prutů ASTM**: #3 až #11, nebo měkké metrické #10 až #36 pro tytéž pruty.
- **Kódy tvarů výkazu ohybů**: S, L, U DetailCraftu; typy ACI 315; nebo kódy tvarů BS 8666. Viz [Přehled výztuže](topic:rebar-reference).

## Tažení při výběru

**Obdélník** (jako dříve) nebo **Lasso**: volná čára, přičemž {{key:Space}} během tažení přepíná mezi uvnitř, dotykem a plotem. Viz [Výběr oknem](topic:select-and-change#select-with-a-window).
