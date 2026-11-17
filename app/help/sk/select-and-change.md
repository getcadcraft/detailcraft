---
title: Výber oknom, presun, otočenie, zrkadlenie, zmena viacerých prvkov
summary: Ťahajte oknom na výber, ťahajte vybrané dielce na ich presun, presúvajte, otáčajte alebo zrkadlite výber (alebo jeho kópiu), prípadne naraz zmeňte profil, materiál, polohu alebo otočenie viacerých prvkov.
keywords: laso, ohrada, voľný výber, ťahanie, ťahanie a pustenie, presun ťahaním, prichytávanie, okno, prekríženie, výber boxom, výber viacerých, presun, otočiť, zrkadliť, kopírovať, zmeniť viac, viac prvkov, profil, materiál, poloha, otočenie, rôzne, os mriežky
from: 50b16f9a
---

Každá z týchto akcií je jeden krok späť: jedno {{key:Mod+Z}} ju všetku vráti.

## Výber oknom

- V {{ui:Plan}} a {{ui:Elevation}} ťahajte ľavým tlačidlom z prázdneho miesta. V {{ui:3D}} podržte {{key:Shift}} a ťahajte (obyčajné ťahanie otáča model).
- Ťahajte **doprava** pre okno: zoberie, čo je celé vnútri, nakreslené plnou čiarou.
- Ťahajte **doľava** pre prekrývacie okno: zoberie všetko, čo sa dotkne, nakreslené prerušovane.
- Podržte {{key:Shift}} pri začiatku ťahania, aby ste pridali k výberu namiesto nahradenia.
- Pôdorys alebo pohľad ponúka len to, čo zobrazuje: dielce odrezané nad pôdorysom alebo viac než 1 m od osi mriežky pohľadu sa nevyberú.
- {{key:Esc}} počas ťahania okno zruší.

### Laso

Zvoľte **Laso** pod {{ui:Dragging to select}} v [nastaveniach DetailCraft](topic:settings) a rovnaké ťahanie nakreslí voľnú čiaru namiesto obdĺžnika.

- Jeho prvý pohyb do strany rozhodne výber: **doprava** to, čo je celé vnútri (plná čiara); **doľava** to, čo sa dotýka (prerušovaná).
- Stlačte {{key:Space}} počas ťahania na prepnutie medzi vnútri, dotykom a **ohradou**: otvorená čiara, ktorá zoberie všetko, čo pretína (bodkovaná, oranžová).
- {{key:Shift}} na pridanie a {{key:Esc}} na zrušenie fungujú ako pri okne.

:::touch
Na dotykovej obrazovke jedným prstom posúvate pôdorys a pohľad ako predtým; dielce vyberajte klepnutím.
:::

V {{ui:Plan}} a {{ui:Elevation}} posúvajte pravým alebo stredným tlačidlom, keď je nástroj {{ui:Select}} zapnutý.

## Ťahaním presuňte dielce

1. Najprv vyberte dielce (klik, {{key:Shift}}+klik alebo okno).
2. Stlačte na jednom z vybraných dielcov a ťahajte. Celý výber sa presunie; prerušovaný obrys ukazuje, kam.
3. Pustením ho umiestnite. {{key:Esc}} pred pustením vráti všetko späť.

- V {{ui:3D}} a {{ui:Plan}} sa dielce presúvajú po úrovni. V {{ui:3D}} podržte {{key:Mod}} pri začiatku ťahania, aby sa presúvali nahor a nadol.
- V {{ui:Elevation}} sa presúvajú v pohľade: pozdĺž osi mriežky a nahor a nadol.
- Dielec, ktorý držíte, sa prichytí na priesečník mriežky, keď jeho koniec príde do pár pixelov od neho (priesečník sa rozsvieti a stavový riadok ho pomenuje). Inde sa presun pohybuje v krokoch po 10 mm.
- Stlačenie na dielec, ktorý nie je vybraný, stále otáča alebo posúva pohľad, takže ťahanie nikdy nepresunie niečo omylom.
- Ťahanie je jeden krok späť, rovnako ako {{ui:Move}}. Spoje nasledujú svoje prvky.

## Zmena vlastnosti na viacerých prvkoch

Vyberte dva alebo viac prvkov. Pod **Zmeniť pre všetky** v paneli {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Position}}: pre nosníky, stĺpy a diagonály medzi nimi.
- {{ui:Plate thickness (mm)}} a {{ui:Plate width (mm)}}: pre dosky.
- {{ui:Material}} a {{ui:Rotation (°)}}: pre všetky.

Pole zobrazí **Rôzne**, keď sa prvky nezhodujú. Vyberte alebo napíšte hodnotu a každý prvok, na ktorý sa vzťahuje, ju prevezme; stavový riadok uvedie, koľko sa zmenilo a koľko si ponechalo svoje.

Číselné polia v paneli {{ui:Properties}} prijímajú aj výpočet: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Výpočet, ktorý sa nedá prečítať, sa odmietne a stavový riadok uvedie, kde je chyba.

## Presun, otočenie alebo zrkadlenie

Vyberte prvky a pätky (stačí aj jeden), potom použite **Presunúť, otočiť, zrkadliť** v paneli {{ui:Properties}}. Spoje sa nepresúvajú samostatne: nasledujú svoje prvky. Ak presuniete nosník, ale nie jeho stĺp, stavový riadok uvedie, koľko spojov teraz spája presunutý prvok s prvkom, ktorý zostal, a [Problémy](topic:troubleshooting) uvedie, či už nesedia.

- **Presun:** zadajte x, y a z v milimetroch a zvoľte {{ui:Move}}. Alebo zvoľte {{ui:Pick two points}} (alebo stlačte {{key:M}}): kliknite na priesečník mriežky, z ktorého sa presúva, potom na ten, kam sa presúva. Prerušovaný obrys sleduje kurzor.
- **Otočenie v pôdoryse:** zadajte uhol (proti smeru hodinových ručičiek, pohľadom zhora) a zvoľte, okolo čoho sa otáča: stred výberu alebo priesečník mriežky. Stĺpy sa otáčajú s rámom.
- **Zrkadlenie:** zvoľte os mriežky. Zrkadlový obraz je rovnaký profil otočený opačne: I-profil si zachová príruby, U-profil smeruje opačne (jeho horná a dolná strana sa vymenia) a otvory a vyrezania idú s dielcom.
- Zaškrtnite **Ponechať originál (vytvoriť kópiu)**, aby výber zostal na mieste a presúvaný, otáčaný alebo zrkadlený bol kópia. Jej spoje sa skopírujú, keď je v [nastaveniach DetailCraft](topic:settings) zapnuté {{ui:Copy end plates and base plates with their members}}.

Otáčanie sa deje okolo zvislej osi a zrkadlenie je vo zvislej rovine, takže úrovne ostávajú vodorovné a pätky zvislé.
