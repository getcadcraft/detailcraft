---
title: Trappen
summary: Plaats een rechte stalen trap vanaf de optrede, de traddiepte en de breedte: twee trapbomen en plaattreden, één gelaste werkplaatssamenstelling.
keywords: trap, trappen, trapboom, trapbomen, trede, optrede, traddiepte, traprand, loop, stalen trap, ibc 1011, blondel
from: 62fa3845
---

Een rechte stalen trap: twee trapbomen (U-profielen met hun tenen naar binnen, of platte staven op hun kant) en een plaattrede op elke trede, tussen de trapbomen gelast. DetailCraft berekent het aantal optreden uit de stijging, toetst ze aan de grenzen van de bouwvoorschriften en maakt de trap als één werkplaatssamenstelling.

## Een trap plaatsen

1. Kies {{ui:Trap}} in de groep {{ui:Plaatsen}}, of druk op {{key:S}}.
2. Stel de trap rechts in: de **klimrichting** (0° klimt langs +x, 90° langs +y), de **stijging** (0 = omhoog tot de volgende verdieping), de **traddiepte**, de **vrije breedte** tussen de trapbomen, de **hoogste toegestane optrede**, de **trapboom**, de **dikte van de plaattrede**, de **traprand** en het materiaal.
3. Klik op een rastersnijpunt: dat is de voet van de eerste optrede, op de middellijn van de trap.

De statusbalk meldt hoeveel optreden er zijn gemaakt. Selecteer de trap (klik op een trapboom of een trede) om een instelling, zijn positie of zijn fase te wijzigen; de eigenschappen tonen ook de optreden, treden, totale looplengte, helling en 2 × optrede + traddiepte.

## Wat DetailCraft uitrekent

- **Optreden.** Zo weinig als nodig om elke optrede op of onder de hoogste toegestane te houden: een stijging van 3000 mm bij 178 mm of minder geeft 17 optreden van 176.5 mm. Er is één trede minder dan optreden (de bovenste vloer is de laatste trede).
- **Treden.** Een plaat van traddiepte + traprand diep (280 + 25 = PL6x305 standaard) en zo lang als de vrije breedte, met de bovenkant op elke optredehoogte en de voorrand (de traprand) voor de lijn van de optreden.
- **Trapbomen.** Onder de hellingshoek van de trap, van waar ze de onderste vloer raken tot waar ze de bovenste vloer raken, net buiten de vrije breedte, met hun bovenrand 50 mm boven de lijn van de traprand. De tenen van een U-profiel wijzen de trap in; een platte staaf zoals PL12x250 staat op zijn kant.
- **Lassen.** Elke trede aan beide trapbomen. De treden en de rechter trapboom zijn aan de linker trapboom gelast, zodat de trap één samenstellingsmerk krijgt (ST1) en zijn eigen montagetekening; de trapbomen krijgen onderdeelmerken st…, de treden p….
- **Controles.** Waarschuwingen wanneer een optrede buiten 4 tot 7 in. (102 tot 178 mm) valt of de traddiepte onder 11 in. (279 mm) ligt, de grenzen van IBC 2021 sectie 1011.5.2; wanneer 2 × optrede + traddiepte buiten 600 tot 650 mm valt (een gebruikelijke comfortregel); en wanneer de trapboom te ondiep is om de treden te dragen. Een onbekend trapboomprofiel verhindert dat de trap wordt gebouwd.

## Goed om te weten

- Verplaatsen, roteren, spiegelen, kopiëren, plakken, verwijderen en fasen werken voor een trap zoals voor een staaf. Een rotatie draait de klimrichting; een spiegeling stuurt hem de gespiegelde kant op.
- Trapbomen worden naar IFC geëxporteerd als IfcMember en treden als IfcPlate; beide gaan naar de NC-bestanden en de stuklijst. De clashcontrole laat de eigen onderdelen van een trap met rust (ze zijn aan elkaar gelast).
- Deze eenvoudige trap is één loop met plaattreden. Voor bordessen, leuningen met spijlen, gevouwen plaatbak- of roostertreden, een regelset die u kiest, een snijlijst en de gatentekeningen van de trapbomen, vinkt u {{ui:De stalen trapgenerator gebruiken}} aan in het gereedschap Trap (zie Stalentrapgenerator).
- De trapbomen zijn recht afgezaagd: hun eindsneden tegen de vloeren worden niet gemaakt.
- DetailCraft ontwerpt de trap niet: de trapbomen en treden worden niet gecontroleerd op sterkte of doorbuiging.
