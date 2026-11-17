---
title: Izvoz IFC za usklajevanje
summary: Zapišite datoteko IFC4 celotnega modela, jekla, vijakov, temeljev in armature, da jo delite z arhitekti, inženirji in drugo programsko opremo.
keywords: ifc, ifc4, ifc2x3, bim, izvoz, uvoz, uvozi ifc, luknje, vijaki, razsuti vijaki, odprtine, pritrdilni elementi, usklajevanje, izmenjava modela, step, openbim, kolizija, gledalec
from: cfcb0cd6
---

Izvoz IFC zapiše celoten model kot eno datoteko IFC4, ki jo lahko odprejo programi BIM in gledalniki IFC.

## Izvoz

1. Izberite {{ui:IFC}} v skupini {{ui:Izhod}}.
2. Brskalnik prenese `<name>.ifc`. Vrstica stanja pove, kaj je vključeno, na primer „IFC4 izvožen: 25 delov, 88 pritrdilnih elementov, 7 temeljev, 132 armaturnih palic.“

Če model nima delov, temeljev ali armaturnih palic, vrstica stanja pove: „Za izvoz še ni ničesar.“

## Kaj je v datoteki

| V DetailCraft | V datoteki IFC |
|---|---|
| Vsak nivo | Etaža stavbe (IfcBuildingStorey) pod enim projektom, lokacijo in stavbo |
| Mreže | IfcGrid z osmi in oznakami |
| Stebri, nosilci, diagonale | IfcColumn, IfcBeam, IfcMember (diagonala), vsak kot iztisnjenje standardnega profila z dejanskimi merami |
| Plošče, čelne plošče, podložne plošče | IfcPlate |
| Luknje in zarezi | Odprtine (IfcOpeningElement), izrezane iz dela |
| Element in njegove zavarjene plošče | Sestav (IfcElementAssembly), označen s sestavno oznako |
| Vijaki in sidrne palice | IfcMechanicalFastener s premerom in dolžino |
| Temelji | IfcFooting (temeljna stopa), z oznako betona kot materialom |
| Vsaka armaturna palica | IfcReinforcingBar z oznako palice, premerom, površino in dolžino, potegnjena po pravi središčnici z dejanskimi loki na zavojih |

Oznaka vsakega dela je njegova oznaka dela. Vsak element nosi tudi nabor lastnosti „DetailCraft“ z oznakami, profilom in težo. Vsak element je v najvišji etaži, ki je na ali pod njegovo najnižjo točko. Materiali so združeni po kakovosti.

## Stabilni ID-ji pri ponovnih izvozih

Vsak IFC ID elementa (GlobalId) je izračunan iz imena modela in lastnega ID-ja elementa v modelu. Če isti model izvozite dvakrat, se ID-ji ujemajo, zato programska oprema, ki primerja različice, lahko ugotovi, kaj se je spremenilo.

:::warning
Preimenovanje modela spremeni vsak ID. Ime modela ohranite enako med izdajami projekta.
:::

## Preverjanje

Datoteke IFC programa DetailCraft v svojem preizkusnem sklopu bere neodvisen bralnik IFC. Programi različno berejo IFC, zato datoteko pred uporabo odprite v programski opremi, ki jo uporablja vaša ekipa. Aplikacija BimCraft podjetja CadCraft prav tako odpira datoteke IFC.

## Še ni

- Uvoz povezav, temeljev in armature iz datoteke IFC. {{ui:Uvozi IFC}} uvozi nosilce, stebre, diagonale, plošče, mreže, nivoje, luknje, zareze in vijake ter našteje, kaj je izpustil.
- Analitični podatki ali podatki za statično analizo.
- Karkoli razen referenčnega pogleda IFC4.

## Uvoz

{{ui:Uvozi IFC}} v skupini {{ui:Datoteka}} (ali spustite datoteko `.ifc` na pogled) ustvari nov model iz datoteke IFC2X3 ali IFC4:

- **Nosilci, stebri, diagonale (povezje) in plošče**, katerih telo je en iztisnjen profil, ki ga DetailCraft pozna, uskladen s katalogom ali ohranjen kot profil po meri; **mreže** in **nivoji** iz mreže in etaž datoteke.
- **Luknje:** vsaka okrogla odprtina (IfcOpeningElement, ki izvrta uvoženi del), pravokotna na eno od ploskev dela: stojina ali pasnice I-profila ali U-profila, stene cevi, plošča, krilo kotnika. Luknja skozi obe steni cevi se uvozi enkrat.
- **Zarezi:** pravokotna odprtina, ki zajame celotno širino I-profila ali U-profila z enega konca, navzdol z vrha ali navzgor z dna.
- **Vijaki:** vsak IfcMechanicalFastener ali IfcFastener s premerom, dolžino, kakovostjo in vrsto (vijak ali sidrna palica), kot **razsut vijak**. Razsuti vijaki so prikazani v pogledu, kosovnici in izvozu IFC ter ostanejo na mestu, ko premaknete elemente. Podokno {{ui:Lastnosti}}, kadar nič ni izbrano, jih prešteje in ima {{ui:Odstrani razsute vijake}}, kadar namesto tega dodajate povezave.

Poročilo po razredih našteje vse drugo z razlogom, zakaj je bilo izpuščeno: stene in plošče, temelji in palice, podolgovate luknje, luknje v okroglih ceveh, povezave (datoteka IFC prinese njihove plošče in vijake, ne pravila, ki so jih ustvarila).
