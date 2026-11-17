---
title: Merkingsregler
summary: Nøyaktig når to deler eller to sammenstillinger deler merke, hvordan merkene nummereres, og hvordan fundament- og armeringsmerker fungerer.
keywords: merker, nummerering, delenummer, sammenstillingsmerke, stykkemerke, prefiks, toleranse, identiske deler, armeringsmerker, fundamentmerker
from: ce02c98e
---

DetailCraft beregner alle merker på nytt etter hver endring. Ingenting lagres, så merkene beskriver alltid modellen slik den er nå. Se [Kontroller merker og stykklisten](topic:marks-and-bom) for hvordan de brukes.

## Delenumre

To deler deler delenummer når alt dette stemmer:

1. Deltypen (bjelke, søyle, avstivning eller plate).
2. Profilnavnet (ikke store/små bokstaver).
3. Materialet (ikke store/små bokstaver).
4. Kuttlengden, innenfor 1 mm.
5. Hvert hull: flate, posisjon langs og på tvers, innenfor 1 mm, og diameter innenfor 0.1 mm.
6. Hver utklinking: ende, side, lengde og dybde, innenfor 1 mm.

Medlemmets {{ui:Navn}} teller ikke. Det gjør heller ikke plassering i modellen, rotasjon, eller hvilken vei den ble tegnet, så lenge selve delen er den samme.

### Snudde deler

En del sammenlignes på alle måter den kan snus på som avbilder tverrsnittet på seg selv. Hvis noen av dem gjør at den samsvarer med en annen del, deler de samme merke.

| Form | Vendinger som teller |
|---|---|
| I-profiler, rektangulære HSS, plater | Ende for ende (om den vertikale aksen), ende for ende (om den horisontale aksen), og opp ned om sin egen lengde |
| Kanaler | Ende for ende om den horisontale aksen bare, slik at steget blir på samme side |
| Vinkler, runde HSS | Ingen: sammenlignes som plassert |

Så en bjelke med et hull nær venstre ende samsvarer med en bjelke med samme hull nær høyre ende, og en søyle med hull i ett flens samsvarer med en søyle med de samme hullene i den andre flensen.

### Nummerering

| Type | Delprefiks | Sammenstillingsprefiks |
|---|---|---|
| Søyle | c | C |
| Bjelke | b | B |
| Avstivning | br | BR |
| Plate (plassert, endeplate eller fotplate) | p | P |

Merkene nummereres fra 1 innen hvert prefiks. Rekkefølgen er: søyler, deretter bjelker, avstivninger og plater; innen en type, etter profilnavn i naturlig rekkefølge (W8x10 før W12x26); deretter lengste deler først.

Fordi nummereringen følger den rekkefølgen, kan det å legge til eller endre én del flytte nummeret på andre.

## Sammenstillingsmerker

- Hver del som ikke er sveiset til en annen del, er hoveddel i sin egen sammenstilling.
- Endeplater er sveiset til bjelken sin, og fotplater til søylen sin, så de hører til det medlemmets sammenstilling.
- To sammenstillinger deler merke når hoveddelene deler delenummer, og de festede delene har samme merker på samme steder (innenfor 1 mm), med de samme vendingene som er tillatt for hoveddelen.
- Sammenstillingsprefikset følger hoveddelen: en bjelke med to endeplater er en B-sammenstilling.

Plater du plasserer med verktøyet {{ui:Plate}} er ikke sveiset til noe, så hver av dem er sin egen P-sammenstilling.

## Fundamentmerker

Fundamenter med samme lengde, bredde, dybde, betongtekst, bunnarmering og startarmering deler merke: F1, F2 … i den rekkefølgen de ble plassert. Posisjon og rotasjon teller ikke.

## Armeringsmerker

Armeringsjern med samme størrelse, form og dimensjonene A, B og C (avrundet til millimeter) deler merke på tvers av alle fundamenter. Merket er armeringsnummeret, F, og en teller per armeringsstørrelse: 5F1, 5F2, 6F1. En langsgående og en tverrgående armering på et kvadratisk fundament er samme armering og deler merke; kolonnen {{ui:Brukt til}} i armeringslisten viser begge bruksområdene.
