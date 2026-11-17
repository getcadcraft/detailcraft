---
title: Pohyb v 3D pohľade
summary: Otáčanie, posun a priblíženie myšou, touchpadom alebo dotykovou obrazovkou a kedy namiesto toho použiť Pôdorys a Pohľad.
keywords: otáčanie, otočenie, posun, priblíženie, pohyb, pohľad, kamera, touchpad, dotyk, pôdorys, pohľad, prispôsobiť, myš
from: 02c9c7b9
---

Pohľad má tri režimy, zvolené na lište pohľadu nad ním: {{ui:3D}}, {{ui:Pôdorys}} a {{ui:Pohľad}}. Tlačidlá myši robia v 3D iné veci než v Pôdoryse a Pohľade, takže si prečítajte obe tabuľky.

## V 3D

:::mouse
| Ak chcete | Urobte toto |
|---|---|
| Otočiť okolo modelu | Potiahnite ľavým tlačidlom |
| Posunúť | Potiahnite pravým tlačidlom, alebo podržte {{key:Shift}} a potiahnite ľavým tlačidlom |
| Priblížiť | Otočte koliesko, alebo potiahnite nahor a nadol stredným tlačidlom (koliesko stlačené) |
| Vybrať súčiastku | Kliknite na ňu (kliknutie, ktoré sa pohne menej ako pár pixelov) |
| Zobraziť celý model | Tlačidlo prispôsobenia na pravom konci lišty pohľadu |
:::

:::touch
| Ak chcete | Urobte toto |
|---|---|
| Otočiť okolo modelu | Potiahnite jedným prstom |
| Posunúť | Potiahnite dvoma prstami |
| Priblížiť | Štipnite dvoma prstami |
| Vybrať súčiastku | Ťuknite na ňu |
| Zobraziť celý model | Tlačidlo prispôsobenia na pravom konci lišty pohľadu |
:::

Kocka pohľadu vpravo hore (pod lištou pohľadu) sa otáča s modelom: kliknutím na stenu, hranu alebo roh sa pozriete odtiaľ, potiahnutím ju otočíte, alebo kliknutím na jej tlačidlo domov sa vrátite na začiatok. Pozrite [Kocka pohľadu](topic:view-cube).

Model sa otáča okolo stredu zobrazenia a koliesko približuje k stredu zobrazenia, nie k ukazovateľu. Ak sa chcete pozrieť zblízka na jeden roh, najprv ho posuňte do stredu a potom priblížte.

## V Pôdoryse a Pohľade

Tieto pohľady sa pozerajú priamo na model a nedajú sa otáčať.

:::mouse
| Ak chcete | Urobte toto |
|---|---|
| Posunúť | Potiahnite ľavým alebo pravým tlačidlom |
| Priblížiť | Otočte koliesko, alebo potiahnite nahor a nadol stredným tlačidlom |
| Vybrať súčiastku | Kliknite na ňu |
:::

:::touch
| Ak chcete | Urobte toto |
|---|---|
| Posunúť | Potiahnite jedným prstom |
| Priblížiť | Štipnite dvoma prstami (potiahnutie dvoma prstami tiež posúva) |
| Vybrať súčiastku | Ťuknite na ňu |
:::

## Na touchpade Macu

:::mac
- **Priblíženie:** potiahnite dvoma prstami nahor alebo nadol, alebo štipnite. Obe sa v pohľade prejavia ako priblíženie.
- **Otáčanie (3D):** stlačte touchpad a potiahnite jedným prstom. Ak používate klepnutie na kliknutie, dvojité klepnutie a potiahnutie funguje tiež, keď je ťahanie zapnuté v **Systémové nastavenia, Prístupnosť, Ovládanie ukazovateľa, Možnosti touchpadu**.
- **Posun (3D):** podržte {{key:Shift}} a potiahnite. Držanie {{key:Ctrl}} alebo {{key:Mod}} počas ťahania tiež posúva. Kliknutie dvoma prstami je pravé kliknutie, ale ťahanie s ním je na touchpade nepohodlné.
- **Posun (Pôdorys a Pohľad):** stačí potiahnuť.
- Magic Mouse nemá stredné tlačidlo: na posun použite potiahnutie so {{key:Shift}} a na priblíženie prejdenie prstom po jeho povrchu.
:::

Viac o pravom kliknutí a posune bez myši: [Klávesy, myši a touchpady](common:keys).

## Pôdorys a Pohľad uľahčujú umiestňovanie

V 3D sa priesečníky na rôznych úrovniach môžu na obrazovke prekrývať a kliknutie ide na najbližší bod. V Pôdoryse a Pohľade sa dajú vybrať iba body úrovne alebo osi mriežky, na ktorú sa pozeráte.

1. Zvoľte {{ui:Pôdorys}}, potom vyberte úroveň v zozname vedľa tlačidiel. Pohľad sa pozerá dole na túto úroveň; všetko viac než 1.5 m nad ňou je orezané.
2. Alebo zvoľte {{ui:Pohľad}}, potom vyberte písmenovú os mriežky ("Os A", "Os B" …). Pohľad sa pozerá priamo na túto os; zobrazená je iba oceľ vzdialená do 1 m od nej.

Pohľady sú iba na písmenových osiach mriežky. Ak chcete pracovať na rade číslovaných osí (rám idúci od A po B), použite {{ui:3D}}, alebo umiestňujte zadaním do formulára {{ui:Pridať podľa mriežky}}. Pozrite [Umiestnenie stĺpov, nosníkov a diagonál](topic:place-members#place-by-grid-without-clicking).

## Výber

- Kliknutím na súčiastku ju vyberiete. Zvýrazní sa farbou zvýraznenia a panel {{ui:Vlastnosti}} ju zobrazí.
- Kliknite na prázdny priestor alebo stlačte {{key:Esc}}, aby sa výber zrušil.
- Oceľ má prednosť pred betónom: kliknutie na stĺp vo vnútri priehľadnej pätky vyberie stĺp. Kliknite na pätku mimo stĺpa alebo na jeden z jej prútov, aby ste vybrali pätku.
- Kliknutím na skrutku alebo čelnú dosku vyberiete jej spoj.
- V Pôdoryse a Pohľade sa časti, ktoré sú orezané, nedajú kliknúť.
- Podržte {{key:Shift}} (alebo {{key:Ctrl}}, alebo {{key:Mod}}) a kliknite, aby ste súčiastku pridali do výberu alebo ju odobrali; {{key:Mod+A}} vyberie všetko. Výber oknom (potiahnutím rámčeka) zatiaľ nie je. Čo môžete robiť s viacerými: [Kopírovanie, vkladanie a duplikovanie](topic:copy-paste).

Môžete vybrať aj zo zoznamov: kliknite na značku v {{ui:Značky dielcov}} vľavo, na značku dielca na karte {{ui:Kusovník}}, alebo na {{ui:Vybrať}} vedľa riadka v {{ui:Problémy}}.

## Ak model vyzerá zle

- Stratili ste model? Zvoľte tlačidlo prispôsobenia.
- Zobrazenie je prázdne alebo sivé so správou o WebGL: pozrite [Riešenie problémov](topic:troubleshooting#the-3d-view-is-missing).
- Všetko funguje aj bez 3D zobrazenia okrem klikania v ňom: panely, správy a exporty bežia a {{ui:Pridať podľa mriežky}} umiestňuje prvky zadávaním.
