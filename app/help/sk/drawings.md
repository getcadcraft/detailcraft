---
title: Všeobecné usporiadanie a montážne výkresy
summary: Vytvorte pôdorysy, pohľady a jeden montážny výkres pre každú montážnu značku z modelu, na listoch A4 až A1 alebo ANSI B až D, vydajte ich s písmenami revízií a stiahnite ako PDF, DWG alebo DXF.
keywords: skryté čiary, odstránenie skrytých čiar, prerušovaná, revízny oblak, oblaky, revízny trojuholník, pôdorys kotevných skrutiek, kotevné tyče, tabuľka tyčí, tabuľka pätných dosiek, vytyčovanie, vydanie, revízia, rev, tabuľka revízií, opätovné vydanie, záznam vydaní, sprievodka, dwg, dxf, súbor CAD, export výkresov, výkresy, všeobecné usporiadanie, ga, pôdorys, pohľad, montážny výkres, formát listu, formát papiera, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, tlač, mierka, popisové pole, odkaz na model
from: 709f8604
---

Vyberte {{ui:Výkresy}} v skupine {{ui:Výstup}}. DetailCraft vytvorí celú sadu z modelu v jeho aktuálnom stave. Nič sa neukladá: zmeňte model, otvorte {{ui:Výkresy}} znova a sada sa vytvorí znova.

## Čo je v sade

- **Pôdorysy**, jeden pre každú úroveň, na ktorej je niečo, pohľad zhora.
- **Pohľady**, jeden pre každú osovú čiaru s prvkami do 1 m od nej.
- **Pôdorys kotevných skrutiek**, keď model má pätné dosky: každá pätná doska zhora s jej stĺpom a kotevnými tyčami, mriežky s ich kótami, typický detail každého vzoru tyčí (BP1, BP2 …) s rozstupom tyčí a okrajovými vzdialenosťami, a dve tabuľky: kotevné tyče podľa značky (R1, R2 …: počet, priemer, dĺžka, vyčnievanie nad doskou, zapustenie, trieda) a pätné dosky podľa mriežky (stĺp, vzor, doska, tyče, horná hrana dosky). Stĺp mimo mriežky je určený svojimi súradnicami.
- **Montážne výkresy**, jeden pre každú montážnu značku: pohľad spredu, zhora a z čela, reťazené kóty k otvorom a okrajom dosiek, zoznam dielov, voľné skrutky a tyče a poznámky o zváraní a otvoroch. Každá zváraná doska má v pohľade spredu symbol rohového zvaru (AWS A2.4): šípka ukazuje na spoj, trojuholník pod referenčnou čiarou označuje stranu šípky, číslo naľavo je veľkosť zvaru v mm a kružnica tam, kde šípka prechádza do čiary, znamená zvar okolo celého obvodu.

**Skryté čiary.** Pôdorysy a pohľady nekreslia čiary dielu, ktoré úplne zakrýva diel pred ním (nosník vidieť z čela za stĺpom). Montážne výkresy kreslia dosku prerušovane tam, kde ju zakrýva hlavný diel: za stojinou v pohľade spredu (pozerané z −u strany dielu), pod hornou prírubou v pohľade zhora. Diely, ktoré sú v rovnakej hĺbke alebo sa hĺbkovo prekrývajú, sa kreslia celé.

Každý list má popisové pole s číslom výkresu, mierkou, názvom modelu, dátumom, číslom listu s formátom listu a odkazom na model: kód vytvorený z uloženého modelu, aby sa výtlačok dal priradiť k modelu, z ktorého pochádza.

## Voľba formátu listu

Vyberte formát v zozname v hornej časti okna {{ui:Výkresy}}: A4, A3, A2, A1, ANSI B (11 × 17 in), ANSI C (17 × 22 in) alebo ANSI D (22 × 34 in). Každý list je na šírku. Sada sa okamžite vytvorí znova na novom formáte a rovnaký formát sa použije aj pre dielenské výkresy. Je aj v [nastaveniach DetailCraft](topic:settings#drawings) a tento prehliadač si ho pamätá.

- Väčší list sa kreslí vo väčšej mierke. Mierky sú vždy štandardné (1:10, 1:20, 1:25, 1:50, 1:100 a podobne).
- Text má na každom liste rovnakú veľkosť, takže zostane čitateľný pri tlači.
- Na malom liste môže dlhá, tenká montáž dostať väčšiu mierku naprieč svojou hĺbkou než pozdĺž dĺžky. Názov pohľadu potom uvádza obe mierky a rozhodujú kóty.

## Vydanie výkresov a revízie

Riadok nad náhľadom hovorí, v akom stave je zobrazený list: **Ešte nevydané**, **Rev B, vydané … ; bez zmeny od vydania**, alebo červeno **Zmenené od rev B: potrebné opätovné vydanie**. Zoznam listov označuje vydané listy ich revíziou a tie, ktoré potrebujú opätovné vydanie.

- Napíšte, na čo je vydanie (spočiatku „Vydané na výrobu“) a zvoľte {{ui:Vydať tento list}}, alebo {{ui:Vydať zmenené listy}} pre každý list, ktorý je nový alebo sa zmenil od posledného vydania.
- Prvé vydanie listu je revízia A, potom B, C a tak ďalej (I a O sa preskakujú).
- Popisové pole ukazuje číslo výkresu s jeho revíziou („A-B1  rev B“) a vedľa neho tabuľka revízií uvádza posledné vydania: revízia, dátum a popis. Na malom liste zobrazí toľko, koľko sa zmestí.
- List sa „zmení“, keď sa zmení to, čo je na ňom nakreslené: presunutý prvok, nový otvor, prečíslovaná značka. Dátum, počet listov a samotná tabuľka revízií sa nerátajú. Zmena formátu listu mení každý list.
- Záznam vydaní sa uloží v súbore modelu a vydanie je jeden krok späť. [Súbor KISS](topic:kiss-export) nesie najnovšiu revíziu každého výkresu.

### Revízne oblaky

Od druhého vydania listu ďalej je každý diel alebo základ, ktorý sa zmenil, nakreslený vnútri revízneho oblaku s revíznym trojuholníkom, ktorý nesie písmeno.

- Kým sa list od posledného vydania mení, oblaky ukazujú, čo sa zmenilo od vtedy, s nadchádzajúcou revíziou v trojuholníku (rev B vydané a zmenené: trojuholníky hovoria C).
- Keď ho vydáte, oblaky zostávajú na liste tej revízie, ako na vytlačenej sade, kým sa list znova nezmení.
- Každý list oblakuje len zmeny, ktoré zobrazuje. Pôdorysy a pohľady nekreslia otvory ani výrezy, takže oblakujú prvok, ktorý sa presunul, otočil alebo zmenil veľkosť, alebo ktorého značka sa zmenila. Montážne výkresy a pôdorys kotevných skrutiek oblakujú aj nové alebo presunuté otvory a výrezy.
- Prečíslovaná značka sa počíta: keď zmena urobí z nosníka novú montáž, nosníky, ktorých značka sa posunula (B1 na B2), sa oblakujú na pôdorysoch a pohľadoch.
- Diel, ktorý bol zmazaný, nezanecháva nič na oblakovanie.
- Listy vydané pred zavedením revíznych oblakov (DetailCraft 0.4) začnú oblakovať od ďalšieho vydania.
- Oblaky sú v súboroch PDF, DXF a DWG a sami o sebe nikdy nie sú zmenou.

## Sťahovanie

Vyberte formát v zozname vedľa tlačidiel, potom {{ui:Tento list}} pre zobrazený list alebo {{ui:Všetky listy}} pre celú sadu.

- **PDF**: na tlač alebo odoslanie. {{ui:Všetky listy}} vytvorí jeden PDF súbor, jednu stranu na list, každá strana vo zvolenom formáte.
- **DWG**, vo formáte 2018, 2013, 2010, 2007, 2004 alebo 2000: na otvorenie listov v programe CAD. Pre starší program zvoľte starší formát.
- **DXF (R12)**: verzia, ktorú otvorí takmer každý program CAD.

List DWG alebo DXF sa kreslí v plnej veľkosti: jedna jednotka výkresu je jeden milimeter na papieri, takže sa tlačí v pomere 1:1 a každý pohľad si zachováva mierku, ktorú uvádza jeho názov. Každé pero je vlastná vrstva: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID a ďalšie, s hrúbkou čiary (DWG) a čiarkovaním. Texty sú napísané v textovom štýle DetailCraft (Arial). Kóty sú čiary a čísla, ktoré vidíte, nie objekty kót. {{ui:Všetky listy}} uloží súbory DWG alebo DXF do jedného zip archívu, jeden súbor na list.

:::note
DXF R12 nemá hrúbky čiar ani výplne: vrstvy si zachovajú svoje názvy, takže pri tlači nastavte perá podľa vrstvy, a vyplnené tvary sa vynechajú (stavový riadok povie, koľko).
:::

Tlačte v 100 % (bez „prispôsobiť strane“) na papier rovnakého formátu, ak chcete, aby uvedené mierky platili.
