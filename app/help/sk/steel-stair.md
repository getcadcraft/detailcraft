---
title: Generátor oceľového schodiska
summary: Oceľové schodisko z výšky medzi podlažiami, dĺžky priemetu a šírky: výstupné výšky a nášľapná hĺbka podľa zvoleného súboru pravidiel, podesty, zábradlia a tyčky, výkresy do dielne a rezací zoznam s hmotnosťami.
keywords: oceľové schodisko, generátor schodov, bočnica, stupeň, rebrovaný plech, rošt, ohnutý plechový stupeň, podesta, madlo, tyčky, výstupná výška, nášľapná hĺbka, osha, ibc, approved document k, rezací zoznam, hmotnosti, výkres do dielne
from: a4f0a985
---

Generátor schodov vytvorí celé oceľové schodisko z niekoľkých čísel: bočnice, stupne, podesty, keď je rameno príliš vysoké, zábradlia so stĺpikmi a tyčkami, otvory na upevnenie v bočniciach, rezací zoznam s hmotnosťami a výkresy do dielne. Začína v nástroji {{ui:Stair}}, ako jednoduché schodisko, s jedným prepínačom navyše.

## Umiestnenie oceľového schodiska

1. Zvoľte {{ui:Stair}} v skupine {{ui:Place}}, alebo stlačte {{key:S}}.
2. Vpravo zaškrtnite {{ui:Use the steel stair generator}}.
3. Zvoľte **súbor pravidiel** pre miesto stavby, **výšku** (podlažie po podlažie; 0 = až po ďalšiu úroveň), **dostupnú dĺžku priemetu** (0 = nech rozhodne pravidlo), **čistú šírku** a **typ stupňa**: rebrovaný plech, rošt alebo ohnutú plechovú vaňu.
4. Nastavte prierez bočnice, podesty (podľa pravidla, alebo číslo), zábradlia (na oboch stranách, na jednej, žiadne), výšku zábradlia a medzeru medzi tyčkami.
5. Kliknite na priesečník mriežky: to je päta prvej výstupnej výšky.

Vyberte schodisko (kliknite na bočnicu, stupeň alebo zábradlie), ak chcete zmeniť ľubovoľné nastavenie; vlastnosti zobrazujú výstupné výšky, nášľapnú hĺbku, sklon, ramená a podesty, oceľ v nich, rezací zoznam a zdroje súboru pravidiel.

## Súbory pravidiel

Súbor pravidiel obmedzuje tvar schodiska: výstupnú výšku a nášľapnú hĺbku, 2 × výstupná výška + nášľapná hĺbka, sklon, podestu, výšku zábradlia a najväčší otvor. DetailCraft ponúka tie nižšie; región je nastavenie, nie odhad. Otvorte **Odkiaľ sú čísla tohto súboru pravidiel** vo vlastnostiach: každé číslo uvádza svoj zdroj a hovorí, ako dobre bolo overené.

- **Medzinárodný stavebný predpis 2021 (IBC)**: výstupná výška 4 až 7 palcov, stupeň aspoň 11 palcov, zábradlia 34 až 38 palcov. Limit 12 ft medzi podestami je uvedený ako *nenačítaný* a čísla zábradlí ako načítané z podkladov citujúcich predpis: pred spoliehaním ich overte.
- **OSHA 29 CFR 1910.25 a 1910.29** (priemyselné štandardné schodiská): 30° až 50°, výstupná výška najviac 9.5 palca, stupeň aspoň 9.5 palca, aspoň 22 palcov široké, podesty rovnako široké ako schodisko a 30 palcov hlboké, horné madlo použité ako zábradlie 36 až 38 palcov. Tieto boli načítané priamo z nariadenia.
- **Approved Document K 2013, Anglicko** (všeobecné prístupové a úžitkové schodiská): rozsahy výstupnej výšky a nášľapnej hĺbky a 2 × výstupná výška + nášľapná hĺbka 550 až 700 mm, načítané z vládnej správy, ktorá ich tabuľkuje. Dokument DetailCraft nedáva výšku zábradlia, takže sa použije výška, ktorú nastavíte, a zoznam Problémy to uvádza.

Súbor pravidiel, ktorý tu nie je, sa nedomýšľa: schodisko potom nasleduje bežné pravidlo pohodlia 600 až 650 mm a uvedie, že pravidlo nemá.

## Čo sa vypočíta

- **Výstupné výšky a nášľapná hĺbka.** Najmenší počet výstupných výšok, ktorých 2 × výstupná výška + nášľapná hĺbka sedí v strede rozsahu pravidla, bez toho, aby nášľapná hĺbka klesla pod minimum pravidla. Ak je dĺžka priemetu zadaná, nášľapná hĺbka je priemet delený stupňami a čokoľvek mimo pravidla sa uvedie.
- **Ramená a podesty.** Rameno vyššie, než pravidlo dovoľuje, sa rozdelí podestou rovnako širokou ako schodisko a nie užšou než minimum pravidla; podesty môžete vyžiadať aj samostatne. Podesta je rám z dvoch bočných nosníkov a dvoch priečnych uholníkov pod krytom, na dvoch stĺpikoch.
- **Stupne.** Rebrovaný plech je zváraný plech (predvolene 6 mm; vzor sa do hmotnosti nepočíta). Plechová vaňa s ohnutým stupňom má záhyb na hrane a je priskrutkovaná cez stojinu bočnice: dva otvory o 2 mm väčšie než skrutka pri 0.3 a 0.7 hĺbky. Rošt sa kreslí ako plech rovnakej hmotnosti (hĺbka nosnej tyče × hrúbka ÷ rozstup); priečne tyče a lemovanie sa nepočítajú a rezací zoznam to uvádza.
- **Zábradlia.** Rúrkové horné madlo na stĺpikoch pozdĺž každého ramena a každej podesty, medzera medzi tyčkami, cez ktorú neprejde žiadna guľa väčšia než otvor pravidla (predvolene najviac 100 mm).

## Výkresy, rezací zoznam, export

- Rameno je jedna zostava; zábradlia sú ďalšia (obe strany sú rovnaká zostava, vytvorená dvakrát). Každá má zostavový výkres a výkres bočnice ukazuje jej otvory.
- **Výkres schodiska** (ST-…) ukazuje každú bočnicu ramena rovno, s polohami otvorov zapísanými od spodného konca, a detail stupňa: rez, hrana, záhyb a koncová príruba s jej otvormi.
- {{ui:Cut list and weights}} vo vlastnostiach uvádza každý profil a dĺžku s množstvami a kilogramami; {{ui:Download the cut list (CSV)}} ho uloží.
- Všetko ide do kusovníka, súborov NC a IFC ako bežné dielce (IfcMember, IfcColumn, IfcPlate).

## Dobré vedieť

- Toto je východisko, nie návrh. Nič sa neoveruje na pevnosť ani prehyb; súbor pravidiel iba obmedzuje tvar.
- Konce bočníc pri podlahách sú rezané kolmo a nie sú detailované; stĺpiky podesty stoja k podlahe pod ňou a nemajú pätné dosky.
- Umiestnenie schodiska ako jedného prvku v BimCraft ešte nie je zapojené.
