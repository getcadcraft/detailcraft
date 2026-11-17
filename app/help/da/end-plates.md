---
title: Forbind bjælker til søjler med endeplader
summary: Tilføj boltede endeplader, hvor en bjælke møder en søjleflange eller et liv, indstil plade, bolte og svejsning, og kopiér forbindelsen til alle tilsvarende samlinger.
keywords: endeplade, endplade, momentforbindelse, boltet forbindelse, samling, bolte, svejsning, udvidet endeplade, flugtende, tilsvarende, kopiér forbindelse, komponent
from: 21e028b2
---

En endepladeforbindelse svejser en plade til bjælkeenden og bolter den til søjleflangen eller livet. DetailCraft placerer pladen, skærer bjælken tilbage, borer matchende huller i pladen og søjleflangen, tilføjer boltene og svejsningen og kontrollerer kantafstande og afstande.

:::warning
DetailCraft dimensionerer ikke forbindelser. Indstillingerne er startværdier, som du skal ændre; intet kontrollerer styrken. Kant- og afstandsadvarslerne bruger minimumskravene i EN 1993-1-8 tabel 3.3, som kan afvige fra de regler, du arbejder efter.
:::

## Hvad den kan forbinde

- En **vandret** bjælke (begge ender i samme højde), lodret (rotation 0), med en I-profil.
- Ind i **flangen** eller **livet** på en **lodret** I-profilsøjle, vinkelret på den.
- Bjælkeenden skal ligge på søjlens linje, mellem søjlens underkant og overkant.

Skæve eller skrånende bjælker og profiler, der ikke er I-profiler, afvises med en årsag: brug [skærplader](topic:shear-tabs) til dem. På et liv skal pladen og bjælkeflangerne passe mellem søjleflangerne; DetailCraft advarer, når de ikke gør.

:::tip
Ved rotation 0 peger søjlens flanger langs den nummererede gitterretning (x). En bjælke, der går fra A til B, møder livet og får en endeplade på livet.
:::

## Tilføj endeplader til en bjælke

1. Vælg {{ui:Vælg}} ({{key:V}}) og klik på bjælken.
2. Vælg {{ui:Endeplader}} i gruppen {{ui:Forbind}}, eller {{ui:Tilføj endeplader}} i panelet {{ui:Egenskaber}}.
3. Hver fri ende af bjælken, der møder en søjleflange eller et liv vinkelret, får en plade. Statuslinjen siger »2 endeplader tilføjet. Vælg en for at ændre dens plade, bolte og svejsning; Tilsvarende kopierer den til samlinger som den.«
4. Den første nye endeplade vælges, og dens indstillinger vises i panelet {{ui:Egenskaber}}.

Hvis der ikke sker noget, læs statuslinjen:

- »Denne bjælke ender ikke på en søjlelinje. Endeplader placeres, hvor en bjælkeende møder en lodret søjle.«
- »Denne bjælke møder en søjle i en vinkel eller skråner: endeplader er lavet til vinkelrette, vandrette samlinger. Brug skærplader.«
- »Begge ender har allerede forbindelser.«

## Ændr pladen, boltene og svejsningen

Klik på endepladen (eller på en af dens bolte) for at vælge forbindelsen. Under {{ui:Plade, bolte og svejsning (mm)}}:

| Indstilling | Standard | Hvad den gør |
|---|---|---|
| Pladetykkelse | 20 | Pladens tykkelse; også hvor langt bjælken skæres tilbage forbi flangen |
| Pladebredde | 180 | Tværs over samlingen |
| Forlængelse over bjælken | 0 | Over overflangen; over 0 laves en udvidet endeplade |
| Forlængelse under bjælken | 0 | Under underflangen |
| Boltdiameter | 20 | Nominel boltstørrelse |
| Hulldiameter | 22 | Dit klaringshul i pladen og søjleflangen |
| Boltkvalitet | A325 | Tekst; udskrives i stykklisten |
| Boltrækker | 4 | Rækker med to bolte, centreret på pladehøjden |
| Rækkeafstand | 75 | Lodret afstand mellem rækkerne |
| Gauge | 100 | Vandret afstand mellem de to bolte i en række |
| Tillæg til boltlængde | 30 | Lægges til klemlængden til møtrik, skive og gevind; se nedenfor |
| Hjørnesvejsestørrelse | 8 | Rundt om bjælkeenden |
| Plademateriale | A36 | Tekst |

Skriv en ny værdi, og tryk {{key:Enter}} eller {{key:Tab}}. Pladen, hullerne, boltene og bjælkens skærelængde opdateres med det samme. Hver ændring er ét trin i fortryd.

Under indstillingerne ser du, hvad forbindelsen laver:

- {{ui:Bolte}}: for eksempel »8 × 20 × 70 A325 (klemlængde 36.2)«.
- {{ui:Svejsning}}: størrelse, hvor den sidder, og dens længde.
- {{ui:Plade}}: dens størrelse og dens positionsnummer.

### Sådan regnes tallene ud

- Bjælken skæres tilbage med halvdelen af søjledybden (på et liv: halvdelen af livtykkelsen) plus pladetykkelsen, så pladen sidder på fladen.
- Pladehøjden er bjælkens højde plus de to forlængelser.
- Boltlængde = klemlængde (pladetykkelse + søjleflange- eller livtykkelse) + tillæg, rundet op til næste 5 mm.
- Den viste svejselængde er bjælketværsnittets omkreds.

### Advarsler

Forbindelsen bygges stadig, men disse vises under den og i fanen {{ui:Problemer}}:

- Boltrækker eller bolte tættere på pladekanten end 1.2 × hulldiameteren.
- Rækkeafstand under 2.2 × hulldiameteren, eller gauge under 2.4 × hulldiameteren.
- Huller, der løber ind i søjlelivet eller dets radius, eller ud over søjleflangen.
- En plade bredere end søjleflangen, eller (på et liv) bredere end mellemrummet mellem flangerne; bjælkeflanger, der ikke passer mellem dem.
- En boltrække for tæt på en bjælkeflange, eller en gauge for trang til bjælkelivet og dets svejsning.

## Kopiér den til alle tilsvarende samlinger

1. Vælg den forbindelse, du har sat op.
2. Vælg {{ui:Anvend på tilsvarende (n)}} i panelet {{ui:Egenskaber}}, eller {{ui:Tilsvarende}} i menuen {{ui:Mere}} i gruppen {{ui:Forbind}}. Tallet i parentes er, hvor mange samlinger der får den.
3. Hver samling med samme bjælkeprofil og søjleprofil, bjælke ind i samme type flade, der endnu ikke har en forbindelse, får en kopi med samme indstillinger. Statuslinjen siger, hvor mange.

Kopierne er uafhængige: ændrer du en senere, ændres de andre ikke. Samlinger, der allerede har en forbindelse, lades være; slet dem først, hvis du vil have dem erstattet.

## Flytning og sletning

Forbindelser genskabes ud fra deres indstillinger, hver gang modellen ændres, så flytning eller ændring af størrelse på en bjælke eller søjle tager dens endeplader med sig. Hvis en ændring betyder, at samlingen ikke længere passer, bliver forbindelsen i modellen, og fanen {{ui:Problemer}} siger hvorfor, for eksempel »Bjælkeenden er ikke længere på søjlelinjen.«

For at slette en forbindelse, vælg den og tryk {{key:Delete}}. Sletning af bjælken eller søjlen sletter også dens forbindelser.

Næste: [Tilføj fodplader og ankerbolte](topic:base-plates).
