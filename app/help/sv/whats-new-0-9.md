---
title: Nyheter i 0.9 (tidigare)
summary: Brittiska stålprofiler och ojämlika vinklar, verkstadsritningar för varje del i ett enda set PDF, Mina profiler för anpassade profiler, P-Delta och egenfrekvenser, vindlaster enligt ASCE 7, seismisk plats och kombinationer, samt levande markörer och Följ.
keywords: nyheter 0.9, tidigare version, nyheter, versionsinformation, ändringslogg, 0.9, brittiskt stål, Blue Book, UB, UC, PFC, SHS, RHS, CHS, ojämlik vinkel, verkstadsritning, verkstadsritningar, bladset, positionsmärke, pdf, mina profiler, anpassad profil, P-Delta, andra ordningen, egenfrekvens, finita element, modal massa, vindlast, ASCE 7, seismisk, platsklass, USGS, lastkombinationer, LRFD, ASD, live, markörer, följ, personer, verktygstips, ändringar, 0.8, 0.8.1, version, nya funktioner, montage, kran, lasttabell, film, autopilot, förband, armering, trängsel, grundläggning, sättning, stomme, trä, lättprofil, kapplista, byggbarhet, svetsåtkomst, leverantör, lager, leveranstid, vad går sönder först, betong, seismisk, bjälklag, språk, assistent
from: ab0c7f05
---

Det här är vad som ändrades i DetailCraft 0.9, jämfört med 0.8.1. 0.9 ger brittiska stålprofiler, en verkstadsritning för varje del i ett svep, en större flik {{ui:Analys}} för ramar och en vy över varandras markörer när ni arbetar tillsammans.

## Nytt

### Brittiska stålprofiler och verkstadsritningar

- **Brittiska stålprofiler.** Profillistorna innehåller nu 976 dimensioner från Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS och RHS, där de kallformade ihåliga profilerna hålls åtskilda (deras namn börjar med CF). Namnen skrivs med familjen först, till exempel UB305x165x40 eller SHS100x100x5.0, och det fungerar också att skriva dem som ritningar gör: 305x165x40 UB, L100x100x10, SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Ojämlika vinklar.** UEA-vinklar behåller båda benen genom IFC in och ut och genom NC-filer, och en spegling vänder biten ände för ände.
- **Alla verkstadsritningar på en gång.** Välj {{ui:Verkstadsritning}} i gruppen {{ui:Utdata}} när inget är markerat. Fönstret listar varje positionsmärke, förhandsvisar vilket som helst av dem, och {{ui:Ladda ner alla}} sparar en PDF med en sida per märke, där varje sida har titeln "Blad 3 av 42". {{ui:Ladda ner PDF}} sparar det du tittar på. Kanaler, vinklar och ihåliga profiler får nu blad också. Se [Gör verkstadsritningar](topic:shop-drawings).
- **Mina profiler.** En anpassad profil kan nu behållas för varje ny modell. I formuläret för anpassad profil, lämna {{ui:Behåll i Mina profiler}} ikryssat; listan {{ui:Mina profiler}} under den har {{ui:Behåll}}, {{ui:Använd här}} och {{ui:Ta bort}}. Listan sparas i den här webbläsaren (upp till 200), inte på ditt konto. Se [Plåtar och profiler](topic:plates-and-profiles).

### Analys

- **Andra ordningen (P-Delta).** Kryssa i {{ui:Andra ordningen (P-Delta)}} bredvid Kör på fliken {{ui:Analys}} så verkar normalkrafterna på den deformerade ramen. Plåtar och styva bjälklag förblir av första ordningen, med en varning. Se [Krafter, reaktioner och nedböjningar](topic:frame-analysis).
- **Egenfrekvenser.** Blocket {{ui:Finita element: egenfrekvenser}} under resultaten hittar de lägsta svängningsformerna för samma modell, med period och effektiv modal massa, och visar en svängningsform i modellen. Se [Krafter, reaktioner och nedböjningar](topic:frame-analysis).
- **Vindlaster och seismisk plats.** Tre nya block på fliken {{ui:Analys}}: {{ui:Vindlaster (ASCE 7, riktningsmetoden)}}, {{ui:Seismisk plats och system (ASCE 7)}} och {{ui:ASCE 7-lastkombinationer}}. Se [Vind, seismisk plats och ASCE 7-kombinationer](topic:wind-seismic-combinations).

### Att arbeta tillsammans

- **Markörer och namn.** I en Live-session ritas varje persons pekare i modellen med deras namn och färg, och det de har markerat får en ruta.
- **Följ en person.** Öppna {{ui:Personer}} i sessionen och välj {{ui:Följ}} vid ett namn; din vy följer deras. Värden kan välja {{ui:Be alla följa mig}}. Se [Följ en person i en Live-session](topic:follow-in-live).

### I alla appar

- Verktygstips är Bootstrap-tips, startkortet har en stängknapp, flikraderna rullar i sidled när de inte ryms, och webbläsarfliken visar det öppna dokumentet följt av DetailCraft och CadCraft.

## Åtgärdat

- En anpassad profil försvann när du började en ny modell.
- Kanaler, vinklar och ihåliga profiler saknades i verkstadsritningssetet.

## Ärliga begränsningar

- Vind-, seismik- och finita element-blocken är hjälpmedel för kontroll. Din ingenjör granskar resultaten; de är inte en normkontroll. USGS-uppslaget testades på en ersättning, inte mot den riktiga tjänsten.
- Finita element och P-Delta kontrollerades mot handberäkningar och slutna svar, inte mot en verklig byggnad. Knäckningsanalys är inte byggd.
- Ingen brittisk tillverkare har ännu provat de brittiska profilerna, och NC-filer för ojämlika vinklar har inte körts på någon maskin.
- Verkstadsritningssetet är endast PDF.
- Språk utöver engelska är maskinöversättningar i utkastform.
- Windows-installerarna är inte kodsignerade (Mer information, sedan Kör ändå); macOS-diskavbildningen är inte notariserad (högerklicka, sedan Öppna).

Tidigare ändringar finns i 0.8- och 0.8.1-noterna längre ner på den här sidan.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrades i DetailCraft 0.8 (1 november 2026) och 0.8.1 (2 november 2026), jämfört med 0.7. 0.7 kontrollerade stålstänger; 0.8 planerar lyften, föreslår förbanden, kontrollerar grunderna och armeringen, och bygger upp trä- och lättprofilsväggar, bjälklag och tak.

### Nytt

**Montage**

- **Monteringsplan och film.** På fliken {{ui:Montage}} beskriver du en kran (var den står, dess högsta krok, lyftredskapen som inte finns i lasttabellen) och skriver in raderna i dess lasttabell. DetailCraft lyfter modellen en sammanställning i taget, i fasordning och nivå för nivå, och kontrollerar varje lyft mot tabellen vid dess radie och mot marginalen du angett. {{ui:Spara film}} skriver en HTML-fil som spelas upp offline i vilken webbläsare som helst, även i en telefon. Lyft som ligger utanför tabellen, bortom den eller för höga finns i {{ui:Problem}}. Det är en plan utifrån dina värden, inte en lyftplan. Se [Monteringsplan och film](topic:erection-movie).

**Förband**

- **Autopilot för förband.** Fliken {{ui:Autopilot}} tittar på varje knut som saknar förband och föreslår ett utifrån profilerna: fotplåtar, skjuvflikar, ändplattor för de balkar du markerar som momentbalkar, skarvar och knutplåtar. Ge en jämnt fördelad last eller en ändskjuvkraft, så följer antalet bultar bultens dimensionerande hållfasthet. {{ui:Lägg till alla}} lägger till förslagen som ett enda steg att ångra. De är startvärden att granska, inte en förbandsdimensionering.
- **Byggbarhetskontroller.** {{ui:Problem}} för en bult som en skiftnyckel inte når, bultar för nära för hylsan, kälsvetsar utanför deras storleksgränser och ihåliga profiler som håller vatten. Svetsåtkomst är ny: en rundsvets som en svetsares brännare inte når listas, med delen som står i vägen och andelen av svetsen som påverkas. Se [Byggbarhetskontroller](topic:constructability).

**Grundläggning och armering**

- **Grundkontroller.** Fliken {{ui:Grundläggning}} kontrollerar grundsulor, sammansatta grundsulor och plattor på den jord du beskriver: bärighet, glidning och vält från bruksgränslaster; böjning, skjuvning, genomstansning, förankring och minsta armering från dimensionerande laster (ACI 318-19). En pelare nära en kant eller ett hörn kontrolleras med tvärsnittet avskuret vid grundsulans kant. Sättning beräknas från jordens modul, en flexibel platta löses på fjädrar utifrån en undergrundsmodul, och pelargrupper och stödmurar har egna paneler. Pelarlaster kan skrivas in eller hämtas från {{ui:Analys}}. Se [Grundkontroller](topic:foundation-checks).
- **Karta över armeringstrångsel.** Fliken {{ui:Trängsel}} ritar en värmekarta över varje grundsula sedd uppifrån: var stängerna lämnar för lite utrymme för betongen att ta sig ner, mot regeln för fritt avstånd och, om du anger dem, största ballast och vibratorhuvudet. Se [Karta över armeringstrångsel](topic:rebar-congestion).

**Stomme och leverans**

- **Stomme i trä och lättprofil.** Fliken {{ui:Stomme}} bygger upp väggs-, golvs- och takpaneler med varje del, en kapplista, lagret att köpa och en verkstadsritning i skala. {{ui:Placera som element}} lägger delarna i modellen, och {{ui:PDF-blad}} sparar ett blad för varje panel. Dimensionerna, avstånden och överliggarna är dina: DetailCraft kontrollerar inte att de bär lasten. Se [Stompaneler i trä och lättprofil](topic:framing-panels).
- **Leverantörslager och leveranstider.** Fliken {{ui:Leverans}} läser en leverantörs lagerlista (CSV) och visar, för varje profil som kapplistan köper, om det finns tillräckligt i lager och hur lång väntan är. Brister och sena profiler finns i {{ui:Problem}}. Inget beställs. Se [Leverantörslager och leveranstider](topic:supplier-stock).

**Analys och dimensionering**

- **Vad går sönder först?** På fliken {{ui:Analys}} hittar knappen den hållfasthetskombination som styr, den svagaste stången, hur mycket lasterna kan öka innan den första stången når sin gräns, och den svagaste ändplattan eller skjuvfliken där bultarnas skjuvhållfasthet är känd. Den kräver kombinationerna och en dimensioneringsnorm först. Bärighet, blockskjuvning, svetsar och hävning av bultar kontrolleras inte. Din anslutna assistent kan fråga samma sak.
- **Live.** Kryssa i {{ui:Live: lös om efter varje ändring}} så löses ramen om efter varje ändring.
- **Betong och mer.** En slank pelare i en icke-sidoförskjutbar ram dimensioneras för sitt förstorade moment (ACI 318-19 6.6.4.5). Den seismiska perioden kan tas från analysen med Rayleighs metod. En platta av plåtar får den armering varje lager behöver utifrån sina moment, och envägsskjuvningen. Se [Kontrollera betongstänger och skapa seismiska laster](topic:concrete-and-seismic).
- **För en ingenjör att granska.** Resultaten för grund, betong och Vad går sönder först är hjälpmedel. Vindlaster är inte byggda.

**I alla appar**

- **Språk.** Hjälpen finns på 54 språk. De utöver engelska är maskinöversättningar i utkastform tills en modersmålstalare har läst dem; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili, uzbekiska).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} väljer radbrytning, 2 rader eller 1 rad. Ett fält som redan ryms behålls som det är; resten rullar i sidled.
- **Egenskapsrutnät.** Fältet för grunden använder det gemensamma rutnätet: hopfällbara kategorier och kompakt täthet. Skriven aritmetik som 2*450 fungerar fortfarande.
- **Indataenheter.** Styrplatta, penna, 3D-mus, handkontroll och MIDI kan styra apparna. Se [Navigera i 3D](topic:navigate-3d).
- **Problempanelen.** Varningarna från de nya kontrollerna ovan visas i samma {{ui:Problem}}-panel som tidigare.
- **Koppla din AI.** Din egen assistent, ansluten via CadCraft Studio, fungerar med alla åtta apparna och ser bara det du tillåter. Enklickskoppling, den hostade kopplingen och din egen API-nyckel i Studio återstår. Se [Använd DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **Språk i Studio.** Studio och de paketerade utgåvorna kan byta språk vid körning; tidigare fanns de bara på engelska. Det är inte testat på alla plattformar än: säg till om språket inte ändras.
- **Markering med korsande fönster.** Installerarna för 0.8.1 har redan med sig beteendet för markering med fönster som fanns i webbversionen av 0.8; en äldre installerare hade inte det.
- **Surfplattor i porträttläge.** Ledigt rutnätsutrymme går till arbetsytan, och bladlayouten börjar vid 760 px eller mindre.

### Inte i den här versionen ännu

- **Skicka NC till en maskin** är inte släppt.
- **Vindlaster** för betong är inte byggda, och betong- och grundkontrollerna är till för en ingenjör att granska.
- **Kodsignering.** Windows-installerarna och macOS .dmg-filen är inte signerade, så Windows kan varna och macOS begär högerklick, sedan Öppna.

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
