---
title: Ponuky, klávesy a myš
summary: Vyberte štýl ponúk, ktorý sa zhoduje so spôsobom, akým už pracujete, dajte ľubovoľnému príkazu vlastný kláves, presuňte príkazy medzi kartami pásu a nastavte, čo robí koliesko a tlačidlá myši.
keywords: štýl ponúk, ponuky, pás, panel nástrojov, riadok príkazov, klávesové skratky, klávesy, prispôsobiť, premapovať, myš, koliesko, invertovať, smer priblíženia, stredné tlačidlo, pravé tlačidlo, posun, otáčanie, export, import, prepínanie, zvyklý, klasické kreslenie, pás pre oceľ
from: 4132c6e5
---

Príkazy DetailCraft sú rovnaké, nech k nim pristupujete akýmkoľvek spôsobom. **Štýl ponúk** rozhoduje iba o tom, kde sa príkazy nachádzajú na obrazovke, ako sa tam volajú a ktoré klávesy ich spúšťajú. Zvoľte ho v {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Ponuky, klávesy a myš}}; zmena platí okamžite a tento prehliadač si ju zapamätá.

## Tri štýly

| Štýl | Čo dostanete |
|---|---|
| {{ui:DetailCraft}} | Vlastný panel nástrojov DetailCraft (Súbor, Umiestniť, Spoje, Úpravy, Výstup) a jeho klávesy s jedným písmenom: {{key:V}} vybrať, {{key:B}} nosník, {{key:C}} stĺp, {{key:R}} diagonála, {{key:P}} doska, {{key:F}} pätka, {{key:S}} schodisko. Štart. |
| {{ui:Klasické kreslenie}} | Pre ľudí, ktorí píšu príkazy: malý pás ({{ui:Domov}}, {{ui:Pohľad}}, {{ui:Výstup}}) a riadok príkazov. Napíšte BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (späť), ZOOM, PLAN, 3D, DRAWINGS, NC alebo HELP a stlačte {{key:Enter}}; {{key:Enter}} na prázdnom riadku zopakuje posledný príkaz, {{key:Esc}} ho vymaže. Začnite písať kdekoľvek a písmená idú na riadok príkazov. Stredné tlačidlo posúva; v 3D {{key:Shift}} a stredné tlačidlo otáčajú. |
| {{ui:Pás pre oceľ}} | Karty tak, ako ich usporiadavajú programy na detailovanie ocele: {{ui:Modelovanie}} (prvky, betón, schodiská), {{ui:Detailing}} (spoje), {{ui:Úpravy}}, {{ui:Výkresy}} (výkresy a správy), {{ui:Výroba}} (súbory NC, IFC) a {{ui:Pohľad}}, s ponukou {{ui:Súbor}} a rýchlymi tlačidlami vpravo. Klávesy s jedným písmenom zostávajú. Stredné tlačidlo posúva; v 3D ľavé tlačidlo otáča. |

Každý štýl zachováva {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} a {{key:Mod+A}}. Pásy tiež obsahujú tlačidlá lišty pohľadu {{ui:3D}}, {{ui:Pôdorys}}, {{ui:Pohľad}} a {{ui:Prispôsobiť}}.

:::tip
Klávesa, ktorá patrí do rozloženia DetailCraft, ale váš štýl ju priradil inému príkazu, nerobí nič, a riadok stavu ukazuje, kam sa jej príkaz presunul (napríklad "V Môj pás pre oceľ je Stĺp: Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šípky si vždy zachovávajú svoj význam a kým je prvok len napoly umiestnený alebo kópia sleduje ukazovateľ, písmená patria DetailCraft.
:::

## Prispôsobte si to

1. Vyberte štýl, ktorý sa najviac približuje tomu, čo chcete, a potom kliknite na {{ui:Prispôsobiť…}}.
2. Na {{ui:Klávesy a ponuky}} nájdite príkaz (pomôže hľadacie pole). Kliknite na {{ui:Pridať kláves}} a stlačte kláves, alebo dva klávesy za sebou pre dvojpísmenový kláves. Kliknutím na kláves ho odstránite.
3. S pásom {{ui:Kde sa nachádza}} presuniete príkaz na inú kartu a panel, do ponuky {{ui:Súbor}}, alebo do {{ui:Iba klávesy}}.
4. Na {{ui:Myš}} nastavte koliesko, tlačidlá, ktoré posúvajú pôdorys a pohľady, a čo robí každé tlačidlo v 3D zobrazení.
5. Dajte mu názov a kliknite na {{ui:Uložiť}}.

Uloženie vstavaného štýlu vytvorí vašu vlastnú kópiu (napríklad "Môj pás pre oceľ"); vstavaný štýl sa nikdy nemení. Kláves priradený dvom príkazom sa zobrazí červenou a pred uložením ho treba opraviť.

## Myš

- **Koliesko myši**: {{ui:Posun nahor priblíži}} (štart) alebo {{ui:Posun nahor oddiali}}, a ako rýchlo. Štipnutie na touchpade vždy priblíži podľa pohybu prstov.
- **Posun pôdorysu a pohľadov pomocou**: stredného tlačidla, pravého tlačidla alebo oboch. S nástrojom {{ui:Vybrať}} ľavé tlačidlo vždy kreslí výberové okno.
- **Ťahanie v 3D zobrazení**: {{ui:Vlastné pre každý pohľad}} ponechá tlačidlá DetailCraft (ľavé otáča, stredné približuje, pravé posúva). Alebo nastavte každé tlačidlo na otáčanie, posun, priblíženie alebo nič; {{key:Shift}} s tlačidlom, ktoré otáča alebo posúva, tieto dve funkcie prehodí.

## Vezmite si ho so sebou

{{ui:Export}} uloží používaný štýl ako malý súbor `.ccinput.json`; {{ui:Import…}} pridá jeden, z iného počítača alebo od kolegu. Importovaný súbor môže ukazovať iba na vlastné príkazy DetailCraft: čokoľvek iné sa v ňom vynechá a spočíta sa v riadku stavu. {{ui:Zmazať tento štýl}} odstráni jeden z vašich vlastných.

:::note
Tieto nastavenia zostanú v tomto prehliadači. {{ui:Použiť tento štýl v každej aplikácii}} pod kartami štýlov spôsobí, že každá aplikácia sa otvorí vo zodpovedajúcom štýle (vlastný panel nástrojov, pás alebo Klasické kreslenie), so zmenami, ktoré ste urobili v každej aplikácii. DetailCraft nemá štýl s panelom ponúk: keď je pre každú aplikáciu zvolený panel ponúk inej aplikácie, DetailCraft si ponechá svoj vlastný panel nástrojov.
:::

Súvisiace: [Klávesy a myš](topic:keyboard) · [Nastavenia DetailCraft](topic:settings) · [Prechod z iného softvéru na detailovanie](topic:coming-from)
