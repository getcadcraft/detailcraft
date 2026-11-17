---
title: Definições do DetailCraft
summary: Iniciar novas barras como perfis US ou europeus, definir a distância a que Duplicar desloca uma cópia, escolher se as cópias levam as suas ligações, e mostrar ou ocultar parafusos na vista 3D.
keywords: definições, preferências, tamanho da folha, formato do papel, desenhos, opções, aço, aisc, en, perfis europeus, perfis US, perfil predefinido, qualidade, S355, A992, desvio de duplicação, desvio ao colar, copiar ligações, parafusos, chumbadouros, ocultar parafusos, repor
from: e46cea57
---

Abra {{ui:Definições}} com a engrenagem na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:DetailCraft}}, contém as definições desta aplicação; {{ui:Geral}} contém as que todas as aplicações do CadCraft partilham (tema, barra de ferramentas, painéis). As definições do DetailCraft existem apenas na aplicação: altere-as aqui, produzem efeito de imediato, e este navegador lembra-se delas. Não são guardadas no seu ficheiro de modelo.

## Novas barras

Os perfis e as qualidades com que as ferramentas de colocação começam:

| Ferramenta | Perfis US (AISC), A992 | Perfis europeus (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilar}} | W12x50, A992 | HEB200, S355 |
| {{ui:Contraventamento}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Chapa}} | A36 | S355 |

Os perfis US são o ponto de partida. A escolha europeia usa um HEA160 para os contraventamentos, porque o catálogo EN do DetailCraft ainda não tem perfis ocos ([Catálogo de perfis](topic:profile-catalog)). Pode, ainda assim, escolher qualquer perfil e qualidade para a próxima peça no painel {{ui:Propriedades}} enquanto uma ferramenta de colocação estiver ativa. As barras que já estão no modelo mantêm o seu próprio perfil e qualidade.

## Duplicar e colar

- **Desvio (mm)**: x, y e z. {{ui:Duplicar}} ({{key:Mod+D}}) coloca a cópia a esta distância do original, e o formulário {{ui:Colar com desvio (mm, a partir do original)}} começa com ele. Começa em 6000, 0, 0: um vão de 6 m ao longo dos eixos numerados. Defina-o para o seu espaçamento entre vãos, ou para uma altura de nível em z para copiar um piso para cima.
- **Copiar as chapas de topo e as chapas de base com as suas barras** (ativo por predefinição): uma ligação só vem com uma cópia quando todas as barras que une são copiadas. Desative-a para copiar barras e sapatas sem as suas ligações, por exemplo para experimentar outra ligação na cópia.

Veja [Copiar, colar e duplicar](topic:copy-paste).

## Vista 3D

**Mostrar parafusos e chumbadouros** (ativo por predefinição). Desative-a para os ocultar na vista e ver os furos e as chapas de uma ligação carregada. Os parafusos ocultos não podem ser clicados; clique na chapa para selecionar a ligação. A lista de materiais, os desenhos e todas as exportações continuam a incluir todos os parafusos e chumbadouros.

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vistas** (o predefinido; canto superior direito — clique numa face, aresta ou canto para olhar a partir daí, arraste-o para orbitar, arraste o seu anel de bússola para rodar o modelo), **Ícone dos eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo, que roda com a vista: X a vermelho, Y a verde, Z a azul) ou **Nenhum**. Só em {{ui:3D}}; {{ui:Planta}} e {{ui:Alçado}} não mostram nenhum. Veja [O cubo de vistas](topic:view-cube).

## Repor

{{ui:Repor definições do DetailCraft}} na parte inferior da caixa repõe estas definições para o predefinido (perfis US, desvio 6000, 0, 0, ligações copiadas, parafusos visíveis), juntamente com as de {{ui:Geral}}.

## Desenhos

**Tamanho da folha**: as folhas de desenho e os desenhos de fabrico são feitos em paisagem: A4, A3 (predefinido), A2, A1, ANSI B, ANSI C ou ANSI D. As janelas {{ui:Desenhos}} e de desenho de fabrico têm a mesma lista. Veja [Desenhos de implantação e de montagem](topic:drawings).

## Armadura

- **Nomes ASTM dos varões**: de #3 a #11, ou os nomes métricos #10 a #36 para os mesmos varões.
- **Códigos de forma do mapa de dobragem**: os S, L, U do DetailCraft; os tipos da ACI 315; ou os códigos de forma da BS 8666. Veja [Referência de armaduras](topic:rebar-reference).

## Arrastar para selecionar

**Retângulo** (como antes) ou **Laço**: uma linha à mão livre, com {{key:Space}} a alternar entre dentro, tocar e cerca enquanto arrasta. Veja [Selecionar com uma janela](topic:select-and-change#select-with-a-window).
