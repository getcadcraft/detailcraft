---
title: Enviar arquivos NC para a oficina
summary: Exporte os arquivos NC DSTV de cada marca de peça (perfis I, perfis U, cantoneiras, HSS, chapas), compactados, e confira-os antes de chegarem a uma máquina.
keywords: nc, nc1, dstv, cnc, máquina, linha de vigas, linha de furação, corte de chapas, exportar, fabricação, zip
from: 598b6091
---

O DetailCraft grava um arquivo DSTV NC (`.nc1`) por marca de peça, para perfis I, perfis U, cantoneiras, HSS retangular e redondo, e chapas, e os compacta juntos em um zip. Linhas de vigas e máquinas de chapas leem esses arquivos para serrar, furar e cortar.

## Exportar

1. Limpe primeiro a guia {{ui:Problemas}}: uma ligação que não pôde ser criada não adiciona furos.
2. Salve o modelo ({{key:Mod+S}}), para que os arquivos NC correspondam a um modelo salvo.
3. Escolha {{ui:Arquivos NC}} no grupo {{ui:Saída}}.
4. O navegador baixa `<name> NC.zip`. A barra de status informa quantos arquivos ele contém e lista as marcas que não foram gravadas (uma cantoneira ou um tubo redondo com rebaixo).

Dentro do zip, cada arquivo recebe o nome da sua marca de peça: `b1.nc1`, `c1.nc1`, `p1.nc1` … O zip não é compactado e abre com qualquer ferramenta de zip.

Se o modelo não tiver peças, a barra de status informa isso.

## O que cada arquivo contém

- **Cabeçalho (ST):** o nome do modelo como pedido, a marca da peça como desenho e peça, fase 1, a classe do aço, a quantidade, o perfil e suas dimensões, massa por metro e superfície de pintura por metro. Os cortes de serra são retos.
- **Contornos externos (AK):** a alma com os rebaixos recortados, e cada mesa encurtada onde um rebaixo a remove.
- **Furos (BO):** cada furo com sua face, posição e diâmetro, incluindo os furos feitos pelas chapas de extremidade e pelas chapas de base.

Campo a campo, com as regras de face e de coordenadas: [Campos do arquivo NC](topic:nc1-fields).

## O que não é gravado

- Cantoneiras e tubos redondos com rebaixo: sem arquivo NC. Suas marcas são listadas na barra de status.
- Furos em tubos redondos (o DetailCraft não faz nenhum).
- Chanfros, contornos internos, marcações de peça (riscagem) e ângulos de serra diferentes de reto.
- Furos oblongos (o DetailCraft tem apenas furos redondos).

## Conferir antes da usinagem

Os arquivos NC do DetailCraft são lidos de volta pela suíte de testes do próprio programa, mas ainda não foram executados nas máquinas da sua oficina.

1. Abra os arquivos no visualizador NC da sua oficina ou no software da máquina e compare-os com os desenhos de fabricação.
2. Confira uma peça de cada tipo na máquina antes de rodar um lote.
3. Confira como o seu software lê as coordenadas y das mesas e as faces dos perfis U: o DetailCraft mede a y da mesa a partir da borda de trás e deita os perfis U sobre o dorso, como a norma os desenha (veja [Campos do arquivo NC](topic:nc1-fields#faces-and-coordinates)).
