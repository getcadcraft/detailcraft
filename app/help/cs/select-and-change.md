---
title: Výběr oknem, posun, otočení, zrcadlení a změna více prutů
summary: Přetažením vyberte oknem, přetažením vybraných dílů je posuňte, posuňte, otočte nebo zrcadlete výběr (nebo jeho kopii), nebo změňte profil, materiál, polohu nebo natočení více prutů najednou.
keywords: lasso, plot, volný výběr, tažení, přetažení, posun tažením, přichycení, okno, křížení, výběr obdélníkem, výběr tažením, vybrat více, posunout, otočit, zrcadlit, kopie, změnit více, několik prutů, profil, materiál, poloha, natočení, různé, osa
from: 50b16f9a
---

Každý z těchto kroků je jeden krok zpět: jedno {{key:Mod+Z}} to vše vrátí.

## Výběr oknem

- V {{ui:Půdorys}} a {{ui:Pohled}} táhněte levým tlačítkem z prázdného místa. V {{ui:3D}} držte {{key:Shift}} a táhněte (obyčejné tažení model otáčí).
- Táhněte **doprava** pro okno: vezme, co je celé uvnitř, nakresleno plnou čarou.
- Táhněte **doleva** pro okno křížení: vezme vše, čeho se dotkne, nakresleno čárkovaně.
- Držte {{key:Shift}} při začátku tažení, chcete-li přidat do výběru místo jeho nahrazení.
- Půdorys nebo pohled nabízí jen to, co zobrazuje: díly odříznuté nad půdorysem nebo vzdálené více než 1 m od osy pohledu se nevyberou.
- {{key:Esc}} během tažení okno zruší.

### Lasso

Zvolte **Lasso** v {{ui:Tažení při výběru}} v [Nastavení DetailCraft](topic:settings) a stejné tažení nakreslí volnou čáru místo obdélníku.

- Jeho první pohyb do strany rozhodne výběr: **doprava** vše, co je celé uvnitř (plná čára); **doleva** vše, čeho se dotkne (čárkovaně).
- Stiskněte {{key:Space}} během tažení pro přepínání mezi uvnitř, dotykem a **plotem**: otevřená čára, která vezme cokoli, co protne (tečkovaně, oranžově).
- {{key:Shift}} pro přidání a {{key:Esc}} pro zrušení fungují jako u okna.

:::touch
Na dotykové obrazovce jeden prst posouvá půdorys a pohled jako dříve; díly vybírejte klepnutím.
:::

V {{ui:Půdorys}} a {{ui:Pohled}} posouvejte pravým nebo prostředním tlačítkem, když je nástroj {{ui:Vybrat}} zapnutý.

## Přetažení dílů k posunu

1. Nejprve vyberte díly (klik, {{key:Shift}}+klik nebo okno).
2. Stiskněte na jednom z vybraných dílů a táhněte. Celý výběr se posune; čárkovaný obrys ukazuje, kam půjde.
3. Pusťte pro umístění. {{key:Esc}} před puštěním vrátí vše zpět.

- V {{ui:3D}} a {{ui:Půdorys}} se díly posouvají po úrovni. Držte {{key:Mod}} při začátku tažení v {{ui:3D}}, chcete-li je místo toho posouvat nahoru a dolů.
- V {{ui:Pohled}} se posouvají uvnitř pohledu: podél osy a nahoru a dolů.
- Díl, který držíte, se přichytí na průsečík os, když se jeho konec přiblíží na několik pixelů (průsečík se rozsvítí a stavový řádek jej pojmenuje). Jinak se posun děje po krocích 10 mm.
- Stisknutí dílu, který není vybrán, stále otáčí nebo posouvá pohled, takže tažení nikdy nic nepřesune omylem.
- Tažení je jeden krok zpět, stejně jako {{ui:Posunout}}. Spoje následují své pruty.

## Změna vlastnosti u více prutů

Vyberte dva nebo více prutů. Pod **Změnit u všech** v panelu {{ui:Vlastnosti}}:

- {{ui:Profil}}, {{ui:Poloha}}: pro nosníky, sloupce a ztužidla mezi nimi.
- {{ui:Tloušťka plechu (mm)}} a {{ui:Šířka plechu (mm)}}: pro plechy.
- {{ui:Materiál}} a {{ui:Natočení (°)}}: pro všechny.

Pole ukáže **Různé**, když se pruty neshodují. Vyberte nebo napište hodnotu a každý prut, na který se vztahuje, ji převezme; stavový řádek říká, kolik se změnilo a kolik si ponechalo vlastní.

Číselná pole v panelu {{ui:Vlastnosti}} přijímají také výpočet: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Výpočet, který nelze přečíst, se odmítne a stavový řádek uvede, kde je chyba.

## Posunout, otočit, zrcadlit

Vyberte pruty a patky (stačí i jeden), pak použijte **Posunout, otočit, zrcadlit** v panelu {{ui:Vlastnosti}}. Spoje se nepřesouvají samy: následují své pruty. Pokud posunete nosník, ale ne jeho sloupec, stavový řádek uvede, kolik spojů nyní spojuje posunutý prvek s tím, který zůstal, a [Problémy](topic:troubleshooting) uvede, pokud už nesedí.

- **Posun:** zadejte x, y a z v milimetrech a zvolte {{ui:Posunout}}. Nebo zvolte {{ui:Zadat dva body}} (nebo stiskněte {{key:M}}): klikněte na průsečík os, odkud posouváte, a pak na ten, kam. Čárkovaný obrys sleduje kurzor.
- **Otočení v půdorysu:** zadejte úhel (proti směru hodinových ručiček při pohledu shora) a zvolte, kolem čeho se otáčí: střed výběru nebo průsečík os. Sloupce se otáčejí s rámem.
- **Zrcadlení:** zvolte osu. Zrcadlový obraz je týž profil otočený opačně: profil I si zachová pásnice, U-profil je otočen na druhou stranu (horní a dolní část se prohodí), a otvory a výřezy jdou s dílem.
- Zaškrtněte **Zachovat originál (vytvořit kopii)**, chcete-li nechat výběr na místě a posunout, otočit nebo zrcadlit kopii. Její spoje přijdou s ní, když je v [Nastavení DetailCraft](topic:settings) zapnuto {{ui:Kopírovat čelní desky a patní plechy spolu s pruty}}.

Otáčení probíhá kolem svislé osy a zrcadlení je ve svislé rovině, takže úrovně zůstávají vodorovné a patky svislé.
