---
title: Placér punktfundamenter med armering
summary: Placér rektangulære punktfundamenter med bundnet og studsarmering, kontrollér dem, og download bukkelisten.
keywords: fundament, punktfundament, fundering, armering, stænger, bundnet, studsarmering, dorne, bukkeliste, stangliste, beton, krog, dæklag
from: 41a048be
---

Dette emne handler om rektangulære punktfundamenter. Bjælker, søjler, dæk og vægge findes i [Detaljér armeret beton](topic:reinforced-concrete). Hvert fundament får et bundnet i begge retninger og, hvis du ønsker det, studsarmering, der står op af det. Stængerne er US-størrelserne #3 til #11.

## Placér et fundament

1. Vælg {{ui:Plan}} og vælg niveauet for fundamentets top.
2. Vælg {{ui:Punktfundament}} i gruppen {{ui:Placér}}, eller tryk {{key:F}}.
3. Indstil fundamentet i panelet {{ui:Egenskaber}} (se nedenfor), eller behold standardværdierne.
4. Klik på et gittersnit. Fundamentet centreres på det med toppen i niveauet. Statuslinjen siger f.eks. »Punktfundament 2000 x 2000 x 600 under A/1.«

Du kan også bruge formularen {{ui:Tilføj efter gitter}} nederst i panelet.

Fundamentet tegnes gennemsigtigt, så du kan se dets stænger, som tegnes som massive rør.

## Indstillinger for fundament

| Felt | Standard | Bemærkninger |
|---|---|---|
| Længde L (mm) | 2000 | Langs x; 300 til 50000 |
| Bredde B (mm) | 2000 | Langs y; 300 til 50000 |
| Dybde H (mm) | 600 | 150 til 10000 |
| Beton | 4000 psi | Tekst, udskrevet i IFC-eksporten |

**Bundnet**

| Felt | Standard | Bemærkninger |
|---|---|---|
| Lange stænger | #5 | Stænger langs L, det nederste lag |
| Afstand (mm) | 250 | Den største tilladte afstand; stængerne fordeles jævnt med denne afstand eller tættere |
| Korte stænger | #5 | Stænger langs B, lagt oven på de lange stænger |
| Afstand (mm) | 250 | Som ovenfor |
| Dæklag (mm) | 75 | Frit dæklag på alle flader |
| Endekroge | Til | Bøjer begge ender af hver nettets stang op i en standard 90°-krog (form U); Fra giver lige stænger (form S) |

**Studsarmering**

| Felt | Standard | Bemærkninger |
|---|---|---|
| Studsarmering | Til | Slå den fra for et fundament uden studse |
| Stang | #6 | |
| Stænger langs L / Stænger langs B | 2 / 2 | Et gitter af stænger, centreret på fundamentet |
| Afstand langs L / Afstand langs B | 250 / 250 | Mellem stangcentre |
| Fremspring over top | 600 | Hvor langt stængerne står op over fundamentets top |
| Krog i bunden | Til | En 90°-krog pegende udad, hvilende på nettet (form L) |

Under felterne viser DetailCraft krogbenet for de lange stænger, f.eks. »Krogben for #5: 254 mm ydre mål.«

## Ændr et placeret fundament

Vælg fundamentet (klik på dets beton væk fra en søjle, eller på en af dets stænger). Du får de samme felter plus {{ui:Centrum x}}, {{ui:Centrum y}}, {{ui:Overside z}} og {{ui:Rotation (°)}}. Under dem viser en tabel stængerne i dette fundament med deres jernmærker, antal og længder samt betonvolumen i kubikmeter.

Hver ændring kontrolleres, før den gemmes. En ændring, der ikke kan bygges, afvises, og statuslinjen siger hvorfor, f.eks. »Dæklaget efterlader ingen plads til stænger i dette fundament.«, »Fundamentet er for lavt til to lag stænger inden for dæklaget.« eller »Studsarmeringen passer ikke inde i fundamentet med 75 mm dæklag.«

Ændringer, der kan bygges, men som kræver et kig, står under fundamentet og i fanen {{ui:Problemer}}:

- »#11-stænger med 59.6 mm afstand efterlader mindre end 35.8 mm frit mellemrum (ACI 318-19 25.2.1).« Det frie mellemrum mellem stænger skal være mindst stangens diameter og mindst 25.4 mm.
- »#5-kroge kræver 254 mm dybde; kun 150 mm passer inden for dæklaget.« Krogbenene kortes så de passer, og de er derfor ikke længere standardkroge.
- »Studskrogene går ind i dæklaget.«
- »Studsarmeringen står tættere end den mindste frie afstand.«

## Jernmærker og bukkelisten

Identiske stænger (samme størrelse, form og mål til millimeteren) deler et jernmærke på tværs af alle fundamenter. Jernmærker skrives `<bar number>F<n>`: 5F1, 5F2 for #5-stænger, 6F1 for den første #6-stang og så videre. Fundamenter med samme størrelse, beton, net og studse deler et fundamentmærke: F1, F2 …

1. Åbn fanen {{ui:Bukkeliste}} nederst. Hver række er ét jernmærke: størrelse, form, mål A, B og C, antal, tilskæringslængde, samlet længde, masse pr. meter, vægt pr. stang, samlet vægt og hvad stangen bruges til.
2. Vælg {{ui:Download CSV}} i fanen, eller {{ui:Bukning}} i menuen {{ui:Mere}} i gruppen {{ui:Uddata}}, for `<name> bending schedule.csv`.

Formerne er DetailCraft's egne koder, ikke en standards: S lige, L én bøjning, U to bøjninger. Målene er ydre mål; tilskæringslængden er den nøjagtige centerlinjelængde gennem bøjningerne. Se [Armeringsreference](topic:rebar-reference).

## Hvad DetailCraft ikke kontrollerer

- Udviklings- og overlapningslængder, og om studsarmeringen er lang nok til søjlen over.
- Tilslagsstørrelsesdelen af reglen om frit mellemrum (den kender ikke blandingen).
- Alt om søjlen eller fodpladen ovenover: fundamenter og stål er adskilte.

Se også [Hvad der ikke er lavet endnu](topic:not-built-yet).
