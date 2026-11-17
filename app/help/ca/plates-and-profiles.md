---
title: Col·locar plaques i afegir perfils personalitzats
summary: Col·locar plaques soltes per gruix i amplada, i definir les vostres pròpies seccions I, de canal, de cornière, de tub o de pletina.
keywords: placa, pla, perfil personalitzat, perfil d'usuari, paramètric, secció, forma, secció transversal, pl
from: c24c3b51
---

## Col·locar una placa

Una placa es col·loca com una biga: va entre dues interseccions, amb l'amplada transversal i el gruix cap amunt.

1. Trieu {{ui:Placa}} al grup {{ui:Col·loca}}, o premeu {{key:P}}.
2. Al tauler {{ui:Propietats}}, definiu {{ui:Gruix (mm)}} i {{ui:Amplada (mm)}}. El valor per defecte és 20 x 200 en A36.
3. Definiu {{ui:Material}} i {{ui:Rotació (°)}} si cal. Una rotació de 90 posa la placa de cantell.
4. Feu clic a dues interseccions, o useu el formulari {{ui:Afegeix per quadrícula}}.

El nom del perfil de la placa s'escriu `PL<thickness>x<width>`, per exemple PL20x200. La seva longitud és la distància entre els dos punts.

Per canviar la mida d'una placa col·locada, seleccioneu-la i canvieu {{ui:Gruix (mm)}} o {{ui:Amplada (mm)}}.

Les plaques que col·loqueu són peces pròpies (marca p, conjunt P). Les plaques d'extrem i de base que fan les connexions també són plaques, però les canvieu a través de la seva connexió; vegeu [Plaques d'extrem](topic:end-plates).

## Afegir un perfil personalitzat

Quan la secció que necessiteu no és al catàleg, creeu-la a partir de les seves dimensions. Un perfil personalitzat pertany al model i es desa amb ell. Per fer-lo servir en cada model nou, deseu-lo a {{ui:Els meus perfils}}, descrit a "Desar un perfil per a models nous" més avall.

1. Al tauler {{ui:Model}} de l'esquerra, obriu {{ui:Perfil personalitzat}}.
2. Escriviu un {{ui:Nom}}, per exemple `W8x18-custom` o `RHS 120x80x5`. No pot ser un nom de catàleg ni semblar un nom de placa.
3. Trieu una {{ui:Forma}}: {{ui:Perfil I}}, {{ui:Canal}}, {{ui:Cornièra d'ales iguals}}, {{ui:Tub rectangular}}, {{ui:Tub rodó}} o {{ui:Pletina}}.
4. Ompliu les dimensions que apareixen, totes en mil·límetres:

| Forma | Dimensions |
|---|---|
| Perfil I | Alçada d, Amplada d'ala bf, Gruix d'ànima tw, Gruix d'ala tf, Radi de l'arrodoniment interior r (pot ser 0) |
| Canal | Alçada d, Amplada d'ala bf, Gruix d'ànima tw, Gruix d'ala tf (cantonades quadrades) |
| Cornièra d'ales iguals | Amplada b (cada ala), Gruix t |
| Tub rectangular | Alçada h, Amplada b, Gruix t (radi de la cantonada exterior 2t) |
| Tub rodó | Diàmetre D, Gruix t |
| Pletina | Amplada b, Gruix t |

5. Deixeu marcat {{ui:Desa a Els meus perfils}} perquè estigui en cada model nou (vegeu més avall), o desmarqueu-lo per desar-lo només en aquest model.
6. Trieu {{ui:Afegeix un perfil}}.

La barra d'estat diu "Perfil "…" afegit; hi és a totes les llistes de perfils, sota Personalitzat." Apareix a la llista sota el formulari i al final de cada llista {{ui:Perfil}}.

DetailCraft comprova que la forma pot existir. Veureu missatges com "L'ànima i les ales no caben dins de l'alçada i l'amplada.", "El radi de l'arrodoniment és massa gran per a l'ala." o "La paret és massa gruixuda." Corregiu els valors i trieu {{ui:Afegeix un perfil}} de nou.

### Què obtenen els perfils personalitzats

- Massa per metre a partir de l'àrea × 7850 kg/m³ (les mides de catàleg fan servir el pes publicat).
- Els perfils I personalitzats admeten forats, osques, plaques d'extrem, fitxers NC i plànols de taller, igual que els perfils I de catàleg.
- Les pletines personalitzades es comporten com a plaques.
- Els canals i els tubs personalitzats admeten forats; les cornières i els tubs rodons encara no.

Un cop afegit, no podeu editar ni eliminar un perfil personalitzat d'un model (useu {{key:Mod+Z}} de seguida si us heu equivocat). Doneu un nom nou a un perfil corregit.

## Desar un perfil per a models nous

{{ui:Els meus perfils}}, sota el formulari, és la vostra pròpia llista de perfils personalitzats. Es guarda en aquest navegador, en aquest ordinador, no en un fitxer de model ni al vostre compte.

- Un perfil afegit amb {{ui:Desa a Els meus perfils}} marcat va a la llista. Cada model nou, inclòs el que DetailCraft obre en iniciar-lo, comença amb tots ells a les seves llistes de perfils.
- Un perfil que ja és en un model però no a la llista té al costat un botó {{ui:Desa}}.
- En un model que no tingui un dels vostres perfils (un fitxer més antic, per exemple), trieu {{ui:Utilitza aquí}} per afegir-lo.
- {{ui:Elimina}} treu un perfil de la llista. Els models que ja l'utilitzen conserven la seva pròpia còpia.
- Un model que obriu conserva els perfils desats al seu fitxer. Obrir un fitxer no canvia mai la vostra llista.
- Es rebutja un nom que ja és a la llista amb dimensions diferents: doneu un altre nom al perfil nou.
- Si s'esborren les dades del lloc del navegador, o si s'usa un altre navegador o ordinador, la llista comença buida. Una finestra privada no la pot conservar; l'aplicació ho indica.
