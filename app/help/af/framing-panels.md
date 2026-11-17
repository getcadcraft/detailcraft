---
title: Hout- en liggewig-raampanele
summary: Raam muur-, vloer- en dakpanele in hout of liggewig-staal, met elke stuk, 'n snylys, 'n werkswinkeltekening en die voorraad om te koop.
keywords: raamwerk, hout, bougoed, liggewig-staal, koudgevorm, stut, vloerbalk, dakspar, latei, koningstut, jakstut, kripstut, snylys, werkswinkeltekening, paneel
from: 3e38ffb9
---

Die oortjie {{ui:Raamwerk}} raam panele wat jy beskryf en gee vir 'n raamspan en 'n houtwinkel wat hulle nodig het, wat hulle vra. Die panele word in die modellêer gestoor.

:::warning
Die groottes, die afstand en die lateie is joune. DetailCraft gaan nie na of 'n stut op daardie afstand daardie muur dra nie, of of 'n latei daardie opening oorspan nie: dit is vir jou kode se tabelle en jou ingenieur.
:::

## Voeg 'n paneel by

Kies {{ui:Voeg 'n muur by}}, {{ui:Voeg 'n vloer by}} of {{ui:Voeg 'n dak by}}, en vul dan die afmetings in millimeter in, die materiaal (hout of liggewig-staal) en die lidgrootte. Houtgroottes is die nominale name met hul gesaagde groottes (2×4 is 38 × 89 mm). Staalstutte word benoem volgens diepte en dikte, byvoorbeeld `C92-1.2`.

## Mure

'n Muur het 'n onderste plaat, een of meer bopplate (een spoor vir staal), eindstutte, stutte op die afstand wat jy gee, en vir elke opening: twee koningstutte, twee jakstutte, 'n latei van die grootte en lae wat jy kies, en kripstutte bo die latei (en onder die vensterbank van 'n venster). Gee elke opening sy afstand vanaf die linkerkant, sy breedte, en sy ruwe openingshoogte bo en onder, gemeet vanaf die ondervloer; 'n deur het 'n onderkant van 0.

## Vloere en dakke

'n Vloer het vloerbalke oor sy breedte langs sy span, randbalke aan albei punte en, as jy dit merk, blokkering by middelspan. 'n Dakpaneel is 'n gevel: 'n paar sparre op die afstand wat jy gee (hul lengte sluit die dakoorhang langs die helling in) en 'n nokplank.

## Wat jy kry

Elke paneel wys sy stukke op 'n tekening volgens skaal met elke stuk gemerk, 'n snylys volgens merk, en 'n totaal. Die tabel {{ui:Voorraad om te koop}} rangskik al die panele se snitte in voorraadlengtes, die kortste wat elke staaf se snitte neem. {{ui:Stoor die werkswinkeltekening (SVG)}} skryf die tekening; die {{ui:CSV}}-knoppie skryf elke snylys en die voorraadlys.

## Plaas 'n paneel in die model

Onder elke paneel, gee waar dit gaan (x, y, z in millimeter en die hoek) en druk {{ui:Plaas as lede}}: elke stuk word 'n lid van die model, met die gesaagde afdeling van sy grootte en die gewig van die materiaal (ongeveer 500 kg/m³ vir die hout, staal vir die stutte). 'n Muur loop langs die hoek vanaf sy onderste linkerpunt met sy onderkant by z; 'n vloer se vloerbalke lê met hul onderkant by z; 'n dak se gevel-aansig loop langs die hoek met z aan die bopunt van die muurplate. Elke lateilaag is 'n lid langsaan. Druk dit weer en dit vervang die lede wat vroeër geplaas is, en {{ui:Verwyder die geplaaste lede}} haal hulle uit; elk is een ontdoen-stap. Die ontleding laat hierdie lede weg: hulle is nie staal-raamwerklede nie.

## PDF-blaaie

{{ui:PDF-blaaie}} stoor een A3-bladsy vir elke paneel: die paneel volgens skaal met elke stuk gemerk, die totale afmetings, die snylys en 'n titelstrook.

Probleme in die paneel {{ui:Probleme}}: 'n opening te na aan die einde van 'n muur of aan 'n ander, 'n latei wat nie onder die bopplate pas nie, of 'n stuk langer as die langste voorraad.

Die paneel {{ui:Probleme}} lys ook **Koppelvlakke (LOD 350)** vir muurpanele en betonmure: 'n opening wat verby die einde of die bopunt van sy muur loop, twee openings wat oorvleuel, en 'n betonmuuropening wat wyer as 1000 mm is sonder 'n randstaaf. Dit is raad, dieselfde reëls wat BimCraft se ouditering uitvoer; die breedte is CadCraft se beginwaarde, nie 'n standaard nie.
