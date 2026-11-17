---
title: Fases
summary: Dividir o modelo en fases (secuencias de montaxe ou entregas), mostrar ou ocultar cada fase, colocar pezas nunha fase e numerar as marcas por fase.
keywords: fase, fases, xestor de fases, secuencia de montaxe, entrega, lote, secuencia, ocultar fase, mostrar fase, filtro, numeración, prefixo de marca, por fase
from: bae506f5
---

Unha fase é un grupo de pezas que se fabrican, entregan ou montan xuntas: unha secuencia de montaxe, unha entrega, un lote. Cada peza e cada zapata está nunha fase. Unha conexión está na fase da súa peza principal: a viga dunha placa de testa, o pilar dunha placa de base. Un modelo novo ten unha fase.

## O panel Fases

A sección {{ui:Fases}} do panel {{ui:Modelo}} lista todas as fases:

- a caixa de selección mostra ou oculta a fase na vista;
- o número, e un nome que pode escribir (baleiro = "Fase 2" e así sucesivamente);
- cantas pezas contén;
- o botón {{ui:×}} elimina unha fase. Só se pode quitar unha fase baleira: antes pase as súas pezas a outra fase.

{{ui:Engadir fase}} engade o seguinte número e fai dela a fase na que van entrar as pezas novas.

## Colocar pezas nunha fase

- **Pezas novas:** {{ui:As pezas novas van en}} escolle a fase na que van todas as pezas estruturais e zapatas que coloque desde agora.
- **Unha peza:** seleccione a e cambie {{ui:Fase}} no panel {{ui:Propiedades}}.
- **Moitas pezas:** seleccione as (unha xanela, {{key:Shift}}+clic, {{key:Mod+A}}) e cambie {{ui:Fase}} na parte superior do panel {{ui:Propiedades}}. Mostra **Varía** cando están en fases distintas. Cada cambio é un paso de desfacer.

As copias conservan a fase da peza da que se copiaron, tamén cando se pegan noutro modelo (a fase engádese alí).

## Mostrar e ocultar fases

Unha fase oculta non se debuxa na vista, non se pode premer nin apañar cunha xanela de selección, e {{key:Mod+A}} non a inclúe. Segue na lista de materiais, nos informes, nos debuxos e en todas as exportacións. Ocultar só afecta á vista: non se garda e non ten desfacer.

## Marcas por fase

Con **Numerar as marcas por fase** activado (está activado por defecto) e pezas en máis dunha fase, cada fase numérase por separado e as súas marcas comezan co número da fase: marcas de peza 1-b1, 2-b1, marcas de conxunto 2-B1, zapatas 2-F1. Dúas vigas idénticas en fases distintas terán entón marcas diferentes, porque se fabrican e envían en momentos distintos. Cando se usa unha soa fase, as marcas non levan prefixo. Desactívese para numerar todo o modelo como un só, de xeito que as pezas idénticas compartan marca sexa cal sexa a súa fase.

A fase escríbese na exportación IFC (conxunto de propiedades DetailCraft, Phase).

:::note
Os modelos con fases gárdanse no formato de ficheiro 2 de DetailCraft. A versión 0.3 de DetailCraft non os pode abrir; esta versión abre os ficheiros anteriores, con todas as pezas na fase 1.
:::
