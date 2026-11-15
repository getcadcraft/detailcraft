---
title: Novetats de la 0.8 i la 0.8.1
summary: Una pel·lícula de muntatge a partir de la taula de càrregues d'una grua, un pilot automàtic de connexions, un mapa de congestió de l'armadura, comprovacions de fonamentació, panells d'entramat de fusta i acer lleuger, comprovacions de constructibilitat i d'accés de soldadura, estoc de proveïdors, què es trenca primer, un recàlcul en directe, més comprovacions de formigó i les correccions de la 0.8.1.
keywords: novetats, què hi ha de nou, notes de versió, registre de canvis, canvis, 0.8, 0.8.1, versió, funcions noves, muntatge, grua, taula de càrregues, pel·lícula, pilot automàtic, connexions, armadura, congestió, fonamentació, sabata, estora, assentament, entramat, fusta, acer lleuger, llista de talls, constructibilitat, accés de soldadura, proveïdor, estoc, temps de lliurament, què es trenca primer, directe, formigó, sísmic, llosa, idiomes, assistent
from: 6e33e052
---

Això és el que ha canviat a DetailCraft 0.8 (1 de novembre de 2026) i 0.8.1 (2 de novembre de 2026), comparat amb la 0.7. La 0.7 comprovava barres d'acer; la 0.8 planifica els aixecaments, proposa les connexions, comprova les fonamentacions i l'armadura, i fa entramats de fusta i d'acer lleuger per a murs, forjats i cobertes.

## Novetats

### Muntatge

- **Pla de muntatge i pel·lícula.** A la pestanya {{ui:Muntatge}}, descriviu una grua (on es troba, el seu ganxo més alt, l'aparell d'elevació que no és a la taula) i escriviu les files de la seva taula de càrregues. DetailCraft aixeca el model un conjunt cada vegada, en ordre de fase i nivell per nivell, i comprova cada aixecament amb la taula al seu radi i amb el marge que hàgiu fixat. {{ui:Desa el vídeo}} escriu un fitxer HTML que es reprodueix fora de línia en qualsevol navegador, també en un mòbil. Els aixecaments que superen la taula, la sobrepassen o són massa alts apareixen a {{ui:Problemes}}. És un pla a partir dels vostres números, no un pla d'aixecament. Vegeu [Pla de muntatge i pel·lícula](topic:erection-movie).

### Connexions

- **Pilot automàtic de connexions.** La pestanya {{ui:Pilot automàtic}} mira cada unió que no té connexió i en proposa una a partir de les formes: plaques de base, llengüetes de cisallament, plaques d'extrem per a les bigues que marqueu com a bigues de moment, empalmaments i cartel·les. Doneu una càrrega uniforme o un cisallament en un extrem, i el nombre de cargols segueix la resistència de càlcul del cargol. {{ui:Afegeix-les totes}} afegeix les propostes com un sol pas de desfer. Són valors inicials per revisar, no un disseny de connexió.
- **Comprovacions de constructibilitat.** {{ui:Problemes}} per a un cargol que una clau no pot arribar, cargols massa junts per al dau, cordons de soldadura en angle fora dels seus límits de mida i seccions buides que retenen aigua. L'accés de soldadura és nou: un cordó en angle perimetral que la torxa d'un soldador no pot arribar es llista amb la peça que hi estorba i la part de la soldadura afectada. Vegeu [Comprovacions de constructibilitat](topic:constructability).

### Fonamentacions i armadura

- **Comprovacions de fonamentació.** La pestanya {{ui:Fonamentació}} comprova sabates, sabates combinades i estores sobre el sòl que descriviu: capacitat portant, lliscament i bolcament amb càrregues de servei; flexió, cisallament, punxonament, ancoratge i armadura mínima amb càrregues majorades (ACI 318-19). Un pilar a prop d'una vora o d'un cantó es comprova amb la secció retallada per la vora de la sabata. L'assentament surt del mòdul del sòl, una estora flexible es resol sobre molles a partir d'un mòdul de subrasant, i els grups de pilots i els murs de contenció tenen els seus propis panells. Les càrregues dels pilars es poden escriure o prendre de l'{{ui:Anàlisi}}. Vegeu [Comprovacions de fonamentació](topic:foundation-checks).
- **Mapa de congestió de l'armadura.** La pestanya {{ui:Congestió}} dibuixa un mapa de calor de cada sabata vista des de dalt: on les barres deixen massa poc espai perquè el formigó hi arribi, segons la regla de separació lliure i, si els les doneu, l'àrid més gran i el cap del vibrador. Vegeu [Mapa de congestió de l'armadura](topic:rebar-congestion).

### Entramat i subministrament

- **Entramat de fusta i acer lleuger.** La pestanya {{ui:Entramat}} arma panells de mur, de forjat i de coberta amb cada peça, una llista de talls, l'estoc que cal comprar i un plànol de taller a escala. {{ui:Col·loca com a barres}} posa les peces al model, i {{ui:Fulls PDF}} desa un full per a cada panell. Les mides, la separació i els capçals són cosa vostra: DetailCraft no comprova que aguantin la càrrega. Vegeu [Panells d'entramat de fusta i acer lleuger](topic:framing-panels).
- **Estoc de proveïdors i temps de lliurament.** La pestanya {{ui:Subministrament}} llegeix la llista d'estoc d'un proveïdor (CSV) i mostra, per a cada secció que compra la llista de talls, si n'hi ha prou en estoc i quant triga. Els faltants i les seccions amb retard apareixen a {{ui:Problemes}}. No es comanda res. Vegeu [Estoc de proveïdors i temps de lliurament](topic:supplier-stock).

### Anàlisi i disseny

- **Què es trenca primer?** A la pestanya {{ui:Anàlisi}}, el botó troba la combinació de resistència que governa, la barra més feble, fins on poden créixer les càrregues abans que la primera barra arribi al seu límit, i la placa d'extrem o la llengüeta de cisallament més feble on es coneix la resistència a cisallament dels seus cargols. Primer necessita les combinacions i un codi de disseny. No es comproven l'aixafament, el cisallament de bloc, les soldadures ni el prying. El vostre assistent connectat pot demanar el mateix.
- **En directe.** Marqueu {{ui:En directe: resol de nou després de cada canvi}} i el pòrtic es torna a resoldre després de cada edició.
- **Formigó, i més.** Un pilar esvelt en un pòrtic sense desplaçament lateral es dissenya per al seu moment amplificat (ACI 318-19 6.6.4.5). El període sísmic es pot prendre de l'anàlisi pel mètode de Rayleigh. Una llosa feta de plaques rep de cada capa l'acer que necessita a partir dels seus moments, i també el cisallament en una direcció. Vegeu [Comprovar elements de formigó i fer càrregues sísmiques](topic:concrete-and-seismic).
- **Per a un enginyer revisar.** Els resultats de fonamentació, de formigó i de Què es trenca primer són ajudes. Les càrregues de vent no estan fetes.

### A totes les aplicacions

- **Idiomes.** L'ajuda és en 54 idiomes. Els que van més enllà de l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} tria ajustar, 2 files o 1 fila. Una barra que ja hi cap es queda com està; la resta es desplaça lateralment.
- **Graella de propietats.** Els camps de la sabata usen la graella compartida: categories plegables i una densitat compacta. L'aritmètica escrita, com 2*450, encara funciona.
- **Dispositius d'entrada.** El trackpad, el llapis, el ratolí 3D, el controlador i el MIDI poden manejar les aplicacions. Vegeu [Navegar en 3D](topic:navigate-3d).
- **Panell de problemes.** Els avisos de les noves comprovacions anteriors apareixen al mateix panell {{ui:Problemes}} que abans.
- **Connecteu la vostra IA.** El vostre propi assistent, connectat a través de CadCraft Studio, funciona amb les vuit aplicacions i només veu el que permeteu. La connexió d'un clic, el connector allotjat i la vostra pròpia clau d'API a Studio encara estan per arribar. Vegeu [Usar DetailCraft amb un assistent d'IA](topic:use-with-ai-assistants).

## Corregit a la 0.8.1

- **Idiomes a Studio.** Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució; abans només eren en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.
- **Selecció per intersecció.** Els instal·ladors de la 0.8.1 porten ja el comportament de selecció per finestra correcte a la compilació web de la 0.8; un instal·lador anterior no el tenia.
- **Tauletes en vertical.** L'alçada de graella sobrant va al llenç, i el disseny de full comença a 760 px o menys.

## Encara no en aquesta versió

- **Enviar NC a una màquina** no està publicat.
- **Càrregues de vent** per al formigó no estan fetes, i les comprovacions de formigó i de fonamentació són per a un enginyer revisar-les.
- **Signatura de codi.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, així que Windows pot avisar, i macOS demana un clic dret i després Obre.

Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
