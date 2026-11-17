---
title: Odeslání souborů NC do dílny
summary: Exportujte soubory DSTV NC pro každé označení dílu (I-profily, U-profily, úhelníky, HSS, plechy), zabalené do archivu ZIP, a zkontrolujte je dřív, než se dostanou ke stroji.
keywords: nc, nc1, dstv, cnc, stroj, linka nosníků, vrtací linka, řezání plechů, export, výroba, zip
from: 598b6091
---

DetailCraft zapisuje jeden soubor DSTV NC (`.nc1`) pro každé označení dílu u I-profilů, U-profilů, úhelníků, obdélníkových a kruhových HSS a plechů a zabalí je do jednoho archivu. Linky pro nosníky a stroje pro plechy tyto soubory čtou a podle nich pilují, vrtají a řežou.

## Export

1. Nejdřív vyřešte položky na kartě {{ui:Problémy}}: spoj, který nelze vytvořit, nepřidá žádné otvory.
2. Uložte model ({{key:Mod+S}}), aby soubory NC odpovídaly uloženému modelu.
3. Vyberte {{ui:Soubory NC}} ve skupině {{ui:Výstup}}.
4. Prohlížeč stáhne soubor `<name> NC.zip`. Stavový řádek uvede, kolik souborů obsahuje, a vypíše označení, pro která soubor nevznikl (úhelník nebo kruhová trubka s vybráním).

Uvnitř archivu je každý soubor pojmenován podle označení dílu: `b1.nc1`, `c1.nc1`, `p1.nc1` … Archiv není komprimovaný a otevře ho libovolný nástroj pro ZIP.

Pokud model nemá žádné díly, stavový řádek to oznámí.

## Co obsahuje každý soubor

- **Hlavička (ST):** název modelu jako zakázka, označení dílu jako výkres a kus, fáze 1, jakost oceli, množství, profil a jeho rozměry, hmotnost na metr a plocha nátěru na metr. Řezy pilou jsou kolmé.
- **Vnější obrysy (AK):** obrys stojiny s vyříznutými vybráními a obrys každé pásnice, zkrácený tam, kde vybrání odstraní.
- **Otvory (BO):** každý otvor se svou stranou, polohou a průměrem, včetně otvorů vytvořených koncovými a patními plechy.

Podrobně, pole po poli, s pravidly pro strany a souřadnice: [Pole souboru NC](topic:nc1-fields).

## Co se nezapisuje

- Úhelníky a kruhové trubky s vybráním: žádný soubor NC. Jejich označení jsou uvedena ve stavovém řádku.
- Otvory v kruhových trubkách (DetailCraft žádné nevytváří).
- Zkosení, vnitřní obrysy, značení dílů (scribing) a úhly řezu jiné než kolmé.
- Podlouhlé otvory (DetailCraft má jen kulaté otvory).

## Kontrola před obráběním

Vlastní testovací sada DetailCraft čte soubory NC zpět a ověřuje je, ale nebyly spuštěny na strojích vaší dílny.

1. Otevřete soubory v prohlížeči NC vaší dílny nebo v softwaru stroje a porovnejte je s dílenskými výkresy.
2. Před spuštěním celé dávky zkontrolujte na stroji jeden díl každého druhu.
3. Ověřte, jak váš software čte souřadnice y pásnic a strany U-profilů: DetailCraft měří y pásnice od zadní hrany a pokládá U-profily na záda, jak je kreslí norma (viz [Pole souboru NC](topic:nc1-fields#faces-and-coordinates)).
