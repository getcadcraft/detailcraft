---
title: Felsökning
summary: Vad DetailCraft-meddelandena betyder och vad du ska göra, från en saknad 3D-vy till förband som inte går att bygga.
keywords: problem, fel, fungerar inte, hjälp, åtgärda, meddelande, nekad, webgl, tom, varning, kan inte, ärende
from: f8c3b2b1
---

Det mesta som nekas förklaras i statusfältet längst ned på skärmen eller i fliken {{ui:Problem}}. Läs dem först. Meddelandena nedan citeras så som DetailCraft visar dem.

## 3D-vyn saknas

**"Webbläsaren kunde inte starta 3D-grafik (WebGL). Modellen, rapporterna och exporterna fungerar fortfarande."**

Webbläsaren kunde inte starta WebGL, den 3D-grafik som DetailCraft ritar med.

1. Uppdatera webbläsaren till den senaste versionen.
2. Slå på hårdvaruacceleration och starta om webbläsaren (se nedan).
3. Uppdatera grafikdrivrutinen, eller prova en annan webbläsare. Fjärrskrivbord och virtuella datorer saknar ofta WebGL.
4. Under tiden kan du fortfarande arbeta: placera stänger med formuläret {{ui:Lägg till efter rutnät}}, läs rapporterna och exportera. Bara att klicka i vyn kräver WebGL.

:::chromium
Så här slår du på hårdvaruacceleration: öppna **Inställningar, System** och slå på **Använd grafikacceleration när det är tillgängligt**, och starta sedan om.
:::

:::firefox
Så här slår du på hårdvaruacceleration: öppna **Inställningar, Allmänt, Prestanda**, avmarkera **Använd rekommenderade prestandainställningar** och markera **Använd hårdvaruacceleration när det är tillgängligt**. Starta om Firefox.
:::

:::safari
Safari har WebGL påslaget som standard. Uppdatera macOS om vyn fortfarande inte startar, och kontrollera att inget tillägg blockerar det.
:::

Mer i [Webbläsare och datorer](common:browsers).

## Klick i vyn gör ingenting

- **Ingen korsning nära klicket.** Placeringsverktygen fångar bara rutnätskorsningar. Ett klick en bit från alla punkter gör ingenting. Flytta närmare tills punkten lyser.
- **Verktyget är {{ui:Markera}} och du klickade på tomt utrymme.** Det tar bort markeringen.
- **Du drog.** Ett tryck och en släppning mer än några bildpunkter från varandra är ett drag: det vrider eller panorerar vyn.
- **Delen är bortskuren.** I {{ui:Planritning}} och {{ui:Fasad}} är stål utanför snittet dolt och kan inte klickas på. Byt till {{ui:3D}}.
- **Korsningen är på fel nivå.** I {{ui:3D}} kan korsningar på flera nivåer överlappa på skärmen; klicket tar den närmaste. Använd {{ui:Planritning}} eller {{ui:Fasad}}.

## Placeringsmeddelanden

| Meddelande | Vad du ska göra |
|---|---|
| Det finns ingen nivå över Nivå 2 för pelaren att nå. Lägg till en nivå först. | Lägg till en nivå i {{ui:Nivåer}}, eller klicka på en lägre nivå |
| Välj en annan korsning för den andra änden. | Du klickade på samma punkt två gånger |
| De två ändarna är samma punkt. | I {{ui:Lägg till efter rutnät}} är "Från" och "Till" samma val |
| Lägg till rutnätslinjer åt vänster för att placera stänger. | Modellen har inga rutnätslinjer i en riktning |
| Okänd profil "…" | Profilen finns inte i katalogen eller i modellens egna profiler. Välj en i listan |
| Skriv ett tal. | Ett talfält lämnades tomt eller innehåller text |

## Förband går inte att bygga

### "Den här balken slutar inte på en pelarlinje."

Ändplattor kräver att balkens ände ligger exakt på en vertikal pelares linje, mellan dess under- och överkant (inom 1 mm). Kontrollera balkens {{ui:Ändar (x, y, z mm)}} och pelarens position.

### "Den här balken möter ett pelarliv eller i en vinkel"

Eller i {{ui:Problem}}: "Balkar som ansluts mot en pelares liv finns inte ännu: vrid pelaren 90° eller använd en annan förbindelse."

Balken ansluts mot pelarens liv. Markera pelaren och ange {{ui:Rotation (°)}} till 90, och försök sedan igen. Snedanslutningar byggs inte.

### "Ändplattor byggs bara för nivåbalkar (den här balken lutar)."

Båda balkens ändar måste ligga på samma höjd.

### "Ändplattor kräver att balken står upprätt (rotation 0)."

Ställ tillbaka balkens {{ui:Rotation (°)}} till 0.

### "Ändplattor kräver en I-balk." / "Ändplattor kräver en I-pelare."

Endast I-profiler (W, IPE, HEA, HEB eller en egen I-profil) kan få ändplattor.

### "Balkänden ligger inte längre på pelarlinjen."

Du flyttade balken eller pelaren efter att förbandet lades till. Flytta tillbaka den, eller ta bort förbandet.

### "Förbanden kapar den här delen till ingenting."

Förbanden i båda ändarna kapar delen längre än dess längd, till exempel en mycket kort balk mellan två djupa pelare. Kontrollera delens ändar och plattornas tjocklek.

### "Inga andra liknande leder som den här är utan förband."

{{ui:Liknande}} kopierar bara till leder med samma balkprofil, pelarprofil och förbandstyp (balk mot fläns) som inte har något förband än.

### "Båda ändarna har redan förband." / "Den här pelaren har redan en fotplatta."

Markera det befintliga förbandet för att ändra det, eller ta bort det först.

## Varningar i fliken Problem

Varningar stoppar inte ett förband eller en grund från att byggas; de ber dig kontrollera. Kant- och avståndsvarningarna använder EN 1993-1-8 tabell 3.3 som minimivärden (kant 1.2 × hål, bultavstånd 2.2 × hål, mått 2.4 × hål). Om ditt projekt använder andra regler gäller kanske inte varningen; DetailCraft dimensionerar inte förband.

"ett hål ligger utanför delens ände" betyder att ett håls x är mindre än 0 eller större än kaplängden. Kom ihåg att x mäts från kapstarten, efter att förbanden kapat tillbaka delen.

## Grundändringar nekas

| Meddelande | Vad du ska göra |
|---|---|
| Täckskiktet lämnar inget utrymme för armering i den här grunden. | Gör grunden större eller täckskiktet mindre |
| Grunden är för låg för två lager armering inom täckskiktet. | Gör den djupare eller minska täckskiktet |
| Startjärnen ryms inte inom grunden med 75 mm täckskikt. | Färre startjärn, tätare avstånd eller en större grund |
| Armeringsavståndet måste vara 50–1000 mm. | Skriv ett avstånd inom det intervallet |
| Längden måste vara 300–50000 mm. | Grundstorlekar har gränser: längd och bredd 300 till 50000, djup 150 till 10000 |

## Rutnät och nivåer nekas

| Meddelande | Vad du ska göra |
|---|---|
| Numrerade rutnät: ange ett avstånd mellan varje par av linjer (4). | Räkna dina mellanrum: fem linjer ger fyra avstånd |
| Bokstavsrutnät: avstånden måste vara positiva millimeter. | Inga nollor, negativa tal eller text |
| Numrerade rutnät: rutnätsetiketterna måste vara olika. | Två linjer har samma etikett |
| Högst 60 rutnätslinjer åt vardera hållet. | Dela upp modellen |
| Behåll minst en nivå. | Du tog bort alla nivårader |
| Varje nivå behöver ett namn. / Två nivåer heter "…". | Ge varje nivå ett eget namn |

## Öppnandet av en fil misslyckas

| Meddelande | Orsak |
|---|---|
| DetailCraft öppnar sina egna modeller (.detailcraft.json). IFC-import finns inte ännu. | Filen är inte en `.json`-fil |
| Det här är inte en DetailCraft-modell (inte JSON). | Filen är skadad eller är någon annan JSON |
| Det här är inte en DetailCraft-modell. | En JSON-fil från ett annat program |
| Den här modellen sparades av en nyare DetailCraft (format 2). | Öppna den i den nyare DetailCraft som sparade den |
| Filen är för stor för att vara en DetailCraft-modell. | Över 50 MB |

När en fil öppnas med varningar, till exempel "2 stänger var inte giltiga och lämnades utanför.", är resten av modellen i ordning. Spara inte över originalet förrän du har kontrollerat vad som lämnades utanför.

## Exporter

| Meddelande | Orsak |
|---|---|
| Inget att exportera ännu. | {{ui:IFC}} med en tom modell |
| Inga I-profil- eller plåtdelar att skriva NC-filer för. | Endast kanalprofiler, vinkelprofiler eller rör i modellen |
| Inte skrivet (hittills endast I-profiler och plåtar): … | De märkena är inte I-profiler eller plåtar; resten skrevs |
| Inga grunder, så inga armeringsjärn att schemalägga. | {{ui:Bockning}} utan grunder |
| … tecken utanför PDF-typsnittet skrevs ut som "?". | Modellnamnet eller en kvalitet har tecken som PDF-typsnittet saknar |

{{ui:Verkstadsritning}} är nedtonad: modellen har inga delar ännu.

## Nedladdningar syns inte

Varje sparning och export är en nedladdning i webbläsaren. Kontrollera webbläsarens nedladdningslista. Om webbläsaren frågar innan flera filer laddas ner, eller blockerar nedladdningar från den här sidan, tillåt dem. I Safari hittar du nedladdningsknappen i verktygsfältet.

## Tangenter gör ingenting

- Markören står i ett text- eller talfält: verktygstangenterna och {{key:Delete}} ignoreras där, så att du kan skriva. Tryck på {{key:Tab}} eller klicka i vyn.
- En dialogruta är öppen: stäng den först.
- Webbläsaren har tangentbordet (till exempel adressfältet): klicka inne i DetailCraft.
- {{key:Ctrl+Shift+F}} använder Ctrl även på en Mac.

## Offlineproblem

Knappen {{ui:Spara för offline}} i appfältet visar hur den offlinekopian mår. Så fungerar sparandet: [Arbeta offline](common:offline).

| Knappen visar | Vad det betyder | Vad du ska göra |
|---|---|---|
| {{ui:Spara för offline}} | Ingen offlinekopia i den här webbläsaren ännu | Välj den när du är online |
| Sparar 5 av 20 | Sparandet pågår | Vänta på {{ui:Redo för offline}}; håll fliken öppen |
| {{ui:Redo för offline}} | DetailCraft, dess 3D-vy, alla exporter och den här hjälpen fungerar utan anslutning | Inget. Klicka på den för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}} |
| {{ui:Kunde inte spara}} | Vissa filer laddades inte ner | Kontrollera anslutningen och klicka på knappen för att försöka igen |
| {{ui:Offline är inte tillgängligt}} | Det här fönstret kan inte behålla en offlinekopia: privata fönster och vissa hanterade datorer blockerar det | Använd ett vanligt fönster, eller arbeta online |

Om du är offline och knappen inte visar {{ui:Redo för offline}}, ladda inte om och stäng inte fliken: det som har laddats fortsätter att fungera. Spara modellen med {{key:Mod+S}} och vänta tills du är online igen.

## Osparat arbete

Om webbläsaren frågar om du vill lämna sidan har DetailCraft osparade ändringar. Välj att stanna och tryck sedan på {{key:Mod+S}}. DetailCraft kan inte återställa en modell efter att fliken har stängts.

## Fortfarande fast

Anteckna vad du gjorde och det exakta meddelandet, och berätta för oss via [supportsidan](https://getcadcraft.com/support).
