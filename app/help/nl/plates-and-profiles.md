---
title: Platen plaatsen en eigen profielen toevoegen
summary: Plaats losse platen op dikte en breedte, en definieer uw eigen I-, U-, hoekstaal-, buis- of plat-staaldoorsneden.
keywords: plaat, plat, eigen profiel, gebruikersprofiel, parametrisch, doorsnede, vorm, dwarsdoorsnede, pl
from: c24c3b51
---

## Een plaat plaatsen

Een plaat wordt geplaatst als een ligger: hij loopt tussen twee kruisingen, met zijn breedte dwars en zijn dikte omhoog.

1. Kies {{ui:Plaat}} in de groep {{ui:Plaatsen}}, of druk op {{key:P}}.
2. Stel in het paneel {{ui:Eigenschappen}} {{ui:Dikte (mm)}} en {{ui:Breedte (mm)}} in. De standaard is 20 x 200 in A36.
3. Stel {{ui:Materiaal}} en {{ui:Draaiing (°)}} in als dat nodig is. Een draaiing van 90 zet de plaat op zijn kant.
4. Klik op twee kruisingen, of gebruik het formulier {{ui:Toevoegen via raster}}.

De profielnaam van de plaat is `PL<dikte>x<breedte>`, bijvoorbeeld PL20x200. De lengte is de afstand tussen de twee punten.

Om een geplaatste plaat te vergroten of verkleinen, selecteert u hem en wijzigt u {{ui:Dikte (mm)}} of {{ui:Breedte (mm)}}.

Platen die u plaatst, zijn eigen onderdelen (merk p, samenstelling P). Kopplaten en voetplaten die door verbindingen worden gemaakt, zijn ook platen, maar u wijzigt ze via hun verbinding; zie [Kopplaten](topic:end-plates).

## Een eigen profiel toevoegen

Wanneer de doorsnede die u nodig heeft niet in de catalogus staat, maakt u hem op basis van de afmetingen. Een eigen profiel hoort bij het model en wordt ermee opgeslagen. Om het in elk nieuw model te gebruiken, bewaart u het in {{ui:Mijn profielen}}, beschreven onder "Een profiel bewaren voor nieuwe modellen" hieronder.

1. Open in het paneel {{ui:Model}} links {{ui:Eigen profiel}}.
2. Typ een {{ui:Naam}}, bijvoorbeeld `W8x18-custom` of `RHS 120x80x5`. Het mag geen catalogusnaam zijn en niet op een plaatnaam lijken.
3. Kies een {{ui:Vorm}}: {{ui:I-profiel}}, {{ui:U-profiel}}, {{ui:Gelijkbenig hoekstaal}}, {{ui:Rechthoekige buis}}, {{ui:Ronde buis}} of {{ui:Plat staal}}.
4. Vul de afmetingen in die verschijnen, alles in millimeters:

| Vorm | Afmetingen |
|---|---|
| I-profiel | Hoogte d, flensbreedte bf, lijf tw, flens tf, overgangsradius r (mag 0 zijn) |
| U-profiel | Hoogte d, flensbreedte bf, lijf tw, flens tf (hoeken recht) |
| Gelijkbenig hoekstaal | Breedte b (elk been), dikte t |
| Rechthoekige buis | Hoogte h, breedte b, dikte t (buitenhoekradius 2t) |
| Ronde buis | Diameter D, dikte t |
| Plat staal | Breedte b, dikte t |

5. Laat {{ui:Bewaren in Mijn profielen}} aangevinkt om het in elk nieuw model te hebben (zie hieronder), of haal het vinkje weg om het alleen in dit model te houden.
6. Kies {{ui:Profiel toevoegen}}.

De statusbalk meldt "Profiel "…" toegevoegd; het staat in elke profiellijst onder Eigen." Het verschijnt in de lijst onder het formulier en aan het eind van elke lijst {{ui:Profiel}}.

DetailCraft controleert of de vorm kan bestaan. U ziet meldingen zoals "The web and flanges do not fit inside the depth and width." (Het lijf en de flenzen passen niet binnen de hoogte en breedte.), "The fillet radius is too big for the flange." (De overgangsradius is te groot voor de flens.) of "The wall is too thick." (De wand is te dik.). Corrigeer de getallen en kies daarna opnieuw {{ui:Profiel toevoegen}}.

### Wat eigen profielen krijgen

- Massa per meter uit de oppervlakte × 7850 kg/m³ (catalogusmaten gebruiken het gepubliceerde gewicht).
- Eigen I-profielen krijgen gaten, copings, kopplaten, NC-bestanden en werkplaatstekeningen, net als catalogus-I-profielen.
- Eigen plat staal gedraagt zich als platen.
- Eigen U-profielen en buizen krijgen gaten; hoekstaal en ronde buizen nog niet.

U kunt een eigen profiel niet bewerken of uit een model verwijderen zodra het is toegevoegd (gebruik direct {{key:Mod+Z}} als u een fout heeft gemaakt). Geef een gecorrigeerd profiel een nieuwe naam.

## Een profiel bewaren voor nieuwe modellen

{{ui:Mijn profielen}}, onder het formulier, is uw eigen lijst met eigen profielen. Die wordt in deze browser bewaard, op deze computer, niet in een modelbestand en niet in uw account.

- Een profiel dat is toegevoegd met {{ui:Bewaren in Mijn profielen}} aangevinkt, komt in de lijst. Elk nieuw model, ook het model dat DetailCraft opent bij het starten, begint met al deze profielen in de profiellijsten.
- Een profiel dat al in een model zit maar niet in de lijst staat, heeft een knop {{ui:Bewaren}} ernaast.
- In een model dat een van uw profielen niet heeft (bijvoorbeeld een oud bestand), kiest u {{ui:Hier gebruiken}} om het toe te voegen.
- {{ui:Verwijderen}} haalt een profiel uit de lijst. Modellen die het al gebruiken, houden hun eigen kopie.
- Een model dat u opent, behoudt de profielen die in het bestand zijn opgeslagen. Het openen van een bestand verandert uw lijst nooit.
- Een naam die al in de lijst staat met andere afmetingen, wordt geweigerd: geef het nieuwe profiel een andere naam.
- Het wissen van de sitegegevens van de browser, of het gebruik van een andere browser of computer, begint met een lege lijst. In een privévenster kan de lijst niet worden bewaard; de app meldt dat.
