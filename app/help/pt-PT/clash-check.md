---
title: Detetar conflitos
summary: Encontre membros, chapas e sapatas que entram uns nos outros, deixando de fora as peças que uma ligação pretende juntar, e aceda a cada conflito.
keywords: conflito, deteção de conflitos, colisão, interferência, sobreposição, intersetar, conflito rígido, coordenação, verificar modelo
from: 04d72d3b
---

Abra o separador {{ui:Conflitos}} sob a vista e escolha {{ui:Verificar agora}}. O DetailCraft analisa cada par de peças nas fases apresentadas: aço contra aço, e aço contra uma sapata. O separador lista cada conflito, do mais profundo para o menos profundo, com:

- as duas peças, pela marca da peça (ou marca da sapata) e perfil;
- **Sobreposição (mm)**: quanto um ponto de uma peça está dentro da outra, até à face mais próxima;
- **Próximo**: a interseção de eixos e o nível onde está, ou as suas coordenadas;
- {{ui:Mostrar}}: seleciona as duas peças e traz o local para o meio da vista.

O título do separador mostra quantos conflitos encontrou a última verificação. A verificação não corre sozinha: depois de alterar o modelo, a lista avisa, e {{ui:Verificar agora}} volta a executá-la.

## O que não é um conflito

- Peças que apenas se tocam: uma chapa contra uma aba, uma chapa de base sobre a sua sapata, dois membros topo a topo. **Tolerância (mm)** define quanto duas peças podem entrar uma na outra antes de contar (1 mm para começar; até 50).
- Peças que uma ligação une: uma chapa de topo com a sua viga e com a aba do pilar a que está aparafusada, a viga e o pilar desse nó, uma chapa de base com o seu pilar, as chapas de uma emenda com as duas peças, um contraventamento com a sua chapa de gousset (a ranhura de um tubo não é cortada no modelo). A ligação pretende que se encontrem.
- O dente de corte de uma chapa de base na sapata sob ela (fica num alvéolo de argamassa).
- Parafusos e chumbadouros (passam por furos) e armadura.
- Peças em fases ocultas. Ver [Fases](topic:phases).

Um contraventamento ou viga que entra num pilar sem ligação entre eles **é** um conflito: esse nó ainda precisa de uma ligação. O contraventamento do pórtico de exemplo mostra isto: não tem chapa de gousset. Selecione-o e escolha {{ui:Gousset}} ([Chapas de gousset de contraventamento](topic:brace-gussets)) e os seus conflitos desaparecem.

## Bom saber

- A sobreposição mede a profundidade dentro do material, por isso um membro que entra na alma ou na aba fina de um pilar mostra apenas alguns milímetros, mesmo que entre muito.
- As peças são verificadas tal como são cortadas: os recortes e o corte de recuo de uma viga nas suas chapas de topo são tidos em conta. Os furos não.
