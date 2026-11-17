---
title: Unións a inglete
summary: Unir dous elementos de perfil en I que se encontran nun ángulo: os dous extremos cortados no plano que divide o ángulo, con placas de extremo, parafusos e rigidizadores se os quere.
keywords: inglete, unión a inglete, xeonllo, cartela, pórtico, cumieira, esquina, corte en ángulo, corte oblicuo, placa de extremo, placa de extremo atornillada, rigidizador, unir
from: cd8380d4
---

Un inglete une dous elementos de perfil en I cuxos extremos se encontran nun ángulo, como o xeonllo dun pórtico, unha cumieira, ou dúas vigas que dobran unha esquina en planta. DetailCraft corta os dous extremos no plano que divide o ángulo entre eles, de xeito que as dúas caras cortadas coinciden. Se o quere, engade unha placa de extremo a cada extremo cortado, atornilla as dúas placas entre si e pon un par de rigidizadores de alma en cada elemento.

## Onde funciona

- Dous **perfís en I** (IPE, HEA, HEB, W e similares) cuxos **extremos se encontran no mesmo nó**. Calquera dos elementos pode estar debuxado en calquera dirección.
- O ángulo entre os elementos debe ser de polo menos 15°. Os elementos en liña non se admiten: use un [empalme](topic:splices).
- O corte simple (sen placas) funciona calquera que sexa a maneira en que se encontran os elementos. As **placas de extremo** necesitan que os dous elementos se encontren no plano das súas almas, como nun xeonllo de pórtico ou nunha cumieira. Dúas vigas que dobran unha esquina en planta encóntranse no plano das súas alas, así que só obteñen o corte simple.
- Pódense unir elementos de tamaños distintos, pero con aviso: as súas caras cortadas non coinciden.

## Engadir un inglete

1. Seleccione os dous elementos: faga clic nun, logo {{key:Shift}}+clic no outro.
2. Escolla {{ui:Mitre}} no menú {{ui:More}} do grupo {{ui:Connect}}. Ábrese o diálogo {{ui:Mitre dialog with preview}}.
3. Defina os campos numerados. O debuxo ao lado fíxese cos seus números a medida que escribe, e os seus círculos numerados mostran o que define cada campo.
4. Escolla {{ui:Add the mitre}}. Se seleccionou máis de dous elementos, cada unión libre entre eles recibe o mesmo inglete.

Para cambiar un inglete máis tarde, seleccione un (faga clic nunha das súas placas) e escolla {{ui:Mitre dialog with preview}} no panel da dereita, ou cambie os seus axustes aí directamente. Un corte simple non ten placas nas que facer clic: seleccione os seus dous elementos e escolla de novo {{ui:Mitre}}, e o diálogo ábrese sobre ese inglete. {{ui:Apply to similar (n)}} copia o inglete a cada unión libre entre elementos dos mesmos dous perfís co mesmo ángulo.

## Os campos numerados (mm)

| Nº | Axuste | Predeterminado | Función |
|---|---|---|---|
| 1 | Separación entre as placas (ou os extremos cortados) | 0 | Separación libre na unión. Cada lado conserva a metade |
| 2 | Placas de extremo, espesor da placa | activado, 20 | Unha placa de extremo soldada por todo o contorno de cada extremo cortado. Desmarque para un corte simple |
| 3 | Filas de parafusos, paso entre filas, gálibo, fila exterior | 4, 0, 0, desactivado | Paso 0 reparte as filas por igual entre as alas. Gálibo 0 = a metade da largura da placa, como mínimo 2,4 × o furo. A fila exterior vai na extensión da placa, máis aló da ala exterior |
| 4 | Placa máis aló da ala exterior | 0 | Ata onde chegan as placas máis aló da ala exterior, ao longo do corte |
| 5 | Placa máis aló da ala interior | 0 | O mesmo para o lado interior |
| 6 | Rigidizadores de alma, distancia máis aló do corte | desactivado, 50 | Un par en cada elemento, a ambos os lados da alma, perpendicular ao elemento, a esta distancia máis aló do extremo oposto do seu corte |
| 7 | Espesor do rigidizador | 10 | |

Baixo {{ui:Bolts}}: diámetro do parafuso, furo, calidade e marxe de lonxitude (20, 22, A325, 30), como nas placas de extremo. Baixo {{ui:Plates and welds}}: anchura da placa (0 = a anchura da ala), tamaño da soldadura de ángulo (8) e material da placa (A36).

## Que obtén

- **Os cortes.** O extremo de cada elemento córtase no seu plano. A súa lonxitude en listas, debuxos e ficheiros NC é a **lonxitude total**, desde o seu extremo recto ata o punto máis afastado do corte.
- **As placas** pertencen ao seu propio elemento: o conxunto de cada elemento é o elemento, a súa placa de extremo e os seus rigidizadores. Os parafusos son parafusos de obra da unión: a lista de materiais cóntaos unha vez, e o debuxo do conxunto de cada elemento lístaos como parafusos soltos.
- **Os debuxos** mostran os extremos inclinados e as placas; o plano de taller dun elemento con inglete indica o ángulo de cada corte respecto á escuadra.
- **Os ficheiros NC** (DSTV) levan os ángulos de corte oblicuo na cabeceira, como pide a norma, e contornos que seguen o corte. Revíseos no visor NC do seu taller antes de cortar, como con calquera ficheiro NC.
- **IFC** recorta a extrusión de cada elemento polo seu plano de corte, para que outros programas mostren o corte real.
- **Marcas:** un elemento con inglete é unha peza distinta dun elemento de corte recto da mesma lonxitude. Dous elementos cos mesmos cortes comparten marca, como fan os dous cabrios dunha cumieira.

## Convén saber

- O inglete segue vivo. Mova ou redimensione calquera dos elementos e o corte, as placas e os parafusos seguen. Elimine un dos elementos e o inglete desaparece, e o extremo do outro elemento volve ser recto.
- Os avisos usan os mesmos mínimos de EN 1993-1-8 que as outras unións (distancia ao extremo e ao bordo 1,2 × o furo, paso 2,2 × o furo, gálibo 2,4 × o furo), e ademais filas de parafusos demasiado próximas a unha ala, placas máis estreitas que as alas e rigidizadores sen espazo.
- Os valores son puntos de partida, non un deseño. DetailCraft non comproba a resistencia da unión, e non fai cartela, nin inglete soldado cunha soldadura a tope, nin rigidizadores alineados coas alas do outro elemento.
