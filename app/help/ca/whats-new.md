---
title: Novetats de la versió 0.7
summary: Comprovacions de disseny de perfils en I d'acer amb combinacions de càrregues de l'ASCE 7 o de l'EN 1990 i comprovacions de barres segons l'AISC 360 o l'EN 1993-1-1, exportació USD del model d'acer, una eina d'assistent per a USD, una cinta d'acer amb botons grans i petits, taulers que es recullen i diàlegs que es poden moure.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.7, versió, funcions noves, comprovacions de disseny, disseny d'acer, aprofitament, utilització, combinacions de càrregues, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocodi, Annex Nacional, sobrecàrrega de coberta, límit de fletxa, usd, usda, usdc, usdz, openusd, assistent, mcp, cinta d'acer, cinta, botó dividit, unitats, compacta, taulers, diàlegs, portuguès
from: 17d1e0bb
---

Això és el que ha canviat a DetailCraft 0.7, respecte de la 0.6. L'anàlisi de pòrtics de la 0.6 ara té un segon pas: la comprovació de les barres d'acer segons un codi de disseny.

## Novetats

### Unions a inglet (0.7.1)

- **Dos perfils en I que es troben en angle**, com un genoll de pòrtic o una carena: seleccioneu-los tots dos, trieu {{ui:Inglet}} al menú {{ui:Més}} del grup {{ui:Connecta}}, i tots dos extrems es tallen al pla que divideix l'angle. Les plaques d'extrem cargolades entre si i els rigiditzadors de l'ànima són caselles per marcar al nou diàleg d'Inglet, els camps del qual, numerats, coincideixen amb un dibuix de la vostra unió que es fa mentre escriviu. L'inglet segueix les barres quan es mouen, i es reflecteix als plànols, als fitxers NC (talls oblics), a l'IFC i a la llista de materials. Vegeu [Unions a inglet](topic:mitres).

### Comprovacions de disseny

- **Combinacions de càrregues del codi.** A la pestanya {{ui:Anàlisi}}, el nou bloc {{ui:Comprovacions de disseny}} té un {{ui:Codi de disseny}}: ASCE 7 + AISC 360 (EUA, LRFD) o EN 1990 + EN 1993-1-1 (Eurocodi). Doneu a cada cas de càrrega el seu tipus (permanent, sobrecàrrega d'ús, la nova sobrecàrrega de coberta, neu, vent, sísmica), premeu {{ui:Fes les combinacions}}, i DetailCraft escriu les combinacions de resistència i de servei del codi amb els vostres casos. Les combinacions que heu escrit vosaltres es conserven. Vegeu [Fer les combinacions](topic:design-checks#make-the-combinations).
- **Valors de l'Annex Nacional.** Per a l'Eurocodi, els factors comencen amb els valors recomanats; {{ui:Valors de l'Annex Nacional}} us deixa escriure els del vostre país, i es desen al model. Vegeu [Fer les combinacions](topic:design-checks#make-the-combinations).
- **Comprova les barres.** {{ui:Comprova les barres}} comprova cada perfil en I d'acer per a tracció, compressió amb vinclament, flexió amb vinclament lateral-torsional, tallant, flexió amb esforç axial i fletxa segons el {{ui:Límit de fletxa}} que definiu. La taula mostra l'aprofitament de cada barra, la comprovació que governa i la seva combinació, i les barres es pinten al model (blau, verd, ocre, vermell, gris per a les no comprovades). Vegeu [Comprova les barres](topic:design-checks#check-the-members).
- **A l'informe.** {{ui:Informe (PDF)}} i {{ui:Informe (CSV)}} hi afegeixen les edicions dels codis, la configuració, l'aprofitament per barra i cada clàusula usada. Vegeu [L'informe](topic:design-checks#the-report).
- **Una ajuda fins que un enginyer l'hagi revisat.** Usa només forces de primer ordre. Els tubs, els angles, els perfils de canal, les formes soldades i les peces esveltes o de classe 4 apareixen com a "no comprovat", amb el motiu; la torsió, les connexions i el formigó no es comproven. Vegeu [Què no es comprova](topic:design-checks#what-is-not-checked).

### USD

- **Exporta el model d'acer com a USD.** {{ui:USD}} al grup {{ui:Sortida}} escriu el model com a {{ui:Text (.usda)}}, {{ui:Binari (.usdc)}} o {{ui:Paquet (.usdz)}} per a programes de renderització i muntatge d'escenes: cada conjunt conté les seves peces, cada peça és la seva secció al llarg de la longitud amb els retalls tallats, i cada una porta la seva marca de peça, perfil, qualitat, longitud i pes. Els forats dels cargols, els cargols, les soldadures i les sabates no hi són a les malles USD. Vegeu [Exporta el model d'acer com a USD](topic:usd).

### Assistents d'IA

- **USD per a assistents.** El vostre propi assistent, connectat mitjançant CadCraft Studio, pot exportar el model com a USD (`usd_export`), i a Studio pot escriure'l en una carpeta que hàgiu autoritzat. Vegeu [Què pot demanar un assistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Canviat

- **La cinta d'acer** té botons grans i petits: una {{ui:Biga}} gran al costat de {{ui:Pilar}}, {{ui:Reforç diagonal}} i {{ui:Placa}} petits a {{ui:Modelatge}} › {{ui:Barres}}; unes {{ui:Plaques d'extrem}} grans a {{ui:Detallat}} › {{ui:Connexions}}, amb {{ui:Empalmament}} i {{ui:Cartela}} compartint un botó dividit; una {{ui:Enganxa}} gran a {{ui:Edita}} › {{ui:Porta-retalls}}, amb {{ui:Enganxa al mateix lloc}} i {{ui:Duplica}} darrere de la fletxa del grup. {{ui:Fabricació}} › {{ui:Intercanvi}} té {{ui:Exporta USD}} al costat d'IFC. Els altres estils de menú es veuen com abans. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse#the-three-styles).
- [Analitza el pòrtic](topic:frame-analysis) ara remet a les comprovacions de disseny, i les seves combinacions es poden fer segons el codi.

## A totes les aplicacions

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a cada cosa: longitud, àrea, volum, angle i pendent, amb les mides exactes que donen les definicions de les unitats (el peu de l'agrimensura dels EUA és una unitat pròpia). Desactiveu les unitats que mai no useu i sortiran de les llistes; marqueu-ne una amb una estrella i el treball nou començarà en ella. Un fitxer conserva sempre la seva pròpia unitat. Els quadres propis de DetailCraft encara no segueixen les llistes: les seves longituds s'escriuen encara en mil·límetres. Vegeu [Unitats, valors escrits i llistes d'unitats](common:unit-lists).
- **Una disposició més densa i taulers que es recullen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada tauler lateral té una barra de títol prima: arrossegueu-la per acoblar o deixar flotant el tauler, deixeu-la sobre la barra d'un altre tauler per compartir un mateix marc com a pestanyes, fixeu-la perquè es amagui cap a la vora, o amagueu-la i torneu-la a treure des de la vora. Vegeu [Organitzeu els taulers](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es poden moure.** Arrossegueu un diàleg per la barra de títol, fora del camí del dibuix; torna on l'heu deixat. Feu doble clic a la barra de títol per tornar-lo a centrar. Vegeu [Moure un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per a assistents d'IA.** Deu peticions resoltes per al vostre propi assistent (ordenar un dibuix, traçar un joc, comprovar plànols, fer preguntes a un model, totalitzar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida pels nostres tests. Les aplicacions no contenen IA. Vegeu [Receptes per a assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les aplicacions, com a esborranys que encara no ha revisat un parlant natiu. Els temes d'ajuda són en anglès.
- **CadCraft Studio** explica per què ha fallat una comprovació d'actualització (encara no hi ha fitxer per al vostre sistema, no hi ha xarxa, una signatura incorrecta), en lloc de només "Fet", i deixa de tornar a mostrar una targeta de novetats que heu tancat fins que hi hagi una versió més nova.

## Encara no hi és en aquesta versió

- **La 0.7 no està signada digitalment.** La signatura, i el paquet de la Microsoft Store, es van traslladar a la 0.8 perquè la validació del certificat encara no ha arribat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa igualment}}. En un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha versió per a iPad ni per a iPhone.
- Les llistes d'angle i de pendent de {{ui:Unitats}} es desen, però cap quadre encara les llegeix.
- **Les comprovacions de disseny encara no les ha revisat un enginyer.** Els nostres tests les comparen amb valors de taules impreses i amb fórmules resoltes a mà, però encara no amb els exemples resolts d'una guia de disseny. Fins a la revisió, són una ajuda: comproveu a mà les barres que importin.
- Les comprovacions de disseny usen forces de primer ordre (sense efectes de segon ordre) i només comproven perfils en I. Encara no hi són: tubs, angles, perfils de canal, formes soldades, peces esveltes (AISC) o de classe 4 (Eurocodi) a flexió, torsió, vinclament per tallant junt amb flexió, connexions, fatiga, foc, detallat sísmic i formigó. Una peça esvelta a compressió deixa fora les comprovacions de compressió, i la barra apareix com a "passa, comprovada en part".
- L'anàlisi de pòrtics encara és de primer ordre i lineal, i encara no l'ha provada un enginyer en una obra real.
- Els forats dels cargols, els cargols, les soldadures i les sabates no hi són a l'exportació USD.

Tot la resta és a [Què encara no està implementat](topic:not-built-yet).
