---
title: Relatório de materiais e pesos por fase
summary: Comprimentos de corte, quantidades, pesos e áreas de pintura de cada fase, com os seus parafusos e armaduras, em tabela, CSV ou PDF.
keywords: relatório, peso, tonelagem, kg, pintura, área de pintura, área de superfície, revestimento, comprimento de corte, lista de materiais, fase, lista de materiais BOM, csv, pdf
from: 337d6d92
---

No grupo {{ui:Saída}}, abra {{ui:Mais}} e escolha {{ui:Relatório de pesos por fase}}, ou abra o separador {{ui:Por fase}} debaixo da vista. Mostra:

- **Resumo por fase**: para cada fase, o número de peças, o peso do aço, a área de pintura, os parafusos e as barras de amarração, e as armaduras; depois os totais.
- **Uma tabela por fase**: cada marca de peça com o seu tipo, perfil, material, comprimento de corte, quantidade, peso unitário, peso e área de pintura; depois os seus parafusos e barras de amarração.

{{ui:Transferir CSV}} guarda as mesmas tabelas num único ficheiro CSV (`<name> weight report.csv`). {{ui:Transferir PDF}} cria um relatório no formato de folha definido nas [definições do DetailCraft](topic:settings#drawings), com o resumo primeiro, cada fase a seguir, as tabelas longas continuadas na página seguinte e todas as páginas numeradas.

## Como se calculam os valores

- **Os pesos são brutos**, como na lista de materiais: o peso por metro do perfil vezes o comprimento de corte. Furos e recortes não são descontados.
- **A área de pintura** é o exterior da secção ao longo do comprimento de corte: num perfil em I, todas as faces dos banzos e da alma; numa chapa, as duas faces e as arestas; num tubo, apenas o exterior. As extremidades e os furos não são contados.
- **As armaduras** são o peso dos varões das sapatas da fase, a partir do [mapa de dobragem](topic:footings-and-rebar).
- As chapas e os parafusos de uma ligação contam na fase da sua barra principal. Ver [Fases](topic:phases).

Com [marcas por fase](topic:phases#marks-per-phase) ativadas, cada fase tem as suas próprias marcas (1-b1, 2-b1). Desativadas, uma marca pode aparecer em mais do que uma fase: cada fase lista as peças que tem.
