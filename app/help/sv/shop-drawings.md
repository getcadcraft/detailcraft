---
title: Gör verkstadsritningar
summary: Ett blad per delmärke, gjort på en gång. Förhandsgranska vilket som helst av dem och ladda ner ett blad eller hela satsen som PDF på A4 till A1 eller ANSI B till D, med hål, urtag, mått och ritningshuvud.
keywords: verkstadsritning, verkstadsritningar, alla delar, batch, hela satsen, enskild delritning, tillverkningsritning, pdf, detaljritning, delritning, utskrift
from: d25fe035
---

DetailCraft gör ett blad per delmärke, för varje balk, pelare, stag och plåt i modellen, på en gång: du behöver inte markera dem en och en. Identiska delar delar märke, och därmed blad. Bladen görs direkt från modellen; de sparas inte och kan inte redigeras.

## Gör hela satsen

1. Välj {{ui:Verkstadsritning}} i gruppen {{ui:Utdata}}. Ingenting behöver vara markerat. Med en del markerad öppnas fönstret på den delens blad. I panelen {{ui:Egenskaper}} heter samma knapp {{ui:Verkstadsritning}} för stänger och {{ui:Plåtritning}} för förbindelser.
2. En förhandsvisning öppnas, med delmärket som titel, till exempel ”Verkstadsritning b1”. Den första listan bredvid titeln innehåller varje delmärke med dess profil, längd och antal: välj ett för att se dess blad. Den andra listan ändrar bladstorleken; hela satsen görs om på den (se [Översiktsritningar och sammanställningsritningar](topic:drawings#choose-the-sheet-size)).
3. Välj {{ui:Ladda ner alla}} (knappen visar antalet blad) för en PDF med en sida per delmärke, `<name> Shop drawings.pdf`. Varje blad säger ”Blad 3 av 42” i sitt ritningshuvud. Eller välj {{ui:Ladda ner PDF}} för bladet du tittar på, `<name> <mark>.pdf`.
4. Stäng förhandsvisningen med × eller {{key:Esc}}.

Om {{ui:Verkstadsritning}} är nedtonad finns inga delar i modellen ännu.

## Vad som finns på bladet

För en I-profil:

- **Fasad**, sedd mot livet: delen med sina urtag, hål i livet som cirklar och flänshål som dolda (streckade) linjer.
- **Övre fläns, planvy**, sedd uppifrån, när någon fläns har hål. Hål i undre flänsen visas streckade.
- **Sektion** genom profilen.
- **Mått:** kedjade hålpositioner längs delen plus total längd, hålhöjder i livet, hålavståndet och urtagens storlekar.
- **Hållista:** varje grupp av hål, till exempel ”8 x Ø22 i övre flänsen”.
- **Svets**, när delen har plåtar svetsade till sig.
- **Ritningshuvud:** delmärke, sammanställningsmärke, profil, material, längd, antal, vikt per styck och total vikt, modellnamn och datum.

För en U-profil, ett vinkeljärn eller ett hålprofilerat rör är bladet detsamma, sett mot livet eller sidan: ett rörs väggar är dolda (streckade) linjer, och sektionen anger väggtjockleken.

För en plåt: plåtens yta med sina hål, och dess kant som sektion.

## Skalor

Skalan väljs från en lista (1:1 till 1:200) så att delen får plats på bladet. En lång, låg del skulle bli för tunn för att läsas i en skala, så när djupet på papperet skulle bli under 30 mm ritas djupet i en större skala än längden. Vytiteln säger det då, till exempel ”längd 1:20, djup 1:5 (inte i en skala; måtten gäller)”. Läs alltid storlekar från måtten, inte genom att mäta bladet.

## Bra att veta

- Antalet är antalet delar med det märket i modellen. Märken kan numreras om efter en ändring; se [Kontrollera märken och stycklistan](topic:marks-and-bom).
- Varje blad är en enskild del utan svetssymboler. Sammanställningsritningar (med svetssymboler) och översiktsritningar finns i [Ritningar](topic:drawings). Bladet kan inte redigeras eller annoteras i DetailCraft. För att markera det, öppna PDF:en i ett PDF-markeringsprogram, till exempel MarkupCraft.
- Ritningshuvudet säger ”DetailCraft labbversion — millimeter”.
- Texten använder standardtypsnittet Helvetica i PDF. Tecken utanför den västeuropeiska teckenuppsättningen skrivs ut som ”?”, och statusfältet räknar dem.

## Skriv ut den

Öppna den nedladdade PDF:en i din PDF-läsare och skriv ut den i 100 % (utan ”anpassa till sida”) på papper av den storlek du valde, om du vill att de angivna skalorna ska stämma. På ett mindre blad skalar du ned det och litar på måtten.
