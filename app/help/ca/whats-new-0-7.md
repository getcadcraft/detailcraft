---
title: Novetats de la 0.7 (anteriors)
summary: Comprovacions de disseny de perfils en I d'acer amb combinacions de càrregues de l'ASCE 7 o de l'EN 1990 i comprovacions de barres segons l'AISC 360 o l'EN 1993-1-1, exportació USD del model d'acer, una eina d'assistent per a USD, una cinta d'acer amb botons grans i petits, taulers que es recullen i diàlegs que es mouen.
keywords: novetats 0.7, versió anterior, notes de la versió, registre de canvis, canvis, 0.7, versió, funcions noves, comprovacions de disseny, disseny d'acer, aprofitament, utilització, combinacions de càrregues, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocodi, Annex Nacional, sobrecàrrega d'ús de coberta, límit de fletxa, usd, usda, usdc, usdz, openusd, assistent, mcp, cinta d'acer, cinta, botó dividit, unitats, compacte, taulers, diàlegs, portuguès
from: 54a7a8f0
---

Això és el que ha canviat a DetailCraft 0.7, en comparació amb la 0.6. L'anàlisi del pòrtic de la 0.6 ara té un segon pas: comprovar les barres d'acer segons un codi de disseny.

## Novetats

### Unions a inglet (0.7.1)

- **Dos perfils en I que es troben en un angle**, com un genoll de pòrtic o una carena: seleccioneu-los tots dos, trieu {{ui:Inglet}} al menú {{ui:Més}} del grup {{ui:Connecta}}, i els dos extrems es tallen en el pla que divideix l'angle per la meitat. Les plaques d'extrem cargolades entre si i els rigiditzadors d'ànima són caselles de verificació al nou diàleg d'inglet, els camps numerats del qual coincideixen amb un dibuix de la vostra unió que es fa mentre escriviu. L'inglet segueix les barres quan es mouen, i es propaga als plànols, als fitxers NC (talls oblics), a l'IFC i a la llista de materials. Vegeu [Unions a inglet](topic:mitres).

### Comprovacions de disseny

- **Combinacions de càrregues segons el codi.** A la pestanya {{ui:Anàlisi}}, el bloc nou {{ui:Comprovacions de disseny}} té un {{ui:Codi de disseny}}: ASCE 7 + AISC 360 (EUA, LRFD) o EN 1990 + EN 1993-1-1 (Eurocodi). Assigneu a cada cas de càrrega el seu tipus (permanent, sobrecàrrega d'ús, la nova sobrecàrrega d'ús de coberta, neu, vent, sisme), premeu {{ui:Fes les combinacions}}, i DetailCraft escriu les combinacions de resistència i de servei del codi per als vostres casos. Les combinacions que heu escrit vosaltres es mantenen. Vegeu [Fes les combinacions](topic:design-checks#make-the-combinations).
- **Valors de l'Annex Nacional.** Per a l'Eurocodi, els factors comencen amb els valors recomanats; {{ui:Valors de l'Annex Nacional}} permet escriure els del vostre país, i es desen al model. Vegeu [Fes les combinacions](topic:design-checks#make-the-combinations).
- **Comprova les barres.** {{ui:Comprova les barres}} comprova cada perfil en I d'acer a tracció, a compressió amb vinclament, a flexió amb vinclament lateral-torsional, a tallant, a flexió amb força axial i a fletxa segons el {{ui:Límit de fletxa}} que hàgiu fixat. La taula mostra l'aprofitament de cada barra, la comprovació que governa i la seva combinació, i les barres es pinten al model (blau, verd, ocre, vermell, i gris per a les no comprovades). Vegeu [Comprova les barres](topic:design-checks#check-the-members).
- **A l'informe.** {{ui:Informe (PDF)}} i {{ui:Informe (CSV)}} afegeixen les edicions dels codis, la configuració, l'aprofitament per barra i cada clàusula utilitzada. Vegeu [L'informe](topic:design-checks#the-report).
- **Una ajuda fins que un enginyer la revisi.** Només fa servir forces de primer ordre. Els tubs, els angles, els perfils en U, les formes soldades i les peces esveltes o de classe 4 apareixen com a "no comprovat", amb el motiu; la torsió, les connexions i el formigó no es comproven. Vegeu [Què no es comprova](topic:design-checks#what-is-not-checked).

### USD

- **Exporta el model d'acer en USD.** {{ui:USD}} al grup {{ui:Sortida}} escriu el model com a {{ui:Text (.usda)}}, {{ui:Binari (.usdc)}} o {{ui:Paquet (.usdz)}} per a programes de renderitzat i muntatge d'escenes: cada conjunt conté les seves peces, cada peça és el seu perfil recorregut al llarg de la seva longitud amb les retallades fetes, i cada peça porta la seva marca, perfil, qualitat, longitud i pes. Els forats de cargols, els cargols, les soldadures i les sabates no són a les malles USD. Vegeu [Exporta el model d'acer en USD](topic:usd).

### Assistents d'IA

- **USD per als assistents.** El vostre assistent propi, connectat a través de CadCraft Studio, pot exportar el model en USD (`usd_export`), i a Studio escriure'l en una carpeta que hàgiu permès. Vegeu [Què pot demanar un assistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Canvis

- **La cinta d'acer** té botons grans i petits: un {{ui:Biga}} gran al costat de {{ui:Pilar}}, {{ui:Reforç diagonal}} i {{ui:Placa}} petits a {{ui:Modelatge}} › {{ui:Barres}}; {{ui:Plaques d'extrem}} gran a {{ui:Detallat}} › {{ui:Connexions}}, amb {{ui:Empalmament}} i {{ui:Cartela}} compartint un botó dividit; {{ui:Enganxa}} gran a {{ui:Edita}} › {{ui:Porta-retalls}}, amb {{ui:Enganxa al mateix lloc}} i {{ui:Duplica}} darrere de la fletxa del grup. {{ui:Fabricació}} › {{ui:Intercanvi}} té {{ui:Exporta USD}} al costat de l'IFC. Els altres estils de menú es veuen com abans. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse#the-three-styles).
- [Analitza el pòrtic](topic:frame-analysis) ara remet a les comprovacions de disseny, i les seves combinacions es poden fer segons el codi.

## En totes les apps

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a la longitud, l'àrea, el volum, l'angle i el pendent, amb les mides exactes que donen les definicions de les unitats (el peu d'agrimensura dels EUA és una unitat pròpia). Desactiveu les unitats que no feu servir mai i desapareixen de les llistes; marqueu-ne una amb una estrella i el treball nou comença amb ella. Un fitxer sempre conserva la seva pròpia unitat. Les caselles pròpies de DetailCraft encara no segueixen les llistes: les seves longituds s'escriuen encara en mil·límetres. Vegeu [Unitats, valors escrits i llistes d'unitats](common:unit-lists).
- **Disposició més densa i taulers que es recullen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada tauler lateral té una barra de títol prima: arrossegueu-lo per acoblar-lo o deixar-lo flotant, deixeu-lo sobre la barra d'un altre tauler per compartir un marc com a pestanyes, fixeu-lo perquè es desplaci cap a la vora, o amagueu-lo i torneu-lo a treure des de la vora. Vegeu [Organitza els taulers](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossegueu un diàleg per la barra de títol fora del camí del dibuix; torna al lloc on l'heu deixat. Feu doble clic a la barra de títol per centrar-lo de nou. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per a assistents d'IA.** Deu peticions resoltes per al vostre assistent (ordenar un dibuix, traçar un joc de fulls, revisar dibuixos, fer preguntes a un model, totalitzar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida per les nostres proves. Les apps no contenen cap IA. Vegeu [Receptes per a assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les apps, com a esborranys que encara no ha revisat un parlant nadiu. Els temes d'ajuda són en anglès.
- **CadCraft Studio** indica per què ha fallat la comprovació d'actualització (encara no hi ha cap fitxer per al vostre sistema, no hi ha xarxa, una signatura incorrecta) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que heu tancat fins que hi hagi una versió més nova.

## Encara no en aquesta versió

- **La 0.7 no està signada amb codi.** La signatura, i el paquet de la Microsoft Store, es van passar a la 0.8 perquè encara no ha arribat la validació del certificat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}}, i després {{ui:Executa-ho igualment}}. A un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha cap versió per a iPad o iPhone.
- Les llistes d'angle i de pendent a {{ui:Unitats}} es desen, però encara cap casella les llegeix.
- **Les comprovacions de disseny encara no les ha revisat un enginyer.** Les nostres proves les comparen amb valors de taules impreses i fórmules resoltes a mà, encara no amb els exemples resolts d'una guia de disseny. Fins que hi hagi una revisió, són una ajuda: comproveu a mà les barres que importin.
- Les comprovacions de disseny fan servir forces de primer ordre (sense efectes de segon ordre) i només comproven perfils en I. Encara no implementat: tubs, angles, perfils en U, formes soldades, peces esveltes (AISC) o de classe 4 (Eurocodi) a flexió, torsió, vinclament per tallant combinat amb flexió, connexions, fatiga, incendi, detallat sísmic i formigó. Una peça esvelta a compressió deixa fora les comprovacions de compressió, i la barra apareix com a "passa, comprovada en part".
- L'anàlisi del pòrtic continua essent de primer ordre i lineal, i encara no l'ha provat cap enginyer en una obra real.
- Els forats de cargols, els cargols, les soldadures i les sabates no són a l'exportació USD.

Tota la resta és a [Què encara no està implementat](topic:not-built-yet).
