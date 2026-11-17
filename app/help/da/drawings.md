---
title: Oversigts- og samlingstegninger
summary: Lav planer, facader og én samlingstegning pr. samlingsmærke ud fra modellen, på A4 til A1 eller ANSI B til D ark, udsted dem med revisionsbogstaver, og download dem som PDF, DWG eller DXF.
keywords: skjulte linjer, fjernelse af skjulte linjer, stiplet, revisionssky, sky, revisionstrekant, ankerboltplan, ankerbolte, ankerboltliste, fodpladeliste, udlægning, udstedelse, udstede, revision, rev, revisionstabel, ny udstedelse, udstedelsesliste, dwg, dxf, cad-fil, eksporter tegninger, tegninger, oversigt, plan, facade, samlingstegning, arkstørrelse, papirstørrelse, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, udskriv, målestok, tegningshoved, modelreference
from: 709f8604
---

Vælg {{ui:Tegninger}} i gruppen {{ui:Uddata}}. DetailCraft laver hele sættet ud fra modellen, som den er nu. Intet gemmes: ændr modellen, åbn {{ui:Tegninger}} igen, og sættet laves igen.

## Hvad der er i sættet

- **Planer**, én pr. niveau der har noget på sig, set oppefra.
- **Facader**, én pr. gitterlinje med stålprofiler inden for 1 m af den.
- **Ankerboltplanen**, når modellen har fodplader: hver fodplade set oppefra med sin søjle og sine ankerbolte, gitterne med deres mål, en typisk detalje for hvert boltmønster (BP1, BP2 …) med boltafstand og kantafstande, og to lister: ankerboltene efter mærke (R1, R2 …: antal, diameter, længde, fremspring over pladen, indstøbning og kvalitet) og fodpladerne efter gitter (søjle, mønster, plade, bolte og pladens overkant). En søjle uden for gitteret placeres ud fra sine koordinater.
- **Samlingstegninger**, én pr. samlingsmærke: front-, top- og endevisninger, kædede mål til huller og pladekanter, delelisten, løse bolte og ankre, og noter om svejsning og huller. Hver svejst plade har et hjørnesvejsesymbol i frontvisningen (AWS A2.4): pilen peger på samlingen, trekanten under referencelinjen betyder pilens side, tallet til venstre er svejsestørrelsen i mm, og en cirkel, hvor pilen møder linjen, betyder hele vejen rundt.

**Skjulte linjer.** Planer og facader udelader linjerne for en del, hvor en del helt foran den dækker den (en bjælke set endefra bag en søjle). Samlingstegninger tegner en plade stiplet, hvor hoveddelen dækker den: bag livet i frontvisningen (set fra delens −u-side), under overflangen i topvisningen. Dele, der sidder i samme dybde eller overlapper i dybde, tegnes begge helt.

Hvert ark har et tegningshoved med tegningsnummeret, målestoken, modelnavnet, datoen, arknummeret med arkstørrelsen og modelref: en kode lavet ud fra den gemte model, så en udskrift kan matches til den model, den kommer fra.

## Vælg arkstørrelse

Vælg størrelsen i listen øverst i vinduet {{ui:Tegninger}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) eller {{ui:ANSI D}} (22 × 34 in). Alle ark er liggende. Sættet laves igen på den nye størrelse med det samme, og samme størrelse bruges til værkstedstegninger. Den findes også i [DetailCraft-indstillinger](topic:settings#drawings), og denne browser husker den.

- Et større ark tegnes i en større målestok. Målestokke er altid standardmålestokke (1:10, 1:20, 1:25, 1:50, 1:100 og så videre).
- Teksten har samme størrelse på alle ark, så den forbliver læselig, når den udskrives.
- På et lille ark kan en lang, tynd samling få en større målestok på tværs end på langs. Visningstitlen angiver så begge målestokke, og målene er gældende.

## Udstedelse og revisioner

Linjen over forhåndsvisningen siger, hvor det viste ark står: **Endnu ikke udstedt**, **Rev B, udstedt … ; uændret siden**, eller med rødt **Ændret siden rev B: kræver ny udstedelse**. Arklisten markerer udstedte ark med deres revision og dem, der skal udstedes igen.

- Skriv, hvad udstedelsen er til (den starter som »Udstedt til fremstilling«), og vælg {{ui:Udsted dette ark}}, eller {{ui:Udsted ændrede ark}} for hvert ark, der er nyt eller er ændret siden sidste udstedelse.
- Den første udstedelse af et ark er revision A, derefter B, C og så videre (I og O springes over).
- Tegningshovedet viser tegningsnummeret med dets revision (»A-B1  rev B«), og en revisionstabel ved siden lister de seneste udstedelser: revision, dato og beskrivelse. På et lille ark vises så mange, der er plads til.
- Et ark ændrer sig, når det, der er tegnet på det, ændrer sig: en flyttet stålprofil, et nyt hul, et omnummereret mærke. Datoen, antallet af ark og selve revisionstabellen tæller ikke. Ændring af arkstørrelse ændrer alle ark.
- Udstedelsesloggen gemmes i modelfilen, og en udstedelse er ét trin i fortryd. [KISS-filen](topic:kiss-export) bærer hver tegnings seneste revision.

### Revisionssky

Fra den anden udstedelse af et ark og frem får hver del eller hvert fundament, der er ændret, en sky tegnet rundt om sig, med en revisionstrekant der bærer bogstavet.

- Mens et ark er ændret siden sidste udstedelse, viser skyerne, hvad der er ændret siden da, med den kommende revision i trekanten (rev B udstedt og ændret: trekanterne siger C).
- Når du har udstedt det, bliver skyerne på den revisions ark, som på et trykt sæt, indtil arket ændres igen.
- Hvert ark viser kun skyer for de ændringer, det viser. Planer og facader tegner ingen huller eller udskæringer, så de tegner sky om en stålprofil, der er flyttet, drejet eller ændret størrelse, eller hvis mærke har ændret sig. Samlingstegninger og ankerboltplanen tegner også sky om nye eller flyttede huller og udskæringer.
- En omnummereret mærkning tæller: når en ændring gør en bjælke til en ny samling, får de bjælker, hvis mærke er flyttet op (B1 til B2), sky på planer og facader.
- En del, der er slettet, efterlader intet at tegne sky om.
- Ark, der er udstedt, før revisionsskyer kom til (DetailCraft 0.4), begynder at få sky fra deres næste udstedelse.
- Skyerne er med i PDF-, DXF- og DWG-downloads og tæller aldrig selv som en ændring.

## Download

Vælg formatet i listen ved siden af knapperne, og vælg derefter {{ui:Dette ark}} for det viste ark eller {{ui:Alle ark}} for hele sættet.

- **PDF**: til udskrivning eller afsendelse. {{ui:Alle ark}} laver én PDF med én side pr. ark, hver side i den valgte størrelse.
- **DWG**, i formatet 2018, 2013, 2010, 2007, 2004 eller 2000: til at åbne arkene i et CAD-program. Vælg et ældre format til et ældre program.
- **DXF (R12)**: versionen, næsten alle CAD-programmer kan åbne.

En DWG- eller DXF-tegning laves i fuld størrelse: én tegnenhed er én millimeter på papiret, så den udskrives i 1:1, og hver visning beholder den målestok, dens titel siger. Hver pen er sit eget lag: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID og så videre, med dens linjetykkelse (DWG) og dens streger. Ord er tekst i DetailCraft-tekststilen (Arial). Målsætninger er de linjer og tal, du ser, ikke målsætningsobjekter. {{ui:Alle ark}} lægger DWG- eller DXF-filerne i én zip-fil, én fil pr. ark.

:::note
DXF R12 har ingen linjetykkelser og ingen fyld: lagene beholder deres navne, så sæt pennene efter lag, når du plotter, og udfyldte former udelades (statuslinjen siger, hvor mange).
:::

Udskriv i 100 % (ingen »tilpas til side«) på papir i samme størrelse, hvis de angivne målestokke skal holde.
