---
title: Configurar eixos e níveis
summary: Digite as linhas dos eixos, seus espaçamentos e os níveis em que todas as barras são posicionadas.
keywords: eixos, grade de eixos, linhas de eixo, níveis, cotas de nível, pavimentos, pisos, espaçamento, configuração
from: 9cad233c
---

Cada barra no DetailCraft é posicionada em uma interseção de eixos, em um nível. Configure os eixos e os níveis primeiro; você pode alterá-los depois.

## Como os eixos funcionam aqui

- **Linhas numeradas** seguem em uma direção, **linhas com letras** na outra. Os nomes são apenas costume: um rótulo pode ser qualquer texto de até 8 caracteres (1, 2, 3 ou A1, A2, ou 10, 20).
- Você digita os rótulos e os espaçamentos entre eles, não coordenadas. A primeira linha de cada conjunto fica em 0.
- Linhas numeradas são linhas de x constante; linhas com letras são linhas de y constante. Assim, uma viga do eixo 1 ao eixo 2 segue ao longo de x, e uma viga de A a B segue ao longo de y.
- Todos os valores são em milímetros.

Um novo modelo começa com as linhas numeradas 1 2 3 em 6000 6000, as linhas com letras A B em 6000, e dois níveis.

## Configurar os eixos

1. No painel {{ui:Modelo}} à esquerda, abra {{ui:Eixos}} se estiver recolhido.
2. Em {{ui:Linhas numeradas}}, digite os rótulos separados por espaços, por exemplo `1 2 3 4 5`.
3. No campo {{ui:Espaçamentos}} abaixo dele, digite um espaçamento para cada intervalo, por exemplo `6000 6000 7500 6000`. Quatro intervalos para cinco linhas.
4. Faça o mesmo em {{ui:Linhas com letras}} e no seu {{ui:Espaçamentos}}, por exemplo `A B C` e `8000 8000`.
5. Escolha {{ui:Aplicar eixos}}.

A barra de status diz "Eixos atualizados." e a vista faz zoom na nova grade. Vírgulas também funcionam como separadores.

Se algo não fecha, nada muda e a barra de status diz o motivo, por exemplo "Linhas numeradas: informe um espaçamento entre cada par de linhas (4)." Outras verificações: os espaçamentos devem ser milímetros positivos, os rótulos devem ser diferentes, e pode haver no máximo 60 linhas em cada direção.

:::note
As barras mantêm suas coordenadas quando os eixos se movem. Se você alterar um espaçamento depois de inserir aço, o aço continua onde estava e deixa de estar sobre o eixo. Altere primeiro o eixo, ou mova as barras editando as coordenadas de suas extremidades.
:::

## Configurar os níveis

1. Abra {{ui:Níveis}} no painel {{ui:Modelo}}.
2. Cada linha tem um nome de nível e sua cota em milímetros. Edite-os como quiser.
3. Escolha {{ui:Adicionar nível}} para outra linha. Ela recebe o nome "Nível 3" (e assim por diante) e é posicionada 4000 mm acima do nível mais alto; altere os dois se precisar.
4. Para remover um nível, escolha o botão × no fim da sua linha.
5. Escolha {{ui:Aplicar níveis}}.

Nada muda até você escolher {{ui:Aplicar níveis}}. Os níveis são ordenados pela cota ao serem aplicados. Todo nível precisa de um nome, dois níveis não podem ter o mesmo nome, e você deve manter pelo menos um nível.

Os níveis podem estar abaixo de zero (um subsolo em `-3500`) e não precisam ter espaçamento uniforme.

## Como os níveis são usados

- Um pilar inserido em um nível vai até o próximo nível, ou até o nível que você escolher em {{ui:Até}}.
- Vigas e chapas são inseridas entre duas interseções no nível em que você clica.
- As sapatas são inseridas com o topo no nível em que você clica.
- {{ui:Planta}} mostra um nível de cada vez, visto de cima.
- A exportação IFC cria um pavimento por nível.

## Desfazer

Alterações de eixos e níveis são edições como quaisquer outras: {{key:Mod+Z}} restaura a grade anterior.

## Próximo passo

[Inserir pilares, vigas e contraventamentos](topic:place-members)
