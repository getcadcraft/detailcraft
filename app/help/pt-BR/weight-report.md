---
title: Relatório de materiais e pesos por fase
summary: Comprimentos de corte, quantidades, pesos e áreas de pintura de cada fase, com seus parafusos e armaduras, em tabela, CSV ou PDF.
keywords: relatório, peso, tonelagem, kg, pintura, área de pintura, área de superfície, revestimento, comprimento de corte, lista de materiais, fase, csv, pdf
from: 337d6d92
---

No grupo {{ui:Saída}}, abra {{ui:Mais}} e escolha {{ui:Relatório de pesos por fase}}, ou abra a aba {{ui:Por fase}} sob a vista. Ele mostra:

- **Resumo por fase**: para cada fase, o número de peças, o peso do aço, a área de pintura, os parafusos e as hastes de ancoragem e as armaduras; depois os totais.
- **Uma tabela por fase**: cada marca de peça nela com tipo, perfil, material, comprimento de corte, quantidade, peso unitário, peso e área de pintura; depois os parafusos e as hastes de ancoragem dela.

{{ui:Baixar CSV}} salva as mesmas tabelas em um único arquivo CSV (`<name> weight report.csv`). {{ui:Baixar PDF}} gera um relatório no tamanho de folha definido em [Configurações do DetailCraft](topic:settings#drawings), com o resumo primeiro, cada fase depois, tabelas longas continuadas na página seguinte e todas as páginas numeradas.

## Como os números são calculados

- **Pesos** são brutos, como na lista de materiais: o peso por metro do perfil vezes o comprimento de corte. Furos e recortes não são descontados.
- **Área de pintura** é a parte externa da seção ao longo do comprimento de corte: para um perfil I, todas as faces das mesas e da alma; para uma chapa, as duas faces e as bordas; para um tubo, somente a parte externa. As extremidades e os furos não são contados.
- **Armaduras** são o peso das barras das sapatas da fase, a partir da [tabela de dobramento](topic:footings-and-rebar).
- As chapas e os parafusos de uma ligação contam na fase da peça principal dela. Veja [Fases](topic:phases).

Com [marcas por fase](topic:phases#marks-per-phase) ativado, cada fase tem as próprias marcas (1-b1, 2-b1). Com ele desativado, uma marca pode aparecer em mais de uma fase: cada fase lista as peças que tem.
