---
title: Kontrollér betonelementer og lav jordskælvslaster
summary: Opsæt jernene i betonbjælker og -søjler, kontrollér dem efter ACI 318-19, lav ækvivalente sidekræfter efter ASCE 7-22 på stive etager, og se etageforskydning. Et hjælpemiddel for en ingeniør at kontrollere.
keywords: beton, armeret beton, ACI 318, ACI 318-19, armering, bjælke, søjle, forskydning, bindere, jordskælv, seismisk, ekvivalent sidekraft, ELF, ASCE 7-22, forskydning, etageforskydning, etager, stiv skive, etagevægt, udnyttelsesgrad, konstruktion, ingeniør
from: 94d3001d
---

Blokkene {{ui:Betonstålprofiler}} og {{ui:Jordskælvslaster}} i fanen {{ui:Analyse}} kontrollerer armerede betonbjælker og -søjler og laver de vandrette jordskælvskræfter på etagerne i en ramme. Begge følger {{ui:Analyse}}-fanens kørsel og gemmes med modellen.

:::warning
Resultaterne er **til kontrol af en ingeniør**: en hjælp, indtil en har gennemgået dem. Betonkontrollerne bruger førsteordens-kræfter, dog med den undtagelse, at en søjle i en ramme, du kalder ikke-svajende, dimensioneres for sit forstørrede moment, uden svajforstørrelse, uden torsionsdimensionering, uden seismisk detaljering (ACI kapitel 18) og uden detaljering af bindere. Jordskælvslasterne udelader redundansfaktoren, den lodrette jordskælvseffekt, torsionsforstærkning og P-delta-effekter. Vindlaster er ikke lavet endnu.
:::

## Tegn elementerne

Tegn betonelementer som rektangler: en {{ui:Plade}}-profil som `PL400x400` til en søjle og `PL300x600` til en bjælke giver tværsnittet. Søjler og bjælker placeres ligesom alle andre elementer.

## Opsæt tværsnittene

Blokken {{ui:Betonstålprofiler}} lister alle tværsnit, elementerne bruger. Tryk {{ui:Sæt op som beton…}} på dem, der er beton. DetailCraft læser bredden **b** (langs elementets egen y-akse) og dybden **h** (langs z) fra den tegnede profil og spørger derefter efter:

- **dæklaget** til jernenes centrum, og **top-**, **bund-** og **sidejern** (hvor mange og hvilken diameter) for en bjælke, eller et **søjlebur** (jern langs b og langs h, hvilken diameter, spiralbindere) for en søjle;
- **bindere**: ben, diameter og afstand;
- hvad elementet **virker som**: en bjælke, en søjle, eller afgjort ud fra dets kræfter (et lodret element, eller et, der bærer mere end 0.10 f′c Ag, er en søjle).

Sæt f′c, jernets flydespænding fy og bindernes flydespænding fyt (højst 420 MPa tæller for forskydning), K og om rammen er svajende eller ikke-svajende ovenfor dem. Et tværsnit, der er sat op som beton, analyseres som beton: E = 4700 √f′c, 2400 kg/m³, og som standard med **revnede tværsnit** (søjler 0.70 Ig, bjælker 0.35 Ig; ACI 318-19 tabel 6.6.3.1.1(a)). Vælg {{ui:Bruttotværsnit}} for at slå det fra.

## Lav kombinationer og kontrollér

Giv lasttilfældene deres type, og tryk derefter {{ui:Lav kombinationer}}: ACI 318-19 bruger styrkekombinationerne fra ASCE 7 (§5.3.1). Tryk {{ui:Kontrollér beton}}, og hvert element får en udnyttelsesgrad, farvet på modellen ligesom stålkontrollerne: bøjning og minimumsarmering (22.2, 9.6.1.2), trækstyret tøjning (9.3.3.1), forskydning med bindere (22.5, 9.6.3), bindeafstand, og aksialkraft med moment for søjler (22.4, med Breslers metode for bøjning om begge akser). Et element, hvor den tegnede profil afviger fra den b × h, du skrev, står som *delvist kontrolleret*, ligesom en slank søjle eller torsion over tærsklen: de er ikke dimensioneret.

Elementer over deres kapacitet listes i {{ui:Problemer}}; accepter et med en begrundelse, eller ret tværsnittet.

## Etager og jordskælvslaster

En etage er et niveau, hvor rammen holdes sammen af en stiv dækplade (en **stiv skive**). I blokken {{ui:Jordskælvslaster}} trykker du {{ui:Find etager}}: det tager niveauerne, hvor to eller flere bjælker mødes. Giv derefter hver etage dens **seismiske vægt**, indtastet eller aflæst: {{ui:Tag vægte fra tilfælde}} summerer de lodrette laster i de tilfælde, du giver en faktor (egenlasten er 1; læg 0.25 til på et oplagsnyttelasttilfælde eller sne på et fladt tag, som ASCE 7-22 12.7.2 kræver). Hver knudes lodrette last går til den etage ved eller over den, så en søjle mellem to etager giver halvdelen af sin vægt til hver.

Udfyld dimensioneringsværdierne: SDS, SD1, S1, R, Ie, Cd, TL, det bærende system (til perioden) og risikokategorien. {{ui:Lav jordskælvstilfælde}} beregner så perioden ud fra bygningens højde (12.8.2.1), grundskæringen V = Cs W (12.8.1), fordeler den op gennem etagerne (12.8.3) og skriver fire lasttilfælde, i X og Y, med 5 % tilfældig torsion hver vej (12.8.4.2). Etagekræfterne og etageforskydningskontrollen (12.8.6, tabel 12.12-1, forskydningen Cd δxe / Ie mod 0.020 hsx) vises efter en kørsel; en forskydning over sin grænse er også et problem. Tryk {{ui:Lav kombinationer}} igen for at tage jordskælvstilfældene med i kombinationerne.

**Perioden fra analysen.** Den tilnærmede periode Ta kommer fra bygningens højde. Når du har kørt analysen med jordskælvstilfældene, læser {{ui:Tag perioden fra analysen}}, hvor langt hver etage bevægede sig under kræfterne, og beregner perioden efter Rayleighs metode, T = 2π √(Σ w δ² / (g Σ f δ)), én gang for X og én gang for Y; jordskælvstilfældene laves igen med den. Den anvendte periode er aldrig større end Cu·Ta (ASCE 7-22 12.8.2), så en blød model ikke kan sænke grundskæringen under det. Tag perioden igen efter den anden kørsel: den stabiliserer sig på et trin eller to. Fjern markeringen i {{ui:Periode fra analysen}} for at gå tilbage til Ta.

**Slanke søjler (ACI 318-19 6.6.4.5).** For en ramme, du kalder ikke-svajende, dimensioneres en søjle, hvis k·ℓu/r er over 34 + 12·M1/M2 (højst 40), for det forstørrede moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² med (EI)eff = 0.4 Ec Ig / (1 + βdns), og minimummomentet Pu (15 + 0.03 h). βdns (0.6 til at starte med) er andelen af den faktorerede aksiallast, der er vedvarende: skriv din egen. En søjle, hvis Pu når 0.75 Pc, fejler med sin egen kontrol. Rapporten lister hver slank søjles tal. I en **svajende** ramme står en slank søjle stadig som »delvist kontrolleret«: dens forstørrelse kræver en analyse af anden orden, som ikke er lavet endnu.

**Plader.** Når modellen har plader, tager en blok {{ui:Pladearmering}} pladernes momenter for hver styrkekombination og finder efter Wood–Armer-reglen (bøjning og vridning sammen) det jern, hvert lag behøver pr. meter: bund og top, i x og i y. Du angiver tykkelse, dæklag og jern; tabellen viser det påkrævede mod det angivne og forskydningen i én retning mod φVc, og et lag, der ikke slår til, er et problem med sin paragraf. Nedbøjning, gennemstansning ved søjler og kantjern ved åbninger er ikke dækket, og et moment over en understøtning konvergerer langsomt med firknudeplader.

Hver etage, du angiver, bliver en stiv skive i analysen: dens bjælker bærer ingen aksialkraft fra etagens bevægelse. CraftScript-eksporten er ikke lavet til en model med etager.

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får betontabellerne (forudsætninger, udnyttelse pr. element, hver paragraf), de seismiske parametre og grundskæringen, kræfterne på etagerne og tabellen over etageforskydning.
