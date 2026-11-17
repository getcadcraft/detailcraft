---
title: Fondasiekontroles
summary: Kontroleer blokfondasies, gekombineerde fondasies en matte op die grond wat jy beskryf, versakking, 'n buigsame mat op vere, paalgroepe en keermure. 'n Hulpmiddel vir 'n ingenieur om na te kyk.
keywords: fondasie, blokfondasie, gekombineerde fondasie, mat, versakking, substraatmodulus, vere, randkolom, hoekkolom, draagvermoë, gly, omkantel, ponsskuif, eenrigtingskuif, buiging, ontwikkeling, minimum staal, paalgroep, keermuur, ACI 318-19
from: 6961ad52
---

:::warning
Dit is eerstevlak-kontroles vir 'n ingenieur om na te kyk, nie 'n ontwerpgoedkeuring nie. Die toelaatbare grondspanning en die wrywingskoëffisiënt is joune: DetailCraft ken nie jou grond nie.
:::

Die oortjie {{ui:Fondasie}} kontroleer die fondasies in die model teen die kolomladings wat jy hulle gee.

## Beskryf die grond

Tik die {{ui:Toelaatbare draagdruk}} en die {{ui:Wrywingskoëffisiënt van basis}}. Albei begin by 0, wat beteken nie ingevoer nie: die kontrole wys dan die druk as 'n nota en sê nie dat dit slaag nie. Vir versakking, tik die grond se modulus {{ui:Es}} (MPa), sy Poisson-verhouding en die versakking wat jy toelaat (25 mm om mee te begin). Vir 'n buigsame mat, tik 'n substraatmodulus {{ui:ks}}. Die opvulling oor die fondasie, die grond se eenheidsgewig, die veiligheidsfaktore vir gly en omkantel (1,5 om mee te begin) en die staal se vloeisterkte is ook daar.

## Gee die ladings

Elke fondasie het 'n lys kolomladings. Gebruik {{ui:Voeg 'n kolomlading by}} en vul die diensry in (vir draagvermoë, gly en omkantel) en die gefaktoreerde ry (vir die sterktekontroles): die vertikale lading P af, die horisontale kragte Vx en Vy op die fondasie se bopunt, die momente Mx en My, die kolom se plek op die fondasie en sy grootte.

Of gebruik die oortjie {{ui:Ontleding}} en druk {{ui:Neem kolomladings uit die Ontleding}}: elke steun wat op 'n fondasie staan, word 'n kolomlading, uit die diensstelle en die gefaktoreerde stelle wat jy kies. 'n Positiewe My laai die +x-kant van die fondasie swaarder; 'n positiewe Mx laai die −y-kant swaarder.

## Wat word nagegaan

Uit die diensladings, met die fondasie se eie gewig en die opvulling bygetel:

- **Draagvermoë:** die druk onder 'n starre fondasie. Binne die middelderde is die hele basis in kontak; buite dit lig 'n deel van die basis op en is die piek hoër. 'n Resultante buite die basis faal.
- **Gly:** wrywing maal die vertikale lading teenoor die horisontale krag.
- **Omkantel:** die resultante se afstand vanaf die rand.
- **Versakking:** die elastiese versakking van die gemiddelde druk op 'n halfruimte met die modulus wat jy gegee het, in die middel en by 'n hoek (Timoshenko en Goodier se oplossing vir 'n buigsame reghoek), teen die limiet. Dit is 'n bogrens vir 'n starre fondasie en laat 'n grondlaag van beperkte diepte, ontlasting deur die uitgegrawe grond en konsolidasie weg. Sonder 'n modulus wys dit die druk as 'n nota.

Uit die gefaktoreerde kolomladings alleen (ACI 318-19):

- **Buiging** by die kolomvlak, met die minimum staal (0,0018 vir 420 MPa-stawe) en die stawe wat jy geteken het.
- **Eenrigtingskuif** by d vanaf die vlak.
- **Ponsskuif** by d/2 rondom elke kolom, met die kolom se moment. Vir 'n kolom naby 'n rand word die kritieke snit deur die fondasie se rand afgesny (drie kante by 'n rand, twee by 'n hoek, ACI 318-19 22.6.4.1 en die kleiner αs in Tabel 22.6.5.2), en die moment om die snit se eie middelpunt sluit die verskuiwing van die lading in.
- **Ontwikkeling** van die stawe verby die kolomvlak, reguit of met hul haakies.
- **Diepte** bo die onderste stawe (150 mm).

'n Gekombineerde fondasie of 'n mat word as starr beskou, en skuif en moment kom uit statika op snitte oor die volle breedte.

## 'n Buigsame mat op vere

Merk {{ui:Ontleed hierdie fondasie as 'n buigsame mat op vere}} wanneer die fondasie baie kolomme dra en die starre fondasie te grof is. Die fondasie word 'n plaat van vierknoopelemente op 'n bed van vere (die {{ui:ks}} wat jy getik het, gekonsentreer op die knope), met elke kolom se lading versprei oor die knope van sy eie voetspoor. 'n Tweede tabel gee die grootste grondspanning en versakking (en die verskil tussen die grootste en die kleinste), die buigmoment in elke rigting met die staal wat dit nodig het, trek bo teen die gewone beton se sterkte ('n fondasie het geen boonste stawe nie), eenrigtingskuif by d vanaf die kolomme, en ponsskuif op die vere se eie druk. Die maas word verfyn totdat 'n kolom drie elemente breed is; 'n groot mat neem 'n paar sekondes. Die mat se eie gewig en die grond daarbo kanselleer mekaar en word weggelaat.

Elke mislukte kontrole is in die paneel {{ui:Probleme}} met sy klousule.

## Paalgroepe en keermure

{{ui:Voeg 'n paalgroep by}} plaas 'n rooster van pale onder 'n starre kap: tik die lading en momente in, en wat een paal in druk en in trek mag dra (die paalontwerp se getalle, nie hierdie oortjie s'n nie). Elke paal se reaksie is P/n plus sy aandeel in die momente (die elastiese metode), en die grootste druk en enige trek word nagegaan.

{{ui:Voeg 'n keermuur by}} kontroleer 'n kantilêvermuur op vlak terugvulling, per meter: Rankine-aktiewe druk, omkantel om die punt, gly en die basisdruk. Passiewe druk voor die punt word weggelaat. Jou assistent kan dieselfde kontroles uitvoer met `pile_group_check` en `retaining_wall_check`.

Paalgroepe, mure en die mat-skakelaar word in die modellêer gestoor, en 'n mislukte kontrole is in {{ui:Probleme}}.
