---
title: Panelen van hout en dunwandig staal
summary: Wand-, vloer- en dakpanelen in hout of dunwandig staal, met elk onderdeel, een snijlijst, een werkplaatstekening en de voorraad die u moet kopen.
keywords: skeletbouw, hout, bouwhout, dunwandig staal, koudgevormd, stijl, vloerbalk, spar, latei, hoofdstijl, ondersteunende stijl, korte stijl, snijlijst, werkplaatstekening, paneel
from: 3e38ffb9
---

Het tabblad {{ui:Skeletbouw}} maakt het skelet van de panelen die u beschrijft en geeft wat een skeletbouwploeg en een houthandel nodig hebben. De panelen worden opgeslagen in het modelbestand.

:::warning
De afmetingen, de hartafstanden en de lateien zijn aan u. DetailCraft controleert niet of een stijl op die afstand die wand draagt of of een latei die opening overspant: dat is voor de tabellen van uw norm en voor uw constructeur.
:::

## Een paneel toevoegen

Kies {{ui:Een wand toevoegen}}, {{ui:Een vloer toevoegen}} of {{ui:Een dak toevoegen}}, vul daarna de afmetingen in millimeter in, het materiaal (hout of dunwandig staal) en de profielmaat. Houtmaten zijn de nominale namen met hun geschaafde afmetingen (2×4 is 38 × 89 mm). Stalen stijlen krijgen een naam naar hoogte en dikte, bijvoorbeeld `C92-1.2`.

## Wanden

Een wand heeft een onderregel, een of meer bovenregels (bij staal één rail), eindstijlen, stijlen op de hartafstand die u opgeeft, en voor elke opening: twee hoofdstijlen, twee ondersteunende stijlen, een latei van de maat en de lagen die u kiest, en korte stijlen boven de latei (en onder de onderdorpel van een raam). Geef elke opening zijn afstand tot het linkeruiteinde, zijn breedte, en de bovenkant en onderkant van de ruwe opening, gemeten vanaf de ondervloer; een deur heeft een onderkant van 0.

## Vloeren en daken

Een vloer heeft vloerbalken over zijn breedte, in de richting van de overspanning, randbalken aan beide uiteinden en, als u dat aanvinkt, blokkering halverwege de overspanning. Een dakpaneel is een zadeldak: een paar sparren op de hartafstand die u opgeeft (hun lengte omvat het dakoverstek langs de helling) en een nokplank.

## Wat u krijgt

Elk paneel toont zijn onderdelen op een schaaltekening met elk onderdeel gemerkt, een snijlijst per merk en een totaal. De tabel {{ui:In te kopen voorraad}} nest alle snijdelen van de panelen in voorraadlengten: de kortste die de snijdelen van elke staaf past. {{ui:De werkplaatstekening opslaan (SVG)}} schrijft de tekening weg; de knop {{ui:CSV}} schrijft elke snijlijst en de voorraadlijst.

## Een paneel in het model plaatsen

Geef onder elk paneel op waar het komt (x, y, z in millimeter en de hoek) en druk op {{ui:Als staven plaatsen}}: elk onderdeel wordt een staaf van het model, met de geschaafde doorsnede van zijn maat en het gewicht van het materiaal (ongeveer 500 kg/m³ voor het hout, staal voor de stijlen). Een wand loopt langs de hoek vanaf zijn linkeronderuiteinde met zijn onderkant op z; de vloerbalken liggen met hun onderkant op z; de zadeldakgevel van een dak loopt langs de hoek met z aan de bovenkant van de bovenregels. Elke laag van een latei is een staaf naast de andere. Opnieuw drukken vervangt de eerder geplaatste staven, en {{ui:Geplaatste staven verwijderen}} haalt ze weg; elke stap is één keer ongedaan te maken. De analyse laat deze staven weg: het zijn geen staven van het staalskelet.

## PDF-bladen

{{ui:PDF-bladen}} slaat één A3-pagina per paneel op: het paneel op schaal met elk onderdeel gemerkt, de totale afmetingen, de snijlijst en een titelstrook.

Problemen in het paneel {{ui:Problemen}}: een opening te dicht bij het einde van een wand of bij een andere, een latei die niet onder de bovenregels past, een onderdeel dat langer is dan de langste voorraad.

Het paneel {{ui:Problemen}} toont ook **Interfaces (LOD 350)** voor wandpanelen en betonwanden: een opening die voorbij het einde of de bovenkant van zijn wand loopt, twee openingen die elkaar overlappen, en een opening in een betonwand die breder is dan 1000 mm zonder omlijstingsstaaf. Het zijn adviezen, dezelfde regels die de audit van BimCraft uitvoert; de breedte is de startwaarde van CadCraft, geen norm.
