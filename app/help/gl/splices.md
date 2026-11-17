---
title: Empalmes
summary: Une dúas pezas dunha viga ou dun piar de extremo a extremo con placas de cobertura atornilladas nas ás e na alma.
keywords: empalme, empalme de viga, empalme de piar, placa de cobertura, placa de empalme, placa de ala, placa de alma, empalme atornillado, xunta, elevación, unir
from: 97d141c2
---

Un empalme atornillado une dúas pezas dun mesmo extremo de perfil en I de extremo a extremo: unha placa de cobertura por fóra de cada ala e unha placa a cada lado da alma, atornilladas a través das dúas pezas. DetailCraft recorta as pezas ata o oco, coloca as catro placas, fura as placas e as dúas pezas, engade os parafusos e avisa sobre as distancias ao bordo, o espazamento e o axuste.

## Onde funciona

- Dúas vigas, ou dous tramos de piar, do **mesmo perfil en I**, que se atopan **de extremo a extremo e en liña**: os extremos a non máis de 50 mm, as pezas paralelas e nunha mesma liña (con 1 mm de tolerancia). Calquera peza pode estar debuxada en calquera sentido.
- Funcionan as pezas horizontais, inclinadas e verticais.
- Rexéitanse dúas pezas de distinta altura ou ancho de ala, así como canles, cantoneiras e tubos.

## Engadir empalmes

1. Debuxe as dúas pezas de forma que se atopen de extremo a extremo. Para dividir un elemento xa debuxado, debúxeo de novo como dúas pezas.
2. Seleccione unha (ou as dúas) e escolla {{ui:Empalme}} no menú {{ui:Máis}} do grupo {{ui:Unir}}.
3. Cada unión libre das pezas seleccionadas con outra peza do mesmo perfil recibe un empalme. A barra de estado indica cantos.

Seleccione o empalme (prema unha das súas placas) para cambiar os seus axustes no panel dereito. {{ui:Aplicar a similares (n)}} copia o empalme a cada outra unión libre entre pezas do mesmo perfil.

## Axustes (mm)

| Axuste | Predeterminado | Función |
|---|---|---|
| Separación entre os extremos | 10 | Cada peza se recorta a metade dela |
| Diámetro do parafuso, furo, calidade, marxe de lonxitude | 20, 22, A325, 30 | Igual que nas placas de extremo |
| Espesor da placa de ala | 12 | A placa ten o mesmo ancho que a ala |
| Filas de parafusos na ala (cada lado) | 3 | Filas a través da ala a cada lado da unión |
| Paso dos parafusos na ala | 75 | Ao longo da peza |
| Calibre dos parafusos na ala | 0 | Entre as dúas liñas de parafusos; 0 = ancho da ala menos 80 |
| Distancia ao extremo na ala | 40 | Do extremo da peza ao primeiro parafuso, e do último parafuso ao extremo da placa |
| Espesor da placa de alma | 8 | Unha a cada lado da alma |
| Filas de parafusos na alma | 3 | Pola alma, centradas |
| Columnas de parafusos na alma (cada lado) | 2 | Ao longo da peza a cada lado da unión |
| Paso dos parafusos na alma, pola alma / ao longo da peza | 75, 75 | |
| Distancia ao extremo na alma | 40 | Igual que nas alas |
| Altura da placa de alma | 0 | 0 = a alma libre entre os arredondamentos, menos 10 arriba e abaixo |
| Material da placa | A36 | Texto |

Os comprimentos das placas dependen dos parafusos: placa de ala = separación + 2 × (2 × distancia ao extremo + (filas − 1) × paso); as placas de alma igual, coas súas columnas. Cos valores predeterminados, as placas de ala miden 470.

## Cousas que convén saber

- As placas pertencen á **primeira peza debuxada** das dúas (nas súas propiedades figura como primeira peza): aparecen no seu debuxo de conxunto e saen con ela, atornilladas e non soldadas. O debuxo de conxunto da segunda peza mostra só os seus furos.
- Os parafusos das alas suxeitan a ala e a súa placa; os da alma suxeitan a alma e as dúas placas de alma. A lonxitude dos parafusos aparece por separado nas propiedades.
- Os avisos usan os mínimos de EN 1993-1-8 das demais unións (distancia ao extremo e ao bordo 1,2 × furo, paso 2,2 × furo ao longo e 2,4 × furo a través), ademais dunha placa de alma máis profunda que a alma libre e de parafusos das alas demasiado preto do arredondamento da alma.
- DetailCraft non dimensiona o empalme (sen comprobación de resistencia) e non fai placas de recheo para pezas de distinto espesor.
- Copiar as dúas pezas copia o seu empalme; eliminar calquera das pezas elimina o empalme.
