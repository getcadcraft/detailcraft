---
title: Export súboru KISS pre softvér na výrobu
summary: Pošlite kusovník do programu na riadenie výroby (MIS) ako súbor KISS 1.1: zostavy, súčiastky, fázy ako postupnosti, otvory, vyrezania a zvary.
keywords: kiss, kss, mis, riadenie výroby, kontrola výroby, odhad, kusovník, bom, export, fabtrol, postupnosť
from: 30cf3951
---

V skupine {{ui:Výstup}} otvorte {{ui:Viac}} a zvoľte {{ui:Súbor KISS pre softvér na výrobu}}. DetailCraft stiahne `<name>.kss`, súbor KISS ("Keep It Simple, Steel", verzia 1.1), obyčajný textový formát, z ktorého väčšina programov na riadenie výroby importuje kusovník.

## Čo je v ňom

- Hlavička: číslo zákazky (prvých osem písmen a číslic názvu modelu), názov modelu, dátum a čas a to, či sú rozmery metrické.
- Pre každú značku zostavy: jej hlavná súčiastka (množstvo = koľko zostáv), riadok výkresu (A-B1 a podobne, číslo výkresu zostavy), riadok zostavy (názov, typ, hmotnosť, celková dĺžka, výška a šírka), jeden riadok postupnosti pre každú [fázu](topic:phases), v ktorej je zostava, a riadky práce: otvory (koľko, priemer, hrúbka naprieč), vyrezania a zvary.
- Potom každá súčiastka k nej pripojená s **celkovým** množstvom (na zostavu × zostavy), ako to norma vyžaduje.
- Voľné skrutky a kotevné tyče na výkrese BOLTS, zostava FIELD.
- Každý riadok uvádza typ (W, C, L, HSS, PL alebo MI pre vlastný profil), rozmer, triedu, dĺžku rezu v milimetroch, názov súčiastky a hmotnosť.

## Imperiálne alebo metrické

V [Nastavenia DetailCraft](topic:settings) zvoľte, čo určuje **Veľkosti súboru KISS**:

- **Automaticky** (predvolené): imperiálne, keď je každý prvok profil AISC, inak metrické.
- **Imperiálne**: profily podľa ich označenia AISC (W 16X26, HSS 4X4X.250); dosky a skrutky, ktoré DetailCraft drží v milimetroch, na najbližších 1/16 palca; hmotnosti v librách.
- **Metrické**: európske profily podľa ich názvu (IPE300), dosky ako hrúbka X šírka v milimetroch; hmotnosti v kilogramoch.

Dĺžky sú vždy v milimetroch s dvoma desatinnými miestami, bez ohľadu na nastavenie: norma KISS to vyžaduje a prijímací program ich prevedie.

:::note
Triedy sa skrátia na osem znakov normy: A572 Gr 50 sa zmení na A572-50. Čiarky v názvoch sa menia na medzery (formát nemá úvodzovky). Pred spoliehaním sa overte jeden import vo svojom programe: súbory KISS z DetailCraft sú overené podľa normy tu, zatiaľ nie vo výrobnom programe.
:::
