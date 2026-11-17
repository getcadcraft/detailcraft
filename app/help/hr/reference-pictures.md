---
title: Zalijepi kopirano područje kao referentnu sliku
summary: Kopirajte dio PDF lista u MarkupCraftu i zalijepite ga u DetailCraft u stvarnoj veličini, na razini ispod čelika, da biste modelirali preko njega.
keywords: slika, referentna slika, podloga, pozadina, kopiraj područje, markupcraft, pdf, prijenos obrisa, stvarna veličina, mjerilo, neprozirnost, preklapanje
from: 0c48445f
---

Alat MarkupCrafta **Kopiraj područje** kopira dio lista kao sliku koja zna koliko je velika. Zalijepite je u DetailCraft i ona leži ravno na razini, u stvarnoj veličini, ispod mreže i čelika, pa možete postaviti elemente preko tlocrta iz crteža.

## Zalijepite je

1. U MarkupCraftu kopirajte područje pomoću {{ui:Više}} › {{ui:Kopiraj područje stranice…}}, zatim {{ui:Kopiraj}} (ili {{ui:Kopiraj kao preklapanje}}, što papir čini prozirnim).
2. U DetailCraftu (u istom pregledniku) pritisnite {{key:Mod+V}} ili odaberite {{ui:Zalijepi}}.

Slika se smješta na sredinu mreže, na razini prikazanoj u {{ui:Tlocrt}} (u 3D prikazu ili pročelju na najnižoj razini), i odabrana je. Statusna traka navodi koliko je velika.

- **Stvarna veličina:** kada je list imao mjerilo crteža, jedan piksel se crta kao duljina koju prikazuje na crtežu.
- **Veličina na papiru:** kada list nije imao mjerilo, slika je velika koliko je područje bilo na papiru, a statusna traka to navodi. Upišite novi **mm po pikselu** u {{ui:Svojstva}} da je skalirate.

Područje kopirano kao preklapanje počinje s neprozirnošću s kojom je kopirano.

{{key:Mod+V}} zalijepi ono što ste kopirali posljednje: područje iz MarkupCrafta ili elemente i temelje kopirane u DetailCraftu. Ako je u međuspremnik nakon područja kopirana druga slika (iz drugog programa), ništa se ne zalijepi; ponovno kopirajte područje.

## Pomaknite, promijenite i izbrišite je

- Kliknite sliku da je odaberete (ono što je ispred nje odabire se prvo). Plavi obrub pokazuje da je odabrana.
- Povucite je da je pomaknete po razini. Njezina sredina i kutovi privlače se na sjecišta mreže.
- U {{ui:Svojstva}} upišite gdje je njezina sredina (x, y) i razinu na kojoj leži (z), njezin **mm po pikselu** i **neprozirnost**.
- {{key:Delete}} ili {{ui:Izbriši}} je uklanja.

Svako lijepljenje, pomicanje, promjena i brisanje jedan je korak: {{key:Mod+Z}} ga poništava.

Slika se sprema u datoteku modela, pa se otvara zajedno s modelom. To je samo referenca: ne pojavljuje se u crtežima, izvozima, sastavnici materijala ni kopiji.
