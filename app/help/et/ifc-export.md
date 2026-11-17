---
title: Ekspordi IFC koordineerimiseks
summary: Kirjuta kogu mudelist IFC4-fail, sh teras, poldid, vundamendid ja armatuur, et jagada seda arhitektide, insenerite ja muu tarkvaraga.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, impordi ifc, avad, poldid, lahtised poldid, avaused, kinnitid, koordineerimine, mudeli vahetus, step, openbim, kokkupõrge, vaataja
from: cfcb0cd6
---

IFC-eksport kirjutab kogu mudeli ühe IFC4-failina, mida saavad avada BIM-tarkvara ja IFC-vaatajad.

## Eksport

1. Vali rühmas {{ui:Väljund}} nupp {{ui:IFC}}.
2. Brauser laadib alla faili `<name>.ifc`. Olekuribal on öeldud, mis sisse läks, näiteks „IFC4 eksporditud: 25 detaili, 88 kinnitit, 7 vundamenti, 132 varrast.“

Kui mudelis ei ole detaile, vundamente ega varrasid, on olekuribal „Eksportida pole veel midagi.“

## Mis failis on

| DetailCraftis | IFC-failis |
|---|---|
| Iga tasand | Hoone korrus (IfcBuildingStorey), ühe projekti, krundi ja hoone all |
| Ruudustikud | IfcGrid oma telgede ja siltidega |
| Postid, talad, diagonaalid | IfcColumn, IfcBeam, IfcMember (diagonaal), igaüks standardse profiilkuju ekstrusioon oma tegelike mõõtmetega |
| Plaadid, otsaplaadid, aluseplaadid | IfcPlate |
| Avad ja väljalõiked | Avad (IfcOpeningElement), mis on detailist välja lõigatud |
| Element ja selle keevitatud plaadid | Koost (IfcElementAssembly), millel on koostemärgis |
| Poldid ja ankruvardad | IfcMechanicalFastener läbimõõdu ja pikkusega |
| Vundamendid | IfcFooting (plaatvundament), materjalina betoonitekst |
| Iga varras | IfcReinforcingBar oma varrasmärgise, läbimõõdu, pindala ja pikkusega, tõmmatud mööda tegelikku keskjoont koos tegelike kaartega painetes |

Iga detaili silt on tema detailimärgis. Igal elemendil on ka omaduste kogum „DetailCraft“, mis sisaldab tema märgiseid, profiili ja kaalu. Iga element asub kõrgeimal korrusel, mis on tema madalaima punkti tasemel või sellest madalamal. Materjalid on rühmitatud klassi järgi.

## Püsivad ID-d uuesti eksportimisel

Iga elemendi IFC-ID (GlobalId) arvutatakse mudeli nimest ja elemendi enda ID-st mudelis. Kui eksportida sama mudel kaks korda, ID-d ühtivad, nii et versioone võrdlev tarkvara näeb, mis muutus.

:::warning
Mudeli ümbernimetamine muudab kõiki ID-sid. Hoia mudeli nimi projekti väljaannete vahel samana.
:::

## Kontrolli seda

DetailCraft'i IFC-faile loetakse testkomplektis tagasi sõltumatu IFC-lugejaga. Programmid loevad IFC-d erinevalt, seega ava fail enne sellel toetumist oma meeskonna tarkvaras. CadCrafti rakendus BimCraft avab IFC-faile samuti.

## Veel mitte

- Ühenduste, vundamentide ja armatuuri importimine IFC-failist. {{ui:Impordi IFC}} toob sisse talad, konstruktsioonielemendid, plaadid, ruudustikud, tasandid, avad, väljalõiked ja poldid ning loetleb, mis jäeti välja.
- Analüütilised või konstruktsioonianalüüsi andmed.
- Kõik muu peale IFC4 viitevaate.

## Import

Rühmas {{ui:Fail}} käsk {{ui:Impordi IFC}} (või `.ifc`-faili lohistamine vaatele) teeb IFC2X3- või IFC4-failist uue mudeli:

- **Talad, postid, elemendid (diagonaalid) ja plaadid**, mille kere on üks ekstrudeeritud DetailCraftile tuntud profiil, sobitatud kataloogiga või jäetud kohandatud profiiliks; **ruudustikud** ja **tasandid** faili ruudustikust ja korrustest.
- **Avad:** iga ümmargune ava (IfcOpeningElement, mis lõikab sisse tuleva detaili), mis on risti detaili ühe pinnaga: I- või U-profiili sein või flantsid, toru seinad, plaat, nurkraua tiivad. Toru mõlemat seina läbiv ava tuleb sisse üks kord.
- **Väljalõiked:** ristkülikukujuline ava, mis võtab I- või U-profiili kogu laiuse ühest otsast, ülaltpoolt alla või altpoolt üles.
- **Poldid:** iga IfcMechanicalFastener või IfcFastener koos läbimõõdu, pikkuse, klassi ja liigiga (kas poldina või ankruvardana) kui **lahtine polt**. Lahtised poldid kuvatakse vaates, materjalinimekirjas ja IFC-ekspordis ning jäävad oma kohale, kui teisaldad elemente. Paneel {{ui:Omadused}} kuvab, kui midagi pole valitud, nende arvu ja sisaldab nuppu {{ui:Eemalda lahtised poldid}} juhuks, kui lisad selle asemel ühendused.

Aruandes on loetletud kõik muu klasside kaupa koos põhjusega, miks see jäeti välja: seinad ja laed, vundamendid ja varrased, pikendatud avad, avad ümarates torudes, ühendused (IFC-fail kannab nende plaate ja polte, mitte reeglit, mis need tekitas).
