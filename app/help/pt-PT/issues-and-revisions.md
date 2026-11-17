---
title: Questões, revisões e registo de alterações dos desenhos
summary: Manter um único histórico de questões com o modelo do arquiteto: ler as questões, registar instruções de obra, desenhos de fabrico e modelos ligados contra uma questão, e consultar o registo de alterações dos desenhos.
keywords: questão, revisão, revisões, registo de alterações, registo de alterações dos desenhos, registo de desenhos, instrução de obra, desenho de fabrico, modelo ligado, concurso, construção, histórico de questões, desenhos de fabrico, fabrico
from: 4b9a1b7b
---

## O que vai fazer

Trabalhe a partir do mesmo histórico de questões que o resto da equipa. Veja que folhas foram emitidas em que revisão e registe o que acontece em obra contra a questão a que pertence.

## Passos

1. Abra **Questões e revisões**.
2. Escolha **Ler um histórico de questões** e selecione o ficheiro `.issues.json` guardado a partir do BimCraft ou de outra aplicação. As suas questões e registos são acrescentados aos seus. Nada é substituído.
3. Escolha **Adicionar um registo** para uma instrução de obra, um desenho de fabrico, um conjunto de anotações, um modelo ligado ou uma nota. Escolha a questão a que se refere e o respetivo estado. Um ficheiro que escolher é registado pelo nome, tamanho e SHA-256; o ficheiro fica onde está.
4. **Registo de alterações dos desenhos** mostra uma linha por cada folha e uma coluna por cada questão. Uma revisão entre parênteses foi emitida novamente sem alterações.
5. **Transferir o registo de alterações (CSV)** guarda as questões, a tabela das folhas e os registos. **Guardar o histórico de questões** escreve um ficheiro que as outras aplicações leem.

## Bom saber

- As folhas continuam a ser emitidas a partir de {{ui:Desenhos}}, folha a folha. Essas emissões aparecem aqui: as folhas emitidas na mesma data com a mesma nota são uma só questão.
- Os registos e as questões que lê são guardados no ficheiro do modelo. Cada alteração corresponde a um passo de {{ui:Anular}}.
- Ler o mesmo ficheiro duas vezes não acrescenta nada em duplicado. Quando duas cópias têm o mesmo registo, mantém-se a mais recente.
