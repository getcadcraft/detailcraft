---
title: Gewapend betonnen balken, kolommen, vloeren en wanden detailleren
summary: Voeg betonnen balken, kolommen, vloeren en wanden toe via het raster, geef ze staven, beugels en haken, controleer stooklengten en verankering tegen ACI 318-19 of EN 1992-1-1, en maak werkplaatstekeningen en buigstaten.
keywords: gewapend beton, wapening, wapeningsstaal, balk, kolom, vloer, wand, beugels, haken, stooklengte, stoklas, verankering, verankeringslengte, ld, ldh, lbd, dekking, tussenafstand, omlijstingen, matten, staafmerken, buigstaat, bbs, werkplaatstekening, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC importeren
from: 3835b7ec
---

Het tabblad {{ui:Beton}} onder de weergave toont de staven van betonnen balken, kolommen, vloeren en wanden in detail. U geeft de maten en de staven; DetailCraft plaatst elke staaf, nummert hem, controleert de stooklengten, de verankering, de dekking en de tussenafstand tegen de clausule waaruit ze komen, en tekent hem.

:::warning
DetailCraft detailleert de staven die u opgeeft. Het ontwerpt ze niet. Elk resultaat is ter controle door een constructeur.
:::

## Het tabblad Beton openen

Kies het tabblad {{ui:Beton}} onder de weergave. In een lintindeling staat {{ui:Beton}} in het tabblad {{ui:Modelleren}} naast {{ui:Fundering}}. Met de opdrachtregel van de tekenstijl typt u {{cmd:CONCRETE}}.

## Een element via het raster toevoegen

Betonelementen worden geplaatst op de rasterlijnen en niveaus van het model, dus stel die eerst in (linkerpaneel).

1. Kies in {{ui:Toevoegen via raster}} het {{ui:Element}}: {{ui:Betonbalk}}, {{ui:Betonkolom}}, {{ui:Vloer}} of {{ui:Wand}}.
2. Kies de rasterlijnen en niveaus:
   - een balk loopt van de ene rasterkruising naar de andere, met de bovenkant op het niveau;
   - een kolom staat op een kruising, van het ene niveau naar het andere;
   - een vloer vult de rechthoek tussen twee genummerde en twee met letters aangeduide rasterlijnen, met de bovenkant op het niveau;
   - een wand loopt langs haar hartlijn van de ene kruising naar de andere, van het ene niveau naar het andere.
3. Geef de maat en kies {{ui:Toevoegen}}. Het element wordt geselecteerd en zijn velden openen in het paneel {{ui:Eigenschappen}}.

Elk element begint met staven die startwaarden zijn, geen ontwerp: wijzig ze naar die van de constructeur.

## De staven wijzigen

Selecteer het element (in de weergave, of zijn naam in het tabblad {{ui:Beton}}). Het paneel {{ui:Eigenschappen}} toont:

| Element | Wat u instelt |
|---|---|
| Ligger | Breedte, hoogte, vrije dekking; boven- en onderstaven (maat, aantal, recht of 90°-haak aan de uiteinden); zijstaven; beugels (maat, haken van 135° of 90°, de afstand van de eerste tot het steunvlak, de lengte en tussenafstand van de eindzone, de tussenafstand daartussen); steunlengten; stooklengten |
| Kolom | Breedte, diepte over, rotatie, dekking; langsstaven op elk vlak; beugels zoals voor balken; wat de staven boven doen (stoken met de kolom erboven, haak in de vloer, of stoppen) |
| Vloer | Dikte, maat, bovenzijde, dekkingen; onderste mat en bovenste mat in elke richting (maat en tussenafstand); U-staven rond de randen; omlijstingsstaven; openingen |
| Wand | Dikte, dekking, één of twee lagen, horizontale en verticale staven, U-staven aan de uiteinden, verticale staven wel of niet gestoken boven, omlijstingsstaven, openingen |

Elke wijziging is één stap ongedaan maken. Een wijziging die niet gebouwd kan worden, wordt geweigerd en de statusbalk zegt waarom, bijvoorbeeld "De opening past niet in het element met de dekking erbij."

Beugels en kolombeugels zijn gesloten, met beide haken in één hoek. De staven van een balk lopen aan zijn uiteinden door in een betonkolom tot het verre vlak van de kolom min de dekking; is er geen kolom, geef dan de {{ui:Steunlengte aan het begin (mm)}} en die aan het eind.

## Stooklengten en verankering

Staven langer dan de {{ui:Staflengte (mm)}} (12000 om mee te beginnen) worden in gelijke stukken geknipt en gestoken. De tabel {{ui:Stooklengten en verankering}} somt elke stooklengte en elke verankering op: wat nodig is, met de clausule en zijn termen, en wat het detail heeft.

- Een stooklengte van 0 betekent "naar behoefte": de lengte die de norm geeft, naar boven afgerond op 25 mm.
- Typ uw eigen stooklengte om die te gebruiken. Is ze korter dan nodig, dan is het een probleem (zie hieronder), en wordt ze in de tabel met * gemarkeerd.
- Verankering wordt gemeten vanaf het steunvlak tot het einde van de staaf binnen de steun. Een balk zonder bekende steun meldt dat, in plaats van hem te controleren.
- Een kolom op een fundering stoot met de aansluitstaven van de fundering, en een kolom op een andere kolom met de staven van die kolom: ook die stooklengte wordt gecontroleerd.

**ACI 318-19** (SI): rechte staven in trek 25.4.2.3 (de tabel, met ψt, ψe, ψg, λ), standaardhaken 25.4.3.1 (ψr 1.6 en ψo 1.25, tenzij anders bekend), staven in druk 25.4.9.2, stooklengten in trek 25.5.2.1 (klasse B, of klasse A in de instellingen), stooklengten in druk 25.5.5.1.

**EN 1992-1-1**: verankering 8.4.4 met fbd uit 8.4.2 (goede of slechte hechting), stooklengten 8.7.3 met α6 voor elke staaf die op één doorsnede gestoken is. γc, γs en αct beginnen op de aanbevolen waarden; stel die van uw nationale bijlage in.

## De controles

Elke controle die mislukt, staat in het paneel Problemen van de shell (bron {{ui:Wapeningscontroles}}) en in de lijst {{ui:Controles}} van het element:

| Controle | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Dekking | Tabel 20.5.1.3.1, per blootstelling | Minimum hechtingsdekking, tabel 4.2 (de duurzaamheidsdekking geeft u zelf op) |
| Vrije afstand van staven | 25.2.1 (balken, vloeren, wanden), 25.2.3 (kolommen) | 8.2 (2) |
| Beugelafstand | 9.7.6.2.2 | 9.2.2 (6) |
| Minimale wapening van balken | 9.6.1.2 | 9.2.1.1 (1) |
| Zijstaven van balken dieper dan 900 mm | 9.7.2.3 | niet gecontroleerd |
| Wapeningsverhouding kolom, aantal staven | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Kolombeugels: afstand, maat, dwarsbeugels | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Vloer: afstand, minimale wapening | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Wand: afstand, minimale wapening, twee lagen | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Stooklengten, verankering | zoals hierboven | zoals hierboven |

De korrelgrootte van het toeslagmateriaal is niet bekend, dus de vrije afstand wordt zonder die grootte gecontroleerd.

## Openingen, omlijstingen en randstaven

Kies {{ui:Een opening toevoegen}} onder een geselecteerde vloer of wand en stel de plaats en de maat in. Staven die erdoor lopen, stoppen op dekking vanaf hun rand. Omlijstingsstaven worden aan elke kant toegevoegd, in dezelfde laag, en dragen de helft van de oppervlakte van de doorgesneden staven, één verankeringslengte voorbij de opening. Dat is de startregel van DetailCraft, geen clausule uit een norm: wijzig de {{ui:Omlijstingsstaven}} naar die van de constructeur. Hoekstaven worden niet toegevoegd.

U-staven rond de vrije randen van een vloer en aan de uiteinden van een wand hebben benen van één stooklengte.

## Staafmerken en de buigstaat

Identieke staven delen één merk: funderingen houden F-merken (5F1), balken krijgen B, kolommen C, vloeren S en wanden W (7B1, 8C1, 4S2). Het tabblad {{ui:Buigstaat}} en zijn CSV tonen nu elke staaf van de constructie, funderingen eerst. {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Buigen}} downloadt hem.

## Werkplaatstekeningen

Kies {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Wapeningstekeningen}}, {{ui:Wapeningstekeningen}} in het tabblad {{ui:Beton}}, of {{ui:Werkplaatstekening}} naast één element. Elk element krijgt een blad met een gevel (een plattegrond voor een vloer) die elke staaf met zijn merk toont, de zones van beugels of kolombeugels en de stooklengten met maten, en een doorsnede in het midden. Daarna geven buigbladen elk merk weer, met een schets van zijn vorm, zijn afmetingen, het aantal, de snijlengte en het gewicht.

De bladen worden elke keer opnieuw uit het model gemaakt, en opnieuw na elke wijziging zolang het venster open is: het titelblok toont de modelverwijzing. Kies {{ui:Dit blad als PDF}} of {{ui:Alle bladen als PDF}}.

## Staven uit een IFC-bestand

{{ui:Bestand}} › {{ui:IFC importeren}} leest nu IfcReinforcingBar: de schijf die langs zijn hartlijn is doorgetrokken, komt terug als rechte benen en buigingen, met zijn diameter, zijn merk en het element dat hem houdt. De staven worden bewaard zoals ze gelezen zijn (ze worden niet omgezet in de regels van een balk of vloer), getoond in de weergave, vermeld in de buigstaat en opnieuw weggeschreven met de IFC-export. Het importrapport zegt hoeveel staven er zijn gelezen, van welke maten, in hoeveel elementen, en wat er is weggelaten en waarom.

Een balk, kolom, vloer of wand uit dat bestand die staven bevat of waarvan het materiaal beton is, wordt niet als staal beschouwd; het rapport meldt dat. De eigen IFC-export van DetailCraft bevat de definitie van elk betonelement, dus het komt terug als zichzelf, en zijn staven worden er opnieuw uit gemaakt.

:::note
Het lezen van de eigen bestanden van een constructief ontwerpprogramma (niet IFC) is nog niet beschikbaar: exporteer er IFC uit.
:::

## De IFC-export

Betonnen balken, kolommen, vloeren (met openingen) en wanden gaan naar buiten als IfcBeam, IfcColumn, IfcSlab en IfcWall, elk met zijn staven als IfcReinforcingBar (hoofdstaven, beugels en kolombeugels, randstaven) die eraan zijn gekoppeld. Elke staaf is een schijf die langs zijn hartlijn is doorgetrokken, met echte bogen bij de buigingen, en heeft zijn merk en zijn snijlengte.
