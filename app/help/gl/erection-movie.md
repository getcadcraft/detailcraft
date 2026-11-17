---
title: Plan de montaxe e vídeo
summary: Introduza unha grúa e a súa táboa de cargas, vexa cada icamento comprobado contra a táboa por orde de fase, e garde un vídeo de montaxe que se reproduce sen conexión en calquera teléfono.
keywords: montaxe, grúa, icamento, táboa de cargas, radio, capacidade, aparellaxe, secuencia, vídeo, animación, teléfono, sen conexión, plan de icamento
from: fa7b0133
---

A pestana {{ui:Erection}} converte o modelo nunha orde de montaxe e comproba cada icamento contra unha grúa que vostede describe. Planifica a partir de números que escribe. Non é un plan de icamento: iso fano o aparelleador e o operador da grúa.

## Describir a grúa

Escolla {{ui:Add a crane}} e complete:

- **Centro X e Y da grúa:** onde está a grúa, en milímetros.
- **Gancho máis alto:** o máximo que pode subir o gancho, en milímetros. 0 significa que non se comproba ningún límite.
- **Bloque do gancho e aparellaxe non incluídos na táboa:** quilogramos que se restan da táboa antes de engadir unha carga, cando a súa táboa non o fai xa.
- **Táboa de cargas:** unha fila por liña, radio en metros e despois a capacidade en quilogramos. Copie as filas da táboa da propia grúa.

A táboa lese como se le unha táboa de cargas: a capacidade indicada para un radio mantense ata ese radio. Unha carga cun radio entre dúas filas recibe a capacidade da fila **máis afastada**, nunca un valor intermedio. Dentro da primeira fila, mantense a capacidade da primeira fila. Máis alá da última fila, a grúa non pode icar nada. O radio que conta para un icamento é o maior entre o radio de recollida e o radio de colocación.

Unha segunda grúa engádese do mesmo modo. Cada icamento vai á primeira grúa que o pode levar dentro da súa marxe.

## Que fai o plan

- Un icamento por conxunto: unha viga coas súas placas de extremo, un piar coa súa placa base, unha escaleira.
- A orde segue primeiro as fases, e despois nivel por nivel: piares, as vigas que levan, contraventos, placas, escaleiras. Unha peza nunca se iza antes do que a sostén.
- Cada icamento mostra o seu peso (o peso bruto do modelo, máis {{ui:Rigging added to each weight}}), o seu radio, a parte da táboa que usa e o minuto no que comeza.
- {{ui:Most of the chart a lift may use}} é a súa marxe de seguridade. Un icamento por riba dela márcase **Over your margin**; por riba da táboa, **Over the chart**; máis aló do último radio da táboa, **Past the chart**; e unha peza máis alta que o gancho, **Hook too low**.

Os buratos e recortes non se descontan dos pesos, e os parafusos quedan cubertos pola porcentaxe de aparellaxe.

## Problemas

Cada icamento que pasa da marxe, está fóra da táboa, é demasiado alto ou está previsto antes do que o sostén aparece no panel {{ui:Problems}}. Unha viga sen conexión que a sostén márcase como que necesita apoio temporal.

## Gardar o vídeo

{{ui:Save movie}} escribe un ficheiro HTML. Ábrao en calquera navegador, tamén nun teléfono, sen rede e sen conta: reproducir e pausar, arrastrar a barra a calquera minuto, xirar o modelo co dedo, pellizcar para ampliar. A lenda indica cada icamento, o seu peso, radio e parte da táboa. O modelo debúxase como caixas simples: mostra a orde e os icamentos, non os perfís reais.

O mesmo cadro gárdase como CSV co botón {{ui:CSV}}. A grúa e a táboa gárdanse no ficheiro do modelo, e cada cambio é un paso de desfacer.
