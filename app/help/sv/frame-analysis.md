---
title: Analysera stommen
summary: Krafter, reaktioner och nedböjningar för balkar, pelare och stag som de ritats, under lastfall och kombinationer du anger. Ett analyshjälpmedel, inte en dimensionskontroll; dimensioneringskontrollerna är ett separat steg.
keywords: analys, konstruktionsanalys, stomanalys, styvhetsmetoden, laster, lastfall, kombination, egenlast, nyttig last, egentyngd, reaktioner, böjmoment, skjuvkraft, normalkraft, nedböjning, deformerad form, upplag, fast inspänd, ledad, lossning, rapport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Fliken {{ui:Analys}} längst ned hittar krafterna i varje balk, pelare och stag i modellen, reaktionerna vid pelarfötterna och hur mycket elementen böjs, för de laster du anger.

:::warning
Det är ett **analyshjälpmedel, inte en dimensionskontroll**. Analysen tillämpar ingen dimensioneringskod: den dimensionerar inte element, kontrollerar inte bärförmåga eller förbindelser och väljer inte lastfaktorer. En ingenjör kontrollerar modellen, dess laster och upplag och avgör vad siffrorna betyder. För elementkontroller enligt ASCE 7 / AISC 360 eller EN 1990 / EN 1993-1-1, se [Kontrollera stålelement mot en dimensioneringskod](topic:design-checks), ett separat steg som också är ett hjälpmedel.
:::

## Kör den

1. Öppna fliken {{ui:Analys}}.
2. Markera ett eller flera element i vyn, välj ett {{ui:Fall}}, en {{ui:Last}} och en {{ui:Riktning}}, skriv in värdet och tryck på {{ui:Lägg till last}}. En last utbredd längs ett element anges i kN/m, en punktlast i kN. {{ui:Nedåt (tyngdkraft)}} är den vanliga.
3. Tryck på {{ui:Kör analys}}.

Tabellen listar varje elements största normalkraft N, skjuvkrafter Vz och Vy, böjmoment My och Mz, vridning T och dess nedböjning, med största moment först; klicka på ett elements namn för att markera det. Nedanför finns reaktionerna vid varje upplag. {{ui:På modellen}} ritar den deformerade formen, eller en av storheterna som ett diagram bredvid varje element med dess största värde skrivet på dess plats. Resultaten blir inaktuella så snart modellen ändras: kör den igen.

Varje last, fall och inställning är ett steg i ångra ({{key:Mod+Z}}) och sparas i modellfilen.

## Lastfall och kombinationer

Analysen börjar med tre: **Egenlast** (elementens egen vikt, från deras ritade profiler och 7850 kg/m³), **Nyttig last** (tom) och **Egenlast + nyttig last**. Lägg till egna fall (vind, snö …) och kombinationer: en kombination summerar fallen med de faktorer du skriver in. Analysen är linjär, så varje fall löses en gång och kombinationer är summor. Skriv in faktorerna själv, eller välj en dimensioneringskod och låt {{ui:Skapa kombinationer}} skriva kodens ([Kontrollera stålelement mot en dimensioneringskod](topic:design-checks)).

## Vad stommen består av

- Balkar, pelare och stag, var och en på sin arbetslinje (linjen du ritade), med profilens verkliga egenskaper beräknade från dess kontur. Plåtar, trappor, plintar och bultar ingår inte i stommen.
- Ett element delas där ett annat elements ände hamnar på det, så att en balk som ansluter till en pelare på halv höjd kopplas till pelaren där.
- **Pelarfötter**: fast inspända (början) eller ledade (hållna på plats och mot vridning, fria att rotera). En fotplåt gör alltid ett upplag.
- **Balkändar**: en ändplatta är styv, en skjuvflik är ledad. {{ui:Balkändar utan förbindelse}} anger resten. **Stag** är ledade i båda ändarna.
- Markera ett element för att ge dess ändar, eller en pelares fot, en egen regel.
- Stål överallt: E = 200 GPa, G = 77 GPa.

Om stommen kan röra sig utan att något böjs — en mekanism, till exempel ledade fötter utan stag i en riktning — stannar körningen och anger var och åt vilket håll; håll den på plats med ett upplag, en styv knut eller ett stag.

## Tecken

N > 0 är drag. My > 0 ger drag på elementets lokala −z-sida: en balk som böjs nedåt av egentyngd har My > 0. Mz > 0 ger drag på den lokala −y-sidan. Nedböjning mäts från den räta linjen mellan elementets ändar. Ett elements lokala z pekar uppåt (för en pelare: längs X); dess lokala axlar vrids med elementets rotation.

## Rapporten

{{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} innehåller allt: de antaganden stommen byggdes på, profiler, fall och kombinationer, sedan för varje fall och kombination reaktionerna (med summorna av laster och reaktioner, som balanserar), elementkrafterna och förskjutningarna, och en envelop av alla fall. {{ui:Exportera som CraftScript}} skriver samma stomme som ett skript för PartCrafts skriptarbetsyta, där biblioteksfunktionen `frame3d` löser den steg för steg i läsbar kod.

## Metod

Direkt styvhetsmetod, linjär och första ordningen om du inte markerar *Andra ordningen (P-Delta)*: tvånodiga balk-pelare med normal-, vrid- och två böjstyvheter (ingen skjuvdeformation, ingen välvning), ändlossningar genom statisk kondensering, laster längs elementen via elementens egna formfunktioner. Svaren kontrolleras mot de klassiska läroboksfallen (kragbalkar, fritt upplagda, fast inspända och kontinuerliga balkar, en portalram, ett rutnät i vridning, en fackverkskonstruktion).

**Andra ordningen (P-Delta).** Markera *Andra ordningen (P-Delta)* bredvid Kör: varje kombination löses på nytt med elementens normalkrafter verkande på den deformerade stommen (varje element delas i 4 delar, så att böjningen mellan ändarna också räknas), tills normalkrafterna stabiliseras. Resultatraden anger antalet varv och hur mycket utsvängningen ökade; momenten, nedböjningarna, dimensioneringskontrollerna och rapporten använder sedan dessa resultat. Över stommens elastiska kritiska last stannar körningen och anger det. Den är elastisk med små rotationer, endast böjning, utan styvhetsreduktion eller fiktiva laster (inte AISC:s direkta analysmetod i sig); bjälklag, väggar och styva golv förblir första ordningen.

**Egenfrekvenser (finita element).** Blocket {{ui:Finita element: egenfrekvenser}} under resultaten hittar de lägsta svängningsformerna för samma modell med finita elementmotorn: balkar med deras ändlossningar, bjälklag och väggar som plana fyrnodsskal, styva golv och upplag. Välj hur många svängningsformer (3, 6, 10 eller 20) och bjälklagselementet (fyrnodsskalet för tjocka eller tunna bjälklag, eller elementet för tunna bjälklag) och tryck på {{ui:Beräkna egenfrekvenserna}}. Tabellen anger varje svängningsforms frekvens i Hz, dess period i sekunder och dess effektiva modala massa längs X, Y och Z som en andel av den massa som kan röra sig; {{ui:Visa på modellen}} ritar valfri svängningsform på samma sätt som den deformerade formen ritas. Massan är materialets densitet gånger volymen: laster ökar inte massan, och ett material utan densitet har ingen. Rapporten (PDF, CSV) innehåller tabellen. Den är endast elastisk och för små rörelser, och ingen seismisk eller vindlast tas fram ur en kod här. Ingen dimensionskontroll; din ingenjör granskar resultaten.

**Responsspektrum, tidshistorik och pushover.** Tre block till ligger under egenfrekvenserna och använder samma finita elementmodell. Massan för alla är materialets densitet plus de nedåtriktade lasterna för de fall du markerar, var och en gånger en faktor du skriver in (till exempel Egenlast med 1 och Nyttig last med den andel du räknar som massa).

{{ui:Responsspektrum}} läser av varje svängningsform från ett spektrum du anger (en tabell med period och acceleration, eller ASCE 7-formen från SDS, SD1 och TL; knappen {{ui:Använd värdena från blocket Seismik}} kopierar dem från blocket Seismik) och kombinerar svängningsformerna med CQC, SRSS, tiprocentregeln eller en absolutsumma, och sätter sedan ihop riktningarna X, Y och Z (100 % + 30 % eller SRSS). Det ger basskjuvkraften, våningsdriften, elementens ändkrafter och en svängningsformstabell som varnar när de använda svängningsformerna bär mindre än 90 % av massan. Du kan skala resultaten med en faktor eller upp till en basskjuvkraft du skriver in; blocket beräknar aldrig den basskjuvkraften själv. Resultaten saknar tecken.

{{ui:Tidshistorik}} kör en markacceleration med modalsuperposition (exakt för inspelningens räta linjer mellan punkter) eller med direkt integration (Newmarks medelaccelerationsmetod med Rayleigh-dämpning). Indata är en påhittad sinus- eller pulsform (alltid märkt som syntetisk), en inspelning du klistrar in, eller en textfil du öppnar (tid och acceleration, en acceleration per rad med ett steg, eller en PEER-liknande fil med en DT=-rubrik; i g eller m/s²). Den ger takets förskjutning och basskjuvkraften mot tiden, driften för varje våningsplan och envelopen för elementens ändkrafter. Modeller med en mycket lång inspelning behåller den endast för sessionen.

{{ui:Pushover}} skjuver taket sidledes i små steg (mönster som första svängningsformen, eller jämnt), med plastiska leder i ändarna på element med I-profil. En led flyter vid det plastiska momentet, som sjunker när normalkraften ökar (beräknat från den ritade profilen, bortsett från krökningsradier); förstärkning är valfri, P-delta är valfri, och en tyngdkraftskombination kan tillämpas först. Den ger kapacitetskurvan (basskjuvkraft mot takförskjutning), den första leden, och varje leds tillstånd och plastiska rotation. {{ui:Kör den olinjära tidshistoriken}} kör samma leder under blocket Tidshistoriks inspelning på små modeller. Leder bildas endast i elementens ändar (sätt en nod där en led ska bildas inne i ett spann); ett element som är lossat i båda ändar får inga, och flytning och knäckning av stag modelleras inte; bjälklag och väggar förblir elastiska; inga acceptanskriterier anges. Ingen dimensionskontroll; din ingenjör granskar resultaten. Inställningarna sparas med modellen, och rapporten innehåller tabellerna.

Finns inte ännu: knäckningsanalys, en korrigering för saknad massa för responsspektrumet, skalning av inspelningar, acceptanskriterier för leder (dynamisk respons finns, ovan), yt- och vindlaster framtagna åt dig (jordbävningskrafter på bjälklag finns i [Kontrollera betongelement och skapa seismiska laster](topic:concrete-and-seismic)), förskjutningar av element, stag som endast tar drag. Se [Finns inte ännu](topic:not-built-yet).
