---
title: Įdėkite kolonas, sijas ir įstrižaines
summary: Pasirinkite profilį, medžiagą ir padėtį, tada spragtelėkite ašių susikirtimus arba įveskite juos, kad įdėtumėte plieninius elementus.
keywords: kolona, sija, įstrižainė, elementas, įdėti, profilis, medžiaga, pasukimas, padėtis, poslinkis, įterpti, pridėti pagal ašis
from: d6db0dc1
---

Elementai dedami ašių susikirtimuose: kolona – viename, sija ar įstrižainė – tarp dviejų. Pirmiausia nustatykite [ašis ir lygius](topic:grids-and-levels).

## Pasirinkite įrankį ir jo parinktis

1. Grupėje {{ui:Įdėti}} pasirinkite {{ui:Kolona}} ({{key:C}}), {{ui:Sija}} ({{key:B}}) arba {{ui:Įstrižainė}} ({{key:R}}).
2. Dešinėje esantis skydelis {{ui:Savybės}} pakeičiasi į „Įdėti koloną“ (arba sija, arba įstrižainė) ir rodo kitam elementui skirtas parinktis:
   - {{ui:Profilis}}: pasirinkite iš sąrašo. Dydžiai sugrupuoti pagal katalogą (W formos, kanalai, kampuotiniai, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS ir jūsų pasirinktiniai profiliai). Žr. [Profilių katalogas](topic:profile-catalog).
   - {{ui:Medžiaga}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 arba S355.
   - {{ui:Padėtis}}: kur pjūvis yra ant linijos tarp dviejų taškų: {{ui:Plienas viršuje ant linijos}}, {{ui:Centruota ant linijos}} arba {{ui:Apačia ant linijos}}.
   - {{ui:Pasukimas (°)}}: pasuka pjūvį apie paties elemento ašį.
   - {{ui:Iki}} (tik kolonoms): {{ui:Kitas aukštesnis lygis}} arba lygio pavadinimas.
3. Po parinktimis {{ui:Profilis}} laukelyje rodomi pasirinkto pjūvio matmenys, plotas, masė metrui ir katalogas, iš kurio jis paimtas.

Numatytieji yra W12x50 A992 kolonoms (centruota), W16x26 A992 sijoms (plienas viršuje ant linijos) ir HSS6x6x1/4 A500 Gr C įstrižainėms (centruota). Parinktys lieka nustatytos, kol jas pakeisite.

## Įdėjimas spragtelint

### Kolona

1. Pasirinkite {{ui:Planas}} ir nurodykite lygį, nuo kurio prasideda kolona.
2. Pasirinkite {{ui:Kolona}}.
3. Perkelkite žymeklį arti susikirtimo. Artimiausias taškas įsižiebia, o būsenos juostoje jis įvardijamas.
4. Spragtelėkite. Kolona eina nuo to lygio iki kito aukštesnio lygio (arba iki lygio {{ui:Iki}}). Būsenos juostoje rašoma, pavyzdžiui: „Kolona W12x50 ties A/1, nuo Lygio 1 iki Lygio 2.“
5. Toliau spragtelėkite, kad įdėtumėte daugiau. Baigę paspauskite {{key:Esc}}.

Jei virš lygio, kurį spragtelėjote, nėra lygio, iki kurio kolona galėtų pasiekti, būsenos juostoje rašoma: „Virš Lygio 2 nėra lygio, iki kurio kolona galėtų pasiekti. Pirmiausia pridėkite lygį.“

### Sija

1. Pasirinkite {{ui:Planas}} ir nurodykite sijos lygį.
2. Pasirinkite {{ui:Sija}}.
3. Spragtelėkite pirmąjį susikirtimą. Būsenos juostoje rašoma: „Nuo A/1 ties Lygiu 2. Dabar spragtelėkite kitą galą (Esc atšaukia).“ Žymeklį seka brūkšninė linija.
4. Spragtelėkite antrąjį susikirtimą. Sija atsiranda.
5. Spragtelėkite dar kartą, kad pradėtumėte kitą siją, arba paspauskite {{key:Esc}}.

{{key:Esc}} po pirmo spragtelėjimo atšaukia tik tą tašką; antras {{key:Esc}} padeda įrankį į šalį.

### Įstrižainė

Įstrižainė eina tarp dviejų susikirtimų skirtinguose lygiuose, todėl ją lengviausia dėti vaizde {{ui:Fasadas}}.

1. Pasirinkite {{ui:Fasadas}} ir nurodykite raidėmis pažymėtą ašį, ant kurios yra įstrižainė.
2. Pasirinkite {{ui:Įstrižainė}}.
3. Spragtelėkite apatinį galą, tada viršutinį.

Fasadai yra tik raidėmis pažymėtoms ašims. Įstrižainei rėme išilgai skaitmenimis pažymėtos ašies (nuo A iki B) naudokite {{ui:3D}} arba žemiau esančią formą {{ui:Pridėti pagal ašis}}.

:::touch
Jutikliniame ekrane bakstelėkite arti susikirtimo: bakstelėjimas parenka artimiausią tašką trumpu atstumu ir nieko nedaro, jei netoliese taško nėra. Prieš bakstelėjimą paryškinimo nėra, todėl po kiekvieno bakstelėjimo patikrinkite būsenos juostos pranešimą. Vienu pirštu vilkimas pasuka arba slenka vaizdą, o ne įdeda elementą.
:::

## Dėkite pagal ašis, be spragtelėjimo

Kiekvieno įdėjimo įrankio {{ui:Savybės}} skydelio apačioje yra forma {{ui:Pridėti pagal ašis}}. Ji veikia tik su klaviatūra ir nereikalauja 3D vaizdo.

1. Pasirinkite įrankį, pavyzdžiui {{ui:Sija}}.
2. Formoje {{ui:Pridėti pagal ašis}} pasirinkite {{ui:Nuo ašies (raidė)}}, {{ui:Nuo ašies (skaičius)}} ir {{ui:Nuo lygio}}.
3. Pasirinkite {{ui:Iki ašies (raidė)}}, {{ui:Iki ašies (skaičius)}} ir {{ui:Iki lygio}}.
4. Pasirinkite {{ui:Pridėti}}.

Kolonai arba pamatui forma turi tik vieną tašką: {{ui:Ašis (raidė)}}, {{ui:Ašis (skaičius)}} ir {{ui:Lygis}}.

## Pakeiskite elementą jį įdėjus

1. Paspauskite {{key:Esc}} (arba pasirinkite {{ui:Pasirinkti}}, {{key:V}}) ir spragtelėkite elementą.
2. Skydelyje {{ui:Savybės}} pakeiskite {{ui:Pavadinimas}}, {{ui:Profilis}}, {{ui:Medžiaga}}, {{ui:Padėtis}} arba {{ui:Pasukimas (°)}}.
3. Norėdami jį perkelti, pakeiskite {{ui:Pradžia}} arba {{ui:Galas}} x, y ir z reikšmes skiltyje {{ui:Galai (x, y, z mm)}}. Po laukais rodomas kiekvieno galo ašies pavadinimas arba jo koordinatės, kai jis nėra ant ašies.

Kiekvienas pakeitimas – vienas atšaukimo žingsnis. Po laukais matote elemento {{ui:Detalės žymė}}, {{ui:Surinkimas}}, {{ui:Pjovimo ilgis}}, {{ui:Svoris}} (bendras: skylės ir išpjovos neatimamos) ir iš kurio katalogo paimtas profilis.

Elementų dar negalima vilkti ar kopijuoti masyvu. Kad padarytumėte panašų elementą, nukopijuokite ir įklijuokite jį arba padarykite dublikatą ({{key:Mod+D}}): žr. [Kopijavimas, įklijavimas ir dubliavimas](topic:copy-paste).

## Ištrinkite elementą

Pažymėkite jį ir paspauskite {{key:Delete}} arba {{key:Backspace}}, arba pasirinkite {{ui:Naikinti}}. Jungtys ant jo taip pat išnyks. {{key:Mod+Z}} grąžina viską.

## Svarbu žinoti

- **Kuria kryptimi kolona nukreipta.** Esant {{ui:Pasukimas (°)}} 0, kolonos diržai nukreipti išilgai x, į gretimas skaitmenimis pažymėtas ašis. Sija nuo ašies 1 iki ašies 2 jungiasi į diržą; sija nuo A iki B jungiasi į sienelę. Galinės plokštės įtvirtinamos tik į diržus, todėl jei jūsų sijos eina nuo A iki B, tokioms kolonoms nustatykite 90 pasukimą.
- **Sijos lygyje kabo žemiau jo**, numatytoje padėtyje {{ui:Plienas viršuje ant linijos}}. Pasirinkite {{ui:Centruota ant linijos}}, jei jūsų lygiai yra elementų ašys.
- **Kolonos eina nuo lygio iki lygio.** Kolonai per dvi aukštas nustatykite {{ui:Iki}} į aukštesnį lygį.
- **Nuožulnios sijos** leidžiamos (pasirinkite galus skirtinguose lygiuose), tačiau galinės plokštės ant jų dar nekuriamos.

Kitas žingsnis: [Sujunkite sijas su kolonomis galinėmis plokštėmis](topic:end-plates).
