---
title: Generator för stålträppor
summary: En stålträppa från golv-till-golv-höjd, lopp och bredd. Stighöjd och steglängd enligt en regeluppsättning du väljer, vilplan, räcken och balusterstolpar, verkstadsritningar och en kapplista med vikter.
keywords: stålträppa, trappgenerator, trappvange, steg, mönsterplåt, galler, vikt plåtsteg, vilplan, räcke, balusterstolpar, stighöjd, steglängd, osha, ibc, approved document k, kapplista, vikter, verkstadsritning
from: a4f0a985
---

Trappgeneratorn gör en hel stålträppa av några få tal: trappvangarna, stegen, vilplan när loppet är för högt, räcken med stolpar och balusterstolpar, fästhålen i trappvangarna, en kapplista med vikter och verkstadsritningarna. Den startar från verktyget {{ui:Trappa}}, precis som den enkla trappan (se Trappor), med en brytare till.

## Placera en stålträppa

1. Välj {{ui:Trappa}} i gruppen {{ui:Placera}}, eller tryck {{key:S}}.
2. Bocka i {{ui:Använd stålträppsgeneratorn}} till höger.
3. Välj **regelverket** för där trappan byggs, **stighöjden** (golv till golv; 0 = upp till nästa våning), **tillgängligt lopp** (0 = låt regeln bestämma), **fri bredd** och **stegtyp**: mönsterplåt, galler eller vikt plåtsteg.
4. Ange trappvangens profil, vilplanen (enligt regeln, eller ett tal), räcken (båda sidor, en, inga), räckeshöjden och balusteravståndet.
5. Klicka på en rutnätsskärning: det är foten av första sättsteget.

Markera trappan (klicka på en trappvange, ett steg eller ett räcke) för att ändra någon inställning. Egenskaperna visar sättstegen, steglängden, lutningen, lopp och vilplan, stålet i den, {{ui:Kapplista och vikter}} och regelverkets källor.

## Regelverken

Regelverket begränsar trappans form: stighöjd och steglängd, 2 × sättsteg + steglängd, lutningen, vilplanet, räckeshöjden och den största öppningen. DetailCraft erbjuder de nedan; regionen är en inställning, inte en gissning. Öppna **Varifrån regelverkets tal kommer** i egenskaperna: varje tal anger sin källa och säger hur väl det kontrollerats.

- **International Building Code 2021**: sättsteg 4 till 7 in., steg minst 11 in., räcken 34 till 38 in. Den 12 fot långa gränsen mellan vilplan visas som *inte läst*, och räckestalen som lästa i handouter som citerar koden. Bekräfta dem innan du litar på dem.
- **OSHA 29 CFR 1910.25 och 1910.29** (industriella standardtrappor): 30° till 50°, sättsteg högst 9.5 in., steg minst 9.5 in., minst 22 in. bred, vilplan lika breda som trappan och 30 in. djupa, ett övre räcke som används som handräcke 36 till 38 in. Dessa lästes i själva föreskriften.
- **Approved Document K 2013, England** (allmänna tillgångs- och servicetrappor): stighöjd- och steglängdsintervallen samt 2 × sättsteg + steglängd 550 till 700 mm, lästa i den regeringsbeställda rapport som tabellerar dem. Dokumentet ger DetailCraft ingen räckeshöjd, så den höjd du anger används och problemlistan säger det.

Ett regelverk som inte finns här gissas inte: trappan följer då den enkla komfortregeln 600 till 650 mm och säger att den saknar regel.

## Vad den räknar ut

- **Sättsteg och steglängd.** Så få sättsteg vars 2 × sättsteg + steglängd ligger mitt i regelns intervall, utan att steglängden faller under regelns minimum. Med ett givet lopp blir steglängden loppet delat med stegen, och allt utanför regeln sägs.
- **Lopp och vilplan.** Ett lopp som är högre än regeln tillåter delas med ett vilplan lika brett som trappan och inte smalare än regelns minimum; du kan också begära vilplan. Ett vilplan är en ram av två sidobalkar och två tvärvinkeljärn under en skiva, på två stolpar.
- **Steg.** Mönsterplåt är en svetsad plåt (6 mm som standard; mönstret räknas inte in i vikten). Ett vikt plåtsteg har en vändning vid nosingen och är bultat genom trappvangens liv: två hål 2 mm större än bulten vid 0.3 och 0.7 av djupet. Galler ritas som en plåt med samma vikt (bärstångens djup × tjocklek ÷ stegavstånd); tvärstängerna och bandningen räknas inte, och kapplistan säger det.
- **Räcken.** Ett rörformat övre räcke på stolpar längs varje lopp och varje vilplan, och ett balusteravstånd som ingen sfär större än regelns öppning passerar (högst 100 mm som standard).

## Ritningar, kapplista, export

- Loppet är en sammanställning; räckena är en annan (båda sidorna är samma sammanställning, gjord två gånger). Var och en har sin sammanställningsritning, och trappvangens ritning visar dess hål.
- **Trappbladet** (ST-…) visar varje lopps trappvange rak, med hålpositionerna skrivna från den nedre änden, och stegdetaljen: sektion, nosing, vändning och ändflänsen med dess hål.
- {{ui:Kapplista och vikter}} i egenskaperna listar varje sektion och längd med antal och kilogram; {{ui:Ladda ner kapplistan (CSV)}} sparar den.
- Allt går till stycklistan, NC-filer och IFC som vanliga delar (IfcMember, IfcColumn, IfcPlate).

## Bra att veta

- Det här är en utgångspunkt, inte en konstruktion. Ingenting kontrolleras för hållfasthet eller nedböjning; regelverket begränsar bara formen.
- Trappvangsändar mot våningarna kapas rakt och detaljeras inte. Vilplanens stolpar står mot våningen under och har inga fotplåtar.
- Att placera trappan som ett enda element i BimCraft finns inte ännu.
