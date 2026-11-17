---
title: Exportar IFC para coordenação
summary: Grave um arquivo IFC4 do modelo inteiro, com aço, parafusos, sapatas e armadura, para compartilhar com arquitetos, engenheiros e outros softwares.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, furos, parafusos, parafusos avulsos, aberturas, fixadores, coordenação, troca de modelos, step, openbim, interferência, visualizador
from: cfcb0cd6
---

A exportação IFC grava o modelo inteiro como um único arquivo IFC4 que softwares BIM e visualizadores IFC podem abrir.

## Exportar

1. Escolha {{ui:IFC}} no grupo {{ui:Saída}}.
2. O navegador baixa `<name>.ifc`. A barra de status informa o que foi incluído, por exemplo "IFC4 exportado: 25 peças, 88 fixadores, 7 sapatas, 132 barras."

Se o modelo não tiver peças, sapatas nem barras, a barra de status diz "Nada para exportar ainda."

## O que há no arquivo

| No DetailCraft | No arquivo IFC |
|---|---|
| Cada nível | Um pavimento (IfcBuildingStorey), sob um projeto, um terreno e uma edificação |
| Grades | Um IfcGrid com seus eixos e rótulos |
| Pilares, vigas, contraventamentos | IfcColumn, IfcBeam, IfcMember (contraventamento), cada um uma extrusão de um perfil padrão com suas dimensões reais |
| Chapas, chapas de extremidade, chapas de base | IfcPlate |
| Furos e rebaixos | Aberturas (IfcOpeningElement) cortadas da peça |
| Uma barra e suas chapas soldadas | Uma montagem (IfcElementAssembly) com a marca de montagem |
| Parafusos e chumbadores | IfcMechanicalFastener com diâmetro e comprimento |
| Sapatas | IfcFooting (sapata isolada), com o texto do concreto como material |
| Cada barra | IfcReinforcingBar com sua posição da barra, diâmetro, área e comprimento, varrido ao longo do eixo real, com arcos reais nas dobras |

A etiqueta de cada peça é a sua marca da peça. Cada elemento também traz um conjunto de propriedades "DetailCraft" com suas marcas, perfil e peso. Cada elemento fica no pavimento mais alto em ou abaixo do seu ponto mais baixo. Os materiais são agrupados por classe.

## Identificadores estáveis para novas exportações

O identificador IFC (GlobalId) de cada elemento é calculado a partir do nome do modelo e do id do próprio elemento no modelo. Exportando o mesmo modelo duas vezes, os ids coincidem, e assim o software que compara versões consegue identificar o que mudou.

:::warning
Renomear o modelo altera todos os ids. Mantenha o mesmo nome de modelo entre as emissões de um projeto.
:::

## Verifique

Os arquivos IFC do DetailCraft são lidos de volta por um leitor IFC independente, em sua suíte de testes. Os programas diferem na forma de ler IFC; por isso, abra o arquivo no software que sua equipe usa antes de confiar nele. O aplicativo BimCraft do CadCraft também abre arquivos IFC.

## Ainda não disponível

- Importar ligações, sapatas e armadura de um arquivo IFC. {{ui:Importar IFC}} traz vigas, pilares, barras, chapas, grades, níveis, furos, rebaixos e parafusos, e lista o que deixou de fora.
- Dados analíticos ou de análise estrutural.
- Qualquer coisa diferente da vista de referência IFC4.

## Importação

{{ui:Importar IFC}} no grupo {{ui:Arquivo}} (ou soltando um arquivo `.ifc` sobre a área de desenho) cria um novo modelo a partir de um arquivo IFC2X3 ou IFC4:

- **Vigas, pilares, barras (contraventamentos) e chapas** cujo corpo é um único perfil extrudado que o DetailCraft conhece, associado ao catálogo ou mantido como perfil personalizado; **grades** e **níveis** a partir da grade e dos pavimentos do arquivo.
- **Furos:** cada abertura redonda (IfcOpeningElement vazando uma peça que entrou) perpendicular a uma das faces da peça: alma ou mesas de um perfil I ou U, paredes de um tubo, uma chapa, as abas de uma cantoneira. Um furo que atravessa as duas paredes de um tubo entra uma única vez.
- **Rebaixos:** uma abertura retangular que ocupa toda a largura de um perfil I ou U a partir de uma extremidade, para baixo a partir do topo ou para cima a partir da base.
- **Parafusos:** cada IfcMechanicalFastener ou IfcFastener, com seu diâmetro, comprimento, classe e tipo (parafuso ou chumbador), como um **parafuso avulso**. Os parafusos avulsos aparecem na área de desenho, na lista de materiais e na exportação IFC, e permanecem onde estão quando você move barras. O painel {{ui:Propriedades}}, sem nada selecionado, os conta e tem {{ui:Remover parafusos avulsos}} para quando você adicionar ligações.

O relatório lista todo o restante por classe, com o motivo de ter ficado de fora: paredes e lajes, sapatas e barras, furos alongados, furos em tubos redondos, ligações (um arquivo IFC traz as suas chapas e parafusos, não a regra que as criou).
