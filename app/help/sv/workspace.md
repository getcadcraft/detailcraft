---
title: En rundtur i skärmbilden
summary: Varje fält, panel och flik i DetailCraft under sitt namn på skärmen och vad den är till för.
keywords: skärm, layout, verktygsfält, paneler, egenskaper, statusfält, rapporter, gränssnitt, ui, flikar
from: 94f81073
---

DetailCraft fyller webbläsarfönstret under appfältet. Uppifrån och ned: verktygsfältet, sedan tre kolumner (panelen {{ui:Modell}}, vyn och panelen {{ui:Egenskaper}}), sedan rapportflikarna och sist statusfältet.

## Appfältet

Den smala raden längst upp hör till CadCraft-webbplatsen, inte till modellen. Den visar appens namn och version, en länk till {{ui:Om DetailCraft}}, {{ui:Hjälp}} (eller {{key:F1}}) för den här hjälpen, {{ui:Spara för offline}}, knappen för skärmläge och växlaren {{ui:Papper}} / {{ui:Modell}}.

- {{ui:Spara för offline}} behåller DetailCraft, dess 3D-vy och den här hjälpen i din webbläsare, så att den öppnas utan anslutning. Den visar {{ui:Redo för offline}} när den är sparad; klicka då för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. Se [Arbeta offline](common:offline).
- {{ui:Papper}} ger en ljus skärm och {{ui:Modell}} en mörk. 3D-vyn följer direkt; inget i din modell ändras.
- Knappen för skärmläge och {{key:Ctrl+Shift+F}} växlar mellan normalt, helskärm och helskärm med fälten dolda. {{key:Ctrl+Shift+F}} använder Ctrl-tangenten på alla datorer, även Mac. Med fälten dolda för du pekaren mot skärmens överkant (eller trycker där) för att visa dem igen. {{key:Esc}} lämnar helskärm.

## Verktygsfältet

Verktygsfältet har fem grupper. För musen över en knapp för att se vad den gör och dess tangent.

| Grupp | Knappar | Vad de gör |
|---|---|---|
| {{ui:Fil}} | {{ui:Ny}}, {{ui:Öppna}}, {{ui:Importera IFC}}, {{ui:Spara}}, {{ui:Exempel}} | Startar en modell, öppnar en sparad `.detailcraft.json` eller en IFC-fil, sparar en, eller öppnar exempelramen |
| {{ui:Placera}} | {{ui:Markera}}, {{ui:Balk}}, {{ui:Pelare}}, {{ui:Stag}}, {{ui:Plåt}}, {{ui:Plint}}, {{ui:Trappa}} | Verktyget som nästa klick i vyn använder |
| {{ui:Förbind}} | {{ui:Ändplattor}}, {{ui:Fotplåt}}, och under {{ui:Mer}}: {{ui:Skjuvlaskar}}, {{ui:Skarv}}, {{ui:Knutplåt}}, {{ui:Liknande}} | Lägger till en förbindelse på den markerade balken, pelaren eller diagonalen, eller kopierar den markerade förbindelsen till varje liknande skarv |
| {{ui:Redigera}} | {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Mer}} | Gå bakåt och framåt genom ändringarna; kopiera markeringen och klistra in den. {{ui:Mer}} öppnar en meny med {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}, var och en med sin tangent |
| {{ui:Utdata}} | {{ui:IFC}}, {{ui:NC-filer}}, {{ui:Stycklista}}, {{ui:Verkstadsritning}}, {{ui:Ritningar}}, och under {{ui:Mer}}: {{ui:Bockning}}, {{ui:Viktrapport per etapp}}, {{ui:KISS-fil för tillverkningsprogram}} | Laddar ner en export, eller öppnar ritningsbladen |

Knappar och menyval som inte kan användas just nu är gråtonade, och om du för musen över en sådan visas varför. {{ui:Ändplattor}} kräver en markerad balk, {{ui:Fotplåt}} en markerad pelare, {{ui:Liknande}} en markerad förbindelse, {{ui:Verkstadsritning}} en modell med delar, {{ui:Kopiera}} ett markerat element eller en markerad plint, och {{ui:Klistra in}} något som har kopierats. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Panelen Modell (vänster)

- {{ui:Modell}}: modellens {{ui:Namn}}. Det namnger varje fil du sparar eller exporterar.
- {{ui:Rutnät}}: rutnätslinjerna och deras avstånd, samt {{ui:Verkställ rutnät}}. Se [Ställ in rutnät och nivåer](topic:grids-and-levels).
- {{ui:Nivåer}}: en rad per nivå (namn och höjd i mm), {{ui:Lägg till nivå}} och {{ui:Verkställ nivåer}}.
- {{ui:Egen profil}}: skapa din egen parametriska sektion. Den är stängd tills du öppnar den.
- {{ui:Delmärken}}: varje delmärke i modellen med sin profil, längd och antal. Klicka på ett märke för att markera den första delen med det.

{{ui:Rutnät}}, {{ui:Nivåer}} och {{ui:Egen profil}} viks ihop: klicka på deras rubriker.

## Vyn (mitten)

Vyn visar modellen i 3D. Ovanför den har vybaren tre knappar och en lista:

- {{ui:3D}}: vrid runt modellen fritt.
- {{ui:Planritning}}: titta rakt ned på en nivå. En lista med nivåer visas bredvid knapparna. Allt mer än 1,5 m ovanför nivån skärs bort, så att du tydligt kan se och klicka på nivån.
- {{ui:Fasad}}: titta rakt på en bokstavsmärkt rutnätslinje (Rutnät A, Rutnät B …). En lista med bokstavsmärkta rutnät visas. Bara stålet inom 1 m från linjen visas.
- Knappen för att passa in längst till höger på vybaren zoomar så att hela modellen syns.

Små prickar markerar varje rutnätsskärning på varje nivå. Medan ett placeringsverktyg är på lyser punkten närmast pekaren upp, och statusfältet namnger den, till exempel "A/2 på Nivå 1". Färger skiljer elementtyperna åt: pelare, balkar, stag och plåtar har var sin färg, bultar och ankarstänger en annan, plintar är genomskinliga och armering ritas som rör. Hål visas som mörka proppar; urtag är skurna.

Hur du vrider, panorerar och zoomar: [Rör dig i 3D-vyn](topic:navigate-3d).

När modellen är tom visar vyn en kort lista "Starta en modell". Du kan också släppa en sparad modellfil var som helst i vyn för att öppna den.

## Egenskapspanelen (höger)

Vad den här panelen visar beror på vad du gör, och rubriken säger vilket: "Modell", "Placera en balk", "Balk b2", "Ändplattaförbindelse", "Fotplåt", "Plint F1", "3 markerade" eller "Klistra in".

- **Inget markerat:** en sammanfattning av modellen (element, förbindelser, plintar, delar, märken, bultar, vikt för stål och armering, rutnät och nivåer).
- **Ett placeringsverktyg på:** alternativen för nästa del (profil, material, position, rotation och för pelare {{ui:Upp till}}), en sammanfattning av vald profil och ett formulär {{ui:Lägg till efter rutnät}} för att placera utan att klicka i vyn.
- **Ett element markerat:** dess namn, profil, material, position, rotation, koordinaterna för dess två ändar, dess märken, kapad längd och vikt, dess hål och urtag, och knappar för förbindelser, dess verkstadsritning och {{ui:Ta bort}}.
- **En förbindelse markerad:** varje inställning för plattor, bultar och svetsar, bultarna och svetsen den gör, dess varningar och {{ui:Verkställ på liknande}}.
- **En plint markerad:** dess position och storlek, bottenmattan, startjärnen och de armeringsmärken den använder.
- **Flera saker markerade:** hur många element av varje typ, förbindelser och plintar, deras stålvikt, samt {{ui:Kopiera}}, {{ui:Duplicera}} och {{ui:Ta bort}}.
- **Inklistring:** vad som finns på urklippet, och formulär för att klistra in med en skriven förskjutning eller på en rutnätsskärning som du väljer ur listor.

Talfält verkställs när du trycker på {{key:Enter}} eller lämnar fältet. Varje ändring är ett steg som du kan ångra.

## Rapportflikarna (nedtill)

- {{ui:Problem}}: allt DetailCraft inte kunde bygga eller vill att du ska kontrollera, med en knapp {{ui:Markera}} på varje rad. Fliken visar antalet inom hakparentes.
- {{ui:Stycklista}}: delar, sammanställningar samt bultar och ankarstänger, med vikter och en länk {{ui:Ladda ner CSV}}. Klicka på ett delmärke för att markera den delen.
- {{ui:Bockningsförteckning}}: varje stångmärke i varje plint, med en länk {{ui:Ladda ner CSV}}.

Med en flik i fokus flyttar {{key:Left}} och {{key:Right}} mellan flikarna.

## Statusfältet

Raden längst ned har tre delar: rutnätsskärningen under pekaren vid placering, det senaste meddelandet (vad som just hände, eller varför något avvisades) och löpande summor av delar, bultar, stålvikt och armeringsvikt. När en åtgärd verkar inte göra något, läs meddelandet här först.

Webbläsarfliken börjar med en prick (•) medan modellen har ändringar som du inte har sparat.

## På en smal skärm

Under ungefär 760 pixlar bred staplas kolumnerna: verktygsfältet, vyn, statusfältet, {{ui:Egenskaper}}, rapportflikarna och sist panelen {{ui:Modell}}. Rulla sidan för att nå dem. DetailCraft är gjort för en dator- eller bärbar skärm; en telefon går bra att titta på, men inte att detaljera i.
