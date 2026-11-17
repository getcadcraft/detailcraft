---
title: Nalijepi kopirano područje kao referentnu sliku
summary: Kopirajte dio PDF lista u MarkupCraft i nalijepite ga u DetailCraft u stvarnoj veličini, na nivou ispod čelika, da biste modelirali preko njega.
keywords: slika, referentna slika, podloga, pozadina, kopiraj područje, markupcraft, pdf, prenošenje, stvarna veličina, razmjera, prozirnost, preklop
from: 0c48445f
---

Alat MarkupCraft-a Kopiraj područje kopira dio lista kao sliku koja zna koliko je velika. Nalijepite je u DetailCraft i ona leži ravno na nivou, u stvarnoj veličini, ispod mreže i čelika, tako da možete postaviti elemente preko osnove iz crteža.

## Nalijepi

1. U MarkupCraft kopirajte područje pomoću {{ui:Više}} › {{ui:Kopiraj područje stranice…}}, pa {{ui:Kopiraj}} (ili {{ui:Kopiraj kao preklop}}, što čini papir providnim).
2. U DetailCraft (u istom pregledaču) pritisnite {{key:Mod+V}} ili izaberite {{ui:Zalijepi}}.

Slika se postavlja u sredinu mreže na nivou prikazanom u {{ui:Osnova}} (u 3D ili izgledu, na najnižem nivou) i odmah je izabrana. Statusna traka kaže koliko je velika.

- **Stvarna veličina:** kada je list imao razmjeru crteža, jedan piksel se crta kao dužina koju pokazuje na crtežu.
- **Veličina na papiru:** kada list nije imao razmjeru, slika je velika koliko je područje bilo na papiru, a statusna traka to kaže. Upišite novi **mm po pikselu** u {{ui:Svojstva}} da je skalirate.

Područje kopirano kao preklop počinje sa prozirnošću s kojom je kopirano.

{{key:Mod+V}} nalijepi ono što ste kopirali posljednje: područje iz MarkupCraft-a ili elemente i temelje kopirane u DetailCraft-u. Ako je u međuspremnik nakon područja kopirana druga slika (iz drugog programa), ništa se ne lijepi; ponovo kopirajte područje.

## Pomjeranje, promjena i brisanje

- Kliknite sliku da je izaberete (ono što je ispred nje bira se prvo). Plavi obris pokazuje da je izabrana.
- Prevucite je da je pomjerite po nivou. Njen centar i ivice se zalijepe na presjeke mreže.
- U {{ui:Svojstva}} upišite gdje je njen centar (x, y) i nivo na kojem leži (z), njen **mm po pikselu** i njenu **prozirnost**.
- {{key:Delete}} ili {{ui:Izbriši}} je uklanja.

Svako lijepljenje, pomjeranje, promjena i brisanje je jedan korak: {{key:Mod+Z}} ga poništava.

Slika se čuva u datoteci modela, pa se otvara zajedno s modelom. Ona je samo referenca: nije u crtežima, izvozima, spisku materijala niti u kopiji.
