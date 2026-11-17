---
title: Colocar placas e engadir perfís personalizados
summary: Colocar placas soltas por espesor e largura, e definir as súas propias seccións en I, canle, cantoneira, tubo ou pletina.
keywords: placa, plana, perfil personalizado, perfil de usuario, paramétrico, sección, forma, sección transversal, pl
from: c24c3b51
---

## Colocar unha placa

Unha placa colócase como unha viga: vai entre dúas intersección, coa súa largura transversal e o seu espesor cara arriba.

1. Escolla {{ui:Placa}} no grupo {{ui:Colocar}}, ou prema {{key:P}}.
2. No panel {{ui:Propiedades}}, poña {{ui:Espesor (mm)}} e {{ui:Largura (mm)}}. O valor por defecto é 20 x 200 en A36.
3. Poña {{ui:Material}} e {{ui:Rotación (°)}} se fai falta. Unha rotación de 90 pon a placa de canto.
4. Faga clic en dúas intersección, ou use o formulario {{ui:Engadir pola cuadrícula}}.

O nome de perfil da placa escríbese `PL<thickness>x<width>`, por exemplo PL20x200. A súa lonxitude é a distancia entre os dous puntos.

Para cambiar o tamaño dunha placa colocada, selecciónea e cambie {{ui:Espesor (mm)}} ou {{ui:Largura (mm)}}.

As placas que coloca son pezas propias (marca p, conxunto P). As placas de testa e as placas de base que fan as conexións tamén son placas, pero cámbiaas a través da súa conexión; ver [Placas de testa](topic:end-plates).

## Engadir un perfil personalizado

Cando a sección que necesita non está no catálogo, fágaa a partir das súas dimensións. Un perfil personalizado pertence ao modelo e gárdase con el. Para usalo en todos os modelos novos, manteñao en {{ui:Os meus perfís}}, descrito en «Gardar un perfil para os modelos novos» máis abaixo.

1. En {{ui:Modelo}} no panel da esquerda, abra {{ui:Perfil personalizado}}.
2. Escriba un {{ui:Nome}}, por exemplo `W8x18-custom` ou `RHS 120x80x5`. Non pode ser un nome do catálogo nin parecer un nome de placa.
3. Escolla unha {{ui:Forma}}: {{ui:Perfil en I}}, {{ui:Canle}}, {{ui:Cantoneira de abas iguais}}, {{ui:Tubo rectangular}}, {{ui:Tubo redondo}} ou {{ui:Pletina}}.
4. Complete as dimensións que aparecen, todas en milímetros:

| Forma | Dimensións |
|---|---|
| Perfil en I | Canto d, largura de ala bf, alma tw, ala tf, raio de acordo r (pode ser 0) |
| Canle | Canto d, largura de ala bf, alma tw, ala tf (esquinas rectas) |
| Cantoneira de abas iguais | Largura b (cada aba), espesor t |
| Tubo rectangular | Altura h, largura b, espesor t (raio exterior da esquina 2t) |
| Tubo redondo | Diámetro D, espesor t |
| Pletina | Largura b, espesor t |

5. Deixe marcada a caixa {{ui:Gardar en Os meus perfís}} para tela en todos os modelos novos (ver abaixo), ou desmárquea para mantela só neste modelo.
6. Escolla {{ui:Engadir perfil}}.

A barra de estado di «Perfil "…" engadido; está en todas as listas de perfís baixo Personalizado.» Aparece na lista debaixo do formulario e ao final de todas as listas de {{ui:Perfil}}.

DetailCraft comproba que a forma poida existir. Verá mensaxes como «A alma e as alas non caben dentro do canto e da largura.», «O raio de acordo é demasiado grande para a ala.» ou «A parede é demasiado grosa.» Corrixa os números e escolla de novo {{ui:Engadir perfil}}.

### Que obtén un perfil personalizado

- Masa por metro a partir da superficie × 7850 kg/m³ (os tamaños do catálogo usan o peso publicado).
- Os perfís en I personalizados admiten buratos, recortes, placas de testa, ficheiros NC e debuxos de taller, como os perfís en I do catálogo.
- As pletinas personalizadas comportanse como placas.
- As canles e os tubos personalizados admiten buratos; as cantoneiras e os tubos redondos aínda non.

Unha vez engadido, non se pode editar nin quitar un perfil personalizado dun modelo (use {{key:Mod+Z}} de inmediato se cometeu un erro). Dea a un corrixido un novo nome.

## Gardar un perfil para os modelos novos

{{ui:Os meus perfís}}, debaixo do formulario, é a súa propia lista de perfís personalizados. Gárdase neste navegador, neste ordenador, e non nun ficheiro de modelo nin na súa conta.

- Un perfil engadido con {{ui:Gardar en Os meus perfís}} marcado vai á lista. Cada modelo novo, incluído o que DetailCraft abre ao iniciarse, comeza con todos eles nas súas listas de perfís.
- Un perfil que xa está nun modelo pero non na lista ten ao lado un botón {{ui:Gardar}}.
- Nun modelo que non ten un dos seus perfís (un ficheiro antigo, por exemplo), escolla {{ui:Usar aquí}} para engadilo.
- {{ui:Quitar}} saca un perfil da lista. Os modelos que xa o usan conservan a súa propia copia.
- Un modelo que abre conserva os perfís gardados no seu ficheiro. Abrir un ficheiro nunca cambia a súa lista.
- Un nome que xa está na lista con dimensións distintas non se admite: dea ao novo outro nome.
- Borrar os datos do sitio do navegador, ou usar outro navegador ou ordenador, comeza cunha lista baleira. Unha xanela privada non a pode conservar; a aplicación así o indica.
