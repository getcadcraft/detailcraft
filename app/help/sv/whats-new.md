---
title: Nyheter i 0.8 och 0.8.1
summary: En monteringsfilm från ett kranlastdiagram, en förbindelseautopilot, en karta över armeringstrångsel, grundläggningskontroller, paneler för trä- och lättregelstomme, konstruktionsbarhets- och svetsåtkomstkontroller, leverantörslager, vad som brister först, en live-omlösning, fler betongkontroller och rättelserna i 0.8.1.
keywords: nyheter, vad är nytt, versionsnoteringar, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, montage, kran, lastdiagram, film, autopilot, förbindelser, armering, trångsel, grund, plint, matta, sättning, stomme, trä, lättregel, kapplista, konstruktionsbarhet, svetsåtkomst, leverantör, lager, ledtid, vad som brister först, live, betong, seismisk, platta, språk, assistent
from: 6e33e052
---

Det här är vad som ändrades i DetailCraft 0.8 (1 november 2026) och 0.8.1 (2 november 2026), jämfört med 0.7. 0.7 kontrollerade stålelement; 0.8 planerar lyften, föreslår förbindelserna, kontrollerar grunderna och armeringen, och ritar upp stomme för trä- och lättregelväggar, golv och tak.

## Nytt

### Montage

- **Monteringsplan och film.** På fliken {{ui:Montage}} beskriver du en kran (var den står, dess högsta krok och riggningen som inte finns med i lastdiagrammet) och skriver in raderna i kranens lastdiagram. DetailCraft lyfter modellen en sammanställning i taget, i etappordning och lager för lager, och kontrollerar varje lyft mot lastdiagrammet vid dess radie och mot den marginal du angett. {{ui:Spara film}} skriver en HTML-fil som spelas upp offline i vilken webbläsare som helst, även i en telefon. Lyft som ligger över, utanför eller för högt för diagrammet visas i {{ui:Problem}}. Det är en plan utifrån dina värden, inte en lyftplan. Se [Monteringsplan och film](topic:erection-movie).

### Förbindelser

- **Förbindelseautopilot.** Fliken {{ui:Autopilot}} tittar på varje skarv som saknar förbindelse och föreslår en utifrån formerna: fotplåtar, skjuvlaskar, ändplattor för de balkar du markerar som momentbalkar, skarvar och knutplåtar. Anger du en jämnt fördelad last eller en ändskjuvkraft, följer antalet bultar bultens dimensionerande hållfasthet. {{ui:Lägg till alla}} lägger till förslagen som ett enda ångra-steg. De är startvärden att granska, inte en förbindelsekonstruktion.
- **Konstruktionsbarhetskontroller.** {{ui:Problem}} för en bult som en nyckel inte når, bultar som står för nära för hylsan, kälsvetsar utanför sina storleksgränser och ihåliga profiler som kan samla vatten. Svetsåtkomst är ny: en runtomgående kälsvets som en svetsares brännare inte når visas med delen som är i vägen och andelen av svetsen som påverkas. Se [Konstruktionsbarhetskontroller](topic:constructability).

### Grunder och armering

- **Grundläggningskontroller.** Fliken {{ui:Grundläggning}} kontrollerar plintar, kombinerade plintar och mattor på den jord du beskriver: bärighet, glidning och vält från bruksbelastningar; böjning, skjuvning, genomstansning, förankring och minimiarmering från dimensionerande laster (ACI 318-19). En pelare nära en kant eller ett hörn kontrolleras med det snitt som skärs av plintens kant. Sättning beräknas från jordens modul, en flexibel matta löses på fjädrar utifrån en undergrundsmodul, och pålgrupper och stödmurar har egna paneler. Pelarlaster kan skrivas in eller hämtas från {{ui:Analys}}. Se [Grundläggningskontroller](topic:foundation-checks).
- **Karta över armeringstrångsel.** Fliken {{ui:Trängsel}} ritar en värmekarta för varje plint sett uppifrån: var armeringen lämnar för lite utrymme för betongen att komma ner, mot regeln för fritt avstånd och, om du anger dem, största ballast och vibratorhuvudet. Se [Karta över armeringstrångsel](topic:rebar-congestion).

### Stomme och leverans

- **Trä- och lättregelstomme.** Fliken {{ui:Stomme}} ritar upp stomme för vägg-, golv- och takpaneler med varje del, en kapplista, virket att köpa och en verkstadsritning i skala. {{ui:Placera som element}} lägger delarna i modellen, och {{ui:PDF-blad}} sparar ett blad för varje panel. Dimensionerna, avstånden och överliggarna är dina: DetailCraft kontrollerar inte att de bär lasten. Se [Paneler för trä- och lättregelstomme](topic:framing-panels).
- **Leverantörslager och ledtider.** Fliken {{ui:Leverans}} läser en leverantörs lagerlista (CSV) och visar för varje profil som kapplistan köper om det finns tillräckligt i lager och hur lång väntan är. Korta och sena profiler finns i {{ui:Problem}}. Inget beställs. Se [Leverantörslager och ledtider](topic:supplier-stock).

### Analys och dimensionering

- **Vad brister först?** I fliken {{ui:Analys}} hittar knappen den styrande lastkombinationen, den svagaste delen, hur långt lasterna kan öka innan första delen når sin gräns, och den svagaste ändplattan eller skjuvlasken där bultarnas skjuvhållfasthet är känd. Det kräver först kombinationerna och en dimensioneringskod. Bärighet, blockskjuvning, svetsar och hävverkan (prying) kontrolleras inte. Din anslutna assistent kan ställa samma fråga.
- **Live.** Bocka för {{ui:Live: lös om efter varje ändring}} så löses ramen om efter varje ändring.
- **Betong och mer.** En slank pelare i en icke svajande ram dimensioneras för sitt förstorade moment (ACI 318-19 6.6.4.5). Den seismiska perioden kan tas från analysen med Rayleighs metod. En platta av plåtar får den stålarmering varje lager behöver utifrån sina moment, samt envägs skjuvning. Se [Kontrollera betongelement och skapa seismiska laster](topic:concrete-and-seismic).
- **För en konstruktör att granska.** Resultaten från grund-, betong- och Vad brister först? är hjälpmedel. Vindlaster finns inte ännu.

### I alla appar

- **Språk.** Hjälpen finns på 54 språk. De som inte är engelska är maskinella utkast tills en modersmålstalare har läst dem; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} väljer radbrytning, 2 rader eller 1 rad. Ett fält som redan ryms förblir som det är; resten rullas i sidled.
- **Egenskapsrutnät.** Plintens fält använder det gemensamma rutnätet: hopfällbara kategorier och en kompakt täthet. Inskriven aritmetik som 2*450 fungerar fortfarande.
- **Inmatningsenheter.** Pekplatta, penna, 3D-mus, handkontroll och MIDI kan styra apparna. Se [Navigera i 3D](topic:navigate-3d).
- **Problempanelen.** Varningarna från de nya kontrollerna ovan visas i samma panel {{ui:Problem}} som tidigare.
- **Anslut din AI.** Din egen assistent, ansluten via CadCraft Studio, fungerar med alla åtta apparna och ser bara det du tillåter. Anslutning med ett klick, den hostade kopplingen och din egen API-nyckel i Studio kommer senare. Se [Använd DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

## Rättat i 0.8.1

- **Språk i Studio.** Studio och de paketerade versionerna kan byta språk under körning; tidigare fanns bara engelska. Det är ännu inte testat på alla plattformar: säg till om språket inte ändras.
- **Korsande fönster.** Installerarna för 0.8.1 har det markeringssätt med fönster som redan var rätt i 0.8-webbversionen; en äldre installerare hade inte det.
- **Surfplattor i porträttläge.** Ledigt utrymme i rutnätet går till ritytan, och bladlayouten börjar vid 760 px eller mindre.

## Inte i den här versionen ännu

- **Skicka NC till en maskin** har inte släppts.
- **Vindlaster** för betong finns inte ännu, och betong- och grundläggningskontrollerna är till för en konstruktör att granska.
- **Kodsignering.** Windows-installerarna och macOS .dmg-filerna är inte signerade, så Windows kan varna, och macOS kräver ett högerklick och sedan Öppna.

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
