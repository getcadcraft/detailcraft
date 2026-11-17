---
title: Staðsettu súlur, bita og stífur
summary: Veldu snið, efni og staðsetningu, smelltu síðan á skurðpunkta ása eða sláðu þá inn til að staðsetja stálhluta.
keywords: súla, biti, stífa, hluti, staðsetja, snið, efni, snúningur, staðsetning, hliðrun, setja inn, bæta við eftir ás
from: d6db0dc1
---

Hlutar eru staðsettir á skurðpunktum ása: súla á einum, bitar eða stífur milli tveggja. Settu fyrst upp [ása og kóta](topic:grids-and-levels).

## Veldu verkfæri og valkosti

1. Veldu {{ui:Súla}} ({{key:C}}), {{ui:Biti}} ({{key:B}}) eða {{ui:Skástífa}} ({{key:R}}) í hópnum {{ui:Staðsetja}}.
2. Spjaldið {{ui:Eiginleikar}} hægra megin verður „Staðsetja súlu“ (eða bita, eða stífu) og sýnir valkostina fyrir næsta hlut:
   - {{ui:Snið}}: veldu af listanum. Stærðir eru flokkaðar eftir skrá (W-snið, rásir, horn, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS og þín eigin sérsniðnu snið). Sjá [Sniðskrá](topic:profile-catalog).
   - {{ui:Efni}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 eða S355.
   - {{ui:Staðsetning}}: hvar sniðið situr á línunni milli punktanna tveggja: {{ui:Efri brún stáls á línunni}}, {{ui:Miðjað á línunni}} eða {{ui:Neðri brún á línunni}}.
   - {{ui:Snúningur (°)}}: snýr sniðinu um eigin ás hlutarins.
   - {{ui:Upp að}} (aðeins súlur): {{ui:Næsti kóti upp}}, eða heiti kóta.
3. Fyrir neðan valkostina sýnir {{ui:Snið}}-reitur mál valda sniðsins, flatarmál, massa á metra og skrána sem það kemur úr.

Sjálfgefið er W12x50 úr A992 fyrir súlur (miðjað), W16x26 úr A992 fyrir bita (efri brún stáls á línunni) og HSS6x6x1/4 úr A500 Gr C fyrir stífur (miðjað). Valkostirnir haldast þar til þú breytir þeim.

## Staðsetja með smelli

### Súla

1. Veldu {{ui:Grunnmynd}} og veldu kótann sem súlan byrjar á.
2. Veldu {{ui:Súla}}.
3. Færðu bendilinn nálægt skurðpunkti. Næsti punktur lýsir upp og stöðustikan nefnir hann.
4. Smelltu. Súlan nær frá þeim kóta upp í næsta kóta (eða í kótann {{ui:Upp að}}). Stöðustikan segir til dæmis: „Súla W12x50 við A/1, Kóti 1 til Kóti 2.“
5. Haltu áfram að smella til að staðsetja fleiri. Ýttu á {{key:Esc}} þegar þú hefur lokið.

Ef enginn kóti er fyrir ofan þann sem þú smelltir á, segir stöðustikan: „Það er enginn kóti fyrir ofan Kóti 2 sem súlan nær til. Bættu fyrst við kóta.“

### Biti

1. Veldu {{ui:Grunnmynd}} og veldu kótann sem bitinn er á.
2. Veldu {{ui:Biti}}.
3. Smelltu á fyrsta skurðpunktinn. Stöðustikan segir: „Frá A/1 við Kóti 2. Smelltu nú á hinn endann (Esc hættir við).“ Brotin lína fylgir bendlinum.
4. Smelltu á seinni skurðpunktinn. Bitinn birtist.
5. Smelltu aftur til að byrja næsta bita, eða ýttu á {{key:Esc}}.

{{key:Esc}} eftir fyrsta smellinn hættir aðeins við þann punkt; annað {{key:Esc}} leggur verkfærið frá sér.

### Stífa

Stífa liggur milli tveggja skurðpunkta á mismunandi kótum, þannig að auðveldast er að gera það í {{ui:Útlit}}.

1. Veldu {{ui:Útlit}} og veldu stafa-ásinn sem stífan er á.
2. Veldu {{ui:Skástífa}}.
3. Smelltu á neðri endann, og síðan þann efri.

Útlit eru aðeins til fyrir ása með bókstöfum. Fyrir stífu í ramma meðfram tölusettri línu (frá A til B), notaðu {{ui:3D}} eða {{ui:Bæta við eftir ás}}-formið hér fyrir neðan.

:::touch
Á snertiskjá, pikkaðu nálægt skurðpunktinum: pikk velur næsta punkt innan skamms fjarlægðar og gerir ekkert ef enginn punktur er nálægt. Það er engin áherslubirting áður en þú pikkar, svo athugaðu skilaboðin á stöðustikunni eftir hvert pikk. Dráttur með einum fingri snýr eða hliðrar sýninni í stað þess að staðsetja.
:::

## Staðsetja eftir ás, án smellna

Sérhvert staðsetningarverkfæri hefur {{ui:Bæta við eftir ás}}-form neðst í spjaldinu {{ui:Eiginleikar}}. Það virkar með lyklaborðinu einu saman og þarf ekki þrívíddarsýnina.

1. Veldu verkfærið, til dæmis {{ui:Biti}}.
2. Í {{ui:Bæta við eftir ás}} velur þú {{ui:Frá ási (bókstafur)}}, {{ui:Frá ási (tala)}} og {{ui:Frá kóta}}.
3. Veldu {{ui:Til áss (bókstafur)}}, {{ui:Til áss (tala)}} og {{ui:Til kóta}}.
4. Veldu {{ui:Bæta við}}.

Fyrir súlu eða undirstöðu hefur formið aðeins einn punkt: {{ui:Ás (bókstafur)}}, {{ui:Ás (tala)}} og {{ui:Kóti}}.

## Breyta hluta eftir staðsetningu

1. Ýttu á {{key:Esc}} (eða veldu {{ui:Velja}}, {{key:V}}) og smelltu á hlutinn.
2. Í spjaldinu {{ui:Eiginleikar}} breytirðu {{ui:Heiti}}, {{ui:Snið}}, {{ui:Efni}}, {{ui:Staðsetning}} eða {{ui:Snúningur (°)}}.
3. Til að færa hann breytirðu x, y og z í {{ui:Upphaf}} eða {{ui:Endi}} undir {{ui:Endar (x, y, z mm)}}. Heiti áss hvers enda birtist undir, eða hnit hans þegar hann er utan ássins.

Sérhver breyting er eitt skref í afturköllun. Fyrir neðan reitina sérðu {{ui:Auðkenni hlutar}}, {{ui:Samsetning}}, {{ui:Sniðlengd}}, {{ui:Þyngd}} (brúttó: göt og úrtökur eru ekki dregin frá) og úr hvaða skrá sniðið kemur.

Ekki er hægt að draga hluti eða fjölfalda þá enn. Til að búa til annan hlut eins og hann skaltu afrita og líma hann, eða tvöfalda hann ({{key:Mod+D}}): sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## Eyða hlut

Veldu hann og ýttu á {{key:Delete}} eða {{key:Backspace}}, eða veldu {{ui:Eyða}}. Tengingar á honum fara líka. {{key:Mod+Z}} skilar öllu til baka.

## Gott er að vita

- **Í hvaða átt súla snýr.** Við {{ui:Snúningur (°)}} 0 snúa flansar súlu eftir x, í átt að nálægum tölusettum ásum. Bitar frá ási 1 til áss 2 tengjast í flans; bitar frá A til B tengjast í sálina. Endaplötur eru aðeins smíðaðar í flansa, þannig að ef bitarnir þínir liggja frá A til B, gefðu þessum súlum snúning 90.
- **Bitar á kóta hanga undir honum** með sjálfgefna {{ui:Efri brún stáls á línunni}}. Veldu {{ui:Miðjað á línunni}} ef kótarnir þínir eru miðlínur hluta.
- **Súlur ná kóta í kóta.** Fyrir súlu í gegnum tvær hæðir, stilltu {{ui:Upp að}} á efri kótann.
- **Hallandi bitar** eru leyfðir (veldu enda á mismunandi kótum), en endaplötur eru ekki smíðaðar á þeim enn.

Næst: [Tengdu bita við súlur með endaplötum](topic:end-plates).
