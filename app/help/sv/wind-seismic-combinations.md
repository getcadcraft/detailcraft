---
title: Vind, seismisk plats och ASCE 7-kombinationer
summary: Skapa vindlastfall för en innesluten, styv byggnad, beräkna de seismiska dimensioneringsvärdena för en plats och skapa ASCE 7-kombinationerna i fliken Analys.
keywords: vind, vindlast, asce 7, riktningsmetoden, exponering, inneslutning, seism, markklass, ss, s1, sds, sd1, usgs, dimensioneringsspektrum, lastkombinationer, lrfd, asd, kzt, kd, byfaktor
from: 676fcbf3
---

Tre block i fliken {{ui:Analys}} tar fram vind- och seismikindata för en ram och kombinerar dem: {{ui:Vindlaster (ASCE 7, riktningsmetoden)}}, {{ui:Seismisk plats och system (ASCE 7)}} och {{ui:ASCE 7-lastkombinationer}}. De är hjälpmedel: **inte en normkontroll. Din ingenjör granskar resultaten.**

## Vad du ska göra

Skapa vindlastfall för en innesluten, styv byggnad, hämta de seismiska värdena för en plats och skapa de kombinationer som använder dem. Modellen behöver bjälklag, så kör analysen först (se [Krafter, reaktioner och nedböjningar](topic:frame-analysis)).

## Steg

1. Öppna fliken {{ui:Analys}} och välj {{ui:Kör}}, så att bjälklagen och byggnadens storlek är kända. Om ett block säger att det inte finns några bjälklag, välj {{ui:Hitta våningar}} i blocket.
2. I {{ui:Vindlaster (ASCE 7, riktningsmetoden)}} väljer du {{ui:Utgåva}}, skriver in {{ui:Basvindhastighet V}} från din vindkarta och väljer {{ui:Hastighetsenhet}}. Välj sedan {{ui:Exponering}} och {{ui:Inneslutning}}. Kzt, Kd, G, markens höjd, Cp på läsidan, excentricitet och riktning finns också där.
3. Läs trycket på varje våning och kraften på varje våning i tabellen. Välj sedan {{ui:Skapa vindfall}}. Fallen är +X, -X, +Y och -Y.
4. I {{ui:Seismisk plats och system (ASCE 7)}} väljer du utgåva och skriver in Ss och S1 (SMS, SM1 och S1 för ASCE 7-22), markklassen A till D, riskkategorin och det seismiska kraftupptagande systemet. Du kan också skriva in latitud och longitud och välja {{ui:Slå upp från USGS (online)}}. Tjänsten på nätet frågas först när du trycker på knappen.
5. Läs Fa, Fv, SDS och SD1, R, Cd och Omega0 samt dimensioneringsspektrumet. Välj sedan {{ui:Använd i seismiskt block}}. Tryck på {{ui:Skapa seismiska fall}} i det seismiska blocket (se [Kontrollera betongdelar och gör seismiska laster](topic:concrete-and-seismic)).
6. I {{ui:ASCE 7-lastkombinationer}} väljer du {{ui:Metod}} (LRFD eller ASD) och väljer {{ui:Skapa ASCE 7-kombinationer}}. Kör analysen igen.

## Bra att veta

- Vind: endast för en innesluten, styv byggnad, med riktningsmetoden. En flexibel byggnad behöver en byfaktor från standarden, vilket DetailCraft inte skapar.
- Markklass E och F kräver en platsundersökning och finns inte ännu.
- En källförteckning längst ner i blocken anger varifrån varje tal kommer och vad som utelämnats.
- USGS-uppslagningen testades mot en ersättning, inte mot den levande tjänsten.
