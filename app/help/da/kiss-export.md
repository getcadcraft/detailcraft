---
title: Eksportér en KISS-fil til fremstillingssoftware
summary: Send stykklisten til et styringsprogram for fremstilling (MIS) som en KISS 1.1-fil: samlinger, dele, faser som sekvenser, huller, udskæringer og svejsninger.
keywords: kiss, kss, mis, styring af fremstilling, produktionsstyring, kalkulation, stykliste, BOM, eksport, fabtrol, sekvens
from: 30cf3951
---

I gruppen {{ui:Uddata}} åbner du {{ui:Mere}} og vælger {{ui:KISS-fil til fremstillingssoftware}}. DetailCraft downloader `<name>.kss`, en KISS-fil ("Keep It Simple, Steel", version 1.1), det rene tekstformat som de fleste styringsprogrammer for fremstilling importerer en stykliste fra.

## Hvad der er med

- Hovedet: et jobnummer (de første otte bogstaver og cifre i modelnavnet), modelnavnet, dato og klokkeslæt, og om dimensionerne er metriske.
- For hvert samlingsmærke: dets hoveddel (antal = hvor mange af samlingen), en tegningslinje (A-B1 og så videre, samlingstegningens nummer), en samlingslinje (navn, type, vægt, samlet længde, dybde og bredde), én sekvenslinje for hver [fase](topic:phases) samlingen indgår i, og arbejdslinjer: huller (hvor mange, diameter, tykkelse igennem), udskæringer og svejsninger.
- Derefter hver del der hører til den, med det **samlede** antal (pr. samling × samlinger), som standarden kræver.
- Løse bolte og ankerstænger på tegning BOLTS, samling FIELD.
- Hver linje angiver typen (W, C, L, HSS, PL, eller MI for en egen profil), størrelse, styrkeklasse, skærelængde i millimeter, delnavn og vægt.

## Imperial eller metrisk

I [DetailCraft-indstillinger](topic:settings) vælger **KISS-filstørrelser**:

- **Automatisk** (startindstillingen): imperial når alle bjælker er AISC-profiler, ellers metrisk.
- **Imperial**: profiler efter deres AISC-betegnelse (W 16X26, HSS 4X4X.250); plader og bolte, som DetailCraft holder i millimeter, til nærmeste 1/16 in; vægte i pund.
- **Metrisk**: europæiske profiler efter deres navn (IPE300), plader som tykkelse X bredde i millimeter; vægte i kilogram.

Længder er altid i millimeter med to decimaler, uanset indstillingen: KISS-standarden kræver det, og det modtagende program omregner dem.

:::note
Styrkeklasser forkortes til standardens otte tegn: A572 Gr 50 bliver til A572-50. Kommaer i navne bliver til mellemrum (formatet har ingen citering). Kontrollér én import i dit program, før du stoler på den: DetailCraft's KISS-filer er kontrolleret mod standarden her, endnu ikke i et program til fremstilling.
:::
