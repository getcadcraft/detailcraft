---
title: Kontrolli IFC eksporti kliendi IDS-i vastu
summary: Laadi sulle antud .ids-fail ja vaata Probleemides kõiki eksporditud osi, mis sellele ei vasta, enne kui saadad IFC-faili.
keywords: ids, teabe edastamise spetsifikatsioon, buildingsmart, nõuded, üleandmine, kontroll, valideerimine, qa, ifc eksport, omadus, materjal, hange
from: 50d0f785
---

## Mida sa teed

IDS (Information Delivery Specification, buildingSMART-i standard) on loend sellest, mida IFC peab sisaldama. DetailCraft kontrollib IFC-d, mida see eksportiks (sama fail, mille kirjutab {{ui:IFC}}), sulle antud IDS-i vastu, ja loetleb iga osa, mis jääb alla.

## Sammud

1. Ava või joonista oma mudel.
2. Klõpsa tööriistaribal grupis {{ui:Väljund}} nupul {{ui:Kontrolli IDS-i vastu…}}.
3. Klõpsa {{ui:Laadi .ids-fail…}} ja vali fail. Midagi ei laadita üles.
4. Loe tulemus: iga spetsifikatsioon koos märgiga {{ui:Läbitud}} või {{ui:Ebaõnnestunud}} ja arvuga, mitme elemendi kohta see kehtib.
5. Ava Probleemid ({{key:Ctrl+Shift+M}}) ja klõpsa ühel ebaõnnestumisel: element, liide, trepp või vundament, millest see tuli, valitakse ja vaade suumitakse sellele.

## Mida peaksid nägema

- Üks hoiatus iga eksporditud elemendi ja nõude kohta, mida see ei täida, koos spetsifikatsiooni nimega, mida IDS nõuab, ja sellega, mida eksport sisaldab.
- Kontrollaruanne (Probleemides) algab IDS-iga: selle pealkiri, versioon, autor ja iga spetsifikatsiooni arvud.

## Hea teada

- IDS salvestatakse mudelifaili, seega kontrollitakse seda uuesti, kui mudel avatakse. IDS-i laadimine või eemaldamine on üks samm, mida saab tagasi võtta.
- Iga muudatus kontrollitakse hiljem uuesti; suuremas mudelis ootab kontroll iga käivituse vahel veidi kauem.
- Ekspordi GlobalId-d tulevad mudeli nimest ja DetailCraftis olevatest detailinumbritest, seega need jäävad kontrollimisest kontrollimiseni samaks. Mudeli ümbernimetamine annab igale elemendile uued GlobalId-d.
- Arve võrreldakse SI-ühikutes (eksport on millimeetrites; pikkused teisendatakse esmalt meetriteks).
- IDS-i mustreid loetakse tervikväärtusena. `^` alguses ja `$` lõpus loetakse samuti „tervikväärtuseks“, nagu enamik IDS-faile neid mõeldud on.

## Järgmine

- [Ekspordi IFC](topic:ifc-export)
