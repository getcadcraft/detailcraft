---
title: Kontrollér stålprofiler mod en dimensioneringsnorm
summary: Lav lastkombinationer efter ASCE 7 eller EN 1990, kontrollér hver stål-I-profil efter AISC 360 eller EN 1993-1-1, og se hvor stor en del af dens kapacitet hver stålprofil bruger. En hjælp, indtil en ingeniør har gennemgået den.
keywords: dimensionering, dimensioneringskontrol, stålkonstruktion, udnyttelse, udnyttelsesgrad, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, lastkombinationer, LRFD, nationalt anneks, knækning, vippning, forskydning, bøjning, interaktion, konstruktion, studerende, ingeniør
from: 66b6d545
---

Efter du har kørt analysen, gør blokken {{ui:Dimensioneringskontrol}} i fanen {{ui:Analyse}} sine kræfter til en vurdering for hver stålprofil: hvor stor en del af dens kapacitet den værste kombination bruger.

:::warning
Det er en **hjælp, indtil en ingeniør har gennemgået den**. Den bruger kun førsteordens-kræfter (ingen andenordenseffekter), kontrollerer ingen torsion, ingen slanke dele (klasse 4), ingen svejste profiler og ingen forbindelser, og den udelader det, den ikke kan kontrollere, og siger det. Den erstatter ikke en ingeniørs kontrol, og dens resultater er ikke et godkendelsesstempel.
:::

## Vælg en norm

{{ui:Dimensioneringsnorm}} gemmes med modellen; vælg en af to familier:

- **ASCE 7 + AISC 360** (USA, LRFD): lastkombinationerne i ASCE 7-16 §2.3.1 og stålprofilkontrollerne i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinationerne i EN 1990 (lign. 6.10, eller 6.10a og 6.10b) og stålprofilkontrollerne i EN 1993-1-1.

Vælg derefter {{ui:Ståltype}} (A992, A36 og andre; eller S235 til S450, hvor flydespændingen er lavere over 40 mm).

## Lav kombinationerne

Giv hvert lasttilfælde sin **type** (egenlast, nyttelast, nyttelast på tag, sne, vind, seismisk) i lasttilfældelisten, og tryk derefter på {{ui:Lav kombinationer}}. DetailCraft skriver normens kombinationer som kombinationer af dine lasttilfælde: alle styrkekombinationer, normen angiver for de typer, du har, og brugsgrænsekombinationer for nedbøjning. De kombinationer, du selv har skrevet, bliver; de kontrolleres ikke mod normen. Et lasttilfælde af typen {{ui:Andet}} kombineres ikke.

For Eurocode er faktorerne **de anbefalede værdier** fra EN 1990 bilag A1 (γG 1.35, γQ 1.5, ψ-værdierne for nyttelast, sne og vind) og EN 1993-1-1 (γM0 = γM1 = 1.0). Dit lands nationale anneks ændrer nogle af dem: åbn {{ui:Værdier fra det nationale anneks}}, skriv dine, og lav kombinationerne igen. De gemmes i modellen.

## Kontrollér stålprofilerne

Tryk på {{ui:Kontrollér stålprofiler}}. For hver stål-I-profil viser tabellen dens **udnyttelse** (belastning over kapacitet: 100 % er grænsen), om den består, hvilken kontrol der styrer, og hvilken kombination. Stålprofilerne farves i modellen: blå lidt brugt, grøn omkring halvt, okker nær grænsen, rød over den, grå ikke kontrolleret. Klik på en stålprofils navn for at vælge den.

Kontrollerne, med den paragraf hver følger (de står i rapporten):

- træk, tryk med bøjnings- og vridningsknækning, bøjning om begge akser med vippning, forskydning og bøjning med normalkraft;
- nedbøjning for brugsgrænsekombinationerne mod den {{ui:Nedbøjningsgrænse}}, du har angivet (L/360 til at begynde med; en projektværdi, ikke en normværdi).

**Længder.** Den afstivede længde er en andel af hvert analyseret stykke (1 = uafstivet); afstivninger antages jævnt fordelt fra starten. K-faktorer ganger længden ved knækning. Et punkt, hvor en anden stålprofil lander, deler en stålprofil, og hvert stykke kontrolleres på sin egen længde, som afstivet der.

## Hvad der ikke kontrolleres

En stålprofil viser **ikke kontrolleret** med årsagen i stedet for et tal, når dens tværsnit ikke er en I-profil, som kontrollerne kender (rør, vinkler, kanaler), når det er en brugerdefineret (svejst) form, eller når en del er slank (AISC) eller klasse 4 (Eurocode) i bøjning. En slank del i tryk fjerner trykkontrollerne, og stålprofilen viser *består, delvist kontrolleret*. Heller ikke bygget: andenordenseffekter, torsion, forskydningsknækning sammen med bøjning, forbindelser, udmattelse, brand og seismisk detaljering. Betonelementer og seismiske laster har [deres egne kontroller](topic:concrete-and-seismic). Se [Ikke lavet endnu](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får dimensioneringstabellerne, når du har kontrolleret: normudgaverne, indstillingerne og værdierne fra det nationale anneks, udnyttelsen pr. stålprofil, hver anvendt paragraf, og for hver stålprofil belastning, kapacitet og udnyttelse for hver kontrol i dens styrende kombination.
