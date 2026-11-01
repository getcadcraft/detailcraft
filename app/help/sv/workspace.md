---
title: En rundtur på skärmen
summary: Varje fält, panel och flik i DetailCraft med sitt namn på skärmen och vad var och en är till för.
keywords: skärm, layout, verktygsfält, paneler, egenskaper, statusfält, rapporter, gränssnitt, gui, flikar
from: 454f74fd
---

DetailCraft fyller webbläsarfönstret under appfältet. Uppifrån och ned: verktygsfältet, sedan tre kolumner (panelen {{ui:Modell}}, vyn, panelen {{ui:Egenskaper}}), sedan rapportflikarna och sist statusfältet.

## Appfältet

Det smala fältet allra högst upp tillhör CadCraft-webbplatsen, inte modellen. Det visar appens namn och version, en länk till {{ui:Om DetailCraft}}, {{ui:Hjälp}} (eller {{key:F1}}) för den här hjälpen, {{ui:Spara för offline}}, knappen för skärmläge och omkopplaren {{ui:Papper}} / {{ui:Modell}}.

- {{ui:Spara för offline}} sparar DetailCraft, dess 3D-vy och den här hjälpen i webbläsaren så att det öppnas utan uppkoppling. Knappen visar {{ui:Redo för offline}} när sparningen är klar; klicka då på den för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. Se [Arbeta offline](common:offline).
- {{ui:Papper}} ger en ljus skärm och {{ui:Modell}} en mörk. 3D-vyn följer med direkt; ingenting i modellen ändras.
- Knappen för skärmläge och {{key:Ctrl+Shift+F}} växlar mellan normalt läge, helskärm och helskärm med fälten dolda. {{key:Ctrl+Shift+F}} använder Ctrl-tangenten på alla datorer, även Mac. När fälten är dolda pekar du på skärmens övre kant (eller trycker på den) för att få fram dem igen. {{key:Esc}} lämnar helskärm.

## Verktygsfältet

Verktygsfältet har fem grupper. Håll pekaren över en knapp för att se vad den gör och vilken tangent den har.

| Grupp | Knappar | Vad de gör |
|---|---|---|
| {{ui:Fil}} | {{ui:Ny}}, {{ui:Öppna}}, {{ui:Importera IFC}}, {{ui:Spara}}, {{ui:Exempel}} | Starta en modell, öppna en sparad `.detailcraft.json` eller en IFC-fil, spara en modell eller öppna exempelstommen |
| {{ui:Placera}} | {{ui:Markera}}, {{ui:Balk}}, {{ui:Pelare}}, {{ui:Stag}}, {{ui:Plåt}}, {{ui:Plint}}, {{ui:Trappa}} | Verktyget som nästa klick i vyn använder |
| {{ui:Förbind}} | {{ui:Ändplattor}}, {{ui:Fotplåt}}, och i {{ui:Mer}}: {{ui:Skjuvlaskar}}, {{ui:Skarv}}, {{ui:Knutplåt}}, {{ui:Liknande}} | Lägg till en förbindelse på den markerade balken, pelaren eller staget, eller kopiera den markerade förbindelsen till alla knutar som liknar den |
| {{ui:Redigera}} | {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Mer}} | Gå bakåt och framåt bland ändringarna; kopiera markeringen och klistra in den. {{ui:Mer}} öppnar en meny med {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}, var och en med sin tangent |
| {{ui:Utdata}} | {{ui:IFC}}, {{ui:NC-filer}}, {{ui:Stycklista}}, {{ui:Verkstadsritning}}, {{ui:Ritningar}}, och i {{ui:Mer}}: {{ui:Bockning}}, {{ui:Viktrapport per etapp}}, {{ui:KISS-fil för tillverkningsprogram}} | Ladda ner en export eller öppna ritningsbladen |

Knappar och menyval som inte kan användas just nu är nedtonade, och om du håller pekaren över en står det varför. {{ui:Ändplattor}} kräver en markerad balk, {{ui:Fotplåt}} en markerad pelare, {{ui:Liknande}} en markerad förbindelse, {{ui:Verkstadsritning}} en markerad del som är en I-profil eller plåt, {{ui:Kopiera}} en markerad stång eller plint och {{ui:Klistra in}} något som kopierats. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Panelen Modell (till vänster)

- {{ui:Modell}}: modellens {{ui:Namn}}. Det namnger varje fil du sparar eller exporterar.
- {{ui:Rutnät}}: rutnätslinjerna och deras avstånd, och {{ui:Verkställ rutnät}}. Se [Ställ in rutnät och nivåer](topic:grids-and-levels).
- {{ui:Nivåer}}: en rad per nivå (namn och höjd i mm), {{ui:Lägg till nivå}} och {{ui:Verkställ nivåer}}.
- {{ui:Egen profil}}: gör ditt eget parametriska tvärsnitt. Stängd tills du öppnar den.
- {{ui:Delmärken}}: varje delmärke i modellen med profil, längd och antal. Klicka på ett märke för att markera den första delen som har det.

{{ui:Rutnät}}, {{ui:Nivåer}} och {{ui:Egen profil}} kan fällas ihop: klicka på rubrikerna.

## Vyn (i mitten)

Vyn visar modellen i 3D. Ovanför den har vyfältet tre knappar och en lista:

- {{ui:3D}}: vrid modellen fritt.
- {{ui:Planritning}}: titta rakt ned på en nivå. En lista med nivåer visas bredvid knapparna. Allt som ligger mer än 1,5 m över nivån skärs bort så att du kan se och klicka på nivån tydligt.
- {{ui:Fasad}}: titta rakt på en bokstavsmärkt rutnätslinje (Rutnät A, Rutnät B …). En lista med bokstavsrutnäten visas. Bara stålet inom 1 m från den linjen visas.
- Anpassa-knappen längst till höger i vyfältet zoomar så att hela modellen syns.

Små punkter markerar varje rutnätsskärning på varje nivå. När ett placeringsverktyg är på tänds punkten närmast pekaren och statusfältet namnger den, till exempel "A/2 at Level 1". Färger skiljer stångtyperna åt: pelare, balkar, stag och plåtar har var sin färg, bultar och ankarbultar en annan, plintar är genomskinliga och armering ritas som rör. Hål visas som mörka pluggar; urtag är utskurna.

Hur du vrider, panorerar och zoomar: [Förflytta dig i 3D-vyn](topic:navigate-3d).

När modellen är tom visar vyn en kort lista "Start a model". Du kan också släppa en sparad modellfil var som helst på vyn för att öppna den.

## Panelen Egenskaper (till höger)

Vad den här panelen visar beror på vad du gör, och rubriken säger vilket: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" eller "Paste".

- **Inget markerat:** en sammanfattning av modellen (stänger, förbindelser, plintar, delar, märken, bultar, stål- och armeringsvikt, rutnät, nivåer).
- **Ett placeringsverktyg på:** alternativen för nästa del (profil, material, läge, rotation och för pelare {{ui:Upp till}}), en sammanfattning av den valda profilen och ett formulär {{ui:Lägg till efter rutnät}} för att placera utan att klicka i vyn.
- **En stång markerad:** dess namn, profil, material, läge, rotation, koordinaterna för de två ändarna, märken, kapad längd och vikt, hål och urtag samt knappar för förbindelser, dess verkstadsritning och {{ui:Ta bort}}.
- **En förbindelse markerad:** varje inställning för plåt, bult och svets, de bultar och svetsar den ger, dess varningar och {{ui:Använd på liknande}}.
- **En plint markerad:** dess läge och storlek, bottennätet, startjärnen och de postnummer den använder.
- **Flera objekt markerade:** hur många stänger av varje typ, förbindelser och plintar, deras stålvikt, samt {{ui:Kopiera}}, {{ui:Duplicera}} och {{ui:Ta bort}}.
- **Inklistring:** vad som finns i urklipp och formulär för att klistra in med en angiven förskjutning eller på en rutnätsskärning som du väljer i listor.

Sifferfält börjar gälla när du trycker på {{key:Enter}} eller lämnar fältet. Varje ändring är ett steg som du kan ångra.

## Rapportflikarna (längst ned)

- {{ui:Problem}}: allt som DetailCraft inte kunde bygga eller vill att du kontrollerar, med en knapp {{ui:Markera}} på varje rad. Fliken visar antalet inom parentes.
- {{ui:Stycklista}}: delar, sammanställningar samt bultar och ankarbultar, med vikter och en länk {{ui:Ladda ner CSV}}. Klicka på ett delmärke för att markera den delen.
- {{ui:Bockningsförteckning}}: varje armeringsmärke i varje plint, med en länk {{ui:Ladda ner CSV}}.

När en flik har fokus flyttar {{key:Left}} och {{key:Right}} mellan flikarna.

## Statusfältet

Fältet längst ned har tre delar: rutnätsskärningen under pekaren vid placering, det senaste meddelandet (vad som just hände eller varför något avvisades) och löpande summor för delar, bultar, stålvikt och armeringsvikt. När en åtgärd verkar inte göra något, läs meddelandet här först.

Webbläsarflikens titel börjar med en punkt (•) medan modellen har ändringar som du inte har sparat.

## På en smal skärm

Under ungefär 760 bildpunkters bredd staplas kolumnerna: verktygsfält, vy, statusfält, {{ui:Egenskaper}}, rapportflikar och sist panelen {{ui:Modell}}. Rulla sidan för att nå dem. DetailCraft är gjort för en dator- eller laptopskärm; en telefon duger för att titta, inte för att detaljera.
