---
title: Analýza rámu
summary: Sily, reakcie a priehyby nosníkov, stĺpov a diagonál podľa nakreslenej podoby, pri zaťažovacích prípadoch a kombináciách, ktoré nastavíte. Pomôcka na analýzu, nie kontrola podľa normy; kontroly návrhu sú samostatný krok.
keywords: analýza, statická analýza, analýza rámu, metóda tuhosti, zaťaženia, zaťažovací prípad, kombinácia, stále zaťaženie, úžitkové zaťaženie, vlastná tiaž, reakcie, ohybový moment, posúvajúca sila, normálová sila, priehyb, tvar pri priehybe, podpory, kĺbové, vetknuté, uvoľnenie, report, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Karta {{ui:Analýza}} v dolnej časti nájde sily v každom nosníku, stĺpe a diagonále modelu, reakcie v päťach stĺpov a to, ako veľmi sa prvky ohýbajú, pre zaťaženia, ktoré zadáte.

:::warning
Je to **pomôcka na analýzu, nie kontrola podľa normy**. Analýza neaplikuje žiadnu normu návrhu: nedimenzuje prvky, nekontroluje únosnosti ani spoje a nevolí súčinitele zaťažení. Inžinier skontroluje model, jeho zaťaženia a podpory a rozhodne, čo čísla znamenajú. Kontroly prvkov podľa ASCE 7 / AISC 360 alebo EN 1990 / EN 1993-1-1 pozri v [Kontrola oceľových prvkov podľa normy](topic:design-checks), samostatnom kroku, ktorý je tiež pomôckou.
:::

## Spustenie

1. Otvorte kartu {{ui:Analýza}}.
2. Vyberte v pohľade jeden alebo viac prvkov, zvoľte {{ui:Prípad}}, {{ui:Zaťaženie}} a {{ui:Smer}}, zadajte hodnotu a stlačte {{ui:Pridať zaťaženie}}. Zaťaženie rozložené pozdĺž prvku je v kN/m, bodové zaťaženie v kN. Najčastejšie je {{ui:Nadol (tiaž)}}.
3. Stlačte {{ui:Spustiť analýzu}}.

Tabuľka uvádza pre každý prvok najväčšiu normálovú silu N, posúvajúce sily Vz a Vy, ohybové momenty My a Mz, krútenie T a jeho priehyb, najväčší moment ako prvý; kliknutím na názov prvku ho vyberte. Pod ňou sú reakcie v každej podpore. {{ui:Zobraziť na modeli}} nakreslí tvar pri priehybe alebo jeden účinok ako diagram vedľa každého prvku s najväčšou hodnotou zapísanou na jeho mieste. Výsledky zastarajú hneď, ako sa model zmení: spustite analýzu znova.

Každé zaťaženie, prípad a nastavenie je jeden krok späť ({{key:Mod+Z}}) a uloží sa do súboru modelu.

## Zaťažovacie prípady a kombinácie

Analýza začína s tromi: **Stále** (vlastná tiaž prvkov z ich nakreslených prierezov a 7850 kg/m³), **Úžitkové** (prázdne) a **Stále + úžitkové**. Pridajte vlastné prípady (vietor, sneh …) a kombinácie: kombinácia sčíta prípady s faktormi, ktoré zadáte. Analýza je lineárna, takže sa každý prípad vyrieši raz a kombinácie sú súčty. Faktory zadajte sami alebo zvoľte návrhovú normu a nechajte {{ui:Vytvoriť kombinácie}} zapísať kombinácie normy ([Kontrola oceľových prvkov podľa návrhovej normy](topic:design-checks)).

## Z čoho sa rám skladá

- Nosníky, stĺpy a diagonály, každý na svojej pracovnej čiare (čiare, ktorú ste nakreslili), so skutočnými vlastnosťami prierezu odvodenými z jeho obrysu. Dosky, schodiská, pätky a skrutky nie sú súčasťou rámu.
- Prvok sa rozdelí tam, kde na ňom končí koniec iného prvku, takže nosník napojený na stĺp v polovici výšky sa k nemu pripojí práve tam.
- **Päty stĺpov**: vetknuté (začiatok) alebo kĺbové (držané na mieste a proti krúteniu, voľne sa otáčajú). Pätná doska vždy vytvorí podporu.
- **Konce nosníkov**: čelná doska je tuhá, šmyková platnička je kĺbová. {{ui:Konce nosníkov bez spoja}} nastaví ostatné. **Diagonály** sú na oboch koncoch kĺbové.
- Vyberte jeden prvok, ak chcete jeho koncom alebo päte stĺpa dať vlastné pravidlo.
- Všade oceľ: E = 200 GPa, G = 77 GPa.

Ak sa rám môže pohybovať bez ohybu prvkov — mechanizmus, napríklad kĺbové päty bez zavetrenia v jednom smere —, výpočet sa zastaví a uvedie, kde a ktorým smerom; zadržte ho podperou, tuhým spojom alebo diagonálou.

## Znamienka

N > 0 je ťah. My > 0 dáva ťah na lokálnej strane −z prvku: nosník prehýbaný vlastnou tiažou má My > 0. Mz > 0 dáva ťah na lokálnej strane −y. Priehyb sa meria od priamky medzi koncami prvku. Lokálna os z prvku smeruje nahor (pre stĺp: pozdĺž X); jeho lokálne osi sa otáčajú spolu s natočením prvku.

## Správa

{{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} obsahujú všetko: predpoklady, na ktorých bol rám postavený, prierezy, prípady a kombinácie, potom pre každý prípad a kombináciu reakcie (so súčtami zaťažení a reakcií, ktoré sa vyrovnávajú), sily v prvkoch a posuny a obálku každého prípadu. {{ui:Exportovať ako CraftScript}} zapíše ten istý rám ako skript pre pracovný priestor Script v PartCraft, kde knižničná funkcia `frame3d` rieši rám krok za krokom v čitateľnom kóde.

## Metóda

Metóda priamej tuhosti, lineárna a prvého rádu, pokiaľ nezaškrtnete {{ui:Teória 2. rádu (P-Delta)}}: dvojuzlové nosníkové stĺpy s osovou, krútiacou a dvoma ohybovými tuhosťami (bez deformácie od šmyku a bez deplanácie), uvoľnenia koncov statickou kondenzáciou, zaťaženia pozdĺž prvkov cez vlastné tvarové funkcie prvkov. Jej výsledky sú overené proti klasickým učebnicovým prípadom (konzoly, prostý, vetknutý a spojitý nosník, portálový rám, rošt v krútení, priehradová konštrukcia).

**Teória 2. rádu (P-Delta).** Zaškrtnite *Teória 2. rádu (P-Delta)* vedľa tlačidla Spustiť: každá kombinácia sa vyrieši znova s osovými silami prvkov pôsobiacimi na deformovaný rám (každý prvok rozdelený na 4 časti, takže sa počíta aj ohyb prvku medzi koncami), až kým sa osové sily ustália. Riadok výsledku uvádza počet prechodov a to, o koľko sa zväčšil bočný posun; momenty, priehyby, kontroly návrhu a správa potom používajú tieto výsledky. Nad elastickým kritickým zaťažením rámu sa výpočet zastaví a oznámi to. Je elastický s malými natočeniami, iba ohybový, bez redukcie tuhosti a bez fiktívnych zaťažení (nie sama metóda priameho rozboru AISC); dosky, steny a tuhé podlahy zostávajú prvého rádu.

**Vlastné frekvencie (konečné prvky).** Blok {{ui:Konečné prvky: vlastné frekvencie}} pod výsledkami nájde najnižšie tvary toho istého modelu pomocou výpočtového jadra konečných prvkov: nosníky s uvoľneniami koncov, dosky a steny ako rovinné štvoruzlové škrupiny, tuhé podlahy a podpory. Zvoľte počet tvarov (3, 6, 10 alebo 20) a prvok dosky (štvoruzlová škrupina pre hrubé alebo tenké dosky, alebo prvok pre tenké dosky) a stlačte {{ui:Nájsť frekvencie}}. Tabuľka uvádza frekvenciu každého tvaru v Hz, jeho periódu v sekundách a jeho efektívnu modálnu hmotnosť v smeroch X, Y a Z ako podiel hmotnosti, ktorá sa môže pohybovať; {{ui:Zobraziť na modeli}} nakreslí ľubovoľný tvar rovnako, ako sa kreslí tvar pri priehybe. Hmotnosť je hustota materiálu násobená objemom: zaťaženia nepridávajú hmotnosť a materiál bez hustoty nemá žiadnu. Správa (PDF, CSV) obsahuje túto tabuľku. Je elastická a len pre malé pohyby; seizmické ani veterné zaťaženie sa tu z normy nevytvára. Nejde o kontrolu podľa normy; výsledky kontroluje inžinier.

**Spektrum odozvy, časová história a pushover.** Pod vlastnými frekvenciami sú ďalšie tri bloky, ktoré používajú ten istý model konečných prvkov. Hmotnosť pre všetky je hustota materiálu plus nadol pôsobiace zaťaženia zaškrtnutých prípadov, každé vynásobené faktorom, ktorý zadáte (napríklad Stále s 1 a Úžitkové s podielom, ktorý počítate ako hmotnosť).

{{ui:Spektrum odozvy}} načíta každý tvar z ním zadaného spektra (tabuľka periódy a zrýchlenia, alebo tvar podľa ASCE 7 z SDS, SD1 a TL; tlačidlo {{ui:Použiť hodnoty bloku Seizmické}} skopíruje tieto hodnoty z bloku Seizmické) a spojí tvary pomocou CQC, SRSS, pravidla 10 % alebo absolútneho súčtu, potom zloží smery X, Y a Z (100 % + 30 % alebo SRSS). Uvádza základnú šmykovú silu, medziposchodové posuny, koncové sily prvkov a tabuľku tvarov, ktorá upozorní, keď použité tvary nesú menej než 90 % hmotnosti. Výsledky môžete škálovať faktorom alebo na základnú šmykovú silu, ktorú zadáte; blok túto silu sám nikdy nepočíta. Výsledky nemajú znamienko.

{{ui:Časová história}} spustí zemné zrýchlenie modálnou superpozíciou (presné pre priamky záznamu medzi bodmi) alebo priamou integráciou (Newmarkova metóda priemerného zrýchlenia s Rayleighovým tlmením). Vstupom je umelý sínus alebo impulz (vždy označený ako syntetický), záznam, ktorý vložíte, alebo textový súbor, ktorý otvoríte (čas a zrýchlenie, jedno zrýchlenie na riadok s krokom, alebo súbor v štýle PEER s hlavičkou DT=; v g alebo m/s²). Výsledkom je posun strechy a základná šmyková sila v závislosti od času, posun každej úrovne a obálka koncových síl prvkov. Modely s veľmi dlhým záznamom si ho ponechajú iba počas relácie.

{{ui:Pushover}} posúva strechu do strany malými krokmi (tvar ako prvý tvar alebo rovnomerný), s plastickými kĺbmi na koncoch prvkov s I-prierezom. Kĺb sa plastizuje pri plastickom momente, ktorý klesá s rastúcou osovou silou (odvodený z nakresleného tvaru, zaoblenia sa ignorujú); spevnenie je voliteľné, P-delta je voliteľné a gravitačná kombinácia sa môže najprv použiť. Výsledkom je krivka únosnosti (základná šmyková sila oproti posunu strechy), prvý kĺb a stav a plastické natočenie každého kĺbu. {{ui:Spustiť nelineárnu časovú históriu}} spustí tie isté kĺby pri zázname bloku Časová história na malých modeloch. Kĺby vznikajú len na koncoch prvkov (ak má kĺb vzniknúť v rozpätí, umiestnite tam uzol); prvok uvoľnený na oboch koncoch žiadny nemá, plastizácia a vzperná stabilita diagonál sa nemodelujú; dosky a steny zostávajú elastické; nie sú uvedené kritériá prijateľnosti. Nejde o kontrolu podľa normy; výsledky kontroluje inžinier. Nastavenia sa uložia spolu s modelom a správa obsahuje tabuľky.

Ešte nie je hotové: analýza vzperu, korekcia chýbajúcej hmotnosti pre spektrum odozvy, škálovanie záznamov, kritériá prijateľnosti pre kĺby (dynamická odozva je tu, vyššie), plošné a veterné zaťaženia vytvorené za vás (seizmické sily na podlažiach sú v [Kontrola betónových prvkov a tvorba seizmických zaťažení](topic:concrete-and-seismic)), excentricity prvkov, diagonály pôsobiace iba v ťahu. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
