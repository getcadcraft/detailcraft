---
title: Zpráva o materiálu a hmotnosti podle fází
summary: Délky řezů, počty, hmotnosti a plochy nátěru pro každou fázi, včetně šroubů a výztuže, jako tabulka, CSV nebo PDF.
keywords: zpráva, hmotnost, tuny, kg, nátěr, plocha nátěru, povrchová plocha, povlak, délka řezu, seznam materiálu, fáze, kusovník, csv, pdf
from: 337d6d92
---

Ve skupině {{ui:Výstup}} otevřete {{ui:Více}} a zvolte {{ui:Zpráva o hmotnosti podle fází}}, nebo otevřete kartu {{ui:Podle fází}} pod zobrazením. Ukazuje:

- **Souhrn podle fází**: pro každou fázi počet dílů, hmotnost oceli, plochu nátěru, šrouby a kotevní tyče a výztuž; pak součty.
- **Jednu tabulku pro každou fázi**: každou značku dílu v ní s typem, profilem, materiálem, délkou řezu, počtem, hmotností na kus, hmotností a plochou nátěru; pak její šrouby a kotevní tyče.

{{ui:Stáhnout CSV}} uloží stejné tabulky do jednoho souboru CSV (`<name> weight report.csv`). {{ui:Stáhnout PDF}} vytvoří zprávu na formátu listu z [nastavení DetailCraft](topic:settings#drawings), nejprve souhrn, za ním každá fáze; dlouhé tabulky pokračují na další stránce a každá stránka je očíslována.

## Jak se hodnoty počítají

- **Hmotnosti** jsou hrubé, jako v kusovníku: hmotnost profilu na metr násobená délkou řezu. Otvory a vruby se neodečítají.
- **Plocha nátěru** je vnější povrch průřezu podél délky řezu: u I-profilu každá plocha pásnic a stojiny, u plechu obě plochy a hrany, u trubky jen vnější strana. Konce a otvory se nepočítají.
- **Výztuž** je hmotnost prutů v základech fáze, z [rozvrhu ohýbání](topic:footings-and-rebar).
- Plechy a šrouby spoje se počítají ve fázi jeho hlavního prvku. Viz [Fáze](topic:phases).

Pokud je zapnuto [značení podle fází](topic:phases#marks-per-phase), každá fáze má své značky (1-b1, 2-b1). Pokud je vypnuto, značka se může objevit ve více fázích: každá fáze vypisuje kusy, které obsahuje.
