---
title: Configurações do DetailCraft
summary: Defina novas barras como perfis americanos ou europeus, escolha a distância que Duplicar move uma cópia, decida se as cópias levam suas conexões e mostre ou oculte parafusos na vista 3D.
keywords: configurações, preferências, tamanho da folha, tamanho do papel, desenhos, opções, aço, aisc, en, perfis europeus, perfis americanos, perfis métricos, perfil padrão, classe, s355, a992, deslocamento de duplicação, deslocamento ao colar, copiar conexões, parafusos, chumbadores, ocultar parafusos, redefinir
from: e46cea57
---

Abra {{ui:Configurações}} com a engrenagem na barra do aplicativo ou com {{key:Mod+,}}. A primeira guia, {{ui:DetailCraft}}, guarda as configurações deste aplicativo; {{ui:Geral}} guarda as que todos os aplicativos CadCraft compartilham (tema, barra de ferramentas, painéis). As configurações do DetailCraft existem somente no aplicativo: você as altera aqui, elas valem na hora, e este navegador as lembra. Elas não são salvas no arquivo do seu modelo.

## Novas barras

Quais perfis e classes as ferramentas de posicionamento usam como ponto de partida:

| Ferramenta | Perfis americanos (AISC), A992 | Perfis europeus (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilar}} | W12x50, A992 | HEB200, S355 |
| {{ui:Contraventamento}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Chapa}} | A36 | S355 |

Perfis americanos é o ponto de partida. A escolha europeia usa um HEA160 para contraventamentos, porque o catálogo EN do DetailCraft ainda não tem seções ocas ([Catálogo de perfis](topic:profile-catalog)). Você ainda pode escolher qualquer perfil e classe para a próxima peça no painel {{ui:Propriedades}}, enquanto uma ferramenta de posicionamento estiver ativa. As barras que já estão no modelo mantêm o próprio perfil e classe.

## Duplicar e colar

- **Deslocamento (mm)**: x, y e z. {{ui:Duplicar}} ({{key:Mod+D}}) coloca a cópia a essa distância da original, e o formulário {{ui:Colar por deslocamento (mm, a partir do original)}} começa com ele. Começa em 6000, 0, 0: um vão de 6 m ao longo das linhas numeradas. Ajuste para o seu espaçamento de vãos, ou para uma altura de nível em z, para copiar um pavimento para cima.
- **Copiar chapas de extremidade e chapas de base junto com as barras** (ligado no início): uma conexão vem junto com uma cópia somente quando todas as barras que ela liga são copiadas. Desligue para copiar barras e sapatas sem as conexões, por exemplo para experimentar outra conexão na cópia.

Veja [Copiar, colar e duplicar](topic:copy-paste).

## Vista 3D

**Mostrar parafusos e chumbadores** (ligado no início). Desligue para ocultá-los na vista e ver os furos e as chapas de uma ligação carregada. Parafusos ocultos não podem ser clicados; clique na chapa para selecionar a conexão. A lista de materiais, os desenhos e todas as exportações continuam incluindo cada parafuso e chumbador.

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vista** (o início; canto superior direito: clique em uma face, aresta ou canto para olhar dali, arraste para orbitar, arraste o anel da bússola para girar o modelo), **Ícone de eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo, que gira com a vista: X vermelho, Y verde, Z azul) ou **Nenhum**. Somente em {{ui:3D}}; {{ui:Planta}} e {{ui:Elevação}} não mostram nenhum dos dois. Veja [O cubo de vista](topic:view-cube).

## Redefinir

{{ui:Redefinir configurações do DetailCraft}} no fim da caixa de diálogo devolve estas configurações ao início (perfis americanos, deslocamento 6000, 0, 0, conexões copiadas, parafusos mostrados), junto com as de {{ui:Geral}}.

## Desenhos

**Tamanho da folha**: as folhas de desenho e os desenhos de fabricação são feitos em formato paisagem: A4, A3 (o início), A2, A1, ANSI B, ANSI C ou ANSI D. As janelas {{ui:Desenhos}} e de desenho de fabricação têm a mesma lista. Veja [Desenhos de disposição geral e de montagem](topic:drawings).

## Armadura

- **Nomes de barras ASTM**: #3 a #11, ou os #10 a #36 métricos soft para as mesmas barras.
- **Códigos de forma da tabela de dobramento**: os S, L, U do DetailCraft; os tipos da ACI 315; ou os códigos de forma da BS 8666. Veja [Referência de armadura](topic:rebar-reference).

## Arrastar para selecionar

**Retângulo** (como antes) ou **Laço**: uma linha à mão livre, com {{key:Space}} alternando entre dentro, tocando e cerca enquanto você arrasta. Veja [Selecionar com janela](topic:select-and-change#select-with-a-window).
