---
title: Analysér rammen
summary: Kræfter, reaktioner og nedbøjninger i bjælker, søjler og afstivninger som tegnet, under lasttilfælde og kombinationer, du angiver. Et analysehjælpemiddel, ikke en normkontrol; dimensioneringskontrollerne er et særskilt trin.
keywords: analyse, konstruktionsanalyse, rammeanalyse, stivhedsmetode, laster, lasttilfælde, kombination, egenlast, nyttelast, egenvægt, reaktioner, bøjningsmoment, forskydning, normalkraft, nedbøjning, deformeret form, understøtninger, ledforbundet, indspændt, frigørelse, rapport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Fanen {{ui:Analyse}} nederst finder kræfterne i hver bjælke, søjle og afstivning i modellen, reaktionerne ved søjlefødderne og hvor meget elementerne bøjer, for de laster, du giver den.

:::warning
Det er et **analysehjælpemiddel, ikke en normkontrol**. Analysen anvender ingen dimensioneringsnorm: den dimensionerer ikke profiler, kontrollerer ikke kapaciteter eller forbindelser og vælger ikke lastfaktorer. En ingeniør kontrollerer modellen, dens laster og understøtninger og afgør, hvad tallene betyder. For profilkontrol efter ASCE 7 / AISC 360 eller EN 1990 / EN 1993-1-1 se [Kontrollér stålprofiler efter en dimensioneringsnorm](topic:design-checks), et særskilt trin, som også er et hjælpemiddel.
:::

## Kør den

1. Åbn fanen {{ui:Analyse}}.
2. Vælg et eller flere elementer i visningen, vælg et {{ui:Tilfælde}}, en {{ui:Last}} og en {{ui:Retning}}, skriv værdien og tryk {{ui:Tilføj last}}. En last fordelt langs et element er i kN/m, en punktlast i kN. {{ui:Ned (tyngdekraft)}} er den almindelige.
3. Tryk {{ui:Kør analyse}}.

Tabellen viser hvert elements største normalkraft N, forskydningerne Vz og Vy, bøjningsmomenterne My og Mz, vridning T og dens nedbøjning, med det største moment først; klik på et elements navn for at vælge det. Nedenfor er reaktionerne ved hver understøtning. {{ui:På modellen}} tegner den deformerede form, eller én virkning som et diagram ved siden af hvert element med dens største værdi skrevet ved dets sted. Resultaterne er forældede, så snart modellen ændres: kør den igen.

Hver last, hvert lasttilfælde og hver indstilling er ét fortrydelsestrin ({{key:Mod+Z}}) og gemmes i modelfilen.

## Lasttilfælde og kombinationer

Analysen starter med tre: **Egenlast** (elementernes egen vægt, ud fra deres tegnede profiler og 7850 kg/m³), **Nyttelast** (tom) og **Egenlast + nyttelast**. Tilføj egne tilfælde (vind, sne …) og kombinationer: en kombination lægger tilfældene sammen med de faktorer, du skriver. Analysen er lineær, så hvert tilfælde løses én gang, og kombinationer er summer. Skriv faktorerne selv, eller vælg en dimensioneringsnorm og lad {{ui:Lav kombinationer}} skrive normens ([Kontrollér stålprofiler efter en dimensioneringsnorm](topic:design-checks)).

## Hvad rammen består af

- Bjælker, søjler og afstivninger, hver på sin arbejdslinje (den linje, du tegnede), med profilets rigtige egenskaber udregnet ud fra dets omrids. Plader, trapper, fundamenter og bolte er ikke en del af rammen.
- Et element deles, hvor et andet elements ende rammer det, så en bjælke, der støder ind i en søjle i halv højde, forbinder sig til søjlen der.
- **Søjlefødder**: indspændt (starten) eller ledforbundet (holdt på plads og mod vridning, frit at dreje). En fodplade giver altid en understøtning.
- **Bjælkeender**: en endeplade er stiv, en skærtap er ledforbundet. {{ui:Bjælkeender uden forbindelse}} sætter resten. **Afstivninger** er ledforbundet i begge ender.
- Vælg ét element for at give dets ender, eller en søjles fod, en egen regel.
- Stål overalt: E = 200 GPa, G = 77 GPa.

Hvis rammen kan bevæge sig uden at bøje noget — en mekanisme, f.eks. ledforbundne fødder uden afstivning i én retning — stopper kørslen og siger, hvor og i hvilken retning; hold den der med en understøtning, en stiv samling eller en afstivning.

## Fortegn

N > 0 er træk. My > 0 sætter elementets lokale −z-side i træk: en bjælke, der synker under tyngdekraften, har My > 0. Mz > 0 sætter den lokale −y-side i træk. Nedbøjning måles fra den rette linje mellem elementets ender. Et elements lokale z peger op (for en søjle: langs X); dets lokale akser drejer med elementets rotation.

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} indeholder alt: de antagelser, rammen er bygget på, profiler, tilfælde og kombinationer, derefter for hvert tilfælde og hver kombination reaktionerne (med summerne af laster og reaktioner, som balancerer), elementkræfterne og forskydningerne og en indhylning af alle tilfælde. {{ui:Eksportér som CraftScript}} skriver den samme ramme som et script til PartCraft's Script-arbejdsområde, hvor biblioteksfunktionen `frame3d` løser den trin for trin i læsbar kode.

## Metode

Den direkte stivhedsmetode, lineær og førsteordens, medmindre du sætter flueben ved *Anden orden (P-Delta)*: to-knudte bjælke-søjler med aksial-, vridnings- og to bøjningsstivheder (ingen forskydningsdeformation, ingen krumning), endefrigørelser ved statisk kondensering, laster langs elementer gennem elementernes egne formfunktioner. Dens svar er kontrolleret mod de klassiske lærebogseksempler (udkragninger, simple, indspændte og kontinuerte bjælker, en portalramme, et gitter i vridning, et fagværk).

**Anden orden (P-Delta).** Sæt flueben ved *Anden orden (P-Delta)* ved siden af Kør: hver kombination løses igen med elementernes aksialkræfter virkende på den deformerede ramme (hvert element delt i 4 stykker, så elementets bøjning mellem dets ender også tæller), indtil aksialkræfterne stabiliseres. Resultatlinjen angiver antallet af gennemløb og hvor meget sidedeformationen voksede; momenterne, nedbøjningerne, dimensioneringskontrollerne og rapporten bruger så disse resultater. Over rammens elastiske kritiske last stopper kørslen og siger det. Den er elastisk med små rotationer, kun bøjning, uden stivhedsreduktion eller fiktive laster (ikke AISC-metoden for direkte analyse alene); plader, vægge og stive dæk forbliver førsteordens.

**Egenfrekvenser (endelige elementer).** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultaterne finder de laveste svingningsformer af samme model med det endelige elementprogram: bjælker med deres endefrigørelser, plader og vægge som flade firenodede skaller, stive dæk og understøtninger. Vælg, hvor mange former (3, 6, 10 eller 20), og pladeelementet (firenodeskallen for tykke eller tynde plader, eller den tyndpladebaserede), og tryk {{ui:Find egenfrekvenserne}}. Tabellen giver hver forms frekvens i Hz, dens periode i sekunder og dens effektive modalmasse langs X, Y og Z som en andel af den masse, der kan bevæge sig. {{ui:Vis på modellen}} tegner en vilkårlig form på samme måde, som den deformerede form tegnes. Masse er materialets densitet gange volumen: laster tilføjer ingen masse, og et materiale uden densitet har ingen. Rapporten (PDF, CSV) indeholder tabellen. Den er elastisk og kun for små bevægelser, og der laves ingen seismisk eller vindlast ud fra en norm her. Ikke en normkontrol; din ingeniør gennemgår resultaterne.

**Responsspektrum, tidshistorie og pushover.** Tre blokke mere sidder under egenfrekvenserne og bruger den samme endelige elementmodel. Masse for alle er materialets densitet plus de nedadrettede laster fra de tilfælde, du sætter flueben ved, hver gange en faktor, du skriver (f.eks. Egenlast med 1 og Nyttelast med den andel, du regner som masse).

{{ui:Responsspektrum}} læser hver form af et spektrum, du angiver (en tabel med periode og acceleration, eller ASCE 7-formen ud fra SDS, SD1 og TL; knappen {{ui:Brug værdierne fra den seismiske blok}} kopierer dem fra den seismiske blok), og kombinerer formerne med CQC, SRSS, tiprocentreglen eller en absolut sum, og sætter derefter retningerne X, Y og Z sammen (100 % + 30 % eller SRSS). Den giver grundforskydningen, etagedrifter, elementendekræfter og en formtabel, der advarer, når de anvendte former bærer under 90 % af massen. Du kan skalere resultaterne med en faktor eller op til en grundforskydning, du skriver; blokken beregner aldrig selv den grundforskydning. Resultaterne har ikke fortegn.

{{ui:Tidshistorie}} kører en jordacceleration ved modal superposition (eksakt for optagelsens rette linjer mellem punkter) eller ved direkte integration (Newmarks gennemsnitlige acceleration med Rayleigh-dæmpning). Inputtet er en konstrueret sinus eller puls (altid mærket som syntetisk), en optagelse, du indsætter, eller en tekstfil, du åbner (tid og acceleration, én acceleration pr. linje med et skridt, eller en PEER-lignende fil med en DT=-overskrift; i g eller m/s²). Den giver tagets forskydning og grundforskydningen mod tid, driften for hver etage og indhylningen af elementendekræfterne. Modeller med en meget lang optagelse beholder den kun for sessionen.

{{ui:Pushover}} skubber taget sidelæns i små skridt (mønster som første form, eller ensartet), med plastiske led i enderne af elementer, der har en I-form. Et led flyder ved det plastiske moment, som falder, når aksialkraften vokser (udregnet ud fra den tegnede form, udfyldninger ignoreret); forhærdning er valgfri, P-delta er valgfri, og en tyngdekraftskombination kan påføres først. Den giver kapacitetskurven (grundforskydning mod tagforskydning), det første led og tilstanden og den plastiske rotation for hvert led. {{ui:Kør den ikke-lineære tidshistorie}} kører de samme led under tidshistorieblokkens optagelse på små modeller. Led dannes kun i elementers ender (sæt en knude, hvor et led skal dannes inde i et spænd); et element frigjort i begge ender får ingen; flydning og knækning af afstivninger er ikke modelleret; plader og vægge forbliver elastiske; der gives ingen acceptkriterier. Ikke en normkontrol; din ingeniør gennemgår resultaterne. Indstillingerne gemmes med modellen, og rapporten indeholder tabellerne.

Ikke lavet endnu: knækningsanalyse, en manglende-masse-korrektion for responsspektret, skalering af optagelser, acceptkriterier for led (dynamisk respons findes, ovenfor), areal- og vindlaster lavet for dig (jordskælvskræfter på dæk findes i [Kontrollér betonelementer og lav seismiske laster](topic:concrete-and-seismic)), elementforskydninger og afstivninger, der kun tager træk. Se [Ikke lavet endnu](topic:not-built-yet).
