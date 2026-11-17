---
title: Novetats de la 0.9
summary: Mides d'acer del Blue Book del Regne Unit i angles desiguals, plànols de taller de cada peça en un sol joc de PDF, Els meus perfils per a seccions personalitzades, P-Delta i freqüències pròpies, càrregues de vent ASCE 7, emplaçament sísmic i combinacions, i cursors en directe amb Segueix.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, acer del Regne Unit, blue book, ub, uc, pfc, shs, rhs, chs, angle desigual, plànol de taller, plànols de taller, joc de fulls, marca de peça, pdf, els meus perfils, perfil personalitzat, p-delta, segon ordre, freqüència pròpia, elements finits, massa modal, càrrega de vent, asce 7, sísmic, classe de terreny, usgs, combinacions de càrregues, lrfd, asd, en directe, cursors, segueix, persones, novetats, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, funcions noves, muntatge, grua, taula de càrregues, vídeo, pilot automàtic, connexions, armadura, congestió, fonamentació, sabata, radier, assentament, entramat, fusta, entramat lleuger, llista de talls, constructibilitat, accés de soldadura, proveïdor, estoc, termini de lliurament, què es trenca primer, formigó, sísmic, llosa, idiomes, assistent
from: 4c95a2de
---

Això és el que ha canviat a DetailCraft 0.9, en comparació amb la 0.8.1. La 0.9 porta les mides d'acer del Regne Unit, un plànol de taller per a cada peça de cop, una pestanya {{ui:Anàlisi}} més gran per als pòrtics, i la possibilitat de veure els cursors dels altres quan treballeu junts.

## Novetats

### Acer del Regne Unit i plànols de taller

- **Mides d'acer del Regne Unit.** Les llistes de perfils ara inclouen 976 mides del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, amb els perfils buits conformats en fred apartats (els seus noms comencen per CF). Els noms s'escriuen primer amb la família, com UB305x165x40 o SHS100x100x5.0, i també funciona escriure'ls com diuen els plànols: 305x165x40 UB, L100x100x10, SHS100x5. Vegeu [Catàleg de perfils](topic:profile-catalog).
- **Angles desiguals.** Els angles UEA conserven les dues ales a través de l'IFC d'entrada i de sortida i dels fitxers NC, i una simetria gira la peça d'extrem a extrem.
- **Tots els plànols de taller de cop.** Trieu {{ui:Plànol de taller}} al grup {{ui:Sortida}} sense res seleccionat. La finestra llista totes les marques de peça, en previsualitza qualsevol, i {{ui:Baixa-ho tot}} desa un sol PDF amb una pàgina per marca, cadascuna titulada "Full 3 de 42". {{ui:Baixa el PDF}} desa el que esteu veient. Els perfils en U, els angles i els perfils buits també tenen fulls ara. Vegeu [Fes plànols de taller](topic:shop-drawings).
- **Els meus perfils.** Un perfil personalitzat es pot conservar ara per a cada model nou. Al formulari de perfil personalitzat, deixeu marcada la casella {{ui:Desa a Els meus perfils}}; la llista {{ui:Els meus perfils}} que hi ha a sota té {{ui:Desa}}, {{ui:Utilitza aquí}} i {{ui:Elimina}}. La llista es guarda en aquest navegador (fins a 200), no al vostre compte. Vegeu [Plaques i perfils](topic:plates-and-profiles).

### Anàlisi

- **Segon ordre (P-Delta).** Marqueu {{ui:Segon ordre (P-Delta)}} al costat de {{ui:Executa}} a la pestanya {{ui:Anàlisi}} i les forces axials actuen sobre el pòrtic deformat. Les plaques i els forjats rígids continuen de primer ordre, amb un avís. Vegeu [Forces, reaccions i fletxes](topic:frame-analysis).
- **Freqüències pròpies.** El bloc {{ui:Elements finits: freqüències pròpies}} sota els resultats troba els modes més baixos del mateix model, amb el període i la massa modal efectiva, i mostra un mode sobre el model. Vegeu [Forces, reaccions i fletxes](topic:frame-analysis).
- **Càrregues de vent i emplaçament sísmic.** Tres blocs nous a la pestanya {{ui:Anàlisi}}: {{ui:Càrregues de vent (procediment direccional ASCE 7)}}, {{ui:Emplaçament i sistema sísmics (ASCE 7)}} i {{ui:Combinacions de càrregues ASCE 7}}. Vegeu [Vent, emplaçament sísmic i combinacions ASCE 7](topic:wind-seismic-combinations).

### Treball conjunt

- **Cursors i noms.** En una sessió en directe, el punter de cada persona es dibuixa al model amb el seu nom i el seu color, i el que ha seleccionat rep un quadre.
- **Segueix una persona.** Obriu {{ui:Persones}} a la sessió i trieu {{ui:Segueix}} en un nom; la vostra vista es mou amb la seva. L'amfitrió pot triar {{ui:Demana a tothom que em segueixi}}. Vegeu [Segueix una persona en una sessió en directe](topic:follow-in-live).

### En totes les apps

- Les descripcions emergents són les de Bootstrap, la targeta de consell d'inici té un botó de tancament, les barres de pestanyes es desplacen de costat quan no hi caben, i el nom de la pestanya del navegador mostra el document obert seguit de DetailCraft i CadCraft.

## Corregit

- Un perfil personalitzat es perdia en començar un model nou.
- Els perfils en U, els angles i els perfils buits faltaven al joc de plànols de taller.

## Límits honestos

- Els blocs de vent, sísmic i d'elements finits són ajudes per a la comprovació. El vostre enginyer revisa els resultats; no són una comprovació de codi. La consulta a l'USGS s'ha provat amb un substitut, no amb el servei en directe.
- Els elements finits i el P-Delta s'han comprovat amb respostes a mà i de forma tancada, no amb un edifici real. L'anàlisi de vinclament encara no està implementada.
- Cap fabricant del Regne Unit no ha provat encara les mides UK, i els fitxers NC per als angles desiguals no s'han executat en cap màquina.
- El joc de plànols de taller és només en PDF.
- Els idiomes diferents de l'anglès són esborranys de màquina.
- Els instal·ladors de Windows no estan signats amb codi ({{ui:Més informació}}, i després {{ui:Executa-ho igualment}}); la imatge de disc de macOS no està notaritzada (clic dret, i després {{ui:Obre}}).

Els canvis anteriors són a les notes de la 0.8 i la 0.8.1 més avall en aquesta pàgina.

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a DetailCraft 0.8 (1 de novembre de 2026) i 0.8.1 (2 de novembre de 2026), en comparació amb la 0.7. La 0.7 comprovava barres d'acer; la 0.8 planifica les maniobres de grua, proposa les connexions, comprova les fonamentacions i l'armadura, i fa entramats de fusta i de perfil lleuger per a murs, forjats i cobertes.

### Novetats

**Muntatge**

- **Pla de muntatge i vídeo.** A la pestanya {{ui:Muntatge}}, descriviu una grua (on és situada, el seu ganxo més alt, l'aparell d'elevació que no és a la taula) i escriviu les files de la seva taula de càrregues. DetailCraft fa les maniobres del model un conjunt cada cop, en ordre de fase i nivell per nivell, i comprova cada maniobra amb la taula al seu radi i amb el marge que hàgiu fixat. {{ui:Desa el vídeo}} escriu un fitxer HTML que es reprodueix sense connexió en qualsevol navegador, també en un telèfon. Les maniobres que superen la taula, que van més enllà o que són massa altes són a {{ui:Problemes}}. És un pla a partir de les vostres xifres, no un pla de maniobres. Vegeu [Pla de muntatge i vídeo](topic:erection-movie).

**Connexions**

- **Pilot automàtic de connexions.** La pestanya {{ui:Pilot automàtic}} mira cada unió que no té connexió i en proposa una a partir de les formes: plaques de base, plaques de tall, plaques d'extrem per a les bigues que marqueu com a bigues de moment, empalmaments i cartel·les. Indiqueu una càrrega uniforme o un esforç tallant en un extrem, i el nombre de cargols segueix la resistència de càlcul del cargol. {{ui:Afegeix-les totes}} afegeix les propostes en un sol pas de desfer. Són valors de partida per revisar, no un disseny de connexió.
- **Comprovacions de constructibilitat.** {{ui:Problemes}} per a un cargol que una clau no arriba a girar, cargols massa junts per al vas de la clau, soldadures en angle fora dels seus límits de mida i perfils buits que retenen aigua. L'accés per a la soldadura és nou: un cordó d'angle perimetral que la torxa de l'electrode del soldador no arriba a tocar es llista amb la peça que hi és al mig i la part de la soldadura afectada. Vegeu [Comprovacions de constructibilitat](topic:constructability).

**Fonamentacions i armadura**

- **Comprovacions de fonamentacions.** La pestanya {{ui:Fonamentació}} comprova sabates, sabates combinades i radiers sobre el terreny que descriviu: capacitat portant, lliscament i bolcada amb càrregues de servei; flexió, tallant, punxonament, longitud d'ancoratge i armadura mínima amb càrregues majorades (ACI 318-19). Un pilar a prop d'una vora o d'una cantonada es comprova amb la secció que queda tallada per la vora de la sabata. L'assentament surt del mòdul del terreny, un radier flexible es resol sobre molles a partir d'un mòdul de balast, i els grups de pilons i els murs de contenció tenen els seus propis panells. Les càrregues dels pilars es poden escriure o prendre de l'{{ui:Anàlisi}}. Vegeu [Comprovacions de fonamentacions](topic:foundation-checks).
- **Mapa de congestió de l'armadura.** La pestanya {{ui:Congestió}} dibuixa un mapa de calor de cada sabata vista des de dalt: on les barres deixen poc espai perquè el formigó hi passi, comparat amb la regla de separació lliure i, si els doneu, l'àrid més gran i el cap del vibrador. Vegeu [Mapa de congestió de l'armadura](topic:rebar-congestion).

**Entramat i subministrament**

- **Entramat de fusta i de perfil lleuger.** La pestanya {{ui:Entramat}} fa l'entramat de panells de paret, de forjat i de coberta amb cada peça, una llista de talls, l'estoc a comprar i un plànol de taller a escala. {{ui:Col·loca com a barres}} posa les peces al model, i {{ui:Fulls PDF}} desa un full per a cada panell. Les mides, la separació i els dintells els decidiu vosaltres: DetailCraft no comprova que aguantin la càrrega. Vegeu [Panells d'entramat de fusta i de perfil lleuger](topic:framing-panels).
- **Estoc del proveïdor i terminis de lliurament.** La pestanya {{ui:Subministrament}} llegeix la llista d'estoc d'un proveïdor (CSV) i mostra, per a cada perfil que compra la llista de talls, si n'hi ha prou en estoc i quant és l'espera. Les mancances i els perfils tardans són a {{ui:Problemes}}. No es demana res. Vegeu [Estoc del proveïdor i terminis de lliurament](topic:supplier-stock).

**Anàlisi i disseny**

- **Què es trenca primer?** A la pestanya {{ui:Anàlisi}}, el botó troba la combinació de resistència que governa, la barra més feble, fins on poden créixer les càrregues abans que la primera barra arribi al seu límit, i la placa d'extrem o la placa de tall més feble on es coneix la resistència a tallant dels seus cargols. Primer calen les combinacions i un codi de disseny. No es comproven l'aixafament, el tall de bloc, les soldadures ni el palanquejament. El vostre assistent connectat pot demanar el mateix.
- **En directe.** Marqueu {{ui:En directe: resol de nou després de cada canvi}} i el pòrtic es torna a resoldre després de cada canvi.
- **Formigó, i més.** Un pilar esvelt en un pòrtic sense desplaçament lateral es dimensiona pel seu moment amplificat (ACI 318-19 6.6.4.5). El període sísmic es pot prendre de l'anàlisi pel mètode de Rayleigh. Una llosa feta de plaques rep l'acer que cada capa necessita segons els seus moments, i el tallant en una direcció. Vegeu [Comprova els elements de formigó i fes les càrregues sísmiques](topic:concrete-and-seismic).
- **Perquè ho comprovi un enginyer.** Els resultats de fonamentacions, de formigó i de Què es trenca primer són ajudes. Les càrregues de vent encara no estan implementades.

**En totes les apps**

- **Idiomes.** L'ajuda és en 54 idiomes. Els que van més enllà de l'anglès són esborranys de màquina fins que un parlant nadiu els llegeixi; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria ajustar, 2 files o 1 fila. Una barra que ja hi cap es queda igual; la resta es desplaça de costat.
- **Quadrícula de propietats.** Els camps de la sabata fan servir la quadrícula compartida: categories plegables i una densitat compacta. L'aritmètica escrita, com 2*450, continua funcionant.
- **Dispositius d'entrada.** El panell tàctil, el llapis, el ratolí 3D, el comandament i el MIDI poden controlar les apps. Vegeu [Navega en 3D](topic:navigate-3d).
- **Tauler de problemes.** Els avisos de les noves comprovacions de dalt apareixen al mateix tauler {{ui:Problemes}} que abans.
- **Connecteu la vostra IA.** El vostre assistent propi, connectat a través de CadCraft Studio, funciona amb les vuit apps i només veu el que permeteu. La connexió d'un clic, el connector allotjat i la vostra pròpia clau d'API a Studio encara estan pendents. Vegeu [Fes servir DetailCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Idiomes a Studio.** Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució; abans només eren en anglès. Encara no s'ha provat en totes les plataformes: digueu-nos si l'idioma no canvia.
- **Selecció per finestra d'intersecció.** Els instal·ladors de la 0.8.1 porten ja el comportament de selecció per finestra que la versió web de la 0.8 tenia bé; un instal·lador més antic no el tenia.
- **Tauletes en vertical.** L'alçada de quadrícula sobrant va al llenç, i la disposició del full s'activa a 760 px o menys.

### Encara no en aquesta versió

- **Enviar NC a una màquina** encara no s'ha publicat.
- **Les càrregues de vent** per al formigó encara no estan implementades, i les comprovacions de formigó i de fonamentacions són perquè les revisi un enginyer.
- **Signatura de codi.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, de manera que Windows pot avisar i macOS demana un clic dret i després Obre.

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
