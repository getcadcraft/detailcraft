---
title: Leverandørlager og leveringstider
summary: Tjek de stænger din tilskæringsliste køber mod en leverandørs lagerliste: er der nok, og hvor lang er ventetiden?
keywords: leverandør, lager, leveringstid, stållager, værk, tilgængelighed, restordre, stænger, indkøb, forsyning
from: 1373f5a3
---

Fanen {{ui:Forsyning}} slår hver profil op, som {{ui:Tilskæringsliste}} køber, i en leverandørs lagerliste. Filen bliver i modellen; intet sendes nogen steder hen.

## Tilføj leverandørens fil

Tryk på {{ui:Tilføj en leverandørfil}} og vælg en CSV-fil fra din leverandør (med komma, semikolon eller tabulator som skilletegn). Den skal have en kolonne for varen eller profilen (Item, Name, Description, Section, SKU) og en for lager (In stock, Quantity, On hand) eller for leveringstiden. Enheden (each, metres, kilograms, tonnes), prisen, leverandøren og en dato for genopfyldning læses, når der er en kolonne for dem. Ord forstås også: »Out of stock«, »In stock«, »2-3 weeks«, »backorder«. Op til fem filer kan gemmes; hvis du tilføjer en fil med samme navn, erstattes den.

## Hvad du ser

For hver profil din tilskæringsliste køber, viser tabellen hvad modellen kræver, hvad der er på lager, leveringstiden, leverandøren og et resultat:

- **Dækket:** der er nok på lager.
- **Mangler:** lageret er under behovet. Hvis lageret er under behovet, og du har angivet en længste ventetid, fortæller leveringstiden dig, hvor lang tid resten tager.
- **For sent:** der er ikke noget lagertal, og leveringstiden er længere end den ventetid, du accepterer.
- **Intet lagertal:** filen siger det ikke.
- **Anden enhed:** leverandøren angiver profilen i en enhed, modellen ikke kan give.

Det modellen kræver, angives i stænger (fra den nestede tilskæringsliste, med dine lagerlængder), i meter stang købt og i kilogram (profilens vægt pr. meter), og filens egen enhed bruges. En profil matches på sit navn (»W16 X 26« og »w16x26« er det samme). Profiler, der ikke står i filen, bliver vist på listen.

Mangler og sene profiler står i panelet {{ui:Problemer}}. Her bestilles intet.

## Begrænsninger

Lagertallene og leveringstiderne er filens, fra den dag den blev lavet. Plader nestes ikke, så de slås ikke op. Filen læses kun: enhver instruktion i den er bare tekst.
