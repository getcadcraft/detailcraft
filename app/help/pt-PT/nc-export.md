---
title: Enviar ficheiros NC para a oficina
summary: Exportar ficheiros NC DSTV para cada marca de peça (perfis em I, perfis U, cantoneiras, HSS, chapas), em zip, e verificá-los antes de chegarem a uma máquina.
keywords: nc, nc1, dstv, cnc, máquina, linha de vigas, linha de furação, corte de chapas, exportar, fabrico, zip
from: 598b6091
---

O DetailCraft escreve um ficheiro NC DSTV (`.nc1`) por cada marca de peça, para perfis em I, perfis U, cantoneiras, HSS retangulares e circulares e chapas, e agrupa-os todos num zip. As linhas de vigas e as máquinas de chapas leem estes ficheiros para serrar, furar e cortar.

## Exportar

1. Limpar primeiro o separador {{ui:Problemas}}: uma ligação que não pôde ser construída não acrescenta furos.
2. Guardar o modelo ({{key:Mod+S}}), para que os ficheiros NC correspondam a um modelo guardado.
3. Escolher {{ui:Ficheiros NC}} no grupo {{ui:Saída}}.
4. O navegador transfere `<name> NC.zip`. A barra de estado indica quantos ficheiros contém e lista as marcas que não escreveu (uma cantoneira ou um tubo circular com recorte).

Dentro do zip, cada ficheiro tem o nome da respetiva marca de peça: `b1.nc1`, `c1.nc1`, `p1.nc1` … O zip não está comprimido e abre-se com qualquer programa de zip.

Se o modelo não tiver peças, a barra de estado indica-o.

## O que contém cada ficheiro

- **Cabeçalho (ST):** o nome do modelo como encomenda, a marca da peça como desenho e peça, a fase 1, a qualidade do aço, a quantidade, o perfil e as suas dimensões, a massa por metro e a superfície de pintura por metro. Os cortes de serra são retos.
- **Contornos exteriores (AK):** o contorno da alma com os recortes retirados, e cada contorno dos banzos encurtado onde um recorte o retira.
- **Furos (BO):** cada furo com a sua face, posição e diâmetro, incluindo os furos feitos pelas chapas de topo e pelas chapas de base.

Campo a campo, com as regras de faces e coordenadas: [Campos do ficheiro NC](topic:nc1-fields).

## O que não é escrito

- Cantoneiras e tubos circulares com recorte: sem ficheiro NC. As suas marcas aparecem na barra de estado.
- Furos em tubos circulares (o DetailCraft não os cria).
- Chanfros, contornos interiores, marcações (traçagem) e ângulos de serra diferentes de reto.
- Furos oblongos (o DetailCraft só tem furos redondos).

## Verificar antes da maquinação

Os ficheiros NC do DetailCraft são lidos de volta pelo seu próprio conjunto de testes, mas não foram executados nas máquinas da sua oficina.

1. Abrir os ficheiros no visualizador NC da sua oficina ou no software da máquina e compará-los com os desenhos de fabrico.
2. Verificar uma peça de cada tipo na máquina antes de executar um lote.
3. Verificar como o seu software lê as coordenadas y dos banzos e as faces dos perfis U: o DetailCraft mede a y dos banzos a partir do bordo traseiro e deita os perfis U sobre as costas, como a norma os desenha (ver [Campos do ficheiro NC](topic:nc1-fields#faces-and-coordinates)).
