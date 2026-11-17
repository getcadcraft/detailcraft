---
title: Enviar os ficheiros NC ao taller
summary: Exportar os ficheiros NC DSTV de cada marca de peza (perfís en I, canles, cantoneiras, HSS, placas), xuntados nun zip, e revisalos antes de que cheguen a unha máquina.
keywords: nc, nc1, dstv, cnc, máquina, liña de vigas, liña de perforación, corte de placas, exportar, fabricación, zip
from: 598b6091
---

DetailCraft escribe un ficheiro NC DSTV (`.nc1`) por cada marca de peza, para perfís en I, canles, cantoneiras, HSS rectangulares e redondos, e placas, e xúntaos nun zip. As liñas de vigas e as máquinas de placas len estes ficheiros para serrar, perforar e cortar.

## Exportar

1. Limpe primeiro a lapela {{ui:Problemas}}: unha conexión que non se puido construír non engade ningún burato.
2. Grave o modelo ({{key:Mod+S}}), para que os ficheiros NC coincidan cun modelo gardado.
3. Escolla {{ui:Ficheiros NC}} no grupo {{ui:Saída}}.
4. O navegador descarga `<name> NC.zip`. A barra de estado indica cantos ficheiros contén e enumera as marcas que non escribiu (unha cantoneira ou un tubo redondo con recorte).

Dentro do zip cada ficheiro recibe o nome da súa marca de peza: `b1.nc1`, `c1.nc1`, `p1.nc1` … O zip non está comprimido e ábrese con calquera ferramenta de zip.

Se o modelo non ten pezas, a barra de estado só o indica.

## Que contén cada ficheiro

- **Cabeceira (ST):** o nome do modelo como pedido, a marca da peza como debuxo e peza, a fase 1, o grao do aceiro, a cantidade, o perfil e as súas dimensións, a masa por metro e a superficie de pintura por metro. Os cortes de serra son a escuadro.
- **Contornos exteriores (AK):** o contorno da alma cos recortes practicados, e cada contorno de ala acurtado onde un recorte a elimina.
- **Buratos (BO):** cada burato coa súa cara, posición e diámetro, incluídos os buratos feitos polas placas de testa e as placas de base.

Campo a campo, coas regras de cara e de coordenadas: [Campos do ficheiro NC](topic:nc1-fields).

## Que non se escribe

- Cantoneiras e tubos redondos con recorte: sen ficheiro NC. As súas marcas aparecen na barra de estado.
- Buratos en tubos redondos (DetailCraft non fai ningún).
- Biseis, contornos interiores, marcaxe de pezas (trazado) e ángulos de serra distintos de recto.
- Buratos alongados (DetailCraft só ten buratos redondos).

## Comprobar antes de mecanizar

Os ficheiros NC de DetailCraft son lidos de novo polo seu propio paquete de probas, pero non se executaron nas máquinas do seu taller.

1. Abra os ficheiros no visor NC do seu taller ou no software da máquina e compáreos cos debuxos de taller.
2. Comprobe unha peza de cada tipo na máquina antes de executar un lote.
3. Comprobe como lee o seu software as coordenadas y das alas e as caras das canles: DetailCraft mide a y das alas desde o bordo posterior, e deita as canles sobre o seu dorso como as debuxa a norma (ver [Campos do ficheiro NC](topic:nc1-fields#faces-and-coordinates)).
