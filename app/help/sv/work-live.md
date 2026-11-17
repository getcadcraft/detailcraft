---
title: Detaljera en konstruktion tillsammans med Live TeamWork
summary: Vad som ändras i DetailCraft när du är i en Live TeamWork-session från CadCraft Studio: allas stänger, förbindelser och grunder i en och samma modell, din egen ångra-funktion och anslutning från en webbläsare på samma nätverk.
keywords: live, live teamwork, studio live, tillsammans, samarbeta, session, dela live, delta, stänger, förbindelser, markör, pekare, se varandra, namn, färg, markering, ångra, värd
from: 22b1de62
---

## Vad du lär dig

Vad som händer med en modell när flera detaljerar den samtidigt. CadCraft Studio startar och ansluter till Live TeamWork-sessionen (Dela, Delta). Den här sidan handlar om modellen i sig.

## Alla arbetar samtidigt

Lägg till och redigera stänger, förbindelser, grunder, trappor och bultar som vanligt. Dina egna ändringar syns direkt. Andras ändringar dyker upp en stund efter att de gjort dem.

- **Två personer ändrar samma stång:** olika inställningar (den ena profilen, den andra slutpunkten) behålls båda. Samma inställning går till den senare ändringen.
- **En förbindelse på en stång som någon just tagit bort** tas tillbaka, och statusfältet förklarar varför.
- Rutnät, nivåer och faser gäller för den som ändrade dem senast.
- Byggd geometri, delmärkningar och förteckningen räknas ut i varje fönster från samma modell, så de stämmer överens.

## Se varandra

Alla i sessionen har en egen färg. Du ser varje persons pekare som en pil i deras färg med namnet bredvid, på stången eller plåten de pekar på. Du ser också en streckad ruta i deras färg runt stängerna, förbindelserna, grunderna och trapporna de markerat.

Pekare, namn och markeringar gäller bara sessionen. De sparas aldrig i filen och hamnar aldrig i någons ångra-historik. De glider till där varje person befinner sig, så de förblir släta även vid en långsam anslutning.

## Ångra gäller ditt eget arbete

{{key:Mod+Z}} ångrar din egen senaste ändring och lämnar allas andra ändringar orörda. Om någon har ändrat samma sak sedan dess ångras inget, och statusfältet säger vem.

## Anslut från en webbläsare

En medarbetare utan Studio kan skanna bilden under värdens kod med en telefon, surfplatta eller dator på samma nätverk. DetailCraft öppnas i webbläsaren och fylls med värdens modell när värden släpper in dig. En inbjudningslänk låter någon ansluta från ett annat nätverk. Värden behöver en Team Cloud Plan-plats för appen. Alla andra ansluter gratis. Länken fungerar bara medan värdens session är öppen.

## När sessionen avslutas

Bara värden sparar modellen. Alla andra behåller en osparad kopia. Spara den om du vill behålla den.
