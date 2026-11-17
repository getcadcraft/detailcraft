---
title: Exportar IFC para coordenação
summary: Escreva um ficheiro IFC4 de todo o modelo, aço, parafusos, sapatas e armaduras, para partilhar com arquitetos, engenheiros e outro software.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, furos, parafusos, parafusos soltos, aberturas, elementos de fixação, coordenação, troca de modelos, step, openbim, deteção de conflitos, visualizador
from: cfcb0cd6
---

A exportação IFC escreve todo o modelo num único ficheiro IFC4 que o software BIM e os visualizadores IFC podem abrir.

## Exportar

1. Escolha {{ui:IFC}} no grupo {{ui:Saída}}.
2. O navegador transfere `<name>.ifc`. A barra de estado indica o que foi incluído, por exemplo "IFC4 exportado: 25 peças, 88 elementos de fixação, 7 sapatas, 132 varões."

Se o modelo não tiver peças, sapatas nem varões, a barra de estado indica "Ainda não há nada para exportar."

## O que está no ficheiro

| No DetailCraft | No ficheiro IFC |
|---|---|
| Cada piso | Um piso do edifício (IfcBuildingStorey), sob um único projeto, terreno e edifício |
| Eixos | Um IfcGrid com os seus eixos e rótulos |
| Pilares, vigas, contraventamentos | IfcColumn, IfcBeam, IfcMember (contraventamento), cada um uma extrusão de uma forma de perfil normalizado com as suas dimensões reais |
| Chapas, chapas de topo, chapas de base | IfcPlate |
| Furos e recortes | Aberturas (IfcOpeningElement) cortadas à peça |
| Uma barra e as suas chapas soldadas | Uma montagem (IfcElementAssembly) marcada com a marca da montagem |
| Parafusos e chumbadouros | IfcMechanicalFastener, com diâmetro e comprimento |
| Sapatas | IfcFooting (sapata isolada), com o texto do betão como material |
| Cada varão | IfcReinforcingBar, com a sua marca, diâmetro, área e comprimento, varrido ao longo do seu eixo real, com arcos verdadeiros nas dobras |

A etiqueta de cada peça é a sua marca da peça. Cada elemento também tem um conjunto de propriedades "DetailCraft" com as suas marcas, perfil e peso. Cada elemento fica no piso mais alto que esteja à altura do seu ponto mais baixo ou abaixo dele. Os materiais são agrupados por classe.

## Identificadores estáveis para reexportações

O identificador IFC (GlobalId) de cada elemento é calculado a partir do nome do modelo e do identificador do próprio elemento no modelo. Se exportar o mesmo modelo duas vezes, os identificadores coincidem, para que o software que compara versões consiga saber o que mudou.

:::warning
Mudar o nome do modelo altera todos os identificadores. Mantenha o nome do modelo igual entre as emissões de um projeto.
:::

## Verificar o ficheiro

Os ficheiros IFC do DetailCraft são lidos de volta por um leitor IFC independente no seu conjunto de testes. Os programas diferem na forma como leem IFC, por isso abra o ficheiro no software que a sua equipa usa antes de confiar nele. A aplicação BimCraft do CadCraft também abre ficheiros IFC.

## Ainda não

- Importar de um ficheiro IFC ligações, sapatas e armaduras. {{ui:Importar IFC}} traz vigas, pilares, barras, chapas, eixos, pisos, furos, recortes e parafusos, e lista o que deixou de fora.
- Dados analíticos ou de análise estrutural.
- Qualquer coisa que não seja a vista de referência IFC4.

## Importar

{{ui:Importar IFC}} no grupo {{ui:Ficheiro}} (ou largando um ficheiro `.ifc` na vista) cria um novo modelo a partir de um ficheiro IFC2X3 ou IFC4:

- **Vigas, pilares, barras (contraventamentos) e chapas** cujo corpo seja uma só extrusão de um perfil conhecido pelo DetailCraft, associados ao catálogo ou mantidos como perfil personalizado; **eixos** e **pisos** a partir da grelha e dos pisos do ficheiro.
- **Furos:** cada abertura circular (IfcOpeningElement a furar uma peça importada), perpendicular a uma das faces da peça: a alma ou os banzos de um perfil em I ou em U, as paredes de um tubo, uma chapa, as abas de uma cantoneira. Um furo que atravessa as duas paredes de um tubo entra uma só vez.
- **Recortes:** uma abertura retangular que ocupa toda a largura de um perfil em I ou em U a partir de uma extremidade, para baixo a partir do topo ou para cima a partir da base.
- **Parafusos:** todos os IfcMechanicalFastener ou IfcFastener, com diâmetro, comprimento, classe e tipo (parafuso ou chumbadouro), como **parafuso solto**. Os parafusos soltos aparecem na vista, na lista de materiais e na exportação IFC, e mantêm-se onde estão quando move as barras. O painel {{ui:Propriedades}}, sem nada selecionado, conta-os e tem {{ui:Remover parafusos soltos}} para quando, em vez disso, adicionar ligações.

O relatório lista tudo o resto por classe, com o motivo de ter ficado de fora: paredes e lajes, sapatas e varões, furos ranhurados, furos em tubos redondos, ligações (um ficheiro IFC transporta as suas chapas e parafusos, não a regra que os criou).
