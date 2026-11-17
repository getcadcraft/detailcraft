---
title: Configurar grelhas e níveis
summary: Escreva as linhas da grelha, os seus espaçamentos e os níveis em que fica colocada cada barra.
keywords: grelha, grelhas, eixos, linhas de eixo, níveis, cotas, pisos, pavimentos, espaçamento, configuração
from: 9cad233c
---

Cada barra do DetailCraft é colocada numa interseção da grelha, a um nível. Defina primeiro as grelhas e os níveis; pode alterá-los mais tarde.

## Como funcionam aqui as grelhas

- **As linhas numeradas** seguem num sentido, **as linhas com letras** no outro. Os nomes são apenas um hábito: uma etiqueta pode ser qualquer texto até 8 caracteres (1, 2, 3 ou A1, A2, ou 10, 20).
- Escreva as etiquetas e os espaçamentos entre elas, e não coordenadas. A primeira linha de cada conjunto fica em 0.
- As linhas numeradas são linhas de x constante; as linhas com letras são linhas de y constante. Assim, uma viga da grelha 1 à grelha 2 segue ao longo de x, e uma viga de A a B segue ao longo de y.
- Todos os valores são em milímetros.

Um modelo novo começa com as linhas numeradas 1 2 3 a 6000 6000, as linhas com letras A B a 6000, e dois níveis.

## Definir as grelhas

1. No painel {{ui:Modelo}} à esquerda, abra {{ui:Eixos}} se estiver recolhido.
2. Em {{ui:Linhas numeradas}}, escreva as etiquetas separadas por espaços, por exemplo `1 2 3 4 5`.
3. No campo {{ui:Espaçamentos}} por baixo, escreva um espaçamento para cada intervalo, por exemplo `6000 6000 7500 6000`. Quatro intervalos para cinco linhas.
4. Faça o mesmo em {{ui:Linhas com letras}} e no respetivo {{ui:Espaçamentos}}, por exemplo `A B C` e `8000 8000`.
5. Escolha {{ui:Aplicar os eixos}}.

A barra de estado indica "Eixos atualizados." e a vista faz zoom para a nova grelha. As vírgulas também servem de separadores.

Se algo não bater certo, nada muda e a barra de estado indica o motivo, por exemplo "Grelhas numeradas: indique um espaçamento entre cada par de linhas (4)." Outras verificações: os espaçamentos têm de ser milímetros positivos, as etiquetas têm de ser diferentes, e pode haver no máximo 60 linhas em cada sentido.

:::note
As barras mantêm as suas coordenadas quando as grelhas se movem. Se alterar um espaçamento depois de colocar aço, o aço fica onde estava e deixa de estar na grelha. Altere primeiro a grelha, ou mova as barras editando as coordenadas das suas extremidades.
:::

## Definir os níveis

1. Abra {{ui:Níveis}} no painel {{ui:Modelo}}.
2. Cada linha tem um nome de nível e a sua cota em milímetros. Edite-os como quiser.
3. Escolha {{ui:Adicionar um nível}} para outra linha. Chama-se "Nível 3" (e assim por diante) e fica colocado 4000 mm acima do nível mais alto; altere ambos se precisar.
4. Para remover um nível, clique no botão × no fim da sua linha.
5. Escolha {{ui:Aplicar os níveis}}.

Nada muda até escolher {{ui:Aplicar os níveis}}. Os níveis são ordenados por cota quando são aplicados. Cada nível precisa de um nome, dois níveis não podem partilhar um nome, e tem de manter pelo menos um nível.

Os níveis podem estar abaixo de zero (uma cave em `-3500`) e não precisam de estar uniformemente espaçados.

## Como são usados os níveis

- Um pilar colocado num nível sobe até ao nível seguinte, ou até ao nível que escolher em {{ui:Até}}.
- As vigas e as chapas são colocadas entre duas interseções, no nível em que clicar.
- As sapatas são colocadas com o topo no nível em que clicar.
- {{ui:Planta}} olha para baixo, um nível de cada vez.
- A exportação IFC cria um piso de edifício por nível.

## Anular

As alterações de grelha e de nível são edições como as restantes: {{key:Mod+Z}} repõe a grelha anterior.

## Seguinte

[Colocar pilares, vigas e contraventamentos](topic:place-members)
