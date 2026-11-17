---
title: Leverandørlager og leveringstider
summary: Sjekk lagerstengene som kappelisten din kjøper mot en leverandørs lagerliste: finnes det nok, og hvor lang er ventetiden?
keywords: leverandør, lager, leveringstid, stålgård, valsverk, tilgjengelighet, restordre, stenger, innkjøp, levering
from: 1373f5a3
---

Fanen {{ui:Levering}} slår opp hver profil som {{ui:Kappeliste}} kjøper, i en leverandørs lagerliste. Filen blir i modellen; ingenting sendes noe sted.

## Legg til leverandørens fil

Trykk {{ui:Legg til en leverandørfil}} og velg en CSV-fil fra leverandøren din (skilt med komma, semikolon eller tabulator). Den trenger en kolonne for varen eller profilen (Item, Name, Description, Section, SKU), og én for lager (In stock, Quantity, On hand) eller for leveringstid. Enheten (each, metres, kilograms, tonnes), prisen, leverandøren og en dato for påfylling leses når det finnes en kolonne for dem. Ord forstås også: "Out of stock", "In stock", "2-3 weeks", "backorder". Opptil fem filer kan beholdes; en ny fil med samme navn erstatter den gamle.

## Hva du ser

For hver profil kappelisten kjøper viser tabellen hva modellen trenger, hva som er på lager, leveringstiden, leverandøren og et resultat:

- **Dekket:** nok på lager.
- **Mangler med:** lageret er under behovet. Hvis lageret er under behovet og du har satt en lengste ventetid, forteller leveringstiden hvor lang tid resten tar.
- **For sent:** det finnes ingen lagertall, og leveringstiden er lengre enn ventetiden du godtar.
- **Ingen lagertall:** filen sier ikke noe.
- **Annen enhet:** leverandøren oppgir profilen i en enhet modellen ikke kan regne ut.

Hva modellen trenger, oppgis i stenger (fra den nestede kappelisten, med dine lagerlengder), i meter kjøpt stål og i kilogram (profilens vekt per meter), og filens egen enhet brukes. En profil matches på navnet ("W16 X 26" og "w16x26" er det samme). Profiler som ikke finnes i filen, listes.

Mangler og sene profiler står i panelet {{ui:Problemer}}. Her bestilles ingenting.

## Begrensninger

Lagertallene og leveringstidene er filens, slik de var den dagen den ble laget. Plater nestes ikke, så de slås ikke opp. Filen leses bare: eventuelle instruksjoner i den er bare tekst.
