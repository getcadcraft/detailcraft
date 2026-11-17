---
title: O que ainda não está implementado
summary: O que esta versão inicial do DetailCraft ainda não faz e o que fazer hoje em vez disso.
keywords: limites, limitações, em falta, roteiro, não suportado, em breve, previsto, solução alternativa, a fazer
from: ea411885
---

O DetailCraft é uma versão inicial. Esta página lista o que ainda não faz, para que possa planear em conformidade. Nada aqui é uma promessa de data.

## Modelação

| Ainda não | Em alternativa, hoje |
|---|---|
| Arrastar uma extremidade de um elemento (esticá-lo) | Editar {{ui:Início}} ou {{ui:Fim}} em {{ui:Extremidades (x, y, z mm)}} no painel {{ui:Propriedades}} |
| Um filtro de seleção (só vigas, só um perfil) | Arrastar uma janela e, depois, {{key:Shift}}+clicar para retirar peças |
| Criar matriz de uma seleção; rodar em torno de um eixo inclinado; espelhar num plano inclinado | Copiar e colar com um deslocamento, ou {{ui:Duplicar}}; rodar e espelhar funcionam em planta ([Selecionar por janela, mover, rodar, espelhar, alterar muitos](topic:select-and-change)) |
| Pontos fora da grelha ao clicar | Colocar na grelha e, depois, escrever as coordenadas finais |
| Alçados ao longo de eixos numerados; vistas guardadas; planos de trabalho | Usar {{ui:3D}}, ou {{ui:Adicionar por eixo}} |
| Furos desenhados como cortes reais na vista 3D | Os furos aparecem como tampões escuros; são reais em todas as exportações |
| Recortes arredondados ou inclinados, outros cortes e acessórios | Recortes retos só em perfis em I |
| Furos que acrescente a cantoneiras e tubos circulares | Os furos de cantoneiras vêm só de [chapas de gousset de contraventamento](topic:brace-gussets) |
| Entrada em polegadas | Escrever em milímetros (25.4 por polegada) |
| Editar ou remover um perfil personalizado | Acrescentar um perfil corrigido com um novo nome |

## Escadas

| Ainda não | Em alternativa, hoje |
|---|---|
| Corrimãos, patamares, rodapés, degraus em grelha, escadas em espiral e de dois lanços | Só lanços retos; ver [Escadas](topic:stairs) |
| Cortes nas extremidades das longarinas contra os pisos | Longarinas com corte reto; cortá-las no software da oficina |

## Ligações

O DetailCraft cria seis ligações: uma chapa de gousset de contraventamento (ver [Chapas de gousset de contraventamento](topic:brace-gussets)); uma emenda aparafusada entre duas peças de um mesmo perfil em I (ver [Emendas](topic:splices)); uma meia-esquadria entre dois perfis em I que se encontram num ângulo, só cortada ou com chapas de topo aparafusadas (ver [Meias-esquadrias](topic:mitres)); uma chapa de topo aparafusada, rasa ou prolongada, de uma viga em I horizontal e de alma vertical até uma aba ou alma de um pilar em I; uma chapa de corte de uma viga (quadrada, oblíqua ou inclinada) até uma aba ou alma de um pilar; e uma chapa de base de pilar com quatro chumbadouros.

| Ainda não | Em alternativa, hoje |
|---|---|
| Chapas de topo oblíquas ou inclinadas | Usar [chapas de corte](topic:shear-tabs), que aceitam vigas oblíquas e inclinadas |
| Cantoneiras de fixação; chapas de enchimento em emendas e emendas entre tamanhos diferentes; gussets de canto soldados à viga e ao pilar, gussets chanfrados | Detalhar noutro software, ou acrescentar chapas e furos à mão como peças soltas; ver [Emendas](topic:splices), [Chapas de gousset de contraventamento](topic:brace-gussets) |
| Reforços de base chanfrados ou afunilados; furos de injeção de grout; o alvéolo da sapata para um dente de corte | Reforços retangulares; ver [Chapas de base](topic:base-plates) |
| Cachorros (haunches); meias-esquadrias soldadas com soldadura de topo; reforços alinhados com os banzos do outro elemento | Uma [meia-esquadria](topic:mitres) com chapas de topo e reforços de alma, ou um corte simples de meia-esquadria; acrescentar as outras chapas à mão como peças soltas |
| Verificações de cálculo das ligações (resistência) | Verificar as ligações com os cálculos do seu engenheiro; o DetailCraft só avisa sobre distância à borda e espaçamento |
| Furos oblongos | Só furos redondos |

## Análise

| Ainda não | Em alternativa, hoje |
|---|---|
| Verificações de projeto além de perfis de aço em I: tubos, cantoneiras, perfis U, formas soldadas, peças esbeltas ou de classe 4, torção, ligações; betão: esbelteza por deslocamento lateral, torção, pormenorização sísmica, lajes e paredes | O separador {{ui:Análise}} verifica perfis de aço em I segundo a AISC 360 ou a EN 1993-1-1 ([Verificar elementos de aço segundo uma norma de cálculo](topic:design-checks)); o resto fica marcado como "não verificado"; um engenheiro deve rever tudo |
| Análise de encurvadura, vibração | A análise de segunda ordem é só P-Delta (elástica); sem análise de encurvadura (modal, espectro de resposta, histórico no tempo e pushover estão no separador Análise) |
| Verificações de projeto que um engenheiro tenha revisto | Até lá, são apenas uma ajuda: verifique dois ou três elementos à mão ou no software do seu engenheiro antes de se basear neles |
| Cargas de piso, vento e neve calculadas automaticamente a partir de áreas | Aplicar cargas nos elementos à mão, em kN/m ou kN |
| Excentricidades de elementos, ligações excêntricas, contraventamentos só à tração, chapas e fundações no pórtico | Os elementos são analisados nas suas linhas de trabalho; os contraventamentos resistem à tração e à compressão |

## Armaduras

| Ainda não | Em alternativa, hoje |
|---|---|
| Pilares circulares, espirais, vigas inclinadas ou curvas, lajes que não sejam retangulares, paredes que não sejam retas | Vigas, pilares, lajes e paredes retangulares ([Detalhar betão armado](topic:reinforced-concrete)) |
| Varões dobrados para um traspasse, traspasses escalonados, traspasses colocados onde escolher | Traspasses em intervalos iguais, todos os varões traspassados numa mesma secção (ACI Classe B, EN α6 = 1.5) |
| Varões de canto em aberturas, armadura de punçoamento, pormenorização sísmica (ACI 318-19 capítulo 18) | Reforços de bordo em cada lado de uma abertura; verificar o resto por si |
| Ler os ficheiros próprios de um programa de cálculo estrutural | Exportar IFC a partir dele: os seus IfcReinforcingBar entram como varões ([Varões de um ficheiro IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formas de dobra além de reto, uma dobra e um U; tipos ACI 315 para varões retos e de um gancho | As três formas saem como BS 8666 00, 11, 21 ou ACI Tipo 2; ver [Referência de armaduras](topic:rebar-reference) |
| Varões métricos além de BS 4449 H8–H40 (p. ex. CSA 10M–35M) | Nomes ASTM soft-metric #10–#36, ou varões BS |

## Desenhos e exportações

| Ainda não | Em alternativa, hoje |
|---|---|
| Folhas em retrato, A0 e folhas de formato próprio; vistas de disposição geral em eixos oblíquos | Folhas em paisagem de A4 a A1 e ANSI B a D ([Desenhos de disposição geral e de montagem](topic:drawings)); escalar o PDF para imprimir noutro formato |
| Símbolos de soldadura em desenhos de fabrico de uma só peça; símbolos que não sejam cordões de ângulo | Os desenhos de montagem têm símbolos de cordão de ângulo; o desenho de fabrico indica a soldadura em texto |
| Editar um desenho na aplicação | Alterar o modelo e gerar o desenho de novo; anotar o PDF numa aplicação de PDF, como o MarkupCraft |
| Desenhos em DWG com objetos de cota, ou o modelo à escala real no espaço modelo com as folhas como layouts | Cada folha é um DWG ou DXF de tamanho real do papel, com cotas como linhas e figuras ([Desenhos de disposição geral e de montagem](topic:drawings#download)) |
| Furos de NC em tubos circulares, recortes em cantoneiras e tubos circulares nos ficheiros NC | Não são escritos; ver [Campos do ficheiro NC](topic:nc1-fields) |
| Chanfros, marcações e contornos interiores nos ficheiros NC | Nenhum, por enquanto |
| Furos para parafusos, parafusos, soldaduras e sapatas na exportação USD | Estão nas saídas IFC, NC e na lista de materiais; ver [Exportar o modelo de aço para USD](topic:usd) |
| Trazer ligações, sapatas, furos ranhurados ou retangulares e furos em tubos circulares a partir de um ficheiro IFC | {{ui:Importar IFC}} traz vigas, pilares, elementos, chapas, eixos, níveis, furos redondos, recortes, parafusos e varões de armadura, e o seu relatório indica o que deixou de fora |
| Layouts de relatórios personalizados | Os três ficheiros CSV |

## Painéis

| Ainda não | Em alternativa, hoje |
|---|---|
| Mover os relatórios na parte inferior ({{ui:Problemas}}, {{ui:Lista de materiais}}, {{ui:Mapa de dobragem}}) | Só os painéis {{ui:Modelo}} e {{ui:Propriedades}} se movem. Ver [Organizar os painéis](common:arrange-panels) |

## Trabalho em conjunto e gravação

| Ainda não | Em alternativa, hoje |
|---|---|
| Gravação e sincronização na nuvem entre computadores | Guardar ficheiros `.detailcraft.json` e partilhá-los como qualquer ficheiro. A gravação na nuvem ainda não está disponível |
| Cursores de outras pessoas e etiquetas de "a editar" numa sessão Live TeamWork; grelhas, níveis e fases combinados item a item | As alterações continuam a combinar-se (grelhas, níveis e fases vão inteiros, prevalece a alteração mais recente); ver [Detalhar uma estrutura em conjunto, em direto](topic:work-live) |
| Ligações de convite para uma sessão Live TeamWork pela internet | Entrar com um código curto na mesma rede |

## Plataformas

- O DetailCraft foi feito para o ecrã de um computador de secretária, portátil ou tablet. Também funciona num telemóvel: o modelo mantém o ecrã e os painéis, e os relatórios abrem como folhas a partir de uma barra na parte inferior, mas há pouco espaço para os painéis.
- A utilização offline exige primeiro que o DetailCraft seja guardado para uso offline, com {{ui:Guardar para offline}} na barra da aplicação; quando mostrar {{ui:Pronto para offline}}, tudo nesta versão funciona sem ligação. Ver [Trabalhar offline](common:offline).

Se alguma destas lacunas bloquear o seu trabalho, comunique-a através da [página de apoio](https://getcadcraft.com/support); isso ajuda-nos a decidir o que construir a seguir.
