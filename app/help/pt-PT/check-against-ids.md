---
title: Verificar a exportação IFC contra o IDS de um cliente
summary: Carregue o ficheiro .ids que lhe foi entregue e veja em Problemas cada peça exportada que não cumpre, antes de enviar o IFC.
keywords: ids, especificação de entrega de informação, buildingsmart, requisitos, entrega, verificação, validação, qa, exportação ifc, propriedade, material, aquisição
from: 50d0f785
---

## O que vai fazer

Um IDS (Information Delivery Specification, uma norma da buildingSMART) é a lista do que um IFC tem de conter. O DetailCraft verifica o IFC que exportaria (o mesmo ficheiro que {{ui:IFC}} escreve) contra o IDS que lhe foi entregue, e lista cada peça que fica aquém.

## Passos

1. Abra ou desenhe o seu modelo.
2. Clique em {{ui:Verificar com IDS…}} no grupo {{ui:Saída}} da barra de ferramentas.
3. Clique em {{ui:Carregar um ficheiro .ids…}} e escolha o ficheiro. Nada é enviado.
4. Leia o resultado: cada especificação com {{ui:Cumpre}} ou {{ui:Falha}} e quantos elementos abrange.
5. Abra {{ui:Problemas}} ({{key:Ctrl+Shift+M}}) e clique numa falha: o elemento, a ligação, a escada ou a sapata de onde vem fica selecionado e a vista aproxima-se dele.

## O que deve ver

- Um aviso por cada elemento exportado e cada requisito que não cumpre, com o nome da especificação, o que o IDS pede e o que a exportação tem.
- O relatório de verificação (em Problemas) começa pelo IDS: o seu título, versão, autor e a contagem de cada especificação.

## Bom saber

- O IDS fica guardado no ficheiro do modelo, por isso é verificado de novo ao abrir o modelo. Carregá-lo ou esquecê-lo é um passo que pode anular.
- Cada alteração é verificada de novo um pouco depois; num modelo grande, a verificação espera um pouco mais entre execuções.
- Os GlobalIds da exportação vêm do nome do modelo e dos números de peça dentro do DetailCraft, por isso mantêm-se de uma verificação para a seguinte. Mudar o nome do modelo dá a cada elemento novos GlobalIds.
- Os números são comparados em unidades SI (a exportação está em mm; os comprimentos são convertidos primeiro para metros).

- Os padrões no IDS são lidos como o valor completo. Um `^` no início e um `$` no fim são também tomados como "o valor completo", como a maioria dos ficheiros IDS os entende.

## Seguinte

- [Exportar IFC](topic:ifc-export)
