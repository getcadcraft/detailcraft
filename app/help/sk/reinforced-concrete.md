---
title: Detailovanie železobetónových nosníkov, stĺpov, dosiek a stien
summary: Pridajte betónové nosníky, stĺpy, dosky a steny podľa osí, priraďte im prúty, strmene a väzby, skontrolujte preplátovanie a ukotvenie podľa ACI 318-19 alebo EN 1992-1-1 a vytvorte dielenské výkresy a výkazy ohýbania.
keywords: železobetón, výstuž, nosník, stĺp, doska, stena, strmene, väzby, háky, preplátovanie, preplátovanie spoja, ukotvenie, dĺžka ukotvenia, ld, ldh, lbd, krytie, rozstup, okrajové prúty, otvory, siete, značky prútov, výkaz ohýbania, výkaz výstuže, bbs, dielenský výkres, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

Karta {{ui:Betón}} pod zobrazením podrobne popisuje prúty betónových nosníkov, stĺpov, dosiek a stien. Zadáte rozmery a prúty; DetailCraft umiestni každý prút, očísluje ho, skontroluje preplátovania, ukotvenie, krytie a rozstupy podľa ustanovenia, z ktorého pochádzajú, a vykreslí ho.

:::warning
DetailCraft podrobne spracuje prúty, ktoré mu zadáte. Nenavrhuje ich. Každý výsledok je určený na kontrolu inžinierom.
:::

## Otvorenie karty Betón

Vyberte kartu {{ui:Betón}} pod zobrazením. V rozložení s pásom kariet je {{ui:Betón}} na karte {{ui:Modelovanie}} vedľa {{ui:Pätka}}. S príkazovým riadkom kresliaceho štýlu zadajte {{cmd:CONCRETE}}.

## Pridanie prvku podľa osí

Betónové prvky sa umiestňujú na osi a úrovne modelu, takže ich najskôr nastavte (ľavý panel).

1. V {{ui:Pridať podľa mriežky}} vyberte {{ui:Prvok}}: {{ui:Betónový nosník}}, {{ui:Betónový stĺp}}, {{ui:Doska}} alebo {{ui:Stena}}.
2. Vyberte osi a úrovne:
   - nosník ide od jedného priesečníka osí k druhému, jeho horná hrana na úrovni;
   - stĺp stojí na priesečníku, od jednej úrovne k druhej;
   - doska vyplní obdĺžnik medzi dvoma číslovanými a dvoma písmenovými osami, jej horná hrana na úrovni;
   - stena ide pozdĺž svojej stredovej osi od jedného priesečníka k druhému, od jednej úrovne k druhej.
3. Zadajte rozmer a vyberte {{ui:Pridať}}. Prvok sa vyberie a jeho polia sa otvoria na paneli {{ui:Vlastnosti}}.

Každý prvok sa začína s prútmi, ktoré sú počiatočnými hodnotami, nie návrhom: zmeňte ich na hodnoty inžiniera.

## Zmena prútov

Vyberte prvok (v zobrazení alebo podľa jeho názvu na karte {{ui:Betón}}). Panel {{ui:Vlastnosti}} zobrazí:

| Prvok | Čo nastavíte |
|---|---|
| Nosník | Šírka, výška, voľné krytie; horné a dolné prúty (veľkosť, počet, rovný alebo 90° hák na koncoch); bočné prúty; strmene (veľkosť, 135° alebo 90° háky, vzdialenosť prvého od líca podpory, dĺžka a rozstup koncovej zóny, rozstup v strede); dĺžky podpory; dĺžky preplátovania |
| Stĺp | Šírka, hĺbka, otočenie, krytie; pozdĺžne prúty na každej strane; väzby ako strmene; čo prúty robia na hornom konci (preplátovanie so stĺpom nad ním, háčik do podlažia alebo ukončenie) |
| Doska | Hrúbka, rozmery, horná hrana, krytia; spodná a horná výstužná sieť v každom smere (veľkosť a rozstup); U-prúty okolo hrán; okrajové prúty; otvory |
| Stena | Hrúbka, krytie, jedna alebo dve vrstvy, vodorovné a zvislé prúty, U-prúty na koncoch, zvislé prúty preplátované nad ním alebo nie, okrajové prúty, otvory |

Každá zmena je jeden krok späť. Zmena, ktorú nie je možné vytvoriť, sa odmietne a stavový riadok uvedie dôvod, napríklad "Otvor sa nezmestí do prvku aj s jeho krytím."

Strmene a väzby sú uzavreté, obidva háky sú v jednom rohu. Prúty nosníka zasahujú na koncoch do betónového stĺpa až po vzdialený líc stĺpa mínus krytie; tam, kde stĺp nie je, zadajte {{ui:Dĺžka podpory na začiatku (mm)}} a na konci.

## Preplátovanie a ukotvenie

Prúty dlhšie ako {{ui:Skladová dĺžka prúta (mm)}} (spočiatku 12000) sa rozrežú na kusy rovnakej dĺžky a preplátujú sa. Tabuľka {{ui:Preplátovanie a ukotvenie}} uvádza každé preplátovanie a každé ukotvenie: čo je potrebné, s ustanovením a jeho podmienkami, a čo má detail.

- Dĺžka preplátovania 0 znamená "podľa potreby": dĺžka, ktorú dáva norma, zaokrúhlená nahor na 25 mm.
- Zadajte vlastnú dĺžku preplátovania, aby sa použila namiesto nej. Ak je kratšia, než je potrebné, je to problém (pozri nižšie) a v tabuľke je označená *.
- Ukotvenie sa meria od líca podpory po koniec prúta vnútri podpory. Nosník bez známej podpory to uvedie namiesto kontroly.
- Stĺp stojaci na pätke sa preplátuje s čakacími prútmi pätky a na inom stĺpe s prútmi tohto stĺpa: ich preplátovanie sa tiež kontroluje.

**ACI 318-19** (SI): rovné prúty v ťahu 25.4.2.3 (tabuľka, s ψt, ψe, ψg, λ), štandardné háky 25.4.3.1 (ψr 1.6 a ψo 1.25 sa berú, ak nie je známe inak), prúty v tlaku 25.4.9.2, preplátovanie v ťahu 25.5.2.1 (trieda B, alebo trieda A v nastaveniach), preplátovanie v tlaku 25.5.5.1.

**EN 1992-1-1**: ukotvenie 8.4.4 s fbd z 8.4.2 (dobrá alebo zlá priľnavosť), preplátovanie 8.7.3 s α6 pre každý prút preplátovaný v jednom reze. γc, γs a αct sa začínajú odporúčanými hodnotami; nastavte hodnoty vašej národnej prílohy.

## Kontroly

Každá neúspešná kontrola je na paneli Problémy hlavnej aplikácie (zdroj {{ui:Kontroly výstuže}}) a v zozname {{ui:Kontroly}} prvku:

| Kontrola | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Krytie | Tabuľka 20.5.1.3.1, podľa expozície | Minimum priľnavosti, tabuľka 4.2 (krytie z hľadiska trvanlivosti zadáte vy) |
| Voľná vzdialenosť prútov | 25.2.1 (nosníky, dosky, steny), 25.2.3 (stĺpy) | 8.2 (2) |
| Rozstup strmeňov | 9.7.6.2.2 | 9.2.2 (6) |
| Minimálna výstuž nosníka | 9.6.1.2 | 9.2.1.1 (1) |
| Bočné prúty nosníka nad 900 mm hĺbky | 9.7.2.3 | nekontroluje sa |
| Pomer výstuže stĺpa, počet prútov | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Väzby: rozstup, veľkosť, priečne väzby | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Rozstup v doske, minimálna výstuž | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Rozstup v stene, minimálna výstuž, dve vrstvy | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Preplátovanie, ukotvenie | ako vyššie | ako vyššie |

Veľkosť kameniva nie je známa, preto sa voľná vzdialenosť kontroluje bez nej.

## Otvory, okrajové prúty a prúty hrán

Vyberte {{ui:Pridať otvor}} pod vybranou doskou alebo stenou a nastavte, kde je a aký je jeho rozmer. Prúty, ktoré ním prechádzajú, končia vo vzdialenosti krytia od jeho hrany. Okrajové prúty sa pridajú na každej strane, v tej istej vrstve, s polovicou plochy prerezaných prútov, o jednu dĺžku ukotvenia za otvorom. Ide o východiskové pravidlo DetailCraft, nie o ustanovenie normy: zmeňte {{ui:Okrajové prúty}} podľa inžiniera. Rohové prúty sa nepridávajú.

U-prúty okolo voľných hrán dosky a na koncoch steny majú ramená dlhé jednu dĺžku preplátovania.

## Značky prútov a výkaz ohýbania

Rovnaké prúty majú jednu značku: pätky si ponechávajú značky F (5F1), nosníky dostanú B, stĺpy C, dosky S a steny W (7B1, 8C1, 4S2). Karta {{ui:Výkaz ohýbania}} a jej CSV teraz uvádzajú každý prút konštrukcie, pätky ako prvé. {{ui:Výstup}} › {{ui:Viac}} › {{ui:Ohýbanie}} ho stiahne.

## Dielenské výkresy

Vyberte {{ui:Výstup}} › {{ui:Viac}} › {{ui:Výkresy výstuže}}, {{ui:Výkresy výstuže}} na karte {{ui:Betón}}, alebo {{ui:Dielenský výkres}} vedľa jedného prvku. Každý prvok dostane list s pohľadom (pre dosku pôdorysom), na ktorom sú všetky prúty a ich značky, zóny strmeňov alebo väzieb a preplátovania s kótami, a rezom v strede. Potom výkazy ohýbania prútov uvádzajú každú značku s náčrtom jej tvaru, jej rozmermi, počtom, reznou dĺžkou a hmotnosťou.

Listy sa vytvárajú zakaždým znova z modelu a znova po každej zmene, kým je okno otvorené: popisové pole nesie odkaz na model. Uložte {{ui:Tento list ako PDF}} alebo {{ui:Všetky listy ako PDF}}.

## Prúty zo súboru IFC

{{ui:Súbor}} › {{ui:Importovať IFC}} teraz načíta IfcReinforcingBar: prierez ťahaný pozdĺž jeho stredovej osi sa vráti ako rovné úseky a ohyby, s jeho priemerom, značkou a prvkom, ktorý ho drží. Prúty sa zachovajú tak, ako boli načítané (nepremieňajú sa na pravidlá nosníka alebo dosky), zobrazia sa v zobrazení, uvedú sa vo výkaze ohýbania a pri exporte IFC sa znova zapíšu. Správa o importe uvádza, koľko prútov bolo načítaných, akých veľkostí, v koľkých prvkoch a čo bolo vynechané a prečo.

Nosník, stĺp, doska alebo stena z tohto súboru, ktoré obsahujú prúty alebo ktorých materiál je betón, sa nepovažujú za oceľ; správa to uvádza. Vlastný export IFC z DetailCraft nesie definíciu každého betónového prvku, takže sa vráti ako sám seba a jeho prúty sa z nej znova vytvoria.

:::note
Čítanie vlastných súborov konštrukčného návrhového programu (nie IFC) ešte nie je hotové: exportujte z neho IFC.
:::

## Export IFC

Betónové nosníky, stĺpy, dosky (s otvormi) a steny sa exportujú ako IfcBeam, IfcColumn, IfcSlab a IfcWall, každý so svojimi prútmi ako IfcReinforcingBar (hlavné prúty, väzby pre strmene a priečne väzby, okrajové prúty) zoskupenými k nemu, každý prút ako prierez ťahaný pozdĺž stredovej osi so skutočnými oblúkmi v ohyboch, jeho značkou a reznou dĺžkou.
