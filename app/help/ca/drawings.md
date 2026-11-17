---
title: Plànols generals i de conjunt
summary: Genereu plantes, alçats i un plànol de conjunt per cada marca de conjunt a partir del model, en fulls de A4 a A1 o ANSI B a D, emeteu-los amb lletres de revisió, i baixeu-los en PDF, DWG o DXF.
keywords: línies ocultes, eliminació de línies ocultes, discontínua, núvol de revisió, núvols, triangle de revisió, plànol de plaques d'ancoratge, barres d'ancoratge, quadre de barres, quadre de plaques de base, replanteig, emissió, revisió, rev, taula de revisions, reemissió, registre d'emissions, lliurament, dwg, dxf, fitxer CAD, exporta plànols, plànols, implantació general, planta, alçat, plànol de conjunt, mida del full, mida del paper, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloide, 11 x 17, 22 x 34, pdf, imprimeix, escala, caixetí, referència del model
from: 709f8604
---

Trieu {{ui:Drawings}} al grup {{ui:Output}}. DetailCraft genera el conjunt complet a partir del model tal com està ara. No s'emmagatzema res: si canvieu el model i torneu a obrir {{ui:Drawings}}, el conjunt es torna a generar.

## Què hi ha al conjunt

- **Plantes**, una per nivell que tingui alguna cosa, vistes des de dalt.
- **Alçats**, un per cada línia de quadrícula amb barres a menys d'1 m.
- **El plànol de les plaques d'ancoratge**, quan el model té plaques de base: cada placa de base vista des de dalt amb el seu pilar i les barres d'ancoratge, les quadrícules amb les seves cotes, un detall tipus de cada patró de barres (BP1, BP2 …) amb l'espaiat de les barres i les distàncies als cants, i dos quadres: les barres d'ancoratge per marca (R1, R2 …: quantitat, diàmetre, longitud, sortint per sobre de la placa, empotrament, qualitat) i les plaques de base per quadrícula (pilar, patró, placa, barres, cara superior de la placa). Un pilar fora de la quadrícula es localitza per les seves coordenades.
- **Plànols de conjunt**, un per cada marca de conjunt: vistes de front, de dalt i d'extrem, cotes encadenades fins als forats i als cants de les plaques, la llista de peces, els cargols i les barres solts, i notes de soldadura i de forats. Cada placa soldada té un símbol de soldadura de cordó a la vista de front (AWS A2.4): la fletxa apunta a la unió, el triangle sota la línia de referència indica el costat de la fletxa, la xifra a la seva esquerra és la mida de la soldadura en mm, i un cercle on la fletxa toca la línia vol dir tot al voltant.

**Línies ocultes.** Les plantes i els alçats no dibuixen les línies d'una peça quan una altra peça que està completament davant seu la tapa (una biga vista de cantell darrere d'un pilar). Els plànols de conjunt dibuixen una placa en discontinu quan la peça principal la tapa: darrere de l'ànima, a la vista de front (vista des del costat −u de la peça), i sota l'ala superior, a la vista de dalt. Les peces que estan a la mateixa profunditat, o que se solapen en profunditat, es dibuixen totes dues completes.

Cada full té un caixetí amb el número de plànol, l'escala, el nom del model, la data, el número de full amb la mida del full, i la referència del model: un codi generat a partir del model desat, de manera que una impressió es pot relacionar amb el model del qual procedeix.

## Trieu la mida del full

Trieu la mida a la llista de la part superior de la finestra {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) o {{ui:ANSI D}} (22 × 34 in). Tots els fulls són apaïsats. El conjunt es torna a generar de seguida en la nova mida, i la mateixa mida s'utilitza per als plànols de taller. També és a la [Configuració de DetailCraft](topic:settings#drawings), i aquest navegador la recorda.

- Un full més gran es dibuixa a una escala més gran. Les escales són sempre estàndard (1:10, 1:20, 1:25, 1:50, 1:100 i així successivament).
- El text té la mateixa mida a cada full, de manera que es llegeix bé quan s'imprimeix.
- En un full petit, un muntatge llarg i prim pot tenir una escala més gran en profunditat que en longitud. El títol de la vista aleshores indica les dues escales, i prevalen les cotes.

## Emissió de plànols i revisions

La línia sobre la vista prèvia indica en quin estat és el full mostrat: **Encara no emès**, **Rev B, emès … ; sense canvis des de llavors**, o, en vermell, **Canviat des de la rev B: cal reemetre**. La llista de fulls marca els fulls emesos amb la seva revisió, i els que cal reemetre.

- Escriviu per a què és l'emissió (comença com a "Emès per a fabricació") i trieu {{ui:Issue this sheet}}, o {{ui:Emet els fulls canviats}} per a tots els fulls que siguin nous o hagin canviat des de la seva última emissió.
- La primera emissió d'un full és la revisió A, després B, C i així successivament (la I i la O se salten).
- El caixetí mostra el número de plànol amb la seva revisió ("A-B1  rev B"), i al costat hi ha una taula de revisions que enumera les darreres emissions: revisió, data i descripció. En un full petit mostra les que hi càpiguen.
- Un full "canvia" quan canvia el que hi està dibuixat: una barra moguda, un forat nou, una marca renumerada. La data, el recompte de fulls i la taula de revisions en si no compten. Canviar la mida del full canvia tots els fulls.
- El registre d'emissions es desa al fitxer del model, i emetre és un sol pas per desfer. El [fitxer KISS](topic:kiss-export) porta la revisió més recent de cada plànol.

### Núvols de revisió

A partir de la segona emissió d'un full, cada peça o fonamentació que ha canviat es dibuixa dins d'un núvol de revisió amb un triangle de revisió que porta la lletra.

- Mentre un full ha canviat des de la seva última emissió, els núvols mostren el que ha canviat des de llavors, amb la propera revisió al triangle (rev B emesa i canviada: els triangles diuen C).
- Quan l'emeteu, els núvols es queden en el full d'aquella revisió, com en un joc imprès, fins que el full torni a canviar.
- Cada full només fa núvols dels canvis que mostra. Les plantes i els alçats no dibuixen forats ni retalls, de manera que només fan núvol d'una barra que s'ha mogut, girat o redimensionat, o d'una marca que ha canviat. Els plànols de conjunt i el plànol de les plaques d'ancoratge també fan núvol dels forats i retalls nous o moguts.
- Una marca renumerada compta: quan un canvi fa que una biga sigui un conjunt nou, les bigues la marca de les quals ha pujat (B1 a B2) es fan núvol a les plantes i els alçats.
- Una peça esborrada no deixa res per fer núvol.
- Els fulls emesos abans que hi hagués núvols de revisió (DetailCraft 0.4) comencen a tenir-los a partir de la seva següent emissió.
- Els núvols són a les descàrregues en PDF, DXF i DWG, i mai no compten com a canvi per si sols.

## Descàrrega

Trieu el format a la llista al costat dels botons, i després {{ui:Aquest full}} per al full mostrat o {{ui:Tots els fulls}} per a tot el conjunt.

- **PDF**: per imprimir o enviar. {{ui:Tots els fulls}} fa un sol PDF, una pàgina per full, cada pàgina de la mida triada.
- **DWG**, en el format 2018, 2013, 2010, 2007, 2004 o 2000: per obrir els fulls en un programa CAD. Trieu un format més antic per a un programa més antic.
- **DXF (R12)**: la versió que gairebé tots els programes CAD obren.

Un full DWG o DXF es dibuixa a mida real: una unitat de dibuix és un mil·límetre al paper, de manera que s'imprimeix a 1:1 i cada vista manté l'escala que indica el seu títol. Cada plomí és la seva pròpia capa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID i així successivament, amb el seu gruix de línia (DWG) i els seus traços. Les paraules són text amb l'estil de text de DetailCraft (Arial). Les cotes són les línies i les xifres que veieu, no objectes de cota. {{ui:Tots els fulls}} posa els fitxers DWG o DXF en un sol zip, un fitxer per full.

:::note
DXF R12 no té gruixos de línia ni farcits: les capes conserven els seus noms, de manera que cal assignar els plomins per capa en traçar, i les formes plenes queden fora (la barra d'estat indica quantes són).
:::

Imprimiu al 100 % (sense "ajusta a la pàgina") en paper de la mateixa mida si voleu que les escales indicades es mantinguin.
