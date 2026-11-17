---
title: Escaleiras
summary: Colocar unha escaleira recta de aceiro a partir da súa altura, fondo e largura: dúas zancas e chanzos de placa, un conxunto soldado.
keywords: escaleira, escaleiras, escaleira de aceiro, escaleira recta, zanca, chanzo, contrahuella, fondo, bocel, tramo, ibc 1011, blondel
from: 62fa3845
---

Unha escaleira recta de aceiro: dúas zancas (perfís en U coas abas cara dentro, ou pletinas de canto) e un chanzo de placa en cada chanzo, soldados entre elas. DetailCraft calcula o número de contrahuellas a partir da altura, compróbaas cos límites do código de construción e fai da escaleira un único conxunto de taller.

## Colocar unha escaleira

1. Escolla {{ui:Escaleira}} no grupo {{ui:Colocar}}, ou prema {{key:S}}.
2. Axuste a escaleira á dereita: a **dirección de subida** (0° sobe ao longo de +x, 90° ao longo de +y), a **altura** (0 = ata o seguinte nivel), o **fondo**, a **largura libre** entre as zancas, a **contrahuella máis alta permitida**, a **zanca**, o **grosor da placa do chanzo**, o **bocel** e o material.
3. Prema nun cruzamento de cuadrícula: ese é o pé da primeira contrahuella, no eixo central da escaleira.

A barra de estado indica cantas contrahuellas fixo. Seleccione a escaleira (prema nunha zanca ou nun chanzo) para cambiar calquera dos seus axustes, a súa posición ou a súa fase. As propiedades mostran tamén as contrahuellas, os chanzos, o percorrido, a inclinación e 2 × contrahuella + fondo.

## Que calcula DetailCraft

- **Contrahuellas.** As mínimas que manteñen cada contrahuella igual ou por baixo da máxima permitida: unha altura de 3000 mm con 178 mm ou menos dá 17 contrahuellas de 176.5 mm. Hai un chanzo menos que contrahuellas (o piso superior é o último chanzo).
- **Chanzos.** Unha placa de fondo + bocel de profundidade (280 + 25 = PL6x305 por defecto) e tan longa como a largura libre, co seu cumio á altura de cada contrahuella, e o bordo dianteiro (o bocel) por diante da liña da contrahuella.
- **Zancas.** Á inclinación da escaleira, desde onde se atopan co piso inferior ata onde se atopan co superior, xusto por fóra da largura libre, co bordo superior 50 mm por riba da liña dos bocelos. A aba dun perfil en U mira cara dentro da escaleira; unha pletina como PL12x250 vai de canto.
- **Soldaduras.** Cada chanzo a ambas zancas. Os chanzos e a zanca dereita sóldanse á zanca esquerda, así que a escaleira recibe unha marca de conxunto (ST1) e o seu propio debuxo de conxunto; as zancas reciben marcas de peza st…, e os chanzos p….
- **Comprobacións.** Avisos cando unha contrahuella está fóra de 4 a 7 in. (102 a 178 mm) ou o fondo é menor de 11 in. (279 mm), os límites do IBC 2021 sección 1011.5.2; cando 2 × contrahuella + fondo está fóra de 600 a 650 mm (unha regra de comodidade habitual); e cando a zanca é demasiado pouco profunda para soportar os chanzos. Un perfil de zanca descoñecido impide construír a escaleira.

## Bo saber

- Mover, xirar, espellar, copiar, pegar, eliminar e as fases funcionan nunha escaleira como nunha barra. Un xiro xira a subida; un espello envíaa no sentido espellado.
- As zancas exportanse a IFC como IfcMember e os chanzos como IfcPlate; ambos van aos ficheiros NC e á lista de materiais. O control de interferencias deixa en paz as pezas propias da escaleira (están soldadas entre si).
- Esta escaleira simple é un tramo con chanzos de placa. Para descansos, pasamáns con balaustres, chanzos de chapa plegada ou de rexilla, un conxunto de regras que escolla, unha lista de cortes e os debuxos de furos das zancas, marque {{ui:Usar o xerador de escaleiras de aceiro}} na ferramenta Escaleira (ver Xerador de escaleiras de aceiro).
- As zancas córtanse a escuadra: os seus cortes de extremo contra os pisos non se fan.
- DetailCraft non deseña a escaleira: as zancas e os chanzos non se comprobán en resistencia nin en frecha.
