---
title: Lista de cortes
summary: Organice as vigas, piares, contraventos e zancas en barras comerciais con espesor de corte, e vexa cantas barras comprar e o desperdicio.
keywords: lista de cortes, aniñado, lonxitude comercial, barra, espesor de corte, sierra, retallo, sobrante, desperdicio, combinación, compra, varios
from: 81d06ce5
---

A pestana {{ui:Cut list}}, debaixo da vista, calcula como cortar as pezas lineais do modelo a partir de barras comerciais: cantas barras de cada lonxitude mercar para cada perfil e material, o que vai en cada barra, e o desperdicio.

## Definir o material comercial

Na parte superior da pestana:

- **Lonxitudes comerciais (mm):** as lonxitudes que pode mercar, separadas por espazos, por exemplo `6000 12000`, ou barras de 20 ft e 40 ft como `6096 12192`. Ata oito.
- **Espesor de corte (mm):** o que ocupa cada corte (3 para empezar).
- **Recorte do extremo (mm):** cortar o extremo de cada barra antes da primeira peza (0 para empezar).
- **Conservar retallos desde (mm):** un retallo de polo menos esta lonxitude volve ao almacén; os máis curtos son desperdicio (500 para empezar).

Estes valores gárdanse neste navegador, como os demais [axustes de configuración](topic:settings).

## Como se aniña

- Cada viga, piar, contravento e zanca de escaleira, por marca de peza e cantidade; as placas córtanse de chapa e non se aniñan aquí.
- Cada perfil e material por separado.
- As pezas máis longas primeiro, cada unha na primeira barra onde cabe; unha barra nova comeza coa lonxitude comercial máis longa. Despois, cada barra compróbase como a lonxitude comercial máis curta que aínda admite os seus cortes.
- Cada corte ocupa o espesor (ningún despois dun corte que remata exactamente no extremo da barra); cada barra perde o recorte do extremo.
- Unha peza máis longa que todas as lonxitudes comerciais aparece listada en **Máis longa que calquera lonxitude comercial**, sen aniñar: empálmea (ver [Empalmes](topic:splices)) ou engada unha lonxitude comercial máis longa.

## Lela

- **Resumo:** por perfil e material, as pezas, as barras que mercar (por exemplo "2 × 12000, 1 × 6000"), os metros comprados e usados, e o desperdicio.
- **Barras e os seus cortes:** cada barra, a súa lonxitude comercial, os seus cortes como marca de peza e lonxitude, e o retallo, conservado ou desperdicio.

{{ui:Download CSV}} garda ambas táboas como `<nome> cut list.csv`.

DetailCraft non aniña as placas en follas, e non mestura perfís nin materiais nunha mesma barra.
