---
title: Explorar o marco de exemplo
summary: Abra o marco de dous váns integrado e use o para aprender o que fai DetailCraft, desde as marcas ata os ficheiros NC.
keywords: exemplo, mostra, demostración, marco, aprender, percorrido, probar
from: 5c5944dd
---

O marco de exemplo é un modelo pequeno e completo: aparece polo menos unha vez cada tipo de elemento que constrúe DetailCraft. É a maneira máis rápida de aprender a aplicación e de probar unha exportación antes de confiar nela.

## Abrilo

1. Escolla {{ui:Exemplo}} no grupo {{ui:Ficheiro}}.
2. Se o modelo actual ten cambios sen gardar, escolla {{ui:Gardar primeiro}} ou {{ui:Descartar cambios}}.
3. A barra de estado indica «Marco de exemplo: 6 piares con placas base, 4 vigas con placas de extremo, unha riostra, 7 zapatas con armadura».

O exemplo ábrese como un modelo novo chamado «Marco de exemplo». Non cambia outra cousa, e non hai nada que desfacer.

## Que contén

- **Cuadrículas** 1, 2, 3 a 6000 mm e A, B a 7000 mm. **Niveis** Nivel 1 en 0 e Nivel 2 en 4000.
- **Seis piares**, W12x50, do Nivel 1 ao Nivel 2 en cada intersección, cada un sobre unha placa base de 25 mm con catro varas de ancoraxe.
- **Catro vigas**, W16x26, no Nivel 2 ao longo das liñas da cuadrícula A e B, coa cara superior do aceiro no nivel, cunha placa de extremo atornillada ao ras en ambos os extremos (oito en total).
- **Unha riostra**, HSS4x4x1/4, desde A/1 no Nivel 1 ata A/2 no Nivel 2.
- **Seis zapatas illadas**, 2000 x 2000 x 600, unha debaixo de cada piar, cunha malla inferior con ganchos en ambos os sentidos.
- **Unha zapata máis** xunto ao marco, 2400 x 1800 x 600, con seis barras de arranque con ganchos que sobresaen para un pedestal de formigón.

## Cousas para probar

1. Prema nunha viga. Lea a súa {{ui:Marca da peza}}, {{ui:Conxunto}}, {{ui:Lonxitude de corte}} e {{ui:Recorte}}: a lonxitude de corte é máis curta que o espazamento de cuadrícula de 6000 mm porque cada placa de extremo recorta a viga en metade do fondo do piar máis o grosor da placa.
2. Prema nun piar. Baixo {{ui:Buratos}} lista os buratos que as placas de extremo fixeron na súa aba («8 buratos de conexións»; os piares centrais teñen 16, un xogo en cada aba).
3. Na lista {{ui:Marcas de peza}} da esquerda, vexa que as catro vigas comparten unha marca: son a mesma peza de aceiro. Os piares de esquina tamén comparten unha marca, aínda que os seus buratos miran en sentidos opostos, porque un piar xirado de extremo a extremo é a mesma peza. Os piares centrais, cos buratos nas dúas abas, reciben outra marca.
4. Prema nunha placa de extremo (ou nun dos seus parafusos). O panel {{ui:Propiedades}} amosa a configuración da placa, do parafuso e da soldadura, os parafusos que fai (coa súa lonxitude calculada a partir do agarre) e os avisos de distancia ao bordo.
5. Abra a lapela {{ui:Lista de materiais}}. Pezas, conxuntos (unha viga cas súas dúas placas de extremo é un conxunto) e parafusos e varas de ancoraxe aparecen listados cos seus pesos. Debería ver seis marcas de peza: c1 (os dous piares centrais) e c2 (os catro piares de esquina), ambos W12x50 a 3975 mm; b1, catro vigas W16x26 a 5650 mm; br1, a riostra; p1, oito placas de extremo PL20x180; e p2, seis placas base PL25x400. Os elementos de unión son 64 parafusos 20 x 70 A325 e 24 varas de ancoraxe 20 x 575.
6. Abra a lapela {{ui:Cadro de dobrado}}. As seis zapatas idénticas comparten marcas de barra; a zapata do pedestal engade a súa.
7. Prema na riostra e mire o grupo {{ui:Saída}}: {{ui:Debuxo de taller}} aparece atenuado, porque ata agora os debuxos de taller só cobren perfís en I e placas.
8. Escolla {{ui:Ficheiros NC}}. O zip contén un ficheiro por cada marca de perfil en I e de placa; a barra de estado lista a marca da riostra como non escrita.
9. Escolla {{ui:IFC}} e abra o ficheiro en calquera visor IFC para comprobar como o le o seu outro software.

## Usar como punto de partida

O exemplo é un modelo corrente. Cámbieo, despois cambie o nome no campo {{ui:Nome}} e gárdeo co novo nome con {{key:Mod+S}}.
