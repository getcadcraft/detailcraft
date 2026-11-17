---
title: El cub de vista
summary: Feu clic en una cara, una aresta o una cantonada del cub de la cantonada de la vista per mirar des d'allà, arrossegueu-lo per orbitar, gireu l'anell de la brúixola, gireu les vistes de cara i torneu a l'inici.
keywords: cub de vista, viewcube, cub, brúixola, nord, vista inicial, vistes estàndard, superior, frontal, dreta, iso, cantonada, aresta, orbitar, girar la vista, icona d'eixos, indicador de cantonada, navegació
from: 3666ea8a
---

El cub de vista és a la part superior dreta de la vista 3D, sota la barra de vistes (només a {{ui:3D}}: {{ui:Planta}} i {{ui:Alçat}} ja miren directament el model). Gira amb la vista, de manera que sempre mostra cap a on mireu: {{ui:Dalt}} és amunt, {{ui:Davant}} mira cap al sud (el costat des del qual es veuen les quadrícules amb lletres a {{ui:Alçat}}), {{ui:Dreta}} mira cap a l'est, al llarg de les quadrícules numerades. Es manté transparent fins que hi apunteu.

## Mireu des d'un costat, una aresta o una cantonada

1. Apunteu el cub. La part sota el punter s'il·lumina: el centre d'una cara, una aresta (s'il·lumina a les dues cares que la comparteixen) o una cantonada (a les tres cares).
2. Feu-hi clic. La vista gira per mirar des d'allà, mantenint el mateix centre i el mateix zoom.

Hi ha 26 llocs on fer clic: 6 cares ({{ui:Dalt}}, {{ui:Baix}}, {{ui:Davant}}, {{ui:Darrere}}, {{ui:Esquerra}}, {{ui:Dreta}}), 12 arestes i 8 cantonades. Una cantonada dona la clàssica vista de tres quarts; una aresta mira a mig camí entre dues cares.

Una vista de cara del cub és una vista 3D, no {{ui:Planta}} ni {{ui:Alçat}}: no es retalla res, i el model encara es pot girar.

## Orbiteu arrossegant el cub

Arrossegueu el cub per girar la vista, igual que orbitar a la mateixa vista. Un arrossegament mai es pren com un clic, de manera que podeu agafar el cub per qualsevol lloc.

## L'anell de la brúixola

L'anell sota el cub porta N, E, S i O.

- **Arrossegueu l'anell** per girar el model al voltant de l'eix vertical, com si estigués sobre una plataforma giratòria. L'anell segueix el punter.
- **Feu clic en una lletra** per mirar des d'aquell costat, mantenint la inclinació amb què mireu cap avall. En una vista des de dalt, la lletra en què feu clic va a la part inferior de la pantalla.

## Vistes de cara: fletxes

Quan mireu directament una cara, apareixen petites fletxes al voltant del cub:

- Els quatre **triangles** porten al davant la cara d'aquell costat: el triangle sobre el cub mostra la cara que era a dalt, i així successivament.
- Les dues **fletxes corbes** de la part superior dreta giren la imatge un quart de volta en sentit horari o antihorari, sense canviar la cara que mireu. Useu-les per girar una planta de manera que un mur llarg travessi la pantalla.

## Inici

El botó de casa a la part superior esquerra del cub torna a la vista inicial de tres quarts i ajusta tot el model a la vista, igual que el botó Ajusta. {{key:Home}} fa el mateix mentre el cub té el focus del teclat.

## Amb el teclat

Amb {{key:Tab}} aneu al cub, i després:

| Tecla | Fa |
|---|---|
| {{key:left}} / {{key:right}} | tria una cara, aresta o cantonada al voltant del cub, en passos d'un vuitè de volta (els lectors de pantalla diuen quina) |
| {{key:up}} / {{key:down}} | tria una de més alta o més baixa, fins a {{ui:Dalt}} o fins a {{ui:Baix}} |
| {{key:Enter}} o {{key:Space}} | mira des de la que s'ha triat |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un quart de volta al voltant de l'eix vertical |
| {{key:Home}} | la vista inicial |
| {{key:Esc}} | surt del cub |

Les tecles premudes al cub es queden al cub: no inicien eines de DetailCraft.

## Icona d'eixos o res en lloc seu

Obriu {{ui:Configuració}} ({{key:Mod+,}}), la pestanya {{ui:DetailCraft}}, i definiu **Indicador de cantonada** a {{ui:Cub de vista}} (el valor inicial), {{ui:Icona d'eixos}} (un petit marcador X, Y, Z a la part inferior esquerra: X vermell, Y verd, Z blau) o {{ui:Cap}}. Aquest navegador recorda l'opció. Vegeu [Configuració de DetailCraft](topic:settings#corner-indicator).
