---
title: Verificar a exportação IFC contra o IDS de um cliente
summary: Carregue o arquivo .ids que você recebeu e veja em Problemas cada peça exportada que não atende a ele, antes de enviar o IFC.
keywords: ids, information delivery specification, buildingsmart, requisitos, entrega, verificação, validação, qa, exportação ifc, propriedade, material, compras
from: 50d0f785
---

## O que você vai fazer

Um IDS (Information Delivery Specification, um padrão do buildingSMART) é a lista do que um IFC deve conter. O DetailCraft verifica o IFC que exportaria (o mesmo arquivo que {{ui:IFC}} grava) contra o IDS que você recebeu, e lista cada peça que fica aquém.

## Passos

1. Abra ou desenhe seu modelo.
2. Clique em {{ui:Verificar com IDS…}} no grupo {{ui:Saída}} da barra de ferramentas.
3. Clique em {{ui:Carregar um arquivo .ids…}} e escolha o arquivo. Nada é enviado.
4. Leia o resultado: cada especificação com {{ui:Passa}} ou {{ui:Falha}} e quantos elementos ela se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) e clique em uma falha: o membro, a ligação, a escada ou a sapata de onde ela veio fica selecionado e a vista se aproxima dele.

## O que você deve ver

- Um aviso por elemento exportado e requisito que ele não atenda, com o nome da especificação, o que o IDS pede e o que a exportação tem.
- O relatório da verificação (em Problemas) começa pelo IDS: título, versão, autor e a contagem de cada especificação.

## Bom saber

- O IDS é salvo no arquivo do modelo, então é verificado de novo quando você abre o modelo. Carregar ou esquecer o IDS é um passo que pode ser desfeito.
- Cada alteração é verificada de novo logo depois; em um modelo grande, a verificação espera um pouco mais entre as execuções.
- Os GlobalIds da exportação vêm do nome do modelo e dos números das peças dentro do DetailCraft, então permanecem os mesmos de uma verificação para a outra. Renomear o modelo dá um novo GlobalId a cada elemento.
- Os números são comparados em unidades SI (a exportação está em milímetros; os comprimentos são convertidos para metros primeiro).

- Os padrões no IDS são lidos como o valor inteiro. Um `^` no início e um `$` no fim também são tomados como "o valor inteiro", como a maioria dos arquivos IDS os entende.

## Próximo

- [Exportar IFC](topic:ifc-export)
