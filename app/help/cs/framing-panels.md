---
title: Dřevěné a tenkostěnné ocelové rámové panely
summary: Navrhněte stěnové, podlahové a střešní panely z dřeva nebo tenkostěnné oceli se všemi díly, seznamem řezů, dílenským výkresem a materiálem k nákupu.
keywords: rámování, dřevo, řezivo, dřevěný, tenkostěnná ocel, za studena tvarovaná, sloupek, trám, krokev, překlad, krajní sloupek, podpěrný sloupek, krátký sloupek, seznam řezů, dílenský výkres, panel
from: 3e38ffb9
---

Záložka {{ui:Rámování}} navrhuje panely, které popíšete, a dává to, co si řemeslná parta a prodejna řeziva vyžádají. Panely se ukládají do souboru modelu.

:::warning
Rozměry, rozteče a překlady jsou vaše. DetailCraft nekontroluje, zda sloupek v dané rozteči nese danou stěnu nebo zda překlad přemosťuje daný otvor: to patří do tabulek vaší normy a k vašemu inženýrovi.
:::

## Přidání panelu

Zvolte {{ui:Přidat stěnu}}, {{ui:Přidat strop}} nebo {{ui:Přidat střechu}} a pak vyplňte rozměry v milimetrech, materiál (dřevo nebo tenkostěnná ocel) a velikost prvku. Rozměry dřeva jsou nominální názvy s hrubými rozměry (2×4 je 38 × 89 mm). Ocelové sloupky se označují hloubkou a tloušťkou, například `C92-1.2`.

## Stěny

Stěna má spodní práh, jednu nebo více horních pásnic (u oceli jednu kolejnici), krajní sloupky, sloupky v rozteči, kterou zadáte, a pro každý otvor: dva krajní sloupky, dva podpěrné sloupky, překlad velikosti a počtu vrstev, který zvolíte, a krátké sloupky nad překladem (a pod parapetem okna). U každého otvoru zadejte jeho vzdálenost od levého konce, šířku a hrubý otvor nahoře a dole měřený od podlahové konstrukce; dveře mají spodek 0.

## Podlahy a střechy

Podlaha má trámy napříč svou šířkou po rozpětí, obvodové trámy na obou koncích a, pokud je zaškrtnete, příčné vzpěry v polovině rozpětí. Střešní panel je štít: dvojice krokví v rozteči, kterou zadáte (jejich délka zahrnuje přesah okapu podél střechy), a hřebenový trám.

## Co dostanete

Každý panel ukazuje své díly na výkrese v měřítku s každým dílem označeným, seznam řezů podle značky a součet. Tabulka {{ui:Materiál k nákupu}} vnoří všechny řezy panelů do délek zásob, nejkratších, které pojmou řezy každé lišty. {{ui:Uložit dílenský výkres (SVG)}} zapíše výkres; tlačítko {{ui:CSV}} zapíše všechny seznamy řezů a seznam zásob.

## Umístění panelu do modelu

Pod každým panelem zadejte, kam patří (x, y, z v milimetrech a úhel), a stiskněte {{ui:Umístit jako pruty}}: každý díl se stane prvkem modelu s hrubým průřezem své velikosti a hmotností materiálu (asi 500 kg/m³ pro dřevo, ocel pro sloupky). Stěna běží podél úhlu od svého spodního levého konce se spodkem v z; trámy podlahy leží svým spodkem v z; štítová stěna střechy běží podél úhlu s z nahoře u horních pásnic stěny. Každá vrstva překladu je prvek vedle sebe. Opětovné stisknutí nahradí dříve umístěné prvky a {{ui:Odebrat umístěné prvky}} je odstraní; každé je jeden krok zpět. Analýza tyto prvky vynechává: nejsou to ocelové prvky rámu.

## Listy PDF

{{ui:Listy PDF}} uloží jednu stránku A3 pro každý panel: panel v měřítku se všemi díly označenými, celkové rozměry, seznam řezů a titulkový pruh.

Problémy v panelu {{ui:Problémy}}: otvor příliš blízko konce stěny nebo jiného otvoru, překlad, který se nevejde pod horní pásnice, nebo díl delší než nejdelší zásoba.

Panel {{ui:Problémy}} také uvádí **Rozhraní (LOD 350)** pro stěnové panely a betonové stěny: otvor, který přesahuje konec nebo horní hranu své stěny, dva otvory, které se překrývají, a otvor betonové stěny širší než 1000 mm bez příčné výztuže. Jsou to doporučení, stejná pravidla, která spouští audit BimCraftu; šířka je výchozí hodnota CadCraftu, ne norma.
