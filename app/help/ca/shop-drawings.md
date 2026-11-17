---
title: Fes plànols de taller
summary: Un full per marca de peça, fet tot alhora: previsualitzar-ne qualsevol i baixar un full o tot el joc en PDF en A4 a A1 o ANSI B a D, amb forats, entalladures, cotes i caixetí.
keywords: plànol de taller, plànols de taller, totes les peces, lot, joc complet, plànol d'una sola peça, plànol de fabricació, pdf, plànol de detall, plànol de peça, imprimeix
from: d25fe035
---

DetailCraft fa un full per marca de peça, per a cada biga, columna, reforç i placa del model, tots alhora: no cal seleccionar-les una per una. Les peces idèntiques comparteixen marca i, per tant, comparteixen full. Els fulls es fan al moment a partir del model; no s'emmagatzemen ni es poden editar.

## Fes tot el joc

1. Trieu {{ui:Plànol de taller}} al grup {{ui:Sortida}}. No cal seleccionar res. Amb una peça seleccionada, la finestra s'obre al full d'aquella peça. Al tauler {{ui:Propietats}} el mateix botó es diu {{ui:Plànol de taller}} per a barres i {{ui:Plànol de placa}} per a connexions.
2. S'obre una vista prèvia, amb el títol de la marca de peça, per exemple "Plànol de taller b1". La primera llista al costat del títol conté totes les marques de peça amb el seu perfil, llargada i quantitat: trieu-ne una per veure'n el full. La segona llista canvia la mida del full; tot el joc es torna a fer en aquesta mida (vegeu [Plànols generals i de conjunt](topic:drawings#choose-the-sheet-size)).
3. Trieu {{ui:Baixa-ho tot}} (el botó mostra el nombre de fulls) per obtenir un PDF amb una pàgina per marca de peça, `<name> Shop drawings.pdf`. Cada full diu "Full 3 de 42" al seu caixetí. O trieu {{ui:Baixa el PDF}} per al que esteu veient, `<name> <mark>.pdf`.
4. Tanqueu la vista prèvia amb la × o {{key:Esc}}.

Si {{ui:Plànol de taller}} està en gris, el model encara no té peces.

## Què hi ha al full

Per a un perfil en I:

- **Alçat**, mirant l'ànima: la peça amb les entalladures marcades, els forats de l'ànima com a cercles i els forats de les ales com a línies ocultes (discontínues).
- **Planta de l'ala superior**, vista des de dalt, quan alguna ala té forats. Els forats de l'ala inferior es mostren discontinus.
- **Secció** pel perfil.
- **Cotes:** posicions dels forats encadenades al llarg de la peça més la llargada total, alçades dels forats de l'ànima, el gàlib i les mides de les entalladures.
- **Llista de forats:** cada grup de forats, per exemple "8 x Ø22 a l'ala superior".
- **Soldadura**, quan la peça té plaques soldades.
- **Caixetí:** marca de peça, marca de conjunt, perfil, material, llargada, quantitat, pes unitari i pes total, nom del model i data.

Per a un perfil en U, una cantonera o un perfil buit, el full és el mateix, mirant l'ànima o el costat: les parets d'un tub són línies ocultes (discontínues), i la secció dona el gruix de la paret.

Per a una placa: la cara de la placa amb els seus forats, i la seva vora com a secció.

## Escales

L'escala es tria d'una llista (de 1:1 fins a 1:200) perquè la peça càpiga al full. Una peça llarga i poc profunda seria massa prima per llegir-la a una sola escala; per això, quan la profunditat sortiria per sota de 30 mm al paper, la profunditat es dibuixa a una escala més gran que la llargada. El títol de la vista ho indica, per exemple "llargada 1:20, profunditat 1:5 (no a una sola escala; manen les cotes)". Llegiu sempre les mides a partir de les cotes, no mesurant el full.

## Coses a saber

- La quantitat és el nombre de peces amb aquesta marca al model. Les marques es poden renumerar després d'un canvi; vegeu [Revisa les marques i la llista de materials](topic:marks-and-bom).
- Cada full és una sola peça, sense símbols de soldadura; els plànols de conjunt (amb símbols de soldadura) i els plànols generals són a [Plànols](topic:drawings). El full no es pot editar ni anotar a DetailCraft. Per marcar-lo, obriu el PDF amb una aplicació de marcatge de PDF com MarkupCraft.
- El caixetí diu "DetailCraft lab build — millimeters".
- El text fa servir la tipografia estàndard de PDF Helvetica. Els caràcters fora del conjunt de l'Europa occidental s'imprimeixen com a "?", i la barra d'estat els compta.

## Imprimeix-lo

Obriu el PDF baixat al vostre visor de PDF i imprimiu-lo al 100% (sense "ajusta a la pàgina") en paper de la mida que heu triat, si voleu que les escales indicades siguin vàlides. En un full més petit, escaleu-lo i confieu en les cotes.
