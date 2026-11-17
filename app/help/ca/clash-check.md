---
title: Comprova les col·lisions
summary: Troba barres, plaques i sabates que s'endinsen les unes a les altres, deixant fora les peces que una connexió vol que es toquin, i vés a cada col·lisió.
keywords: col·lisió, comprovació de col·lisions, interferència, solapament, intersecció, col·lisió dura, coordinació, revisió del model
from: 04d72d3b
---

Obriu la pestanya {{ui:Col·lisions}} sota la vista i trieu {{ui:Comprova ara}}. DetailCraft mira cada parell de peces de les fases mostrades: acer amb acer, i acer amb una sabata. La pestanya llista cada col·lisió, de la més profunda a la menys, amb:

- les dues peces, per marca de peça (o marca de sabata) i perfil;
- **Solapament (mm)**: quant hi ha un punt d'una peça dins de l'altra, fins a la cara més propera;
- **Prop**: la intersecció de quadrícula i el nivell on és, o les seves coordenades;
- {{ui:Mostra}}: selecciona les dues peces i porta el lloc al centre de la vista.

El títol de la pestanya mostra quantes col·lisions ha trobat l'última comprovació. La comprovació no s'executa sola: després de canviar el model, la llista ho indica, i {{ui:Comprova ara}} la torna a executar.

## Què no és una col·lisió

- Peces que només es toquen: una placa contra una ala, una placa de base sobre la seva sabata, dues barres d'extrem a extrem. **Tolerància (mm)** fixa quant poden entrar dues peces una dins l'altra abans de comptar (1 mm al principi; fins a 50).
- Peces que una connexió uneix: una placa d'extrem amb la seva biga i amb l'ala del pilar on va cargolada, la biga i el pilar d'aquella unió, una placa de base amb el seu pilar, les plaques d'un empalmament amb les dues peces, un reforç amb la seva cartela (la ranura d'un tub no es talla al model). La connexió vol que es toquin.
- La nervadura de cisallament d'una placa de base dins de la sabata que hi ha a sota (hi és en un allotjament de morter).
- Cargols i ancoratges (passen per forats) i armadura.
- Peces en fases ocultes. Vegeu [Fases](topic:phases).

Un reforç o una biga que entra en un pilar sense cap connexió entre ells **sí que és** una col·lisió: aquella unió encara necessita una connexió. El reforç de l'exemple ho mostra: no té cartela. Seleccioneu-lo i trieu {{ui:Cartela}} ([Cartel·les de reforç diagonal](topic:brace-gussets)) i les seves col·lisions desapareixen.

## Bon a saber

- El solapament mesura la profunditat dins del material, així que una barra que entra a l'ànima o l'ala fina d'un pilar només mostra uns quants mil·límetres encara que entri molt.
- Les peces es comproven tal com són retallades: es tenen en compte les escopidures i el retall d'una biga a les seves plaques d'extrem. Els forats no.
