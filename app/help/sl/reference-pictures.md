---
title: Prilepite kopirano območje kot referenčno sliko
summary: Kopirajte del lista PDF v MarkupCraft in ga prilepite v DetailCraft v pravi velikosti, ležeč na nivoju pod jeklom, da lahko modelirate čez njo.
keywords: slika, referenčna slika, podlaga, ozadje, kopiraj območje, markupcraft, pdf, obrisovanje, prava velikost, merilo, neprosojnost, prekrivanje
from: 0c48445f
---

Orodje MarkupCraft za kopiranje območja kopira del lista kot sliko, ki pozna svojo velikost. Prilepite jo v DetailCraft, kjer leži ravno na nivoju, v pravi velikosti, pod mrežo in jeklom, tako da lahko elemente postavite čez tloris iz risb.

## Prilepite jo

1. V MarkupCraft kopirajte območje z {{ui:Več}} › {{ui:Kopiraj območje strani…}}, nato {{ui:Kopiraj}} (ali {{ui:Kopiraj kot prekrivanje}}, ki naredi papir prosojen).
2. V DetailCraft (v istem brskalniku) pritisnite {{key:Mod+V}} ali izberite {{ui:Prilepi}}.

Slika pristane na sredini mreže na nivoju, prikazanem v {{ui:Tloris}} (v {{ui:3D}} ali pogledu pa na najnižjem nivoju), in je izbrana. Vrstica stanja pove, kako velika je.

- **Prava velikost:** če je imel list merilo risbe, je en slikovni piksel narisan kot dolžina, ki jo kaže na risbi.
- **Velikost na papirju:** če list ni imel merila, je slika tako velika, kot je bilo območje na papirju, vrstica stanja pa to pove. Vnesite nov **mm na piksel** v {{ui:Lastnosti}}, da jo spremenite v merilu.

Območje, kopirano kot prekrivanje, se začne z neprosojnostjo, s katero je bilo kopirano.

{{key:Mod+V}} prilepi tisto, kar ste nazadnje kopirali: območje iz MarkupCraft ali elemente in temelje, kopirane v DetailCraft. Če je bila v odložišče po območju kopirana druga slika (iz drugega programa), se ne prilepi nič; območje kopirajte znova.

## Premaknite, spremenite in izbrišite jo

- Kliknite sliko, da jo izberete (najprej se izbere vse, kar je pred njo). Moder obris pokaže, da je izbrana.
- Povlecite jo, da jo premaknete čez nivo. Njena sredina in vogali se pripnejo na presečišča mreže.
- V {{ui:Lastnosti}} vnesite, kam pride njena sredina (x, y), nivo, na katerem leži (z), njen **mm na piksel** in **neprosojnost**.
- {{key:Delete}} ali {{ui:Izbriši}} jo odstrani.

Vsako prilepljanje, premik, sprememba in brisanje je en korak: {{key:Mod+Z}} ga razveljavi.

Slika je shranjena v datoteki modela, zato se odpre skupaj z modelom. Je zgolj referenca: ni v risbah, izvozih, {{ui:Kosovnica}} ali kopiji.
