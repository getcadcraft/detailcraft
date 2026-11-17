---
title: Nyheter i 0.9
summary: Brittiska stålstorlekar från UK Blue Book och vinkelprofiler med ojämna ben, verkstadsritningar för varje del i en PDF-samling, Mina profiler för egna sektioner, P-Delta och egenfrekvenser, ASCE 7-vindlaster, seismisk plats och kombinationer, samt markörer i realtid och Följ.
keywords: nyheter, vad är nytt, versionsinformation, ändringslogg, 0.9, brittiskt stål, blue book, ub, uc, pfc, shs, rhs, chs, ojämn vinkel, verkstadsritning, verkstadsritningar, ritningssamling, delmärkning, pdf, mina profiler, egen profil, p-delta, andra ordningen, egenfrekvens, finita element, modal massa, vindlast, asce 7, seism, markklass, usgs, lastkombinationer, lrfd, asd, live, markörer, följ, personer, verktygstips, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, montage, kran, lastdiagram, film, autopilot, förbindelser, armering, trängsel, grundläggning, stomme, trä, lättregel, kapplista, konstruktionsbarhet, svetsåtkomst, leverantör, lager, leveranstid, vad brister först, betong, bjälklag, språk, assistent
from: 4c95a2de
---

Detta är vad som ändrades i DetailCraft 0.9, jämfört med 0.8.1. Version 0.9 ger de brittiska stålstorlekarna, en verkstadsritning för varje del på en gång, en större flik {{ui:Analys}} för ramar och en vy över varandras markörer när flera arbetar tillsammans.

## Nytt

### Brittiskt stål och verkstadsritningar

- **Brittiska stålstorlekar.** Profillistorna innehåller nu 976 storlekar från Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS och RHS. De kallformade ihåliga profilerna hålls åtskilda, eftersom deras namn börjar med CF. Namnen skrivs släkte först, till exempel UB305x165x40 eller SHS100x100x5.0. Det fungerar också att skriva dem som ritningarna gör, till exempel 305x165x40 UB, L100x100x10 eller SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Vinkelprofiler med ojämna ben.** UEA-vinklar behåller båda benen genom IFC in och ut och genom NC-filer. En spegling vänder biten ände för ände.
- **Alla verkstadsritningar på en gång.** Välj {{ui:Verkstadsritning}} i gruppen {{ui:Utdata}} när inget är markerat. Fönstret listar varje delmärkning och visar en förhandsvisning av valfri av dem. {{ui:Ladda ner alla}} sparar en PDF med en sida per delmärkning, var och en med titeln ”Blad 3 av 42”. {{ui:Ladda ner PDF}} sparar bladet du tittar på. U-profiler, vinkelprofiler och ihåliga profiler får nu blad också. Se [Gör verkstadsritningar](topic:shop-drawings).
- **Egna profiler.** En egen profil kan nu behållas för varje ny modell. I formuläret för egen profil lämnar du {{ui:Behåll i Mina profiler}} ikryssad. Listan {{ui:Mina profiler}} under den har {{ui:Behåll}}, {{ui:Använd här}} och {{ui:Ta bort}}. Listan sparas i den här webbläsaren (upp till 200), inte på ditt konto. Se [Plåtar och profiler](topic:plates-and-profiles).

### Analys

- **Andra ordningen (P-Delta).** Kryssa i {{ui:Andra ordningen (P-Delta)}} bredvid {{ui:Kör}} i fliken {{ui:Analys}}, så verkar normalkrafterna på den deformerade ramen. Plåtar och styva bjälklag förblir förstaordning, med en varning. Se [Krafter, reaktioner och nedböjningar](topic:frame-analysis).
- **Egenfrekvenser.** Blocket {{ui:Finita element: egenfrekvenser}} under resultaten hittar de lägsta svängningsformerna för samma modell, med period och effektiv modal massa. Det visar en svängningsform i modellen. Se [Krafter, reaktioner och nedböjningar](topic:frame-analysis).
- **Vindlaster och seismisk plats.** Tre nya block i fliken {{ui:Analys}}: {{ui:Vindlaster (ASCE 7, riktningsmetoden)}}, {{ui:Seismisk plats och system (ASCE 7)}} och {{ui:ASCE 7-lastkombinationer}}. Se [Vind, seismisk plats och ASCE 7-kombinationer](topic:wind-seismic-combinations).

### Att arbeta tillsammans

- **Markörer och namn.** I en Live-session ritas varje persons pekare i modellen med deras namn och färg. Det de markerat får en ruta.
- **Följ en person.** Öppna {{ui:Deltagare}} i sessionen och välj {{ui:Följ}} vid ett namn. Din vy följer med deras. Värden kan välja {{ui:Be alla följa mig}}. Se [Följ en person i en Live-session](topic:follow-in-live).

### I alla appar

- Verktygstipsen är Bootstrap-verktygstips, startkortet för tips har en stängknapp, flikraderna rullar i sidled när de inte ryms, och webbläsarfliken visar namnet på det öppna dokumentet följt av DetailCraft och CadCraft.

## Åtgärdat

- En egen profil försvann när du startade en ny modell.
- U-profiler, vinkelprofiler och ihåliga profiler saknades i verkstadsritningssamlingen.

## Ärliga begränsningar

- Blocken för vind, seism och finita element är hjälpmedel för kontroll. Din ingenjör granskar resultaten. De är ingen normkontroll. USGS-uppslagningen testades mot en ersättning, inte mot den levande tjänsten.
- Finita element och P-Delta har kontrollerats mot handräknade och slutna svar, inte mot en verklig byggnad. Knäckningsanalys är inte byggd.
- Ingen brittisk tillverkare har ännu prövat de brittiska storlekarna, och NC-filer för ojämna vinklar har inte körts på en maskin.
- Verkstadsritningssamlingen är endast PDF.
- Språk utöver engelska är maskinella utkast.
- Windows-installationsprogrammen är inte kodsignerade (Mer info, sedan Kör ändå). macOS-diskavbildningen är inte notariserad (högerklick, sedan Öppna).

Tidigare ändringar finns i anteckningarna för 0.8 och 0.8.1 längre ner på sidan.

## Tidigare: 0.8 och 0.8.1

Detta är vad som ändrades i DetailCraft 0.8 (1 november 2026) och 0.8.1 (2 november 2026), jämfört med 0.7. Version 0.7 kontrollerade stålstänger. Version 0.8 planerar lyften, föreslår förbindelserna, kontrollerar grunderna och armeringen, och bygger stommar av trä och lättregel för väggar, bjälklag och tak.

### Nytt

**Montage**

- **Monteringsplan och film.** I fliken {{ui:Montage}} beskriver du en kran (var den står, dess högsta krok och riggningen som inte finns i lastdiagrammet) och skriver in raderna i dess lastdiagram. DetailCraft lyfter modellen en sammanställning i taget, i fasordning och nivå för nivå. Varje lyft kontrolleras mot diagrammet vid sin radie och mot den marginal du angett. {{ui:Spara film}} skriver en HTML-fil som spelas upp offline i vilken webbläsare som helst, även i en telefon. Lyft som ligger över diagrammet, bortom det eller för högt finns i {{ui:Problem}}. Det är en plan utifrån dina siffror, inte en lyftplan. Se [Monteringsplan och film](topic:erection-movie).

**Förbindelser**

- **Autopilot för förbindelser.** Fliken {{ui:Autopilot}} tittar på varje skarv som saknar förbindelse och föreslår en utifrån profilerna: fotplåtar, skjuvflikar, ändplattor för balkar du markerat som momentbalkar, skarvar och knutplåtar. Ange en jämnt fördelad last eller en ändskjuvkraft, så följer antalet bultar bultens dimensioneringshållfasthet. {{ui:Lägg till alla}} lägger till förslagen som ett steg att ångra. De är startvärden att granska, inte en förbindelsedimensionering.
- **Konstruktionsbarhetskontroller.** {{ui:Problem}} för en bult som en skiftnyckel inte når, bultar för nära för hylsan, kälsvetsar utanför sina storleksgränser och ihåliga profiler som samlar vatten. Svetsåtkomst är ny: en runtomgående kälsvets som en svetsares brännare inte når listas med delen i vägen och andelen av svetsen som påverkas. Se [Konstruktionsbarhetskontroller](topic:constructability).

**Grunder och armering**

- **Grundkontroller.** Fliken {{ui:Grundläggning}} kontrollerar grundsulor, sammansatta grundsulor och plattgrunder på den jord du beskriver. Bärighet, glidning och vält kontrolleras från bruksbelastningar, och böjning, skjuvning, genomstansning, förankring och minsta armering från dimensionerande laster (ACI 318-19). En pelare nära en kant eller ett hörn kontrolleras med tvärsnittet avskuret av grundens kant. Sättningen kommer från jordens modul. En flexibel platta löses på fjädrar utifrån en underbäddsmodul, och pålgrupper och stödmurar har egna paneler. Pelarlaster kan skrivas in eller hämtas från {{ui:Analys}}. Se [Grundkontroller](topic:foundation-checks).
- **Karta över armeringstrångsel.** Fliken {{ui:Trängsel}} ritar en värmekarta över varje grund sedd uppifrån. Den visar var armeringen lämnar för lite utrymme för betongen att komma ner, mot regeln om fritt avstånd och, om du anger dem, största ballast och vibratorhuvudet. Se [Karta över armeringstrångsel](topic:rebar-congestion).

**Stomme och leverans**

- **Trä- och lättreglestomme.** Fliken {{ui:Stomme}} bygger vägg-, bjälklags- och takpaneler med varje stycke, en kapplista, virket att köpa och en verkstadsritning i skala. {{ui:Placera som element}} lägger stycket i modellen, och {{ui:PDF-blad}} sparar ett blad för varje panel. Dimensionerna, avstånden och överliggarna bestämmer du. DetailCraft kontrollerar inte att de bär lasten. Se [Trä- och lättregelpaneler](topic:framing-panels).
- **Leverantörslager och leveranstider.** Fliken {{ui:Leverans}} läser en leverantörs lagerlista (CSV) och visar för varje profil som kapplistan köper om det finns tillräckligt på lager och hur lång väntan är. Brister och sena profiler finns i {{ui:Problem}}. Inget beställs. Se [Leverantörslager och leveranstider](topic:supplier-stock).

**Analys och dimensionering**

- **Vad brister först?** I fliken {{ui:Analys}} hittar knappen den hållfasthetskombination som styr, den svagaste stången och hur mycket lasterna kan växa innan första stången når sin gräns. Den visar även den svagaste ändplattan eller skjuvfliken där bultarnas skjuvhållfasthet är känd. Knappen behöver först kombinationerna och en dimensioneringsnorm. Bärighet, blockskjuvning, svetsar och hävverkan kontrolleras inte. Din anslutna assistent kan begära samma sak.
- **Live.** Kryssa i {{ui:Live: lös om efter varje ändring}}, så löses ramen om efter varje ändring.
- **Betong, mer.** En smal pelare i en ram utan sidoförskjutning dimensioneras för sitt förstorade moment (ACI 318-19 6.6.4.5). Den seismiska perioden kan tas från analysen med Rayleighs metod. Ett bjälklag av plåtar får den stålarmering varje lager behöver utifrån sina moment, samt enkelriktad skjuvning. Se [Kontrollera betongdelar och gör seismiska laster](topic:concrete-and-seismic).
- **För en ingenjör att granska.** Resultaten för grunder, betong och Vad brister först är hjälpmedel. Vindlaster finns inte ännu.

**I alla appar**

- **Språk.** Hjälpen finns på 54 språk. De utöver engelska är maskinella utkast tills en infödd talare har läst dem. Tio är nya: litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska.
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} väljer radbrytning, 2 rader eller 1 rad. Ett fält som redan ryms står kvar som det är, och resten rullar i sidled.
- **Egenskapsrutnät.** Grundens fält använder det gemensamma rutnätet, med hopfällbara kategorier och kompakt täthet. Inskrivna uträkningar som 2*450 fungerar fortfarande.
- **Inmatningsenheter.** Styrplatta, penna, 3D-mus, handkontroll och MIDI kan styra apparna. Se [Navigera i 3D](topic:navigate-3d).
- **Problempanelen.** Varningarna från de nya kontrollerna ovan visas i samma {{ui:Problem}}-panel som tidigare.
- **Anslut din AI.** Din egen assistent, ansluten via CadCraft Studio, fungerar med alla åtta apparna och ser bara det du tillåter. Anslutning med ett klick, den värdbaserade kopplingen och din egen API-nyckel i Studio kommer ännu. Se [Använd DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **Språk i Studio.** Studio och de paketerade utgåvorna kan byta språk när de körs. Tidigare var de bara på engelska. Det är ännu inte prövat på alla plattformar, så säg till om språket inte ändras.
- **Markering med korsande fönster.** 0.8.1-installationsprogrammen har redan rätt beteende för markering med korsande fönster från 0.8-webbversionen. Ett äldre installationsprogram hade det inte.
- **Surfplattor i porträttläge.** Ledig rutnätshöjd går till ritytan, och bladlayouten börjar vid 760 px eller mindre.

### Inte i den här versionen ännu

- **Skicka NC till en maskin** är inte släppt.
- **Vindlaster** för betong finns inte ännu, och betong- och grundkontrollerna är för en ingenjör att granska.
- **Kodsignering.** Windows-installationsprogrammen och macOS .dmg-filen är inte signerade. Windows kan därför varna, och macOS begär högerklick och sedan Öppna.

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
