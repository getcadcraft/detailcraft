---
title: Knutplåtar för stag
summary: Förbind en stagände till en pelare eller balk med en knutplåt. Vinkeljärn och flatjärn skruvas fast, rör sticks över och svetsas.
keywords: knutplåt, knutplåtar, stag, förbandsstag, vertikalt stag, vinkelstag, flatjärn, band, HSS-stag, knivplåt, spårat rör, förbind
from: 22f6598d
---

En knutplåt för stag är en plåt som verkstadssvetsas till pelaren (eller balken) som staget landar på, i staget plan. DetailCraft kapar staget så att det är fritt från allt i förbandet, placerar och dimensionerar knutplåten och förbinder staget med den: ett **vinkeljärn** eller ett **flatjärn** med en bultrad, eller ett **rör** (fyrkantigt, rektangulärt eller runt HSS) som sticks över knutplåten och svetsas.

## Var den fungerar

- Stagets ände ligger på linjen för en pelare eller balk (inom 1 mm), och staget är inte nästan parallellt med den linjen. En pelare är stödet där en finns; annars balken.
- Knutplåten ligger i stagets plan och stödets linje. Ett **vinkeljärn** måste ha ett ben i det planet, och ett **flatjärn** sin yta: vrid staget ({{ui:Rotation (°)}}) tills det gör det. Med vinkeljärnets ben i 45° mot planet säger DetailCraft det och bygger ingenting.
- I-profiler och U-profiler som stag förbinds inte.

## Lägg till knutplåtar

1. Markera ett eller flera stag.
2. Välj {{ui:Knutplåt}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}.
3. Varje ände av de markerade stagen som landar på en pelare eller balk och saknar knutplåt får en.

Markera en knutplåt (klicka på plåten) för att ändra dess inställningar. {{ui:Använd på liknande (n)}} kopierar den till varje fri stagände med samma stag- och stödprofiler.

## Vad DetailCraft räknar ut

- **Kapning.** Staget kortas i den änden tills dess hörn är fria, med {{ui:Stagets frigång}} (25), varje stång i förbandet (bredvid den, eller bortom dess ände när stången slutar där) och en fotplåt under pelaren.
- **Bultar (vinkeljärn, flatjärn).** {{ui:Bultar}} (3) i en rad längs staget, den första {{ui:Bultens ändavstånd}} (40) från den kapade änden, med {{ui:Bultarnas radavstånd}} (75). På ett vinkeljärn går de genom benet i knutplåtens plan, {{ui:Bultarnas hålavstånd}} från hälen (0 = benets mitt); på ett flatjärn på dess mittlinje (eller förskjutna från den med hålavståndet). Bultgrepp = benet eller flatjärnet + knutplåten.
- **Knutplåten.** En rektangel: från stödets yta ut förbi sista bulten med ändavståndet, och längs stödet så långt bultarna kräver. Den ligger mot baksidan av vinkeljärnets ben (eller flatjärnets yta). För ett rör går den genom rörets mitt, under {{ui:Rörets överlapp på knutplåten}} (200) av röret, med plats för svetsarna.
- **Förband.** Vid en pelarfot förs knutplåten ned till fotplåten. Där en balk korsar förbandet (ett stag upp till ett balk-pelarhörn) ligger knutplåten kvar under eller över balken. Om det lämnar bultarna eller överlappet utan deras ändavstånd varnar DetailCraft.
- **Svetsar.** Knutplåten till sitt stöd, på båda sidor. Ett rör till knutplåten, fyra linjer längs överlappet.

## Bra att veta

- Knutplåten hör till stödets sammanställning (verkstadssvetsad). Staget levereras med borrade hål och går till sin egen NC-fil.
- Ett rörs spår skärs inte i modellen; [kollisionskontrollen](topic:clash-check) lämnar staget och dess knutplåt ifred.
- Knutplåten svetsas inte till en balk den nuddar. Hörnknutplåtar svetsade till både balk och pelare, avfasade hörn och arbetspunktslayouten för en Uniform Force Method-förbindelse finns inte ännu.
- DetailCraft dimensionerar inte knutplåten eller bultarna (inga hållfasthetskontroller); varningarna gäller avstånd och passning.
