---
title: Comprobar a exportación IFC contra o IDS dun cliente
summary: Cargue o ficheiro .ids que lle deron e vexa en Problemas cada peza exportada que non o cumpre, antes de enviar o IFC.
keywords: ids, especificación de entrega de información, buildingsmart, requisitos, entrega, comprobación, validación, control de calidade, exportación ifc, propiedade, material, adquisición
from: 50d0f785
---

## O que vai facer

Un IDS (Information Delivery Specification, unha norma de buildingSMART) é a lista do que debe conter un IFC. DetailCraft comproba o IFC que exportaría (o mesmo ficheiro que escribe {{ui:IFC}}) contra o IDS que lle deron, e lista cada peza que non cumpre.

## Pasos

1. Abra ou debuxe o seu modelo.
2. Prema en {{ui:Comprobar contra IDS…}} no grupo {{ui:Saída}} da barra de ferramentas.
3. Prema en {{ui:Cargar un ficheiro .ids…}} e escolla o ficheiro. Non se envía nada.
4. Lea o resultado: cada especificación con {{ui:Cumpre}} ou {{ui:Non cumpre}} e en cantos elementos se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) e prema nun fallo: o membro, conexión, escaleira ou zapata do que procede queda seleccionado e a vista achégase a el.

## O que debería ver

- Un aviso por cada elemento exportado e requisito que non cumpre, co nome da especificación, o que pide o IDS e o que ten a exportación.
- O informe da comprobación (en Problemas) comeza co IDS: o seu título, versión, autor e os conteos de cada especificación.

## Bo saber

- O IDS gárdase no ficheiro do modelo, polo que se comproba de novo ao abrir o modelo. Cargalo ou esquecelo é un paso que se pode desfacer.
- Cada cambio se comproba de novo un momento despois; nun modelo grande a comprobación espera un pouco máis entre execucións.
- Os GlobalId da exportación saen do nome do modelo e dos números de peza dentro de DetailCraft, así que se manteñen dunha comprobación á seguinte. Cambiar o nome do modelo dálle a cada elemento novos GlobalId.
- Os números compáranse en unidades SI (a exportación está en milímetros; as lonxitudes convértense primeiro a metros).

- Os patróns do IDS léense como o valor completo. Un `^` ao principio e un `$` ao final tómanse tamén como "o valor completo", como a maioría dos ficheiros IDS queren dicir.

## Seguinte

- [Exportar IFC](topic:ifc-export)
