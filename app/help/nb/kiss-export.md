---
title: Eksporter en KISS-fil for produksjonsprogramvare
summary: Send stykklisten til et produksjonsstyringsprogram (MIS) som en KISS 1.1-fil: sammenstillinger, deler, faser som sekvenser, hull, utklinkinger og sveiser.
keywords: kiss, kss, mis, produksjonsstyring, produksjonskontroll, kalkyle, stykkliste, bom, eksport, fabtrol, sekvens
from: 30cf3951
---

I gruppen {{ui:Utdata}} velges {{ui:Mer}}, og deretter {{ui:KISS-fil for produksjonsprogramvare}}. DetailCraft laster ned `<name>.kss`, en KISS-fil ("Keep It Simple, Steel", versjon 1.1), et rent tekstformat som de fleste produksjonsstyringsprogrammer importerer stykklisten fra.

## Hva filen inneholder

- Hodet: et jobbnummer (de første åtte bokstavene og sifrene i modellnavnet), modellnavnet, dato og klokkeslett, og om størrelsene er metriske.
- For hver sammenstillingsmerking: hoveddelen (antall = hvor mange sammenstillinger), en tegningslinje (A-B1 og så videre, sammenstillingstegningens nummer), en sammenstillingslinje (navn, type, vekt, total lengde, dybde og bredde), én sekvenslinje for hver [fase](topic:phases) sammenstillingen er i, og arbeidslinjer: hull (hvor mange, diameter, tykkelse gjennom), utklinkinger og sveiser.
- Deretter hver del som er festet til den, med **totalt** antall (per sammenstilling × sammenstillinger), slik standarden krever.
- Løse bolter og ankerstenger på tegning BOLTS, sammenstilling FIELD.
- Hver linje oppgir type (W, C, L, HSS, PL, eller MI for en egendefinert profil), størrelse, kvalitet, kuttlengde i millimeter, delnavn og vekt.

## Imperial eller metrisk

I [DetailCraft-innstillinger](topic:settings) velges **KISS-filstørrelser**:

- **Automatisk** (utgangsverdien): imperial når alle medlemmer er AISC-profiler, ellers metrisk.
- **Imperial**: profiler etter AISC-betegnelse (W 16X26, HSS 4X4X.250); plater og bolter, som DetailCraft holder i millimeter, til nærmeste 1/16 in; vekter i pund.
- **Metrisk**: europeiske profiler etter navn (IPE300), plater som tykkelse X bredde i millimeter; vekter i kilogram.

Lengder er alltid i millimeter med to desimaler, uansett innstilling: KISS-standarden krever det, og mottakerprogrammet konverterer dem.

:::note
Kvaliteter kuttes til standardens åtte tegn: A572 Gr 50 blir A572-50. Komma i navn gjøres om til mellomrom (formatet har ingen sitering). Kontroller én import i programmet ditt før du stoler på den: DetailCraft sine KISS-filer er kontrollert mot standarden her, ikke i et produksjonsprogram ennå.
:::
