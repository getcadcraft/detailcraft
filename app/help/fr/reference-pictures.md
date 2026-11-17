---
title: Coller une zone copiée comme image de référence
summary: Copiez une partie d'une feuille PDF dans MarkupCraft et collez-la dans DetailCraft à sa taille réelle, posée sur un niveau sous l'acier, pour modéliser par-dessus.
keywords: image, image de référence, fond, arrière-plan, zone de copie, markupcraft, pdf, décalquer, taille réelle, échelle, opacité, superposition
from: 0c48445f
---

L'outil Copier une zone de MarkupCraft copie une partie d'une feuille sous forme d'image qui connaît sa taille réelle. Collez-la dans DetailCraft : elle se pose à plat sur un niveau, à sa taille réelle, sous la trame et l'acier, pour que vous puissiez placer des éléments sur un plan des dessins.

## Coller

1. Dans MarkupCraft, copiez la zone avec {{ui:Plus}} › {{ui:Copier une zone de la page…}}, puis {{ui:Copier}} (ou {{ui:Copier en superposition}}, qui rend le papier transparent).
2. Dans DetailCraft (même navigateur), appuyez sur {{key:Mod+V}} ou choisissez {{ui:Coller}}.

L'image se place au milieu de la trame, sur le niveau affiché dans {{ui:Plan}} (en 3D ou en {{ui:Altitude}}, sur le niveau le plus bas), et elle est sélectionnée. La barre d'état indique sa taille.

- **Taille réelle :** lorsque la feuille avait une échelle de dessin, un pixel est dessiné à la longueur qu'il représente sur le dessin.
- **Taille sur papier :** lorsque la feuille n'avait pas d'échelle, l'image a la taille de la zone sur le papier, et la barre d'état le signale. Saisissez un nouveau **mm par pixel** dans {{ui:Propriétés}} pour la mettre à l'échelle.

Une zone copiée en superposition démarre avec l'opacité avec laquelle elle a été copiée.

{{key:Mod+V}} colle ce que vous avez copié en dernier : la zone de MarkupCraft, ou des éléments et des semelles copiés dans DetailCraft. Si une autre image a été copiée dans le presse-papiers après la zone (depuis un autre programme), rien n'est collé ; copiez de nouveau la zone.

## Déplacer, modifier et supprimer

- Cliquez sur l'image pour la sélectionner (ce qui se trouve devant elle est pris en premier). Un contour bleu indique qu'elle est sélectionnée.
- Faites-la glisser pour la déplacer sur le niveau. Son milieu et ses coins s'accrochent aux intersections de la trame.
- Dans {{ui:Propriétés}}, saisissez l'emplacement de son milieu (x, y) et le niveau sur lequel elle repose (z), son **mm par pixel** et son **opacité**.
- {{key:Delete}} ou {{ui:Supprimer}} la retire.

Chaque collage, déplacement, modification et suppression constitue une seule étape : {{key:Mod+Z}} l'annule.

L'image est enregistrée dans le fichier du modèle, elle s'ouvre donc avec le modèle. Elle sert uniquement de référence : elle ne figure ni dans les plans, ni dans les exports, ni dans la nomenclature, ni dans une copie.
