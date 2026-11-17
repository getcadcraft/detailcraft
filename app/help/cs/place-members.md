---
title: Umístění sloupů, nosníků a ztužidel
summary: Vyberte profil, materiál a polohu, pak klikněte na průsečíky os nebo je zadejte a umístěte ocelové prvky.
keywords: sloup, nosník, ztužidlo, prvek, umístit, profil, materiál, natočení, poloha, odsazení, vložit, přidat podle os
from: d6db0dc1
---

Prvky se umísťují na průsečíky os: sloup na jeden, nosník nebo ztužidlo mezi dva. Nejdřív nastavte [osy a úrovně](topic:grids-and-levels).

## Výběr nástroje a jeho možností

1. Vyberte {{ui:Sloup}} ({{key:C}}), {{ui:Nosník}} ({{key:B}}) nebo {{ui:Ztužidlo}} ({{key:R}}) ve skupině {{ui:Umístit}}.
2. Panel {{ui:Vlastnosti}} vpravo se změní na "Umístit sloup" (nebo nosník, nebo ztužidlo) a ukáže možnosti pro další prvek:
   - {{ui:Profil}}: vyberte ze seznamu. Velikosti jsou seskupeny podle katalogu (tvary W, U-profily, úhelníky, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS a vaše vlastní průřezy). Viz [Katalog profilů](topic:profile-catalog).
   - {{ui:Materiál}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 nebo S355.
   - {{ui:Poloha}}: kde průřez sedí na úsečce mezi dvěma body: {{ui:Horní hrana oceli na ose}}, {{ui:Vycentrováno na ose}} nebo {{ui:Spodní hrana na ose}}.
   - {{ui:Natočení (°)}}: otočí průřez kolem vlastní osy prvku.
   - {{ui:Až do}} (jen u sloupů): {{ui:Další úroveň nahoru}}, nebo název úrovně.
3. Pod možnostmi ukazuje pole {{ui:Profil}} rozměry zvoleného průřezu, plochu, hmotnost na metr a katalog, ze kterého pochází.

Výchozí hodnoty jsou W12x50 v A992 pro sloupy (vycentrované), W16x26 v A992 pro nosníky (horní hrana oceli na ose) a HSS6x6x1/4 v A500 Gr C pro ztužidla (vycentrované). Možnosti zůstávají nastavené, dokud je nezměníte.

## Umísťování klikáním

### Sloup

1. Vyberte {{ui:Půdorys}} a zvolte úroveň, ve které sloup začíná.
2. Vyberte {{ui:Sloup}}.
3. Přesuňte ukazatel blízko průsečíku. Nejbližší tečka se rozsvítí a stavový řádek ji pojmenuje.
4. Klikněte. Sloup vede od této úrovně k další nahoru (nebo k úrovni {{ui:Až do}}). Stavový řádek hlásí například "Sloup W12x50 na A/1, Úroveň 1 až Úroveň 2."
5. Pokračujte v klikání pro další sloupy. Až skončíte, stiskněte {{key:Esc}}.

Pokud nad úrovní, na kterou jste klikli, není žádná úroveň, stavový řádek hlásí: "Nad úrovní Úroveň 2 není žádná úroveň, do které by sloup mohl sahat. Nejdřív přidejte úroveň."

### Nosník

1. Vyberte {{ui:Půdorys}} a zvolte úroveň nosníku.
2. Vyberte {{ui:Nosník}}.
3. Klikněte na první průsečík. Stavový řádek říká "Od A/1 na Úroveň 2. Nyní klikněte na druhý konec (Esc zruší)." Čárkovaná čára sleduje ukazatel.
4. Klikněte na druhý průsečík. Nosník se objeví.
5. Klikněte znovu pro další nosník, nebo stiskněte {{key:Esc}}.

{{key:Esc}} po prvním kliknutí zruší jen tento bod; druhé {{key:Esc}} nástroj odloží.

### Ztužidlo

Ztužidlo vede mezi dvěma průsečíky v různých úrovních, proto je to nejsnazší v {{ui:Pohled}}.

1. Vyberte {{ui:Pohled}} a zvolte písmenovou osu, na které je ztužidlo.
2. Vyberte {{ui:Ztužidlo}}.
3. Klikněte na spodní konec, pak na horní.

Pohledy existují jen pro písmenové osy. Pro ztužidlo v rámu podél číslované osy (od A do B) použijte {{ui:3D}} nebo formulář {{ui:Přidat podle os}} níže.

:::touch
Na dotykové obrazovce klepněte blízko průsečíku: klepnutí vybere nejbližší tečku v krátké vzdálenosti a nic neudělá, pokud žádná tečka není blízko. Před klepnutím se nic nezvýrazní, proto po každém klepnutí zkontrolujte zprávu ve stavovém řádku. Tažení jedním prstem otáčí nebo posouvá pohled a prvek neumísťuje.
:::

## Umístění podle os bez klikání

Každý nástroj pro umísťování má formulář {{ui:Přidat podle os}} dole na panelu {{ui:Vlastnosti}}. Funguje jen s klávesnicí a nepotřebuje 3D pohled.

1. Vyberte nástroj, například {{ui:Nosník}}.
2. Ve formuláři {{ui:Přidat podle os}} zvolte {{ui:Od osy (písmeno)}}, {{ui:Od osy (číslo)}} a {{ui:Od úrovně}}.
3. Zvolte {{ui:Do osy (písmeno)}}, {{ui:Do osy (číslo)}} a {{ui:Do úrovně}}.
4. Zvolte {{ui:Přidat}}.

U sloupu nebo základu má formulář jen jeden bod: {{ui:Osa (písmeno)}}, {{ui:Osa (číslo)}} a {{ui:Úroveň}}.

## Změna prvku po umístění

1. Stiskněte {{key:Esc}} (nebo vyberte {{ui:Vybrat}}, {{key:V}}) a klikněte na prvek.
2. Na panelu {{ui:Vlastnosti}} změňte {{ui:Název}}, {{ui:Profil}}, {{ui:Materiál}}, {{ui:Poloha}} nebo {{ui:Natočení (°)}}.
3. Chcete-li ho posunout, upravte x, y a z u {{ui:Začátek}} nebo {{ui:Konec}} v poli {{ui:Konce (x, y, z mm)}}. Pod každým koncem se ukazuje název jeho osy, nebo souřadnice, pokud je mimo mřížku.

Každá změna je jeden krok zpět. Pod poli vidíte {{ui:Označení dílu}}, {{ui:Sestava}}, {{ui:Délka řezu}}, {{ui:Hmotnost}} (hrubá: otvory a vybrání se neodečítají) a katalog, ze kterého profil pochází.

Prvky zatím nelze tahat ani z nich vytvářet pole. Chcete-li vytvořit podobný prvek, zkopírujte a vložte ho, nebo ho duplikujte ({{key:Mod+D}}): viz [Kopírování, vložení a duplikace](topic:copy-paste).

## Smazání prvku

Vyberte ho a stiskněte {{key:Delete}} nebo {{key:Backspace}}, případně vyberte {{ui:Smazat}}. Spoje na něm také zmizí. {{key:Mod+Z}} vrátí vše zpět.

## Co je dobré vědět

- **Kam sloup směřuje.** Při {{ui:Natočení (°)}} 0 směřují pásnice sloupu podél x, k sousedním číslovaným osám. Nosník z osy 1 do osy 2 se napojí na pásnici; nosník z A do B na stojinu. Koncové plechy se připojují jen k pásnicím, takže pokud vaše nosníky vedou z A do B, dejte těmto sloupům natočení 90.
- **Nosníky na úrovni visí pod ní**, při výchozí volbě {{ui:Horní hrana oceli na ose}}. Zvolte {{ui:Vycentrováno na ose}}, pokud vaše úrovně jsou osy prvků.
- **Sloupy vedou od úrovně k úrovni.** U sloupu přes dvě podlaží nastavte {{ui:Až do}} na vyšší úroveň.
- **Šikmé nosníky** jsou povoleny (zvolte konce v různých úrovních), ale koncové plechy na nich zatím nevznikají.

Dále: [Připojení nosníků ke sloupům koncovými plechy](topic:end-plates).
