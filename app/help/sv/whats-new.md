---
title: Nyheter i 0.7
summary: Dimensioneringskontroller av I-profiler i stål med lastkombinationer enligt ASCE 7 eller EN 1990 och stångkontroller enligt AISC 360 eller EN 1993-1-1, USD-export av stålmodellen, ett assistentverktyg för USD, ett Stål-band med stora och små knappar, paneler som fälls undan och dialogrutor som går att flytta.
keywords: nyheter, vad är nytt, versionsanteckningar, ändringslogg, ändringar, 0.7, version, nya funktioner, dimensioneringskontroller, ståldimensionering, utnyttjandegrad, lastkombinationer, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, nationell bilaga, nyttig last på tak, nedböjningsgräns, usd, usda, usdc, usdz, openusd, assistent, mcp, stålband, menyflik, delad knapp, enheter, kompakt, paneler, dialogrutor, portugisiska
from: 17d1e0bb
---

Det här är vad som ändrats i DetailCraft 0.7 jämfört med 0.6. Stomanalysen från 0.6 har nu ett andra steg: att kontrollera stålstängerna mot en dimensioneringsnorm.

## Nytt

### Geringsförband (0.7.1)

- **Två I-profiler som möts i en vinkel**, till exempel ett ramhörn eller en nock: markera båda, välj {{ui:Gering}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}, så kapas båda ändarna i planet som delar vinkeln mitt itu. Ihopskruvade ändplattor och livavstyvningar är kryssrutor i den nya dialogrutan Gering, vars numrerade fält motsvarar en ritning av ditt förband som uppdateras medan du skriver. Geringen följer stängerna när de flyttas och förs vidare till ritningar, NC-filer (sneda snitt), IFC och stycklistan. Se [Geringsförband](topic:mitres).

### Dimensioneringskontroller

- **Lastkombinationer från normen.** På fliken {{ui:Analys}} har det nya blocket {{ui:Dimensioneringskontroller}} en {{ui:Dimensioneringsnorm}}: ASCE 7 + AISC 360 (USA, LRFD) eller EN 1990 + EN 1993-1-1 (Eurokod). Ange varje lastfalls slag (egentyngd, nyttig last, den nya nyttiga lasten på tak, snö, vind, seismisk), tryck på {{ui:Skapa kombinationer}}, så skriver DetailCraft normens brottgräns- och bruksgränskombinationer av dina lastfall. De kombinationer du skrivit själv finns kvar. Se [Skapa kombinationerna](topic:design-checks#make-the-combinations).
- **Värden i nationell bilaga.** För Eurokod börjar faktorerna på de rekommenderade värdena; med {{ui:Värden i nationell bilaga}} anger du ditt lands värden, och de sparas i modellen. Se [Skapa kombinationerna](topic:design-checks#make-the-combinations).
- **Kontrollera stänger.** {{ui:Kontrollera stänger}} kontrollerar varje I-profil i stål för drag, tryck med knäckning, böjning med vippning, tvärkraft, böjning med normalkraft och nedböjning mot den {{ui:Nedböjningsgräns}} du anger. Tabellen visar varje stångs utnyttjandegrad, den kontroll som styr och dess kombination, och stängerna färgas i modellen (blå, grön, ockra, röd, grå för ej kontrollerad). Se [Kontrollera stängerna](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} lägger till normutgåvorna, inställningarna, utnyttjandegrad per stång och varje paragraf som använts. Se [Rapporten](topic:design-checks#the-report).
- **Ett hjälpmedel tills en ingenjör har granskat det.** Det använder bara förstaordningens krafter. Rör, vinkelstål, U-profiler, svetsade profiler och slanka delar eller delar i klass 4 visas som "not checked", med orsak; vridning, förbindelser och betong kontrolleras inte. Se [Vad som inte kontrolleras](topic:design-checks#what-is-not-checked).

### USD

- **Exportera stålmodellen som USD.** {{ui:USD}} i gruppen {{ui:Utdata}} skriver modellen som {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} eller {{ui:Paket (.usdz)}} för renderingsprogram och scenmontering: varje sammanställning innehåller sina delar, varje del är sitt tvärsnitt dragit längs sin längd med urtag utskurna, och var och en bär sitt delmärke, sin profil, sin kvalitet, sin längd och sin vikt. Bulthål, bultar, svetsar och plintar finns inte i USD-näten. Se [Exportera stålmodellen som USD](topic:usd).

### AI-assistenter

- **USD för assistenter.** Din egen assistent, ansluten via CadCraft Studio, kan exportera modellen som USD (`usd_export`) och i Studio skriva den till en mapp som du har tillåtit. Se [Vad en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ändrat

- **Stål-bandet** har stora och små knappar: en stor {{ui:Balk}} bredvid små {{ui:Pelare}}, {{ui:Stag}} och {{ui:Plåt}} under {{ui:Modellering}} › {{ui:Stänger}}; en stor {{ui:Ändplattor}} under {{ui:Detaljering}} › {{ui:Förbindelser}}, där {{ui:Skarv}} och {{ui:Knutplåt}} delar en delad knapp; en stor {{ui:Klistra in}} under {{ui:Redigera}} › {{ui:Urklipp}}, med {{ui:Klistra in på plats}} och {{ui:Duplicera}} bakom gruppens pil. {{ui:Tillverkning}} › {{ui:Utbyte}} har {{ui:Exportera USD}} bredvid IFC. De andra menystilarna ser ut som förut. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analysera stommen](topic:frame-analysis) pekar nu till dimensioneringskontrollerna, och dess kombinationer kan skapas av normen.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista vardera för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (den amerikanska survey-foten är en egen enhet). Stäng av de enheter du aldrig använder så försvinner de ur enhetslistorna; markera en med stjärna så börjar nytt arbete i den. En fil behåller alltid sin egen enhet. DetailCrafts egna fält följer inte listorna ännu: längder skrivs fortfarande i millimeter. Se [Enheter, inskrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som fälls undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} ryms mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har ett smalt titelfält: dra det för att docka eller frigöra panelen, släpp det på en annan panels fält för att dela en ram som flikar, fäst det så att det glider undan mot kanten, eller dölj det och hämta tillbaka det från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor som går att flytta.** Dra en dialogruta i titelfältet ur vägen för ritningen; den kommer tillbaka där du lämnade den. Dubbelklicka på titelfältet för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar till din egen assistent (städa en ritning, plotta en sats, kontrollera ritningar, ställa frågor till en modell, summera en mängdavtagning, prova en delvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en återspelad av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt under {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska.
- **CadCraft Studio** berättar varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara "Done", och slutar ta tillbaka ett Nyheter-kort som du stängt tills det finns en nyare version.

## Finns inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen inte har kommit ännu. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. I Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac högerklickar du första gången på CadCraft Studio och väljer {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen version för iPad eller iPhone ännu.
- Listorna för vinkel och lutning under {{ui:Enheter}} sparas, men inget fält läser dem ännu.
- **Dimensioneringskontrollerna har inte granskats av en ingenjör ännu.** Våra tester jämför dem med tryckta tabellvärden och formler som räknats för hand, ännu inte med en dimensioneringsguides genomräknade exempel. Fram till en granskning är de ett hjälpmedel: kontrollera viktiga stänger för hand.
- Dimensioneringskontrollerna använder förstaordningens krafter (inga andra ordningens effekter) och kontrollerar bara I-profiler. Inte byggt: rör, vinkelstål, U-profiler, svetsade profiler, slanka (AISC) eller klass 4-delar (Eurokod) i böjning, vridning, skjuvbuckling tillsammans med böjning, förbindelser, utmattning, brand, seismisk detaljering och betong. En slank del i tryck utelämnar tryckkontrollerna, och stången visas som "passes, partly checked".
- Stomanalysen är fortfarande förstaordningens och linjär, och den har ännu inte prövats av en ingenjör på ett riktigt jobb.
- Bulthål, bultar, svetsar och plintar finns inte i USD-exporten.

Allt annat finns i [Det som inte finns ännu](topic:not-built-yet).
