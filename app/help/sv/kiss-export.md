---
title: Exportera en KISS-fil för tillverkningsprogram
summary: Skicka stycklistan till ett program för tillverkningsstyrning (MIS) som en KISS 1.1-fil: sammanställningar, delar, faser som sekvenser, hål, urtag och svetsar.
keywords: kiss, kss, mis, tillverkningsstyrning, produktionsstyrning, kalkylering, stycklista, bom, export, fabtrol, sekvens
from: 30cf3951
---

I gruppen {{ui:Output}} öppnar du {{ui:More}} och väljer {{ui:KISS file for fabrication software}}. DetailCraft laddar ner `<name>.kss`, en KISS-fil ("Keep It Simple, Steel", version 1.1), det textformat som de flesta program för tillverkningsstyrning importerar en stycklista från.

## Vad som finns i den

- Huvudet: ett jobbnummer (de första åtta bokstäverna och siffrorna i modellnamnet), modellnamnet, datum och tid, och om måtten är metriska.
- För varje sammanställningsmärke: dess huvuddel (antal = hur många av sammanställningen), en ritningsrad (A-B1 och så vidare, sammanställningsritningens nummer), en sammanställningsrad (namn, typ, vikt, total längd, djup och bredd), en sekvensrad för varje [fas](topic:phases) som sammanställningen finns i, samt arbetsrader: hål (hur många, diameter, tjocklek igenom), urtag och svetsar.
- Sedan varje del som hör till den, med det **totala** antalet (per sammanställning × sammanställningar), som standarden kräver.
- Lösa bultar och ankarbultar på ritningen BOLTS, sammanställning FIELD.
- Varje rad anger typ (W, C, L, HSS, PL eller MI för en egen profil), dimension, kvalitet, kapningslängd i millimeter, delnamn och vikt.

## Imperiella eller metriska mått

I [DetailCraft-inställningar](topic:settings) väljer **KISS-filens mått**:

- **Automatiskt** (utgångsläget): imperiellt när alla profiler är AISC-profiler, annars metriskt.
- **Imperiellt**: profiler enligt deras AISC-beteckning (W 16X26, HSS 4X4X.250); plåtar och bultar, som DetailCraft håller i millimeter, till närmaste 1/16 tum; vikter i pund.
- **Metriskt**: europeiska profiler med sitt namn (IPE300), plåtar som tjocklek × bredd i millimeter; vikter i kilogram.

Längder anges alltid i millimeter med två decimaler, oavsett inställning: KISS-standarden kräver det och det mottagande programmet räknar om dem.

:::note
Kvaliteter kortas till standardens åtta tecken: A572 Gr 50 blir A572-50. Kommatecken i namn ersätts med mellanslag (formatet har ingen citering). Kontrollera en import i ditt program innan du litar på den: DetailCraft:s KISS-filer är kontrollerade mot standarden här, men ännu inte i ett tillverkningsprogram.
:::
