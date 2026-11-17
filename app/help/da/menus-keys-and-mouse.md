---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den måde du allerede arbejder på, giv enhver kommando din egen tast, flyt kommandoer mellem båndfaner, og angiv hvad hjulet og musens knapper gør.
keywords: menustil, menuer, bånd, værktøjslinje, kommandolinje, genveje, hurtigtaster, taster, tilpas, omlæg, gentildel, mus, hjul, vend, zoomretning, midterknap, højreknap, panorér, drej, eksport, import, skift, bekendt, tegnestil klassisk, stålbånd
from: 4132c6e5
---

DetailCraft's kommandoer er de samme, uanset hvordan du når dem. En **menustil** bestemmer kun, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menuer, taster og mus}}; ændringen træder i kraft med det samme, og denne browser husker den.

## De tre stilarter

| Stil | Det får du |
|---|---|
| {{ui:DetailCraft}} | DetailCraft's egen værktøjslinje (Fil, Placér, Forbind, Rediger, Uddata) og dens enkelttegns-taster: {{key:V}} vælg, {{key:B}} bjælke, {{key:C}} søjle, {{key:R}} afstivning, {{key:P}} plade, {{key:F}} fundament, {{key:S}} trappe. Startindstillingen. |
| {{ui:Tegnestil klassisk}} | Til dem der skriver kommandoer: et lille bånd ({{ui:Start}}, {{ui:Visning}}, {{ui:Uddata}}) og en kommandolinje. Skriv BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (fortryd), ZOOM, PLAN, 3D, DRAWINGS, NC eller HELP og tryk {{key:Enter}}; {{key:Enter}} på intet gentager den sidste kommando, og {{key:Esc}} rydder den. Begynd at skrive hvor som helst, så går bogstaverne til kommandolinjen. Midterknappen panorerer; i 3D drejer {{key:Shift}} og midterknappen modellen. |
| {{ui:Stålbånd}} | Faner, som stålkonstruktionsprogrammer ordner dem: {{ui:Modellering}} (dele, beton, trapper), {{ui:Detaljering}} (forbindelser), {{ui:Rediger}}, {{ui:Tegninger}} (tegninger og rapporter), {{ui:Fremstilling}} (NC-filer, IFC) og {{ui:Visning}}, med en {{ui:Fil}}-menu og hurtigknapper til højre. Enkelttegns-tasterne bliver. Midterknappen panorerer; i 3D drejer venstre knap modellen. |

Alle stilarter beholder {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} og {{key:Mod+A}}. Båndene rummer også visningslinjens {{ui:3D}}, {{ui:Plan}}, {{ui:Facade}} og {{ui:Tilpas}}.

:::tip
En tast, der hører til DetailCraft's egen layout, men som din stil har givet en anden kommando, gør ingenting, og statuslinjen siger, hvor dens kommando er blevet af ("I Mit stålbånd er Søjle Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltasterne beholder altid deres betydning, og mens et element er halvt placeret, eller en kopi følger markøren, hører bogstaverne til DetailCraft.
:::

## Gør den til din egen

1. Vælg den stil, der ligner det, du ønsker, og klik på {{ui:Tilpas…}}.
2. På {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). Klik på {{ui:Tilføj en tast}} og tryk tasten, eller to taster efter hinanden for en to-bogstavs-tast. Klik på en tast for at fjerne den.
3. Med et bånd flytter {{ui:Hvor den sidder}} kommandoen til en anden fane og gruppe, til {{ui:Fil}}-menuen, eller til {{ui:Kun taster}}.
4. Under {{ui:Mus}} angiver du hjulet, de knapper der panorerer plan og facade, og hvad hver knap gør i 3D-visningen.
5. Giv den et navn, og klik på {{ui:Gem}}.

Når du gemmer en indbygget stil, laves din egen kopi ("Mit stålbånd"); den indbyggede ændres aldrig. En tast givet til to kommandoer vises med rødt og skal rettes, før du kan gemme.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (startindstillingen) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et trackpad-knib zoomer altid i den retning, fingrene bevæger sig.
- **Panorér plan og facade med**: midterknappen, højreknappen, eller begge. Med værktøjet {{ui:Vælg}} tegner venstre knap altid et markeringsvindue.
- **Træk i 3D-visningen**: {{ui:Hver visnings egen}} beholder DetailCraft's knapper (venstre drejer, midter zoomer, højre panorerer). Eller sæt hver knap til drej, panorér, zoom eller intet; {{key:Shift}} med en knap, der drejer eller panorerer, bytter de to.

## Tag den med dig

{{ui:Eksport}} gemmer den stil i brug som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller en kollega. En importeret fil kan kun pege på DetailCraft's egne kommandoer: alt andet i den udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får alle apps til at åbne i deres tilsvarende stil (egen værktøjslinje, et bånd eller Tegnestil klassisk), med de ændringer du har lavet i hver app. DetailCraft har ingen menulinjestil: når en anden apps menulinje vælges for alle apps, beholder DetailCraft sin egen værktøjslinje.
:::

Se også: [Taster og mus](topic:keyboard) · [DetailCraft-indstillinger](topic:settings) · [Fra andre detaljeringsprogrammer](topic:coming-from)
