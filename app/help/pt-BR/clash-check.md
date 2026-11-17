---
title: Verificar interferências
summary: Encontre membros, chapas e sapatas que entram uns nos outros, deixando de fora as partes que uma ligação pretende juntar, e vá a cada interferência.
keywords: interferência, verificação de interferência, colisão, sobreposição, interseção, interferência rígida, coordenação, verificar modelo
from: 04d72d3b
---

Abra a guia {{ui:Interferências}} sob a vista e escolha {{ui:Verificar agora}}. O DetailCraft examina cada par de peças nas fases exibidas: aço contra aço, e aço contra uma sapata. A guia lista cada interferência, da mais profunda para a mais rasa, com:

- as duas peças, pela marca (ou marca da sapata) e perfil;
- **Sobreposição (mm)**: quanto um ponto de uma peça está dentro da outra, até a face mais próxima;
- **Próximo a**: a interseção de eixos e o nível em que está, ou suas coordenadas;
- {{ui:Mostrar}}: seleciona as duas peças e leva o local para o meio da vista.

O título da guia mostra quantas interferências a última verificação encontrou. A verificação não roda sozinha: depois que você altera o modelo, a lista avisa, e {{ui:Verificar agora}} a executa de novo.

## O que não é interferência

- Peças que apenas se tocam: uma chapa contra uma mesa, uma chapa de base sobre a sapata, dois membros de ponta a ponta. A **Tolerância (mm)** define quanto duas peças podem se entrar antes de contar (1 mm para começar; até 50).
- Peças que uma ligação une: uma chapa de topo com sua viga e com a mesa do pilar onde é parafusada, a viga e o pilar daquela junta, uma chapa de base com seu pilar, as chapas de uma emenda com as duas partes, um contraventamento com sua chapa de ligação (a fenda de um tubo não é cortada no modelo). A ligação pretende que elas se encontrem.
- O dente de cisalhamento de uma chapa de base na sapata sob ela (ele fica em uma cavidade de graute).
- Parafusos e chumbadores (eles passam por furos) e armadura.
- Peças em fases ocultas. Veja [Fases](topic:phases).

Um contraventamento ou viga que entra em um pilar sem ligação entre eles **é** uma interferência: essa junta ainda precisa de uma ligação. O contraventamento do quadro de exemplo mostra isso: ele não tem chapa de ligação. Selecione-o e escolha {{ui:Chapa de ligação}} ([Chapas de ligação de contraventamentos](topic:brace-gussets)) e as interferências dele desaparecem.

## Bom saber

- A sobreposição mede a profundidade dentro do material, então um membro que entra na alma fina ou na mesa de um pilar mostra apenas alguns milímetros, mesmo quando entra bastante.
- As peças são verificadas como são cortadas: recortes e o corte de uma viga em suas chapas de topo são levados em conta. Furos não.
