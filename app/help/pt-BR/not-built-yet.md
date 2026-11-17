---
title: O que ainda não foi implementado
summary: O que esta versão inicial do DetailCraft ainda não consegue fazer e o que fazer no lugar, por enquanto.
keywords: limites, limitações, faltando, roteiro, não suportado, em breve, planejado, solução alternativa, pendências
from: ea411885
---

O DetailCraft é uma versão inicial. Esta página lista o que ele ainda não faz, para que você possa se planejar. Nada aqui é uma promessa de data.

## Modelagem

| Ainda não | Em vez disso, hoje |
|---|---|
| Arrastar uma extremidade de uma barra (esticá-la) | Edite {{ui:Início}} ou {{ui:Fim}} em {{ui:Extremidades (x, y, z mm)}} no painel {{ui:Propriedades}} |
| Um filtro de seleção (só vigas, só um perfil) | Arraste uma janela e depois {{key:Shift}}+clique para retirar peças |
| Criar matriz de uma seleção; girar em torno de um eixo inclinado; espelhar em um plano inclinado | Copie e cole com um deslocamento, ou {{ui:Duplicar}}; girar e espelhar funcionam na planta ([Selecionar por janela, mover, girar, espelhar, alterar muitos](topic:select-and-change)) |
| Pontos fora da grade ao clicar | Posicione na grade e depois digite as coordenadas finais |
| Elevações ao longo de eixos numerados; vistas salvas; planos de trabalho | Use {{ui:3D}}, ou {{ui:Adicionar por eixo}} |
| Furos desenhados como cortes reais na vista 3D | Os furos aparecem como tampões escuros; são reais em todas as exportações |
| Rebaixos arredondados ou inclinados, outros cortes e acessórios | Rebaixos retos apenas em perfis I |
| Furos que você adiciona em cantoneiras e tubos redondos | Os furos de cantoneira vêm apenas de [chapas de ligação de contraventamento](topic:brace-gussets) |
| Entrada em polegadas | Digite milímetros (25.4 por polegada) |
| Editar ou remover um perfil personalizado | Adicione um perfil corrigido com um novo nome |

## Escadas

| Ainda não | Em vez disso, hoje |
|---|---|
| Corrimãos, patamares, rodapés, degraus de grelha, escadas em espiral e em dois lances | Apenas lances retos; veja [Escadas](topic:stairs) |
| Cortes de extremidade das longarinas contra os pisos | Longarinas com corte reto; corte-as no software da sua oficina |

## Ligações

O DetailCraft faz seis ligações: uma chapa de ligação de contraventamento (veja [Chapas de ligação de contraventamento](topic:brace-gussets)); uma emenda parafusada entre duas peças de um mesmo perfil I (veja [Emendas](topic:splices)); uma meia-esquadria entre dois perfis I que se encontram em ângulo, somente cortada ou com chapas de extremidade parafusadas (veja [Meias-esquadrias](topic:mitres)); uma chapa de extremidade parafusada, rente ou estendida, de uma viga I vertical e nivelada até a mesa ou a alma de um pilar em perfil I; uma chapa de cisalhamento de uma viga (reta, esconsa ou inclinada) até a mesa ou a alma de um pilar; e uma chapa de base de pilar com quatro chumbadores.

| Ainda não | Em vez disso, hoje |
|---|---|
| Chapas de extremidade esconsas ou inclinadas | Use [chapas de cisalhamento](topic:shear-tabs), que aceitam vigas esconsas e inclinadas |
| Cantoneiras de fixação; chapas de preenchimento de emenda e emendas entre tamanhos diferentes; chapas de ligação de canto soldadas à viga e ao pilar; chapas de ligação chanfradas | Detalhe em outro software, ou adicione chapas e furos à mão como peças avulsas; veja [Emendas](topic:splices), [Chapas de ligação de contraventamento](topic:brace-gussets) |
| Enrijecedores de base chanfrados ou afunilados; furos de graute; o bolsão de fundação para um dente de cisalhamento | Enrijecedores retangulares; veja [Chapas de base](topic:base-plates) |
| Mísulas; meias-esquadrias soldadas com solda de topo; enrijecedores alinhados com as mesas da outra barra | Uma [meia-esquadria](topic:mitres) com chapas de extremidade e enrijecedores de alma, ou um corte simples de meia-esquadria; adicione outras chapas à mão como peças avulsas |
| Verificações de projeto de ligações (resistência) | Verifique as ligações com os cálculos do seu engenheiro; o DetailCraft só avisa sobre distância à borda e espaçamento |
| Furos oblongos | Apenas furos redondos |

## Análise

| Ainda não | Em vez disso, hoje |
|---|---|
| Verificações de projeto além de perfis I de aço: tubos, cantoneiras, perfis U, perfis soldados, peças esbeltas ou classe 4, torção, ligações; concreto: esbeltez por deslocamento lateral, torção, detalhamento sísmico, lajes e paredes | A guia {{ui:Análise}} verifica perfis I de aço segundo AISC 360 ou EN 1993-1-1 ([Verificar barras de aço segundo uma norma de projeto](topic:design-checks)); o restante fica marcado como "não verificado"; um engenheiro revisa tudo |
| Análise de flambagem, vibração | A segunda ordem é apenas P-Delta (elástica); sem análise de flambagem (modal, espectro de resposta, histórico no tempo e pushover estão na guia Análise) |
| Verificações de projeto que um engenheiro tenha revisado | Elas são um apoio até lá: confira duas ou três barras à mão ou no software próprio do seu engenheiro antes de confiar nelas |
| Cargas de piso, vento e neve geradas para você a partir de áreas | Aplique as cargas nas barras à mão, em kN/m ou kN |
| Deslocamentos de barras, ligações excêntricas, contraventamentos que trabalham só à tração, chapas e fundações no pórtico | As barras são analisadas nas suas linhas de trabalho; contraventamentos resistem a tração e compressão |

## Armadura

| Ainda não | Em vez disso, hoje |
|---|---|
| Pilares circulares, espirais, vigas inclinadas ou curvas, lajes que não sejam retangulares, paredes que não sejam retas | Vigas, pilares, lajes e paredes retangulares ([Detalhar concreto armado](topic:reinforced-concrete)) |
| Barras dobradas para uma emenda por transpasse, emendas escalonadas, emendas colocadas onde você escolher | Emendas em passos iguais, com todas as barras emendadas em uma mesma seção (ACI Classe B, EN α6 = 1.5) |
| Barras de canto em aberturas, armadura de punção, detalhamento sísmico (ACI 318-19 capítulo 18) | Reforços em cada lado de uma abertura; confira o restante por conta própria |
| Ler os arquivos próprios de um programa de projeto estrutural | Exporte IFC dele: seus IfcReinforcingBar entram como barras ([Barras de um arquivo IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formas de dobra além de reta, uma dobra e U; tipos ACI 315 para barras retas e com um gancho | As três formas são impressas como BS 8666 00, 11, 21 ou ACI Tipo 2; veja [Referência de armadura](topic:rebar-reference) |
| Barras métricas além de BS 4449 H8–H40 (por ex., CSA 10M–35M) | Nomes métricos soft-metric ASTM #10–#36, ou barras BS |

## Desenhos e exportações

| Ainda não | Em vez disso, hoje |
|---|---|
| Folhas em retrato, A0 e folhas de tamanho próprio; vistas de disposição geral em malhas esconsas | Folhas paisagem de A4 a A1 e ANSI B a D ([Desenhos de disposição geral e de montagem](topic:drawings)); ajuste a escala do PDF para imprimir em outro tamanho |
| Símbolos de solda em desenhos de fabricação de uma só peça; símbolos que não sejam filetes | Os desenhos de montagem trazem símbolos de solda de filete; o desenho de fabricação indica a solda como texto |
| Editar um desenho no aplicativo | Altere o modelo e gere o desenho de novo; faça as marcações no PDF com um app de PDF, como o MarkupCraft |
| Desenhos em DWG com objetos de cota, ou o modelo em tamanho real no espaço modelo com as folhas como layouts | Cada folha é um DWG ou DXF em tamanho real da folha, com as cotas como linhas e textos ([Desenhos de disposição geral e de montagem](topic:drawings#download)) |
| Furos NC em tubos redondos, rebaixos em cantoneiras e tubos redondos nos arquivos NC | Não gravados; veja [Campos do arquivo NC](topic:nc1-fields) |
| Chanfros, marcações e contornos internos nos arquivos NC | Nenhum por enquanto |
| Furos de parafuso, parafusos, soldas e fundações na exportação USD | Estão nas saídas IFC, NC e lista de materiais; veja [Exportar o modelo de aço como USD](topic:usd) |
| Trazer ligações, fundações, furos oblongos ou retangulares e furos em tubos redondos de um arquivo IFC | {{ui:Importar IFC}} traz vigas, pilares, barras, chapas, eixos, níveis, furos redondos, rebaixos, parafusos e barras de armadura, e o relatório lista o que deixou de fora |
| Layouts personalizados de relatório | Os três arquivos CSV |

## Painéis

| Ainda não | Em vez disso, hoje |
|---|---|
| Mover os relatórios na parte inferior ({{ui:Problemas}}, {{ui:Lista de materiais}}, {{ui:Tabela de dobramento}}) | Apenas os painéis {{ui:Modelo}} e {{ui:Propriedades}} se movem. Veja [Organizar os painéis](common:arrange-panels) |

## Trabalho em conjunto e salvamento

| Ainda não | Em vez disso, hoje |
|---|---|
| Salvamento na nuvem e sincronização entre computadores | Salve arquivos `.detailcraft.json` e compartilhe-os como qualquer arquivo. O salvamento na nuvem ainda não está disponível |
| Cursores de outras pessoas e rótulos "está editando" em uma sessão Live TeamWork; grades, níveis e fases mesclados item por item | As edições ainda se mesclam (grades, níveis e fases vão inteiros, prevalece a alteração mais recente); veja [Detalhar uma estrutura em conjunto, ao vivo](topic:work-live) |
| Links de convite para uma sessão Live TeamWork pela internet | Entre com um código curto na mesma rede |

## Plataformas

- O DetailCraft é feito para a tela de um desktop, notebook ou tablet. Ele também funciona em celular: o modelo mantém a tela e os painéis, e os relatórios abrem como folhas a partir de uma barra na parte inferior, mas há pouco espaço para os painéis.
- O uso offline exige que o DetailCraft seja salvo para uso offline antes, com {{ui:Salvar para uso offline}} na barra do aplicativo; quando ele mostrar {{ui:Pronto para uso offline}}, tudo nesta versão funciona sem conexão. Veja [Trabalhar offline](common:offline).

Se alguma dessas lacunas bloquear o seu trabalho, avise-nos pela [página de suporte](https://getcadcraft.com/support); isso nos ajuda a decidir o que construir em seguida.
