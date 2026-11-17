---
title: Solución de problemas
summary: Que significan as mensaxes de DetailCraft e que facer, desde unha vista 3D que falta ata unións que non se poden construír.
keywords: problema, erro, non funciona, axuda, arranxar, mensaxe, rexeitado, webgl, en branco, aviso, non se pode, incidencia
from: f8c3b2b1
---

A maioría das negativas se explican na barra de estado, na parte inferior da pantalla, ou na lapela {{ui:Problemas}}. Lea primeiro esas. As mensaxes seguintes se citan tal como as mostra DetailCraft.

## Falta a vista 3D

**"Este navegador non puido iniciar os gráficos 3D (WebGL). O modelo, os informes e as exportacións seguen funcionando."**

O navegador non puido iniciar WebGL, a tecnoloxía de gráficos 3D con que DetailCraft debuxa.

1. Actualice o navegador á súa última versión.
2. Active a aceleración por hardware e reinicie o navegador (ver abaixo).
3. Actualice o controlador gráfico, ou probe outro navegador. Os escritorios remotos e as máquinas virtuais adoitan non ter WebGL.
4. Mentres tanto pode seguir traballando: coloque elementos co formulario {{ui:Engadir pola cuadrícula}}, lea os informes e exporte. Só o clic na vista precisa WebGL.

:::chromium
Para activar a aceleración por hardware, abra **Configuración, Sistema** e active **Usar a aceleración gráfica cando estea dispoñible**; logo reinicie.
:::

:::firefox
Para activar a aceleración por hardware, abra **Configuración, Xeral, Rendemento**, desmarque **Usar a configuración de rendemento recomendada** e marque **Usar a aceleración por hardware cando estea dispoñible**. Reinicie Firefox.
:::

:::safari
Safari ten WebGL activado por defecto. Actualice macOS se a vista seguir sen iniciarse, e comprobe que ningunha extensión o bloquea.
:::

Máis en [Navegadores e ordenadores](common:browsers).

## Non pasa nada ao facer clic na vista

- **Ningunha intersección preto do clic.** As ferramentas de colocación só se enganchan ás interseccións da cuadrícula. Un clic lonxe de todos os puntos non fai nada. Achéguese ata que o punto se ilumine.
- **A ferramenta é {{ui:Seleccionar}} e fixo clic nun espazo baleiro.** Iso borra a selección.
- **Arrastrou.** Unha pulsación e unha liberación separadas por máis de uns poucos píxeles é un arrastre: xira ou desprazan a vista.
- **A peza está cortada.** En {{ui:Planta}} e {{ui:Alzado}}, o aceiro fóra do corte está oculto e non se pode premer. Cambie a {{ui:3D}}.
- **A intersección está no nivel equivocado.** En {{ui:3D}}, as interseccións de varios niveis poden solaparse na pantalla; o clic toma a máis próxima. Use {{ui:Planta}} ou {{ui:Alzado}}.

## Mensaxes ao colocar

| Mensaxe | Que facer |
|---|---|
| Non hai nivel por enriba do Nivel 2 ao que chegue o piar. Engada primeiro un nivel. | Engada un nivel en {{ui:Niveis}}, ou faga clic nun nivel inferior |
| Escolla outra intersección para o outro extremo. | Fixo clic no mesmo punto dúas veces |
| Os dous extremos son o mesmo punto. | En {{ui:Engadir pola cuadrícula}}, os puntos "From" e "To" son os mesmos |
| Engada liñas da cuadrícula á esquerda para colocar elementos. | O modelo non ten liñas de cuadrícula nunha dirección |
| Perfil descoñecido "…" | O perfil non está no catálogo nin nos perfís personalizados do modelo. Escolla un da lista |
| Escriba un número. | Un campo numérico quedou baleiro ou ten texto |

## As unións non se constrúen

### "Esta viga non remata nunha liña de piar."

As placas de extremo precisan que o extremo da viga estea exactamente sobre a liña dun piar vertical, entre a súa base e a súa cima (con 1 mm de tolerancia). Comprobe os {{ui:Extremos (x, y, z mm)}} da viga e a posición do piar.

### "Esta viga entra na alma dun piar ou vai en diagonal"

Ou en {{ui:Problemas}}: "As vigas que entran na alma dun piar aínda non se constrúen: xire o piar 90° ou use outra unión."

A viga entra na alma do piar. Seleccione o piar e axuste {{ui:Rotación (°)}} a 90, e logo probe de novo. As uniones oblicuas aínda non se constrúen.

### "As placas de extremo só se constrúen en vigas horizontais (esta viga está inclinada)."

Os dous extremos da viga deben estar á mesma altura.

### "As placas de extremo necesitan a viga vertical (rotación 0)."

Volva axustar a {{ui:Rotación (°)}} da viga en 0.

### "As placas de extremo necesitan unha viga de perfil en I." / "As placas de extremo necesitan un piar de perfil en I."

Só os perfís en I (W, IPE, HEA, HEB ou un I personalizado) admiten placas de extremo.

### "O extremo da viga xa non está na liña do piar."

Moveu a viga ou o piar despois de engadir a unión. Devólvao á súa posición ou elimine a unión.

### "As uniones cortan este elemento ata quedar en nada."

As uniones dos dous extremos recortan o elemento máis do que mide, por exemplo unha viga moi curta entre dous piares profundos. Comprobe os extremos do elemento e o espesor da placa.

### "Non hai outras uniones como esta … sen unión."

{{ui:Similar}} copia só ás uniones co mesmo perfil de viga, o mesmo perfil de piar e o mesmo tipo de unión (viga contra unha ala) que aínda non teñan unión.

### "Os dous extremos xa teñen uniones." / "Este piar xa ten unha placa base."

Seleccione a unión existente para cambiala, ou elimínea antes.

## Avisos na lapela Problemas

Os avisos non impiden construír unha unión ou unha cimentación; piden que a comprobe. Os de bordo e espazamento usan os mínimos de EN 1993-1-8 Táboa 3.3 (bordo 1,2 × furo, paso 2,2 × furo, calibre 2,4 × furo). Se o seu proxecto usa outras regras, o aviso pode non aplicarse; DetailCraft non dimensiona uniones.

"un furo está fóra do extremo da peza" significa que a coordenada x dun furo é menor que 0 ou maior que a lonxitude de corte. Lembre que x se mide desde o inicio do corte, despois de que as uniones recorten a peza.

## As cimentacións rexéitanse

| Mensaxe | Que facer |
|---|---|
| O recubrimento non deixa espazo para barras nesta cimentación. | Faga a cimentación máis grande ou o recubrimento máis pequeno |
| A cimentación é demasiado pouco profunda para dúas capas de barras dentro do recubrimento. | Faga a cimentación máis profunda ou reduza o recubrimento |
| As barras de espera non caben dentro da cimentación con 75 mm de recubrimento. | Menos barras de espera, espazamento máis pequeno, ou unha cimentación máis grande |
| O espazamento das barras debe estar entre 50 e 1000 mm. | Escriba un espazamento dentro dese intervalo |
| A lonxitude debe estar entre 300 e 50000 mm. | As cimentacións teñen límites de tamaño: lonxitude e ancho de 300 a 50000, fondo de 150 a 10000 |

## Cuadrículas e niveis rexeitados

| Mensaxe | Que facer |
|---|---|
| Cuadrículas numeradas: indique un espazamento entre cada par de liñas (4). | Conte os intervalos: cinco liñas necesitan catro espazamentos |
| Cuadrículas con letras: os espazamentos deben ser milímetros positivos. | Nada de ceros, negativos ou texto |
| Cuadrículas numeradas: as etiquetas deben ser distintas. | Dúas liñas teñen a mesma etiqueta |
| Como máximo 60 liñas de cuadrícula en cada sentido. | Divida o modelo |
| Manteña polo menos un nivel. | Eliminou todas as filas de nivel |
| Cada nivel necesita un nome. / Dous niveis se chaman "…". | Dé a cada nivel un nome distinto |

## Non se pode abrir un ficheiro

| Mensaxe | Causa |
|---|---|
| DetailCraft abre os seus propios modelos (.detailcraft.json). A importación IFC aínda non está feita. | O ficheiro non é un ficheiro `.json` |
| Este non é un modelo de DetailCraft (non é JSON). | O ficheiro está danado ou é outro JSON |
| Este non é un modelo de DetailCraft. | Un ficheiro JSON doutro programa |
| Este modelo gardouno un DetailCraft máis recente (formato 2). | Ábrao no DetailCraft máis recente, que o gardou |
| Ese ficheiro é demasiado grande para ser un modelo de DetailCraft. | Máis de 50 MB |

Cando un ficheiro se abre con avisos como "2 elementos non eran válidos e quedaron excluídos.", o resto do modelo está ben. Non garde por riba do orixinal ata que comprobe o que quedou fóra.

## Exportacións

| Mensaxe | Causa |
|---|---|
| Non hai nada que exportar. | {{ui:IFC}} cun modelo baleiro |
| Non hai pezas de perfil en I nin placas para escribir ficheiros NC. | Só canles, cantoneiras ou tubos no modelo |
| Non escrito (por agora só perfís en I e placas): … | Esas marcas non son perfís en I nin placas; o resto escribiuse |
| Non hai cimentacións, así que non hai barras que listar. | {{ui:Dobrado}} sen cimentacións |
| … carácter(es) fóra da fonte do PDF impreso como "?". | O nome do modelo ou unha calidade ten caracteres que a fonte do PDF non ten |

{{ui:Debuxo de taller}} en gris: o modelo aínda non ten pezas.

## As descargas non aparecen

Cada gardado e cada exportación é unha descarga do navegador. Comprobe a lista de descargas do navegador. Se o navegador pregunta antes de descargar varios ficheiros, ou bloquea as descargas deste sitio, permítaas. En Safari, comprobe o botón de descargas da barra de ferramentas.

## As teclas non fan nada

- O cursor está nun campo de texto ou numérico: as teclas de ferramentas e {{key:Delete}} ignóranse aí para que poida escribir. Prema {{key:Tab}} ou faga clic na vista.
- Hai un diálogo aberto: péchao primeiro.
- O navegador ten o teclado (por exemplo, a barra de enderezos): faga clic dentro de DetailCraft.
- {{key:Ctrl+Shift+F}} usa Control mesmo nun Mac.

## Problemas sen conexión

O botón {{ui:Gardar para usar sen conexión}} da barra da aplicación indica en que estado está a copia sen conexión. Como funciona o gardado: [Traballo sen conexión](common:offline).

| O botón di | Que significa | Que facer |
|---|---|---|
| {{ui:Gardar para usar sen conexión}} | Aínda non hai copia sen conexión neste navegador | Escóllao estando en liña |
| Gardando 5 de 20 | O gardado está en curso | Agarde a {{ui:Listo sen conexión}}; deixe a pestana aberta |
| {{ui:Listo sen conexión}} | DetailCraft, a súa vista 3D, todas as exportacións e esta axuda funcionan sen conexión | Nada. Prema para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}} |
| {{ui:Non se puido gardar}} | Algúns ficheiros non se descargaron | Comprobe a conexión e prema para tentalo de novo |
| {{ui:Sen copia sen conexión}} | Esta xanela non pode gardar unha copia sen conexión: as xanelas privadas e algúns ordenadores xestionados bloquéano | Use unha xanela normal, ou traballe en liña |

Se está sen conexión e o botón non indica {{ui:Listo sen conexión}}, non recargue nin peche a pestana: o que xa se cargou segue funcionando. Garde o modelo con {{key:Mod+S}} e agarde a estar de novo en liña.

## Traballo sen gardar

Se o navegador pregunta se quere saír da páxina, DetailCraft ten cambios sen gardar. Escolla quedarse e logo prema {{key:Mod+S}}. DetailCraft non pode recuperar un modelo despois de pechar a pestana.

## Aínda sen solución

Anote o que fixo e a mensaxe exacta, e díganolo a través da [páxina de asistencia](https://getcadcraft.com/support).
