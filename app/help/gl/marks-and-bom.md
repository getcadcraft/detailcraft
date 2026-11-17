---
title: Comprobar as marcas e a lista de materiais
summary: Ler as marcas de peza e de conxunto que DetailCraft dá a cada peza, comprobar a lista de materiais e descargala como CSV.
keywords: marcas, numeración, marca da peza, marca de conxunto, marca de pezas, bom, lista de materiais, pesos, lista de parafusos, csv
from: caa2ee80
---

DetailCraft marca o modelo por si mesmo. Non hai ningún comando de numeración nin nada que executar: despois de cada cambio calcula que pezas son o mesmo anaco de aceiro e lles dá unha marca.

## Onde se ven as marcas

- A lista {{ui:Marcas de peza}} do panel {{ui:Modelo}}: cada marca co seu perfil, lonxitude e cantidade. Prema nunha para seleccionar a primeira peza con esa marca.
- O panel {{ui:Propiedades}} dunha barra seleccionada (e a lista **Marcas de peza** do panel esquerdo): {{ui:Marca da peza}} e {{ui:Conxunto}}. O título do panel tamén leva a marca, por exemplo "Viga b1".
- A pestana {{ui:Lista de materiais}}, o CSV, os nomes dos ficheiros NC, os debuxos de taller e a exportación IFC (como etiqueta de cada elemento).

## Como se marcan as pezas

- **Marcas de peza:** c para piares, b para vigas, br para riostras, st para zancas de escaleira, p para placas (incluídas as placas de extremo e as placas base). Logo un número: c1, c2, b1, p1 … Cando as pezas están en máis dunha fase, vai diante un número de fase, por exemplo 2-b1.
- **Marcas de conxunto:** C, B, BR ou P. Un conxunto é un elemento principal e as placas soldadas a el, como unha viga coas súas dúas placas de extremo, ou un piar coa súa placa base.
- Dúas pezas comparten marca cando teñen o mesmo perfil, material e lonxitude de corte, e os mesmos furos e recortes, todo dentro de 1 mm, aínda que unha estea xirada de extremo a extremo ou boca abaixo respecto da outra.
- A numeración vai primeiro cos piares, despois as vigas, riostras e placas; dentro de cada grupo, por nome de perfil, a máis longa primeiro.

As regras completas, incluídos os xiros que contan para perfís en U e cantoneiras: [Regras de marcado](topic:mark-rules).

:::warning
As marcas calcúlanse de novo despois de cada cambio, así que poden renumerarse. Engadir unha peza, cambiar un perfil ou engadir un furo pode pasar b3 a b4. Considere as marcas como definitivas só cando o modelo estea acabado, e faga a lista de materiais, os ficheiros NC e os debuxos de taller do mesmo modelo gardado.
:::

## Ler a lista de materiais

Abra a pestana {{ui:Lista de materiais}} na parte inferior. Ten tres táboas.

**Pezas**, co peso total do aceiro no título:

| Columna | Significado |
|---|---|
| Marca da peza | Prema para seleccionar a primeira peza con esta marca |
| Tipo | viga, piar, riostra, zanca ou placa |
| Perfil | Por exemplo W16x26 ou PL20x180 |
| Material | A calidade que definiu |
| Lonxitude (mm) | Lonxitude de corte, despois das conexións |
| Cantidade | Cantas hai |
| Peso unitario (kg) | Masa do perfil por metro × lonxitude |
| Peso total (kg) | Peso unitario × cantidade |

A última fila dá a cantidade e o peso totais.

**Conxuntos:** cada marca de conxunto, a súa peza principal, todas as súas pezas (por exemplo "b1 + p1 + p1"), cantidade, peso unitario e peso total.

**Parafusos e varillas de anclaxe:** agrupados por tipo, diámetro, lonxitude e calidade, con cantidade.

:::note
Os pesos son brutos: non se descontan furos nin recortes. Parafusos, porcas, arandelas e soldaduras non entran no peso do aceiro.
:::

## Descargala

Escolla {{ui:Descargar CSV}} na pestana, ou {{ui:BOM}} no grupo {{ui:Saída}}. O ficheiro `<name> BOM.csv` contén as tres táboas unha tras outra, cada unha baixo o seu título, con unha liña en branco entre elas. Ábrese en calquera programa de follas de cálculo.

## Comprobar antes de enviar

1. Abra a pestana {{ui:Problemas}} e resolva cada liña. Unha conexión que non se puido construír non engade placa, furos nin parafusos, así que a lista de materiais quedaría incompleta.
2. Busque marcas que non esperaba. Dúas vigas que cre iguais pero con marcas distintas adoitan diferir nun furo, un recorte ou unha lonxitude de corte; seleccione cada unha e compárea.
3. Garde o modelo e faga todas as exportacións desde ese estado gardado.
