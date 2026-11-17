---
title: Nyheter i 0.7 (tidigare)
summary: Dimensioneringskontroller av stål-I-profiler med lastkombinationer från ASCE 7 eller EN 1990 och stångkontroller enligt AISC 360 eller EN 1993-1-1, USD-export av stålmodellen, ett assistentverktyg för USD, en Stål-menyflik med stora och små knappar, paneler som kan döljas undan och dialogrutor som går att flytta.
keywords: nyheter 0.7, tidigare version, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, dimensioneringskontroller, stålkonstruktion, utnyttjandegrad, lastkombinationer, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, nationell bilaga, takrörlast, nedböjningsgräns, usd, usda, usdc, usdz, openusd, assistent, mcp, stål-menyflik, menyflik, delad knapp, enheter, kompakt, paneler, dialogrutor, portugisiska
from: 54a7a8f0
---

Detta är vad som ändrades i DetailCraft 0.7, jämfört med 0.6. Ramanalysen i 0.6 har nu ett andra steg: kontroll av stålstängerna mot en dimensioneringsnorm.

## Nytt

### Gering i skarvar (0.7.1)

- **Två I-profiler som möts i en vinkel**, till exempel ett portalknä eller en nock: markera båda, välj {{ui:Gering}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}, så skärs båda ändarna i planet som halverar vinkeln. Ändplattor som bultas ihop och svetsade avstyvningar är kryssrutor i den nya dialogrutan Gering, vars numrerade fält matchar en ritning av din skarv som görs medan du skriver. Geringen följer med stängerna när de flyttas och tas med i ritningar, NC-filer (snedskärningar), IFC och stycklistan. Se [Gering i skarvar](topic:mitres).

### Dimensioneringskontroller

- **Lastkombinationer från normen.** I fliken {{ui:Analys}} har det nya blocket {{ui:Dimensioneringskontroller}} en {{ui:Dimensioneringsnorm}}: ASCE 7 + AISC 360 (USA, LRFD) eller EN 1990 + EN 1993-1-1 (Eurokod). Ge varje lastfall dess typ (egenlast, nyttig last, den nya takrörlasten, snö, vind, seism), tryck på {{ui:Skapa kombinationer}}, så skriver DetailCraft normens brott- och bruksgränskombinationer av dina lastfall. Kombinationer du själv skrivit finns kvar. Se [Gör kombinationerna](topic:design-checks#make-the-combinations).
- **Värden i nationell bilaga.** För Eurokoden startar faktorerna på de rekommenderade värdena. {{ui:Värden i nationell bilaga}} låter dig skriva in ditt lands värden, och de sparas i modellen. Se [Gör kombinationerna](topic:design-checks#make-the-combinations).
- **Kontrollera stänger.** {{ui:Kontrollera stänger}} kontrollerar varje stål-I-profil för drag, tryck med knäckning, böjning med vippning, skjuvning, böjning med normalkraft och nedböjning mot den {{ui:Nedböjningsgräns}} du anger. Tabellen visar varje stångs utnyttjandegrad, den kontroll som styr och dess kombination. Stängerna färgas i modellen: blå, grön, ockra, röd, och grå för ej kontrollerad. Se [Kontrollera stängerna](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} lägger till normutgåvorna, inställningarna, utnyttjandegrad per stång och varje paragraf som använts. Se [Rapporten](topic:design-checks#the-report).
- **Ett hjälpmedel tills en ingenjör har granskat det.** Det använder bara förstaordningens krafter. Rör, vinkeljärn, U-profiler, svetsade profiler och slanka delar eller delar i klass 4 står som ”ej kontrollerad” med skälet. Vridning, förbindelser och betong kontrolleras inte. Se [Vad som inte kontrolleras](topic:design-checks#what-is-not-checked).

### USD

- **Exportera stålmodellen som USD.** {{ui:Exportera USD}} i gruppen {{ui:Utdata}} skriver modellen som {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} eller {{ui:Paket (.usdz)}} för renderingsprogram och scenmontering. Varje sammanställning har sina delar, och varje del är sin sektion utdragen längs sin längd med urtag. Varje del bär sin delmärkning, profil, stålkvalitet, längd och vikt. Bulthål, bultar, svetsar och grunder finns inte med i USD-nätet. Se [Exportera stålmodellen som USD](topic:usd).

### AI-assistenter

- **USD för assistenter.** Din egen assistent, ansluten via CadCraft Studio, kan exportera modellen som USD (`usd_export`) och i Studio skriva den till en mapp du tillåtit. Se [Vad en assistent kan begära](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ändrat

- **Stål-menyfliken** har stora och små knappar: en stor {{ui:Balk}} bredvid små {{ui:Pelare}}, {{ui:Stag}} och {{ui:Plåt}} under {{ui:Modellering}} › {{ui:Stänger}}. En stor {{ui:Ändplattor}} under {{ui:Detaljering}} › {{ui:Förbindelser}}, där {{ui:Skarv}} och {{ui:Knutplåt}} delar en delad knapp. En stor {{ui:Klistra in}} under {{ui:Redigera}} › {{ui:Urklipp}}, med {{ui:Klistra in på plats}} och {{ui:Duplicera}} bakom gruppens pil. {{ui:Tillverkning}} › {{ui:Utbyte}} har {{ui:Exportera USD}} bredvid IFC. De andra menystilarna ser ut som tidigare. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analysera ramen](topic:frame-analysis) hänvisar nu till dimensioneringskontrollerna, och dess kombinationer kan skapas enligt normen.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (USA:s surveyfot är en egen enhet). Stäng av de enheter du aldrig använder, så lämnar de enhetslistorna. Markera en med stjärna, så startar nytt arbete i den. En fil behåller alltid sin egen enhet. DetailCraft egna rutor följer ännu inte listorna: dess längder skrivs fortfarande in i millimeter. Se [Enheter, inmatade värden och enhetslistorna](common:unit-lists).
- **Tätare layout och paneler som kan döljas undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats med mer på skärmen. Pekskärmar och telefoner behåller sina stora knappar. Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels namnlist för att dela en ram som flikar, fäst den så att den glider undan till kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor kan flyttas.** Dra en dialogruta i dess namnlist ur vägen för ritningen. Den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar till din egen assistent (städa en ritning, plotta en bladsamling, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en delvariant med mera), var och en med de verktyg den anropar och de behörigheter den kräver. Varje recept spelas upp av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu alla ord i apparna, som utkast som ännu inte granskats av en infödd talare. Hjälpämnena finns på engelska.
- **CadCraft Studio** anger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara ”Klar”. Studio slutar också visa ett kort för Nyheter som du stängt tills det finns en nyare version.

## Inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8, eftersom certifikatvalideringen ännu inte har kommit. Kontrollera SHA-256-värdet vid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer info}} och sedan {{ui:Kör ändå}}. På en Mac väljer du första gången högerklick på CadCraft Studio och sedan {{ui:Öppna}}. CadCraft Studio finns ännu inte i någon appbutik, och det finns ännu ingen version för iPad eller iPhone.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- **Dimensioneringskontrollerna har ännu inte granskats av en ingenjör.** Våra tester jämför dem med tryckta tabellvärden och formler räknade för hand, inte ännu med en dimensioneringshandbok's genomräknade exempel. Tills en granskning har gjorts är de ett hjälpmedel. Kontrollera för hand de stänger som spelar roll.
- Dimensioneringskontrollerna använder förstaordningens krafter (inga andraordningseffekter) och kontrollerar bara stål-I-profiler. Ännu inte byggt: rör, vinkeljärn, U-profiler, svetsade profiler, slanka delar (AISC) eller delar i klass 4 (Eurokod) i böjning, vridning, skjuvknäckning tillsammans med böjning, förbindelser, utmattning, brand, seismisk detaljering och betong. En slank del i tryck lämnar tryckkontrollerna utanför, och stången står som ”godkänd, delvis kontrollerad”.
- Ramanalysen är fortfarande förstaordning och linjär, och den har ännu inte prövats av en ingenjör i ett verkligt projekt.
- Bulthål, bultar, svetsar och grunder finns inte med i USD-exporten.

Allt annat finns i [Det som ännu inte finns](topic:not-built-yet).
