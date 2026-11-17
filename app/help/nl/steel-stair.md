---
title: Stalentrapgenerator
summary: Een stalen trap uit de verdiepingshoogte, de totale looplengte en de breedte: de optreden en traddiepte volgens een regelset die u kiest, bordessen, leuningen en spijlen, werkplaatstekeningen en een snijlijst met gewichten.
keywords: stalen trap, trapgenerator, trapboom, trede, traanplaat, rooster, gevouwen plaatbak, bordes, leuning, spijlen, stijging, traddiepte, osha, ibc, approved document k, snijlijst, gewichten, werkplaatstekening
from: a4f0a985
---

De trapgenerator maakt een complete stalen trap uit een paar getallen: de trapbomen, de treden, bordessen wanneer de loop te hoog is, leuningen met palen en spijlen, de bevestigingsgaten in de trapbomen, een snijlijst met gewichten en de werkplaatstekeningen. Hij begint vanuit het gereedschap {{ui:Trap}}, zoals de gewone trap (zie Trappen), met één schakelaar erbij.

## Een stalen trap plaatsen

1. Kies {{ui:Trap}} in de groep {{ui:Plaatsen}}, of druk op {{key:S}}.
2. Vink rechts {{ui:De stalen trapgenerator gebruiken}} aan.
3. Kies de **regelset** voor waar de trap wordt gebouwd, de **stijging** (vloer tot vloer; 0 = omhoog tot de volgende verdieping), de **beschikbare loop** (0 = laat de regel beslissen), de **vrije breedte** en het **tredetype**: traanplaat, rooster of gevouwen plaatbak.
4. Stel het trapboomprofiel, de bordessen (volgens de regel of een getal), de leuningen (beide zijden, één of geen), de hoogte van de leuning en de spijlafstand in.
5. Klik op een rastersnijpunt: dat is de voet van de eerste optrede.

Selecteer de trap (klik op een trapboom, trede of leuning) om een instelling te wijzigen; de eigenschappen tonen de optreden, traddiepte, helling, lopen en bordessen, het staal erin, de snijlijst en de bronnen van de regelset.

## De regelsets

De regelset beperkt de vorm van de trap: de stijging en traddiepte, 2 × optrede + traddiepte, de helling, het bordes, de hoogte van de leuning en de grootste opening. DetailCraft biedt de onderstaande; het gebied is een instelling, geen gok. Open **Waar de getallen van deze regelset vandaan komen** in de eigenschappen: elk getal noemt zijn bron en zegt hoe goed het is gecontroleerd.

- **International Building Code 2021**: optrede 4 tot 7 in., trede minstens 11 in., leuningen 34 tot 38 in. De limiet van 12 ft tussen bordessen wordt getoond als *niet gelezen*, en de leuningmaten als gelezen in handouts die de code citeren: bevestig ze voordat u erop vertrouwt.
- **OSHA 29 CFR 1910.25 en 1910.29** (industriële standaardtrappen): 30° tot 50°, optrede hoogstens 9.5 in., trede minstens 9.5 in., minstens 22 in. breed, bordessen even breed als de trap en 30 in. diep, en een bovenleuning die als handgreep dient, 36 tot 38 in. Deze zijn in de verordening zelf gelezen.
- **Approved Document K 2013, Engeland** (algemene toegangs- en nutstrappen): de bereiken voor stijging en traddiepte en 2 × optrede + traddiepte van 550 tot 700 mm, gelezen in het door de overheid gegeven rapport dat ze in tabelvorm zet. Het document geeft DetailCraft geen leuninghoogte, dus de hoogte die u instelt wordt gebruikt, en de lijst Problemen zegt dat.

Een regelset die hier niet staat, wordt niet geraden: de trap volgt dan de gewone comfortregel van 600 tot 650 mm en meldt dat er geen regel is.

## Wat het uitrekent

- **Optreden en traddiepte.** Het minste aantal optreden waarvan 2 × optrede + traddiepte in het midden van het bereik van de regel ligt, zonder dat de traddiepte onder het minimum van de regel zakt. Bij een opgegeven loop is de traddiepte de loop gedeeld door de treden, en wordt alles buiten de regel gemeld.
- **Lopen en bordessen.** Een loop die hoger is dan de regel toestaat, wordt gesplitst met een bordes even breed als de trap en niet smaller dan het minimum van de regel; u kunt ook om bordessen vragen. Een bordes is een frame van twee zijbalken en twee dwarshoekprofielen onder een afdekking, op twee palen.
- **Treden.** Een traanplaat is een gelaste plaat (standaard 6 mm; het patroon telt niet mee in het gewicht). Een gevouwen plaatbak heeft een omslag aan de traprand en is door het lijf van de trapboom gebout: twee gaten 2 mm groter dan de bout, op 0.3 en 0.7 van de diepte. Roosters worden getekend als plaat van gelijk gewicht (diepte van de draagstaaf × dikte ÷ hartafstand); de dwarsstaven en banden tellen niet mee, en de snijlijst zegt dat.
- **Leuningen.** Een buisvormige bovenleuning op palen langs elke loop en elk bordes, met een spijlafstand waar geen bol groter dan de opening van de regel doorheen past (standaard hoogstens 100 mm).

## Tekeningen, snijlijst, export

- De loop is één samenstelling; de leuningen zijn een andere (beide zijden zijn dezelfde samenstelling, tweemaal gemaakt). Elk heeft zijn montagetekening, en de tekening van de trapboom toont zijn gaten.
- Het **trapblad** (ST-…) toont de rechte trapboom van elke loop met de gatposities vanaf het onderste eind, en het trededetail: doorsnede, traprand, omslag en de eindflens met zijn gaten.
- {{ui:Snijlijst en gewichten}} in de eigenschappen somt elk profiel en elke lengte op met aantallen en kilogram; {{ui:De snijlijst downloaden (CSV)}} slaat hem op.
- Alles gaat naar de stuklijst, de NC-bestanden en IFC als gewone onderdelen (IfcMember, IfcColumn, IfcPlate).

## Goed om te weten

- Dit is een startpunt, geen ontwerp. Niets wordt gecontroleerd op sterkte of doorbuiging; de regelset beperkt alleen de vorm.
- Trapboomeinden tegen de vloeren worden recht afgezaagd en niet uitgewerkt; bordespalen staan op de vloer eronder en hebben geen voetplaten.
- Het plaatsen van de trap als één element in BimCraft is nog niet aangesloten.
