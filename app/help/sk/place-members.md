---
title: Umiestnenie stĺpov, nosníkov a diagonál
summary: Vyberte profil, materiál a polohu, potom kliknite na priesečníky mriežky alebo ich zadajte, aby ste umiestnili oceľové prvky.
keywords: stĺp, nosník, diagonála, prvok, umiestnenie, profil, materiál, otočenie, poloha, odsadenie, vložiť, pridať podľa mriežky
from: d6db0dc1
---

Prvky sa umiestňujú na priesečníky mriežky: stĺp na jeden, nosník alebo diagonála medzi dva. Najprv nastavte [mriežky a úrovne](topic:grids-and-levels).

## Výber nástroja a jeho možností

1. V skupine {{ui:Umiestnenie}} vyberte {{ui:Stĺp}} ({{key:C}}), {{ui:Nosník}} ({{key:B}}) alebo {{ui:Diagonála}} ({{key:R}}).
2. Panel {{ui:Vlastnosti}} vpravo sa zmení na "Umiestnenie stĺpa" (alebo nosníka, alebo diagonály) a zobrazí možnosti pre ďalší prvok:
   - {{ui:Profil}}: vyberte zo zoznamu. Rozmery sú zoskupené podľa katalógu (tvary W, profily U, uholníky, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS a vaše vlastné profily). Pozri [Katalóg profilov](topic:profile-catalog).
   - {{ui:Materiál}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 alebo S355.
   - {{ui:Poloha}}: kde je prierez na čiare medzi dvoma bodmi: {{ui:Horná plocha ocele na osi}}, {{ui:Vycentrované na osi}} alebo {{ui:Spodná plocha na osi}}.
   - {{ui:Otočenie (°)}}: otočí prierez okolo vlastnej osi prvku.
   - {{ui:Až do}} (iba stĺpy): {{ui:Ďalšia úroveň nad}}, alebo názov úrovne.
3. Pod možnosťami pole {{ui:Profil}} uvádza rozmery zvoleného prierezu, plochu, hmotnosť na meter a katalóg, z ktorého pochádza.

Predvolené hodnoty sú W12x50 z A992 pre stĺpy (vycentrované), W16x26 z A992 pre nosníky (horná plocha ocele na osi) a HSS6x6x1/4 z A500 Gr C pre diagonály (vycentrované). Možnosti zostanú nastavené, kým ich nezmeníte.

## Umiestnenie kliknutím

### Stĺp

1. Vyberte {{ui:Pôdorys}} a zvoľte úroveň, na ktorej stĺp začína.
2. Vyberte {{ui:Stĺp}}.
3. Presuňte kurzor blízko priesečníka. Najbližšia bodka sa rozsvieti a stavový riadok ju pomenuje.
4. Kliknite. Stĺp vedie od tejto úrovne k ďalšej úrovni nad ňou (alebo k úrovni {{ui:Až do}}). Stavový riadok napríklad uvedie: "Stĺp W12x50 pri A/1, úroveň 1 až úroveň 2."
5. Pokračujte v klikaní a umiestnite ďalšie. Keď skončíte, stlačte {{key:Esc}}.

Ak nad úrovňou, na ktorú ste klikli, nie je žiadna ďalšia úroveň, stavový riadok uvedie: "Nad úrovňou 2 pre stĺp nie je žiadna úroveň, ku ktorej by mohol dosiahnuť. Najprv pridajte úroveň."

### Nosník

1. Vyberte {{ui:Pôdorys}} a zvoľte úroveň nosníka.
2. Vyberte {{ui:Nosník}}.
3. Kliknite na prvý priesečník. Stavový riadok uvedie: "Od A/1 na úrovni 2. Teraz kliknite na druhý koniec (Esc zruší)." Za kurzorom sa pohybuje prerušovaná čiara.
4. Kliknite na druhý priesečník. Nosník sa zobrazí.
5. Kliknutím znova začnete ďalší nosník, alebo stlačte {{key:Esc}}.

{{key:Esc}} po prvom kliknutí zruší iba tento bod; druhé stlačenie {{key:Esc}} nástroj odloží.

### Diagonála

Diagonála vedie medzi dvoma priesečníkmi na rôznych úrovniach, preto je najjednoduchšie pracovať v {{ui:Pohľad}}.

1. Vyberte {{ui:Pohľad}} a zvoľte písmenovú os mriežky, na ktorej diagonála leží.
2. Vyberte {{ui:Diagonála}}.
3. Kliknite na spodný koniec, potom na horný.

Pohľady existujú iba pre písmenové osi mriežky. Pre diagonálu v rámu pozdĺž číslovanej osi (od A po B) použite {{ui:3D}} alebo formulár {{ui:Pridať podľa mriežky}} nižšie.

:::touch
Na dotykovej obrazovke ťuknite blízko priesečníka: ťuknutie vyberie najbližšiu bodku v krátkej vzdialenosti a ak žiadna nie je nablízku, nič sa nestane. Pred ťuknutím sa nezvýrazňuje nič, preto po každom ťuknutí skontrolujte správu v stavovom riadku. Ťahanie jedným prstom otáča alebo posúva pohľad namiesto umiestňovania.
:::

## Umiestnenie podľa mriežky bez klikania

Každý nástroj na umiestňovanie má formulár {{ui:Pridať podľa mriežky}} v spodnej časti panela {{ui:Vlastnosti}}. Funguje iba s klávesnicou a nevyžaduje 3D pohľad.

1. Vyberte nástroj, napríklad {{ui:Nosník}}.
2. Vo formulári {{ui:Pridať podľa mriežky}} zvoľte {{ui:Z osi (písmeno)}}, {{ui:Z osi (číslo)}} a {{ui:Z úrovne}}.
3. Zvoľte {{ui:Do osi (písmeno)}}, {{ui:Do osi (číslo)}} a {{ui:Do úrovne}}.
4. Vyberte {{ui:Pridať}}.

Pre stĺp alebo základ má formulár iba jeden bod: {{ui:Os (písmeno)}}, {{ui:Os (číslo)}} a {{ui:Úroveň}}.

## Zmena prvku po umiestnení

1. Stlačte {{key:Esc}} (alebo vyberte {{ui:Vybrať}}, {{key:V}}) a kliknite na prvok.
2. V paneli {{ui:Vlastnosti}} zmeňte {{ui:Názov}}, {{ui:Profil}}, {{ui:Materiál}}, {{ui:Poloha}} alebo {{ui:Otočenie (°)}}.
3. Ak ho chcete presunúť, upravte x, y a z pre {{ui:Začiatok}} alebo {{ui:Koniec}} v časti {{ui:Konce (x, y, z mm)}}. Názov osi každého konca sa zobrazí pod ním, alebo jeho súradnice, ak je mimo mriežky.

Každá zmena je jeden krok späť. Pod poľami vidíte {{ui:Značka dielca}}, {{ui:Zostava}}, {{ui:Rezná dĺžka}}, {{ui:Hmotnosť}} (hrubá: otvory a výrezy sa neodpočítavajú) a katalóg, z ktorého profil pochádza.

Prvky sa zatiaľ nedajú ťahať ani z nich vytvárať pole. Ak chcete vytvoriť podobný prvok, skopírujte a prilepte ho alebo ho duplikujte ({{key:Mod+D}}): pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).

## Zmazanie prvku

Vyberte ho a stlačte {{key:Delete}} alebo {{key:Backspace}}, prípadne vyberte {{ui:Zmazať}}. Spoje na ňom sa zmažú tiež. {{key:Mod+Z}} všetko obnoví.

## Čo treba vedieť

- **Ako stĺp smeruje.** Pri {{ui:Otočenie (°)}} 0 smerujú pásnice stĺpa pozdĺž x, k susedným číslovaným osiam mriežky. Nosník z osi 1 do osi 2 sa napája do pásnice; nosník z A do B sa napája do stojiny. Čelné dosky sa tvoria iba do pásnic, takže ak vaše nosníky idú od A do B, dajte týmto stĺpom otočenie 90.
- **Nosníky na úrovni visia pod ňou** pri predvolenej možnosti {{ui:Horná plocha ocele na osi}}. Vyberte {{ui:Vycentrované na osi}}, ak sú vaše úrovne osami prvkov.
- **Stĺpy idú od úrovne k úrovni.** Pre stĺp cez dve podlažia nastavte {{ui:Až do}} na vyššiu úroveň.
- **Šikmé nosníky** sú povolené (konce zvoľte na rôznych úrovniach), ale čelné dosky sa na nich zatiaľ netvoria.

Ďalej: [Pripojenie nosníkov k stĺpom čelnými doskami](topic:end-plates).
