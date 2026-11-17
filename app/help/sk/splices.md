---
title: Styky
summary: Spojte dva kusy nosníka alebo konca stĺpa na koniec skrutkovanými krycími plechmi príruby a stojiny.
keywords: styk, styk nosníka, styk stĺpa, krycí plech, styčný plech, plech príruby, plech stojiny, skrutkovaný styk, spoj, úsek stĺpa, pripojiť
from: 97d141c2
---

Skrutkovaný styk spája dva kusy jedného profilu I na koncoch: krycí plech na vonkajšej strane každej príruby a plech na každej strane stojiny, spojené skrutkami cez obidva kusy. DetailCraft prikráti kusy na medzeru, umiestni štyri plechy, vyvŕta otvory v plechoch aj v oboch kusoch, pridá skrutky a upozorní na okrajové vzdialenosti, rozstupy a uloženie.

## Kde to funguje

- Dva nosníky alebo dva úseky stĺpa **rovnakého profilu I**, spojené **koniec na koniec v priamke**: konce najviac 50 mm od seba, kusy rovnobežné a na jednej priamke (do 1 mm). Každý kus môže byť nakreslený v ľubovoľnom smere.
- Vodorovné, sklonené alebo zvislé kusy fungujú všetky.
- Dva kusy s iným výškovým rozmerom alebo šírkou príruby sa odmietnu, rovnako ako U-profily, uhlové profily a rúry.

## Pridanie stykov

1. Nakreslite dva kusy tak, aby sa stretli koniec na koniec. Ak chcete rozdeliť už nakreslený prvok, nakreslite ho znova ako dva kusy.
2. Vyberte jeden (alebo oba) a zvoľte {{ui:Styk}} v skupine {{ui:Spoje}} v ponuke {{ui:Viac}}.
3. Každý voľný spoj vybraných kusov s iným kusom rovnakého profilu dostane styk. Stavový riadok uvedie, koľko ich bolo.

Výber styku (kliknite na jeden z jeho plechov) zobrazí jeho nastavenia v pravom paneli. {{ui:Použiť na podobné (n)}} skopíruje styk na každý ďalší voľný spoj medzi kusmi rovnakého profilu.

## Nastavenia (mm)

| Nastavenie | Predvolená hodnota | Čo robí |
|---|---|---|
| Medzera medzi koncami | 10 | Každý kus sa skráti o polovicu tejto medzery |
| Priemer skrutky, otvor, trieda, rezerva dĺžky | 20, 22, A325, 30 | Ako pri čelných doskách |
| Hrúbka plechu príruby | 12 | Plech je rovnako široký ako príruba |
| Rady skrutiek príruby (na každej strane) | 3 | Rady cez prírubu na každej strane spoja |
| Rozstup skrutiek príruby | 75 | Pozdĺž prvku |
| Rozchod skrutiek príruby | 0 | Medzi dvoma radmi skrutiek; 0 = šírka príruby mínus 80 |
| Vzdialenosť od konca príruby | 40 | Od konca prvku po prvú skrutku a od poslednej skrutky po koniec plechu |
| Hrúbka plechu stojiny | 8 | Jeden na každej strane stojiny |
| Rady skrutiek stojiny | 3 | Smerom nahor po stojine, vycentrované |
| Stĺpce skrutiek stojiny (na každej strane) | 2 | Pozdĺž prvku na každej strane spoja |
| Rozstup skrutiek stojiny, nahor po stojine / pozdĺž prvku | 75, 75 | |
| Vzdialenosť od konca stojiny | 40 | Ako pri prírubách |
| Výška plechu stojiny | 0 | 0 = voľná stojina medzi zaoblením, mínus 10 hore a dole |
| Materiál plechu | A36 | Text |

Dĺžky plechov vyplývajú zo skrutiek: plech príruby = medzera + 2 × (2 × vzdialenosť od konca + (rady − 1) × rozstup); plechy stojiny podobne so svojimi stĺpcami. Pri predvolených hodnotách sú plechy príruby dlhé 470.

## Dobré vedieť

- Plechy patria **prvému nakreslenému kusu** z dvoch (jeho vlastnosti ho nazývajú prvý kus): zobrazia sa na jeho montážnom výkrese a dodajú sa s ním, skrutkované, nie zvárané. Montážny výkres druhého kusa zobrazuje len jeho otvory.
- Skrutky príruby uchytávajú prírubu a jej plech; skrutky stojiny uchytávajú stojinu a obidva plechy stojiny. Dĺžky skrutiek sú uvedené osobitne vo vlastnostiach.
- Upozornenia používajú rovnaké minimá EN 1993-1-8 ako ostatné spoje (koncová a okrajová vzdialenosť 1.2 × otvor, rozstup 2.2 × otvor pozdĺž a 2.4 × otvor naprieč), plus upozornenie na plech stojiny hlbší než voľná stojina a na skrutky príruby príliš blízko stojiny pre zaoblenie.
- DetailCraft styk nenavrhuje (bez kontroly pevnosti) a nevytvára výplňové plechy pre kusy rôznej hrúbky.
- Kopírovanie oboch kusov skopíruje aj ich styk; vymazanie ktoréhokoľvek kusa vymaže aj styk.
