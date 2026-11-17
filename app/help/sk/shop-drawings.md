---
title: Vytvorenie dielenských výkresov
summary: Jeden list na každú značku dielca, vytvorený naraz: ukážte si ľubovoľný z nich a stiahnite jeden list alebo celú sadu ako PDF na formát A4 až A1 alebo ANSI B až D, s otvormi, vyrezaniami, kótami a popisovým poľom.
keywords: dielenský výkres, dielenské výkresy, všetky dielce, dávka, celá sada, výkres jedného dielca, výrobný výkres, pdf, detailný výkres, výkres kusu, tlač
from: d25fe035
---

DetailCraft vytvorí jeden list na každú značku dielca, pre každý nosník, stĺp, diagonálu a dosku v modeli, naraz: nemusíte ich vyberať jeden po druhom. Identické kusy zdieľajú značku, a teda aj list. Listy sa vytvárajú priamo z modelu; neukladajú sa a neupravujú sa.

## Vytvorenie celej sady

1. Zvoľte {{ui:Shop drawing}} v skupine {{ui:Output}}. Nič nemusí byť vybraté. Keď je vybraný dielec, okno sa otvorí na jeho liste. V paneli {{ui:Properties}} sa to isté tlačidlo volá {{ui:Shop drawing}} pre prvky a {{ui:Plate drawing}} pre spoje.
2. Otvorí sa náhľad s nadpisom značky dielca, napríklad „Dielenský výkres b1“. Prvý zoznam vedľa nadpisu obsahuje každú značku dielca s profilom, dĺžkou a množstvom: zvoľte jednu, aby ste videli jej list. Druhý zoznam mení veľkosť listu; celá sada sa vytvorí znova na nej (pozri [Výkresy zostavy a všeobecného usporiadania](topic:drawings#choose-the-sheet-size)).
3. Zvoľte {{ui:Download all}} (tlačidlo ukazuje počet listov) pre jedno PDF so stranou na každú značku dielca, `<name> Shop drawings.pdf`. Každý list hovorí „List 3 z 42“ vo svojom popisovom poli. Alebo zvoľte {{ui:Download this sheet}} pre ten, na ktorý sa pozeráte, `<name> <mark>.pdf`.
4. Zatvorte náhľad tlačidlom × alebo {{key:Esc}}.

Ak je {{ui:Shop drawing}} sivé, model zatiaľ nemá žiadne dielce.

## Čo je na liste

Pre I-profil:

- **Pohľad** na stojinu: dielec s vyrezanými rohmi, otvory v stojine ako kruhy a otvory v prírubách ako skryté (prerušované) čiary.
- **Pôdorys hornej príruby**, pozeraný zhora, keď má príruba otvory. Otvory dolnej príruby sú prerušované.
- **Rez** cez profil.
- **Kóty:** reťazené polohy otvorov pozdĺž dielca plus celková dĺžka, výšky otvorov v stojine, rozchod a veľkosti vyrezaní.
- **Zoznam otvorov:** každá skupina otvorov, napríklad „8 x Ø22 v hornej prírube“.
- **Zvar**, keď sú k dielcu zvarené dosky.
- **Popisové pole:** značka dielca, značka zostavy, profil, materiál, dĺžka, množstvo, hmotnosť na kus a celková, názov modelu a dátum.

Pre U-profil, uholník alebo dutý profil je list rovnaký, pozerá sa na stojinu alebo bok: steny rúrky sú skryté (prerušované) čiary, rez udáva hrúbku steny.

Pre dosku: plocha dosky s otvormi a jej hrana ako rez.

## Mierky

Mierka sa vyberie zo zoznamu (od 1:1 po 1:200), aby dielec sedel na liste. Dlhý a plytký dielec by bol pri jednej mierke príliš tenký na čítanie, preto, keď by hĺbka na papieri vyšla pod 30 mm, sa hĺbka kreslí vo väčšej mierke než dĺžka. Nadpis pohľadu to potom uvedie, napríklad „dĺžka 1:20, hĺbka 1:5 (nie v jednej mierke; rozhodujú kóty)“. Rozmery vždy čítajte z kót, nie meraním listu.

## Na čo myslieť

- Množstvo je počet dielcov s touto značkou v modeli. Značky sa môžu po zmene prečíslovať; pozri [Kontrola značiek a kusovníka](topic:marks-and-bom).
- Každý list je jeden dielec samostatne, bez zváracích značiek; zostavové výkresy (so zváracími značkami) a výkresy všeobecného usporiadania sú v [Výkresoch](topic:drawings). List sa v DetailCraft nedá upravovať ani poznačovať. Na označenie otvorte PDF v aplikácii na označovanie PDF, napríklad MarkupCraft.
- Popisové pole hovorí „DetailCraft laboratórne zostavenie — milimetre“.
- Text používa štandardné PDF písmo Helvetica. Znaky mimo západoeurópskej sady sa vytlačia ako „?“ a stavový riadok ich spočíta.

## Tlač

Otvorte stiahnuté PDF vo svojom prehliadači PDF a vytlačte ho na 100 % (bez „prispôsobiť na stránku“) na papier zvolenej veľkosti, ak chcete, aby uvedené mierky platili. Na menší list upravte mierku a spoľahnite sa na kóty.
