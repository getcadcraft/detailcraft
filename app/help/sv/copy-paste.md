---
title: Kopiera, klistra in och duplicera
summary: Markera flera delar, kopiera dem med deras hål, urtag och anslutningar och klistra in dem på en rutnätsskärning, med förskjutning, på plats eller i en annan flik. Klipp ut, duplicera, ta bort och markera allt.
keywords: kopiera, klistra in, klipp ut, duplicera, urklipp, klistra in på plats, markera allt, avmarkera, flerval, Shift-klick, flera, upprepa ett fack, kopiera en ram, förskjutning, ta bort flera, redigeringsmeny, mer-meny
from: f25f1829
---

Gruppen {{ui:Redigera}} på verktygsfältet har {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}} och {{ui:Klistra in}}. Menyn {{ui:Mer}} innehåller resten: {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}, var och en med sin tangent. En knapp eller menypost som inte kan användas just nu är nedtonad; håll pekaren över den för att läsa varför (till exempel ”inget kopierat ännu”).

Varje inklistring, urklippning, duplicering och borttagning är ett steg: ett {{key:Mod+Z}} tar tillbaka allt.

## Markera flera delar

- Klicka på en del för att markera den. Håll ned {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) och klicka på fler delar för att lägga till dem; klicka på en markerad del på samma sätt för att ta bort den från markeringen.
- {{key:Mod+A}} eller {{ui:Markera allt}} markerar varje stång, anslutning och grund.
- {{key:Esc}} eller {{ui:Avmarkera}} rensar markeringen.

Med flera saker markerade har panelen {{ui:Egenskaper}} rubriken ”4 markerade” (eller hur många det är) och listar stängerna per typ, anslutningarna, grunderna och bruttostålvikten, med knapparna {{ui:Kopiera}}, {{ui:Duplicera}} och {{ui:Ta bort}}.

## Kopiera

1. Markera de stänger och grunder du vill ha.
2. Välj {{ui:Kopiera}} eller tryck på {{key:Mod+C}}.

Det som följer med:

- Varje stång i sin helhet: profil, material, ändar, position, rotation, namn, hål och urtag. En egen profil som den använder kopieras också.
- Varje grund i sin helhet: storlek, betong, nedre armeringsnät och startjärn.
- Ändplattor och fotplattor, men bara när varje stång som en anslutning förbinder kopieras: en balks ändplatta behöver balken och dess pelare. Statusfältet säger hur många anslutningar som lämnades kvar. Om du vill lämna kvar anslutningar med avsikt, avmarkera **Kopiera ändplattor och fotplattor med deras stänger** i [DetailCraft-inställningar](topic:settings).

En anslutning kan inte kopieras ensam; markera dess stänger i stället. Om du vill ge andra knutpunkter samma anslutning, använd {{ui:Liknande}} (se [Ändplattor](topic:end-plates#copy-it-to-every-similar-joint)).

Kopian finns kvar i den här webbläsaren tills du kopierar något annat. En annan DetailCraft-flik eller ett annat fönster i samma webbläsare kan klistra in den, så du kan kopiera en ram från en modell och klistra in den i en annan.

## Klistra in på en rutnätsskärning

1. Välj {{ui:Klistra in}} eller tryck på {{key:Mod+V}}.
2. Flytta pekaren över vyn. En streckad kontur av kopian följer rutnätsskärningen närmast pekaren.
3. Klicka på en skärning. Kopians baspunkt (dess nedersta hörn: den minsta x-, y- och z-koordinaten av allt som kopierats) hamnar där.

De inklistrade delarna markeras efteråt, så du kan klistra in igen någon annanstans eller ändra dem. {{key:Esc}} avbryter en inklistring; kopian finns kvar i urklippet. {{ui:Planritning}} och {{ui:Fasad}} gör det lättare att träffa rätt skärning.

:::tip
För att upprepa ett fack: markera facets stänger (eller allt med {{key:Mod+A}}), kopiera, klistra in och klicka på skärningen ett fack längre bort från där kopians nedersta hörn låg.
:::

## Klistra in från tangentbordet

Vid inklistring visar panelen {{ui:Egenskaper}} vad som finns i urklippet och två formulär:

- {{ui:Klistra in med förskjutning (mm, från originalet)}}: skriv x, y och z och välj {{ui:Klistra in med den här förskjutningen}}. Den börjar med förskjutningen från [DetailCraft-inställningar](topic:settings).
- {{ui:Klistra in på en rutnätsskärning}}: välj ett bokstavsrutnät, ett nummerrutnät och en nivå och välj {{ui:Klistra in här}}. Baspunkten hamnar där.

## Klistra in på plats

{{ui:Klistra in på plats}} ({{key:Mod+Shift+V}}) lägger kopian på exakt de koordinater den kopierades från. Använd det efter {{ui:Klipp ut}}, eller för att föra in delar från en annan modell på samma plats. Om originalen finns kvar ligger kopian ovanpå dem och statusfältet varnar dig: flytta kopiorna med deras {{ui:Början}} och {{ui:Slutet}} i {{ui:Egenskaper}}, eller ångra.

## Duplicera

{{ui:Duplicera}} ({{key:Mod+D}}) kopierar markeringen och klistrar in den direkt, förskjuten med förskjutningen i [DetailCraft-inställningar](topic:settings) (6000 mm längs x till en början). Urklippet ändras inte. Kopiorna markeras efteråt, så om du trycker på {{key:Mod+D}} igen görs nästa kopia av dem.

## Klipp ut och ta bort

- {{ui:Klipp ut}} ({{key:Mod+X}}) kopierar markeringen och tar sedan bort den. Klistra in den där den hör hemma.
- {{ui:Ta bort}} ({{key:Delete}} eller {{key:Backspace}}) tar bort markeringen. Om du tar bort en stång tas dess anslutningar bort också.

## Märkningar efter en inklistring

Del- och sammanställningsmärkningar lagras aldrig; DetailCraft numrerar dem på nytt utifrån modellen efter varje ändring ([Så tilldelas märkningar](topic:mark-rules)). Alltså:

- En kopia som är samma bit som originalet (samma profil, kvalitet, kapplängd, hål och urtag) delar originalets märkning, och antalet i {{ui:Delmärken}} och materialförteckningen ökar.
- En kopia som blir annorlunda får en egen märkning. En balk som klistras in utan sina ändplattor kapas till exempel inte tillbaka, så den är en annan bit. Märkningar numreras om över hela modellen, så andra delars nummer kan också ändras.

Varje inklistrad stång, hål, urtag, anslutning och grund får ett nytt id, så inget i modellen delas mellan en kopia och dess original.

## Om urklippet avvisas

Det som finns i urklippet kontrolleras lika noggrant som en modellfil du öppnar: allt som inte är en giltig DetailCraft-del tas bort, och statusfältet säger vad. Ett urklipp som fyllts av en nyare DetailCraft, eller av något annat, avvisas med ett meddelande och inget klistras in. Om ett privat fönster inte kan spara kopian i webbläsarens lagring fungerar kopian ändå i den fliken.
