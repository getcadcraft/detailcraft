---
title: Översikts- och monteringsritningar
summary: Gör planer, fasader och en monteringsritning per sammanställningsmärkning från modellen, på blad i A4 till A1 eller ANSI B till D, ge ut dem med revisionsbokstäver, och ladda ner dem som PDF, DWG eller DXF.
keywords: dolda linjer, borttagning av dolda linjer, streckad, revisionsmoln, moln, revisionstriangel, ankarbultsplan, ankarbultar, stångförteckning, fotplattsförteckning, uppsättning, utgivning, revision, rev, revisionstabell, ny utgåva, utgivningslogg, följebrev, dwg, dxf, CAD-fil, exportera ritningar, ritningar, översikt, plan, fasad, monteringsritning, bladstorlek, pappersstorlek, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, skriv ut, skala, ritningshuvud, modellreferens
from: 709f8604
---

Välj {{ui:Ritningar}} i gruppen {{ui:Utdata}}. DetailCraft gör hela uppsättningen från modellen som den är just nu. Ingenting lagras: ändra modellen, öppna {{ui:Ritningar}} igen, så görs uppsättningen på nytt.

## Vad som ingår i uppsättningen

- **Planer**, en per nivå som har något på sig, sedda uppifrån.
- **Fasader**, en per rutnätslinje med stänger inom 1 m från den.
- **Ankarbultplanen**, när modellen har fotplattor: varje fotplatta sedd uppifrån med sin pelare och sina ankarbultar, rutnäten med sina mått, en typisk detalj för varje bultmönster (BP1, BP2 …) med bultavståndet och kantavstånden, och två förteckningar: ankarbultarna efter märkning (R1, R2 …: antal, diameter, längd, utstick ovanför plattan, inbäddning, kvalitet) och fotplattorna efter rutnät (pelare, mönster, platta, bultar, plattans överkant). En pelare utanför rutnätet anges med sina koordinater.
- **Monteringsritningar**, en per sammanställningsmärkning: framvy, uppifrånvy och ändvyer, kedjade mått till hål och plattkanter, delförteckningen, lösa bultar och ankarbultar, samt anteckningar om svetsar och hål. Varje svetsad platta har en filésvetssymbol i framvyn (AWS A2.4): pilen pekar på fogen, triangeln under referenslinjen betyder pilens sida, siffran till vänster är svetsstorleken i mm, och en cirkel där pilen möter linjen betyder runtomsvets.

**Dolda linjer.** Planer och fasader utelämnar en del av en delens linjer där en del som helt står framför den täcker den (en balk sedd från änden bakom en pelare). Monteringsritningar ritar en platta streckad där huvuddelen täcker den: bakom livet i framvyn (sett från delens −u-sida), under överflänsen i uppifrånvyn. Delar som ligger på samma djup, eller överlappar i djup, ritas båda helt.

Varje blad har ett ritningshuvud med ritningsnumret, skalan, modellnamnet, datumet, bladnumret med bladstorleken och modellreferensen: en kod som görs av den sparade modellen, så att en utskrift kan kopplas till modellen den kom från.

## Välj bladstorlek

Välj storleken i listan överst i fönstret {{ui:Ritningar}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) eller {{ui:ANSI D}} (22 × 34 in). Alla blad är liggande. Uppsättningen görs på nytt i den nya storleken direkt, och samma storlek används för verkstadsritningar. Den finns också i [DetailCraft-inställningar](topic:settings#drawings), och webbläsaren kommer ihåg den.

- Ett större blad ritas i större skala. Skalorna är alltid standardskalor (1:10, 1:20, 1:25, 1:50, 1:100 och så vidare).
- Texten är lika stor på varje blad, så den förblir läsbar när den skrivs ut.
- På ett litet blad kan en lång, smal montering få en större skala över sitt djup än längs sin längd. Vytiteln anger då båda skalorna, och måtten gäller.

## Ge ut ritningar och revisioner

Raden ovanför förhandsvisningen säger var det visade bladet står: **Inte utgivet än**, **Rev B, utgivet …; oförändrat sedan dess**, eller, i rött, **Ändrat sedan rev B: behöver ny utgåva**. Bladlistan markerar utgivna blad med deras revision och de som behöver ny utgåva.

- Skriv vad utgivningen är till för (den börjar som ”Utgivet för tillverkning”) och välj {{ui:Ge ut det här bladet}}, eller {{ui:Ge ut ändrade blad}} för varje blad som är nytt eller har ändrats sedan dess senaste utgivning.
- Den första utgivningen av ett blad är revision A, sedan B, C och så vidare (I och O hoppas över).
- Ritningshuvudet visar ritningsnumret med dess revision (”A-B1  rev B”), och en revisionstabell bredvid listar de senaste utgivningarna: revision, datum och beskrivning. På ett litet blad visas så många som ryms.
- Ett blad ”ändras” när det som ritas på det ändras: en flyttad del, ett nytt hål, en omnumrerad märkning. Datumet, bladantalet och själva revisionstabellen räknas inte. Att ändra bladstorlek ändrar varje blad.
- Utgivningsloggen sparas i modellfilen, och en utgivning är ett steg att ångra. [KISS-filen](topic:kiss-export) bär varje ritnings senaste revision.

### Revisionsmoln

Från och med bladets andra utgivning ritas varje del eller grund som har ändrats inuti ett revisionsmoln med en revisionstriangel som bär bokstaven.

- Medan ett blad har ändrats sedan sin senaste utgivning visar molnen vad som ändrats sedan dess, med den kommande revisionen i triangeln (rev B utgiven och ändrad: triangeln visar C).
- När du ger ut det sitter molnen kvar på den revisionens blad, som i en utskriven uppsättning, tills bladet ändras igen.
- Varje blad molnar bara de ändringar det visar. Planer och fasader ritar inga hål eller urtag, så de molnar en del som har flyttats, vridits eller ändrat storlek, eller vars märkning har ändrats. Monteringsritningar och ankarbultplanen molnar också nya eller flyttade hål och urtag.
- En omnumrerad märkning räknas: när en ändring gör en balk till en ny sammanställning molnas de balkar vars märkning gick upp (B1 till B2) på planer och fasader.
- En del som togs bort lämnar inget att molna.
- Blad som gavs ut före revisionsmolnen kom (DetailCraft 0.4) börjar molna från sin nästa utgivning.
- Moln finns med i PDF-, DXF- och DWG-nedladdningarna och räknas aldrig som en ändring i sig.

## Ladda ner

Välj formatet i listan bredvid knapparna, och sedan {{ui:Det här bladet}} för det visade bladet eller {{ui:Alla blad}} för hela uppsättningen.

- **PDF**: för att skriva ut eller skicka. {{ui:Alla blad}} gör en PDF, en sida per blad, där varje sida har den valda storleken.
- **DWG**, i formatet 2018, 2013, 2010, 2007, 2004 eller 2000: för att öppna bladen i ett CAD-program. Välj ett äldre format för ett äldre program.
- **DXF (R12)**: versionen som nästan alla CAD-program öppnar.

Ett DWG- eller DXF-blad ritas i full storlek: en ritningsenhet är en millimeter på papperet, så det skrivs ut i 1:1 och varje vy behåller den skala dess titel anger. Varje penna är ett eget lager: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID och så vidare, med sin linjetjocklek (DWG) och sina streck. Ord är text i DetailCraft-textstilen (Arial). Mått är de linjer och siffror du ser, inte måttobjekt. {{ui:Alla blad}} lägger DWG- eller DXF-filerna i en zip-fil, en fil per blad.

:::note
DXF R12 har inga linjetjocklekar och inga fyllningar: lagren behåller sina namn, så ställ in pennorna efter lager när du plottar, och fyllda former utelämnas (statusfältet säger hur många).
:::

Skriv ut i 100 % (ingen ”anpassa till sida”) på papper i samma storlek om du vill att de angivna skalorna ska stämma.
