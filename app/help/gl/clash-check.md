---
title: Comprobar interferencias
summary: Atope membros, placas e zapatas que se meten uns nos outros, deixando fóra as pezas que unha conexión pretende que se toquen, e vaia a cada interferencia.
keywords: interferencia, comprobación de interferencias, colisión, solapamento, sobreposición, intersección, interferencia dura, coordinación, comprobar modelo
from: 04d72d3b
---

Abra a lapela {{ui:Interferencias}} debaixo da vista e escolla {{ui:Comprobar agora}}. DetailCraft mira cada par de pezas nas fases mostradas: aceiro contra aceiro, e aceiro contra unha zapata. A lapela lista cada interferencia, a máis profunda primeiro, con:

- as dúas pezas, pola marca da peza (ou marca da zapata) e o perfil;
- **Solapamento (mm)**: canto un punto dunha peza está dentro da outra, ata a cara máis próxima;
- **Preto**: a intersección de cuadrícula e o nivel onde está, ou as súas coordenadas;
- {{ui:Mostrar}}: selecciona as dúas pezas e leva o lugar ao centro da vista.

O título da lapela indica cantas interferencias atopou a última comprobación. A comprobación non se executa soa: despois de cambiar o modelo a lista di iso, e {{ui:Comprobar agora}} volve executala.

## O que non é unha interferencia

- Pezas que só se tocan: unha placa contra unha aba, unha placa base sobre a súa zapata, dous membros cara a cara. **Tolerancia (mm)** fixa canto poden meterse dúas pezas unha na outra antes de contar (1 mm por defecto; ata 50).
- Pezas que unha conexión une: unha placa de extremo coa súa viga e coa aba do piar á que está atornillada, a viga e o piar daquela unión, unha placa base co seu piar, as placas dun empalme con ambas pezas, unha riostra coa súa cartela (a ranura dun tubo non se corta no modelo). A conexión quere que se toquen.
- O tacón de cizalla dunha placa base na zapata que hai baixo ela (vai nun alvéolo de lechada).
- Parafusos e varillas de ancoraxe (atravesan furos) e armadura.
- Pezas en fases ocultas. Vexa [Fases](topic:phases).

Unha riostra ou viga que entra nun piar sen unión entre eles **é** unha interferencia: esa unión aínda precisa unha conexión. A riostra do modelo de exemplo mostra isto: non ten cartela. Selecciónea e escolla {{ui:Cartela}} ([Cartelas de riostras](topic:brace-gussets)) e as súas interferencias desaparecen.

## Bo saber

- O solapamento mide a profundidade dentro do material, así que unha viga metida na alma ou na aba fina dun piar mostra só uns poucos milímetros, aínda que entre moito.
- As pezas compróbanse tal como están cortadas: teñense en conta os recortes e o recorte da viga nas súas placas de extremo. Os furos non se teñen en conta.
