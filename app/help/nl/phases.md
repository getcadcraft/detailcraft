---
title: Fasen
summary: Verdeel het model in fasen (montagevolgordes of leveringen), toon of verberg elke fase, plaats onderdelen in een fase en nummer merken per fase.
keywords: fase, fasen, fasebeheer, montagevolgorde, levering, partij, volgorde, fase verbergen, fase tonen, filter, nummering, merkvoorvoegsel, per fase
from: bae506f5
---

Een fase is een groep onderdelen die samen worden gemaakt, geleverd of gemonteerd: een montagevolgorde, een levering, een partij. Elk onderdeel en elke fundering zit in één fase. Een verbinding zit in de fase van het hoofdonderdeel: de ligger van een kopplaat, de kolom van een voetplaat. Een nieuw model heeft één fase.

## Het paneel Fasen

De sectie {{ui:Fasen}} van het paneel {{ui:Model}} toont elke fase:

- het vinkje toont of verbergt de fase in de weergave;
- het nummer en een naam die u kunt typen (leeg = "Fase 2" enzovoort);
- hoeveel onderdelen erin zitten;
- de knop {{ui:×}} verwijdert een fase. Alleen een lege fase kan worden verwijderd: zet eerst de onderdelen in een andere fase.

{{ui:Fase toevoegen}} voegt het volgende nummer toe en maakt het de fase waarin nieuwe onderdelen komen.

## Onderdelen in een fase zetten

- **Nieuwe onderdelen:** {{ui:Nieuwe onderdelen gaan in}} kiest de fase waarin elke ligger en fundering die u vanaf nu plaatst, komt.
- **Eén onderdeel:** selecteer het en wijzig {{ui:Fase}} in het paneel {{ui:Eigenschappen}}.
- **Meerdere onderdelen:** selecteer ze (een venster, {{key:Shift}}+klik, {{key:Mod+A}}) en wijzig {{ui:Fase}} bovenaan het paneel {{ui:Eigenschappen}}. Er staat **Varieert** als ze in verschillende fasen zitten. Eén wijziging is één ongedaan-maken-stap.

Kopieën behouden de fase van het onderdeel waarvan ze zijn gekopieerd, ook wanneer ze in een ander model worden geplakt (de fase wordt daar toegevoegd).

## Fasen tonen en verbergen

Een verborgen fase wordt niet in de weergave getekend, kan niet worden aangeklikt of door een selectievenster gevangen, en {{key:Mod+A}} laat haar weg. Ze staat nog wel in de stuklijst, de rapporten, de tekeningen en elke export. Verbergen geldt alleen voor de weergave: het wordt niet opgeslagen en heeft geen ongedaan-maken.

## Merken per fase

Met **Merken per fase nummeren** aan (dat staat standaard aan) en onderdelen in meer dan één fase, wordt elke fase apart genummerd en beginnen de merken met het fasenummer: onderdeelmerken 1-b1, 2-b1, samenstellingsmerken 2-B1, funderingen 2-F1. Twee identieke liggers in verschillende fasen krijgen dan verschillende merken, omdat ze op verschillende momenten worden gemaakt en verzonden. Als maar één fase in gebruik is, hebben merken geen voorvoegsel. Zet het uit om het hele model als één geheel te nummeren, zodat identieke stukken een merk delen, ongeacht hun fase.

De fase wordt in de IFC-export geschreven (eigenschapsset DetailCraft, Phase).

:::note
Modellen met fasen worden opgeslagen in het bestandsformaat 2 van DetailCraft. Versie 0.3 van DetailCraft kan ze niet openen; deze versie opent oudere bestanden, met elk onderdeel in fase 1.
:::
