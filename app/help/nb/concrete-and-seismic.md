---
title: Kontroller betongstaver og lag seismiske laster
summary: Sett opp armeringen i betongbjelker og -søyler, kontroller dem etter ACI 318-19, lag ekvivalente horisontalkrefter etter ASCE 7-22 på stive dekker, og se etasjeforskyvning. Et hjelpemiddel for en ingeniør som skal kontrollere.
keywords: betong, armert betong, ACI 318, ACI 318-19, armering, bjelke, søyle, skjær, bøyler, seismisk, jordskjelv, ekvivalent horisontalkraft, ELF, ASCE 7-22, forskyvning, etasjeforskyvning, etasjer, stiv skive, etasjevekt, utnyttelse, utilization, konstruksjon, ingeniør
from: 94d3001d
---

Blokkene {{ui:Betongstaver}} og {{ui:Seismiske laster}} i fanen {{ui:Analyse}} kontrollerer armerte betongbjelker og -søyler, og lager de sideveis kreftene fra et jordskjelv på etasjene i en ramme. Begge følger kjøringen i fanen {{ui:Analyse}} og lagres med modellen.

:::warning
Resultatene er **for kontroll av en ingeniør**: et hjelpemiddel inntil noen har gått gjennom dem. Betongkontrollene bruker førsteordens krefter, unntatt at en søyle i en ramme du kaller ikke-sideforskyvelig er dimensjonert for sitt forstørrede moment, uten sideforskyvningsforstørrelse, ingen vridningsdimensjonering, ingen seismisk detaljering (ACI kapittel 18) og ingen bøyledetaljering. De seismiske lastene utelater redundansfaktoren, den vertikale seismiske effekten, vridningsforsterkning og P-delta-effekter. Vindlaster er ikke bygget ennå.
:::

## Tegn elementene

Tegn betongelementer som rektangler: en {{ui:Plate}}-profil som `PL400x400` for en søyle og `PL300x600` for en bjelke gir tverrsnittet. Søyler og bjelker plasseres like som alle andre elementer.

## Sett opp tverrsnittene

Blokken {{ui:Betongstaver}} lister alle tverrsnittene elementene bruker. Trykk {{ui:Sett opp som betong…}} på dem som er betong. DetailCraft leser bredden **b** (langs elementets egen y-akse) og dybden **h** (langs z) fra den tegnede profilen, og spør deretter etter:

- **overdekningen** til sentrum av jernene, og **øvre**, **nedre** og **side**-jern (hvor mange og hvilken diameter) for en bjelke, eller en **søylebur** (jern langs b og langs h, hvilken diameter, spiralbøyler) for en søyle;
- **bøylene**: bein, diameter og avstand;
- hva elementet **virker som**: en bjelke, en søyle, eller avgjort ut fra kreftene (et vertikalt element, eller ett som bærer mer enn 0.10 f′c Ag, er en søyle).

Sett f′c, flytegrensen for jernet fy og flytegrensen for bøylene fyt (høyst 420 MPa teller for skjær), K og om rammen er sideforskyvelig eller ikke-sideforskyvelig over dem. Et tverrsnitt satt opp som betong analyseres som betong: E = 4700 √f′c, 2400 kg/m³, og som standard med **oppsprukne tverrsnitt** (søyler 0,70 Ig, bjelker 0,35 Ig; ACI 318-19 tabell 6.6.3.1.1(a)). Velg {{ui:Brutto tverrsnitt}} for å slå det av.

## Lag kombinasjoner og kontroller

Gi lastsituasjonene deres type, og deretter {{ui:Lag kombinasjoner}}: ACI 318-19 bruker styrkekombinasjonene i ASCE 7 (§5.3.1). Trykk {{ui:Kontroller betong}}, og hvert element får en utnyttelse, farget på modellen som stålkontrollene: bøyning og minste stålmengde (22.2, 9.6.1.2), strekkontrollert tøyning (9.3.3.1), skjær med bøylene (22.5, 9.6.3), bøyleavstand, og aksiallast med moment for søyler (22.4, med Breslers metode for tokantsbøyning). Et element der det tegnede tverrsnittet avviker fra b × h du skrev inn, står som *delvis kontrollert*, det samme gjelder en slank søyle eller vridning over grensen: de er ikke dimensjonert.

Elementer over kapasiteten sin listes i {{ui:Problemer}}; godta ett med en begrunnelse, eller rett opp tverrsnittet.

## Etasjer og seismiske laster

En etasje er et nivå der rammen holdes sammen av en stiv dekke (en **stiv skive**). I blokken {{ui:Seismiske laster}} trykk {{ui:Finn etasjer}}: den tar nivåene der to eller flere bjelker møtes. Gi deretter hver etasje sin **seismiske vekt**, skrevet inn eller lest: {{ui:Hent vekter fra tilfellene}} summerer de vertikale lastene for tilfellene du gir en faktor (egenlasttilfellet er 1; legg til 0,25 på et lagringsnyttelasttilfelle eller snø på et flatt tak slik ASCE 7-22 12.7.2 krever). Hver nodes vertikallast går til etasjen på eller over den, så en søyle mellom to etasjer gir halvparten av vekten sin til hver.

Fyll inn dimensjonerte verdier: SDS, SD1, S1, R, Ie, Cd, TL, bæresystemet (for perioden) og risikokategorien. {{ui:Lag seismiske tilfeller}} beregner deretter perioden ut fra bygningens høyde (12.8.2.1), grunnskjærkraften V = Cs W (12.8.1), fordeler den opp etasjene (12.8.3) og skriver fire lastsituasjoner, i X og Y med 5 % tilfeldig vridning hver vei (12.8.4.2). Etasjekreftene og etasjeforskyvningskontrollen (12.8.6, tabell 12.12-1, forskyvningen Cd δxe / Ie mot 0.020 hsx) vises etter en kjøring; en forskyvning over grensen er også et problem. Trykk {{ui:Lag kombinasjoner}} på nytt for å ta de seismiske tilfellene med i kombinasjonene.

**Perioden fra analysen.** Den tilnærmede perioden Ta kommer fra bygningens høyde. Når du har kjørt analysen med de seismiske tilfellene, leser {{ui:Bruk perioden fra analysen}} hvor langt hver etasje har beveget seg under kreftene, og beregner perioden etter Rayleighs metode, T = 2π √(Σ w δ² / (g Σ f δ)), én gang for X og én for Y; de seismiske tilfellene lages på nytt med den. Perioden som brukes er aldri mer enn Cu·Ta (ASCE 7-22 12.8.2), så en myk modell kan ikke senke grunnskjærkraften under det. Bruk perioden på nytt etter andre kjøring: den stabiliserer seg i ett eller to steg. Fjern haken i {{ui:Periode fra analysen}} for å gå tilbake til Ta.

**Slanke søyler (ACI 318-19 6.6.4.5).** For en ramme du kaller ikke-sideforskyvelig, dimensjoneres en søyle der k·ℓu/r er over 34 + 12·M1/M2 (høyst 40) for det forstørrede momentet Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² med (EI)eff = 0.4 Ec Ig / (1 + βdns), og minstemomentet Pu (15 + 0.03 h). βdns (0.6 til å begynne med) er andelen av den dimensjonerte aksiallasten som er varig: skriv inn din egen. En søyle der Pu når 0.75 Pc, feiler med sin egen kontroll. Rapporten lister tallene for hver slank søyle. I en **sideforskyvelig** ramme står en slank søyle fortsatt som «delvis kontrollert»: forstørrelsen krever en andreordens analyse, som ikke er bygget.

**Dekker.** Når modellen har plater, tar en blokk {{ui:Dekkearmering}} platemomentene for hver styrkekombinasjon og, etter Wood–Armer-regelen (bøyning og vridning samlet), beregner stålet hvert lag trenger per meter: under og over, i x og i y. Du oppgir tykkelsen, overdekningen og jernene; tabellen viser nødvendig mot oppgitt og énretningsskjæret mot φVc, og et lag som kommer til kort, er et problem med sin paragraf. Nedbøyning, gjennomstansing ved søyler og forsterkningsjern ved åpninger er ikke dekket, og et moment over et opplegg konvergerer sakte med firenodeplater.

Hver etasje du listerer, blir en stiv skive i analysen: bjelkene i den tar ingen aksialkraft fra etasjens bevegelse. CraftScript-eksporten er ikke laget for en modell med etasjer.

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får betongtabellene (forutsetninger, utnyttelse per element, hver paragraf), de seismiske parameterne og grunnskjærkraften, kreftene på etasjene og forskyvningstabellen.
