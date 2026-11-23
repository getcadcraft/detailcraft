---
title: Novetats de la 0.9 (anteriors)
summary: Mides d'acer del Regne Unit (Blue Book) i cantoneres desiguals, plànols de taller per a cada peça en un sol conjunt de PDF, Els meus perfils per a seccions a mida, P-Delta i freqüències pròpies, càrregues de vent ASCE 7, emplaçament sísmic i combinacions, i cursors en directe amb Segueix.
keywords: novetats de la 0.9, versió anterior, novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, acer del Regne Unit, Blue Book, UB, UC, PFC, SHS, RHS, CHS, cantonera desigual, plànol de taller, plànols de taller, conjunt de fulls, marca de peça, PDF, els meus perfils, perfil a mida, P-Delta, segon ordre, freqüència pròpia, elements finits, massa modal, càrrega de vent, ASCE 7, sísmic, classe d'emplaçament, USGS, combinacions de càrregues, LRFD, ASD, en directe, cursors, seguir, persones, indicacions emergents, novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, funcions noves, muntatge, grua, taula de càrregues, vídeo, pilot automàtic, connexions, armadura, congestió, fonamentació, sabata, llosa, assentament, entramat, fusta, perfils lleugers, llista de talls, constructibilitat, accés per soldar, proveïdor, estoc, temps de subministrament, què falla primer, en directe, formigó, sísmic, forjat, idiomes, assistent
from: ab0c7f05
---

Aquests són els canvis de DetailCraft 0.9 respecte de la 0.8.1. La 0.9 porta les mides d'acer del Regne Unit, un plànol de taller per a cada peça de cop, una pestanya {{ui:Anàlisi}} més gran per als pòrtics, i la vista dels cursors dels altres quan treballeu junts.

## Novetats

### Acer del Regne Unit i plànols de taller

- **Mides d'acer del Regne Unit.** Les llistes de perfils ara inclouen 976 mides del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, amb els perfils buits conformats en fred separats (els seus noms comencen per CF). Els noms s'escriuen primer la família, com UB305x165x40 o SHS100x100x5.0, i també funciona escriure'ls com diuen els plànols: 305x165x40 UB, L100x100x10, SHS100x5. Vegeu [Catàleg de perfils](topic:profile-catalog).
- **Cantoneres desiguals.** Les cantoneres UEA conserven les dues cames en entrar i sortir per IFC i en els fitxers NC, i una simetria gira la peça d'extrem a extrem.
- **Tots els plànols de taller de cop.** Trieu {{ui:Plànol de taller}} al grup {{ui:Sortida}} sense res seleccionat. La finestra llista totes les marques de peça, en previsualitza qualsevol, i {{ui:Baixa-ho tot}} desa un sol PDF amb una pàgina per marca, cadascuna titulada "Full 3 de 42". {{ui:Baixa el PDF}} desa el que esteu veient. Els perfils en U, les cantoneres i els perfils buits també tenen ara fulls. Vegeu [Fer plànols de taller](topic:shop-drawings).
- **Els meus perfils.** Un perfil a mida es pot desar ara per a cada model nou. Al formulari de perfil a mida, deixeu marcat {{ui:Desa a Els meus perfils}}; la llista {{ui:Els meus perfils}} que hi ha a sota té {{ui:Desa}}, {{ui:Utilitza aquí}} i {{ui:Elimina}}. La llista es guarda en aquest navegador (fins a 200), no al vostre compte. Vegeu [Plaques i perfils](topic:plates-and-profiles).

### Anàlisi

- **Segon ordre (P-Delta).** Marqueu {{ui:Segon ordre (P-Delta)}} al costat d'Executa a la pestanya {{ui:Anàlisi}} i els esforços axials actuen sobre el pòrtic deformat. Les plaques i els forjats rígids es mantenen de primer ordre, amb un avís. Vegeu [Esforços, reaccions i fletxes](topic:frame-analysis).
- **Freqüències pròpies.** El bloc {{ui:Elements finits: freqüències pròpies}} sota els resultats troba els modes més baixos del mateix model, amb el període i la massa modal efectiva, i mostra un mode al model. Vegeu [Esforços, reaccions i fletxes](topic:frame-analysis).
- **Càrregues de vent i emplaçament sísmic.** Tres blocs nous a la pestanya {{ui:Anàlisi}}: {{ui:Càrregues de vent (procediment direccional ASCE 7)}}, {{ui:Emplaçament i sistema sísmics (ASCE 7)}} i {{ui:Combinacions de càrregues ASCE 7}}. Vegeu [Vent, emplaçament sísmic i combinacions ASCE 7](topic:wind-seismic-combinations).

### Treballar junts

- **Cursors i noms.** En una sessió en directe, el punter de cada persona es dibuixa al model amb el seu nom i color, i el que han seleccionat es marca amb un quadre.
- **Seguir una persona.** Obriu {{ui:Persones}} a la sessió i trieu {{ui:Segueix}} en un nom; la vostra vista es mou amb la seva. L'amfitrió pot triar {{ui:Demana a tothom que em segueixi}}. Vegeu [Seguir una persona en una sessió en directe](topic:follow-in-live).

### En totes les aplicacions

- Les indicacions emergents són de Bootstrap, la targeta de consell inicial té un botó de tancar, les barres de pestanyes es desplacen de costat quan no hi caben, i la pestanya del navegador indica el document obert seguit de DetailCraft i CadCraft.

## Corregit

- Un perfil a mida es perdia quan començaveu un model nou.
- Els perfils en U, les cantoneres i els perfils buits no hi eren al conjunt de plànols de taller.

## Límits reconeguts

- Els blocs de vent, sísmic i d'elements finits són ajudes per a la comprovació. El vostre enginyer revisa els resultats; no són una comprovació de codi. La consulta a l'USGS es va provar amb un substitut, no amb el servei real.
- Els elements finits i el P-Delta es van comprovar amb resultats calculats a mà i de forma tancada, no amb un edifici real. L'anàlisi de vinclament no està implementada.
- Encara cap fabricant del Regne Unit no ha provat les mides del Regne Unit, i els fitxers NC per a cantoneres desiguals encara no s'han executat en una màquina.
- El conjunt de plànols de taller només és en PDF.
- Els idiomes diferents de l'anglès són esborranys de màquina.
- Els instal·ladors de Windows no estan signats digitalment (Més informació i després Executa igualment); la imatge de disc de macOS no està notaritzada (clic dret i després Obre).

Els canvis anteriors són a les notes de la 0.8 i la 0.8.1 més avall en aquesta pàgina.

## Anteriors: 0.8 i 0.8.1

Aquests són els canvis de DetailCraft 0.8 (1 de novembre de 2026) i 0.8.1 (2 de novembre de 2026), respecte de la 0.7. La 0.7 comprovava barres d'acer; la 0.8 planifica els aixecaments, proposa les connexions, comprova les fonamentacions i l'armadura, i fa l'entramat de murs, forjats i cobertes de fusta i de perfils lleugers.

### Novetats

**Muntatge**

- **Pla de muntatge i vídeo.** A la pestanya {{ui:Muntatge}}, descriviu una grua (on és, el seu ganxo més alt, els aparells d'elevació que no són a la taula) i escriviu les files de la seva taula de càrregues. DetailCraft aixeca el model un conjunt cada vegada, en ordre de fases i nivell per nivell, i comprova cada elevació amb la taula al seu radi i amb el marge que definiu. {{ui:Desa el vídeo}} escriu un fitxer HTML que es reprodueix sense connexió a qualsevol navegador, també al mòbil. Les elevacions que superen la taula, que queden fora de l'abast o que són massa altes estan a {{ui:Problemes}}. És un pla a partir de les vostres dades, no un pla d'elevació. Vegeu [Pla de muntatge i vídeo](topic:erection-movie).

**Connexions**

- **Pilot automàtic de connexions.** La pestanya {{ui:Pilot automàtic}} mira cada unió que no té connexió i en proposa una a partir de les formes: plaques de base, orelles de tallant, plaques d'extrem per a les bigues que marqueu com a bigues de moment, empalmaments i cartel·les. Doneu una càrrega uniforme o un tallant d'extrem i el nombre de cargols segueix la resistència de càlcul del cargol. {{ui:Afegeix-les totes}} afegeix les propostes com un sol pas de desfer. Són valors inicials per revisar, no un disseny de connexió.
- **Comprovacions de constructibilitat.** {{ui:Problemes}} per a un cargol que una clau no pot arribar a tocar, cargols massa junts per al vas de la clau, soldadures de cordó d'angle fora dels seus límits de mida i perfils buits que retenen aigua. L'accés per soldar és nou: un cordó d'angle per tot el perímetre al qual la torxa del soldador no arriba es llista amb la peça que estorba i la part de la soldadura afectada. Vegeu [Comprovacions de constructibilitat](topic:constructability).

**Fonamentacions i armadura**

- **Comprovacions de fonamentacions.** La pestanya {{ui:Fonamentació}} comprova sabates, sabates combinades i llosses de fonamentació sobre el terreny que descriviu: aixafament, lliscament i bolcada amb càrregues de servei; flexió, tallant, punxonament, longitud d'ancoratge i armadura mínima amb càrregues majorades (ACI 318-19). Un pilar a prop d'una vora o d'un cantó es comprova amb la secció que queda tallada per la vora de la sabata. L'assentament surt del mòdul del terreny, una llosa flexible es resol sobre molles a partir d'un mòdul de reacció del terreny, i els grups de pilotes i els murs de contenció tenen panells propis. Les càrregues dels pilars es poden escriure o agafar de la pestanya {{ui:Anàlisi}}. Vegeu [Comprovacions de fonamentacions](topic:foundation-checks).
- **Mapa de congestió d'armadura.** La pestanya {{ui:Congestió}} dibuixa un mapa de calor de cada sabata vista des de dalt: on les barres deixen massa poc espai perquè el formigó arribi a baixar, segons la regla de separació lliure i, si els doneu, l'àrid més gran i el capçal del vibrador. Vegeu [Mapa de congestió d'armadura](topic:rebar-congestion).

**Entramat i subministrament**

- **Entramat de fusta i de perfils lleugers.** La pestanya {{ui:Entramat}} fa l'entramat de panells de mur, de forjat i de coberta amb cada peça, una llista de talls, l'estoc a comprar i un plànol de taller a escala. {{ui:Col·loca com a barres}} posa les peces al model, i {{ui:Fulls PDF}} desa un full per a cada panell. Les mides, la separació i els dintells són vostres: DetailCraft no comprova que aguantin la càrrega. Vegeu [Panells d'entramat de fusta i de perfils lleugers](topic:framing-panels).
- **Estoc del proveïdor i temps de subministrament.** La pestanya {{ui:Subministrament}} llegeix la llista d'estoc d'un proveïdor (CSV) i mostra, per a cada perfil que compra la llista de talls, si n'hi ha prou en estoc i quant triga l'espera. Els faltants i els perfils amb retard són a {{ui:Problemes}}. No es comanda res. Vegeu [Estoc del proveïdor i temps de subministrament](topic:supplier-stock).

**Anàlisi i disseny**

- **Què falla primer?** A la pestanya {{ui:Anàlisi}}, el botó troba la combinació de resistència que regeix, la barra més feble, fins on poden augmentar les càrregues abans que la primera barra arribi al seu límit, i la placa d'extrem o l'orella de tallant més feble on es coneix la resistència a tallant dels seus cargols. Primer calen les combinacions i un codi de disseny. L'aixafament, el tallant en bloc, les soldadures i l'efecte palanca no es comproven. L'assistent connectat pot demanar el mateix.
- **En directe.** Marqueu {{ui:En directe: resol de nou després de cada canvi}} i el pòrtic es torna a resoldre després de cada canvi.
- **Més formigó.** Un pilar esvelt en un pòrtic intraslacional es dimensiona pel seu moment amplificat (ACI 318-19 6.6.4.5). El període sísmic es pot prendre de l'anàlisi pel mètode de Rayleigh. Un forjat fet de plaques rep de cada capa l'acer que necessita segons els seus moments, i el tallant en una direcció. Vegeu [Comprova els elements de formigó i fes les càrregues sísmiques](topic:concrete-and-seismic).
- **Per revisar per un enginyer.** Els resultats de fonamentacions, de formigó i de Què falla primer són ajudes. Les càrregues de vent no estan implementades.

**En totes les aplicacions**

- **Idiomes.** L'ajuda està en 54 idiomes. Els diferents de l'anglès són esborranys de màquina fins que una persona parlant nadiua els llegeixi; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria ajustar, 2 files o 1 fila. Una barra que ja hi cap es queda igual; les altres es desplacen de costat.
- **Quadrícula de propietats.** Els camps de la sabata fan servir la quadrícula compartida: categories plegables i una densitat compacta. L'aritmètica escrita com 2*450 encara funciona.
- **Dispositius d'entrada.** El ratolí tàctil, el llapis, el ratolí 3D, el comandament i el MIDI poden controlar les aplicacions. Vegeu [Navegar en 3D](topic:navigate-3d).
- **Tauler de problemes.** Els avisos de les noves comprovacions de dalt apareixen al mateix tauler {{ui:Problemes}} que abans.
- **Connecteu la vostra IA.** El vostre propi assistent, connectat mitjançant CadCraft Studio, funciona amb les vuit aplicacions i només veu el que permeteu. La connexió amb un clic, el connector allotjat i la vostra pròpia clau d'API a Studio encara estan per fer. Vegeu [Fer servir DetailCraft amb un assistent d'IA](topic:use-with-ai-assistants).

### Corregit a la 0.8.1

- **Idiomes a Studio.** Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució; abans només eren en anglès. Encara no s'ha provat en totes les plataformes: digueu-nos si l'idioma no canvia.
- **Selecció per finestra d'intersecció.** Els instal·ladors de la 0.8.1 ja porten bé el comportament de seleccionar per finestra d'intersecció que tenia la versió web de la 0.8; un instal·lador més antic no el tenia.
- **Tauletes en vertical.** L'alçada de quadrícula sobrant va al llenç, i la disposició de fulls s'activa a 760 px o menys.

### Encara no és en aquesta versió

- **Enviar NC a una màquina** no s'ha publicat.
- **Càrregues de vent** per al formigó no estan implementades, i les comprovacions de formigó i de fonamentacions són per revisar per un enginyer.
- **Signatura de codi.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, així que Windows pot avisar i macOS demana un clic dret i després Obre.

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
