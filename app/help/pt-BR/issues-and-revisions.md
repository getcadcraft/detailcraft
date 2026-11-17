---
title: Emissões, revisões e histórico de revisões do desenho
summary: Mantenha um único histórico de emissões com o modelo do arquiteto: leia as emissões, registre instruções de obra, desenhos de fabricação e modelos vinculados contra uma emissão e leia o histórico de revisões do desenho.
keywords: emissão, revisão, revisões, histórico de revisões, histórico de revisões do desenho, registro de desenhos, instrução de obra, desenho de fabricação, modelo vinculado, licitação, construção, histórico de emissões, desenhos de fabricação, fabricação
from: 4b9a1b7b
---

## O que você vai fazer

Trabalhe com o mesmo histórico de emissões da equipe. Veja quais folhas foram emitidas em qual revisão, e registre o que acontece na obra contra a emissão a que pertence.

## Passos

1. Abra **Emissões e revisões**.
2. Escolha **Ler um histórico de emissões** e selecione o arquivo `.issues.json` salvo no BimCraft ou em outro app. Suas emissões e registros são adicionados aos seus. Nada é substituído.
3. Escolha **Adicionar um registro** para uma instrução de obra, um desenho de fabricação, um conjunto de marcações, um modelo vinculado ou uma nota. Selecione a emissão a que ele se refere e seu status. Um arquivo que você escolher é registrado pelo nome, tamanho e SHA-256; o arquivo continua onde está.
4. **Histórico de revisões do desenho** mostra uma linha para cada folha e uma coluna para cada emissão. Uma revisão entre colchetes foi emitida novamente sem alterações.
5. **Baixar o histórico de revisões (CSV)** salva as emissões, a tabela de folhas e os registros. **Salvar o histórico de emissões** grava um arquivo que os outros apps leem.

## Bom saber

- As folhas ainda são emitidas a partir de {{ui:Desenhos}}, folha por folha. Essas emissões aparecem aqui: as folhas emitidas na mesma data com a mesma nota formam uma só emissão.
- Os registros e as emissões que você lê são salvos no arquivo do modelo. Cada alteração é um passo de {{key:Mod+Z}}.
- Ler o mesmo arquivo duas vezes não adiciona nada em dobro. Quando duas cópias têm o mesmo registro, a mais recente é mantida.
