---
title: Informe de material e peso por fase
summary: Lonxitudes de corte, cantidades, pesos e superficies de pintura para cada fase, con os seus parafusos e armadura, en táboa, CSV ou PDF.
keywords: informe, peso, tonelaxe, kg, pintura, superficie de pintura, área, recubrimento, lonxitude de corte, lista de materiais, fase, csv, pdf
from: 337d6d92
---

No grupo {{ui:Saída}}, abra {{ui:Máis}} e escolla {{ui:Informe de peso por fase}}, ou abra a lapela {{ui:Por fase}} debaixo da vista. Mostra:

- **Resumo por fase**: para cada fase, o número de pezas, o peso do aceiro, a superficie de pintura, os parafusos e as barras de anclaxe, e a armadura; logo os totais.
- **Unha táboa por fase**: cada marca de peza con o seu tipo, perfil, material, lonxitude de corte, cantidade, peso unitario, peso e superficie de pintura; logo os seus parafusos e barras de anclaxe.

{{ui:Descargar CSV}} garda as mesmas táboas nun único ficheiro CSV (`<name> weight report.csv`). {{ui:Descargar PDF}} fai un informe no tamaño de folla de [Configuración de DetailCraft](topic:settings#drawings), co resumo primeiro, cada fase despois, as táboas longas pasan á páxina seguinte e todas as páxinas van numeradas.

## Como se calculan as cifras

- **Os pesos son brutos**, como na lista de materiais: o peso do perfil por metro multiplicado pola lonxitude de corte. Non se restan os furos nin os recortes.
- **A superficie de pintura** é o exterior do perfil ao longo da lonxitude de corte: nun perfil en I, todas as caras das alas e da alma; nunha placa, as dúas caras e os bordos; nun tubo, só o exterior. Os extremos e os furos non se contan.
- **A armadura** é o peso das barras das cimentacións da fase, segundo a [lista de dobrado](topic:footings-and-rebar).
- As placas e os parafusos dunha unión contan na fase do seu elemento principal. Ver [Fases](topic:phases).

Con [marcas por fase](topic:phases#marks-per-phase) activado, cada fase ten as súas propias marcas (1-b1, 2-b1). Desactivado, unha marca pode aparecer en máis dunha fase: cada fase lista as pezas que ten.
