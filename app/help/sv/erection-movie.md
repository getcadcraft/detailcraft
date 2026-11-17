---
title: Monteringsplan och film
summary: Ange en kran och dess lastdiagram, se varje lyft kontrollerat mot diagrammet i fasordning, och spara en monteringsfilm som spelas upp offline på vilken telefon som helst.
keywords: montering, kran, lyft, lastdiagram, radie, kapacitet, lyftredskap, sekvens, film, animation, telefon, offline, lyftplan
from: fa7b0133
---

Fliken {{ui:Montage}} gör modellen till en monteringsorder och kontrollerar varje lyft mot en kran som du beskriver. Den planerar utifrån siffror du skriver in. Det är inte en lyftplan: riggaren och kranföraren gör den.

## Beskriv kranen

Välj {{ui:Lägg till en kran}}, och fyll sedan i:

- **Kranens centrum X och Y:** var kranen står, i millimeter.
- **Högsta krok:** det högsta kroken kan höjas, i millimeter. 0 innebär att ingen gräns kontrolleras.
- **Krokblock och lyftredskap som inte finns i diagrammet:** kilogram som dras av från diagrammet innan en last läggs till, när ditt diagram inte redan gör det.
- **Lastdiagram:** en rad per rad, radie i meter och sedan kapaciteten i kilogram. Kopiera raderna från kranens eget diagram.

Diagrammet läses som ett lastdiagram läses: kapaciteten som anges för en radie gäller ut till den radien. En last vid en radie mellan två rader får kapaciteten för den **längre** raden, aldrig ett värde mellan dem. Inom den första raden gäller den första radens kapacitet. Bortom den sista raden kan kranen inte lyfta alls. Radien som räknas för ett lyft är den större av upplockningsradien och placeringsradien.

En andra kran läggs till på samma sätt. Varje lyft går till den första kran som kan ta det inom din marginal.

## Vad planen gör

- Ett lyft per sammanställning: en balk med sina ändplattor, en pelare med sin fotplatta, en trappa.
- Ordningen följer faserna först, sedan våning för våning: pelare, balkarna de bär, stag, plåtar, trappor. En del lyfts aldrig före det som bär den.
- Varje lyft visar sin vikt (modellens bruttovikt, plus {{ui:Lyftredskap som läggs till på varje vikt}}), sin radie, andelen av diagrammet som den använder och minuten den startar.
- {{ui:Största andel av diagrammet ett lyft får använda}} är din säkerhetsmarginal. Ett lyft över den markeras **Över din marginal**; över diagrammet **Över diagrammet**; bortom diagrammets sista radie **Bortom diagrammet**; och en del som är högre än kroken **Kroken för låg**.

Hål och urtag dras inte av från vikterna, och bultar täcks av procentsatsen för lyftredskap.

## Problem

Varje lyft som är över, bortom, för högt eller planerat före det som bär det visas i panelen {{ui:Problem}}. En balk utan någon anslutning som bär den listas som i behov av tillfälligt stöd.

## Spara filmen

{{ui:Spara film}} skriver en HTML-fil. Öppna den i valfri webbläsare, även på en telefon, utan nätverk och utan konto: spela och pausa, dra reglaget till vilken minut som helst, vrid modellen med ett finger, nyp för att zooma. Bildtexten anger varje lyft, dess vikt, radie och andel av diagrammet. Modellen ritas som enkla lådor: den visar ordningen och lyften, inte de verkliga profilerna.

Samma tabell sparas som en CSV med knappen {{ui:CSV}}. Kranen och diagrammet sparas i modellfilen, och varje ändring är ett steg att ångra.
