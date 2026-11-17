---
title: De IFC-export controleren aan een IDS van de opdrachtgever
summary: Laad het .ids-bestand dat u hebt ontvangen en bekijk in Problemen welke geëxporteerde onderdelen er niet aan voldoen, voordat u de IFC verstuurt.
keywords: ids, information delivery specification, buildingsmart, eisen, levering, controle, validatie, kwaliteitscontrole, ifc-export, eigenschap, materiaal, inkoop
from: 50d0f785
---

## Wat u gaat doen

Een IDS (Information Delivery Specification, een buildingSMART-standaard) is de lijst van wat een IFC moet bevatten. DetailCraft controleert de IFC die het zou exporteren (hetzelfde bestand dat {{ui:IFC}} schrijft) tegen de IDS die u hebt ontvangen, en toont elk onderdeel dat tekortschiet.

## Stappen

1. Open of teken uw model.
2. Klik op {{ui:Controleren aan IDS…}} in de groep {{ui:Uitvoer}} van de werkbalk.
3. Klik op {{ui:Een .ids-bestand laden…}} en kies het bestand. Er wordt niets geüpload.
4. Lees het resultaat: elke specificatie met {{ui:Geslaagd}} of {{ui:Niet geslaagd}} en op hoeveel elementen ze van toepassing is.
5. Open Problemen ({{key:Ctrl+Shift+M}}) en klik op een mislukking: het onderdeel, de verbinding, de trap of de fundering waar het vandaan komt, wordt geselecteerd en het beeld zoomt erop in.

## Wat u ziet

- Eén waarschuwing per geëxporteerd element en per eis die het mist, met de naam van de specificatie, wat de IDS vraagt en wat de export heeft.
- Het controlerapport (in Problemen) begint met de IDS: de titel, versie, auteur en de aantallen per specificatie.

## Goed om te weten

- De IDS wordt opgeslagen in het modelbestand, dus hij wordt opnieuw gecontroleerd wanneer u het model opent. Laden of vergeten is één stap die u ongedaan kunt maken.
- Elke wijziging wordt even later opnieuw gecontroleerd; bij een groot model duurt het tussen twee controles iets langer.
- De GlobalIds van de export komen uit de modelnaam en de onderdeelnummers binnen DetailCraft, zodat ze van de ene controle naar de volgende hetzelfde blijven. Het model hernoemen geeft elk element nieuwe GlobalIds.
- Getallen worden vergeleken in SI-eenheden (de export is in millimeters; lengtes worden eerst naar meters omgerekend).

- Patronen in de IDS worden als de hele waarde gelezen. Een `^` aan het begin en een `$` aan het eind worden ook als "de hele waarde" opgevat, zoals de meeste IDS-bestanden ze bedoelen.

## Volgende

- [IFC exporteren](topic:ifc-export)
