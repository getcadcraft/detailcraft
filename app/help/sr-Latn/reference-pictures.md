---
title: Nalepite kopirani deo kao referentnu sliku
summary: Kopirajte deo PDF lista u MarkupCraft-u i nalepite ga u DetailCraft u pravoj veličini, na nivou ispod čelika, da biste modelovali preko njega.
keywords: slika, referentna slika, podloga, pozadina, kopiraj oblast, markupcraft, pdf, prati, prava veličina, razmera, neprovidnost, preklapanje
from: 0c48445f
---

Alatka {{ui:Copy area}} › {{ui:Kopiraj oblast}} u MarkupCraft-u kopira deo lista kao sliku koja zna koliko je velika. Nalepite je u DetailCraft i ona leži ravno na nivou, u pravoj veličini, ispod mreže i čelika, pa možete da postavljate elemente preko osnove iz crteža.

## Lepljenje

1. U MarkupCraft-u kopirajte oblast pomoću {{ui:Više}} › {{ui:Kopiraj oblast stranice…}}, zatim {{ui:Kopiraj}} (ili {{ui:Kopiraj kao preklapanje}}, što čini papir providnim).
2. U DetailCraft-u (isti pregledač) pritisnite {{key:Mod+V}} ili izaberite {{ui:Nalepi}}.

Slika se pojavljuje u sredini mreže, na nivou prikazanom u {{ui:Osnova}} (u 3D ili u izgledu, na najnižem nivou), i biva izabrana. Statusna traka kaže koliko je velika.

- **Prava veličina:** kada je list imao razmeru crteža, jedan piksel se crta kao dužina koju pokazuje na crtežu.
- **Veličina na papiru:** kada list nije imao razmeru, slika je onoliko velika koliko je oblast bila na papiru, a statusna traka to kaže. Upišite novo **mm po pikselu** u {{ui:Svojstva}} da je skalirate.

Oblast kopirana kao preklapanje počinje sa neprovidnošću kojom je kopirana.

{{key:Mod+V}} nalepljuje ono što ste poslednje kopirali: oblast iz MarkupCraft-a ili elemente i temelje kopirane u DetailCraft-u. Ako je posle oblasti u međuspremnik kopirana druga slika (iz drugog programa), ništa se ne lepi; ponovo kopirajte oblast.

## Pomeranje, promena i brisanje

- Kliknite sliku da je izaberete (ono što je ispred nje bira se prvo). Plavi obrub pokazuje da je izabrana.
- Prevucite je da je pomerite preko nivoa. Njena sredina i ćoškovi se hvataju za preseke mreže.
- U {{ui:Svojstva}} upišite gde je njena sredina (x, y) i nivo na kome leži (z), njen **mm po pikselu** i **neprovidnost**.
- {{key:Delete}} ili {{ui:Izbriši}} je uklanja.

Svako lepljenje, pomeranje, promena i brisanje je jedan korak: {{key:Mod+Z}} ga vraća.

Slika se čuva u datoteci modela, pa se otvara zajedno sa modelom. Ona je samo referenca: nije u crtežima, izvozima, spisku materijala niti u kopiji.
