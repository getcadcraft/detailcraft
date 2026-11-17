---
title: Lipirea unei zone copiate ca imagine de referință
summary: Copiați o parte dintr-o planșă PDF în MarkupCraft și lipiți-o în DetailCraft la dimensiunea ei reală, culcată pe un nivel sub oțel, ca să modelați peste ea.
keywords: imagine, imagine de referință, suport, fundal, copiere zonă, markupcraft, pdf, calc, dimensiune reală, scară, opacitate, suprapunere
from: 0c48445f
---

Instrumentul „Copiere zonă” din MarkupCraft copiază o parte dintr-o planșă ca imagine care știe cât de mare este. Lipiți-o în DetailCraft și ea se așază culcată pe un nivel, la dimensiunea ei reală, sub grilă și oțel, ca să puneți elemente peste un plan din desene.

## Lipirea

1. În MarkupCraft, copiați zona cu {{ui:Mai multe}} › {{ui:Copiere zonă din pagină…}}, apoi {{ui:Copiere}} (sau {{ui:Copiere ca suprapunere}}, care face hârtia transparentă).
2. În DetailCraft (în același browser), apăsați {{key:Mod+V}} sau alegeți {{ui:Lipire}}.

Imaginea apare în mijlocul grilei, pe nivelul afișat în Plan (în 3D sau într-o fațadă, pe cel mai jos nivel), și este selectată. Bara de stare spune cât de mare este.

- **Dimensiune reală:** când planșa avea o scară de desen, un pixel este desenat cât lungimea pe care o arată pe desen.
- **Dimensiune pe hârtie:** când planșa nu avea scară, imaginea are dimensiunea zonei pe hârtie, iar bara de stare o spune. Scrieți un **mm pe pixel** nou în {{ui:Proprietăți}} ca s-o scalați.

O zonă copiată ca suprapunere începe cu opacitatea cu care a fost copiată.

{{key:Mod+V}} lipește ultimul lucru copiat: zona din MarkupCraft sau membrii și tălpile copiate în DetailCraft. Dacă după zonă a fost copiată în clipboard o altă imagine (dintr-un alt program), nu se lipește nimic; copiați din nou zona.

## Mutare, modificare și ștergere

- Faceți clic pe imagine ca s-o selectați (ce se află în fața ei este ales primul). Un contur albastru arată că este selectată.
- Trageți-o ca s-o mutați pe nivel. Centrul și colțurile ei se fixează pe intersecțiile grilei.
- În {{ui:Proprietăți}}, scrieți unde se află centrul ei (x, y), nivelul pe care stă (z), **mm pe pixel** și **opacitatea**.
- {{key:Delete}} sau {{ui:Ștergere}} o elimină.

Fiecare lipire, mutare, modificare și ștergere este un singur pas: {{key:Mod+Z}} îl anulează.

Imaginea este salvată în fișierul modelului, deci se deschide odată cu modelul. Este doar o referință: nu apare în desene, exporturi, lista de materiale sau o copie.
