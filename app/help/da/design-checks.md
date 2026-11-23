---
title: Kontrollér stålprofiler efter en dimensioneringsnorm
summary: Lav lastkombinationer efter ASCE 7 eller EN 1990, kontrollér hver stål-I-profil mod AISC 360 eller EN 1993-1-1, og se, hvor stor en del af dens kapacitet hver stålprofil udnytter. En hjælp, indtil en ingeniør har gennemgået den.
keywords: dimensionering, dimensioneringskontrol, stålkonstruktion, udnyttelse, udnyttelsesgrad, bæreevne, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, lastkombinationer, LRFD, nationalt anneks, knæk, sidelæns vippning, forskydning, bøjning, interaktion, konstruktion, studerende, ingeniør
from: 15685c4e
---

Når du har kørt analysen, omsætter blokken {{ui:Dimensioneringskontrol}} i fanen {{ui:Analyse}} kræfterne til en vurdering for hver stålprofil: hvor stor en del af dens bæreevne den ugunstigste kombination udnytter.

:::warning
Det er en **hjælp, indtil en ingeniør har gennemgået den**. Den bruger kun førsteordens kræfter (ingen andenordenseffekter), kontrollerer ingen vridning, ingen slanke dele (klasse 4), ingen svejste profiler og ingen forbindelser, og den udelader det, den ikke kan kontrollere, og siger det. Den erstatter ikke en ingeniørs kontrol, og dens resultater er ikke en godkendelse.
:::

## Vælg en norm

{{ui:Dimensioneringsnorm}} gemmes sammen med modellen; vælg en af to familier:

- **ASCE 7 + AISC 360** (US, LRFD): lastkombinationerne i ASCE 7-16 §2.3.1 og stålprofilkontrollerne i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinationerne i EN 1990 (lign. 6.10, eller 6.10a og 6.10b) og stålprofilkontrollerne i EN 1993-1-1.

Vælg derefter {{ui:Ståltype}} (A992, A36 og andre; eller S235 til S450, med den lavere flydespænding over 40 mm).

## Lav kombinationerne

Giv hvert lasttilfælde sin **type** (egenlast, nyttelast, tagnyttelast, sne, vind, jordskælv) i listen over lasttilfælde, og tryk derefter på {{ui:Lav kombinationer}}. DetailCraft skriver normens kombinationer som kombinationer af dine lasttilfælde: alle bæreevnekombinationer, som normen angiver for de typer, du har, og brugsgrænsekombinationer for nedbøjning. De kombinationer, du selv har skrevet, bliver stående; de kontrolleres ikke mod normen. Et lasttilfælde af typen {{ui:Andet}} kombineres ikke.

For Eurocode er faktorerne de **anbefalede værdier** i EN 1990 bilag A1 (γG 1.35, γQ 1.5, ψ-værdierne for nyttelast, sne og vind) og EN 1993-1-1 (γM0 = γM1 = 1.0). Dit lands nationale anneks ændrer nogle af dem: åbn {{ui:Værdier fra det nationale anneks}}, skriv dine, og lav kombinationerne igen. De gemmes i modellen.

## Kontrollér stålprofilerne

Tryk på {{ui:Kontrollér stålprofiler}}. For hver stål-I-profil viser tabellen dens **udnyttelsesgrad** (belastning i forhold til kapacitet: 100 % er grænsen), om den består, hvilken kontrol der er styrende, og hvilken kombination. Stålprofilerne farves på modellen: blå lidt udnyttet, grøn omkring halvdelen, okker nær grænsen, rød over den, grå ikke kontrolleret. Klik på en stålprofils navn for at vælge den.

Kontrollerne, med det punkt hver af dem følger (de står i rapporten):

- træk, tryk med bøjnings- og vridningsknæk, bøjning om begge akser med sidelæns vippning, forskydning og bøjning med normalkraft;
- nedbøjning for brugsgrænsekombinationerne mod den {{ui:Nedbøjningsgrænse}}, du har angivet (L/360 til at starte med; en projektværdi, ikke en normværdi).

**Længder.** Den afstivede længde er en andel af hvert analyseret stykke (1 = uafstivet); afstivningerne regnes med lige stor afstand fra start. K-faktorer ganges på længden ved knæk. En forbindelse, hvor en anden stålprofil ender, deler en stålprofil, og hvert stykke kontrolleres på sin egen længde, som afstivet der.

## Hvad der ikke kontrolleres

En stålprofil viser **Ikke kontrolleret** med årsagen i stedet for et tal, når dens tværsnit ikke er en form, kontrollerne kender (vinkelprofiler, kanalprofiler; rektangulære og runde rør kontrolleres, når deres vægge er kompakte), når det er en specialform (svejst), eller når en del er slank (AISC) eller klasse 4 (Eurocode) i bøjning. En slank del i tryk fjerner trykkontrollerne, og stålprofilen står som *består, delvist kontrolleret*. Svejsningerne i forbindelserne har [deres egen kontrol](topic:weld-checks). Også ikke lavet endnu: andenordenseffekter, vridning, forskydningsknæk sammen med bøjning, boltforbindelser, udmattelse, brand og jordskælvsdetaljering. Betonelementer og jordskælvslaster har [deres egne kontroller](topic:concrete-and-seismic). Se [Ikke lavet endnu](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får dimensioneringstabellerne, når du har kontrolleret: normudgaverne, indstillingerne og værdierne fra det nationale anneks, udnyttelsesgraden pr. stålprofil, alle brugte punkter, og for hver stålprofil belastning, kapacitet og udnyttelsesgrad for hver kontrol i dens styrende kombination.
